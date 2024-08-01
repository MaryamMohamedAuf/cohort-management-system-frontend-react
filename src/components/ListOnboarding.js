import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 


const ListOnboarding = () => {
    const { cohortId } = useParams();

    const [onboardingSurveys, setOnboardingSurveys] = useState([]);

    useEffect(() => {
        fetchOnboardingSurveys();
    }, [cohortId]);

   
    const fetchOnboardingSurveys = () => {
        axiosInstance.get(`http://localhost:8000/api/onboardingSurvey/getByCohort/${cohortId}`)
            .then(response => {
                setOnboardingSurveys(response.data);
            })
            .catch(error => {
                console.error('Error fetching onboarding surveys:', error);
            });
    };

    const deleteOnboardingSurvey = (id) => {
        if (window.confirm('Are you sure you want to delete this onboarding survey?')) {
            axiosInstance.delete(`http://localhost:8000/api/onboardingSurvey/${id}`)
                .then(() => {
                    fetchOnboardingSurveys(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting onboarding survey:', error);
                });
        }
    };
    

    return (
        <div className="container">
            <h2 className="my-4">List of Onboarding Surveys</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Applicant Name</th>
                        <th>Cohort Tag</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Material Due</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {onboardingSurveys.map(onboardingSurvey => (
                        <tr key={onboardingSurvey.id}>
                            <td>{onboardingSurvey.survey.applicant_name}</td>
                            <td>{onboardingSurvey.survey.cohort_tag}</td>
                            <td>{onboardingSurvey.email}</td>
                            <td>{onboardingSurvey.phone}</td>
                            <td>{onboardingSurvey.material_due}</td>
                            <td>
                                <Link to={`/onboarding/edit/${onboardingSurvey.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                <button onClick={() => deleteOnboardingSurvey(onboardingSurvey.id)} className="btn btn-danger btn-sm">Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/cohorts/admin-options/${cohortId}`} className="btn btn-secondary m-5">See all Cohort details</Link>

        </div>
    );
};

export default ListOnboarding;
