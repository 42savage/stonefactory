<template>
  <div class="main-navigation">
    <p class="logo">Lastro-Beton</p>
    <nav>
      <ul class="link-wrapper" ref="linkWrapper">
        <li class="single-link"><a href="#" class="link">Strona główna</a></li>
        <li class="single-link"><a href="#" class="link">Oferta</a></li>
        <li class="single-link"><a href="#" class="link">O firmie</a></li>
        <li class="single-link"><a href="#" class="link">Realizacje</a></li>
        <li class="single-link"><a href="#" class="link">Kontakt</a></li>
      </ul>
      <button class="toggle-navigation" @click="toggleNavigation">
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
  },
}
</script>

<style scoped lang="scss">
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
</style>
