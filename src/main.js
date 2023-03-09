import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.$ = window.jquery = require("jquery")
import 'bootstrap/dist/js/bootstrap.min'
createApp(App).use(store).use(router).mount('#app')
