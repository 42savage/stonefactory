<template>
  <div class="offer-wrapper">
    <header>
      <p class="title">OFERTA</p>
      <p class="content">
        Oferujemy szeroki wybór grobów, w tym groby granitowe, marmurowe i
        kamienne. Wszystkie nasze produkty są wykonane z najwyższej jakości
        materiałów i spełniają najwyższe standardy jakości. Oferujemy również
        usługi kamieniarskie, takie jak grawerowanie i konserwacja grobów.
        Posiadamy wieloletnie doświadczenie w branży i jesteśmy gotowi pomóc
        Państwu w doborze odpowiedniego grobu dla bliskiej osoby. Zachęcamy do
        zapoznania się z ofertą i w razie pytań kontaktu z nami.
      </p>
    </header>
    <section class="offer-content-wrapper">
      <div class="single-offer" v-for="item in offer" :key="item.id">
        <div class="first-half">
          <img :src="item.image.src" draggable="false" :alt="item.image.alt" />
        </div>
        <div class="sec-half">
          <p class="offer-title">{{ item.title }}</p>
          <p class="offer-name">{{ item.name }}</p>
          <p class="offer-content">{{ item.content }}</p>
          <nuxt-link class="offer-route" :to="item.route.link"
            >Przejdź do {{ item.route.name }}
            <div>
              <svg-arrow
                class="black"
                :color="'black'"
                :width="16"
                :height="16"
              /><svg-arrow
                class="white"
                :color="'white'"
                :width="16"
                :height="16"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <contactForm />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      offer: 'offer/getOffer',
    }),
  },
  methods: {
    revealSections() {
      let sections = this.$gsap.utils.toArray('.single-offer')
      sections.forEach((section) => {
        this.$gsap.fromTo(
          section.children,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              // markers: true,
              toggleActions: 'play pause resume reverse',
            },
          }
        )
      })
    },
  },
  mounted() {
    this.revealSections()
  },
}
</script>

<style scoped lang="scss">
p {
  color: #1e3455;
}
.offer-wrapper {
  background-size: cover;
  background-position: center;
  margin-top: -132px;
}
header {
  padding: 32px;
  background: url('~/assets/offerbg.jpg');
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: bold;
  font-size: 80px;
  color: rgb(242, 242, 242);
  text-align: center;
}
.content {
  color: rgb(242, 242, 242);
  font-size: 20px;
}
.offer-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.single-offer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 330px;
  margin: 40px 0;
  img {
    border-radius: 24px;
    width: 100%;
    height: 380px;
  }
}
.offer-title {
  font-size: 16px;
  margin-top: 16px;
}
.offer-name {
  font-weight: bold;
  font-size: 22px;
}
.offer-content {
  font-size: 16px;
  margin: 16px 0 24px;
}
.offer-route {
  text-decoration: none;
  position: relative;
  color: #1e3455;
  transition: 0.3s;
  div {
    border: 1px solid #aaaaaa;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translate(50%, -50%);
  }
  &:hover {
    text-shadow: 0px 0px 1px black;
  }
  &:hover > div {
    background: #1e3455;
  }
  &:hover > div > .black {
    display: none;
  }
  &:hover > div > .white {
    display: initial;
  }
}
.white {
  display: none;
}
@media (min-width: 740px) {
  .content {
    max-width: 540px;
  }
  .single-offer {
    width: 664px;
    position: relative;
    img {
      object-fit: cover;
    }
  }
  .offer-content {
    width: 480px;
  }
  .first-half {
    width: 100%;
  }
}
@media (min-width: 1280px) {
  .title {
    font-size: 120px;
    margin-top: 120px;
  }
  .content {
    font-size: 24px;
    max-width: 700px;
    text-align: center;
  }
  header {
    background-repeat: no-repeat;
    background-size: cover;
  }
  .single-offer {
    flex-direction: row-reverse;
    width: auto;
    margin: -56px 0 0;
    &:nth-child(1) {
      margin-top: 80px;
    }
    img {
      width: 480px;
      height: 540px;
    }
    &:nth-child(even) {
      flex-direction: row;
      .first-half {
        margin-right: 160px;
      }
    }
    &:nth-child(odd) {
      .first-half {
        margin-left: 160px;
      }
    }
    &:nth-last-child(1) {
      margin-bottom: 80px;
    }
  }
  .sec-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 544px;
  }
  .offer-wrapper {
    margin-top: -140px;
  }
}
</style>
