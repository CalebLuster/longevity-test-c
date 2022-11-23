import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode';

createApp(App)
.component("qrcode", VueQrcode)
.mount('#app')
