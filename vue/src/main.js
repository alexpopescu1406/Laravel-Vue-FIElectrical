import { createApp } from 'vue'
import store from './store'
import router from './router/index.js'
import 'flowbite';
import './index.css'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import VueMathjax from 'vue-mathjax-next';


createApp(App)
  .use(VueMathjax)
  .use(store)
  .use(router)
  .mount('#app')
