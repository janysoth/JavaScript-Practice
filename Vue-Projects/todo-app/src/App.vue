<template>
  <div>
    <h1>Vue 3 To-Do App</h1>
    <!-- To Prevent the page to reload -->
    <form @submit.prevent="addNewTodo">
      <div class="input-wrapper">
        <label>New To-Do:</label>
        <!-- Bind newTodo using model (One-Way Data Binding)-->
        <!-- Anything changes in the input, it will update newTodo -->
        <!-- @keydown.enter - Press Enter to call addNewTodo Function -->
        <input
          v-model="newTodo"
          name="newTodo"
          placeholder="Add your to-do here... When done click SUBMIT or press ENTER.."
          @keydown.enter="addNewTodo"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
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
