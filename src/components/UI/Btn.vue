<template>
  <button type="button" class="btn" @click="openModal">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String,
  modal: Boolean
});
const emit = defineEmits(['update:modal']);

const openModal = () => {
  emit('update:modal', true);
};
</script>


<style lang="scss" scoped>
@import "../../assets/sass/media.scss";
@import "../../assets/sass/main.scss";

.btn {
  display: block;
  background: linear-gradient(135deg, #4db6ac, #80cbc4);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 25px 40px;
  font-size: 18px;
  font-family: "Gill Sans";
  box-shadow: 0 5px 0 rgba(0, 73, 49, 0.5);
  cursor: pointer;
  transition: 0.5s ease;

  @include media(900) {
    border-radius: 40px;
    padding: 20px 30px;
    font-size: 15px;
    box-shadow: 0 3px 0 rgba(0, 73, 49, 0.5);
  }

  @include media(650) {
    border-radius: 50px;
    padding: 25px 40px;
    font-size: 18px;
    box-shadow: 0 5px 0 rgba(0, 73, 49, 0.5);
  }

  @include media(400) {
    border-radius: -30%;
    padding: 20px 30px;
    font-size: 16px;
  }
}

.btn:hover,
.btn:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 30px transparent;

  @include media(900) {
    box-shadow: 0 0 0 20px transparent;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #82fff3;
  }
}
</style>
