import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1a3b86',
    secondary: '#a03e4b',
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#1a3b86',
    secondary: '#a03e4b',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })

  app.vueApp.use(vuetify)
})
