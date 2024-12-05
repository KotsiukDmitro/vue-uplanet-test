<script setup>

</script>

<template>
  <div class="flex gap-5 border-b border-gray-400 py-4 pl-10 bg-gray-200 fixed top-0 w-full">
    <router-link to="/" class="cursor">Home</router-link>
    <router-link to="about-us" class="cursor">About Us</router-link>
    <router-link to="info" class="cursor">Info</router-link>
    <router-link to="rest" class="cursor">Rest</router-link>
    <router-link to="graphql" class="cursor">GraphQL</router-link>
  </div>
</template>


<style lang="postcss" >
.nav-link--active {
  @apply text-blue-500;
}

.cursor {
  cursor: pointer;
}
</style>