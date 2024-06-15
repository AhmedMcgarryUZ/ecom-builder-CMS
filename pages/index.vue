<template>
  <Suspense>
    <template #default>
      <div class="overflow-hidden rounded shadow bg-surface light">
        <HeaderGlobal />
        <HeaderNav />
        <PageComponent v-for="widget in rootElements" :key="widget.id" :widget="widget" :page-data="data" />
        <Footer />
      </div>
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import type { Page } from '~/types/page'

const { data } = await useFetch<Page>('/api/page')

const rootElements = computed(() => data.value?.attributes.widgets.filter(el => el.parentId === 'root'))
</script>
