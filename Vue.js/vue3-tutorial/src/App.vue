<template>
  <h1 v-if="isShowing" v-html="title"></h1>
  <p>Something else...</p>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>This is title within h1 tag.</h1>",
      isShowing: true,
    };
  }
};
</script>

<style lang="scss" scoped></style>