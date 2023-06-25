<template>
  <div class="button-group">
    <button @click="markAllDone">Mark All Done</button>
    <button @click="removeAll">Remove All</button>
  </div>
</template>

<script>
export default {
  methods: {
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
.button-group {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.button-group button {
  margin-right: 6px;
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

.todo .done {
  text-decoration: line-through;
  color: #999;
}
</style>
