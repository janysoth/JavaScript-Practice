<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import { useCalculate } from "./useCalculate";
import { useKeyboard } from "./useKeyboard";
import Button from "./Button.vue";
import Screen from "./Screen.vue";
import Grid from "./Grid.vue";

export default defineComponent({
  setup() {
    const calculate = useCalculate();
    const keyboard = useKeyboard();
    return {};
  },
});
</script>

<style scoped>
</style>