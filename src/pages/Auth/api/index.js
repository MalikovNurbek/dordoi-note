import axios from 'axios'

const getUsers = () => {
  return axios.get('users')
}
const sitSingleUser = () => {
  return axios.get('signleuser')
}
