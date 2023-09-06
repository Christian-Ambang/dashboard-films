import { defineStore } from 'pinia'
import FilmsService from '@/services/Films.service.js'

export const useTabStore = defineStore('tab', {
  state: () => ({
    openTab: 1,
    contentTab: {}
  }),
  getters: {
    getOpenTab(state) {
      return state.openTab
    },
    getContentTab(state) {
      return state.contentTab
    }
  },
  actions: {
    async toggleTabs(tabNumber) {
      this.openTab = tabNumber

      const tabs = {
        1: 28, //Action
        2: 16, //Animation,
        3: 12, //Adventure'
        4: 35, //Comedy,
        5: 99 //'Documentary'
      }

      let options = {
        with_genres: tabs[tabNumber]
      }
      const response = await FilmsService.getHomeMoovieByCategory(options)

      this.contentTab = response.results
    }
  }
})
