<script setup lang="ts">

import type ICardCompetition from '~/models/ICardCompetition';

const props = defineProps<ICardCompetition>();

const formattedDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
}).format(props.dateStarted)
</script>

<template>
    <div class="flex items-center">
        <div :class="[
            'p-4 h-full min-w-1/4',
            isOdd ? 'order-1' : 'order-2'
        ]">
            <p class="text-4xl font-bold text-end">#{{ rank }}</p>
            <p class="text-end text-gray-500 text-xs">/{{ totalParticipants }}</p>
        </div>

        <div :class="[
            'p-2 bg-gray-700 px-4 py-3 flex flex-col gap-2 w-full cursor-pointer text-white',
            'hover:bg-gray-500 active:bg-gray-500 transition-colors duration-150',
            isOdd ? 'order-2' : 'order-1'
        ]">
            <p class="font-bold">{{ title }}</p>
            <p>{{ organizer }}</p>
            <p class="text-gray-400 text-xs">{{ formattedDate }}</p>
            <div class="flex flex-wrap gap-2">
                <BadgeTag v-for="tag in tags" :key="tag" :text="tag" />
            </div>
        </div>
    </div>
</template>