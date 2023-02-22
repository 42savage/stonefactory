<template>
  <div class="realisations-wrapper">
    <header>
      <h1 class="title">Realizacje</h1>
      <div class="image-carousel">
        <nuxt-img
          class="single-image"
          v-for="image in images"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          placeholder
        />
      </div>
      <p class="header-text">
        Jesteśmy dumni z naszych dotychczasowych osiągnięć i chętnie pokażemy
        Ci, jakie projekty udało nam się zrealizować.
      </p>
    </header>
    <section class="realisations-grid">
      <div ref="blatyZKamienia" id="blaty-z-kamienia" class="grid">
        <h2 ref="title1">Blaty z kamienia</h2>
        <nuxt-img
          v-for="blat in blaty"
          :key="blat.id"
          :alt="blat.alt"
          :src="blat.src"
          placeholder
        />
      </div>

      <div id="schody-z-kamienia" class="grid">
        <h2 ref="title2">Schody z kamienia</h2>
        <nuxt-img
          v-for="schody in schodyArr"
          :key="schody.id"
          :alt="schody.alt"
          :src="schody.src"
          placeholder
        />
      </div>

      <div id="nagrobki-pojedyncze" class="grid">
        <h2 ref="title3">Nagrobki pojedyńcze</h2>
        <nuxt-img
          v-for="nagrobki in nagrobkiPojedyncze"
          :key="nagrobki.id"
          :alt="nagrobki.alt"
          :src="nagrobki.src"
          placeholder
        />
      </div>

      <div id="nagrobki-podwojne" class="grid">
        <h2 ref="title3">Nagrobki podwójne</h2>
        <nuxt-img
          v-for="nagrobki in nagrobkiPodwojne"
          :key="nagrobki.id"
          :alt="nagrobki.alt"
          :src="nagrobki.src"
          placeholder
        />
      </div>

      <div id="nagrobki-dzieciece" class="grid">
        <h2 ref="title4">Nagrobki dziecięce</h2>
        <nuxt-img
          v-for="nagrobki in nagrobkiDzieciece"
          :key="nagrobki.id"
          :alt="nagrobki.alt"
          :src="nagrobki.src"
          placeholder
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      tl: this.$gsap.timeline({ paused: true }),
      images: [
        {
          id: 0,
          src: '/main_realisations/pojedyncze/13.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 1,
          src: '/main_realisations/dzieciece/2.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 2,
          src: '/main_realisations/schody/3.jpeg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 3,
          src: '/main_realisations/podwojne/3.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 4,
          src: '/main_realisations/podwojne/5.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 5,
          src: '/main_realisations/pojedyncze/5.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
        {
          id: 6,
          src: '/main_realisations/dzieciece/2.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      blaty: 'realisations/getBlaty',
      schodyArr: 'realisations/getSchody',
      nagrobkiPojedyncze: 'realisations/getNagrobkiPojedyncze',
      nagrobkiPodwojne: 'realisations/getNagrobkiPodwojne',
      nagrobkiDzieciece: 'realisations/getNagrobkiDzieciece',
    }),
  },
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 48px;
  font-weight: bold;
  color: #1e3455;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.single-image {
  width: 220px;
  height: 300px;
  border-radius: 16px;
  margin: 0 8px;
  &:nth-child(odd) {
    margin-top: -56px;
  }
}
.image-carousel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  overflow: hidden;
}
.header-text {
  font-size: 24px;
  text-align: center;
  margin: 0px 32px 56px;
}
.grid {
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
}
h2 {
  font-size: 40px;
  color: #1e3455;
  background: rgba(255, 255, 255, 0.712);
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 32px;
}
@media (min-width: 744px) {
  .single-image {
    &:nth-child(1) {
      margin-top: -80px;
    }
    &:nth-child(2) {
      margin-top: -40px;
    }
    &:nth-child(3) {
      margin-top: 0;
    }
    &:nth-child(4) {
      margin-top: 40px;
    }
    &:nth-child(5) {
      margin-top: 0;
    }
    &:nth-child(6) {
      margin-top: -40px;
    }
    &:nth-child(7) {
      margin-top: -80px;
    }
  }
}
@media (min-width: 1280px) {
  .title {
    font-size: 80px;
    margin-top: 60px;
  }
  .header-text {
    width: 500px;
  }
}
</style>
