import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./plugins/validation";

import "./assets/main.css";
import "./assets/custom.css";

const app = createApp(App);

app.use(createPinia());
app.use(VeeValidatePlugin);
app.use(router);

app.mount("#app");
