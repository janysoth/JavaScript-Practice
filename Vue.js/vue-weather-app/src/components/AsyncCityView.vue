<template>
  <div class="flex flex-col flex-1 items-center">
    <!-- Banner -->
    <!-- To show the preview of the city and not yet added to the application -->
    <div v-if="route.query.preview" class="text-white p-4 bg-weather-secondary w-full text-center">
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
      <img class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`" alt="" />
    </div>

    <!-- Horizonal Ruler -->
    <hr class="border-white border-opacity-10 border w-full" />

    <!-- Hourly Weather -->
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4">Hourly Weather:</h2>
        <!-- overflow-x-scroll: allow the user to scroll on the x-axis -->
        <div class="flex gap-10">

          <!-- To iterate the hourly temp using v-for -->
          <!-- Only to show the next 9 hours using slice method -->
          <div v-for="(hourData, index) in weatherData.hourly.slice(0, 9)" :key="index"
            class="flex flex-col gap-4 items-center">

            <!-- Display items on the page -->
            <p class="whitespace-nowrap text-md">
              {{ new Date(hourData.currentTime).toLocaleTimeString("en-us", {
                hour: "numeric",
              })
              }}
            </p>
            <img class="w-auto h-[50px] object-cover" :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`
              " alt="" />
            <p class="text-xl">
              {{ Math.round(hourData.temp) }}&deg;F
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizonal Ruler -->
    <hr class="border-white border-opacity-10 border w-full" />

    <!-- Weekly Weather -->
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4">7-Day Forecast:</h2>

        <!-- // To get the days from the weatherData Array using v-for -->
        <div v-for="day in weatherData.daily" :key="day.dt" class="flex items-center">

          <!-- To Display Day of the Week-->
          <p class="flex-1">
            {{
              new Date(day.dt * 1000).toLocaleDateString(
                "en-us",
                {
                  weekday: "long",
                  day: "2-digit",
                  month: "2-digit",
                }
              )
            }}
          </p>

          <!-- To Display Weather Discription Icon -->
          <img class="w-[50px] h-[50px] object-cover" :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
              " alt="" />

          <!-- To Display the max and min temp -->
          <div class="flex gap-2 flex-1 justify-end">
            <p>H: {{ Math.round(day.temp.max) }}&deg;F</p>
            <p>L: {{ Math.round(day.temp.min) }}&deg;F</p>
          </div>
        </div>
      </div>
    </div>

    <!-- An option to remove the city -->
    <div class="flex items-center gap-2 py-12 text-white cursor-pointer duration-150 hover:text-red-500"
      @click="removeCity">
      <i class="fa-solid fa-trash" />
      <p>Remove City</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

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

    // Flicker Delay to load the data (750 = 0.75sec)
    await new Promise((res) => setTimeout(res, 750));

    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};

const weatherData = await getWeatherData();

// Use Router to re-direct the user back to the homepage after remove the city
const router = useRouter();

const removeCity = () => {
  // To get savedCities from localStorage
  const cities = JSON.parse(localStorage.getItem('savedCities'));

  // To remove the city from the array based on the query.id
  const updatedCities = cities.filter((city) => city.id !== route.query.id);

  // To update the localStorage with the updatedCities
  localStorage.setItem("savedCities", JSON.stringify(updatedCities));

  // Route the user back to the Home Page
  router.push({
    name: "home",
  });
};
</script>
