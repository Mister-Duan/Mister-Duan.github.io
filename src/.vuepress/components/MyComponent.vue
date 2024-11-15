<template>
    <div class="my-component">
      <h1>这是一个自定义组件</h1>
      <p>{{ message }}</p>
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        message: 'Hello from MyComponent!'
      }
    }
  }
  </script>
   
  <style>
  .my-component h1 {
    color: #34495e;
  }
  </style>