<template>
  <div class="todo-app">
    <h1>Vue 3 To-Do App</h1>
    <!-- To Prevent the page to reload -->
    <form @submit.prevent="addNewTodo">
      <div class="input-wrapper">
        <label>Please Add New To-Do Below:</label>
        <!-- Bind newTodo using model (One-Way Data Binding)-->
        <!-- Anything changes in the input, it will update newTodo -->
        <!-- @keydown.enter - Press Enter to call addNewTodo Function -->
        <input
          v-model="newTodo"
          name="newTodo"
          placeholder="Press ENTER or Click Submit to Add Task..."
          @keydown.enter="addNewTodo"
        />
      </div>
    </form>
    <button type="submit" @click="addNewTodo">Submit</button>
    <button @click="markAllDone">Mark All Done</button>
    <button @click="removeAll">Remove All</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
        <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">
          <!-- Use a conditional statement to display either the task or an input field based on the edit state -->
          <template v-if="!todo.editing">
            {{ todo.content }}
          </template>
          <template v-else>
            <input v-model="todo.content" @keydown.enter="saveTask(todo)" />
          </template>
        </h3>
        <div class="button-group">
          <!-- Use a conditional statement to display either the "Edit" or "Save" button based on the edit state -->
          <button v-if="!todo.editing" @click="editTask(todo)">Edit</button>
          <button v-else @click="saveTask(todo)">Save</button>
          <button @click="removeTodo(index)">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // To use composition API, use setup property
  // Need to return any functions or const
  setup() {
    // ref is an object wrapper
    // To Change, use .value
    const newTodo = ref("");
    const todos = ref([]);

    // Only to add new todo if the input is not blank:
    function addNewTodo() {
      if (newTodo.value.trim() !== "") {
        todos.value.push({
          id: Date.now(),
          done: false,
          content: newTodo.value.trim(),
        });

        newTodo.value = "";
      }
    }

    // To Mark As Done with strikethrough:
    function toggleDone(todo) {
      todo.done = !todo.done;
    }

    // To Remove todo from the array by using splice method:
    // Splice: remove One specific index from the array:
    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    // To Mark All Done
    // Use forEach function to reiterate through the array
    // To mark each todo done
    function markAllDone() {
      todos.value.forEach((todo) => (todo.done = true));
    }

    function removeAll() {
      todos.value = [];
    }

    function editTask(todo) {
      todo.editing = true;
    }

    function saveTask(todo) {
      todo.editing = false;
      todo.done = false;
    }
    return {
      newTodo,
      todos,
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      removeAll,
      editTask,
      saveTask,
    };
  },
};
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  max-block-size: 500px;
  background-color: lightskyblue;
}

h1 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-wrapper {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 750px;
  box-sizing: border-box;
}

button[type="submit"] {
  margin-left: 6px;
  display: inline;
}

.button-group {
  display: flex;
  align-items: center;
}

.button-group button {
  flex-shrink: 0;
}

button {
  display: inline;
  padding: 8px 16px;
  margin: 6px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.todo .done {
  text-decoration: line-through;
  color: #999;
}

.todo button {
  padding: 4px 8px;
  background-color: #e74c3c;
  color: #fff;
}

.todo button:hover {
  background-color: #c0392b;
}
</style>
