import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const EditFollowup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
   const [cohortId, setCohortId] = useState(null);
  const [formData, setFormData] = useState({
    survey_tag: '',
    date: '',
    status: '',
    applicant_name: '', 
         company_name:'',
         cohort_tag: '' 
  });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    axiosInstance.get(`http://localhost:8000/api/followupSurvey/${id}`)
      .then(response => {
        console.log(response.data);
        const data = response.data;       
        setCohortId(data.cohort_id);
        const date = data.date || '';
       // const formattedDate = response.data.date.split(' ')[0];
        const formattedDate = typeof date === 'string' && date.split(' ')[0] || '';
        setFormData({
           applicant_name: response.data.survey.applicant_name,
          cohort_tag: response.data.survey.cohort_tag,
          company_name: response.data.survey.company_name,
          survey_tag: response.data.survey_tag,
          date: formattedDate,
          status: response.data.status
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching follow-up survey:', error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   //const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
//   function getAuthToken() {
//     return localStorage.getItem('authToken');
// }
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.put(`http://localhost:8000/api/followupSurvey/${id}`, formData, {
      headers: {
       // 'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
      .then(() => navigate(`/followup/${cohortId}`))
      .catch(error => {
        console.error('Error updating follow-up survey:', error);
        if (error.response && error.response.data) {
          setErrors(error.response.data.message); 
        } else {
          setErrors('An error occurred while updating the follow-up survey.');
        }
      });
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Edit Follow-up Survey</h2>
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
        <button type="submit" className="btn btn-secondary">Save</button>
      </form>
    </div>
  );
};

export default EditFollowup;
