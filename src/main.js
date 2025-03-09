import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

axios.interceptors.request.use(
    (config) => {
        let exemptedRoutes = ['/register', '/login'];

        const token = localStorage.getItem('token');
        if (token && !exemptedRoutes.some(route => config.url.includes(route))) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
