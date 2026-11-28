<template>
  <nav class="flex items-center justify-between   px-8 py-5 text-[#1A1A1A]">
    <h1 class="text-2xl font-bold text-[#54BD95]">Biccas</h1>

   <div class="flex items-center text-gray-400 gap-12 mr-15">

  <router-link to="/" class="text-black">Home</router-link>

     

  <a href="#features">Product</a>
  <a href="#Benifit">FAQ</a>
   <a href="#saying">About Us </a> 

  <router-link to="/login">Login</router-link>

  <router-link to="/">
    <BaseButton
  text="Sign Up"
  color="bg-green-500 text-white hover:bg-green-600"
  size="px-5 py-2 text-sm"
/>
<a href=""></a>
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