<template>
  <footer class="w-full bg-[#171e2b] pt-[60px] pb-[40px]">
    <div class="mx-auto w-full max-w-6xl">
      
      <!-- Top -->
      <div class="flex flex-col gap-10 lg:flex-row lg:justify-between mt-0">
        
        <!-- Brand + newsletter -->
        <div class="max-w-xs">
          <h2 class="text-3xl font-bold text-[#54be96]">
            Biccas
          </h2>

          <p class="mt-3 text-xs text-gray-400">
            Get started now try our product
          </p>

          <form
            class="mt-6 flex w-full max-w-[245px] items-center rounded-full border border-gray-400 py-1 pl-4 pr-1"
            @submit.prevent="subscribe"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email here"
              class="w-full bg-transparent text-xs text-white placeholder-gray-400 outline-none"
            />

            
            <button class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#54be96] text-white transition hover:opacity-90"
            >
            <img src="../assets/arrow-right(1) 1.png" alt="">
               </button>
          </form>

        </div>

         <div class="">
      <p class=  "text-white">Support</p>
        <p  class="text-[#A6A6A6] mt-2">Help centre</p>
        <p class="text-[#A6A6A6] mt-2">Account information</p>
        <p class="text-[#A6A6A6] mt-2">About</p>
        <p class="text-[#A6A6A6] mt-2">Contact us</p>
      </div>
         <div class="">
      <p class="text-white">Help and Solution</p>
        <p  class="text-[#A6A6A6] mt-2">Talk to support</p>
        <p class="text-[#A6A6A6] mt-2">Support docs</p>
        <p class="text-[#A6A6A6] mt-2">System status</p>
        <p class="text-[#A6A6A6] mt-2">Covid responde</p>
      </div>
         <div class="">
      <p class="text-white">Product</p>
        <p  class="text-[#A6A6A6] mt-2">Update</p>
        <p class="text-[#A6A6A6] mt-2">Security</p>
        <p class="text-[#A6A6A6] mt-2">Beta test</p>
        <p class="text-[#A6A6A6] mt-2">Pricing product</p>
      </div>

        <!-- Link columns -->
       
      </div>
<
      <!-- Bottom -->
      <div
        class="mt-12 flex flex-col gap-3 text-xs text-white sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          &copy; 2022 Biccas Inc. Copyright and rights reserved
        </p>

        <p class="flex items-center gap-2">
          <a href="#" class="hover:text-[#54be96]">
            Terms and Conditions
          </a>

          <span class="text-gray-400">&middot;</span>

          <a href="#" class="hover:text-[#54be96]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>