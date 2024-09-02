<template>
  <div class="conatiner">
    <div class="modal" v-if="showModal">
      <div class="modal__bg" @click="closeModal"></div>
      <div class="modal__content">
        <p class="modal__close" @click="closeModal">×</p>
        <h2 class="modal__title">O'z ma'lumotlaringizni qoldiring</h2>
        <p class="modal__text">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi</p>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Ismingiz" required />
          <input type="tel" v-model="phone" placeholder="+998 99-999-9999" required />
          <button class="modal__submit" type="submit">Bepul darsga yozilish</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const showModal = ref(true);
const name = ref('');
const phone = ref('');

const closeModal = () => {
  showModal.value = false;
};

const submitForm = () => {
  if (name.value && phone.value) {
    alert('Form submitted successfully!');
    closeModal();
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/media.scss';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    width: max-content;
    height: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);

    @include media(800) {
      padding: 20px;
      max-width: 450px;
    }

    @include media(700) {
      padding: 17px;
      max-width: 400px;
    }

    @include media(500) {
      padding: 15px;
      max-width: 100%;
      width: 80%;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 20px;

      @include media(800) {
        margin-bottom: 10px;
        font-size: 18px;
      }

      @include media(700) {
        margin-bottom: 9px;
        font-size: 16px;
      }

      @include media(500) {
        margin-bottom: 6px;
        font-size: 14px;
      }

      @include media(400) {
        margin-bottom: 4px;
        font-size: 12px;
      }
    }
  }

  &__submit {
    display: block;
    background: linear-gradient(135deg, #4db6ac, #80cbc4);
    color: white;
    border-radius: 50px;
    padding: 20px 0;
    width: 100%;
    font-size: 18px;
    font-family: "Gill Sans";
    cursor: pointer;

    @include media(800) {
      padding: 18px 0;
      width: 80%;
      margin: 0 auto;
      font-size: 17px;
    }

    @include media(700) {
      padding: 16px 0;
      width: 70%;
      font-size: 16px;
    }

    @include media(500) {
      padding: 12px 0;
      width: 60%;
      font-size: 14px;
    }

    @include media(400) {
      padding: 10px 0;
      font-size: 12px;
    }
  }

  &__close {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    background: #4db6ac;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    cursor: pointer;

    @include media(700) {
      width: 25px;
      height: 25px;
      font-size: 32px;
    }

    @include media(500) {
      width: 20px;
      height: 20px;
      font-size: 26px;
      top: 5px;
      right: 5px;
    }

    @include media(400) {
      width: 18px;
      height: 18px;
      font-size: 24px;
    }
  }

  &__title {
    font-size: 36px;
    font-family: 'Montserrat';
    font-weight: 500;
    margin-bottom: 20px;

    @include media(800) {
      font-size: 32px;
      margin-bottom: 18px;
    }

    @include media(700) {
      font-size: 28px;
      margin-bottom: 16px;
    }

    @include media(500) {
      font-size: 20px;
      margin-bottom: 10px;
    }

    @include media(400) {
      font-size: 18px;
    }
  }

  &__text {
    font-size: 20px;
    margin-bottom: 20px;

    @include media(800) {
      font-size: 18px;
      margin-bottom: 18px;
    }

    @include media(700) {
      font-size: 16px;
      margin-bottom: 16px;
    }

    @include media(600) {
      font-size: 15px;
      margin-bottom: 12px;
    }

    @include media(500) {
      font-size: 14px;
      margin-bottom: 10px;
    }

    @include media(400) {
      font-size: 12px;
    }

  }
}
</style>