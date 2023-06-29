<script setup>
import { ref } from "vue";
import TodoCreator from "../components/TodoCreator.vue";

const todoList = ref([]);

const createTodo = () => {};
</script>

<template>
  <main>
    <h1>Create To-Do Here:</h1>

    <!-- create-todo when the user click on the create button. -->
    <!-- Then create "createTodo" function to call. -->
    <TodoCreator @create-todo="createTodo" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
    text-decoration: underline;
  }
}
</style>
