<template>
  <div>
    <b>文案折叠组件</b>
    <ul>
      <li>1.行数可控</li>
      <li>2.展开/收起操作区域可以自定义</li>
    </ul>
  </div>
  <div class="c-w-260px c-border-1px">
    <text-fold
      :line="2"
      :text="'TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件TEST 测试组件组件'"
    ></text-fold>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
