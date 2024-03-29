import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Toast Notification
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// Import Bootstraps
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App)
.use(router)
.use(ToastPlugin)
.mount('#app')
