
<template>
  <button
    :class="[
      'rounded-full font-semibold transition',
      color,
      size,
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    text: {
      type: String,
      default: 'Click Me',
    },

    color: {
      type: String,
      default: 'bg-green-500 text-white hover:bg-green-600',
    },

    size: {
      type: String,
      default: 'px-7 py-3 text-base',
    },
  },
}
</script>
