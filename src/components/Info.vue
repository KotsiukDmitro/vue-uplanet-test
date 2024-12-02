<script setup>
import gql from 'graphql-tag'
import { useQuery, provideApolloClient } from '@vue/apollo-composable'
import apolloClient from '../apollo-client'
import { watch, ref } from 'vue'

const number_projects = ref()
const number_specialists = ref()

provideApolloClient(apolloClient)

const { result, loading, error } = useQuery(gql`
  query {
    blockContentWhoWeAre {
      field_number_projects
      field_number_specialists
    }
  }
`)


watch(loading, () => {
  if (!loading.value) {
    console.log(result.value)
    // console.log(result.value[0].attributes.field_number_projects)
    // console.log(result.value[0].attributes.field_number_specialists)

    number_projects.value = result.value[0].attributes.field_number_projects
    number_specialists.value = result.value[0].attributes.field_number_specialists
  }
})


</script>

<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">Info</div>
  <div>
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else-if="result" class="ml-10">
      {{ result }}
      <p class="mt-10">
        number of projects: <strong>{{ number_projects }}</strong>
      </p>
      <p>
        number of employees:
        <strong>{{ number_specialists }}</strong>
      </p> 
    </div>
    <div v-else class="text-red-500 text-center">No result !!!</div>
    <!-- <ApolloQuery
      :query="gql => gql`
                          query {
                            blockContentWhoWeAre {
                                 field_number_projects
                                 field_number_specialists
                            }
                          } `"
    >
      <template v-slot="{ result: { loading, error, data } }"> 
          <div >{{data.blockContentWhoWeAre.field_number_projects}}</div>      
      </template>
    </ApolloQuery> -->
  </div>
</template>

<!-- <script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const data = ref([])

const fetch = async () => {
  try {
    const response = await axios.get('https://api-urancompany.devserver.app/jsonapi/block_content/who_we_are', {
      auth: {
        username: 'admin',
        password: 'qweasd123',
      },
      headers: {
          'Content-Type': 'application/json',
        },
    })
    console.log(response.data)
    data.value = response.data
  } catch (err) {
    console.log(err)
  }
}
onMounted(fetch)
</script> -->



