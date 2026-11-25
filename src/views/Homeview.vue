<template>
<<<<<<< HEAD
<HeroSection />
<support />
<cards />
=======
  <HeroSection />
  <support />
  <features />
<Benifit/>

>>>>>>> 41982f6d457687908c02e734c092285daad41fe3
</template>
<script>
import HeroSection from '../components/HeroSection.vue'
import BaseButton from '../components/BaseButton.vue' 
import Cards from '../components/Cards.vue'
import support from '../components/support.vue';
import Benifit from '../components/Benifit.vue';
import features from '../components/features.vue';
import planCard from '../components/PlanCard.vue';
import Saying from '../components/Saying.vue';

export default {
  name: 'HomeView',
  components: { Cards,HeroSection,BaseButton,
   Benifit, features,planCard,support,Saying

   },
} 
</script>
 