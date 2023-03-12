<template>
  <div v-if="!cookiesAccepted" class="cookies-container">
    <button class="close-button" @click="acceptCookies">
      <svg-close :width="16" :height="16" />
    </button>
    <p>Strona do poprawnego działania może wykorzystywać pliki cookies.</p>
    <img draggable="false" src="~/static/cookie.png" alt="Ciasteczko" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookiesAccepted: false,
    }
  },
  methods: {
    acceptCookies() {
      this.cookiesAccepted = true
      localStorage.cookiesAccepted = true
    },
  },
  watch: {
    cookiesAccepted: function (value) {
      localStorage.cookiesAccepted = value
    },
  },
  mounted() {
    if (localStorage.cookiesAccepted) {
      this.cookiesAccepted = localStorage.cookiesAccepted
    }
  },
}
</script>

<style scoped lang="scss">
.cookies-container {
  position: fixed;
  bottom: 20px;
  right: 32 px;
  background: white;
  width: 340px;
  height: 120px;
  overflow: hidden;
  box-shadow: 0px 12px 44px 2px rgb(0 0 0 / 25%);
  padding: 24px;
  border-radius: 16px;
  z-index: 10;
  img {
    width: 50%;
    position: absolute;
    right: -40px;
    bottom: -64px;
    opacity: 0.2;
  }
  p {
    padding: 16px;
  }
}
.close-button {
  border: none;
  background: none;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 24px;
  z-index: 9;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 16px;
  &:hover {
    background: rgb(211, 211, 211);
  }
}
@media (min-width: 1280px) {
  .cookies-container {
    right: 80px;
  }
}
</style>
