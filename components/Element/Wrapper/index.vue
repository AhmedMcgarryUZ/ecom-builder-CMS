<template>
  <div
    v-if="elementStore.isEditing"
    class="w-full p-4 border-transparent rounded-sm border-5"
    :class="{ 'border-5 border-emerald-600 bg-emerald-900/20 z-10': isHovering }"
    @mouseover.stop="isHovering = true"
    @mouseleave.stop="isHovering = false"
    @click.stop="elementStore.setActiveElement(attributes)"
  >
    <slot />
  </div>

  <slot v-else />
</template>

<script setup lang="ts">
const elementStore = useElementStore()
const isHovering = ref()
const attributes = useAttrs()
</script>
