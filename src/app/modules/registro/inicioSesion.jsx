import React, { useState } from 'react';

export default function InicioSesion() {
    
    const [formData, setFormData] = useState({
        email: '',
        contraseña: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí se puede enviar el formulario a través de una API o por donde lo vayamos a enviar. Mientras solo nos imprime el formulario en consola.
        console.log(formData);
    };

    return (
        <React.Fragment>
            <div className='flex justify-center mt-48'>
                <div className='border border-slate100 bg-slate100 px-32 z-10 my-12 relative'>
                    <h2 className="text-6xl font-bold mt-6">Iniciar sesión</h2>
                    <p className="text-gris font-bold mb-10 mt-4">Introduce tus datos para Iniciar sesión.</p>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="mb-2 font-medium text-gris">
                                Correo electronico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-gris500 py-2 px-3 rounded-lg focus:outline-none  focus:border-getWellColor"
                                required
                                placeholder="Ingresa tu correo electronico"
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
                        <div className='flex justify-center'>
                            <button type="submit" className="bg-getWellColor text-white font-bold mt-6 py-2 px-14 rounded-lg shadow-lg shadow-[#008b8b7e] hover:bg-[#008b8b7e]">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                    <h2 className='flex justify-center my-4'>¿No tienes cuenta? Regístrate</h2>
                </div>
                <div className='w-1/4 flex justify-center items-center ml-16'><img src='src\assets\undraw_two_factor_authentication_namy.png' alt="Imagen de fondo." /></div>
            </div>
        </React.Fragment>
    )
}
