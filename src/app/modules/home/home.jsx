import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
const URL_image = 'https://image.tmdb.org/t/p/original'    
const Api_URL = 'https://api.themoviedb.org/3'
const Api_key = '6267293bc506e0c14e048c0532e66853'
const Image_Path = 'https://image.tmdb.org/t/p/original'
const [movies,setMovies] = useState([])
const [buscarKey, setBuscarKey] = useState("")
const [movie, setMovie] = useState({ title: "Loading Movies" })

const fetchMovies = async(buscarKey) =>{
    const type = buscarKey ? "search" : "discover"
    const {data: {results},
} = await axios.get(`${Api_URL}/${type}/movie`, {
    params: {
        api_key: Api_key,
        query: buscarKey,
    },
});
setMovies(results)
setMovie(results[0]) 
}


    useEffect(()=>{
    fetchMovies()
})

    return (
        <React.Fragment>
            <div>
                <div className='grid grid-cols-4 gap-4 '>
                {movies.map((movie) => (
                    <div key={movie.id} className=' flex justify-center items-center'>
                        <div>
                            <img src={`${URL_image + movie.poster_path}`} />
                            <h4 className='text-center'>{movie.title}</h4>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            
        </React.Fragment>
    )
}
