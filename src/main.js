import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from './router' // 👈 Adăugat

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router) // 👈 Adăugat
app.mount('#app')
