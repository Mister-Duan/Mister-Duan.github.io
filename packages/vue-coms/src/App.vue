<template>
  <div class="c-p-12px c-text-center c-flex c-flex-col c-items-center">
    <div class="c-mb-10px">
      <b>文案折叠组件</b>
      <ul class="c-text-left">
        <li>1.限制行数可配置</li>
        <li>2.展开/收起操作区域交互样式可自定义</li>
      </ul>
    </div>
    <b>案例一：基本用法</b>
    <div class="c-w-260px c-border-1px c-mb-10px">
      <TextFold
        class="c-text-left"
        :line="2"
        :text="'TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件组件'"
      ></TextFold>
    </div>
    <b>案例二：自定义插槽位置</b>
    <div class="c-w-260px c-border-1px">
      <TextFold class="c-text-left" v-model="fold" :line="2">
        TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST
        测试组件组件 444
        <template #toggle="{ foldState }">
          <div class="c-w-10px c-h-24px c-from-transparent c-to-white c-bg-gradient-to-r"></div>
          <div class="c-bg-white">自定义{{ foldState }}</div>
        </template>
      </TextFold>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const fold = ref(false)
</script>

<style scoped></style>
