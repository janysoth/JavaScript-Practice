<script setup></script>
<template>
  <div>
    <button>
      <!-- Use slot to change the button name dynamically -->
      <!-- Put in the name in case the user did not name the button -->
      <slot>Create</slot>
    </button>
  </div>
</template>



<style lang="scss" scoped>
button {
  padding: 8px 16px;
  border: none;
  background-color: lightgrey;
}
</style>