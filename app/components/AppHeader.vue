<template>
  <header class="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
    <nav class="max-w-6xl mx-auto px-4 md:px-12 py-4 md:py-8">
      <div class="flex items-center justify-between">
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8 lg:gap-16">
          <li>
            <a href="#home" class="text-sm lg:text-base text-gray-400 hover:text-gray-900 transition-colors">
              {{ $t('nav.home') }}
            </a>
          </li>
          <li>
            <a href="#about" class="text-sm lg:text-base font-medium text-gray-900">
              {{ $t('nav.about') }}
            </a>
          </li>
          <li>
            <a href="#contact" class="text-sm lg:text-base text-gray-400 hover:text-gray-900 transition-colors">
              {{ $t('nav.contact') }}
            </a>
          </li>
        </ul>

        <!-- Desktop Right Side -->
        <div class="hidden md:flex items-center gap-4 lg:gap-6">
          <!-- Dropdown Menu -->
          <div class="relative" ref="dropdownRef">
            <button 
              @click="toggleDropdown"
              class="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center gap-2"
            >
              {{ $t('nav.projects') }}
              <svg 
                class="w-4 h-4 transition-transform duration-200" 
                :class="{ 'rotate-180': isDropdownOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div 
                v-show="isDropdownOpen"
                class="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              >
                <a 
                  v-for="profile in profiles" 
                  :key="profile.name"
                  :href="profile.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                >
                  <div class="flex items-center gap-3">
                    <Icon :name="profile.icon" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span class="transition-transform duration-200 group-hover:translate-x-0.5">{{ profile.name }}</span>
                  </div>
                  <svg 
                    class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </transition>
          </div>

          <!-- Language Toggle -->
          <button 
            @click="toggleLocale"
            class="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
          >
            {{ currentLocale === 'en' ? 'ID' : 'EN' }}
          </button>
        </div>

        <!-- Mobile Language Toggle -->
        <button 
          @click="toggleLocale"
          class="md:hidden px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {{ currentLocale === 'en' ? 'ID' : 'EN' }}
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div v-show="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <ul class="space-y-4">
            <li>
              <a 
                href="#home" 
                @click="closeMobileMenu"
                class="block text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                {{ $t('nav.home') }}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                @click="closeMobileMenu"
                class="block text-base font-medium text-gray-900"
              >
                {{ $t('nav.about') }}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                @click="closeMobileMenu"
                class="block text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                {{ $t('nav.contact') }}
              </a>
            </li>
          </ul>

          <!-- Mobile Profiles Section -->
          <div class="mt-6 pt-4 border-t border-gray-100">
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {{ $t('nav.projects') }}
            </h3>
            <ul class="space-y-3">
              <li v-for="profile in profiles" :key="profile.name">
                <a 
                  :href="profile.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between text-base text-gray-700 hover:text-gray-900 transition-all duration-200"
                >
                  <div class="flex items-center gap-3">
                    <Icon :name="profile.icon" class="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span class="transition-transform duration-200 group-hover:translate-x-0.5">{{ profile.name }}</span>
                  </div>
                  <svg 
                    class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const currentLocale = computed(() => locale.value)

const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'id' : 'en'
  setLocale(newLocale)
}

// Mobile menu functionality
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Dropdown functionality
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/FarrelAD',
    icon: 'mdi:github'
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
  }
]

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isDropdownOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
