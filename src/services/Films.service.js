import Api from './Api.TMDB.js'
export default {
  async getHomeMoovie(options) {
    let moovie = null
    try {
      moovie = await Api().get(
        '/search/movie',
        { params: options },
        { responseType: 'json', contentType: 'application/json' }
      )

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  },
  async getHomeMoovieNow(options) {
    let moovie = null
    try {
      moovie = await Api().get(
        '/discover/movie',
        { params: options },
        { responseType: 'json', contentType: 'application/json' }
      )

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  },
  async getHomeMoovieByCategory(options) {
    let moovie = null
    try {
      moovie = await Api().get(
        '/discover/movie',
        { params: options },
        { responseType: 'json', contentType: 'application/json' }
      )

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  },
  async addFavoriteMoovie(options) {
    let moovie = null
    try {
      moovie = await Api().post(
        `/list/8269658/add_item?session_id=${import.meta.env.VITE_APP_SESSION_ID}`,
        options,
        {
          responseType: 'json',
          contentType: 'application/json'
        }
      )

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  },
  async removeFavoriteMoovie(options) {
    let moovie = null
    try {
      moovie = await Api().post(
        `/list/8269658/remove_item?session_id=${import.meta.env.VITE_APP_SESSION_ID}`,
        options,
        {
          responseType: 'json',
          contentType: 'application/json'
        }
      )

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  },
  async detailFavoriteMoovie() {
    let moovie = null
    try {
      moovie = await Api().get('/list/8269658', {
        responseType: 'json',
        contentType: 'application/json'
      })

      return moovie.data
    } catch (error) {
      console.log(error)
    }
  }
}
