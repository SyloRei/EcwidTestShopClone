import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routes/index'

import { createPinia } from 'pinia'
import './styles.scss'

const myApp = createApp(App)

myApp.use(createPinia()).use(router).mount('#app')
