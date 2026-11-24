<template>
<HeroSection />
<support />
</template>
<script>
import HeroSection from '../components/HeroSection.vue'
import BaseButton from '../components/BaseButton.vue' 
import Cards from '../components/Cards.vue'
import support from '../components/support.vue';
import Benifit from '../components/Benifit.vue';
import features from '../components/features.vue';
import plan from '../components/plan.vue';
import Saying from '../components/Saying.vue';

export default {
  name: 'HomeView',
  components: { Cards,HeroSection,BaseButton,
   Benifit, features,plan,support,Saying

   },
} 
</script>
 