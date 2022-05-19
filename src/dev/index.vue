<script setup lang="ts">
import { Ref, ref } from 'vue';
import UpLoad from '@/components/Upload/index.vue'

const mapData: Ref = ref([['']])

function selectFile(v: string[][]) {
  console.log(v)
  mapData.value = v
}

function changeCell(y: number, x: number) {
  console.log(y, x)

}
</script>

<template>
  <h2>开发者模式</h2>
  <UpLoad @select-file="selectFile" />
  <div v-for="(y, i) in mapData" class="y">
    <div v-for="(x, _i) in y" class="x" @click="changeCell(i, _i)">{{ x }}</div>
  </div>
</template>

<style lang="less" scoped>
.y {
  display: flex;
  .x {
    width: 20px;
    height: 20px;
    border: solid 1px red;
    margin: 0 5px 5px 0;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #d1d1d1;
      transition: all 0.3s;
    }
  }
}
</style>
