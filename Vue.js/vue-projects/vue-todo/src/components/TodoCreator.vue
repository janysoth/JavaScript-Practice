<script setup>
import { ref, reactive } from "vue";
import TodoButton from "./TodoButton.vue";

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
    <!-- Class Binding, Only input-err class apply when todoState.invalid is true -->
    <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
      <input type="text" v-model="todoState.todo" />
      <TodoButton @click="createTodo()"></TodoButton>
    </div>
    <!-- Use v-show if the item needs toggle often -->
    <!-- <p v-if="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p> -->
    <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

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
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>