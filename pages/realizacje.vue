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
      <h2>Blaty z kamienia</h2>
      <div id="blaty-z-kamienia" class="grid">
        <nuxt-img
          v-for="blat in blaty"
          :key="blat.id"
          :alt="blat.alt"
          :src="blat.src"
          placeholder
        />
      </div>

      <h2>Schody z kamienia</h2>
      <div id="schody-z-kamienia" class="grid">
        <nuxt-img
          v-for="schody in schodyArr"
          :key="schody.id"
          :alt="schody.alt"
          :src="schody.src"
          placeholder
        />
      </div>

      <h2>Nagrobki pojedyńcze</h2>
      <div id="nagrobki-pojedyncze" class="grid">
        <nuxt-img
          v-for="nagrobki in nagrobkiPojedyncze"
          :key="nagrobki.id"
          :alt="nagrobki.alt"
          :src="nagrobki.src"
          placeholder
        />
      </div>

      <h2>Nagrobki podwójne</h2>
      <div id="nagrobki-podwojne" class="grid">
        <nuxt-img
          v-for="nagrobki in nagrobkiPodwojne"
          :key="nagrobki.id"
          :alt="nagrobki.alt"
          :src="nagrobki.src"
          placeholder
        />
      </div>

      <h2>Nagrobki dziecięce</h2>
      <div id="nagrobki-dzieciece" class="grid">
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
  img {
    width: 100%;
  }
}
@media (min-width: 1280px) {
  h2 {
    font-size: 80px;
    width: 100%;
    background: rgba(255, 255, 255, 0.848);
  }
}
</style>
