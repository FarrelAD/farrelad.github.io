<script setup lang="ts">
import type ICardCompetition from '~/models/ICardCompetition';

const competitionsResult: ICardCompetition[] = [
    {
        title: 'Data Mining',
        organizer: 'Hology - Universitas Brawijaya',
        rank: 28,
        totalParticipants: 50,
        tags: ['Team', 'Data mining', 'Data analytics'],
        dateStarted: new Date('2025-09-17')
    },
    {
        title: 'East Java Datathon 2025',
        organizer: 'East Java Ministry of Communication and Digital Affairs',
        rank: 21,
        totalParticipants: 51,
        tags: ['Team', 'Data analytics'],
        dateStarted: new Date('2025-08-28')
    },
];

const teamUpWithMeHandler = () => {
    console.log('Team up with me button clicked!');
};

</script>

<template>
    <section class="min-h-screen px-6 pt-8 pb-24 flex flex-col justify-between">
        <div class="flex flex-col gap-12">
            <h2 class="font-bold text-center text-2xl">Competitions</h2>

            <div class="flex flex-col gap-3">
                <CardCompetitionResult v-for="(result, index) in competitionsResult" :key="index" v-bind="result"
                    :is-odd="index % 2 !== 0" />
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="w-3/4">
                <ButtonRounded text="Team up with me!" @click="teamUpWithMeHandler" />
            </div>
        </div>
    </section>
</template>