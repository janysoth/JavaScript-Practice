<template>
    <div class="flex py-3 px-3 bg-cambodia-red rounded-md shadow-md mt-4 mb-4">
        <!-- For City & State Animation -->
        <div class="flex flex-col flex-1 gap-2">
            <AnimatedPlaceholder class="max-w-[50%]" />
            <AnimatedPlaceholder class="max-w-[40%]" />
        </div>

        <!-- For Current Temp and H/L -->
        <div class="flex flex-col items-end flex-1 gap-2">
            <AnimatedPlaceholder class="max-w-[50px] w-full" />
            <AnimatedPlaceholder class="max-w-[75px] w-full" />
        </div>
    </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';


</script>
