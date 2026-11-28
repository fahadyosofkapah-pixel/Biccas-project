 <template>
  <section id="features" class="mx-auto max-w-6xl px-6 py-16">
    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <h1 class="max-w-xs text-4xl font-bold leading-tight text-neutral-900">
        Our Features you can get
      </h1>

      <p class="max-w-sm text-sm leading-relaxed text-neutral-400">
        We offer a variety of interesting features that you can help increase
        your productivity at work and manage your project easily
      </p>
      <BaseButton 
      text="get Started"
      color="bg-emerald-400"
      size="self-start rounded-full  px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 md:self-auto"
      
      />

    </div>

    <!-- Kaarka 1: Collaboration Teams -->
<div class="mt-12 grid gap-8 md:grid-cols-3">
  <article>
    <!-- Sawirka (illustration) -->
    <div class="relative h-72 overflow-hidden rounded-2xl bg-indigo-50/60 p-6">
      <!-- laba rectangle bidix: cagaar iyo buluug -->
      <div class="absolute left-6 top-6 h-16 w-9 rounded-sm bg-emerald-400"></div>
      <div class="absolute left-6 top-28 h-16 w-9 rounded-sm bg-blue-500"></div>

      <!-- goobo cagaar ah -->
      <div class="absolute left-20 top-6 h-6 w-6 rounded-full bg-emerald-400"></div>

      <!-- xariijimo qoraal ah -->
      <div class="absolute left-20 top-14 space-y-2">
        <div class="h-2 w-40 rounded bg-indigo-200"></div>
        <div class="h-2 w-32 rounded bg-indigo-200"></div>
        <div class="h-2 w-36 rounded bg-indigo-200"></div>
      </div>

      <!-- sanduuqa la doortay (selection) + cabbirka -->
      <div class="absolute left-20 top-28 h-16 w-40 bg-white/60 ">

    
        <div class="h-2 w-40 rounded bg-indigo-200  "></div>
        <div class="h-2 w-32 rounded bg-indigo-200  mt-3 "></div>
        <div class="h-2 w-36 rounded bg-indigo-200 mt-3"></div>
        <div class="h-2 w-30 rounded   bg-amber-100 mt-3"></div>
           </div>

      <!-- saddexda goobo hoose -->
      <div class="absolute bottom-6 left-6 flex gap-4">
        <div class="h-14 w-14 rounded-full bg-indigo-100"></div>
        <div class="h-14 w-14 rounded-full bg-blue-500"></div>
        <div class="flex h-14 w-14 items-center justify-center gap-1 rounded-full bg-emerald-400">
          <span class="h-2 w-2 rounded-full bg-white"></span>
          <span class="h-2 w-2 rounded-full bg-white"></span>
          <span class="h-1.5 w-4 rounded bg-white"></span>
        </div>
      </div>
    </div>

    <!-- Cinwaanka iyo qoraalka -->
    <h3 class="mt-6 text-xl font-semibold text-neutral-900">Collaboration Teams</h3>
    <p class="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400">
      Here you can handle projects together with team virtually
    </p>
  </article>
  

  <!-- kaarka 2 iyo 3 halkan ayay ka iman doonaan -->

  <!-- Kaarka 2: Cloud Storage -->
<article>
  <!-- Sawirka -->
  <div class="relative overflow-hidden rounded-2xl bg-[#F5F8FF] p-5">
    <!-- xariiq buluug ah oo midig ka taal -->
    <div class="absolute right-0 top-12 h-17 w-5 rounded-l-md bg-[#1E88E5]"></div>

     <!-- kaarka cagaarka ah: Document File -->
    <div class="relative z-10 mt-4 w-4/5 rounded-xl bg-[#52BD94] p-4 text-white shadow-md">
      <!-- icon huruud ah -->
      <div class="mb-6 flex h-6 w-6 items-center justify-center rounded bg-yellow-300">
        <div class="h-3 w-3 rounded-sm bg-[#1E88E5]"></div>
      </div>
      <p class="text-lg font-semibold leading-tight">Document File</p>
      <p class="mt-1 text-xs opacity-90">456 GB | 1056 Items</p>
    </div>

    <!-- sanduuqa daruurta (cloud) -->
    <div class="absolute right-5 top-2 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow">
      <img src="../assets/Union (2).png" alt="">
    </div>

     <!-- bar chart hoose -->

         <!-- bar chart hoose -->
    <div class="mt-4 flex h-28 items-end justify-around rounded-xl bg-white/70 px-6 pb-4">
      <div class="h-10 w-2 rounded-full bg-[#52BD94]"></div>
      <div class="h-20 w-2 rounded-full bg-[#52BD94]"></div>
      <div class="h-12 w-2 rounded-full bg-[#52BD94]"></div>
      <div class="h-16 w-2 rounded-full bg-[#52BD94]"></div>
      <div class="h-20 w-2 rounded-full bg-[#52BD94]"></div>
    </div>
  </div>

  <!-- Cinwaanka iyo qoraalka -->
  <h3 class="mt-6 text-xl font-semibold text-neutral-900">Cloud Storage</h3>
  <p class="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400">
    No need to worry about storage because we provide storage up to 2 TB
  </p>

</article>
<!-- Kaarka 3: Daily Analytics -->
  <article>
  <!-- Sawirka -->
  <div
    class="flex h-[290px] items-center justify-center overflow-hidden rounded-3xl bg-[#F5F8FF] p-6"
  >
    <img
      src="../assets/Frame 54.png"
      alt="Project analytics"
      class="h-full w-full object-contain"
    />
  </div>

  <!-- Qoraalka -->
  <h3 class="mt-6 text-xl font-semibold text-[#191A15]">
    Project Analytics
  </h3>
  <p class="mt-2 max-w-[260px] text-sm leading-relaxed text-gray-400">
    Track your progress and team performance with clear, real-time reports
  </p>
</article>
 </div>
  </section>

</template>
<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'features',
  components: {
    BaseButton,  
  },
}

</script>


