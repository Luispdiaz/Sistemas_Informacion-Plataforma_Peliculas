import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    
    let navbar = [
        {
            title: 'Sobre nosotros',
            path: '#aboutUs',
            css: 'transition duration-500',
            isLoged: false,
            isAction: false
        },
        {
            title: 'Iniciar Sesion',
            path: '/login',
            css: 'border border-getWellColor hover:bg-[#008b8b56] p-2 rounded-lg font-medium text-getWellColor shadow-lg shadow-getWellColor',
            isLoged: false,
            isAction: true
        },
        {
            title: 'Registrarse',
            path: '/presignin',
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
            <h1>prueba</h1>
        </React.Fragment>
    )
}
