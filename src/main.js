import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/js/plugins/plugins'
import './assets/js/main'


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

AOS.init({
    duration: 1000,
    once: true,
});
