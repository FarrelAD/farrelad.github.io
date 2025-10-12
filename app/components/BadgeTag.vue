<script setup>
defineProps({
    text: {
        type: String,
        default: 'Tag name'
    }
});

</script>

<template>
    <div class="flex gap-2 rounded-2xl bg-gray-400 text-white px-2 py-1 w-fit text-xs cursor-pointer hover:bg-gray-300 active:bg-gray-300 hover:text-gray-600 active:text-gray-600 transition-colors duration-150">
        <span>{{ text }}</span>
    </div>
</template>