<template>
    <div class="flex flex-wrap w-full">
        <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
            <div v-if="currentSlide == index" :class="color" style="height:350px"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            interval: "",
            sliders: ['bg-teal-600', 'bg-blue-600', 'bg-yellow-600']
        };
    },

    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
        }, 1000)
    },

    beforeMount() {
        clearInterval(this.interval);
    },

};
</script>

<style></style>