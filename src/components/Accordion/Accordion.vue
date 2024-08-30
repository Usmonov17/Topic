<template>
  <div class="faq">
    <div class="container">
      <h2 class="title">Ko'p beriladigan savollar</h2>
      <div class="faq__box">
        <div v-for="(faq, index) in faqs" :key="index" class="faq__card">
          <div class="faq__question" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <p :class="{ active: faq.open }">{{ "+" }}</p>
          </div>
          <transition name="faq">
            <div v-if="faq.open" class="faq__answer" :class="{ active: faq.open }">
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "O'quv materiallar bilan ta'minlaysizlarmi yoki o'zim izlab topamanami?",
    answer:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore voluptas necessitatibus sed quidem! Mollitia assumenda earum unde nostrum ",
    open: false,
  },
  {
    question: "O'quv materiallar bilan ta'minlaysizlarmi yoki o'zim izlab topamanami?",
    answer:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore voluptas necessitatibus sed quidem! Mollitia assumenda earum unde nostrum ",
    open: false,
  },
  {
    question: "O'quv materiallar bilan ta'minlaysizlarmi yoki o'zim izlab topamanami?",
    answer:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore voluptas necessitatibus sed quidem! Mollitia assumenda earum unde nostrum ",
    open: false,
  },
  {
    question: "O'quv materiallar bilan ta'minlaysizlarmi yoki o'zim izlab topamanami?",
    answer:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore voluptas necessitatibus sed quidem! Mollitia assumenda earum unde nostrum ",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style lang="scss">
.faq {
  &__box {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__card {
    border: 1px solid black;
  }
  &__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    background: #d7f8db;
    border: 1px solid red;
    border-radius: 10px;
    position: relative;
    h3 {
      font-size: 18px;
      font-weight: 500;
    }

    p {
      position: absolute;
      right: 20px;
      top: 5px;
      background: #56b4b0;
      width: 35px;
      height: 35px;
      font-size: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: 0.3s;
      &.active {
        transform: rotate(45deg);
      }
    }
  }

  &__answer {
    padding: 10px;
    height: max-content;
    p {
      font-size: 16px;
      color: #666;
      max-width: 80%;
    }
  }
}

.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}
</style>
