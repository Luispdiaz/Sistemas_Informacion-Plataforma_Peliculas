import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './home.css'

export default function Home() {
    const URL_image = 'https://image.tmdb.org/t/p/original'
    const Api_URL = 'https://api.themoviedb.org/3'
    const Api_key = '6267293bc506e0c14e048c0532e66853'
    const Image_Path = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([])
    const [buscarKey, setBuscarKey] = useState("")
    const [movie, setMovie] = useState({ title: "Loading Movies" })

    const fetchMovies = async (buscarKey) => {
        const type = buscarKey ? "search" : "discover"
        const { data: { results },
        } = await axios.get(`${Api_URL}/${type}/movie`, {
            params: {
                api_key: Api_key,
                query: buscarKey,
            },
        });
        setMovies(results)
        setMovie(results[0])
    }

    const SearchMovie = (e) => {
        e.preventDefault();
        fetchMovies(buscarKey)
    }

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${Api_URL}/movie/${id}`, {
            params: {
                api_key: Api_key,
            },

        });
        setMovie(data);
    }

    const selectMovie = async (movie) => {
        fetchMovie(movie.id);
        setMovie(movie);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <React.Fragment>
            <div className='m-3 flex justify-end'>
                <form onSubmit={SearchMovie}>
                    <input type="text" placeholder='search' onChange={(e) => setBuscarKey(e.target.value)} />
                    <button className='m-1.5 p-2 bg-blue500 text-white rounded-lg'>Buscar</button>
                </form>
            </div>

            <div className='h-full'>
                <div className='viewtrailer opacity-80' style={{ backgroundImage: `url("${Image_Path}${movie.backdrop_path}")`, }}>
                    <div className="font-black text-white text-3xl mb-5 flex flex-col items-center">
                        <h1 className=''>{movie.title}</h1>
                        {movie.overview ? (
                            <p className="">{movie.overview} {movie.budget} {movie.budget} {movie.original_language} {movie.status} { }</p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-4 gap-4' >
                    {movies.map((movie) => (
                        <div key={movie.id} className=' flex justify-center items-center' onClick={() => selectMovie(movie)}>
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
