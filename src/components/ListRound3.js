import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 
import { Link } from 'react-router-dom';

const ListRound3 = () => {
    const { cohortId } = useParams();
    const [round3Data, setRound3Data] = useState([]);

    useEffect(() => {
        fetchRound3Data();
    }, [cohortId]);

    const fetchRound3Data = () => {
        axiosInstance.get(`round3/getByCohort/${cohortId}`)
            .then(response => {
                setRound3Data(response.data);
            })
            .catch(error => {
                console.error('Error fetching round 3 data:', error);
            });
    };

    const deleteRound3 = (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            axiosInstance.delete(`/round3/${id}`)
                .then(() => {
                    fetchRound3Data(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting entry:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">Round 3 for Cohort ID: {cohortId}</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company Name</th>
                            <th>Final Decision</th>
                            <th>Recorded Meeting Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {round3Data.map(item => (
                            <tr key={item.id}>
                                <td>{item.applicant?.first_name || 'N/A'}</td>
                                <td>{item.applicant?.last_name || 'N/A'}</td>
                                <td>{item.applicant?.email || 'N/A'}</td>
                                <td>{item.applicant?.company_name || 'N/A'}</td>
                                <td>{item.final_decision ? 'Accepted' : 'Rejected'}</td>
                                <td>{item.recorded_meeting_link || 'N/A'}</td>
                                <td>
                                    <Link to={`/round3/edit/${item.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                    <button onClick={() => deleteRound3(item.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                                    <Link to={`/applicant/${item.applicant_id}`} className="btn btn-secondary btn-sm">See applicant details</Link>
                                    <Link to={`/comments/create/${item.applicant_id}/${item.id}/round3`} className="btn btn-secondary btn-sm m-2">Provide feedback about this applicant in this round</Link>

                                    <Link to={`/comments/${item.applicant_id}`} className="btn btn-secondary btn-sm m-2">See all applicant comments in each round for each admin</Link>
                                 </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/round3/create" className="btn btn-secondary">Create New</Link>

                <Link to={`/cohorts/admin-options/${cohortId}`} className="btn btn-secondary m-5">See all Cohort details</Link>

            </div>
        </div>
    );
};

export default ListRound3;
