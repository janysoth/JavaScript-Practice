<template>
    <div>

    </div>
</template>

<script setup>

import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

// To Retrieve current weather: 
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
console.log(weatherData);

</script>
