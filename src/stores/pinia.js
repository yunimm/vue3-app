import { defineStore } from 'pinia'


export const PiniaStore = defineStore('main',{  //導出 pinia倉庫
  state:() => { //相當於全局的 data()
      return {
          name:'預設名字',
          email:'預設mail-999@mail.com',
          nickname:'預設暱稱'
      }
  },
  //相當於全局的computed
  getters:{},  
  //相當於全局methods
  actions:{

  }   
})
