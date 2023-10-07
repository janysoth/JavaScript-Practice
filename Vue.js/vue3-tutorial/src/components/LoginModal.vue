<template>
    <div>
        <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
        <div class="absolute inset-0">
            <div class="flex h-full">
                <div class="z-30 m-auto bg-white rounded p-2 shadow w-1/3">
                    <div class="p-2 border">
                        <h1 class="text-2xl text-center">Login:</h1>

                        <!-- GoogleLogin Component -->
                        <GoogleLogin @close-login-from-google="close" />

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

                            <!-- New Input Style -->
                            <div class="input-group">
                                <input type="text" id="email" class="input-groupd_input" required>
                                <label for="email" class="input-group_label">Email Address</label>
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
import GoogleLogin from '../components/Login/GoogleLogin.vue'

export default {
    components: { GoogleLogin },

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
    },

    mounted() {
        this.$refs.emailRef.focus();
    },
};
</script>

<style lang="scss" scoped>
.input-group {
    position: relative;
}

.input-group_input {
    font: inherit;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: 2px solid #fff;
    background-color: transparent;
    transition: outline-color 500ms;
}

.input-group_input:is(:focus, :valid) {
    outline-color: #3c50eb;
}

.input-group_label {
    position: absolute;
    top: 0;
    left: 0;
    translate: 10px 10px;
    color: #fff;
    transition: translate 500ms, scale 500ms;
}

.input-group_input:focus+.input-group_label,
.input-group_label,
.input_group_input:valid+.input-group_label {
    padding-inline: 5px;
    translate: 10px -14px;
    scale: 0.8;
    background-color: #000;
}
</style>