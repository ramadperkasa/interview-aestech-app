// Create App
import { createApp } from 'vue'

import App from './App.vue'

// Tailwind Style
import '@/modules/app/assets/styles/main.css'

// Base Component Register
import BaseComponentRegister from './modules/app/ui/components'

// Auto Load
import pinia from '@/modules/app/store'
    
import autoLoadRoute from '@/modules/app/router'

const AppInit = async () => {
    // Create App
    const app = createApp(App)

    // Auto Load
    const router = await autoLoadRoute()
    
    app.use(router)
    
    app.use(pinia)
    
    BaseComponentRegister(app)
    
    // Mount App
    app.mount('#app')
};

(async function () {
    await AppInit();
})()