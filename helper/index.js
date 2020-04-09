import axios from 'axios'
const apiKey = "198b33dbfde64f7081c5ecf1d1d6f6f7"

const allowCors = 'https://cors-anywhere.herokuapp.com/'
const baseURL = `http://newsapi.org/v2/`
const query = (countryId, category) => `top-headlines?country=${countryId}&category=${category}&apiKey=${apiKey}`
const client = axios.create({ baseURL, timeout: 10000 })

export {
  query, client
}