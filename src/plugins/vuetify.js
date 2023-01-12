/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  themes: {
    dark: {
      colors: {
        primary: '#f06292',
        secondary: '#000000',
        danger: '#AD1457'
      }
    },
    light: {
      colors: {
        primary: '#f06292',
        secondary: '#FCE4EC',
        danger: '#AD1457'
      }
    }
  }
})
