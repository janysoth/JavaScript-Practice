<template>
    <div>
        <button class="px-2 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none" :class="{
            [`bg-${color}-500`]: color,
        }" @click="onButtonClick">
            {{ buttonText }}
        </button>
    </div>
</template>

<script>
export default {
    name: "ButtonComp",
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    methods: {
        onButtonClick() {
            this.$emit("button-clicked");
        },
    },
};
</script>
