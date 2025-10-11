<script setup lang="ts">

import type ICardCompetition from '~/models/ICardCompetition';

defineProps<ICardCompetition>();
</script>

<template>
    <div class="flex items-center">
        <div class="p-4 h-full min-w-1/4">
            <p class="text-4xl font-bold text-end">#{{ rank }}</p>
            <p class="text-end text-gray-500 text-xs">/{{ totalParticipants }}</p>
        </div>

        <div class="p-2 bg-gray-300 px-4 py-3 flex flex-col gap-2 w-full">
            <p class="font-bold">{{ title }}</p>
            <p>{{ organizer }}</p>
            <div class="flex flex-wrap gap-2">
                <BadgeTag v-for="tag in tags" :key="tag" :text="tag" />
            </div>
        </div>
    </div>
</template>