<script setup>
import { ref } from "vue";
import { uid } from "uid";
import { Icon } from "@iconify/vue";
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

const todoList = ref([]);

// If the property name is the name as param
// Only need to put one name
const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null,
  });
};

// Mark the todo complete
const toggleTodoComplete = (todoIndex) => {
  todoList.value[todoIndex].isCompleted =
    !todoList.value[todoIndex].isCompleted;
};

// To be able to edit the task:
const toggleEditTodo = (todoIndex) => {
  todoList.value[todoIndex].isEditing = !todoList.value[todoIndex].isEditing;
};

// To Update the todo after editing:
// To Access todo property and set it to todoVal
const updateTodo = (todoVal, todoIndex) => {
  todoList.value[todoIndex].todo = todoVal;
};

// To Delete todo item:
// Use filter function to filter out the particular todoId
// Pass in todo item as param and filtering out
// the element that matches todo.id
const deleteTodo = (todo) => {
  todoList.value = todoList.value.filter(
    (todoFilter) => todoFilter.id !== todo.id
  );
};
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo">
      <template #button-content>Create</template>
    </TodoCreator>
    <ul class="todo-list" v-if="todoList.length > 0">
      <!-- Need to put :key="todo.id" to make the error disappear -->
      <!-- :todo="todo" is a prop that's defined in TodoItem.vue -->
      <TodoItem
        v-for="(todo, index) in todoList"
        :todo="todo"
        :key="todo.id"
        :index="index"
        @toggle-complete="toggleTodoComplete(index)"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face" />
      <span>You have no To-Do's to complete! Add one!</span>
      <Icon icon="noto-v1:sad-but-relieved-face" />
    </p>
  </main>
</template>

<style scoped lang="scss">
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
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>