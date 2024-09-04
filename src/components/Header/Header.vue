<template>
  <header class="header">
    <nav class="nav">
      <div class="container">
        <div class="nav__box">
          <a href="#/" class="nav__logo">
            <img src="../../assets/images/logo.png" alt="" />
            <p class="nav__logo-text">{{ t("nav.logoText") }}</p>
          </a>
          <ul class="nav__list" :class="{ active: burger }">
            <button class="nav__close" @click="burger = false">
              <img src="../../assets/images/close.png" alt="" />
            </button>
            <li>
              <a href="#whyTopic" class="nav__link">{{ t("nav.whyUs") }}</a>
            </li>
            <li>
              <a href="#results" class="nav__link">{{ t("nav.results") }}</a>
            </li>
            <li>
              <a href="#courses" class="nav__link">{{ t("nav.courses") }}</a>
            </li>
            <li>
              <a href="#questions" class="nav__link">{{ t("nav.faq") }}</a>
            </li>
          </ul>
          <div class="nav__right">
            <button class="nav__bars" @click="burger = true">
              <img src="../../assets/images/burger.svg" alt="" />
            </button>
            <a href="tel:+998333060098" class="nav__contact">
              +998 (33) 306 0098
              <span>{{ t("nav.contactNow") }}</span>
            </a>
            <Transition name="lang" mode="out-in">
              <button
                class="nav__lang"
                v-if="locale == 'ru'"
                @click="changeLang('uz')"
              >
                Uz
                <img src="../../assets/images/Uzbekistan-flag.webp" alt="" />
              </button>
              <button
                class="nav__lang"
                v-else-if="locale == 'eng'"
                @click="changeLang('ru')"
              >
                Ru
                <img src="../../assets/images/russia.png" alt="" />
              </button>
              <button class="nav__lang" v-else @click="changeLang('eng')">
                Eng
                <img src="../../assets/images/eng.png" alt="" />
              </button>
            </Transition>
          </div>
        </div>
      </div>
    </nav>
    <div class="intro" id="/">
      <div class="container">
        <p class="intro__text"><span>---</span>{{ t("intro.text") }}</p>
        <h1 class="intro__title">{{ t("intro.title") }}</h1>
        <div class="intro__desc">
          <p class="intro__desc-text">
            <img src="../../assets/images/leaf.png" alt="" />
            {{ t("intro.desc1") }}
          </p>
          <p class="intro__desc-text">
            <img src="../../assets/images/leaf.png" alt="" />
            {{ t("intro.desc2") }}
          </p>
        </div>
        <a href="#courses" class="intro__link">
          <Btn :text="t('intro.btnText')" class="btn" />
          <p class="intro__link-bottom">{{ t("intro.linkBottom") }}</p>
        </a>
        <img class="intro__bg" src="../../assets/images/bg.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script setup>
import Btn from "../UI/Btn.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

let burger = ref(false);
const { locale, t } = useI18n();

const changeLang = (newLang) => {
  locale.value = newLang;
};
</script>
