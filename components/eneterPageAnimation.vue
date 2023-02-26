<template>
  <div class="loading-wrapper">
    <div ref="stripe" class="stripe">
      <div ref="logoWrapper" class="logo-wrapper">
        <div ref="logoImage" class="image-wrapper">
          <div class="color"></div>
          <img class="image" :src="currentImage" />
        </div>
        <p ref="logoText" class="logo">Lastro-Beton</p>
      </div>
      <p class="loading-info">Trwa ładowanie...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 'loader/0.jpg',
      tl: this.$gsap.timeline({ paused: true }),
    }
  },
  methods: {
    setImage(data) {
      console.log(data)
      this.currentImage = data
    },
  },

  mounted() {
    let play = true
    let index = 0
    let iteratonSpeed = 800
    const arr = [
      'loader/1.jpg',
      'loader/2.jpg',
      'loader/3.jpg',
      'loader/4.jpg',
      'loader/5.jpg',
      'loader/6.jpg',
      'loader/7.jpg',
      'loader/8.jpg',
      'loader/9.jpg',
      'loader/10.jpg',
      'loader/11.jpg',
      'loader/12.jpg',
      'loader/13.jpg',
      'loader/14.jpg',
      'loader/15.jpg',
    ]
    let setImage = this.setImage
    ;(function variableInterval() {
      if (play === true) {
        setImage(arr[index])
        if (iteratonSpeed > 100) {
          iteratonSpeed -= 100
        }
        if (index < arr.length - 1) {
          console.log(index, iteratonSpeed)
          index += 1
        } else if (index === arr.length - 1) {
          index = 0
        }

        setTimeout(variableInterval, iteratonSpeed)
      }
    })()

    this.tl
      .to(
        this.$refs.logoImage,
        {
          y: -332,
          x: -50,
          scale: 0.2,
          delay: 3,
          duration: 0.6,
          ease: 'power4.in',
        },
        'same'
      )
      .to(
        this.$refs.logoText,
        {
          y: -330,
          delay: 3,
          x: -136,
          scale: 0.6,
          duration: 0.6,
          ease: 'power4.in',
        },
        'same'
      )
      .fromTo(
        this.$refs.stripe,
        {
          opacity: 1,
          display: 'flex',
        },
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power4.in',
          display: 'none',
          onComplete: () => {
            play = false
          },
        }
      )

    this.tl.play()
  },
}
</script>

<style scoped lang="scss">
.stripe {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(245, 245, 245);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.logo {
  color: #1e3455;
  font-size: 40px;
  font-weight: bold;
  margin-left: 8px;
}
.image {
  width: 100px;
  height: 166px;
  object-fit: cover;
}
.loading-info {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translate(-50%);
  color: #878787;
  font-size: 22px;
}
.logo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.image-wrapper {
  position: relative;
}
.color {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #1e3455a4;
}
@media (min-width: 1280px) {
  .logo {
    font-size: 160px;
  }
}
</style>
