<template>
  <div :class="{ main: this.$route.name !== 'realizacje' }">
    <courtain class="courtain" />
    <!-- <eneterPageAnimation /> -->
    <contactInfoBar />
    <navigation />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
.main {
  overflow: hidden;
}
.courtain {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
