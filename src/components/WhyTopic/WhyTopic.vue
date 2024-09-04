<template>
  <div class="why" id="whyTopic">
    <div class="container">
      <h2 class="title">{{ $t('why.title') }}</h2>
      <div class="why__box">
        <div class="why__card" v-for="(item, index) in items" :key="index">
          <div class="why__info">
            <p class="why__num">{{ item.num }}</p>
            <h3 class="why__title">{{ $t(item.title) }}</h3>
            <p class="why__text">{{ $t(item.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { num: '01', title: 'why.card1Title', text: 'why.card1Text' },
  { num: '02', title: 'why.card2Title', text: 'why.card2Text' },
  { num: '03', title: 'why.card3Title', text: 'why.card3Text' },
  { num: '04', title: 'why.card4Title', text: 'why.card4Text' },
  { num: '05', title: 'why.card5Title', text: 'why.card5Text' },
  { num: '06', title: 'why.card6Title', text: 'why.card6Text' },
]);
</script>
