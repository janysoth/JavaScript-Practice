<template>
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
        <section class="mx-2 flex justify-between">
            <h2 class="font-bold">{{ currentMonth }}</h2>
            <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex my-2">
            <p class="text-center  w-[14.28%]" v-for="day in days" :key="day">{{ day }}</p>
        </section>
        <section class="flex flex-wrap">
            <p class="text-center w-[14.28%]" v-for="num in 30" :key="num">{{ num }}</p>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMonth: new Date().toLocaleString('default', { month: "long" }),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },
}
</script>

<style></style>