<template>
  <div
    v-if="editActive"
    class="w-full p-4 border-transparent rounded-sm border-5"
    :class="{ 'border-5 border-emerald-600 bg-emerald-900/20 z-10': isIdActive(attributes?.id as string) }"
    @mouseover.stop="setActiveElement(attributes)"
    @mouseleave.stop="setActiveElement(attributes)"
  >
    <slot />
  </div>

  <slot v-else />
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElementWrapper'
})

const { isIdActive, setActiveElement, editActive } = useElementStore()

const attributes = useAttrs()
</script>
