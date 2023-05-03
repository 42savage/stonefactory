import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: 'G-Y14S2XXQPR' },
    appName: 'Lastro-Beton',
  })
}
