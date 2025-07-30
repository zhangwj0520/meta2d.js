import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/index.css';

import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TDesign);

app.mount('#app')
