<template>
  <div class="wrapper">
    <header>
      <h1 class="header-title">Produkujemy nagrobki, blaty oraz schody.</h1>

      <nuxt-link to="/oferta" class="call-to-action-button"
        >Sprawdź ofertę</nuxt-link
      >
      <div class="image-slider-wrapper">
        <client-only>
          <nuxt-link
            to="oferta/nagrobki-pojedyncze"
            class="image-slider-single-image"
          >
            <img
              draggable="false"
              src="~/static/slider/image1.jpg"
              alt="Zdjęcie przedstawiające schody"
              class="image-slider-mobile-image"
            />
            <div class="slider-image-content">
              <p class="image-subtitle">
                Odpowiedni pomnik dla Twojej bliskiej osoby
              </p>
              <p class="image-title">Nagrobki pojedyncze, nagrobki podwójne</p>
              <nuxt-link class="image-link" to="oferta/nagrobki-pojedyncze"
                ><svg-arrow :width="32" :height="32" /><span>Sprawdź</span>
              </nuxt-link>
            </div>
          </nuxt-link>
          <nuxt-link
            to="oferta/schody-z-kamienia"
            class="image-slider-single-image"
          >
            <img
              draggable="false"
              src="~/static/slider/image2.jpg"
              alt="Zdjęcie przedstawiające schody"
              class="image-slider-mobile-image"
            />
            <div class="image-slider-content-small">
              <p class="image-slider-content-small-title">Popularny wybór</p>
              <nuxt-link
                to="/oferta/schody-z-kamienia"
                class="image-slider-content-small-link"
                >Schody z kamienia
                <span
                  ><svg-arrow
                    class="dark"
                    :color="'#1E3455'"
                    :width="24"
                    :height="24" /><svg-arrow
                    class="white"
                    :color="'white'"
                    :width="24"
                    :height="24" /></span
              ></nuxt-link>
            </div>
          </nuxt-link>
        </client-only>
      </div>
      <div class="slider-state-wrapper">
        <div class="state active"></div>
        <div class="state"></div>
        <div class="state"></div>
      </div>
      <quote
        :quoteContent="'Widziałem anioła w marmurze i rzeźbiłem, dopóki go nie uwolniłem.'"
        :quoteAuthor="'~Michał Anioł'"
      />
    </header>
    <section class="offer">
      <div class="entry-section-content">
        <p class="sub-title">Nasza oferta</p>
        <p class="title">Dbamy o satysfakcję Klienta</p>
        <p class="text">Szeroka ofera i wysoka jakość.</p>
        <p class="text">Stawiamy na klienta i jego zadowolenie.</p>
      </div>
      <div class="offer-grid-wrapper">
        <client-only>
          <nuxt-link
            class="single-offer-item"
            v-for="offerItem in offer"
            :key="offerItem.id"
            :to="offerItem.route.link"
          >
            <div>
              <img
                draggable="false"
                :src="offerItem.image.src"
                :alt="offerItem.image.alt"
                class="item-image"
                loading="lazy"
              />
            </div>
            <p class="item-title">{{ offerItem.title }}</p>
            <p class="item-name">{{ offerItem.name }}</p>
            <nuxt-link class="item-route" :to="offerItem.route.link"
              ><svg-arrow :color="'black'" :width="16" :height="16" />
            </nuxt-link>
          </nuxt-link>
        </client-only>
      </div>
    </section>
    <section class="aboutus">
      <div class="entry-section-content-about" id="o-firmie">
        <p class="sub-title-about">O firmie</p>
        <p class="title-about">Kilka słów o naszej działalności</p>
        <p class="text-about">
          <b>Lastro-Beton</b> to przedsiębiorstwo specjalizujące się w produkcji
          nagrobków o najwyższej jakości.
        </p>
        <p class="text-about">
          Nasza oferta obejmuje szeroki wybór materiałów, wśród których znajdują
          się granit, marmur, kamień naturalny oraz beton.
        </p>
        <p class="text-about">
          Dzięki wieloletniemu doświadczeniu oraz zaangażowaniu naszych
          specjalistów jesteśmy w stanie zapewnić naszym klientom nagrobki,
          które spełnią ich oczekiwania pod względem estetyki i trwałości.
        </p>
        <p class="text-about">
          Nasza strona internetowa zawiera szczegółowe informacje na temat
          dostępnych u nas nagrobków oraz materiałów, a także przedstawia
          przykłady naszych realizacji. Zachęcamy do zapoznania się z ofertą i
          skorzystania z naszych usług. W razie pytań lub wątpliwości służymy
          pomocą i chętnie odpowiemy na wszelkie pytania.
        </p>
      </div>
      <div class="aboutus-grid-wrapper">
        <div class="grid-single-item">
          <svg-doswiadczenie />
          <div>
            <p class="grid-about-title">Doświadczenie</p>
            <p class="grid-about-text">
              Nasze wieloletnie doświadczenie w branży kamieniarskiej w
              połączeniu z dbałością o szczegóły, pozwala nam spełnić
              oczekiwania każdego Klienta.
            </p>
          </div>
        </div>

        <div class="grid-single-item">
          <svg-profesjonalizm />
          <div>
            <p class="grid-about-title">
              Profesjonalizm i podejście do Klienta
            </p>
            <p class="grid-about-text">
              W <b>Lastro-Beton</b> obsługujemy Państwa kompleksowo od pomocy w
              wyborze odpowiedniego kamienia, aż po wykonanie produktu zgodnie z
              ustalonym wcześniej projektem i montażem.
            </p>
          </div>
        </div>

        <div class="grid-single-item">
          <svg-dzialanie />
          <div>
            <p class="grid-about-title">Szybkie i sprawne działanie</p>
            <p class="grid-about-text">
              Nasz zespół jest profesjonalny i doświadczony, dzięki czemu
              jesteśmy w stanie szybko i sprawnie realizować wszystkie
              zamówienia, zapewniając tym samym satysfakcję naszych klientów.
            </p>
          </div>
        </div>
      </div>
      <div class="statistics">
        <p><span class="featured">+30 lat</span> doświadczenia</p>
        <p><span class="featured">+200</span> Projektów</p>
        <p><span class="featured">+200</span> Zadowolonych klientów</p>
      </div>
    </section>
    <section class="realisations">
      <div class="entry-section-content">
        <p class="sub-title">Realizacje</p>
        <p class="title">Zapoznaj się z naszą ofertą</p>
        <p class="text">
          Nasze realizacje to doskonała okazja do zobaczenia co jesteśmy w
          stanie osiągnąć i jakie rozwiązania stosujemy w praktyce.
        </p>
      </div>
      <div class="realisations-wrapper">
        <div class="category-wrapper">
          <p
            :class="{ chosen: realisations[0].category === 'blaty_z_kamienia' }"
            @click="choseRealisation('blaty_z_kamienia')"
          >
            Blaty z kamienia
          </p>
          <p
            :class="{
              chosen: realisations[0].category === 'schody_z_kamienia',
            }"
            @click="choseRealisation('schody_z_kamienia')"
          >
            Schody z kamienia
          </p>
          <p
            :class="{
              chosen: realisations[0].category === 'nagrobki_pojedyncze',
            }"
            @click="choseRealisation('nagrobki_pojedyncze')"
          >
            Nagrobki pojedyncze
          </p>
          <p
            :class="{
              chosen: realisations[0].category === 'nagrobki_podwojne',
            }"
            @click="choseRealisation('nagrobki_podwojne')"
          >
            Nagrobki podwójne
          </p>
          <p
            :class="{
              chosen: realisations[0].category === 'nagrobki_dzieciece',
            }"
            @click="choseRealisation('nagrobki_dzieciece')"
          >
            Nagrobki dziecięce
          </p>
        </div>
        <div class="realisations-images-grid">
          <nuxt-img
            draggable="false"
            v-for="realisation in realisations"
            :key="realisation.id"
            :src="realisation.src"
            :alt="realisation.alt"
            placeholder
            width="240"
          />
        </div>
      </div>
      <nuxt-link class="call-to-action-button" to="/realizacje"
        >Przejdź do realizacji</nuxt-link
      >
    </section>
    <section class="opinions">
      <div class="entry-section-content">
        <p class="sub-title">Tylko zadowoleni Klienci</p>
        <p class="title">Opinie naszych klientów</p>
        <p class="text">
          Cenimy sobie opinie Klientów i bierzemy je do serca. Jeśli masz jakieś
          pytania lub wątpliwości, jesteśmy gotowi na nie odpowiedzieć i pomóc
          Ci w dokonaniu właściwego wyboru. Zapraszamy więc do przeczytania
          opinii innych klientów i dołączenia do grona zadowolonych klientów.
        </p>
      </div>
      <div class="opinion-grid">
        <div
          class="single-opinion"
          v-for="opinion in opinions"
          :key="opinion.id"
        >
          <p class="opinion-name">{{ opinion.name }}</p>
          <p class="opinion-content">{{ opinion.content }}</p>
          <client-only>
            <vue-stars
              class="stars"
              :value="opinion.stars"
              :readonly="true"
              :active-color="'#555555'"
              :shadow-color="'white'"
            />
          </client-only>
        </div>
      </div>
      <div class="call-to-action-wrapper">
        <p class="more-opinions-text">
          Opinie zamieszczone na stronie pochodzą z Map Google.
        </p>
        <a
          href="https://www.google.com/search?q=lastro+beton+skaryszew&oq=mapy+google+lastro+beton+skaryszew&aqs=chrome..69i57j33i10i160l2.5044j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4718670b5e846963:0x271000285bde5ebc,1,,,,"
          aria-label="Przycisk włączajacy nawigację po stronie"
          class="more-opinions-button"
        >
          Sprawdź opinie
        </a>
      </div>
    </section>
    <contactForm />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      offer: 'offer/getOffer',
      realisations: 'realisations/getRealisations',
      opinions: 'opinions/getOpinions',
    }),
  },
  methods: {
    ...mapActions({
      choseRealisationCategory: 'realisations/choseRealisationCategory',
    }),
    choseRealisation(parameter) {
      this.choseRealisationCategory(parameter)
    },
    revealSections() {
      let sections = this.$gsap.utils.toArray('section')
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
header {
  position: relative;
}
.chosen {
  font-weight: bold;
}
.image-slider-wrapper {
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100vw;
  padding: 56px 24px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.image-slider-single-image {
  margin: 0 6px;
  height: 330px;
  width: 330px;
  position: relative;
  text-decoration: none;
  img {
    border-radius: 24px;
    box-shadow: 0px 12px 44px 2px rgba(0, 0, 0, 0.25);
    height: 330px;
    width: 330px;
    transition: 0.3s;
  }
  .image-link {
    transition: 0.3s;
  }
  &:hover > div > .image-link {
    background: #1e3455;
    color: white;
  }
  &:hover > img {
    scale: 1.01;
  }
}
.image-slider-single-image:nth-child(2) {
  &:hover > div > a > span {
    background: #1e3455;
  }
  &:hover > div > a > span > .dark {
    display: none;
  }
  &:hover > div > a > span > .white {
    display: initial;
  }
  width: 290px;
  position: relative;
}
.white {
  display: none;
}
.dark {
  display: none;
}
.slider-image-content {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  padding: 0 24px;
  color: white;
}
.image-subtitle {
  font-weight: bold;
  font-size: 14px;
}
.image-title {
  font-size: 16px;
  width: 240px;
}
.image-link {
  position: absolute;
  right: -36px;
  bottom: 8px;
}
.image-link span {
  display: none;
}
.image-slider-content-small {
  position: absolute;
  bottom: 24px;
  left: 24px;
  p {
    font-weight: bold;
  }
  p,
  a {
    color: white;
    text-decoration: none;
  }
}

.header-title {
  color: #1e3455;
  margin: 24px 32px 48px;
}
.call-to-action-button {
  padding: 8px 24px;
  background: #1e3455;
  color: white;
  font-size: 16px;
  margin: 0 32px;
  border-radius: 24px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: #15253d;
  }
}
.slider-state-wrapper {
  // display: flex;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 4px;
  margin: -24px 32px 0;
  background: #ededed;
}
.state {
  color: white;
  width: 33%;
  height: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #c2c2c2;
  }
}
.state.active {
  background: #c2c2c2;
}
// .quote-wrapper {
//   margin: 56px 32px 32px 56px;
// }
// .quote {
//   font-size: 24px;
//   position: relative;
//   color: #555555;
//   &::before {
//     content: '”';
//     color: #e9e9e9;
//     font-size: 240px;
//     position: absolute;
//     top: -62px;
//     left: -36px;
//     opacity: 0.8;
//     z-index: -1;
//   }
// }
// .quote-author {
//   text-align: right;
//   margin-top: 16px;
// }
.entry-section-content {
  margin: 56px 32px 32px;
}
.sub-title {
  color: #055996;
  font-weight: bold;
  font-size: 20px;
}
.title {
  font-size: 48px;
  color: #1e3455;
  font-weight: bold;
  line-height: 46px;
  margin-bottom: 8px;
}
.offer-grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.single-offer-item {
  margin: 24px 0;
  position: relative;
  text-decoration: none;

  color: #1e3455;
  cursor: pointer;
  div {
    overflow: hidden;
    border-radius: 24px;
  }
  transform-origin: 50% 65%;
  img {
    transition: transform 1s, filter 1s ease-in-out;
    filter: brightness(110%);
    width: 300px;
    height: 300px;
  }
  &:hover > div > img {
    filter: brightness(100%);
    transform: scale(1.1);
  }
  .item-route {
    transition: transform 0.5s, filter 0.5s ease-in-out;
  }
  &:hover > .item-route {
    transform: rotate(45deg);
    background: rgb(46, 46, 46);
  }
}
.item-image {
  border-radius: 24px;
  margin-bottom: 8px;
}

.item-title {
  font-size: 14px;
}
.item-name {
  font-size: 18px;
  font-weight: bold;
}
.item-route {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aboutus {
  background: #131313;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex-direction: column;
}
.entry-section-content-about {
  margin: 56px 0;
}
.sub-title-about {
  color: #858585;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.title-about {
  color: #dedede;
  font-size: 24px;
  margin-bottom: 36px;
}
.text-about {
  color: #dedede;
  margin: 8px 0;
}
.grid-single-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 56px 0;
}
.grid-about-title {
  color: #e3e3e3;
  font-size: 24px;
  margin-top: 24px;
  font-weight: bold;
}
.grid-about-text {
  color: #afafaf;
  font-size: 16px;
}
.statistics {
  border: 1px solid #373737;
  border-radius: 16px;
  font-weight: bold;
  color: white;
  font-size: 24px;
  padding: 24px;
  text-align: center;
}
.featured {
  color: #b1deff;
}
.category-wrapper {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: scroll;
  margin: 16px 0;
  p {
    margin: 0 24px;
    padding: 6px 0;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 0.01px black;
    }
  }
}
.realisations-wrapper {
  margin-bottom: 16px;
}
.realisations-images-grid {
  padding: 32px;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  img {
    margin: 8px;
    border-radius: 24px;
    box-shadow: 0px 12px 44px 2px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }
}
.opinion-grid {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  padding: 48px 16px;
}
.single-opinion {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 36px 48px;
  flex-shrink: 0;
  box-shadow: 0px 12px 44px 2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: 0 8px;
  &:nth-child(1) {
    margin-left: 40px;
  }
}
.opinion-name {
  font-weight: bold;
  font-size: 18px;
}
.opinion-content {
  font-size: 16px;
  margin: 36px 0 16px;
  width: 240px;
  position: relative;
  &:after {
    content: '“';
    font-size: 360px;
    color: #555555;
    position: absolute;
    bottom: -136px;
    right: -40px;
    opacity: 0.05;
    transform: rotate(180deg);
  }
}
.more-opinions-text {
  font-size: 16px;
  margin: 32px;
}
.more-opinions-button {
  padding: 8px 24px;
  border: 1px solid #2d2d2d;
  background: none;
  border-radius: 24px;
  margin: 24px 32px 140px 32px;
  font-size: 16px;
  text-decoration: none;
}

