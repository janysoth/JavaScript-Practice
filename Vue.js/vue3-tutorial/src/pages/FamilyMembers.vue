<template>
    <div class="m-auto">
        <h1 class="text-3xl font-bold text-red-700 text-center my-4 underline">Family Members:</h1>
        <ul class="mt-2">
            <li class="flex justify-between items-center my-2" v-for="(member, index) in familyMembers" :key="member.name">
                <div class="flex items-center">
                    <span>{{ member.name }}</span>
                </div>
                <button @click="remove(index)"
                    class="bg-red-500 text-white px-3 py-1 rounded cursor-pointer transition duration-300 hover:bg-pink-600">X</button>
            </li>
        </ul>

        <form class="mt-10" @submit.prevent="addNewMember">
            <input class="border rounded mr-1" v-model="newMember" placeholder="Add new member here..."
                ref="newMemberRef" />
            <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white p-1" type="submit">Add
                Member</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newMember: "",
            fname: "Jonny Vorn",
            lname: "Soth",
            familyMembers: [
                { name: "Jonny Vorn Soth" },
                { name: "Saominea Soth" },
                { name: "Manika Soth" },
                { name: "Samantta Soth" },
                { name: "Jaccika Soth" },
            ],
        };
    },
    computed: {
        memberCount() {
            return this.familyMembers.length;
        },
        fullName: {
            get() {
                return `Full Name is: ${this.fname} ${this.lname}`;
            },
            set(fullName) {
                alert(fullName);
            },
        },
    },

    // Cannot use arrow function as it does not hold this
    // Use this for any variables in the data()
    // unshift: add to the front of the array
    methods: {
        addNewMember() {
            if (this.newMember !== "") {
                this.familyMembers.unshift({ name: this.newMember });
                this.newMember = "";
            }
        },
        setFullName() {
            this.fullName = this.newMember;
        },
        remove(index) {
            this.familyMembers = this.familyMembers.filter((member, i) => i !== index);
        },
    },

    mounted() {
        this.$refs.newMemberRef.focus();
    },
};
</script>

<style></style>