/**
 * 地图单元格类
 */
export default interface MapCell {
  /**
   * 序号
   */
  id: number

  /**
   * 名称
   */
  name: string

  /**
   * 简称
   */
  shortName: string

  /**
   * 描述
   */
  desc: string

  /**
   * 进入触发方法
   */
  enterFun(): void

  /**
   * 离开触发方法
   */
  leaveFun(): void
}
