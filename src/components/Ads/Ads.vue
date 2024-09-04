<template>
  <div class="ads">
    <div class="container">
      <h2 class="title">{{ t("ads.title") }}</h2>
      <div class="ads__box">
        <div class="ads__card" v-for="(card, index) in cards" :key="index">
          <div class="ads__card-img">
            <img :src="card.imgSrc" alt="" />
          </div>
          <p class="ads__card-text">{{ t(card.textKey) }}</p>
        </div>
      </div>
      <div class="ads__btn">
        <Btn :text="t('ads.ads__btn')" @click="openModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useI18n } from "vue-i18n";
import Btn from "../UI/Btn.vue";

const { t } = useI18n();
const newModal = inject("newModal");

const openModal = () => {
  newModal(true);
};

import add1 from "../../assets/images/add1.png";
import add2 from "../../assets/images/add2.png";
import add3 from "../../assets/images/add3.png";
import add4 from "../../assets/images/add4.png";
import add5 from "../../assets/images/add5.png";
import add6 from "../../assets/images/add6.png";

const cards = [
  {
    imgSrc: add1,
    textKey: "ads.ads__card-text1",
  },
  {
    imgSrc: add2,
    textKey: "ads.ads__card-text2",
  },
  {
    imgSrc: add3,
    textKey: "ads.ads__card-text3",
  },
  {
    imgSrc: add4,
    textKey: "ads.ads__card-text4",
  },
  {
    imgSrc: add5,
    textKey: "ads.ads__card-text5",
  },
  {
    imgSrc: add6,
    textKey: "ads.ads__card-text6",
  },
];
</script>
