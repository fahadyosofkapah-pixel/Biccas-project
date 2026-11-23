<template>
  <div class="flex h-full items-center justify-center">
    <DemoCard
      title="Hello Tailwind"
      body="This card switches with the theme."
    />

</div>
</template>
<script>
import DemoCard from '../components/DemoCard.vue'

export default {
  name: 'HomeView',
  components: { DemoCard },
}
</script>