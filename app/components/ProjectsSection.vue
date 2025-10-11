<script setup>
const projects = [
    {
        title: 'Something is big!',
        subtitle: "Seriously, it's actually big!",
        platform: 'github-black',
        image: 'project-1.jpg',
    },
    {
        title: 'AI Chat Assistant',
        subtitle: 'Advanced conversational AI with natural language processing',
        platform: 'huggingface',
        image: 'project-1.jpg',
    },
    {
        title: 'Data Analysis Pipeline',
        subtitle: 'Complete data science workflow for business insights',
        platform: 'kaggle',
        image: 'project-1.jpg',
    },
    {
        title: 'Web Scraping Tool',
        subtitle: 'Automated data collection from multiple sources',
        platform: 'gitlab',
        image: 'project-1.jpg',
    },
    {
        title: 'Machine Learning Model',
        subtitle: 'Predictive analytics for customer behavior',
        platform: 'github-black',
        image: 'project-1.jpg',
    },
    {
        title: 'Computer Vision App',
        subtitle: 'Real-time object detection and classification',
        platform: 'huggingface',
        image: 'project-1.jpg',
    }
];
</script>

<template>
    <section class="min-h-screen px-6 py-8 flex flex-col gap-12 bg-sky-100">
        <h2 class="font-bold text-center text-2xl">FarrelAD's Projects</h2>

        <div class="grid grid-cols-2 grid-rows-3 gap-4">
            <CardProject 
                v-for="project in projects" 
                :key="project.title"
                :title="project.title"
                :subtitle="project.subtitle"
                :platform="project.platform"
                :image="project.image"
            />
        </div>

        <div class="flex justify-center items-center">
            <div class="w-3/4">
                <ButtonRounded text="See more projects!" @click="seeMoreProjects" />
            </div>
        </div>
    </section>
</template>