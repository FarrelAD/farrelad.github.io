<script setup>
defineProps({
    platform: {
        type: String,
        default: 'github'
    },
    title: {
        type: String,
        default: 'Project title'
    },
    subtitle: {
        type: String,
        default: 'This is subtitle of the project'
    },
    image: {
        type: String,
        default: ''
    },
});

</script>

<template>
    <div class="bg-white rounded-2xl p-2 pb-4 max-w-sm">
        <!-- Image placeholder or actual image -->
        <div class="bg-gray-500 rounded-xl aspect-video w-full mb-4 overflow-hidden">
            <img 
                v-if="image" 
                :src="`/etc/${image}`" 
                :alt="title"
                class="w-full h-full object-cover"
                loading="lazy"
            >
        </div>
        
        <!-- Content section -->
        <div class="flex items-start gap-3">
            <!-- Platform icon -->
            <img 
                :src="`/logo/logo-${platform}.png`" 
                :alt="`${platform} logo`"
                class="w-5 h-5 flex-shrink-0 opacity-70"
                loading="lazy"
            >
            
            <!-- Text content -->
            <div class="flex flex-col">
                <h3 class="font-bold text-black mb-1">{{ title }}</h3>
                <p class="text-gray-700 text-xs">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>