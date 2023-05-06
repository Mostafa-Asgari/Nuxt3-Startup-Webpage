// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/all.min.css',
        '@/assets/css/animate.min.css',
        '@/assets/css/aos.css',
        '@/assets/css/swiper-bundle.min.css',
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/style.css?v=11',
    ],
    app: {
        head: {
            meta: [],
            script: [
                {
                    src: '/_nuxt/assets/js/jquery.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/jquery.counterup.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/jquery.waypoints.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/wow.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/aos.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/swiper-bundle.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/bootstrap.bundle.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/_nuxt/assets/js/app.js?v=11',
                    type: 'text/javascript',
                    body: true,
                },
            ]
        }
    },
    
})
