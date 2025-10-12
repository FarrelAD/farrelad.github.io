<script setup>
const socialMediaLinks = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/farrelad',
        logo: 'linkedin'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/FarrelAD',
        logo: 'github'
    },
    {
        name: 'GitLab',
        url: 'https://gitlab.com/FarrelAD',
        logo: 'gitlab'
    },
    {
        name: 'Medium',
        url: 'https://medium.com/@farrel-ad',
        logo: 'medium'
    },
    {
        name: 'Huggingface',
        url: 'https://huggingface.co/FarrelAD',
        logo: 'huggingface'
    },
    {
        name: 'Kaggle',
        url: 'https://www.kaggle.com/farrelad',
        logo: 'kaggle'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/farrel-rr',
        logo: 'instagram'
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/farrelad100',
        logo: 'facebook'
    }
];
</script>

<template>
    <footer class="bg-black text-white flex flex-col gap-12 px-10 py-28">
        <div>
            <h4 class="font-bold">Contacts</h4>
            <a 
                href="mailto:fad.farrel@gmail.com"
                class="flex gap-3 cursor-pointer hover:text-gray-300 transition-colors duration-200 w-fit"
                aria-label="Send email to fad.farrel@gmail.com"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5"
                    stroke="currentColor" 
                    class="size-6"
                >
                    <path
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                    />
                </svg>
                fad.farrel@gmail.com
            </a>
        </div>

        <div>
            <h4 class="font-bold">Social Media</h4>
            <nav aria-label="Social media links">
                <ul class="flex flex-col gap-3 mt-4">
                    <li v-for="social in socialMediaLinks" :key="social.name">
                        <a
                            :href="social.url" 
                            :aria-label="`Visit my ${social.name} profile`" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-colors duration-200">
                            <img
                                :src="`/logo/logo-${social.logo}.png`" 
                                :alt="`${social.name} logo`"
                                class="w-6 h-6 object-contain" loading="lazy" >
                            <span>{{ social.name }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>