<template>
    <div>
        <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto bg-white rounded p-2 shadow w-1/3">
                    <div class="p-2 border">
                        <h1 class="text-2xl text-center">Login:</h1>
                        <section class="mt-5 text-center">
                            <button class="border rounded px-2" @click="loginWithGoogle">Login with Google</button>
                        </section>
                        <p class="my-3 text-center">Or</p>
                        <form class="p-2 my-2" @submit.prevent="submit">
                            <div class="my-4">
                                <label>Email or Username:</label>
                                <input v-model="email" type="text" class="rounded shadow p-2 w-full my-2"
                                    placeholder="Enter your Email or Username..." ref="emailRef" />
                            </div>
                            <div class="my-4">
                                <label>Password:</label>
                                <input v-model="password" type="password" class="rounded shadow p-2 w-full my-2"
                                    placeholder="Enter your Password..." />
                            </div>
                            <div class="my-4">
                                <button type="submit"
                                    class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2">
                                    <span v-if="!isLoading">Login</span>
                                    <span v-else>⌛</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';

export default {
    data() {
        return {
            email: "",
            password: "",
            isLoading: false,
        };
    },

    methods: {
        submit() {
            this.isLoading = true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.email = "";
                    this.password = "";
                    this.isLoading = false;
                    this.close();
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                });
        },

        close() {
            this.$emit('close-login');
        },

        loginWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
                .signInWithPopup(provider).then(() => { this.close() });
        },
    },

    mounted() {
        this.$refs.emailRef.focus();
    },
};
</script>

<style></style>