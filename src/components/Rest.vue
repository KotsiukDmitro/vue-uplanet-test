<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref } from 'vue'

const number_projects = ref()
const number_specialists = ref()
const info = ref()

const GET_BLOCK_CONTENT_WHO_WE_ARE = gql`
  query {
    blockContentWhoWeAre @rest(path: "block_content/who_we_are") {
      data {
        attributes {
          field_number_projects
          field_number_specialists
          body {
            value
          }
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(GET_BLOCK_CONTENT_WHO_WE_ARE)

watch(loading, () => {
  if (!loading.value) {
    console.log(result.value)

    number_projects.value =
      result.value.blockContentWhoWeAre.data[0].attributes.field_number_projects
    number_specialists.value =
      result.value.blockContentWhoWeAre.data[0].attributes.field_number_specialists
    info.value = result.value.blockContentWhoWeAre.data[0].attributes.body.value
  }
})
</script>

<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">Rest</div>
  <div>
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else-if="result" class="ml-10">
      {{ result }}
      <p class="mt-10">
        number of projects: <strong>{{ number_projects || 'не найдено' }}</strong>
      </p>
      <p>
        number of employees:
        <strong>{{ number_specialists || 'не найдено' }}</strong>
      </p>
      <div v-html="info"></div>
    </div>
    <div v-else class="text-red-500 text-center">No result !!!</div>
  </div>
</template>





