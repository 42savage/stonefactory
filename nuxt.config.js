require('dotenv').config()
export default {
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
  css: [],
  plugins: [
    { src: '~/plugins/stars.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
  ],
  components: true,
  buildModules: ['nuxt-gsap-module', '@nuxtjs/dotenv'],
  modules: ['@nuxt/image', 'nuxt-mq'],
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
