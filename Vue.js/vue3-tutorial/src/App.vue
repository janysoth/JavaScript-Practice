<template>
  <div>
    <ul>
      <h1>Family Members:</h1>
      <li v-for="(member, index) in familyMembers" :key="index">{{ member.name }}</li>
    </ul>
    <form @submit.prevent="addNewMember">
      <input v-model="newMember" placeholder="Add new member here..." />
      <button type="submit">Add Member</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMember: "",
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
  },
};
</script>

<style></style>