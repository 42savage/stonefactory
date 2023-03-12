<template>
  <div
    class="quote-wrapper"
    :class="{
      quoteOfferTablet: this.$route.name === 'oferta-id' && this.$mq === 'md',
    }"
  >
    <p class="quote">
      {{ quoteContent }}
    </p>
    <p class="quote-author">{{ quoteAuthor }}</p>
  </div>
</template>

<script>
export default {
  props: {
    quoteContent: {
      type: String,
      default: 'Test',
    },
    quoteAuthor: {
      type: String,
      default: 'Test autor',
    },
  },
}
</script>

<style scoped lang="scss">
.quote-wrapper {
  margin: 56px 32px 32px 56px;
  max-width: 320px;
}
.quote {
  font-size: 24px;
  position: relative;
  color: #555555;
  &::before {
    content: '”';
    color: #e9e9e9;
    font-size: 240px;
    position: absolute;
    top: -62px;
    left: -36px;
    opacity: 0.8;
    z-index: -1;
  }
}
.quote-author {
  text-align: right;
  margin-top: 16px;
}
@media (min-width: 744px) {
  .quote-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
  }
  .quoteOfferTablet {
    position: absolute;
    bottom: -24px;
    right: 24px;
  }
}
@media (min-width: 1280px) {
  .quote-wrapper {
    position: absolute;
    top: 0;
    right: 80px;
  }
}
</style>
