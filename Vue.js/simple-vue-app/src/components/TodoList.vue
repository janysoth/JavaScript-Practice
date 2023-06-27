<template>
  <ul>
    <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      @remove="removeTodo(index)"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(index) {
      this.$emit("remove", index);
    },
  },
};
</script>
