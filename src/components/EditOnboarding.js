import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const EditOnboarding = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        material_due: '',
        applicant_name: '', 
        company_name:'',
        cohort_tag: '' 
    });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  const navigate = useNavigate();
   const [cohortId, setCohortId] = useState(null);
    const [errors, setErrors] = useState('');
    useEffect(() => {
        axiosInstance.get(`onboardingSurvey/${id}`)
            .then(response => {
                console.log(response.data);
                setCohortId(response.data.onboardingSurvey.cohort_id);
            // Ensure that the fields exist in the response
            const onboardingSurvey = response.data.onboardingSurvey || {};
            const survey = response.data.survey || {};

                const material_due = response.data.onboardingSurvey.material_due || '';
                const formattedDate = typeof material_due === 'string' && material_due.split(' ')[0] || '';
               // const formattedDate = response.data.material_due.split(' ')[0];
                setFormData({
                    email: response.data.onboardingSurvey.email,
                    phone: response.data.onboardingSurvey.phone,
                    material_due: formattedDate,
                    applicant_name: response.data.survey.applicant_name,
                    cohort_tag: response.data.survey.cohort_tag ,
                    company_name: response.data.survey.company_name
                });
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching onboarding survey:', error);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    function getAuthToken() {
        return localStorage.getItem('authToken');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.put(`onboardingSurvey/${id}`, formData, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
                'Content-Type': 'application/json',
            },
        })
            .then(() => navigate(`/onboarding/${cohortId}`)) 
            .catch(error => {
                console.error('Error updating onboarding survey:', error);
                if (error.response && error.response.data) {
                    setErrors(error.response.data.message); 
                } else {
                    setErrors('An error occurred while updating the onboarding survey.');
                }
            });
    };

    if (loading) {
        return <div className="container mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Edit Onboarding Survey</h2>
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
                    <label htmlFor="email" className="form-label">Email:</label>
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
                    <label htmlFor="phone" className="form-label">Phone:</label>
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
                    <label htmlFor="material_due" className="form-label">Material Due:</label>
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
                <button type="submit" className="btn btn-secondary">Save</button>
            </form>
        </div>
    );
};

export default EditOnboarding;
