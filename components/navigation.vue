<template>
  <div class="main-navigation">
    <nuxt-link
      to="/"
      class="logo"
      :class="{ lightText: this.$route.name === 'oferta' }"
      aria-label="Przejdź na stronę główną"
    >
      Lastro-Beton
    </nuxt-link>
    <nav>
      <ul class="link-wrapper" ref="linkWrapper">
        <li class="single-link">
          <nuxt-link
            to="/"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę główną"
            >Strona główna</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            to="/oferta"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę z ofertą"
            >Oferta</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            to="/o-firmie"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę o firmie"
            >O firmie</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            to="/realizacje"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę o realizacjach"
            >Realizacje</nuxt-link
          >
        </li>
        <li class="single-link contact-link-mobile">
          <nuxt-link
            to="/#kontakt"
            aria-label="Skorzystaj z formularza kontaktowego"
            class="link"
            >Kontakt</nuxt-link
          >
        </li>
        <li class="single-link contact-link-desktop">
          <nuxt-link
            aria-label="Skorzystaj z formularza kontaktowego"
            to="/#kontakt"
            class="link"
            >Skontaktuj się z nami</nuxt-link
          >
        </li>
      </ul>
      <button
        :class="{ lightMenu: this.$route.name === 'oferta' }"
        class="toggle-navigation"
        @click="toggleNavigation"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNavigation() {
      console.log(this.tl)
    },
  },
  mounted() {
    this.tl = this.$gsap.timeline()
    console.log(this.$route)
  },
}
</script>

<style scoped lang="scss">
.lightText {
  color: white !important;
}
.lightMenu {
  div {
    background: white !important;
    border-color: white;
  }
}
.contact-link-desktop {
  display: none;
}
.main-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 48px 32px;
}

.link-wrapper {
  display: none;
  flex-direction: column;
}
.toggle-navigation {
  background: none;
  border: none;
}
.line {
  width: 36px;
  height: 4px;
  margin: 4px 0;
  background: #1e3455;
  border: 2px solid #1e3455;
  border-radius: 4px;
}
.logo {
  color: #1e3455;
  position: relative;
  font-size: 24px;
  margin-left: 16px;
  font-weight: bold;
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    left: -16px;
    top: 0;
    background: #1e3455;
    width: 8px;
    height: 100%;
  }
}

@media (min-width: 744px) {
  .main-navigation {
    padding: 52px 40px;
  }
}
@media (min-width: 1280px) {
  .contact-link-desktop {
    display: initial;
  }
  .contact-link-mobile {
    display: none;
  }
  .main-navigation {
    padding: 52px 80px;
    position: relative;
    &::after {
      content: '';
      width: calc(100% - 160px);
      height: 2px;
      background: #e2e2e2;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .toggle-navigation {
    display: none;
  }
  .link-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      list-style-type: none;
      margin: 0 28px;
      a {
        text-decoration: none;
        color: #787878;
        &:hover {
          color: #1e3455;
        }
      }
      &:nth-last-child(1) {
        margin-left: 120px;
        border-radius: 24px;
        background: #1e3455;
        border: none;
        padding: 8px 24px;
        &:hover {
          background: #15253d;
        }
        a {
          color: white !important;
        }
      }
    }
  }
  .nuxt-link-exact-active.link {
    color: #1e3455 !important;
    position: relative;
    &::after {
      content: '';
      background: #1e3455;
      position: absolute;
      bottom: -60px;
      left: 0;
      width: 100%;
      height: 2px;
      z-index: 2;
    }
  }
}
</style>
