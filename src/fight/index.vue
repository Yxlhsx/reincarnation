<script setup lang="ts">
import { Ref, ref } from 'vue'
import TimeFlow from '@/utils/TimeFlow'

const hp1: Ref = ref(100)
const hp2: Ref = ref(100)
let winState: number = 0

a(50, () => {
    hp2.value = hp2.value - 1
}, () => {
    if (winState != 0 || hp2.value <= 0) {
        winState = 1
        return true
    }
    return false
})

a(1500, () => {
    hp1.value = hp1.value - 2
}, () => {
    if (winState != 0 || hp1.value <= 0) {
        winState = -1
        return true
    }
    return false
})

function a(s: number, fun: Function, dFun: Function) {
    let timeOut = (s: number, fun: Function) => {
        setTimeout(() => {
            fun()
            if (dFun()) {
                console.log('终止')
            } else {
                timeOut(s, fun)
            }
        }, s)
    }
    timeOut(s, fun)

}

</script>

<template>
    <p>1:{{ hp1 }}</p>
    <p>2:{{ hp2 }}</p>
</template>

<style lang="less" scoped>
</style>
