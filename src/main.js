import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router).use(ElementPlus);

app.mount("#app");
