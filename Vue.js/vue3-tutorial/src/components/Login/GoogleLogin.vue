<template>
    <div>
        <section class="mt-5 text-center">
            <button class="border rounded px-2" @click="loginWithGoogle">Login with Google</button>
        </section>
    </div>
</template>

<script>
import firebase from '../../utilities/firebase';

export default {
    methods: {
        loginWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth()
                .signInWithPopup(provider).then(() => { this.$emit('close-login-from-google') });
        },
    },

}
</script>

<style></style>