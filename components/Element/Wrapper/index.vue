<template>
  <div class="w-full p-4 border-transparent rounded border-5" :class="{ 'border-5 border-emerald-600 bg-emerald-900/20 z-10': isHovering}" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElementWrapper'
})
const { setActiveElement } = useElementStore()

const isHovering = ref()

const attributes = useAttrs()

const handleMouseOver = () => {
  isHovering.value = true
  setActiveElement(attributes)
}

const handleMouseLeave = () => {
  isHovering.value = false
  setActiveElement(attributes)
}
</script>
