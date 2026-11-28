<template>
    <section id="Benifit"  class="mx-auto max-w-6xl px-6 py-16">
        <div class="grid items-center gap-12 md:grid-cols-2">

            <!-- Bidix -->
            <div>
                <h1 class="text-[#191A15] font-bold text-[40px]">What Benifit Will <br>You Get</h1>

                <div class="flex items-center gap-3 mt-8">
                    <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
                    <p class="text-sm font-medium text-[#191A15]"> Free Consulting With Expert Saving Money </p>
                </div>
                <div class="flex items-center gap-3 mt-5">
                    <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
                    <p class="text-sm font-medium text-[#191A15]"> Online Banking </p>
                </div>
                <div class="flex items-center gap-3 mt-5">
                    <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
                    <p class="text-sm font-medium text-[#191A15]"> Investment Report Every Month </p>
                </div>
                <div class="flex items-center gap-3 mt-5">
                    <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
                    <p class="text-sm font-medium text-[#191A15]"> Saving Money For The Future </p>
                </div>
                <div class="flex items-center gap-3 mt-5">
                    <img src="../assets/check-icon.png" alt="" class="h-6 w-6 shrink-0" />
                    <p class="text-sm font-medium text-[#191A15]"> Online Transaction </p>
                </div>
            </div>

            <!-- Midig -->
            <div class="flex justify-center md:justify-end">
                <img src="../assets/Rectangle 48.png" alt="" class="w-full max-w-[480px]">
            </div>

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