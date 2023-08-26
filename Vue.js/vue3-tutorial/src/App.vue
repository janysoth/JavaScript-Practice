<template>
  <div>
    <ul>
      <h1>Family Members:</h1>
      <li v-for="(member, index) in familyMembers" :key="member.name">
        <div>
          {{ member.name }} <button @click="remove(index)">x</button>
        </div>
      </li>
    </ul>

    <small>Total: {{ memberCount }} members</small>
    <form @submit.prevent="addNewMember">
      <input v-model="newMember" placeholder="Add new member here..." />
      <button type="submit">Add Member</button>
    </form>
  </div>
</template>

<script>
export default {

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

  // Cannot use arrow function as it does not hold this
  // Use this for any variables in the data()
  // unshift: add to the front of the array
  methods: {
    addNewMember() {
      if (this.newMember !== "") {
        this.familyMembers.push({ name: this.newMember });
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
};
</script>

<style></style>