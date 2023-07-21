<template>
  <div class="flex flex-col flex-1 items-center">
    <!-- Banner -->
    <!-- To show the preview of the city and not yet added to the application -->
    <div
      v-if="route.query.preview"
      class="text-white p-4 bg-weather-secondary w-full text-center"
    >
      <p>
        You are currently previewing this city, click the "+" icon to start
        tracking this city.
      </p>
    </div>

    <!-- Weather Overview -->
    <div class="flex flex-col text-white items-center py-12">
      <!-- To Show the City name using the params set for cityView -->
      <h1 class="text-4xl mb-2">
        {{ route.params.city }}, {{ route.params.state }}
      </h1>

      <!-- To Show Date & Time -->
      <p class="text-sm mb-12">
        {{
          new Date(weatherData.currentTime).toLocaleDateString("en-us", {
            weekday: "short",
            day: "2-digit",
            month: "long",
          })
        }}
        {{
          new Date(weatherData.currentTime).toLocaleTimeString("en-us", {
            timeStyle: "short",
          })
        }}
      </p>

      <!-- To Show Current Temperature -->
      <p class="text-8xl mb-8">
        {{ Math.round(weatherData.current.temp) }}&deg;F
      </p>

      <!-- To Show Other Weather Information -->
      <p>Feels Like: {{ Math.round(weatherData.current.feels_like) }}&deg;F</p>
      <p class="capitalize">
        {{ weatherData.current.weather[0].description }}
      </p>
      <img
        class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=d5d4f9caa31dc0bc654d876b1d629d6e&units=imperial`
    );

    // cal current date & time
    // To Update Time according to the time zone
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    // cal hourly weather offset
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};

const weatherData = await getWeatherData();

console.log(weatherData);
</script>
