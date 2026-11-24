<template>
  <nav class="flex items-center justify-between   px-8 py-5 text-[#1A1A1A]">
    <h1 class="text-2xl font-bold text[]">Biccas</h1>

   <div class="flex items-center gap-12 mr-15">

  <router-link to="/">Home</router-link>

  <router-link to="/about">About Us</router-link>

  <router-link to="/product">Product</router-link>

  <router-link to="/faq">FAQ</router-link>

  <router-link to="/login">Login</router-link>

  <router-link to="/signup">
    <BaseButton
  text="Sign Up"
  color="bg-green-500 text-white hover:bg-green-600"
  size="px-5 py-2 text-sm"
/>

  </router-link>

</div>
  </nav>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'Topbar',
  components: {
  BaseButton,
},
}
</script>