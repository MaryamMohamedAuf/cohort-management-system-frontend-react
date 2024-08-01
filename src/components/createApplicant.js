import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const CreateApplicant = () => {
    const [formData, setFormData] = useState({
        name: '',
        phonenumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://db.infinityfreeapp.com/api/applicants/create', formData,{
        headers: {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json', // adjust content type if necessary

        }
    })
            .then(response => {
                console.log('Applicant created successfully:', response.data);
                // Optionally, redirect or show a success message
            })
            .catch(error => {
                console.error('Error creating Applicant:', error);
            });
    };

    return (
        <div>
            <h2>Create Applicants</h2>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="test"
                        id="phone"
                        name="phone"
                        value={formData.number}
                        onChange={handleChange}
                        required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateApplicant;
