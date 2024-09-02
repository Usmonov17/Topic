<template>
  <div class="courses" id="courses">
    <div class="container">
      <h2 class="title">O’zingizga mos kursga ro’yxatdan o’ting</h2>
      <div class="courses__box">
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card1.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>Intiensive</h3>
              <p>Davomiyligi: 5 oy</p>
            </div>
            <p class="courses__text">
              <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar uchun haftada
              6 kun 1.5 soatdan intensive kurs.
            </p>
            <div class="courses__price">
              <Btn :text="'Royxatdan otish'" class="btn" @click="openModal" />
              <p>970.000 so’m /oy</p>
            </div>
          </div>
        </div>
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card2.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>Odatiy</h3>
              <p>Davomiyligi: 5 oy</p>
            </div>
            <p class="courses__text">
              Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.
            </p>
            <div class="courses__price">
              <Btn :text="'Royxatdan otish'" class="btn" @click="openModal" />
              <p>560.000 so’m /oy</p>
            </div>
          </div>
        </div>
        <div class="courses__card">
          <div class="courses__img">
            <img src="../../assets/images/card3.png" alt="" />
          </div>
          <div class="courses__info">
            <div class="courses__title">
              <h3>Individual</h3>
              <p>Davomiyligi: 5 oy</p>
            </div>
            <p class="courses__text">
              O’qituvchidan <span>individual</span> dars olmoqchi bo’lganlar uchun haftada
              3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.
            </p>
            <div class="courses__price">
              <Btn :text="'Royxatdan otish'" class="btn" @click="openModal" />
              <p>1.800.000 so’m /oy</p>
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

const newModal = inject('newModal')

const openModal = () => {
  newModal(true)
}
</script>
