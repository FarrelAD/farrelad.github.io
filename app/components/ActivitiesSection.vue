<script setup lang="ts">
import type ICardActivity from '~/models/ICardActivity';

const activities: ICardActivity[] = [
    {
        title: 'Facility Coordinator WRI 2025',
        subtitle: 'Farrel and Adri are part of the internal team that helps with facility-related stuff during their 2025 term.',
        image: '/people/wri-peoples.jpg',
    },
    {
        title: 'Coming soon!',
        subtitle: '',
        image: '',
    },
    {
        title: 'Coming soon!',
        subtitle: '',
        image: '',
    },
    {
        title: 'Coming soon!',
        subtitle: '',
        image: '',
    },
    {
        title: 'Coming soon!',
        subtitle: '',
        image: '',
    },
];

const moreButtonHandler = () => {
    console.log('More button handler clicked!');
};

</script>

<template>
    <section class="min-h-screen px-6 py-8 flex flex-col gap-20 bg-sky-100">
        <div class="flex flex-col gap-8">
            <h2 class="font-bold text-center text-2xl">Activities</h2>
    
            <div class="flex overflow-x-auto gap-8 pt-4 pb-16">
                <CardActivity v-for="activity in activities" :key="activity.title" v-bind="activity" />
            </div>
        </div>

        <div class="flex justify-center items-center">
            <div class="w-3/4">
                <ButtonRounded text="More" @click="moreButtonHandler" />
            </div>
        </div>
    </section>
</template>