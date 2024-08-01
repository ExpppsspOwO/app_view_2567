// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import '@/img/banner1.png'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
