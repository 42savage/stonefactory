<template>
  <section class="contact-us" id="kontakt">
    <div>
      <div class="entry-section-content">
        <p class="sub-title">Przedstaw nam swoje oczekiwania</p>
        <p class="title">Skontaktuj się z nami</p>
        <p class="text">
          Jeśli masz jakiekolwiek pytania lub wątpliwości, nie wahaj się
          skontaktować z nami. Chętnie odpowiemy na wszelkie pytania i pomożemy
          Ci wybrać najlepsze rozwiązanie. Nasz zespół jest do Twojej dyspozycji
          od poniedziałku do piątku w godzinach
          <b>od 9:00 do 17:00.</b>
        </p>
      </div>
      <div class="contact-info-grid">
        <div class="adress">
          <svg-map-pin />
          <p class="adress-title"><b>Lastro-Beton</b></p>
          <p class="adress-content">Juliusza Słowackiego 31</p>
          <p class="adress-content">26-640 Skaryszew</p>
        </div>
        <div class="phone">
          <svg-phone />
          <p class="phone-content">+48 502-439-989</p>
          <p class="phone-conten">+48 512-188-034</p>
        </div>
        <div class="email">
          <svg-mail />
          <p class="email-content">pawel.dzieniak@onet.pl</p>
          <p class="email-content">kontakt@kamieniarstwobeton.pl</p>
        </div>
      </div>
      <form>
        <div>
          <label for="name">Imię i Nazwisko</label>
          <input
            type="text"
            name="name"
            id="name"
            aria-label="Imię i nazwisko"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label for="email">Adres email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="jankowalski@poczta.pl"
            aria-label="Adres email"
          />
        </div>
        <div>
          <label for="company">Nazwa firmy</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Opcjonalnie"
            aria-label="Firma (opcjonalnie)"
          />
        </div>
        <div>
          <label for="cars">Temat zapytania:</label>
          <select name="subject" id="subject">
            <option value="schody_z_kamienia">Schody z kamienia</option>
            <option value="blaty_z_kamienia">Blaty z kamienia</option>
            <option value="nagrobek_pojedynczy">Nagrobek pojedyńczy</option>
            <option value="nagrobek_podwojny">Nagrobek podwójny</option>
            <option value="nagrobek_dzieciecy">Nagrobek dziecięcy</option>
            <option value="pomnik">Pomnik</option>
          </select>
        </div>
        <div>
          <label for="message">Wiadomość</label>
          <textarea name="message">Wprowadź tekst zapytania</textarea>
          <button class="form-send-message">
            Wyślij zapytanie <svg-button-arrow />
          </button>
        </div>
      </form>
    </div>
    <iframe
      title="Mapa"
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.3046849291316!2d21.247554778976507!3d51.31512823066229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718670b5e846963%3A0x271000285bde5ebc!2sLASTRO-BETON%20ZAK%C5%81AD%20KAMIENIARSKI!5e0!3m2!1spl!2snl!4v1672865956760!5m2!1spl!2snl"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.entry-section-content {
  margin-top: 32px;
}
.text,
.title,
.sub-title {
  padding: 0 32px;
}
.text {
  width: auto;
  font-size: 18px;
}
.title {
  font-size: 48px;
  color: #1e3455;
  font-weight: bold;
  line-height: 46px;
  margin-bottom: 8px;
}
.sub-title {
  color: #055996;
  font-weight: bold;
  font-size: 20px;
}
.contact-info-grid {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-gap: 16px;
  margin: 0 32px;
}
form {
  margin: 0 32px;
  input,
  select {
    padding: 16px;
    border-radius: 24px;
    border: none;
    background: #f8f8f8;
    font-size: 16px;
    margin-right: 16px;
  }
  label {
    margin: 16px 0 8px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  textarea {
    background: #f8f8f8;
    border: none;
    min-height: 144px;
    padding: 8px;
    font-size: 16px;
  }
}
.form-send-message {
  background: #2d2d2d;
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  color: white;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  svg {
    margin-left: 16px;
  }
}
.map {
  width: 100%;
  height: 450px;
}
.contact-info-grid {
  margin-top: 56px;
}
@media (min-width: 744px) {
  .contact-info-grid {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: left;
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    div {
      width: 50%;
      &:nth-last-child(1) {
        width: 100%;
      }
    }
  }
  .form-send-message {
    margin: 24px 0 72px;
  }
}
@media (min-width: 1280px) {
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
