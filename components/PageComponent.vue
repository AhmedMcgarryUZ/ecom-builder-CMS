<template>
  <div v-if="widget">
    <component :is="`Fe${widget.is}`" v-if="widget.slots.length" v-bind="widget">
      <template
        v-for="child in childWidgets"
        :key="child.id"
      >
        <PageComponent
          v-if="child"
          :widget="child"
          :page-data="pageData"
        />
      </template>
    </component>
    <component :is="`Fe${widget.is}`" v-else v-bind="widget" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Page } from '~/types/page'
import type { Widget } from '~/types/widget'

  interface Props {
    widget: Widget;
    pageData: Page;
  }

const props = defineProps<Props>()

const childWidgets = computed(() => {
  return props.widget.slots.map(id =>
    props.pageData.attributes.widgets.find(widget => widget.id === id)
  ).filter(Boolean)
})
</script>
