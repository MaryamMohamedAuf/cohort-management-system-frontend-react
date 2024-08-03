import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const ListFollowup = () => {        
    const { cohortId } = useParams();
const navigate = useNavigate();
    const [followupSurveys, setFollowupSurveys] = useState([]);

    useEffect(() => {
        fetchFollowupSurveys();
    }, [cohortId]);

    function getAuthToken() {
        return localStorage.getItem('authToken');
    }
    const fetchFollowupSurveys = () => {
        axios.get(`http://localhost:8000/api/followupSurvey/getByCohort/${cohortId}`, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`
            }
        })
            .then(response => {
                setFollowupSurveys(response.data);
            })
            .catch(error => {
            if (error.response && error.response.status === 401) {
                navigate('/');
            } else {
                console.error('Error fetching follow-up surveys:', error);
            }});
    };

    const deleteFollowupSurvey = (id) => {
        if (window.confirm('Are you sure you want to delete this follow-up survey?')) {
            axiosInstance.delete(`http://localhost:8000/api/followupSurvey/${id}`)
                .then(() => {
                    fetchFollowupSurveys(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting follow-up survey:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">List of Follow-up Surveys</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Applicant Name</th>
                        <th>company Name</th>
                        <th>Cohort Tag</th>
                        <th>Survey Tag</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {followupSurveys.map(followupSurvey => (
                        <tr key={followupSurvey.id}>
                            <td>{followupSurvey.survey.applicant_name}</td>
                            <td>{followupSurvey.survey.company_name}</td>
                            <td>{followupSurvey.survey.cohort_tag}</td>
                            <td>{followupSurvey.survey_tag}</td>
                            <td>{followupSurvey.date}</td>
                            <td>{followupSurvey.status}</td>
                            <td>
                                <Link to={`/followup/edit/${followupSurvey.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                <button onClick={() => deleteFollowupSurvey(followupSurvey.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/cohorts/admin-options/${cohortId}`} className="btn btn-secondary m-5">See all Cohort details</Link>

        </div>
    );
};

export default ListFollowup;
