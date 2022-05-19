import { defineStore } from 'pinia'

export const usePlayStore = defineStore({
  id: 'play',
  state: () => ({
    hp: 100,
    chp: 90,
    atk: 0,
    bless: []
  }),
  getters: {},
  actions: {}
})
