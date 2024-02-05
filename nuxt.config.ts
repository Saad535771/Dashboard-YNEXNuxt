import { resolve } from "node:path"
// https://nuxt.com/docs/api/configuration/nuxt-confi
/*
 Make sure to rename the " /nuxt/preview " to the subdirectory where you are gonana upload the project. If you are uploading it in root then chang the /nuxt/preview to '/' or remove.
*/
export default defineNuxtConfig({
  alias:{
    assets : "/<rootDir>/assets",
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt', 
    '@vueuse/motion/nuxt'
  ],
  // Used to add the base path of url Example : https://www.spruko.com/ynex-nuxt
  app: {
    baseURL: '/nuxt/preview', // Replace with your desired base path
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/nuxt/preview/favicon.ico" }]
  },
  },
  ssr : false,
  build : {
    transpile : ["vuetify", 'vue-countup-v3']
  },
  devtools: { enabled: true },
  plugins: [
    { src: "@/plugins/plugins.ts", mode: "client" },
],
  css : [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles/main.sass',
    '@/assets/css/icons.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/styles.css',
  ],
  buildModules: [
    'nuxt-vite'
  ],
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/nuxt/preview/'),
      'import.meta.env.googleMapsApiKey': JSON.stringify('AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA')
    },
  }
})
