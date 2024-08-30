<template>
  <div class="helps">
    <div class="container">
      <h2 class="title">
        Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam
        beramiz
      </h2>
      <div class="helps__box">
        <div class="helps__info">
          <p class="helps__info-text">
            <span>TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa
            olish va grant yutishingizda yaqindan ko’maklashadi
          </p>
          <div class="helps__link">
            <p>Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
            <Btn :text="'Ariza qoldirish'" />
          </div>
        </div>
        <div class="helps__res">
          <Marquee class="marque-box" speed="50">
            <img src="../../assets/images/cefr.png" alt="" />
            <img src="../../assets/images/cefr.png" alt="" />
            <img src="../../assets/images/cefr.png" alt="" />
            <img src="../../assets/images/cefr.png" alt="" />
            <img src="../../assets/images/cefr.png" alt="" />
            <img src="../../assets/images/cefr.png" alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Marquee } from "vue-fast-marquee";
import Btn from "../UI/Btn.vue";
</script>
