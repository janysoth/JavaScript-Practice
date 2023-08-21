<template>
  <ul>
    <h1>Family Members:</h1>
    <li v-for="(member, index) in familyMembers" :key="index"> {{ index + 1 }}: {{ member.name }}</li>
  </ul>
  <input :value="newMember" />
  <button :disabled="isDisabled">Add Member</button>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true,
      newMember: "Vantha Khuy",
      familyMembers: [
        { name: "Jonny Vorn Soth" },
        { name: "Saominea Soth" },
        { name: "Manika Soth" },
        { name: "Samantta Soth" },
        { name: "Jaccika Soth" },
      ],
    };
  }
};
</script>

<style></style>