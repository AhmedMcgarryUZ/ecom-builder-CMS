<template>
  <Suspense>
    <template #default>
      <CmsCanvas />
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>
