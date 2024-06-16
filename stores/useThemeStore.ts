const useThemeStore = defineStore('useThemeStore', () => {
  const cmsMode = ref<'light' | 'dark'>('light')

  const toggleCmsTheme = () => {
    cmsMode.value === 'light' ? cmsMode.value = 'dark' : cmsMode.value = 'light'
  }

  const getCmsMode = computed(() => cmsMode)

  return { toggleCmsTheme, getCmsMode }
})

export default useThemeStore
