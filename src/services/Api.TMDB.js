import axios from 'axios'

export const Api = () => {
  const instance = axios.create({
    timeout: 60000,
    baseURL: import.meta.env.VITE_APP_BASEURL
  })
  instance.defaults.headers.post['Content-Type'] = import.meta.env.VITE_APP_DEFAULT_CONTENT_TYPE
  instance.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_APP_TOKEN}`
  return instance
}

export default Api
