<template>
  <div
    class="relative flex justify-end items-center px-5 rounded-lg bg-gray-900"
  >
    <div class="overflow-hidden text-right">
      <span
        v-if="!error"
        class="float-right whitespace-pre pr-5"
        data-test="text"
      >
        {{ text }}
      </span>
      <span
        v-else
        class="float-right whitespace-nowrap text-red-400 pr-5"
        data-test="error"
      >
        Invalid expression
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Screen",
  props: {
    text: { type: String, default: "" },
    error: { type: Boolean, default: false },
  },
});
</script>