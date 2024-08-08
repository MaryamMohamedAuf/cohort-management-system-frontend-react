import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password,
                token_name: 'login-token'
            });
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            console.log('Stored userId:', response.data.userId); 

            console.log('Admin logged in successfully:', response.data);
            setError('');
            
            navigate(`/cohorts/index`); 

            setSuccess(response.data.message || 'Logged in successfully');
            setError('');
        } catch (err) {
            setError(err.response.data.message || 'An error occurred');
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
             {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>} 
            <form onSubmit={handleLogin}>
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
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
