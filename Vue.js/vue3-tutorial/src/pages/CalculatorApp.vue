<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="text-3xl  text-right mt-10 mb-2  w-32 h-10 overflow-x-scroll" style="direction:rtl">{{ calculation }}</p>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')" class="p-2 border rounded  shadow w-10 h-10">1</button>
        <button @click="pressed('2')" class="p-2 border rounded  shadow w-10 h-10">2</button>
        <button @click="pressed('3')" class="p-2 border rounded  shadow w-10 h-10">3</button>
        <button @click="pressed('+')" class="p-2 border rounded  shadow w-10 h-10">+</button>
        <button @click="pressed('4')" class="p-2 border rounded  shadow w-10 h-10">4</button>
        <button @click="pressed('5')" class="p-2 border rounded  shadow w-10 h-10">5</button>
        <button @click="pressed('6')" class="p-2 border rounded  shadow w-10 h-10">6</button>
        <button @click="pressed('-')" class="p-2 border rounded  shadow w-10 h-10">-</button>
        <button @click="pressed('7')" class="p-2 border rounded  shadow w-10 h-10">7</button>
        <button @click="pressed('8')" class="p-2 border rounded  shadow w-10 h-10">8</button>
        <button @click="pressed('9')" class="p-2 border rounded  shadow w-10 h-10">9</button>
        <button @click="pressed('*')" class="p-2 border rounded  shadow w-10 h-10">*</button>
        <button @click="pressed('C')" class="p-2 border rounded  shadow w-10 h-10 ">C</button>
        <button @click="pressed('0')" class="p-2 border rounded  shadow w-10 h-10 ">0</button>
        <button @click="pressed('=')" class="p-2 border rounded  shadow w-10 h-10">=</button>
        <button @click="pressed('/')" class="p-2 border rounded  shadow w-10 h-10">/</button>
      </div>
    </div>
  </section>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const currentNum = ref("");
    const operations = ['+', '-', '*', '/'];
    const previousNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=") calculate();
      else if (value === "C") clear();
      else if (operations.includes(value)) applyOperation(value);
      else appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      currentNum.value = previousNum.value;
      currentNum.value = "";
    }

    function calculate() {

    }

    function clear() {
      currentNum.value = '';
    }

    return { calculation: currentNum, pressed, calculate, applyOperation, appendNumber, clear };
  },

}
</script>

<style></style>