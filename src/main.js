import "./assets/sass/main.scss";
import "vue-fast-marquee/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Marquee } from "vue-fast-marquee";

const app = createApp(App);
app.use(Marquee);
app.mount("#app");
