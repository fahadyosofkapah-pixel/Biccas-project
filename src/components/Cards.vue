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
