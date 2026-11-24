<template>
  <div class="flex min-h-screen flex-col">
    <Topbar />

    <main class="flex-1 p-6">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from './footer.vue'
import Topbar from './navbar.vue'

export default {
  name: 'Layout',
  components: {
    Footer,
    Topbar,
  },
}
</script>