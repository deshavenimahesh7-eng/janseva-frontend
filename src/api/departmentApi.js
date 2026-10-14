import api from './axiosConfig'

export const getDepartments = () => api.get('/departments').then((r) => r.data)
export const getOffices = (mandal = '') =>
  api.get('/offices', { params: { mandal } }).then((r) => r.data)
