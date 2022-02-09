<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMapStore } from '@/stores/map'
import { MapEnum } from '@/assets/map-template/MapEnum'

import Map from './components/Map.vue'

const route = useRoute()
const mapStore = useMapStore()

console.log(route.path)

mapStore.builder(MapEnum.TEST)
</script>

<template>
  <p>到达了该世界</p>
  <router-link to="/">退出这个世界</router-link>
  <p>当前坐标：{{ mapStore.currentCoordinate }}</p>
  <Map :currentMap="mapStore.currentMap" />
</template>

<style lang="less" scoped>
</style>
