import React, { useState } from 'react';
import register from '../services/userService';
import '../css/Login.css'; // Asegúrate de crear este archivo CSS

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
            const newUser = { nombre, email, password, rol };
            await register(newUser);

            setSuccess('Usuario creado exitosamente');
            setError('');
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

    const token = localStorage.getItem('token');
    console.log('Token:', token); // Para verificar si el token está presente
    
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Crear Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
    
                    {/* Mostrar el campo de rol solo si hay un token en el localStorage */}
                    {token && (
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label">Rol:</label>
                            <select
                                id="rol"
                                className="form-select"
                                value={rol}
                                onChange={(e) => setRol(e.target.value)}
                            >
                                <option value="cliente">Cliente</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    )}
                    
                    <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                </form>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
            </div>
        </div>
    );
    
};

export default CreateUser;
