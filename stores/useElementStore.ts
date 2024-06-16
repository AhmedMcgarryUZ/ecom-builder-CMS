const useElementStore = defineStore('useElementStore', () => {
  const element = ref()
  const isEditing = ref(false)

  const activeElement = computed(() => element)
  const isIdActive = computed(() => (id: string | null) => element.value?.id === id)

  const setActiveElement = (widget: any) => {
    element.value = widget
  }

  const toggleEditActive = () => {
    isEditing.value = !isEditing.value
  }

  return {
    activeElement,
    isIdActive,
    isEditing,
    toggleEditActive,
    setActiveElement
  }
})

export default useElementStore
