// src/components/CreateAdmin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAdmin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', formData, {
            headers: {
               // 'X-CSRF-TOKEN': csrfToken,
               'Authorization': `Bearer db`,

                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('Admin created successfully:', response.data);
                navigate(`/admins/login`); 
            })
            .catch(error => {
                console.error('Error creating admin:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Create Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password_confirmation" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default CreateAdmin;
