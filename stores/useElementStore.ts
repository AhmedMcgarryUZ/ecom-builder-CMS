const useElementStore = defineStore('useElementStore', () => {
  const element = ref()

  const setActiveElement = (widget: any) => {
    element.value = widget
  }

  return {
    element,
    setActiveElement
  }
})

export default useElementStore
