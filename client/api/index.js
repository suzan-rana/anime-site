import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000'})

export const loginUser = () => api.post('/login', formData)
export const registerUser = (formData) => api.post('/auth/register', formData)

