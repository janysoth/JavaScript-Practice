<template>
  <li :class="{ todo: true, done: todoItem.done }">
    <h3 :class="{ done: todoItem.done }" @click="toggleDone">
      <template v-if="!todoItem.editing">{{ todoItem.content }}</template>
      <template v-else>
        <input v-model="todoItem.content" @keydown.enter="saveTask" />
      </template>
    </h3>
    <div class="button-group">
      <button v-if="!todoItem.editing" @click="editTask">Edit</button>
      <button v-else @click="saveTask">Save</button>
      <button @click="removeTodo">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      todoItem: { ...this.todo },
    };
  },
  methods: {
    toggleDone() {
      this.todoItem.done = !this.todoItem.done;
    },
    editTask() {
      this.todoItem.editing = true;
    },
    saveTask() {
      this.todoItem.editing = false;
      this.todoItem.done = false;
    },
    removeTodo() {
      this.$emit("remove", this.todoItem);
    },
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  width: 400px;
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
  margin-right: 8px;
  border: none;
}

.todo button:hover {
  background-color: #c0392b;
}
</style>
