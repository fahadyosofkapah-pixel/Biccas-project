<template>
     <div class="flex flex-1 flex-col overflow-hidden">
      <Topbar />
 <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
</template>

<script>
import footer from './footer.vue'
import Topbar from './Topbar.vue'
export default {
  name: 'Layout',
  components: { footer, Topbar },
}

</script>