<template>
  <div class="offer-wrapper">
    <header>
      <h1 class="page-title">{{ currentPage.header.title }}</h1>
      <p class="page-content">{{ currentPage.header.content }}</p>
      <quote
        :quoteContent="currentPage.header.quote"
        :quoteAuthor="currentPage.header.quoteAuthor"
      />
      <div class="icon-row">
        <div
          class="single-icon"
          v-for="icon in currentPage.header.icons"
          :key="icon.id"
        >
          <div class="svg-outline">
            <component v-bind:is="icon.src"></component>
          </div>
          <p>{{ icon.title }}</p>
        </div>
      </div>
      <nuxt-img
        draggable="false"
        class="header-image"
        :src="currentPage.header.headerImage.src"
        :alt="currentPage.header.headerImage.alt"
        placeholder
      />
    </header>
    <section class="rest">
      <h2 class="section-title">{{ currentPage.section.title }}</h2>
      <p class="section-content">{{ currentPage.section.content }}</p>
      <div>
        <nuxt-img
          draggable="false"
          class="section-image"
          :src="currentPage.section.sectionImage"
        />
        <client-only>
          <ul class="bullet-list">
            <p class="bullet-title">{{ currentPage.section.bulletTitle }}</p>
            <li
              class="single-bullet"
              v-for="bullet in currentPage.section.bullets"
              :key="bullet.id"
            >
              <b>{{ bullet.title }}</b
              ><span>{{ bullet.content }}</span>
            </li>
          </ul>
        </client-only>
      </div>
    </section>
    <div class="call-to-realisations">
      <p>Zapoznaj się z naszymi realizacjami</p>
      <nuxt-link
        class="link-to-realisations"
        :to="`/realizacje/#${currentPage.route.link}`"
        >Przejdź do {{ currentPage.route.name
        }}<svg-arrow :color="'#1e3455'" :width="22" :height="22"
      /></nuxt-link>
    </div>
    <contactForm />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: `${this.currentPage.header.title} - Lastro-Beton`,
    }
  },
  methods: {
    ...mapActions({ setCurrentPage: 'offer/setCurrentPage' }),
  },
  computed: {
    ...mapGetters({
      currentPage: 'offer/getCurrentOfferPage',
    }),
  },
  beforeMount() {
    this.setCurrentPage(this.$route.params.id)
  },
}
</script>

<style scoped lang="scss">
header {
  padding: 0 32px;
}
.page-title {
  font-size: 40px;
  color: #1e3455;
  margin-bottom: 8px;
}
.page-content {
  font-size: 18px;
  color: #2f3d54;
}
.icon-row {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}
.svg-outline {
  border: 1px solid #1e3455;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.single-icon {
  margin: 0 16px;
  &:nth-child(1) {
    margin-left: 0;
  }
  p {
    font-size: 10px;
    width: 56px;
    color: #1e3455;
    font-weight: bold;
    text-align: center;
  }
}
.header-image {
  width: 100%;
  // height: 400px;
  margin-top: 16px;
  margin-bottom: 40px;
}
.rest {
  padding: 0 32px;
}
.section-title {
  font-size: 40px;
  color: #1e3455;
}
.section-content {
  color: #1e3455;
  font-size: 18px;
}
.section-image {
  width: 100%;
  height: 400px;
  margin: 40px 0;
}
.bullet-title {
  font-size: 22px;
  color: #1e3455;
  font-weight: bold;
}
.single-bullet {
  list-style-type: none;
  color: #1e3455;
  margin: 12px 0;
  font-size: 16px;
}
.call-to-realisations {
  padding: 32px;
  background: #f0f0f0;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  p {
    font-size: 26px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 16px;
  }
}
.link-to-realisations {
  text-decoration: none;
  color: #1e3455;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  svg {
    margin-left: 8px;
  }
}
@media (min-width: 744px) {
  header {
    position: relative;
    padding-bottom: 136px; // padding to fit absolute position of quote component
  }
  .page-content {
    width: 480px;
  }
  img {
    object-fit: cover;
  }
  .rest div {
    display: flex;
    flex-direction: row-reverse;
  }
  .section-title,
  .section-content {
    width: 560px;
  }
  .bullet-list {
    margin-top: 40px;
  }
  .call-to-realisations p {
    width: 280px;
  }
}
@media (min-width: 1280px) {
  header,
  .rest,
  .call-to-realisations {
    padding: 0 80px;
  }
  .rest div {
    justify-content: space-between;
  }
  .bullet-list {
    width: 420px;
  }
  .section-image {
    width: 40%;
    height: 600px;
    margin-top: -196px;
  }
}
</style>
