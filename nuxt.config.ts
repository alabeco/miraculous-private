// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'HandheldFriendly', content: 'true' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://miraculousprivate.com/logo.png' },
        { property: 'og:site_name', content: 'Miraculous Private' },
        { name: 'msapplication-TileColor', content: '#1a3b86' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: "preconnect",  href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap", rel: "stylesheet" },
      ]
    }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/landing.scss',
    '~/assets/scss/elderly_care.scss',
    '~/assets/scss/child_care.scss',
    '~/assets/scss/cleaning.scss',
    '~/assets/scss/medical.scss',
    '~/assets/scss/transportation.scss',
    '~/assets/scss/keeper.scss',
  ]
})
