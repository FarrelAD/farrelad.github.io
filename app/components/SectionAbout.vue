<template>
  <section id="about" class="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Right Column - Image (Mobile First) -->
        <div class="flex justify-center lg:justify-end lg:order-2">
          <div class="relative w-full max-w-md">
            <div
              class="aspect-[3/4] bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl overflow-hidden transform rotate-3 shadow-xl">
              <img
                  src="/people/farrelad-head.jpg" 
                  alt="Profile"
                class="w-full h-full object-cover transform -rotate-3 scale-110" />
            </div>
          </div>
        </div>

        <!-- Left Column - Text Content -->
        <div class="space-y-8 lg:order-1">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('about.title') }}
          </h1>

          <div class="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>{{ $t('about.intro') }}</p>
            <p>{{ $t('about.competitions') }}</p>
            <p>{{ $t('about.closing') }}</p>
          </div>

          <!-- Strong CTA -->
          <div class="pt-6 pb-2">
            <a 
              href="mailto:fad.farrel@gmail.com" 
              class="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Icon name="mdi:email-outline" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              <span class="text-base font-semibold">{{ $t('about.cta.email') }}</span>
              <Icon name="mdi:arrow-right" class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <!-- Experience & Skills Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <!-- Work Experience -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-3">{{ $t('about.organizationalExperience') }}</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li v-for="job in organizationalExperience" :key="job.title">
                  {{ $t(job.title) }}<br>
                  <span class="text-xs text-gray-500">{{ $t(job.company) }} • {{ $t(job.period) }}</span>
                </li>
              </ul>
            </div>

            <!-- Dev Stack -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-3">{{ $t('about.devStack') }}</h3>
              <div class="space-y-4">
                <div v-for="stack in devStack" :key="stack.section">
                  <h4 class="text-xs font-medium text-gray-500 mb-2">{{ stack.section }}</h4>
                  <ul class="space-y-1">
                    <li 
                      v-for="tech in stack.stacks" 
                      :key="tech"
                      class="text-sm text-gray-600 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                    >
                      {{ tech }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-3">{{ $t('about.socialMedia') }}</h3>
              <ul class="grid grid-cols-2 gap-x-3 gap-y-2">
                <li v-for="social in socialMedia" :key="social.name">
                  <a 
                    :href="social.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200"
                  >
                    <Icon :name="social.icon" class="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span class="transition-transform duration-200 group-hover:translate-x-0.5 truncate">{{ social.name }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const organizationalExperience = [
  {
    title: 'about.orgs.wri.title',
    company: 'about.orgs.wri.company',
    period: 'about.orgs.wri.period'
  }
]

const devStack = [
  {
    section: 'Full-stack Development',
    stacks: ['Laravel', 'Flutter', 'React.js', 'FastAPI', 'Express.js']
  },
  {
    section: 'AI/Machine Learning',
    stacks: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn']
  },
  {
    section: 'Tools & Platforms',
    stacks: ['Firebase', 'Git']
  }
]

const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/farrelad',
    icon: 'mdi:linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/FarrelAD',
    icon: 'mdi:github'
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/FarrelAD',
    icon: 'mdi:gitlab'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@farrel-ad',
    icon: 'mdi:medium'
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/FarrelAD',
    icon: 'simple-icons:huggingface'
  },
  {
    name: 'Kaggle',
    url: 'https://kaggle.com/farrelad',
    icon: 'simple-icons:kaggle'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/farrel_rr',
    icon: 'mdi:instagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/farrelad100',
    icon: 'mdi:facebook'
  }
]
</script>
