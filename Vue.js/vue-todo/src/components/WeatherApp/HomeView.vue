<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a City or State here..."
        class="py-2 px-1 w-full bg-transparent border-b focus:border-cambodia-red focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />

      <!-- To Display the mapBox API Search Result -->
      <!-- Using the li tag with v-for loop -->
      <ul
        class="absolute bg-cambodia-red text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapboxSearchResults"
      >
        <!-- Show the error message -->
        <p v-if="searchError">Sorry, something went wrong, please try again.</p>

        <!-- Show the message when no option to select -->
        <p v-if="!searchError && mapboxSearchResults.length === 0">
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
          >
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

const mapboxAPIKey =
  "pk.eyJ1IjoiamFueXNvdGgiLCJhIjoiY2xrNmh6aGxrMDFyajNkbjZtcG0zOW9ucCJ9.fJVr0w5o2-i_a2robqjz-g";

// This will capture when user type in the input using v-model in the template
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
        console.log(mapboxSearchResults);
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