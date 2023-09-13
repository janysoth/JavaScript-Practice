<template>
    <div>
        <nav
            class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <div>
                <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{ item.title }}</router-link>
            </div>
            <div>
                <span v-if="user" class="mx-2">{{ user.email }}</span>
                <!-- <button v-if="!user" class="mx-2" @click="$emit('open-login-modal')">Login</button>
                <button v-else class="mx-2" @click="logout">Logout</button> -->
                <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
                <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';

export default {
    props: { isLoggedIn: { type: Boolean, default: false } },

    data() {
        return {
            list: [
                { title: "Home", to: "/" },
                { title: "Family Members", to: "/family-members" },
                { title: "Calendar", to: "/calendar" },
                { title: "Mark Down", to: "/markdown" },
                { title: "Slider", to: "/slider" },
            ],
            user: null, // Initialize user to null
        };
    },
    created() {
        // Check the user's authentication state when the component is created
        firebase.auth().onAuthStateChanged((user) => {
            this.user = user; // Update the user data
        });
    },
    methods: {
        // logout() {
        //     firebase.auth().signOut().then(res => { console.log(res); }).catch((e) => { console.log(e); });
        // },

        logout() {
            firebase.auth().signOut();
            // .then((res) => {})
            // .catch((e) => {});
        },
    },
};
</script>
