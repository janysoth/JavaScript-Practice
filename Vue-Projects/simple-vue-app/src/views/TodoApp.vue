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
  margin-bottom: 20px;
  text-align: center;
}

.input-wrapper input {
  width: 350px;
  padding: 12px;
  border: 1px solid red;
  border-radius: 4px;
  box-sizing: border-box;
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
