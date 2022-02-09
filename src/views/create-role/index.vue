<script setup lang="ts">
import { useRouter } from 'vue-router'
import { MapEnum } from '@/assets/map-template/MapEnum'

const router = useRouter()

function to() {
  router.push(`/world/${MapEnum.TEST}/1-1`)
}
</script>

<template>
  <p>创建角色</p>
  <p @click="to">进入世界</p>
</template>

<style scoped></style>
