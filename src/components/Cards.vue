
<template>
  <div class="min-h-screen bg-gradient-to-r from-white to-[#e4f7ef] px-4 py-10">

    <!-- Heading -->
    <div class="mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Choose Plan
        <br />
        That's Right For You
      </h1>

      <p class="mt-5 text-xs font-semibold text-gray-400">
        Choose plan that works best for you, feel free to contact us
      </p>

      <!-- Monthly / Yearly -->
      <div class="mt-6 inline-flex items-center rounded-lg bg-white p-1 shadow-md">
        <button class="rounded-lg px-6 py-3 text-xs text-gray-800">
          Bil Monthly
        </button>

        <button class="rounded-lg bg-[#54be96] px-6 py-3 text-xs text-white">
          Bil Yearly
        </button>
      </div>
    </div>

    <!-- Cards -->
    <div class="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-5">

      <!-- Free -->
      <div class="mt-0 rounded-2xl bg-white p-3 shadow-md md:mt-3">
        <div class="py-2 text-center">
          <h2 class="text-lg font-bold text-gray-900">Free</h2>

          <p class="mt-1 text-xs leading-5 text-gray-400">
            Have a go and test your<br />
            superpowers
          </p>

          <p class="mt-2 text-xs text-gray-400">$</p>
          <h1 class="text-3xl font-bold text-gray-900">0</h1>
        </div>

        <div class="rounded-xl bg-gray-50 p-5">
          <ul class="space-y-4 text-xs text-gray-900">
            <li>🟢 &nbsp;2 Users</li>
            <li>🟢 &nbsp;2 Files</li>
            <li>🟢 &nbsp;Public Share & Comments</li>
            <li>🟢 &nbsp;Chat Support</li>
            <li>🟢 &nbsp;New income apps</li>
          </ul>

          <button class="mt-5 w-full rounded-xl bg-white py-3 text-xs font-semibold text-[#54be96] shadow-md">
            Signup for free
          </button>
        </div>
      </div>

      <!-- Pro -->
      <div class="rounded-2xl bg-[#54be96] p-3 text-white shadow-md md:-mt-3">
        <div class="py-2 text-center">
          <h2 class="text-lg font-bold">Pro</h2>

          <p class="mt-1 text-xs leading-4">
            Experiment the power<br />
            of infinite possibilities
          </p>

          <p class="mt-2 text-xs">$</p>
          <h1 class="text-3xl font-bold">8</h1>

          <span class="mt-1 inline-block rounded-md bg-white/20 px-3 py-1 text-[10px]">
            Save $50 a year
          </span>
        </div>

        <div class="rounded-xl bg-white p-5 text-gray-900">
          <ul class="space-y-4 text-xs">
            <li>🟢 &nbsp;4 Users</li>
            <li>🟢 &nbsp;All apps</li>
            <li>🟢 &nbsp;Unlimited editable exports</li>
            <li>🟢 &nbsp;Folders and collaboration</li>
            <li>🟢 &nbsp;All incoming apps</li>
          </ul>

          <button class="mt-5 w-full rounded-xl bg-[#54be96] py-3 text-xs font-semibold text-white">
            Go to pro
          </button>
        </div>
      </div>

      <!-- Business -->
      <div class="mt-0 rounded-2xl bg-white p-3 shadow-md md:mt-3">
        <div class="py-2 text-center">
          <h2 class="text-lg font-bold text-gray-900">Business</h2>

          <p class="mt-1 text-xs leading-5 text-gray-400">
            Unveil new superpowers and<br />
            join the Design League
          </p>

          <p class="mt-2 text-xs text-gray-400">$</p>
          <h1 class="text-3xl font-bold text-gray-900">16</h1>
        </div>

        <div class="rounded-xl bg-gray-50 p-5">
          <ul class="space-y-4 text-xs text-gray-900">
            <li>🟢 &nbsp;All the features of pro plan</li>
            <li>🟢 &nbsp;Account success Manager</li>
            <li>🟢 &nbsp;Single Sign-On (SSO)</li>
            <li>🟢 &nbsp;Co-conception program</li>
            <li>🟢 &nbsp;Collaboration-Soon</li>
          </ul>

          <button class="mt-5 w-full rounded-xl bg-white py-3 text-xs font-semibold text-[#54be96] shadow-md">
            Goto Business
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
