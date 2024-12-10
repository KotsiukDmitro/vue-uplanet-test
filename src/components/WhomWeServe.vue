<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref } from 'vue'

const body = ref()
const info = ref()

const GET_BLOCK_CONTENT_WHO_BASIC = gql`
  query {
    blockContentBasic @rest(path: "block_content/basic") {
      data {
        attributes {
          info
          body {
            value
          }
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(GET_BLOCK_CONTENT_WHO_BASIC)

watch(loading, () => {
  if (!loading.value) {
    console.log(result.value)

    body.value = result.value.blockContentBasic.data[0].attributes.body.value
    info.value = result.value.blockContentBasic.data[0].attributes.info
  }
})
</script>


<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">{{ info }}</div>

  <div>
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else-if="result" class="ml-10">
      <p class="mt-10" v-html="body"></p>
    </div>
  </div>
</template>
