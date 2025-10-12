<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button rounded'
    },
    bgColor: {
        type: String,
        default: 'bg-black'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    hoverBgColor: {
        type: String,
        default: 'hover:bg-gray-500'
    },
    size: {
        type: String,
        default: 'lg'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

// Define emits for click events
const emit = defineEmits(['click']);

// Handle click event
const handleClick = (event) => {
    emit('click', event);
};
</script>

<template>
    <ButtonPill 
        :text="props.text"
        :bg-color="props.bgColor"
        :text-color="props.textColor"
        :hover-bg-color="props.hoverBgColor"
        :size="props.size"
        :disabled="props.disabled"
        @click="handleClick"
    />
</template>