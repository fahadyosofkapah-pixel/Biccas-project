<template>
  <div
    class="max-w-sm rounded-xl border p-6 shadow
           bg-white border-gray-200 text-gray-800
           dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
  >
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p class="mt-2 text-gray-600 dark:text-gray-300">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'DemoCard',
  props: {
    title: String,
    body: String,
    
  },
}
</script>