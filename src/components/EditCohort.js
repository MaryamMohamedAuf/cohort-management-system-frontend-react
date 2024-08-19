import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; 
import { useNavigate, useParams } from 'react-router-dom';

const EditCohort = () => {
  const [cohort, setCohort] = useState({
    number: '',
    start_date: '',
    end_date: ''
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.get(`cohorts/${id}`)
      .then(response => {
        setCohort(response.data);
        console.log('cohort:', response.data);

        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cohort:', error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.put(`cohorts/${id}`, cohort)
      .then(() => navigate('/cohorts/index'))
      .catch(error => console.error('Error updating cohort:', error));
  };

  const handleChange = (e) => {
    setCohort({ ...cohort, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Edit Cohort</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Number:</label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            value={cohort.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start_date" className="form-label">Start Date:</label>
          <input
            type="date"
            className="form-control"
            id="start_date"
            name="start_date"
            value={cohort.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="end_date" className="form-label">End Date:</label>
          <input
            type="date"
            className="form-control"
            id="end_date"
            name="end_date"
            value={cohort.end_date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">Save</button>
      </form>
    </div>
  );
};

export default EditCohort;
