<script setup>
// 导入侧边栏组件
import Aside from "@/components/Aside.vue";
import { ref } from "vue";

const whickStatus = ref(1);

const changeStatus = (status) => {
  whickStatus.value = status;
};
</script>

<template>
  <el-container>
    <Aside />
    <el-container>
      <div>
        <div class="contain">
          代码仓库
          <div class="status">
            <button @click="changeStatus(1)">最近访问</button>
            <button @click="changeStatus(2)">全部仓库</button>
            <button @click="changeStatus(3)">开源仓库</button>
          </div>
          <div class="before" v-if="whickStatus == 1"></div>
          <div class="all" v-if="whickStatus == 2"></div>
          <div class="open" v-if="whickStatus == 3"></div>
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.contain {
  padding: 1vw 1vw 0 1vw;
  .status {
    display: flex;
    margin-top: 3vw;
    width: 100vw;
    border-top: 0.1vw solid black;
    button {
      margin: 1vw;
      border: none;
      background-color: white;
    }
  }
}
.before {
  height: 50vw;
  width: 100vw;
  background-image: url("@/assets/status.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
