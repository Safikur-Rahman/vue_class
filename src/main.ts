// import './assets/custom.css'
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './routes/index.ts'
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App)
.use(router)
.mount('#app')
