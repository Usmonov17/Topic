<template>
  <div class="box">
    <Nav />
    <Intro />
  </div>
</template>

<script setup>
import Nav from "./components/Nav/Nav.vue";
import Intro from "./components/Intro/Intro.vue";
</script>
<style>
.box {
  display: flex;
  flex-direction: column;
}
</style>
