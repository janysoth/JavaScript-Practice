<template>
  <div>
    <!-- <button class="text-red" :class="{
      [`bg-${color}-500`]: color,
    }" @click="onButtonClick">
      {{ buttonText }}
    </button> -->

    <button @click="onButtonClick" :class="['bg-' + color + '-500 text-white w-10 h-10']">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  methods: {
    onButtonClick() {
      this.$emit("button-clicked");
    },
  },
};
</script>
