<template>
  <div :class="{ main: this.$route.name !== 'realizacje' }">
    <contactInfoBar />
    <navigation />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script></script>

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
</style>
