import { defineStore } from 'pinia'

export const PiniaStore = defineStore('main',{  //導出 pinia倉庫
  state:() => { //相當於全局的 data()
      return {
          name:'張三',
          age:18
      }
  },
  getters:{},  //相當於全局的computed
  actions:{}   //相當於全局methods
})
