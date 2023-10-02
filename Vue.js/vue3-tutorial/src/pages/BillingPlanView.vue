<template>
  <div class="m-auto">
    <!-- Use the BillingPlanComponent and pass plan data -->
    <BillingPlan :planData="basicPlan" @plan-selected="handlePlanSelection" />
    <BillingPlan :planData="premiumPlan" @plan-selected="handlePlanSelection" />

  </div>
</template>

<script>
import BillingPlan from '@/components/BillingPlan.vue';

export default {
  components: {
    BillingPlan,
  },
  data() {
    return {
      basicPlan: {
        'id': 'sweet',
        'title': 'Sweet',
        'description': 'This is a billing plan reusable component. This is an example how to create usable component.',
        'monthly_price': 2900,
        'fee_percent': 3.5,
        'fee_charge': 30,
      },
      premiumPlan: {
        'id': 'premium',
        'title': 'Premium',
        'description': "This is a premium plan you'll be selecting. Thank you for your business.",
        'monthly_price': 4900,
        'fee_percent': 3.5,
        'fee_charge': 15,
      }
    };
  },
  methods: {
    // Change plan data dynamically
    changePlan() {
      this.selectedPlan = {
        'id': 'premium',
        'title': 'Premium',
        'description': 'This is the premium billing plan.',
        'monthly_price': 4900,
        'fee_percent': 2.5,
        'fee_charge': 20,
      };
    },
    // Handle plan selection
    handlePlanSelection(plan) {
      console.log('Selected plan:', plan);
      // You can perform actions based on the selected plan here.
    }
  }
};
</script>

<style></style>
