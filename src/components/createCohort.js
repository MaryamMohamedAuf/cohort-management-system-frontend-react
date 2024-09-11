import React, { useState } from 'react';
import axiosInstance from './axiosInstance'; 

import { useNavigate } from 'react-router-dom';

const CreateCohort = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        number: '',
        start_date: '',
        end_date: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/cohorts', formData,)
            .then(response => {
                console.log('Cohort created successfully:', response.data);
                
                   // navigate(`/cohorts/index`); 
               
                })
            .catch(error => {
                console.error('Error creating cohort:', error);
            });

            const formEle = document.querySelector("form");
            const formDatab = new FormData(formEle);
            fetch(
"https://script.google.com/macros/s/AKfycby8VYPXtZOJNqao82U0jqFx6uxG5WjaPrQJCvlMy5vzxYY708IG8CbeB5l5qlomyZsk-Q/exec"              ,
              {
                method: "POST",
                body: formDatab,
                headers: {
                   // 'Accept': 'application/json',
                  }
              }
              
            )
              .then((res) => res.text())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
    };

    return (
        <div className="container mt-5">
            <h2>Create Cohort</h2>
            <form className="form" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="number"
                        name="number"
                        value={formData.number}
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
                        value={formData.start_date}
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
                        value={formData.end_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default CreateCohort;
