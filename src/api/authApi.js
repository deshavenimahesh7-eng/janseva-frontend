import api from './axiosConfig'

// TODO: connect when backend login is ready
export const registerUser = (data) => api.post('/auth/register', data).then((r) => r.data)
export const loginUser = (data) => api.post('/auth/login', data).then((r) => r.data)
