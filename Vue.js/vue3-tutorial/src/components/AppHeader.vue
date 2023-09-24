<template>
    <div>
        <nav
            class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <div>
                <router-link v-for="item in list" :key="item.to"
                    class="hover:text-red-500 hover:font-bold hover:underline mx-2" :to="item.to"
                    :class="{ 'text-red-500 font-bold': isActiveRoute(item.to) }">{{
                        item.title }}</router-link>
            </div>
            <div>
                <div class="flex items-center mx-2">
                    <span v-if="user" class="px-1">{{ user.email }}</span>
                    <ButtonComp color="red" class="hover:opacity-60" buttonText="Logout" v-if="isLoggedIn" @click="logout">
                    </ButtonComp>

                    <!-- <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button> -->
                    <ButtonComp color="blue" class="hover:bg-red-500" buttonText="Login" v-else
                        @click="$emit('open-login-modal')">
                    </ButtonComp>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';
import ButtonComp from './ButtonComp.vue';
import { useRoute } from 'vue-router'; // Import useRoute

export default {

    components: { ButtonComp },

    props: { isLoggedIn: { type: Boolean, default: false } },

    data() {
        return {
            list: [
                { title: "Home", to: "/" },
                { title: "Family Members", to: "/family-members" },
                { title: "Calendar", to: "/calendar" },
                { title: "Mark Down", to: "/markdown" },
                { title: "Slider", to: "/slider" },
                { title: "Calculator", to: "/calculator" },
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

        isActiveRoute(route) {
            const currentRoute = useRoute();
            return currentRoute.path === route;
        },
    },
};
</script>
