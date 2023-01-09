<template>
  <div class="info-bar-wrapper">
    <div class="phones">
      <a href="tel:+48502439989"
        ><svg-phone :fill="'white'" :width="16" :height="16" />+48
        502-439-989</a
      >
      <a href="tel:+48512188034"
        ><svg-phone :fill="'white'" :width="16" :height="16" />+48 512-188-034
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.info-bar-wrapper {
  background: #2a2a2a;
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.phones {
  display: flex;
  flex-direction: row;
  svg {
    margin: 0 8px;
  }
  a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
  }
}
</style>
