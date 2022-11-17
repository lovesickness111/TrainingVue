import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'devextreme/dist/css/dx.light.css';
import '@/assets/base.scss';
const app = createApp(App)

app.use(router)

app.mount('#app')
