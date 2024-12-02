import './assets/main.css'
import router from './router'
import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
// import { ApolloProvider } from '@apollo/client'
import apolloClient from './apollo-client'


const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
  })

// const app = createApp({
//   render: () => h(App),
// });

// app.use(ApolloProvider, {
//   defaultClient: apolloClient,
// })

app
.use(router)
.mount('#app')
