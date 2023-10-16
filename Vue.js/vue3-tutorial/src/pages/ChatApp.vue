<template>
  <section class="flex w-full">
    <div class="m-auto w-full flex flex-wrap justify-center">
      <h1 class="text-center text-3xl my-4 w-full">Real Time Chat</h1>
      <div class="border rounded-lg w-10/12 md:w-4/12">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input v-model="state.message" placeholder="Start Typing..." class="p-1 border rounded shadow w-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import firebase from "../utilities/firebase";
import 'firebase/database';

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });

    onMounted(async () => {
      const db = firebase.database();

      // To Access the chat
      const collection = db.ref('chats');
      const data = await collection.once('value');
      state.chats = data.val();

      collection.on('value', (snapshot) => {
        state.chats = snapshot.val();
      });
    });

    return { state };
  }

};
</script>

<style></style>