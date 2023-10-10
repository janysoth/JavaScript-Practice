<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-Usable Modal</h1>
      <Modal v-if="isModalOpen" @close="isModalOpen = false" />
    </div>
  </section>
</template>

<script>
import Modal from "@/components/ModalComp.vue";
import { ref } from 'vue';

export default {
  components: { Modal },

  setup() {
    const isModalOpen = ref(true);

    return { isModalOpen };
  }

}
</script>

<style></style>