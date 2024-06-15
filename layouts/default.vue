<template>
  <div class="">
    <!-- <NuxtPage /> -->
    <div class="flex h-full min-h-screen font-secondary dark text-clear">
      <div class="p-4 bg-surface min-w-[32px] shrink text-clear h-[100dvh]">
        Side Bar
      </div>

      <div class="flex flex-col w-full h-full max-h-screen">
        <div class="flex justify-center py-4 border-b border-b-subtle shadow-inset bg-surface">
          Nav Bar
        </div>

        <div class="w-full h-full p-4 overflow-y-scroll bg-surface-low grow">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup />
