
<template>
  <section class="grid min-h-[550px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">

    <!-- Left Side: Text Content -->
    <div>
      <h1 class="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
        We help you grow your business
      </h1>

      <p class="mb-8 max-w-lg text-lg text-slate-600">
        We provide the best tools and solutions to help your business
        grow faster and achieve more.
      </p>

      <!-- TODO: Later connect buttons to their sections -->

      <div class="flex flex-wrap items-center gap-4">
        <BaseButton text="Get Started" />

<BaseButton
  text="Try Free"
  color="bg-white text-green-600 border border-green-500 hover:bg-green-50"
/>
      </div>
    </div>

    <!-- Right Side: Image -->
    <div class="flex justify-center">
      <div class="flex h-72 w-full max-w-md items-center justify-center rounded-2xl bg-green-100">
        <span class="text-lg font-semibold text-green-700">
          <img src="../assets/man.png" alt="">
        </span>
      </div>
    </div>

  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseButton,
  },
}
</script>
