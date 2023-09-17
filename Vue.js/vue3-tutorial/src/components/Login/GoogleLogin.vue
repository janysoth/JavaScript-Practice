<template>
    <div>
        <section class="mt-5 text-center">
            <ButtonComp color="red" buttonText="Login With Google" @click="loginWithGoogle"></ButtonComp>
        </section>
    </div>
</template>

<script>
import firebase from '../../utilities/firebase';
import ButtonComp from '../ButtonComp.vue';

export default {

    components: { ButtonComp },

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