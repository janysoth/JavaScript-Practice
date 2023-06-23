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
    <button type="submit">Submit</button>
    <button @click="markAllDone">Mark All Done</button>
    <button @click="removeAll">Remove All</button>
    <ul>
      <!-- To Pass the value, need v-bind (:) -->
      <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
        <!-- Use class binding to change the class when Mark as Done -->
        <!-- a .done class is created when todo.done is true -->
        <h3 :class="{ done: todo.done }" @click="toggleDone(todo)">
          {{ todo.content }}
        </h3>
        <!-- To Remove todo using index (slice from the array) -->
        <button @click="removeTodo(index)">Remove</button>
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
    return {
      newTodo,
      todos,
      addNewTodo,
      toggleDone,
      removeTodo,
      markAllDone,
      removeAll,
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
}

h1 {
  text-align: center;
  color: #333;
}

form.add-todo-form {
  display: flex;
  margin-bottom: 20px;
}

.input-wrapper {
  flex-grow: 1;
  margin-right: 10px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 450px;
}

button[type="submit"] {
  margin-left: 12px;
  display: inline;
}

button {
  display: inline;
  padding: 8px 16px;
  margin-top: 12px;
  margin-right: 12px;
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
