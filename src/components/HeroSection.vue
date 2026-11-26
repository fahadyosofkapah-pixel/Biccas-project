
<template> 
  <section class="grid min-h-[#550px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12">

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
      <div class="flex h-100% w-full max-w-md items-center justify-center rounded-md bg-green-300">
        <span class="text-lg font-semibold text-green-700"> 
          <img src="../assets/man.png" alt="" class=" rounded-lg mt-2.5">
        </span>
      </div>
     <h2 class="mt-6  mr-0   text-4xl  text-center font-bold leading-tight text-slate-900 md:text-2xl" >More than 25,000 teams use Collabs</h2>
     <div class="mt-10 text-center">

  
  <div class="flex flex-wrap items-center justify-center gap-8">

    <!-- icon 1-->
    <div class="flex items-center gap-2">
      <img src="../assets/Group 140.png" alt="" class="h-8 w-8 object-contain">
      <p class="text-[#A6A6A6]">Unsplash</p>
    </div>

    <!--icon 2 -->
    <div class="flex items-center gap-2">
      <img src="../assets/N.png" alt="" class="h-8 w-8 object-contain">
      <p class="text-[#A6A6A6]">Notion</p>
    </div>

    <!--icon 3 -->
    <div class="flex items-center gap-2">
      <img src="../assets/Rectangle 71.png" alt="" class="h-8 w-8 object-contain">
      <p class="text-[#A6A6A6]">INTERCOM</p>
    </div>

    <!--icon 4 -->
    <div class="flex items-center gap-2">
      <img src="../assets/Union.png" alt="" class="h-8 w-8 object-contain">
      <p class="text-[#A6A6A6]">descript</p>
    </div>

  </div>
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
