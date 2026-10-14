import api from './axiosConfig'

export const searchServices = (q = '') =>
  api.get('/services', { params: { search: q } }).then((r) => r.data)

export const getServiceDetails = (id) =>
  api.get(`/services/${id}`).then((r) => r.data)
