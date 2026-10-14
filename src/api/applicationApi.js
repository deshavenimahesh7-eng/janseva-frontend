import api from './axiosConfig'

// TODO: connect when backend applications are ready
export const applyForService = (data) => api.post('/applications', data).then((r) => r.data)
export const getMyApplications = () => api.get('/applications/my').then((r) => r.data)
export const getApplicationStatus = (id) =>
  api.get(`/applications/${id}/status`).then((r) => r.data)
