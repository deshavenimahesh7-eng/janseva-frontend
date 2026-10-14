import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8080/api',
})

// attach JWT token (after login is implemented)
api.interceptors.request.use((config) => {
  const saved = localStorage.getItem('janseva_user')
  if (saved) {
    const { token } = JSON.parse(saved)
    if (token) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
