<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <!-- Use v-model to capture the variable below -->
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search For A City or State..."
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />

      <!-- To show mapboxSearchResults on the page -->
      <!-- Use v-if to show the options if the search input is NOT empty -->
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top[6px]"
        v-if="mapboxSearchResults"
      >
        <!-- Show the error message -->
        <p v-if="searchError">Sorry, something went wrong, please try again.</p>

        <!-- Show the message when no option to select -->
        <p v-if="!serverError && mapboxSearchResults.length === 0">
          No results match your query, try a different term.
        </p>

        <!-- Can't have v-if and v-for together so use template for v-else -->
        <template v-else>
          <!-- Use v-for to re-iterate throught the mapboxSearchResults -->
          <!-- Need v-bind the key with each searchResult id -->
          <!-- previewCity(searchResult) to take the option that user click on -->
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            <!-- To get the searchResult from the v-for loop -->
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

// This will route whatever user choose from the query
const router = useRouter();

const previewCity = (searchResult) => {
  console.log("Preview City:", searchResult);

  // Use split function to seperate city and state
  const [city, state] = searchResult.place_name.split(",");

  // Router will route the user using  push function
  // name: is the cityView.vue
  // params: city and state
  router.push({
    name: "cityView",
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const mapboxAPIKey =
  "pk.eyJ1IjoiamFueXNvdGgiLCJhIjoiY2xrNmh6aGxrMDFyajNkbjZtcG0zOW9ucCJ9.fJVr0w5o2-i_a2robqjz-g";

const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  // Clear timeout after the getSearchResults got ran
  clearTimeout(queryTimeout.value);

  // Use lazy Searching: After a short period of time user stop typing
  // Use setTimeout function
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        // ? Mark after .json is for optional parameters
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );

        // To Search the search box result
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }

      // To return back and not execute the codes below
      return;
    }
    // If it's not true: searchQuery is empty
    mapboxSearchResults.value = null;
  }, 300);
};
</script>

