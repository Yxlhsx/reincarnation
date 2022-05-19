<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMapStore } from '@/stores/map'
import { MapEnum } from '@/assets/map-template/MapEnum'

import Map from './components/Map.vue'

const route = useRoute()
const mapStore = useMapStore()

const initCoordinate: string = route.params.coordinate as string
mapStore.setCoordinate(initCoordinate)

mapStore.builder(MapEnum.TEST)

function changeCoordinate(x: number, y: number) {
  mapStore.setCoordinate(x + '-' + y)
}

</script>

<template>
  <p>到达了该世界</p>
  <router-link to="/">退出这个世界</router-link>
  <p>当前坐标：{{ mapStore.getCoordinateStr }}</p>
  <Map
    :currentMap="mapStore.currentMap"
    :currentCoordinate="mapStore.currentCoordinate"
    @select-coordinate="changeCoordinate"
  />
</template>

<style lang="less" scoped>
</style>
