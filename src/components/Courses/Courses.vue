<template>
  <div class="courses" id="courses">
    <div class="container">
      <h2 class="title">{{ $t("courses.title") }}</h2>
      <div class="courses__box">
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card1.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>{{ $t("courses.intensive.title") }}</h3>
              <p>{{ $t("courses.intensive.duration") }}</p>
            </div>
            <p>{{ $t("courses.intensive.text") }}</p>
            <div class="courses__price">
              <Btn
                :text="$t('courses.intensive.register')"
                class="btn"
                @click="openModal"
              />
              <p>970.000</p>
            </div>
          </div>
        </div>
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card2.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>{{ $t("courses.regular.title") }}</h3>
              <p>{{ $t("courses.regular.duration") }}</p>
            </div>
            <p>{{ $t("courses.regular.text") }}</p>
            <div class="courses__price">
              <Btn
                :text="$t('courses.regular.register')"
                class="btn"
                @click="openModal"
              />
              <p>560.000</p>
            </div>
          </div>
        </div>
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card3.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>{{ $t("courses.individual.title") }}</h3>
              <p>{{ $t("courses.individual.duration") }}</p>
            </div>
            <p>{{ $t("courses.individual.text") }}</p>
            <div class="courses__price">
              <Btn
                :text="$t('courses.individual.register')"
                class="btn"
                @click="openModal"
              />
              <p>1.800.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Btn from "../UI/Btn.vue";

const newModal = inject("newModal");
const openModal = () => {
  newModal(true);
};
</script>
