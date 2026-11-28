
<template>
  <footer class="w-full bg-[#171e2b] ...">  
    <div class="mx-auto w-full max-w-6xl">
      <!-- Top -->
      <div class="flex flex-col gap-10 lg:flex-row lg:justify-between  mt-0 ">
        <!-- Brand + newsletter -->
        <div class="max-w-xs">
          <h2 class="text-3xl font-bold text-[#54be96]">Biccas</h2>
          <p class="mt-3 text-xs text-gray-400">Get started now try our product</p>

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
            <button
              type="submit"
              aria-label="Subscribe"
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#54be96] text-white transition hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        <!-- Link columns -->
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-14">
          <div v-for="col in columns" :key="col.title">
            <h3 class="text-xs font-medium text-white">{{ col.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="link in col.links" :key="link">
                <a
                  href="#"
                  class="text-xs text-gray-400 transition hover:text-white"
                >
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-12 flex flex-col gap-3 text-xs text-white sm:flex-row sm:items-center sm:justify-between"
      >
        <p>&copy; 2022 Biccas Inc. Copyright and rights reserved</p>
        <p class="flex items-center gap-2">
          <a href="#" class="hover:text-[#54be96]">Terms and Conditions</a>
          <span class="text-gray-400">&middot;</span>
          <a href="#" class="hover:text-[#54be96]">Privacy Policy</a>
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