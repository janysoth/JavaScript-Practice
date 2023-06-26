<template>
  <div class="todo-app">
    <h1>Vue 3 To-Do App</h1>
    <div class="input-wrapper">
      <form @submit.prevent="addNewTodo">
        <div class="input-wrapper">
          <label>Please Add New To-Do Below:</label>
          <input
            v-model="newTodo"
            name="newTodo"
            placeholder="Press ENTER or Click Submit to Add Task..."
            @keydown.enter="addNewTodo"
          />
        </div>
      </form>
      <todo-buttons @add-new-todo="addNewTodo" @remove-all="removeAll" />
      <todo-list :todos="todos" @remove="removeTodo"></todo-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TodoList from "@/components/TodoList.vue";
import TodoButtons from "@/components/TodoButtons.vue";

export default {
  components: {
    TodoList,
    TodoButtons,
  },
  setup() {
    const newTodo = ref("");
    const todos = ref([]);

    function addNewTodo() {
      const trimmedTodo = newTodo.value.trim();
      if (trimmedTodo !== "") {
        todos.value.push({
          id: Date.now(),
          done: false,
          content: trimmedTodo,
          editing: false,
        });
        newTodo.value = "";
      }
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    function removeAll() {
      todos.value = [];
    }

    return {
      newTodo,
      todos,
      addNewTodo,
      removeTodo,
      removeAll,
    };
  },
};
</script>

<style scoped>
:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}

input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: white;
  cursor: initial;
}
.todo-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightskyblue;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.input-wrapper {
  text-align: center;
}

.input-wrapper input {
  display: block;
  width: 300px;
  padding: 1rem 1.5rem;
  color: black;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin: none;
}
.input-wrapper input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: red;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

button[type="submit"] {
  margin-left: 0px;
  display: inline;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #555;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  margin-top: 20px;
}

.todos .done {
  text-decoration: line-through;
  color: #999;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.todo-item .done {
  text-decoration: line-through;
  color: #999;
}

.todo-item button {
  padding: 4px 8px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 12px;
}

.todo-item button:hover {
  background-color: #c0392b;
}

.todo-buttons {
  display: flex;
  justify-content: center;
}

.todo-buttons button {
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.todo-buttons button:last-child {
  margin-right: 0;
}

.todo-buttons button:hover {
  background-color: #555;
}

.button-group {
  display: flex;
  align-items: center;
}

.button-group button {
  margin-right: 6px;
  flex-shrink: 0;
}

.todo-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.todo-buttons button {
  margin-right: 10px;
}

.todo-buttons button:last-child {
  margin-right: 0;
}
</style>
