<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-Usable Modal</h1>
      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <template v-slot:title>
          Modal 1
        </template>

        <template v-slot:body>
          This is the body slot for Modal 1.
        </template>
      </Modal>
      <button @click="isModal1Open = true">Modal 1</button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <template v-slot:title>
          Modal 2
        </template>

        <template v-slot:body>
          This is the body slot for Modal 2.
        </template>
      </Modal>
      <button @click="isModal2Open = true">Modal 2</button>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/ModalComp.vue";
import { ref } from 'vue';

export default {
  components: { Modal },

  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return { isModal1Open, isModal2Open };
  }

}
</script>

<style></style>