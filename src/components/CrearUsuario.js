// src/components/CrearUsuario.js

import React, { useState } from 'react';
import axios from 'axios';

const CrearUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('cliente'); // Rol por defecto
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/usuarios/registro', {
                nombre,
                email,
                password,
                rol
            });
            setMensaje(`Usuario creado con éxito: ${response.data.nombre}`);
            setNombre('');
            setEmail('');
            setPassword('');
            setRol('cliente');
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            setMensaje('Error al crear el usuario. Intenta nuevamente.');
        }
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rol:</label>
                    <select value={rol} onChange={(e) => setRol(e.target.value)}>
                        <option value="cliente">Cliente</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default CrearUsuario;
