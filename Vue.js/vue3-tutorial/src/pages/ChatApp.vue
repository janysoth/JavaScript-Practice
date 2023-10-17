<template>
  <section class="flex w-full">
    <div class="m-auto w-full flex flex-wrap justify-center">
      <h1 class="text-center text-3xl my-4 w-full">Real Time Chat</h1>
      <div class="border rounded-lg w-10/12 md:w-4/12 chat-container">
        <div class="h-64 p-2 chat-messages">
          <div v-for="chat in state.chats" :key="chat.message" class="message"
            :class="chat.userId === state.userId ? 'sent' : 'received'">
            {{ chat.message }}
          </div>
        </div>
        <div class="chat-input">
          <input v-model="state.message" placeholder="Start Typing..." @keydown.enter="addMessage" />
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
      collection: null,
      userId: null,
    });

    onMounted(async () => {
      const db = firebase.database();

      // To Access the chat
      state.collection = db.ref('chats');
      const data = await state.collection.once('value');
      state.chats = data.val();

      state.userId = firebase.auth().currentUser.uid;

      // state.collection.on('value', (snapshot) => {
      //   state.chats = snapshot.val();
      // });
    });

    function addMessage() {
      const newChat = state.collection.push();

      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage };
  }

};
</script>

<style scoped>
.chat-container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
}

.chat-messages {
  display: flex;
  flex-direction: column;
}

.message {
  max-width: 70%;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  word-wrap: break-word;
}

.sent {
  background-color: #007AFF;
  color: #fff;
  align-self: flex-end;
}

.received {
  background-color: #E5E5EA;
  color: #000;
  align-self: flex-start;
}

.chat-input {
  margin-top: 10px;
  margin-bottom: -10px;
  height: 2rem;
  padding: 8px;
}

/* Style the chat input with a rounded border and shadow */
.chat-input input {
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  width: 100%;
}
</style>