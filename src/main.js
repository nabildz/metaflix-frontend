import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import Toast from "vue-toastification";

import './assets/app.css'
import "vue-toastification/dist/index.css";


const options = {
    icon:false,
    toastClassName:'text-center',
    hideProgressBar:true,
    position:'bottom-center',
    timeout:2000
    
};

createApp(App).use(router).use(Toast, options).mount('#app')