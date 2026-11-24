
<template>
  <div
    :class="plan.featured
      ? 'bg-[#52bd98] text-white scale-105'
      : 'bg-white text-gray-900'"
    class="rounded-xl p-3 shadow-md"
  >

    <!-- Card Header -->
    <div class="text-center pt-4 pb-3">

      <h2 class="text-xl font-bold">
        {{ plan.name }}
      </h2>

      <p class="text-sm opacity-70 mt-2 min-h-10">
        {{ plan.description }}
      </p>

      <p class="text-xs mt-2">$</p>

      <h1 class="text-4xl font-bold">
        {{ yearly ? plan.yearlyPrice : plan.monthlyPrice }}
      </h1>

      <span
        v-if="yearly && plan.featured"
        class="inline-block bg-white/30 text-xs px-3 py-1 rounded-full mt-2"
      >
        Save $50 a year
      </span>

    </div>

    <!-- Features -->
    <div
      :class="plan.featured
        ? 'bg-white text-gray-800'
        : 'bg-gray-50'"
      class="rounded-lg p-4 mt-2"
    >

      <ul class="space-y-4">

        <li
          v-for="feature in plan.features"
          :key="feature"
          class="flex items-center gap-2 text-sm"
        >
          <span class="bg-[#52bd98] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs shrink-0">
            ✓
          </span>

          {{ feature }}
        </li>

      </ul>

      <!-- Button Component -->
      <BaseButton
        :text="plan.button"
        :color="plan.featured
          ? 'bg-[#52bd98] text-white hover:bg-[#40a982]'
          : 'bg-white text-[#52bd98] hover:bg-[#52bd98] hover:text-white'"
        @click="$emit('select', plan.name)"
        class="mt-5"
      />

    </div>

  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'PricingCard',

  components: {
    BaseButton
  },

  props: {
    plan: {
      type: Object,
      required: true
    },

    yearly: {
      type: Boolean,
      default: true
    }
  },

  emits: ['select']
}
</script>
