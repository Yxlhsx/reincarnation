<script setup lang="ts">
import MapCell from '@/model/MapCell'

defineProps<{ currentMap: MapCell[][], currentCoordinate: number[] }>()
const emit = defineEmits(['select-coordinate'])

function selectCoordinate(x: number, y: number) {
    emit('select-coordinate', x, y)
}

</script>

<template>
    <div class="map">
        <div v-for="(row, x) in currentMap" class="row">
            <div v-for="(cell, y) in row" class="cell" :class="{
                active: x === currentCoordinate[0] && y === currentCoordinate[1],
                hide: cell.id === '0'
            }" @click="selectCoordinate(x, y)">{{ cell.shortName }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.map {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 100vw;
    height: 400px;

    .row {
        display: flex;
        justify-content: space-around;

        .cell {
            width: 40px;
            text-align: center;
            border: 1px solid;

            &.hide {
                visibility: hidden;
            }

            &.active {
                background-color: red;
            }
        }
    }
}
</style>
