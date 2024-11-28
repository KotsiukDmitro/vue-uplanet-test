<script setup>

</script>

<template>
  <div class="flex gap-5 border-b border-gray-400 py-4 pl-10 bg-gray-200 fixed top-0 w-full">
    <router-link to="/" class="cursor-pointer">Home</router-link>
    <router-link to="about-us" class="cursor-pointer">About Us</router-link>
    <router-link to="graphql" class="cursor-pointer">GraphQL</router-link>
  </div>
</template>



<style lang="postcss">
.nav-link--active {
  @apply text-blue-500;
}
</style>