import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; 
import { useNavigate , useParams} from 'react-router-dom';

const EditAdmin = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axiosInstance.get(`admin/${userId}`);
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    password : response.data.password,
                    password_confirmation : response.data.password_confirmation
                    // password: '',
                    // password_confirmation: '',
                });
            } catch (error) {
                setMessage('Error fetching user data');
            }
        };
    
        fetchAdminData();
    }, [userId]);
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put(`/admin/edit/${userId}`, formData);
            navigate('/cohorts/index');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setMessage('Validation failed: ' + JSON.stringify(error.response.data.errors));
            } else {
                setMessage('Error updating user information');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>Edit Admin Information</h2>
            {message && <p>{message}</p>}
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
                    <label htmlFor="password" className="form-label">Password (leave blank to keep current password):</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
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
                    />
                </div>
                <button type="submit" className="btn btn-secondary">Update</button>
            </form>
        </div>
    );
};

export default EditAdmin;
