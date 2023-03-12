require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lastro-Beton - Zakład kamieniarski Skaryszew',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/stars.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0',
  // },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module', '@nuxtjs/dotenv'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/image', 'nuxt-mq'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter(el) {
      this.$gsap.set([el, '.main-navigation'], {
        opacity: 0,
      })
      let tl = this.$gsap.timeline({ paused: true })
      tl.fromTo(
        '.courtain',
        {
          display: 'none',
        },
        {
          display: 'flex',
        }
      )
        .fromTo(
          '.first',
          {
            yPercent: 0,
          },
          {
            yPercent: -100,
            ease: 'power3.inOut',
          },
          'same'
        )
        .to(
          '.courtain',
          {
            display: 'none',
          },
          'same'
        )
        .set(
          [el, '.main-navigation'],
          {
            opacity: 1,
          },
          '<'
        )

      tl.play()
    },
    enter(el) {},
  },
}
