// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components:true,
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  plugins:['./app/plugins/testPlugin.js'],
})
