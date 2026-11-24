<template>
  <section class="grid bg-[#F9F8FE] min-h[550px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">
<h1>How we support our pratner all over the world</h1>
  </section>
</template>
<script>
import BaseButton from './BaseButton.vue'
import Benifit from './Benifit.vue';
import plan from './plan.vue';
import Saying from './Saying.vue';
import features from './features.vue';
export default {
  name: 'support',
  components: {
    BaseButton,features,Saying,plan,Benifit
  },
}
</script>