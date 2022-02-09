<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const equipment = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
  ? 'app'
  : 'pc'
</script>

<template>
  <!-- <p v-if="equipment !== 'app'">请用移动端打开</p>
  <router-view v-else />-->

  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
