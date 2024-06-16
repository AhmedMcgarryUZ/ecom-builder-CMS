<template>
  <div class="py-4 bg-surface">
    <div class="container flex justify-end gap-4 mx-auto">
      <div class="h-[32px] w-[32px] rounded-full bg-surface-low flex items-center justify-center cursor-pointer" @click="elementStore.toggleEditActive">
        <BaseIcon name="material-symbols:edit" class="text-clear" />
      </div>

      <div v-if="themeStore.getCmsMode.value === 'dark'" class="h-[32px] w-[32px] rounded-full bg-surface-low flex items-center justify-center cursor-pointer" @click="themeStore.toggleCmsTheme">
        <BaseIcon name="material-symbols:sunny" class="text-clear" />
      </div>
      <div v-else class="h-[32px] w-[32px] rounded-full bg-surface-low flex items-center justify-center cursor-pointer" @click="themeStore.toggleCmsTheme">
        <BaseIcon name="material-symbols:mode-night" class="text-clear" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const elementStore = useElementStore()
const themeStore = useThemeStore()
</script>
