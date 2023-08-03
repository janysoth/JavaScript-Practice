

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import "tailwindcss/tailwind.css"
import "./assets/tailwind.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
