<script setup lang="ts">
import UpLoad from '@/components/Upload/index.vue'

function selectFile(v: string[][]) {
  console.log(v)
}
</script>

<template>
  <h2>开发者模式</h2>
  <UpLoad @select-file="selectFile" />
</template>

<style scoped></style>
