<template>
  <div>
    <div v-for="city in savedCities" :key="city.id">
      <CityCard :city="city" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import CityCard from "./CityCard.vue";

const savedCities = ref([]);

// To Retrieve the Cities
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));

    const requests = [];

    savedCities.value.forEach((city) => {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=d5d4f9caa31dc0bc654d876b1d629d6e&units=imperial`
        )
      );
    });

    // To Resolve all of the requests before moving on
    const weatherData = await Promise.all(requests);

    // Take the weaterData from the API and match with the savedCities
    weatherData.forEach((value, index) => {
      savedCities.value[index].weather = value.data;
    });
  }
};

// To Invoke the function
await getCities();
</script>

