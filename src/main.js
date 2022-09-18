import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/tailwind.css";
import vSelect from 'vue-select'


createApp(App).use(store).use(router)
	.component('v-select', vSelect)
	.mount("#app")


