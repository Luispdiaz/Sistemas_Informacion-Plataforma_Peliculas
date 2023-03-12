import axios from 'axios'
import { useState } from 'react'

const Api_URL = 'https://api.themoviedb.org/3'
const Api_key = '6267293bc506e0c14e048c0532e66853'
const Image_Path = 'https://image.tmdb.org/t/p/original'


export const [movies,setMovies] = useState([])
const [buscarKey, setBuscarKey] = useState("")
const [movie, setMovie] = useState({ title: "Loading Movies" })

export const fetchMovies = async(buscarKey) =>{
    const type = buscarKey ? "search" : "discover"
    const {data: {results},
} = await axios.get(`${Api_URL}/${type}/movie`, {
    params: {
        api_key: Api_key,
        query: buscarKey,
    },
});
}

setMovies(results)
setMovie(results[0])  
