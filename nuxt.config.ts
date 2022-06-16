import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
        '@/assets/main.scss',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
    },
})
