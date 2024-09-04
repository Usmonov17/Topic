<template>
  <div class="helps">
    <div class="container">
      <h2 class="helps__title">{{ $t("helps.title") }}</h2>
      <div class="helps__box">
        <div class="helps__info">
          <p class="helps__info-text">{{ $t("helps.infoText") }}</p>
          <div class="helps__link">
            <p>{{ $t("helps.moreInfo") }}</p>
            <Btn :text="$t('helps.apply')" @click="openModal" />
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
import { inject } from "vue";
const newModal = inject("newModal");

const openModal = () => {
  newModal(true);
};
</script>
