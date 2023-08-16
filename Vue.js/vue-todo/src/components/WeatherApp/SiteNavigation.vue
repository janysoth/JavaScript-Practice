<template>
  <header class="sticky top-0 bg-cambodia-red shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <!-- Weather Icon and Header for the WeatherApp -->
      <RouterLink :to="{ name: 'WeatherApp' }" class="hover:text-cambodia-blue duration-150 cursor-pointer">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-xl"> </i>
          <p class="text-xl flex items-center">Your Local Weather</p>
        </div>
      </RouterLink>
      <!---->

      <!-- BaseModal and Plus icon -->
      <div class="flex gap-3 flex-1 justify-end">
        <i class="fa-solid fa-circle-info text-xl hover:text-cambodia-blue duration-150 cursor-pointer"
          @click="toggleModal"></i>
        <!-- Only show the plus sign the query set to preview -->
        <i class="fa-solid fa-plus text-xl hover:text-cambodia-blue duration-150 cursor-pointer" @click="addCity"
          v-if="route.query.preview"></i>
      </div>
      <!---->

      <!-- Import BaseModal Component -->
      <!-- v-bind:modalActive -->
      <!-- close-modal: the function that emit in BaseModal -->
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather
            of cities of your choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking on the "+" icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>

          <h2 class="text-2xl">Removing a city</h2>
          <p>
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be am option to
            delete the city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import BaseModal from "./BaseModal.vue";

// To store the saved cities
const savedCities = ref([]);

// To reference the vue route
// To get the params for the city
const route = useRoute();

// Use this to update the URL info
// Ex: to remove query string from the URL
const router = useRouter();

// To Ad City to the LocalStorage
const addCity = () => {
  // Check to see if there's any saved cities 
  // Then add the cities to savedCities Array
  if (localStorage.getItem('savedCities')) {
    savedCities.value = JSON.parse(localStorage.getItem('savedCities'));
  }

  // Save the cities information 
  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  // Push the locationObj to savedCities Array
  // Then update this to the localStorage
  savedCities.value.push(locationObj);
  localStorage.setItem(
    "savedCities",
    JSON.stringify(savedCities.value)
  );

  // To remove query string from the URL
  // Replace the query string to the locationObj Id
  let query = Object.assign({}, route.query);
  delete query.preview;

  // Set the locationObj id to the query.id to show in the URL
  query.id = locationObj.id;
  router.replace({ query });
}

// modalActive will reflex that in the template
const modalActive = ref(null);

// To set the value of modalActive to be the opposite
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
