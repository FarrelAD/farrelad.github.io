<script setup lang="ts">
import type ICardActivity from '~/models/ICardActivity';

const props = withDefaults(defineProps<ICardActivity>(), {
  image: '',
  readMoreText: 'Read more...'
});

// Define emits for click events
const emit = defineEmits(['click', 'read-more']);

// Handle read more click
const handleReadMore = () => {
  emit('read-more');
};

// Handle card click
const handleCardClick = () => {
  emit('click');
};
</script>

<template>
    <div 
        class="bg-white rounded-2xl p-4 w-[90vw] min-w-[90vw] cursor-pointer hover:bg-gray-100 active:bg-gray-100 transition-colors duration-200"
        @click="handleCardClick"
    >
        <!-- Image container -->
        <div class="bg-gray-300 rounded-xl aspect-square w-full mb-4 overflow-hidden flex items-center justify-center">
            <img 
                v-if="image" 
                :src="image" 
                :alt="title"
                class="w-full h-full object-cover"
                loading="lazy"
            />
            <!-- Image placeholder icon -->
            <svg 
                v-else
                class="w-12 h-12 text-gray-500"
                fill="currentColor" 
                viewBox="0 0 24 24"
            >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
        </div>
        
        <!-- Content section -->
        <div class="space-y-2">
            <h3 class="font-bold text-black text-lg leading-tight">{{ title }}</h3>
            <p class="text-gray-700 text-sm leading-relaxed">{{ subtitle }}</p>
            <button 
                class="text-gray-600 text-sm font-medium hover:text-black transition-colors duration-200 mt-4 block"
                @click.stop="handleReadMore"
            >
                {{ readMoreText }}
            </button>
        </div>
    </div>
</template>