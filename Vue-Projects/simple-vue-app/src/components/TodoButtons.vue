<template>
  <div class="todo-buttons">
    <button @click="addNewTodo">Submit</button>
    <!-- <button @click="markAllDone">Mark All Done</button> -->
    <button @click="removeAll">Remove All</button>
  </div>
</template>

<script>
export default {
  methods: {
    addNewTodo() {
      this.$emit("add-new-todo");
    },
    markAllDone() {
      this.$emit("mark-all-done");
    },
    removeAll() {
      this.$emit("remove-all");
    },
  },
};
</script>

<style scoped>
.todo-buttons {
  display: flex;
  justify-content: center;
}

.todo-buttons button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
