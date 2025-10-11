<script setup>
defineProps({
    text: {
        type: String,
        default: 'Tag name'
    }
});

</script>

<template>
    <div class="flex gap-2 rounded-2xl bg-sky-100 px-2 py-1 w-fit text-xs">
        <span>{{ text }}</span>
    </div>
</template>