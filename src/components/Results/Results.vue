<template>
  <div class="results" id="results">
    <div class="container">
      <h2 class="title">O’quvchilarimizning natijalari TOPIK 6 gacha</h2>
      <div class="results__box">
        <Marquee class="marque-box" speed="50">
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
        </Marquee>
        <Marquee class="marque-box" speed="50" direction="right">
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
          <img src="../../assets/images/cefr.png" alt="" />
        </Marquee>
      </div>
      <div class="btn" @click="openModal">
        <Btn :text="'ARIZA QOLDIRISH'" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Btn from "../UI/Btn.vue";
import { Marquee } from "vue-fast-marquee";
import { inject } from "vue";
const newModal = inject('newModal')

const openModal = () => {
  newModal(true)
}
</script>
<style lang="scss">
@import "../../assets/sass/media.scss";

.results {
  margin-bottom: 150px;

  @include media(950) {
    margin-bottom: 100px;
  }

  @include media(850) {
    margin-bottom: 60px;
  }

  @include media(750) {
    margin-bottom: 40px;
  }

  @include media(650) {
    margin-bottom: 30px;

    .marque-box:nth-last-child(1) {
      display: none;
    }
  }

  @include media(500) {
    margin-bottom: 20px;
  }

  @include media(400) {
    margin-bottom: 15px;
  }

  &__box {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include media(1000) {
      margin: 40px 0;
    }

    @include media(800) {
      margin: 30px 0;
    }

    @include media(500) {
      margin: 20px 0;
    }

    @include media(400) {
      margin: 15px 0;
    }
  }
}

.marque-box {
  img {
    margin: 0 15px;

    @include media(950) {
      width: 150px;
    }

    @include media(850) {
      width: 150px;
    }

    @include media(750) {
      width: 150px;
      margin: 0 10px;
    }
  }
}

.btn {
  width: max-content;
  margin: 0 auto;
}
</style>
