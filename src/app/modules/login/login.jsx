import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./login.css"


export default function Login() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        contraseña: '',
        confirmarContraseña: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await db.collection('usuarios').add(formData);
            console.log('Formulario enviado correctamente');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };


    const handleSingWithGoogle = async () => {
        await signInWithGoogle()
    }

    return (
        <React.Fragment>
            <div className='flex justify-center relative h-full'>
                <div className="flex flex-col items-center ml-44">
                    <h2 className="text-6xl font-bold mb-4 mt-32">Registrate</h2>
                    <p className="text-gris font-bold mb-10">Completa el formulario para completar tu cuenta</p>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="nombre" className="mb-2 font-medium text-gris">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                className="border border-gris500 py-2 px-3 rounded-lg focus:outline-none focus:border-getWellColor"
                                required
                                placeholder="Ingresa tu nombre completo"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="telefono" className="mb-2 font-medium text-gris">
                                Número de teléfono
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                pattern="[0-9]*"
                                title="Ingresa solo números"
                                className="w-full px-3 py-2 border border-gris500 rounded-md focus:outline-none focus:border-getWellColor"
                                required
                                placeholder="Ingresa tu numero de telefono celular"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="contraseña" className="mb-2 font-medium text-gris">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleInputChange}
                                className="border border-gris500 py-2 px-3 rounded-lg focus:outline-none focus:border-getWellColor"
                                required
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="confirmarContraseña" className="mb-2 font-medium text-gris">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmarContraseña"
                                name="confirmarContraseña"
                                value={formData.confirmarContraseña}
                                onChange={handleInputChange}
                                className="border border-gris500 py-2 px-3 rounded-lg focus:outline-none focus:border-getWellColor"
                                required
                                placeholder="Reingresa la contraseña"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="mb-2 font-medium text-gris">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-gris500 py-2 px-3 rounded-lg focus:outline-none focus:border-getWellColor"
                                required
                                placeholder="Ingresa tu correo electronico"
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <NavLink to={'/login'} type="submit" className="bg-getWellColor text-white font-bold mt-2 py-2 px-14 rounded-lg shadow-lg shadow-[#008b8b7e] hover:bg-[#008b8b7e]">
                                Registrarse
                            </NavLink>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center z-10 mt-28'><img src="src\assets\registro1.png" alt="Imagen de registro" /></div>
            </div>
        </React.Fragment>
    );
}
