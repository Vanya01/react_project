import axios from "axios";

let instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTU2OTk5NTEwOWE1N2EyZThjMzViMzU5MjNjNzY5YiIsInN1YiI6IjYxMmY0NzlhMmNlZmMyMDA0M2EzZGI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OoAhYiLeYTkFJyn9p8zAv5qALUxKmK45Ctc4eD7ahJI'
}
})

const discoverMovie = async ()=> await instance.get('/discover/movie')

export {discoverMovie}