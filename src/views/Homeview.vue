<template> 
<HeroSection />
<support />


  <features />
<Benifit/>
<cards />
<saying />
<<<<<<< HEAD


</template>
=======
 </template>
>>>>>>> 4ae97f11f0a8891318e55f5805518be893a36fa8
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
 