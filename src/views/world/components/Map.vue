<script setup lang="ts">
import MapCell from '@/model/MapCell'

defineProps<{ currentMap: Array<Array<MapCell>> }>()

</script>

<template>
    <div class="map">
        <div v-for="row in currentMap" class="row">
            <div
                v-for="cell in row"
                class="cell"
                :class="cell.id === 0 ? 'hide' : ''"
            >{{ cell.shortName }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.map {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 400px;
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
        }
    }
}
</style>
