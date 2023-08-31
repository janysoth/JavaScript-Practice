<template>
    <div class="m-auto p-4 bg-gray-100 rounded-lg shadow-lg my-2">
        <h1 class="text-3xl mb-4 text-center font-semibold text-blue-700">Vue Calendar</h1>
        <section class="flex justify-between mb-4">
            <h2 class="font-bold">{{ currentMonthName }}</h2>
            <h2 class="font-bold">{{ currentYear }}</h2>
        </section>
        <section class="flex my-2 bg-white rounded-lg shadow-md">
            <p class="text-center w-[14.28%] py-2 border-b" v-for="day in days" :key="day">{{ day }}</p>
        </section>
        <section class="flex flex-wrap">
            <p class="text-center w-[14.28%] p-2 border" v-for="num in startDate()" :key="num"></p>
            <p class="text-center w-[14.28%] p-2 border" v-for="num in daysInMonth(currentYear, currentMonth)" :key="num">{{
                num }}</p>
        </section>
        <section class="flex justify-between my-4">
            <button class="px-2 border rounded hover:bg-red-100" @click="previousMonth">Previous</button>
            <button class="px-2 border rounded hover:bg-red-100" @click="nextMonth">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },

    methods: {
        daysInMonth(year, month) {

            const lastDay = new Date(year, month + 1, 0).getDate();
            return lastDay;
        },

        startDate() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        nextMonth() {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        previousMonth() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
    },
    computed: {
        currentMonthName() {
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: "long" });
        },
    },
}
</script>

<style></style>