import axios from 'axios'
const instantce = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
export default instantce