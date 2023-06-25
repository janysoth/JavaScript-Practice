<template>
  <li :class="{ todo: true, done: todoCopy.done }">
    <h3 :class="{ done: todoCopy.done }" @click="toggleDone">
      <template v-if="!todoCopy.editing">{{ todoCopy.content }}</template>
      <template v-else>
        <input v-model="todoCopy.content" @keydown.enter="saveTask" />
      </template>
    </h3>
    <div class="button-group">
      <button v-if="!todoCopy.editing" @click="editTask">Edit</button>
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
      todoCopy: { ...this.todo },
    };
  },
  methods: {
    toggleDone() {
      this.todoCopy.done = !this.todoCopy.done;
    },
    editTask() {
      this.todoCopy.editing = true;
    },
    saveTask() {
      this.todoCopy.editing = false;
      this.todoCopy.done = false;
    },
    removeTodo() {
      this.$emit("remove", this.todoCopy);
    },
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  width: 300px;
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
