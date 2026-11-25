<template>
    <section class="mx-auto max-w-6xl px-6 py-16 gap-4">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h1 class="text-[#191A15] font-bold text-[40px]">What Benifit Will <br>You Get</h1>
            <div class="">
                <img src="../assets/Rectangle 48.png " alt="">
            </div>
        </div>
        <div class="flex items-center gap-3">
            <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
            <p class="text-sm text-gray-500"> Free Consulting With Expert Saving Money </p>
        </div>
        <div class="flex items-center gap-3 mt-5">
            <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
            <p class="text-sm text-gray-500 "> Online Banking </p>
        </div>
        <div class="flex items-center gap-3 mt-5">
            <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0 " />
            <p class="text-sm text-gray-500">Investment Report Every Month </p>
        </div>
        <div class="flex items-center gap-3 mt-5">
            <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
            <p class="text-sm text-gray-500"> Saving Money For The Future </p>
        </div>
        <div class="flex items-center gap-3 mt-5">
            <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
            <p class="text-sm text-gray-500"> Online Transection </p>
        </div>
    </section>
</template>
<script>
import BaseButton from './BaseButton.vue'
export default {
    name: ' Benifit',
    components: {
        BaseButton,
    },
}

</script>