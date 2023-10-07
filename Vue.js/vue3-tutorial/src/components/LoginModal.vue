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
                        <form class="p-2" @submit.prevent="submit">
                            <!-- Email Address -->
                            <div class="input-group">
                                <input type="email" v-model="email" class="input-group_input" ref="emailRef" required>
                                <label for="email" class="input-group_label">Email Address</label>
                            </div>

                            <!-- Password -->
                            <div class="input-group">
                                <input type="password" v-model="password" class="input-group_input" required>
                                <label for="email" class="input-group_label">Password</label>
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
    margin-top: 1.5rem;
}

.input-group_input {
    font: inherit;
    width: 100%;
    color: #000;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: 2px solid #000;
    background-color: transparent;
    transition: outline-color 500ms, background-color 500ms;
    /* Added background-color transition */
}

/* Change the outline color to green when valid */
.input-group_input:valid {
    outline-color: #4CAF50;
    /* Green outline color */
    background-color: #E9F6EF;
    /* Green background color */
}

.input-group_input:focus {
    outline-color: #ed1111;
}

.input-group_label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, 10px);
    color: #000;
    transition: transform 500ms, scale 500ms;
}

.input-group_input:focus+.input-group_label,
.input-group_input:valid+.input-group_label {
    padding-inline-start: 5px;
    padding-inline-end: 5px;
    transform: translate(10px, -14px) scale(0.8);
    background-color: #fff;
}
</style>