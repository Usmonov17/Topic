<template>
  <div class="ads">
    <div class="container">
      <h2 class="title">TOPIK academy aniq siz uchun agar siz:</h2>
      <div class="ads__box">
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add1.png" alt="" />
          </div>
          <p class="ads__card-text">
            <span>Qisqa</span> muddat ichida Koreys tilida gapirishni istaysiz
          </p>
        </div>
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add2.png" alt="" />
          </div>
          <p class="ads__card-text">
            Koreys tili o’rganib o’z <span>karyerangizni</span> qurmoqchisiz
          </p>
        </div>
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add3.png" alt="" />
          </div>
          <p class="ads__card-text">
            Topik sertifikatini olib Koreyaning nufuzli universitetlariga
            <span>GRANT</span> yutmoqchisiz
          </p>
        </div>
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add4.png" alt="" />
          </div>
          <p class="ads__card-text">
            Janubiy Koreya davlatida <span>o’qish</span> va <span>ishlash</span> uchun
            ketmoqchisiz
          </p>
        </div>
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add5.png" alt="" />
          </div>
          <p class="ads__card-text">
            Koreys tilini o’rta darajda bilasiz va darajangizni
            <span>oshirmoqchisiz</span>
          </p>
        </div>
        <div class="ads__card">
          <div class="ads__card-img">
            <img src="../../assets/images/add6.png" alt="" />
          </div>
          <p class="ads__card-text">
            Ko’p yillardan buyon o’qib ham <span>natijaga</span> chiqa olmayapsiz
          </p>
        </div>
      </div>
      <div class="ads__btn">
        <Btn :text="'HA BU MEN'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn from "../UI/Btn.vue";
</script>
