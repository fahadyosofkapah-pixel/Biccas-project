<template>
<HeroSection /> 
</template>
<script>
import DemoCard from '../components/DemoCard.vue'
import HeroSection from '../components/HeroSection.vue'
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'HomeView',
  components: { DemoCard , HeroSection,BaseButton },
} 
</script>
 