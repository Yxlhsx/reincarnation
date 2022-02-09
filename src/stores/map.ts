import { defineStore } from 'pinia'

import mapTemplateResource from '@/assets/map-template'
import mapBlockResource from '@/assets/map-block'
import MapCell from '@/model/MapCell'
import Log from '@/utils/Log'

export const useMapStore = defineStore({
  id: 'map',
  state: () => ({
    currentMap: new Array<Array<MapCell>>(),
    currentCoordinate: '0-0'
  }),
  getters: {},
  actions: {
    async builder(mapName: string) {
      const mapTemplate: string[][] = mapTemplateResource[mapName]

      const mapBlock: object = mapBlockResource
      if (mapTemplate) {
        Log.success(`【${mapName}】地图加载成功！`)
      } else {
        Log.fail(`【${mapName}】地图加载失败，该地图不存在！`)
      }

      this.currentMap = await renderMap(mapTemplate, mapBlock)
      console.log(1)
    },
    setCoordinate(coordinate: string): string {
      this.currentCoordinate = coordinate
      return coordinate
    }
  }
})

/**
 * 渲染地图
 * @param mapTemplate 地图模板
 * @param mapBlock 地图块数据
 * @returns 地图
 */
function renderMap(mapTemplate: string[][], mapBlock: object): Array<Array<MapCell>> {
  console.log('开始渲染地图。。。')
  let map: Array<Array<MapCell>>
  map = mapTemplate.map((i: Array<string>) => {
    return i.map((j: string) => Object.assign({ id: j }, mapBlock[j]))
  })
  console.log('%c地图渲染成功！', 'color:green')
  return map
}
