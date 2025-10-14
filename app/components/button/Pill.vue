<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Button'
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
        default: 'hover:bg-gray-800'
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

// Define emits for click events
const emit = defineEmits(['click']);

// Computed classes for different sizes
const sizeClasses = computed(() => {
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
    };
    return sizes[props.size];
});

// Handle click event
const handleClick = (event) => {
    if (!props.disabled) {
        emit('click', event);
    }
};
</script>

<template>
    <button 
        :class="[
            'w-full rounded-full font-bold transition-all duration-200 ease-in-out',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
            'hover:cursor-pointer',
            props.bgColor,
            props.textColor,
            props.hoverBgColor,
            sizeClasses,
            {
                'opacity-50 cursor-not-allowed': props.disabled,
                'transform hover:scale-[1.02] active:scale-95': !props.disabled
            }
        ]"
        :disabled="props.disabled"
        @click="handleClick"
    >
        {{ text }}
    </button>
</template>