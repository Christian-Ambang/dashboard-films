import { defineStore } from 'pinia'
import FilmsService from '@/services/Films.service.js'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    items: []
  }),
  getters: {
    getFavorite(state) {
      return state.items
    }
  },
  actions: {
    async getFavoriteAll() {
      const response = await FilmsService.detailFavoriteMoovie()
      this.items = response.items
    }
  }
})
