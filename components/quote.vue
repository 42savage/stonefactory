<template>
  <div class="quote-wrapper">
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
  width: 320px;
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
</style>
