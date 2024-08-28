<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="nav__box">
          <a href="#" class="nav__logo">
            <img src="../../assets/images/logo.png" alt="" />
            <p class="nav__logo-text">
              Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi
            </p>
          </a>
          <button class="nav__bars" @click="burger = true">
            <img src="../../assets/images/burger.svg" alt="" />
          </button>
          <ul class="nav__list" :class="{ active: burger }">
            <button class="nav__close" @click="burger = false">
              <img src="../../assets/images/close.png" alt="" />
            </button>
            <li><a href="" class="nav__link">Nega biz</a></li>
            <li><a href="" class="nav__link">Natijalar</a></li>
            <li><a href="" class="nav__link">Kurslar</a></li>
            <li><a href="" class="nav__link">Ko’p beriladigan savollar</a></li>
          </ul>
          <a href="tel:+998333060098" class="nav__contact">
            +998 (33) 306 0098
            <span>Hoziroq bog’laning</span>
          </a>
        </div>
      </div>
    </nav>
    <div class="intro">
      <div class="container">
        <p class="intro__text"><span>---</span>3 oyda Koreys tilida gapirishni boshlang</p>
        <h1 class="intro__title">
          Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati
        </h1>
        <div class="intro__desc">
          <p class="intro__desc-text">
            <img src="../../assets/images/leaf.png" alt="" />
            5 oyda Topikdan 6 darajagacha olishda yordam beramiz
          </p>
          <p class="intro__desc-text">
            <img src="../../assets/images/leaf.png" alt="" />
            Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash
            imkoniyati
          </p>
        </div>
        <div class="intro__link">
          <Btn :text="'BEPUL DARSGA YOZILISH'" />
          <p class="intro__link-bottom">Birinchi darsga bepul yoziling!</p>
        </div>
        <div class="intro__bg">
          <img src="../../assets/images/bg.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Btn from "../UI/Btn.vue";
import { ref } from "vue";
let burger = ref(false);
</script>
