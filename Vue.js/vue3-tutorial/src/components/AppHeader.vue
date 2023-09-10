<template>
    <div>
        <nav
            class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <div>
                <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{ item.title }}</router-link>
            </div>
            <div>
                <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
                <button class="mx-2" @click="logout">Logout</button>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';

export default {
    data() {
        return {
            list: [
                { title: "Home", to: "/" },
                { title: "Family Members", to: "/family-members" },
                { title: "Calendar", to: "/calendar" },
                { title: "Mark Down", to: "/markdown" },
                { title: "Slider", to: "/slider" },
            ],
        };
    },

    methods: {
        logout() {
            firebase.auth().signOut().then(res => { console.log(res); }).catch((e) => { console.log(e); });
        },
    }
};
</script>

<style></style>