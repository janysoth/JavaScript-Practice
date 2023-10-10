<template>
  <div>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50" />
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }

    return { close };
  },
}
</script>

<style></style>