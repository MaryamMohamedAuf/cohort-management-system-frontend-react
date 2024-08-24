import React, { useState } from 'react';
import axiosInstance from './axiosInstance'; 

const CreateOnboarding = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        material_due: '',
        applicant_name: '', 
         company_name:'',
         cohort_tag: '' 
       
    });

    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('onboardingSurvey/create', formData)
            .then(response => {
                console.log('Onboarding survey created successfully:', response.data);         
            })
            .catch(error => {
                console.error('Error creating onboarding survey:', error);
                if (error.response && error.response.data) {
                    setErrors(error.response.data.message); // Show validation errors
                } else {
                    setErrors('An error occurred while creating the onboarding survey.');
                }
            });
    };

    return (
        <div className="container mt-5">
            <h2>Create Onboarding Survey</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="applicant_name" className="form-label">Applicant Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="applicant_name"
                        name="applicant_name"
                        value={formData.applicant_name}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <div className="mb-3">
                    <label htmlFor="cohort_tag" className="form-label">cohort tag:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cohort_tag"
                        name="cohort_tag"
                        value={formData.cohort_tag}
                        onChange={handleChange}
                        required
                    />
                </div> 
                 <div className="mb-3">
                    <label htmlFor="company_name" className="form-label">Company Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                    />
                </div> 

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">email </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">phone :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="material_due" className="form-label">material due :</label>
                    <input
                        type="date"
                        className="form-control"
                        id="material_due"
                        name="material_due"
                        value={formData.material_due}
                        onChange={handleChange}
                        required
                    />
                </div>
                {errors && <div className="alert alert-danger">{errors}</div>}
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default CreateOnboarding;
