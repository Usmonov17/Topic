<template>
  <div class="container">
    <div class="contact">
      <div class="contact__box">
        <div class="contact__info">
          <h3 class="contact__title">Savollaringiz qoldimi?</h3>
          <p class="contact__text">
            Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob
            beramiz.
          </p>
        </div>
        <div class="contact__form">
          <input class="contact__input" type="text" placeholder="Ismingiz" required />
          <input
            class="contact__input"
            type="tel"
            placeholder="Telefon raqamingiz"
            required
          />
          <div class="contact__btn"><Btn class="btn" :text="'Savol berish'" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from "../UI/Btn.vue";
</script>
