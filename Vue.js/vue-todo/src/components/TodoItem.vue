<script setup>
import { Icon } from "@iconify/vue";
// Use Object for Prop as easy to define the prop
// default needs to be a construction function
const props = defineProps({
  todo: {
    type: Object,
    require: true,
    default: () => {},
  },
  index: {
    type: Number,
    require: true,
  },
});

// Add each emit here:
defineEmits(["toggle-complete", "edit-todo", "update-todo", "delete-todo"]);
</script>

<template>
  <li>
    <!-- $emit is an inline emit -->
    <input
      type="checkbox"
      :checked="todo.isCompleted"
      @input="$emit('toggle-complete', index)"
    />
    <div class="todo">
      <!-- To save the item when the user click the check icon -->
      <!-- $event.target.value = the value the user just edited -->
      <!-- Listen for the change in the input and update the todo -->
      <input
        v-if="todo.isEditing"
        type="text"
        :value="todo.todo"
        @input="$emit('update-todo', $event.target.value, index)"
      />
      <!-- This will update the class and put a strikethrough -->
      <span v-else :class="{ 'completed-todo': todo.isCompleted }">
        {{ todo.todo }}
      </span>
    </div>
    <!-- Both icons call for the same function  -->
    <!-- Check icon appear when isEditing is true and click the icon to save -->
    <!-- Pencile icon appears when isEditing is false and click the icon to edit -->
    <div class="todo-actions">
      <Icon
        v-if="todo.isEditing"
        icon="ph:check-circle"
        class="icon check-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        class="icon edit-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        icon="ph:trash"
        class="icon trash-icon"
        color="f95e5e"
        width="22"
        @click="$emit('delete-todo', todo)"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:checked {
      background-color: #41b080;
    }
  }

  .todo {
    flex: 1;
    .completed-todo {
      text-decoration: line-through;
    }

    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }

  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}
</style>