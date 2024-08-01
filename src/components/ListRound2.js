import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const ListRound2 = () => {
    const { cohortId } = useParams();
    const [round2Data, setRound2Data] = useState([]);

    useEffect(() => {
        fetchRound2Data();
    }, [cohortId]);

    const fetchRound2Data = () => {
        axiosInstance.get(`http://localhost:8000/api/round2/getByCohort/${cohortId}`)
            .then(response => {
                setRound2Data(response.data);
            })
            .catch(error => {
                console.error('Error fetching round 2 data:', error);
            });
    };

    const deleteRound2 = (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            axiosInstance.delete(`http://localhost:8000/api/round2/${id}`)
                .then(() => {
                    fetchRound2Data(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting entry:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Round 2 for Cohort ID: {cohortId}</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company Name</th>
                            <th>Phone</th>
                            <th>One-Sentence Description</th>
                            <th>Sector</th>
                            <th>Business Model</th>
                            <th>Solution</th>
                            <th>Revenue Generated</th>
                            <th>Funding Received</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {round2Data.map(item => (
                            <tr key={item.id}>
                                 <td>{item.applicant?.first_name || 'N/A'}</td>
                                <td>{item.applicant?.last_name || 'N/A'}</td>
                                <td>{item.applicant?.email || 'N/A'}</td>
                                <td>{item.applicant?.company_name || 'N/A'}</td>
                                <td>{item.phone || 'N/A'}</td>
                                <td>{item.One_Sentence_Description || 'N/A'}</td>
                                <td>{item.sector || 'N/A'}</td>
                                <td>{item.business_model || 'N/A'}</td>
                                <td>{item.solution || 'N/A'}</td>
                                <td>{item.revenue_generated || 'N/A'}</td>
                                <td>{item.funding_received || 'N/A'}</td>
                                <td>
                                    <Link to={`/round2/edit/${item.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                    <button onClick={() => deleteRound2(item.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                                    <Link to={`/applicant/${item.applicant_id}`} className="btn btn-secondary btn-sm">See applicant details</Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to={`/cohorts/admin-options/${cohortId}`} className="btn btn-secondary m-5">See all Cohort details</Link>

            </div>
        </div>
    );
};

export default ListRound2;
