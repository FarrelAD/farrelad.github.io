import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // Enhanced SEO configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Full Stack Developer & AI Enthusiast',
      titleTemplate: '%s | Farrel AD',
      meta: [
        // Basic SEO
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Farrel AD - Full Stack Developer specializing in web development, mobile apps, machine learning, and cloud computing. View my projects and get in touch.' },
        { name: 'keywords', content: 'Farrel AD, Full Stack Developer, Web Development, Machine Learning, AI, Nuxt.js, JavaScript, Python, Portfolio' },
        { name: 'author', content: 'Farrel AD' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph (Facebook, LinkedIn, etc.)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Farrel AD Portfolio' },
        { property: 'og:title', content: 'Farrel AD - Full Stack Developer & AI Enthusiast' },
        { property: 'og:description', content: 'Full Stack Developer specializing in web development, mobile apps, machine learning, and cloud computing. View my projects and get in touch.' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://farrelad.github.io' },

        // Additional SEO meta tags
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'msapplication-TileColor', content: '#0ea5e9' },
        { name: 'application-name', content: 'Farrel AD Portfolio' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.png' },
        
        // Canonical URL
        { rel: 'canonical', href: 'https://farrelad.github.io' },
        
        // Preconnect to external domains for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      script: [
        // Structured Data (JSON-LD) for better search engine understanding
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Farrel AD',
            jobTitle: 'Full Stack Developer',
            description: 'Full Stack Developer specializing in web development, mobile apps, machine learning, and cloud computing.',
            url: 'https://farrelad.github.io',
            email: 'mailto:fad.farrel@gmail.com',
            sameAs: [
              'https://linkedin.com/in/farrelad',
              'https://github.com/FarrelAD',
              'https://gitlab.com/FarrelAD',
              'https://medium.com/@farrel-ad',
              'https://huggingface.co/FarrelAD',
              'https://www.kaggle.com/farrelad'
            ],
            knowsAbout: [
              'Web Development',
              'Mobile App Development', 
              'Machine Learning',
              'Deep Learning',
              'Cloud Computing',
              'JavaScript',
              'Vue.js',
              'Nuxt.js',
              'Python'
            ]
          })
        }
      ]
    }
  },

  // Site configuration for SEO modules
  site: {
    url: 'https://farrelad.github.io',
    name: 'Farrel AD Portfolio'
  },

  // Robots configuration
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://farrelad.github.io/sitemap.xml'
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://farrelad.github.io',
    gzip: true,
    routes: [
      '/',
      '/projects',
      '/about',
      '/contact'
    ]
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },

  // Image optimization
  image: {
    format: ['webp', 'jpg'],
    quality: 80
  },


  // Internationalization
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'id', name: 'Indonesia', file: 'id.json' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
})