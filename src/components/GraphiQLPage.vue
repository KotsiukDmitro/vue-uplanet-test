<template>
  <div id="graphiql" class="h-screen">
    <h1 class="text-center mt-5 text-3xl">GRAPH QL</h1>
  </div>
</template>
  
  <script>
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.css'

export default {
  mounted() {
    const fetcher = createGraphiQLFetcher({
      url: 'http://localhost:4000/graphql',
    })

    new GraphiQL({
      fetcher,
      container: document.getElementById('graphiql'),
    })
  },
}
</script>