<template>
    
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
    <ThemeToggle />
 
</template>
 
<script>
export default {
  name: 'Topbar',
  data() {
    return {
      links: [
        { label: 'Home', to: '/' }, 
        { label: 'About', to: '/aboutview' }, 
        // { label: 'Service', to: '/serviceview' }, 
      ],
    }
  },
}
</script>
