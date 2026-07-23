// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'htps://farrelad.com',
    integrations: [icon()],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'id'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
