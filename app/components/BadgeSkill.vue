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
    <div 
        class="flex gap-2 rounded-2xl bg-sky-100 px-3 py-1.5 w-fit text-sm cursor-pointer 
                transition-all duration-300 ease-in-out 
                hover:bg-sky-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1 
                active:scale-95 active:translate-y-0 active:bg-sky-300
                touch:active:scale-95 touch:active:bg-sky-300
                select-none
                tap-highlight-transparent
                md:hover:scale-105 md:hover:-translate-y-1
                active:duration-75">
        <span class="transition-transform duration-200 hover:scale-105 active:scale-110">{{ icon }}</span>
        <span class="font-medium">{{ badgeName }}</span>
    </div>
</template>