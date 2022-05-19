<script setup lang="ts">
import { usePlayStore } from '@/stores/play'

const mapStore = usePlayStore()
</script>

<template>
  <p>状态栏</p>
  <p>{{mapStore.chp+'/'+mapStore.hp}}</p>
  <router-view />
</template>

<style scoped>
</style>
