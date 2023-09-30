<template>
  <section class="flex justify-center items-center w-full">
    <div class="mx-auto w-90 max-w-[400px] bg-lightcoral rounded-[20px] overflow-hidden border-3 border-goldenrod">
      <h1 class="text-2xl text-center">Calculator</h1>
      <div class="bg-whitesmoke text-right text-30px relative">
        <p class="text-3xl text-right mt-5 w-00 h-10 px-2 py-2 bg-white text-gray-800 rounded-lg shadow-md"
          style="direction: rtl">
          {{ currentNum }}</p>
        <div class="w-40 h-10 text-left">
          <small v-if="selectedOperation" class="text-gray-600">
            {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
          </small>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-1 w-[300px] h-[300px] textxl">
        <CalculatorButton @click="pressed('C')" color="red" class="hover:opacity-60" button-text="C" />
        <CalculatorButton @click="pressed('CE')" color="red" class="hover:opacity-60" button-text="CE" />
        <CalculatorButton @click="deleteLast" color="red" class="hover:opacity-60" button-text="←" />
        <CalculatorButton @click="pressed('/')" color="red" class="hover:opacity-60" button-text="/" />
        <CalculatorButton @click="pressed('1')" color="blue" class="hover:opacity-60" button-text="1" />
        <CalculatorButton @click="pressed('2')" color="blue" class="hover:opacity-60" button-text="2" />
        <CalculatorButton @click="pressed('3')" color="blue" class="hover:opacity-60" button-text="3" />
        <CalculatorButton @click="pressed('+')" color="red" class="hover:opacity-60" button-text="+" />
        <CalculatorButton @click="pressed('4')" color="blue" class="hover:opacity-60" button-text="4" />
        <CalculatorButton @click="pressed('5')" color="blue" class="hover:opacity-60" button-text="5" />
        <CalculatorButton @click="pressed('6')" color="blue" class="hover:opacity-60" button-text="6" />
        <CalculatorButton @click="pressed('-')" color="red" class="hover:opacity-60" button-text="-" />
        <CalculatorButton @click="pressed('7')" color="blue" class="hover:opacity-60" button-text="7" />
        <CalculatorButton @click="pressed('8')" color="blue" class="hover:opacity-60" button-text="8" />
        <CalculatorButton @click="pressed('9')" color="blue" class="hover:opacity-60" button-text="9" />
        <CalculatorButton @click="pressed('*')" color="red" class="hover:opacity-60" button-text="x" />
        <CalculatorButton @click="pressed('.')" color="red" class="hover:opacity-60" button-text="." />
        <CalculatorButton @click="pressed('0')" color="blue" class="hover:opacity-60" button-text="0" />
        <CalculatorButton @click="pressed('=')" color="red" class="col-span-2 hover:opacity-60" button-text="=" />
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