// .contact-info-grid {
//   display: grid;
//   grid-template-columns: 180px 1fr;
//   grid-gap: 16px;
//   margin: 0 32px;
// }
// form {
//   margin: 0 32px;
//   input,
//   select {
//     padding: 16px;
//     border-radius: 24px;
//     border: none;
//     background: #f8f8f8;
//     font-size: 16px;
//     margin-right: 16px;
//   }
//   label {
//     margin: 16px 0 8px;
//     font-weight: bold;
//   }
//   div {
//     display: flex;
//     flex-direction: column;
//   }
//   textarea {
//     background: #f8f8f8;
//     border: none;
//     min-height: 144px;
//     padding: 8px;
//     font-size: 16px;
//   }
// }
// .form-send-message {
//   background: #2d2d2d;
//   border: none;
//   border-radius: 24px;
//   padding: 8px 24px;
//   color: white;
//   margin-top: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 180px;
//   svg {
//     margin-left: 16px;
//   }
// }
// .map {
//   width: 100%;
//   height: 450px;
// }
@media (min-width: 744px) {
  .header-title {
    margin: 24px 40px 48px;
    width: 540px;
    font-size: 60px;
  }
  .call-to-action-button {
    margin-left: 40px;
  }
  .image-slider-wrapper {
    padding: 40px 24px;
    margin: 0 12px;
  }
  .image-slider-single-image:nth-child(1) {
    width: 442px;
    img {
      width: 442px;
    }
  }
  .dark {
    display: initial;
  }
  .image-link svg {
    display: none;
  }
  .image-link span {
    display: initial;
  }
  .image-link {
    background: white;
    border: none;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 24px;
    right: 24px;
  }
  .slider-state-wrapper {
    margin: 0 40px;
  }

  .quote {
    width: 320px;
  }
  .title {
    width: 460px;
  }
  .text {
    width: 420px;
    font-size: 18px;
  }
  .entry-section-content {
    margin: 56px 40px 32px 40px;
  }
  .offer-grid-wrapper {
    display: grid;
    grid-template-columns: 300px 300px;
    justify-content: center;
    align-items: center;
    grid-gap: 0 32px;
  }
  .aboutus {
    padding: 32px 40px;
  }
  .entry-section-content-about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  .title-about {
    text-align: center;
    font-weight: bold;
    font-size: 36px;
  }
  .text-about {
    width: 480px;
  }
  .grid-single-item {
    flex-direction: row-reverse;
    svg {
      margin-left: 32px;
    }
  }
  .grid-about-text {
    width: 280px;
    font-size: 18px;
  }
  .grid-about-title {
    width: 340px;
    font-size: 24px;
  }
  .statistics {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    p {
      margin: 12px;
      &:nth-child(3) {
        margin-bottom: 0;
      }
    }
  }
  .category-wrapper p:nth-child(1) {
    margin-left: 40px;
  }
  .realisations-images-grid img {
    width: 360px;
    height: 360px;
  }
  .single-opinion {
    width: 536px;
    height: 360px;
  }
  .opinion-name {
    font-size: 24px;
    font-weight: bold;
  }
  .opinion-content {
    font-size: 22px;
    width: 400px;
  }
  .more-opinions-text {
    width: 240px;
  }
  .call-to-action-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #555555;
  }
  .more-opinions-button {
    margin: 24px 32px 0 32px;
  }
  // .contact-info-grid {
  //   grid-template-columns: 1fr 1fr 1fr;
  //   justify-content: center;
  //   align-items: center;
  //   div {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     flex-direction: column;
  //     text-align: left;
  //   }
  // }
  // form {
  //   display: flex;
  //   flex-wrap: wrap;
  //   margin-top: 40px;
  //   div {
  //     width: 50%;
  //     &:nth-last-child(1) {
  //       width: 100%;
  //     }
  //   }
  // }
  // .form-send-message {
  //   margin: 24px 0 72px;
  // }
}
@media (min-width: 1280px) {
  *::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
  .header-title {
    font-size: 60px;
    width: 407px;
    margin: 24px 80px 48px;
  }
  .call-to-action-button {
    margin-left: 80px;
  }
  .image-slider-wrapper {
    padding: 40px 56px;
  }
  .slider-state-wrapper {
    margin: 0 80px;
  }

  .image-slider-single-image:nth-child(1) {
    width: 740px;
    height: 484px;
    img {
      width: 740px;
      height: 484px;
    }
  }
  .image-slider-single-image:nth-child(2) {
    width: 548px;
    height: 410px;
    img {
      width: 548px;
      height: 410px;
    }
  }
  .image-subtitle {
    font-size: 16px;
  }
  .image-title {
    font-size: 24px;
    width: auto;
  }

  .image-slider-content-small-title {
    color: #767676 !important;
    font-size: 16px;
    font-weight: lighter;
  }
  .image-slider-content-small-link {
    font-size: 32px;
    color: #1e3455 !important;
    font-weight: bold;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  .image-slider-content-small {
    position: relative;
    bottom: initial;
    left: initial;
    span {
      border: 1px solid #aaaaaa;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
    }
  }
  .entry-section-content {
    margin: 56px 80px 32px 80px;
  }
  .offer-grid-wrapper {
    grid-template-columns: 300px 300px 300px;
    justify-content: flex-start;
    margin-left: 80px;
  }
  .title-about {
    font-size: 48px;
  }
  .text-about {
    font-size: 24px;
    width: 680px;
  }
  .statistics {
    width: 680px;
  }
  .category-wrapper {
    margin-left: 40px;
  }
  .realisations-images-grid {
    grid-template-columns: 360px 360px 360px;
    grid-gap: 16px;
    margin: 0 40px;
  }

  .opinions {
    background: #f8f8f8;
    border-radius: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  // .opinion-grid {
  //   padding: 0 40px;
  // }
  .call-to-action-wrapper {
    margin: 0 40px;
  }
  form {
    margin-right: 80px;
    margin-left: 80px;
  }
  .contact-us {
    display: grid;
    grid-template-columns: 50% 50%;
    flex-direction: row;
  }
  .map {
    height: 100%;
    width: 100%;
  }
}
</style>
<style>
.single-offer-item:hover .item-route svg > path {
  stroke: white !important;
}
</style>
