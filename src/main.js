import "./assets/sass/main.scss";
import "vue-fast-marquee/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Marquee } from "vue-fast-marquee";
import { Axios } from "axios";
import { ToastifyContainer } from "vue3-toastify";
import CoreuiVue from "@coreui/vue";

const app = createApp(App);
app.component("Marquee", Marquee);
app.config.globalProperties.$axios = Axios;
app.use(ToastifyContainer);
app.use(CoreuiVue);
app.mount("#app");
