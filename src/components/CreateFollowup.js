import React, { useState } from 'react';
import axiosInstance from './axiosInstance'; 

const CreateFollowup = () => {
    // Correct placement of useState hooks inside the component
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        survey_tag: '',
        date: '',
        status: '',
        applicant_name: '', 
        company_name: '',
        cohort_tag: ''
    });
    const [errors, setErrors] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('followupSurvey/create', formData)
        .then(response => {
            console.log('Follow-up survey created successfully:', response.data);
            setSuccessMessage('Data saved successfully. We will get in touch with you soon.');
        })
        .catch(error => {
            console.error('Error creating follow-up survey:', error);
            setErrorMessage('There was an error saving the data. Please make sure all required fields are filled.');

            if (error.response && error.response.data) {
                setErrors(error.response.data.message); // Show validation errors
            } else {
                setErrors('An error occurred while creating the follow-up survey.');
            }
        });
    };

    return (
        <div className="container mt-5">
            <h2>Follow-up Survey</h2>
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
                    <label htmlFor="cohort_tag" className="form-label">Cohort Tag:</label>
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
                    <label htmlFor="survey_tag" className="form-label">Survey Tag:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="survey_tag"
                        name="survey_tag"
                        value={formData.survey_tag}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status:</label>
                    <select
                        className="form-control"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                </div>
                {errors && <div className="alert alert-danger">{errors}</div>}
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default CreateFollowup;
