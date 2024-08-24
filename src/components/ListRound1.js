import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const ListRound1 = () => {
    const { cohortId } = useParams();
    const [round1Data, setRound1Data] = useState([]);

    useEffect(() => {
        fetchRound1Data();
    }, [cohortId]);

    const fetchRound1Data = () => {
        axiosInstance.get(`round1/getByCohort/${cohortId}`)
            .then(response => {
                setRound1Data(response.data);
            })
            .catch(error => {
                console.error('Error fetching round 1 data:', error);
            });
    };

    const deleteRound1 = (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            axiosInstance.delete(`round1/${id}`)
                .then(() => {
                    fetchRound1Data(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting entry:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Round 1 for Cohort ID: {cohortId}</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company Name</th>
                            <th>Company Website</th>
                            <th>Company Zip Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {round1Data.map(item => (
                            <tr key={item.id}>
                                <td>{item.applicant?.first_name || 'N/A'}</td>
                                <td>{item.applicant?.last_name || 'N/A'}</td>
                                <td>{item.applicant?.email || 'N/A'}</td>
                                <td>{item.applicant?.company_name || 'N/A'}</td>
                                <td>{item.company_website || 'N/A'}</td>
                                <td>{item.company_zip_code || 'N/A'}</td>
                                <td>
                                    <Link to={`/round1/edit/${item.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                    <button onClick={() => deleteRound1(item.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                                    <Link to={`/applicant/${item.applicant_id}`} className="btn btn-secondary btn-sm">See applicant details</Link>
                                    <Link to={`/comments/create/${item.applicant_id}/${item.id}/round1`} className="btn btn-secondary btn-sm m-2">Provide feedback about this applicant in this round</Link>

                                    <Link to={`/comments/${item.applicant_id}`} className="btn btn-secondary btn-sm m-2">See all applicant comments in each round for each admin</Link>
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

export default ListRound1;
