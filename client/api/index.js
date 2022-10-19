import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000'})

export const loginUser = (formData) => api.post('/auth/login', formData)
export const registerUser = (formData) => api.post('/auth/register', formData)

