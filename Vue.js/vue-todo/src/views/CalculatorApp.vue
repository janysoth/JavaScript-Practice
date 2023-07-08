<template>
  <div
    class="p-3"
    style="max-width: 400px; margin: 50px auto; background: #234"
  >
    <!-- Calculator Result -->
    <div
      class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark"
    >
      {{ calculatorValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  props: {
    msg: String,
  },
  data() {
    return {
      calculatorValue: "0",
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-vue-dark {
  background: #cad5e2;
}
</style>

