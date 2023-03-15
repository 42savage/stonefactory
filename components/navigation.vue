<template>
  <div class="main-navigation">
    <nuxt-link
      @click.native="toggleNavigation('logo')"
      to="/"
      class="logo"
      :class="{ lightText: this.$route.name === 'oferta' || menuState }"
      aria-label="Przejdź na stronę główną"
      ref="logo"
    >
      Lastro-Beton
    </nuxt-link>
    <nav>
      <ul class="link-wrapper" ref="linkWrapper">
        <li class="single-link">
          <nuxt-link
            to="/"
            class="link"
            aria-label="Przejdź na stronę główną"
            :class="{ lightText: this.$route.name === 'oferta' }"
            @click.native="toggleNavigation('link')"
            >Strona główna</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            @click.native="toggleNavigation('link')"
            to="/oferta"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę z ofertą"
            >Oferta</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            @click.native="toggleNavigation('link')"
            to="/#o-firmie"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę o firmie"
            >O firmie</nuxt-link
          >
        </li>
        <li class="single-link">
          <nuxt-link
            @click.native="toggleNavigation('link')"
            to="/realizacje"
            class="link"
            :class="{ lightText: this.$route.name === 'oferta' }"
            aria-label="Przejdź na stronę o realizacjach"
            >Realizacje</nuxt-link
          >
        </li>
        <li class="single-link contact-link-mobile">
          <nuxt-link
            @click.native="toggleNavigation('link')"
            to="/#kontakt"
            aria-label="Skorzystaj z formularza kontaktowego"
            class="link"
            >Kontakt</nuxt-link
          >
        </li>
        <li class="single-link contact-link-desktop">
          <nuxt-link
            @click.native="toggleNavigation('link')"
            aria-label="Skorzystaj z formularza kontaktowego"
            to="/#kontakt"
            class="link"
            >Skontaktuj się z nami</nuxt-link
          >
        </li>
      </ul>
      <button
        :class="{ lightMenu: this.$route.name === 'oferta' || menuState }"
        class="toggle-navigation"
        @click="toggleNavigation"
        ref="hamburger"
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
  data() {
    return {
      tl: this.$gsap.timeline({ paused: true }),
      menuState: false,
    }
  },
  mounted() {
    if (this.$mq !== 'lg') {
      this.tl
        .fromTo(
          this.$refs.linkWrapper,
          {
            xPercent: -100,
            display: 'none',
          },
          {
            xPercent: 0,
            display: 'flex',
          },
          'same'
        )
        .fromTo(
          this.$refs.linkWrapper.children,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
          },
          'same'
        )
        .to(
          this.$refs.hamburger.children[1],
          {
            width: 0,
            opacity: 0,
          },
          'same'
        )
        .to(
          this.$refs.hamburger.children[0],
          {
            rotate: 45,
            y: 8,
          },
          'same'
        )
        .to(
          this.$refs.hamburger.children[2],
          {
            rotate: -45,
            y: -8,
          },
          'same'
        )
        .to(document.body, {
          overflow: 'hidden',
        })
    }
  },
  methods: {
    toggleNavigation(payload) {
      if (!this.menuState && payload !== 'logo') {
        if (this.$mq !== 'lg') {
          this.menuState = true
        }
      } else {
        this.menuState = false
      }
    },
  },
  watch: {
    menuState: function (value) {
      if (value) {
        this.tl.play()
      } else {
        this.tl.reverse()
      }
    },
  },
}
</script>

<style scoped lang="scss">
.lightText {
  color: white !important;
  &::after {
    background: white !important;
  }
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
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #0a1321;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  li {
    list-style-type: none;
    margin: 8px 0;
  }
  a {
    color: white;
    font-size: 40px;
    text-decoration: none;
  }
}
.toggle-navigation {
  background: none;
  border: none;
  z-index: 11;
  position: relative;
  div {
    transition: 0.8s;
  }
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
  z-index: 11;
  transition: 0.8s;
  &::after {
    content: '';
    position: absolute;
    left: -16px;
    top: 0;
    background: #1e3455;
    width: 8px;
    height: 100%;
    transition: 0.8s;
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
    width: initial;
    height: initial;
    background: initial;
    position: initial;
    li {
      list-style-type: none;
      margin: 0 28px;
      a {
        text-decoration: none;
        color: #787878;
        font-size: 16px;
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
    color: #1e3455;
    position: relative;
    font-weight: bold;
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
