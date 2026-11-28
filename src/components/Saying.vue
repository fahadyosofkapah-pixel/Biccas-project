
<template>
  <section class="min-h-screen w-full bg-[#171e2b] flex items-center justify-center px-6 py-16">

    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      <!-- Left Side -->
      <div class="text-white">

        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-5">
          People are Saying
          <br />
          About DoWhithin
        </h1>

        <p class="text-gray-400 text-sm leading-6 max-w-md mb-10">
          Everything you need to accept payment and grow
          your money of manage anywhere on planet
        </p>

        <div class="text-5xl font-bold mb-3">“</div>

        <p class="text-gray-300 text-sm leading-7 max-w-md mb-6">
          I am very helped by this E-Wallet application, my
          days are very easy to use this application and its
          very helpful in my life, even I can pay a short time.
        </p>

        <p class="text-gray-400 text-xs mb-8">
          - Aria Zinanrio
        </p>

        <!-- Avatars -->
        <div class="flex items-center gap-4">

          <img
            src="../assets/Ellipse 54.png"
            class="w-11 h-11 rounded-full border-2 border-gray-500"
            alt="Person 1"
          />

          <img
            src="../assets/Ellipse 55.png"
            class="w-11 h-11 rounded-full border-2 border-gray-500"
            alt="Person 2"
          />

          <img
           src="../assets/Ellipse 56.png"
            class="w-11 h-11 rounded-full border-2 border-gray-500"
            alt="Person 3"
          />

          <img
            src="../assets/Ellipse 57.png"
            class="w-11 h-11 rounded-full border-2 border-gray-500"
            alt="Person 4"
          />

          <img src="../assets/Group 215.png" alt="Plus Icon"
            class="w-11 h-11 rounded-full border border-white flex items-center justify-center"
          >
        
          

        </div>
      </div>

      <!-- Right Side Form -->
      <div class="bg-[#222a3a] rounded-xl p-8 md:p-12 w-full max-w-md mx-auto">

        <!-- Logo -->
        <div class="flex flex-col items-center mb-8">

        <img src="../assets/Group (1).png" alt="Logo" class="w-16 h-16 mb-4" />
            
          <h2 class="text-white text-xl font-medium mt-2">
            Get Started
          </h2>

        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-5">

          <div>
            <label class="block text-white text-xs mb-3">
              Email
            </label>

            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-3 outline-none focus:ring-2 focus:ring-[#50BD99]"
            />
          </div>

          <div>
            <label class="block text-white text-xs mb-3">
              Message
            </label>

            <textarea
              v-model="message"
              placeholder="What are you say ?"
              required
              rows="3"
              class="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#50BD99]"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-[#50BD99] hover:bg-[#3da984] text-white text-sm font-medium py-3 rounded-md transition"
          >
            Request Demo
          </button>

          <p class="text-center text-xs text-gray-400">
            or Start Free Trial
          </p>

          <p class="text-center text-[#50BD99] text-sm">
            Thank you! Your request has been submitted.
          </p>

        </form>

      </div>

    </div>
  </section>
</template>
<script>
import BaseButton from './BaseButton.vue' 
 
export default {
  name: 'saying',
  components: {
    BaseButton 
}

}
</script>