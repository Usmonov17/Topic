import "./assets/sass/main.scss";
import "vue-fast-marquee/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Marquee } from "vue-fast-marquee";
import { Axios } from "axios";
import { ToastifyContainer } from "vue3-toastify";
import i18n from "./i18n";

const app = createApp(App);
app.component("Marquee", Marquee);
app.config.globalProperties.$axios = Axios;
app.use(ToastifyContainer);
app.use(i18n);
app.mount("#app");
