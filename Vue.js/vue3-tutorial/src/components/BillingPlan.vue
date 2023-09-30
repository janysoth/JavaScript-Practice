<template>
  <div class="m-auto flex mt-2 p-3 border rounded">
    <div class="mr-2 w-80">
      <h4
        class="inline-block px-1.5 py-0.5 mb-1 leading-3 bg-blue-500 text-white text-[13px] font-semibold rounded text-justify">
        {{ plan.title }}
      </h4>
      <p>{{ plan.description }}</p>
    </div>
    <div class="flex-shrink-0 text-right">
      <p>
        <span class="text-[20px] font-medium">${{ monthlyPrice }}</span>
        <span class="text-[13px] text-gray-500">/month</span>
      </p>
      <p class="text-gray-500 mb-2">{{ plan.fee_percent }}% + {{ plan.fee_charge }}c per transaction</p>
      <button class="btn w-[200px]">
        <p class="mx-auto">Choose Plan</p>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    plan() {
      return {
        'id': 'sweet',
        'title': 'Sweet',
        'description': 'This is a billing plan reusable component. This is an example how to create usable component.',
        'monthly_price': 2900,
        'fee_percent': 3.5,
        'fee_charge': 30,
      }
    },

    monthlyPrice() {
      return Math.round(this.plan.monthly_price / 100);
    }
  }
}
</script>

<style></style>