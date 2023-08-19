<template>
    <div class="city-card flex py-3 px-3 bg-cambodia-red rounded-md shadow-md cursor-pointer mt-3 mb-3"
        @mouseover="showDeleteButton = true" @mouseleave="showDeleteButton = false">
        <div class="city-info flex flex-col flex-1">
            <h2 class="text-3xl">{{ city.city }}</h2>
            <h3>{{ city.state }}</h3>
        </div>

        <div class="weather-info flex flex-col gap-2">
            <p class="text-3xl">{{ Math.round(city.weather.main.temp) }}&deg;F</p>
            <div class="flex gap-2">
                <span class="text-xs">
                    H: {{ Math.round(city.weather.main.temp_max) }}&deg;F
                </span>
                <span class="text-xs">
                    L: {{ Math.round(city.weather.main.temp_min) }}&deg;F
                </span>
            </div>
        </div>

        <button v-show="showDeleteButton" class="delete-button ml-4 py-1 px-2 rounded" @click="deleteCity(city)">
            <i class="fa-solid fa-trash" />
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    city: {
        type: Object,
        default: () => ({})
    }
});

const showDeleteButton = ref(false);

const emit = defineEmits(["delete-city"]);

const deleteCity = (city) => {
    event.stopPropagation();
    emit("delete-city", city);
};
</script>