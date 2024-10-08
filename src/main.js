import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入axios
import axios from "axios";
// 引入element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 全局注册axios
// 全局配置axios
axios.defaults.headers.post["Content-Type"] = "application/json";

const app = createApp(App).use(ElementPlus);

app.use(router).use(axios);

app.mount("#app");
