<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="text-3xl  text-right mt-10 w-40 h-10" style="direction:rtl">{{ currentNum }}
      </p>

      <div class="h-10 w-40 text-left">
        <small v-if="selectedOperation">
          {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
        </small>
      </div>
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
        <button @click="pressed('*')" class="p-2 border rounded  shadow w-10 h-10">x</button>
        <button @click="pressed('C')" class="p-2 border rounded  shadow w-10 h-10 ">C</button>
        <button @click="pressed('0')" class="p-2 border rounded  shadow w-10 h-10 ">0</button>
        <button @click="pressed('=')" class="p-2 border rounded  shadow w-10 h-10">=</button>
        <button @click="pressed('/')" class="p-2 border rounded  shadow w-10 h-10">/</button>
      </div>
    </div>
  </section>
</template>

<script>

import { onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const currentNum = ref("");
    const operations = ['+', '-', '*', '/'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "C") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      // if (currentNum.value !== "")
      //   clear();
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      // Before apply any operation, calculate firts:
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    // When the user click on the "="
    function calculate() {
      if (selectedOperation.value === '*') multiply();
      else if (selectedOperation.value === '/') divide();
      else if (selectedOperation.value === '-') subtract();
      else if (selectedOperation.value === '+') sum();

      prevNum.value = '';
      selectedOperation.value = '';
    }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    const clear = (() => {
      currentNum.value = '';
      prevNum.value = '';
      selectedOperation.value = '';
    });

    const handledKeydown = (e) => pressed(e.key);

    onMounted(() =>
      window.addEventListener('keydown', handledKeydown));

    // To remove eventListener after leaving this page
    onUnmounted(() =>
      window.removeEventListener('keydown', handledKeydown));

    return { currentNum, prevNum, pressed, calculate, applyOperation, appendNumber, clear, selectedOperation, multiply, divide, subtract, sum };
  },

};
</script>

<style></style>