// src/components/CrearUsuario.js

import React, { useState } from 'react';
import register from '../services/userService';

const CreateUser = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('cliente'); // Rol por defecto
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Llama al servicio para registrar el usuario
            const newUser = { nombre, email, password, rol };
            await register(newUser);

            setSuccess('Usuario creado exitosamente');
            setError('');
            // Limpiar campos después de crear el usuario
            setNombre('');
            setEmail('');
            setPassword('');
            setRol('cliente');
        } catch (err) {
            console.error('Error al crear usuario', err);
            setError('Hubo un problema al crear el usuario.');
            setSuccess('');
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default CreateUser;
