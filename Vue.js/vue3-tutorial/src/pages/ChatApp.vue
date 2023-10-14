<template>
  <div>
    <section>
      <div v-for="chat in state.chats" :key="chat.message">{{ chat.message }}</div>
    </section>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import firebase from "../utilities/firebase"
import 'firebase/database';

export default {
  setup() {
    const state = reactive({
      chats: [],
    })

    onMounted(async () => {
      const db = firebase.database();

      // To Access the chat
      const collection = db.ref('chats');
      const data = await collection.once('value');


      state.chats = data.val();
    });

    return { state };
  }

}
</script>

<style></style>