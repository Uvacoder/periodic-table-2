import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Style
import './style/reset.scss'

// Icons
import icons from './assets/icons'

createApp(App)
  .use(store)
  .use(router)
  .use(icons)
  .mount('#app')
