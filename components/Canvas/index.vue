<template>
  <div class="overflow-auto rounded shadow resize-x bg-surface light">
    <HeaderGlobal />
    <HeaderNav />
    <CmsElementWrapper v-for="widget in rootElements" v-bind="widget" :key="widget.id">
      <CmsPageComponent :widget="widget" :page-data="data" />
    </CmsElementWrapper>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import type { Page } from '~/types/page'

const { data } = await useFetch<Page>('/api/page')

const rootElements = computed(() => data.value?.attributes.widgets.filter(el => el.parentId === 'root'))
</script>
