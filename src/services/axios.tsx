import axios, { AxiosRequestConfig } from 'axios'

export const config: AxiosRequestConfig = {
  //baseURL: 'http://18.231.116.149:443/api/',
  //baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:5000/',
  responseType: 'json',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
  timeout: 100000,
  withCredentials: false,
  maxRedirects: 5,
  validateStatus: (status: number) => status >= 200 && status < 300,
  transformResponse: (response) => {
    if (response !== null && response.error) {
      console.log(response.error);
    }
    let resp;
    try {
      resp = JSON.parse(response);
    } catch {
      resp = response;
    }
    return resp;
  },
};

export const login = async (user: any) => {
  config.url = 'login'
  config.method = 'post'
  config.data = user
  return axios.request<any>(config);
 
};

export const signup = async (user: any) => {
  config.url = 'register'
  config.method = 'post'
  config.data = user
  return axios.request<any>(config);
}

export const addPhoto = async (image: any) => {
  config.url = 'add-photo'
  config.method = 'post'
  let formData = new FormData()
  formData.set('foto', image)
  return axios.post('add-photo', formData)
}

export const loadUserResident = async (idResident: number) => {
  config.url = `/load/user/resident/${idResident}`
  config.method = 'get'
  config.params = idResident
  return axios.request<any>(config)
}

export const creatVisitantResident = async (user: any, idResident: number) => {
  config.url = `/creat/visitant/resident/${idResident}`
  config.method = 'post'
  config.params = idResident
  config.data = user
  return axios.request<any>(config);
}

export const updateUserResident = async (user: any, idUser: number) => {
  config.url = `/update/user/${idUser}`
  config.method = 'put'
  config.params = idUser
  config.data = user
  return axios.request<any>(config);
}

export const updateVisitant = async (user: any, idUser: number) => {
  config.url = `/update/user/visitant/${idUser}`
  config.method = 'put'
  config.params = idUser
  config.data = user
  return axios.request<any>(config);
}

export const deleteUserResident = async (idUser: number) => {
  config.url = `/delete/user/${idUser}`
  config.method = 'delete'
  config.params = idUser
  return axios.request<any>(config);
}