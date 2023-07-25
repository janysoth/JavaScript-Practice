// To have this 
  components: { BaseModal },component present on every page
// Import this component in the App.vue
<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <!-- Set the header to the RouterLink to navigate back to the home screen -->
      <!-- the name is the route name not the path -->
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">Your Local Weather</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="toggleModal"
        ></i>

        <!-- Plus Icon to add a city to Local Storage -->
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
          @click="addCity"
          v-if="route.query.preview"
        ></i>
      </div>

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
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { uid } from "uid";
import BaseModal from "./BaseModal.vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

// To Store the Cities when the user click the "+"
const savedCities = ref([]);

// Use useRoute to ref view Router
// Add those info of a city into savedCities
const route = useRoute();

// To Remove preview URL from the route
const router = useRouter();

const addCity = () => {
  // To Check to see if there's any savedCities
  // Then Add to the savedCities Array
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  // To Add Each City's info into the object
  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  // Add locationObj into the savedCities Array
  savedCities.value.push(locationObj);

  // Add savedCities to Local Storage using JSON.stringify
  localStorage.setItem("savedCities", JSON.stringify(savedCities));

  // To Delete preview URL from the link
  let query = Object.assign({}, route.query);
  delete query.preview;
  router.replace({ query });
};
</script>

<style scoped>
</style>