<template>
  <div class="container">
    <div class="contact">
      <div class="contact__box">
        <div class="contact__info">
          <h3 class="contact__title">{{ $t('contact.title') }}</h3>
          <p class="contact__text">
            {{ $t('contact.text') }}
          </p>
        </div>
        <form class="contact__form" @submit.prevent="submitForm">
          <input class="contact__input" type="text" v-model="formData.name" :placeholder="$t('contact.inputName')" required />
          <input class="contact__input" type="tel" v-model="formData.phone" :placeholder="$t('contact.inputPhone')" required />
          <button class="contact__btn" :disabled="loading">
            <Btn class="btn" :text="$t(loading ? 'contact.loading' : 'contact.submit')" type="submit" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Btn from "../UI/Btn.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const loading = ref(false)
const formData = ref({
  name: '',
  phone: ''
})

const submitForm = async () => {
  if (loading.value) return;
  loading.value = true;
  const token = '7355179055:AAEUm5_onfttMaMoejdjT3BI1zN7gDgsvNE';
  const chat_id = '-1002190363312';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: chat_id,
      text: `Name: ${formData.value.name}\nPhone: ${formData.value.phone}`
    });
    toast("Great", {
      "theme": "auto",
      "type": "success",
      "position": "bottom-right",
      "autoClose": 2000,
      "transition": "slide",
      "dangerouslyHTMLString": true
    })
    formData.value.name = '';
    formData.value.phone = '';
    loading.value = false;
  } catch (error) {
    console.error('Error:', error);
    toast("Error!", {
      "theme": "auto",
      "type": "error",
      "position": "top-left",
      "autoClose": 2000,
      "transition": "slide",
      "dangerouslyHTMLString": true
    })
    loading.value = false;
  }
}
</script>
