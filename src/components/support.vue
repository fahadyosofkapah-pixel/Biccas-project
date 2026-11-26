<template> 
  <section class=" bg-[#F9F8FE] w-full min-h-[#541px] grid md:grid-cols-2 items-center max-auto gap-12 px-6 py-16">
    <div class=" items-center ml-8">

      <h1 class="text-2xl font-bold text-[#191A15] ml-5.5">How we support our<br> pratner all over the world</h1>

      <p class="mt-4 text-[#A6A6A6]"> SaaS become a common delivery model for many business application, including<br> office software,
        messaging software, payroll processing software,<br> DBMS software, management software</p>
      <div class="flex gap-15 mt-6">

        <!-- First Rating -->
        <div class="flex flex-col gap-2">

          <div class="flex gap-1">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
          </div>

          <p>4.9 / 5 rating</p>
          <p>databricks</p>

        </div>

        <!-- Second Rating -->
        <div class="flex flex-col gap-2">

          <div class="flex gap-1">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 5.png" alt="">
            <img src="../assets/Star 9.png" alt="">
          </div>

          <p>4.8 / 5 rating</p>
          <p>Chainalysis</p>

        </div>

      </div>
    </div>
    
<div class="flex flex-col gap-6 mb-4.5 ml-3">

  <!-- Publishing -->
  <div class="flex items-start gap-4">
    <img src="../assets/vector.png" alt="" class=" bg-[#FFFFFF]  p-4 shadow-xl">
    <div>
      <span class="font-bold text-[#191A15]">Publishing</span>
      <p class="text-sm text-[#A6A6A6]">
        Plan, collaborate, and publishing your conten
        that drives meaningful engagement and growth
        for your brand
      </p>
    </div>
  </div>
  <!-- Analytics -->  
  <div class="flex items-start gap-4">
    <img src="../assets/pie-chart 1.png" alt="" class="bg[#FFFFFF] p-4 shadow-xl ">
    <div>
      <span class="font-bold text-[#191A15]">Analytics</span>
      <p class="text-sm text-[#A6A6A6]">
       Analyze your performance and create goegeous <br>report
      </p>
    </div>
  </div>
  <!-- Engagement -->
  <div class="flex items-start gap-4">
    <img src="../assets/vector (1).png" alt="" class="bg[#FFFFFF] p-4 shadow-xl">
    <div>
      <span class="font-bold text-[#191A15]">Engagement</span>
      <p class="text-sm text-[#A6A6A6 ]">
        Quickly navigate and engage with your <br>
        audience
      </p>
    </div>
  </div>
</div>
  </section>


</template>

<script>
import BaseButton from './BaseButton.vue' 
 
export default {
  name: 'support',
  components: {
    BaseButton 
}

}
</script>