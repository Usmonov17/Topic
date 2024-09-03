<template>
  <Header />
  <Ads />
  <Results />
  <GKS />
  <Helps />
  <Courses />
  <WhyTopic />
  <Contact />
  <Footer />
  <Modal v-model:modal="modal" />
</template>

<script setup>
import { provide, ref } from "vue";

import Header from "./components/Header/Header.vue";
import Ads from "./components/Ads/Ads.vue";
import Results from "./components/Results/Results.vue";
import GKS from "./components/GKS/GKS.vue";
import Helps from "./components/Helps/Helps.vue";
import Courses from "./components/Courses/Courses.vue";
import WhyTopic from "./components/WhyTopic/WhyTopic.vue";
import Contact from "./components/ConatctForm/Contact.vue";
import Footer from "./components/Footer/Footer.vue";
import Modal from "./components/Modal/Modal.vue";

const modal = ref(false);
provide('modal', modal);
provide('newModal', (value) => { modal.value = value });
</script>
