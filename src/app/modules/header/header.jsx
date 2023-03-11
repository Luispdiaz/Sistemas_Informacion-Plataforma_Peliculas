import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    
    let navbar = [
        {
            title: 'Buscar pelicula',
            path: '/',
            css: 'transition duration-500',
            isLoged: false,
            isAction: false
        },
        {
            title: 'Iniciar Sesion',
            path: '/',
            css: 'border border-getWellColor hover:bg-[#008b8b56] p-2 rounded-lg font-medium text-getWellColor shadow-lg shadow-getWellColor',
            isLoged: false,
            isAction: true
        },
        {
            title: 'Registrarse',
            path: '/',
            css: 'bg-getWellColor hover:bg-[#008b8bca] p-2 rounded-lg text-white font-medium shadow-lg shadow-getWellColor',
            isLoged: false,
            isAction: true
        },
    ]

    let click = () => {
        // Agregar navigate del react router dom
        console.log("navega")
    }

    return (
        <React.Fragment>
            <div className='flex justify-between line pb-6 items-center'>
                <div className='basis-1/3 font-bold text-4xl mt-4 flex justify-center items-center'>
                    <img className='w-1/5' src="src\assets\undraw_netflix_q00o.png" alt="Image 1"/>
                    <h2>Movies</h2>
                </div>
                <div className='w-full flex justify-evenly'>
                    <NavLink className={'border p-2 rounded-lg bg-blue500 text-white'} to={'/'}>Iniciar Sesion</NavLink>
                    <NavLink className={'border p-2 rounded-lg bg-blue500 text-white '} to={'/'}>Registrate</NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}
