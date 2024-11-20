<template>
  <div
    class="flex flex-col leading-18px items-center justify-center pt-12px text-center"
  >
    <div class="text-14px font-600 mt-11px">{{ info.time }}</div>
    <div class="w-8px h-8px bg-blue-400 rounded-6/12"></div>
    <div class="text-14px font-400 text-gray-800 mt-1px">{{ info.event }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style lang="less"></style>
