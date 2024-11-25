<script setup>
import gql from "graphql-tag"
import { useQuery } from "@vue/apollo-composable";


const get_blockContentWhoWeAre = gql`
    query {
        blockContentWhoWeAre {
          field_number_projects
          field_number_specialists
        }
      }
`;
const { result, loading, error } = useQuery(get_blockContentWhoWeAre);
</script>

<template>
  <div class="text-center mb-10 mt-10 text-3xl font-bold text-blue-600">About Us</div>
  <div >   
    <p v-if="loading" class="text-center text-green-500 text-2xl">Загрузка...</p>
    <p v-if="error" class="text-red-500 text-center">Error: {{ error.message }}</p>
    <div v-else class="ml-10">
      <p>number of projects: <strong>{{ result.blockContentWhoWeAre.field_number_projects }}</strong></p>
      <p>number of employees: <strong>{{ result.blockContentWhoWeAre.field_number_specialists }}</strong></p>
    </div>
  </div>

</template>

<!-- <script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const data = ref([])

const fetch = async () => {
  try {
    const response = await axios.get('https://api-urancompany.devserver.app/jsonapi/', {
      auth: {
        username: 'admin',
        password: 'qweasd123',
      },
    })
    console.log(response.data.links)
    data.value = response.data.links
  } catch (err) {
    console.log(err)
  }
}

onMounted(fetch)

</script> -->



