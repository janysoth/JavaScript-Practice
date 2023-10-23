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
import { onMounted, reactive, computed } from 'vue';
import firebase, { chatsRef } from "../utilities/firebase";
import 'firebase/database';
import { useStore } from 'vuex';

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });

    const store = useStore();
    const user = computed(() => store.state.authUser);

    onMounted(async () => {

      chatsRef.on('child_added', (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function addMessage() {
      const newChat = chatsRef.push();

      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage, user };
  }

};
</script>

<style scoped>
.chat-container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 400px;
  position: relative;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  /* Allow the message field to scroll */
  flex-grow: 1;
  /* Let the message field take remaining vertical space */
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
  padding: 4px;
  position: sticky;
  /* Make the input sticky at the bottom */
  bottom: 0;
  width: 100%;
  background: transparent;
  z-index: 1;
  /* Place the input above the scrolling messages */
}

/* Style the chat input with a rounded border and shadow */
.chat-input input {
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  width: 100%;

}
</style>
