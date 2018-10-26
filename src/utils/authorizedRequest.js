import axios from 'axios'

export const get = (url) => {
  const authToken = localStorage.getItem('authToken')
  return axios.get(url, {
    headers: {
      "Authorization": authToken
    }
  })
}

export const post = (url, data) => {
  const authToken = localStorage.getItem('authToken')
  return axios.post(url, data, {
    headers: {
      "Authorization": authToken
    }
  })
}