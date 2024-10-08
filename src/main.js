import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入axios
import axios from "axios";
// 引入element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App).use(ElementPlus);

app.use(router).use(axios);

app.mount("#app");
