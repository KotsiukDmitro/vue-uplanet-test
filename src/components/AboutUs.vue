
<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">About Us</div>
  <div>
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else-if="content" class="ml-10">
      {{ result }}
      <p>
        number of projects: <strong>{{ content?.field_number_projects }}</strong>
      </p>
      <p>
        number of employees:
        <strong>{{ content?.field_number_specialists }}</strong>
      </p>
    </div>
    <div v-else class="text-red-500 text-center">No result !!!</div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import gql from 'graphql-tag'
import apolloClient from '../apollo-client'

const blockContentWhoWeAre = gql`
  query blockContentWhoWeAre($path: String!) {
    data {
      attributes {
        field_number_projects
        field_number_specialists
      }
    }
  }
`

const content = ref(null)
const loading = ref(true)
const error = ref(null)

// Функция для выполнения запроса
const fetchContent = async (path) => {
  try {
    loading.value = true

    // Выполняем запрос через Apollo Client
    const {data}  = await apolloClient.query({
      query: blockContentWhoWeAre,
      variables: { path },
    })

    // Обновляем данные
    const result = data[0]?.attributes || {}
    content.value = {
      field_number_projects: result.field_number_projects || 'Не найдено',
      field_number_specialists: result.field_number_specialists || 'Не найдено',
    }
  } catch (err) {
    error.value = err.message || 'Ошибка при загрузке данных'
    console.error('Ошибка запроса:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchContent('block_content/who_we_are')
})
</script>