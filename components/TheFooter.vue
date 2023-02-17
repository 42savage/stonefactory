<template>
  <footer>
    <div class="logo">
      <p class="logo-main">Lastro-Beton</p>
      <p class="logo-sec">Zakład kamieniarski</p>
    </div>
    <div class="email">
      <svg-mail :fill="'white'" :stroke="'#555555'" />
      <p class="email-content">pawel.dzieniak@onet.pl</p>
      <p class="email-content">kontakt@kamieniarstwobeton.pl</p>
    </div>
    <div class="phone">
      <svg-phone :fill="'white'" />
      <p class="phone-content">+48 502-439-989</p>
      <p class="phone-conten">+48 512-188-034</p>
    </div>
    <div class="adress">
      <svg-map-pin :fill="'white'" :stroke="'#555555'" />
      <p class="adress-title"><b>Lastro-Beton</b></p>
      <p class="adress-content">Juliusza Słowackiego 31</p>
      <p class="adress-content">26-640 Skaryszew</p>
    </div>
    <div class="socials">
      <p>Chcesz być na bieżąco? Sprawdź Facebooka naszej firmy.</p>
      <svg-facebook-logo />
    </div>
    <div class="author-section">
      <p>© Lastro-Beton Zakład Kamieniarski 2022</p>
      <p>Projekt i wykonanie kzweb.dev</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
footer {
  // background: #2d2d2d;
  background: #0d0e16;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 32px 32px 120px 32px;
  position: relative;
}
.logo {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
}
.logo-main {
  font-size: 24px;
  font-weight: bold;
}
.logo-sec {
  font-size: 14px;
  margin-top: -6px;
}
.email,
.phone,
.adress {
  color: white;
  font-size: 18px;
  margin: 16px 0;
}
.socials {
  margin-top: 144px;
  color: #7c7c7c;
  p {
    margin-bottom: 16px;
  }
}
.author-section {
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  // background: #2a2a2a;
  background: #090a0f;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (min-width: 1280px) {
  .logo {
    align-items: flex-start;
    margin: 0;
  }
  footer {
    padding: 40px 80px 80px;
    align-items: flex-end;
    position: relative;
  }
  .adress {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    flex-direction: column;
  }
  .email,
  .phone {
    width: 260px;
    margin: 4px 0;
  }
  .socials {
    margin: 0;
    position: absolute;
    left: 80px;
    width: 320px;
  }
  .email,
  .phone,
  .adress,
  .socials,
  .author-section {
    font-size: 14px;
  }
}
</style>
