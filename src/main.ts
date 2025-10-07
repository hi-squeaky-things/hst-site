import "./assets/styles/main.css";

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(pinia)
app.use(router)
app.mount('#app')
