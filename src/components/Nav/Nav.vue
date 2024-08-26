<template>
  <div class="nav">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
let burger = ref(false);

</script>
