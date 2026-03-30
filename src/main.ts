import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { Icon } from '@iconify/vue'
import { i18n } from './i18n'

const app = createApp(App)

app.component('Icon', Icon)
app.use(i18n)

app.mount('#app')