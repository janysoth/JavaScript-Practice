<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="text-3xl text-right mt-10 w-40 h-10 bg-white text-gray-800 rounded-lg shadow-md" style="direction: rtl">{{
        currentNum }}</p>

      <div class="h-10 w-40 text-left">
        <small v-if="selectedOperation" class="text-gray-600">
          {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
        </small>
      </div>
      <div class="grid grid-cols-4 gap-1">
        <!-- <button @click="pressed('C')" class="bg-red-500 text-white">C</button> -->
        <!-- <button @click="pressed('CE')" class="bg-red-500 text-white">CE</button> -->
        <!-- <button @click="deleteLast" class="bg-red-500 text-white">←</button> -->
        <!-- <button @click="pressed('/')" class="bg-orange-500 text-white">/</button> -->
        <CalculatorButton @click="pressed('C')" color="red" class="hover:opacity-60" button-text="C" />
        <CalculatorButton @click="pressed('CE')" color="red" class="hover:opacity-60" button-text="CE" />
        <CalculatorButton @click="deleteLast" color="red" class="hover:opacity-60" button-text="←" />
        <CalculatorButton @click="pressed('/')" color="orange" class="hover:opacity-60" button-text="/" />
        <button @click="pressed('1')" class="bg-blue-500 text-white">1</button>
        <button @click="pressed('2')" class="bg-blue-500 text-white">2</button>
        <button @click="pressed('3')" class="bg-blue-500 text-white">3</button>
        <button @click="pressed('+')" class="bg-orange-500 text-white">+</button>
        <button @click="pressed('4')" class="bg-blue-500 text-white">4</button>
        <button @click="pressed('5')" class="bg-blue-500 text-white">5</button>
        <button @click="pressed('6')" class="bg-blue-500 text-white">6</button>
        <button @click="pressed('-')" class="bg-orange-500 text-white">-</button>
        <button @click="pressed('7')" class="bg-blue-500 text-white">7</button>
        <button @click="pressed('8')" class="bg-blue-500 text-white">8</button>
        <button @click="pressed('9')" class="bg-blue-500 text-white">9</button>
        <button @click="pressed('*')" class="bg-orange-500 text-white">×</button>
        <button @click="pressed('.')" class="bg-red-500 text-white">.</button>
        <button @click="pressed('0')" class="bg-blue-500 text-white">0</button>
        <button @click="pressed('=')" class="bg-green-500 text-white col-span-2">=</button>
      </div>
    </div>
  </section>
</template>


<script>

import { onMounted, onUnmounted, ref } from 'vue';
import CalculatorButton from '@/components/CalculatorApp/CalculatorButton.vue'

export default {
  components: {
    CalculatorButton,
  },
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

    const deleteLast = (() => {
      currentNum.value = currentNum.value.toString().slice(0, -1);
    });



    const handledKeydown = (e) => pressed(e.key);

    onMounted(() =>
      window.addEventListener('keydown', handledKeydown));

    // To remove eventListener after leaving this page
    onUnmounted(() =>
      window.removeEventListener('keydown', handledKeydown));

    return { currentNum, prevNum, pressed, calculate, applyOperation, appendNumber, clear, selectedOperation, multiply, divide, subtract, sum, deleteLast };
  },

};
</script>

<style></style>