<script setup>
import { ref, reactive } from "vue";

// Create emit to pass the info to the parent:
const emit = defineEmits(["create-todo"]);

// Create reactive to combine all of the properties together
const todoState = reactive({
  todo: "",
  invalid: null,
  errMsg: "",
});

// When Using reactive, no need to use .value
const createTodo = () => {
  todoState.invalid = null;
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo);
    // To Return an empty string after user submit
    todoState.todo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Please Enter Your To-Do Item to start...";
};
</script> 

<template>
  <div>
    <div class="input-wrap">
      <input type="text" v-model="todoState.todo" />
      <button @click="createTodo()">Create</button>
    </div>
    <p v-if="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
    <!-- <p v-else class="err-msg">{{ todoState.errMsg }}</p> -->
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>