import './assets/main.css'
import router from './router'
import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo-client'


const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
  })

app
.use(router)
.mount('#app')
