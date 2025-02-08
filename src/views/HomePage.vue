<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const showFirstTxt = ref(true);
const showSubTxt = ref(false);

onMounted(() => {
    setTimeout(() => {
        showFirstTxt.value = false
    }, 1500)

    setTimeout(() => {
        showSubTxt.value = true
    }, 3000)
})

</script>

<template>
    <main class="h-screen max-h-screen relative">
        <div class="absolute top-0 border-b-2 w-full border-b-gray-600 text-gray-400 text-center py-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div class="relative h-full flex flex-col justify-center items-center p-24">
            <h1
                v-if="showFirstTxt" 
                class="text-6xl font-bold motion-translate-y-in-100 motion-opacity-in-0 motion-blur-in-md motion-duration-1000">
                Hello <br> 
                World!
            </h1>

            <div>
                <h2 
                    v-if="!showFirstTxt" 
                    class="text-5xl font-bold motion-translate-y-in-100 motion-opacity-in-0 motion-blur-in-md motion-duration-1000">
                    I'm <br>
                    Farrel
                </h2>

                <p :class="{'invisible' : !showSubTxt}" class="mt-12 motion-translate-y-in-100 motion-opacity-in-0 motion-blur-in-sm motion-duration-500 motion-delay-[3000ms]">
                    A passionate Computer Science student with a keen interest in software development and AI innovation.
                </p>
            </div>

            <div v-if="showSubTxt" class="absolute bottom-40 z-10 border-2 border-black p-4 bg-white w-3/4 rounded-md shadow-md motion-blur-in-md motion-translate-y-in-25 motion-opacity-in-0 motion-delay-2000 motion-duration-1500">
                <h3 class="font-bold">My contact:</h3>
                <div class="flex gap-2">
                    <a href="mailto:farrel.apeiron@gmail.com">
                        <img src="/img/email-logo.png" alt="Email logo" class="w-10">
                    </a>
                    <a href="https://github.com/FarrelAD" target="_blank">
                        <img src="/img/github-logo.png" alt="GitHub logo" class="w-10">
                    </a>
                    <a href="https://www.linkedin.com/in/farrelad" target="_blank">
                        <img src="/img/linkedin-logo.png" alt="LinkedIn logo" class="w-10">
                    </a>
                    <a href="https://www.instagram.com/farrel_rr" target="_blank">
                        <img src="/img/instagram-logo.png" alt="Instagram logo" class="w-10">
                    </a>
                    <a href="https://www.kaggle.com/farrelad" target="_blank">
                        <img src="/img/kaggle-logo.png" alt="Kaggle logo" class="w-10">
                    </a>
                    <a href="https://huggingface.co/FarrelAD" target="_blank">
                        <img src="/img/huggingface-logo.png" alt="Huggingface logo" class="w-10">
                    </a>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 w-full border-t-2 border-t-gray-600 text-gray-400 text-center py-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
    </main>
</template>
