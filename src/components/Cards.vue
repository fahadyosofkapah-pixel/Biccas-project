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
  name: 'Cards',
  props: {
    title: String,
    body: String,
    
  },
}
</script>

<template>
  <div
    :class="[
      'rounded-xl shadow-md transition duration-300',
      background,
      padding,
      cardClass,
    ]"
  >
    <img
      v-if="image"
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover rounded-lg mb-4"
    />

    <h2 class="text-xl font-bold mb-2">
      {{ title }}
    </h2>

    <p class="text-gray-600 mb-4">
      {{ description }}
    </p>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    title: {
      type: String,
      default: 'Card Title',
    },

    description: {
      type: String,
      default: 'This is a card description.',
    },

    image: {
      type: String,
      default: '',
    },

    background: {
      type: String,
      default: 'bg-white',
    },

    padding: {
      type: String,
      default: 'p-5',
    },

    cardClass: {
      type: String,
      default: 'hover:shadow-xl',
    },
  },
}
</script>
