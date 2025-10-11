<script setup>
defineProps({
    icon: {
        type: String,
        default: '💎'
    },
    badgeName: {
        type: String,
        default: 'Badge'
    }
});

</script>

<template>
    <div class="flex gap-2 rounded-2xl bg-gray-300 px-3 py-1.5 w-fit text-sm">
        <span>{{ icon }}</span>
        <span>{{ badgeName }}</span>
    </div>
</template>