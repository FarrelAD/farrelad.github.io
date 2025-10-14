<script setup>
const contactHandler = () => {
    const contactsEl = document.getElementById('contacts');
    contactsEl.scrollIntoView({ behavior: 'smooth' });
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
    <section
        class="h-screen min-h-screen max-h-screen px-10 py-12 md:px-36 md:py-24 flex flex-col gap-12 justify-between">
        <div class="md:flex md:h-2/3">
            <div class="flex flex-col md:justify-center gap-10 md:w-1/2">
                <div>
                    <h1 class="font-bold text-4xl">Hi!</h1>
                    <h1 class="font-medium text-4xl">Farrel here!</h1>
                </div>
                <div class="flex justify-center w-1/2 md:hidden">
                    <img src="/images/bottom-right-corner-arrow.svg" alt="">
                </div>
            </div>

            <div class="flex justify-end md:justify-center md:w-1/2 ">
                <div class="flex flex-col items-end md:items-center md:gap-32">
                    <div class="hidden md:flex justify-center w-1/2">
                        <img src="/images/bottom-right-corner-arrow.svg" alt="" class="w-full">
                    </div>

                    <div class="rounded-3xl w-1/2 max-w-sm flex flex-col gap-5">
                        <div class="bg-gray-400 border-4 border-black rounded-2xl overflow-hidden aspect-square w-full">
                            <img src="/people/farrelad-head.jpg" alt="Profile photo - Open to work"
                                class="w-full h-full object-cover" loading="lazy">
                        </div>

                        <ButtonPill text="Contact me" @click="contactHandler" />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-3 min-h-1/3">
            <h2 class="font-semibold">Specialized skills:</h2>
            <div class="flex flex-wrap gap-2 md:w-1/2">
                <BadgeSkill v-for="skill in skills" :key="skill" :icon="skill.icon" :badge-name="skill.badgeName" />
            </div>
        </div>
    </section>
</template>