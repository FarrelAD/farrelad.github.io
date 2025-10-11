<script setup>
const contactHandler = () => {
    console.log('Contact me clicked!');
};

const skills = [
    {
        icon: '🌐',
        badgeName: 'Web app'
    },
    {
        icon: '📱',
        badgeName: 'Mobile app'
    },
    {
        icon: '🤖',
        badgeName: 'Machine learning'
    },
    {
        icon: '🧠',
        badgeName: 'Deep learning'
    },
    {
        icon: '☁️',
        badgeName: 'Cloud computing'
    },
    {
        icon: '👾',
        badgeName: 'Make anything fun with coding'
    },
];
</script>


<template>
    <section class="h-screen px-10 py-12 flex flex-col gap-12">
        <div class="flex flex-col gap-10">
            <div>
                <h1 class="font-bold text-4xl">Hi!</h1>
                <h1 class="font-medium text-4xl">Farrel here!</h1>
            </div>
            <div class="flex justify-center w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="106" viewBox="0 0 108 106" fill="none">
                    <line
x1="3.53553" y1="3" x2="103" y2="102.464" stroke="black" stroke-width="5"
                        stroke-linecap="round" />
                    <line
x1="105.5" y1="14.5" x2="105.5" y2="103.5" stroke="black" stroke-width="5"
                        stroke-linecap="round" />
                    <line
x1="15.5" y1="103.5" x2="104.5" y2="103.5" stroke="black" stroke-width="5"
                        stroke-linecap="round" />
                </svg>
            </div>
        </div>

        <div class="flex justify-end">
            <div class="flex flex-col items-end gap-4">
                <div class="rounded-3xl w-1/2 max-w-sm flex flex-col gap-5">
                    <div class="bg-gray-400 border-4 border-black rounded-2xl overflow-hidden aspect-square w-full">
                        <img 
                            src="/people/farrelad-head.jpg" 
                            alt="Profile photo - Open to work" 
                            class="w-full h-full object-cover"
                            loading="lazy"
                        >
                    </div>

                    <ButtonPill text="Contact me" @click="contactHandler" />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <h2 class="font-semibold">Specialized skills:</h2>
            <div class="flex flex-wrap gap-2">
                <BadgeSkill v-for="skill in skills" :key="skill" :icon="skill.icon" :badge-name="skill.badgeName" />
            </div>
        </div>
    </section>
</template>