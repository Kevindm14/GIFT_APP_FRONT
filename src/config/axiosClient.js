import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://livegift-app.herokuapp.com/'
})

export default axiosClient
