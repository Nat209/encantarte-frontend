import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/usuarios/login', {
                email,
                password
            });
            console.log(response.data)


            // Guardar token y datos del usuario en el localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.usuario));

            // Redireccionar según el rol
            if (response.data.usuario.rol === 'admin') {
                navigate('/admin'); // Ruta para admin
            } else if (response.data.usuario.rol === 'cliente') {
                navigate('/cliente'); // Ruta para cliente
            } else {
                navigate('/'); // Ruta por defecto si no se especifica el rol
            }
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
