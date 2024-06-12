// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  pinia: {
    storesDirs: ['stores']
  },
  extends: [
    ['../ecom-builder-fe', { overrides: { prefix: 'Fe' } }]
  ]
})
