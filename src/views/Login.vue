<script setup>
import { ref, reactive } from "vue";
// 引入路由
import { useRouter } from "vue-router";
// 引入验证接口
import { getOrder } from "@/axios/login";

// 实例化路由
const router = useRouter();

// 获取多选框
const checkbox = ref("");

const clientID =
  "618c693f772f306e0b303d1c8d5cc2f6350f73db98f1700bcfd3fc80163e0aa0";
const clientSecret =
  "4ccdaa886bcd0faf0a2310b8de12ca416ed1edb5ded46449be2c0ece9de7d1ed";
const scope = "user_info projects";

const user = reactive({
  account: "",
  password: "",
});

const verify = (account, password) => {
  if (!user.account == "" && !user.password == "" && checkbox.value.checked) {
    getOrder(account, password, clientID, clientSecret, scope).then((res) => {
      const data = res;
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("tokenType", data.token_type);
      localStorage.setItem("expiresIn", data.expires_in.toString());
      localStorage.setItem("scope", data.scope);
      localStorage.setItem("isLogin", "1");
      alert("登陆成功");
      router.push("/home");
    });
  } else if (user.account === "" && user.password === "") {
    alert("账号或密码不能为空");
  } else if (!checkbox.value.checked) {
    alert("请阅读并同意服务协议和隐私条款");
  }
};
</script>

<template>
  <div style="display: flex">
    <div class="right"></div>
    <div class="left">
      <div>
        <h1>登录，即刻创造您的应用</h1>
        <div class="form">
          <input type="text" placeholder="账号" v-model="user.account" />
          <input type="password" placeholder="密码" v-model="user.password" />
        </div>
        <div>
          <input type="checkbox" ref="checkbox" />
          <span
            >我已阅读并同意<span class="word">服务协议</span>和<span
              class="word"
              >隐私条款</span
            ></span
          >
        </div>
        <div class="enter">
          <button @click="verify">登录</button>
          <div>
            还未注册? <router-link to="/register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.right {
  background-image: url("@/assets/login.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 30vw;
  height: 100vw;
}
.left {
  width: 50vw;
  text-align: center;
  .form {
    input {
      display: block;
      margin: 2vw 0 1vw 12vw;
      width: 50%;
      height: 2.5vw;
      border-radius: 0.5vw;
      padding-left: 1vw;
      opacity: 0.8;
    }
  }
  .enter {
    margin-top: 2vw;
    button {
      display: block;
      background-color: aqua;
      margin-left: 12vw;
      margin-bottom: 1vw;
      color: white;
      border: none;
      border-radius: 0.5vw;
      width: 50%;
      height: 2.5vw;
      cursor: pointer;
    }
  }
}
.word {
  color: blue;
  cursor: pointer;
}
</style>
