<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref } from 'vue'



const GET_OUR_WORK = gql`
  query NodeOutWork($nodeType: String!) {
    OutWork @rest(path: "node/{nodeType}") 
  }
`

const { result, loading, error } = useQuery(GET_OUR_WORK, {nodeType: 'our_work'})

watch(loading, () => {
  if (!loading.value) {
    console.log(result.value)

  }
})
</script>

<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">OUR WORK</div>
  <div>
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else-if="result" class="ml-10">
      {{ result }}
    </div>
    <div v-else class="text-red-500 text-center">No result !!!</div>
  </div>
</template>





