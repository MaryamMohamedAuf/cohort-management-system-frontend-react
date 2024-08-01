import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListCohort = () => {
    const [cohorts, setCohorts] = useState([]);
    const [loading, setLoading] = useState(true);
    
const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCohorts = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    throw new Error('No token found');
                }
                const response = await axios.get('http://localhost:8000/api/cohorts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCohorts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCohorts();
    }, []);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/cohorts')
    //         .then(response => {
    //             setCohorts(response.data)
                
    //         })
    //         .catch(error => {
    //             console.error('Error fetching cohorts:', error);
    //         });
    // }, []);

    function getAuthToken() {
        return localStorage.getItem('authToken');
    }
    const fetchCohorts = () => {
        axios.get('http://localhost:8000/api/cohorts', {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`
            }
        })
            .then(response => {
                setCohorts(response.data);
            })
            .catch(error => {
                console.error('Error fetching cohorts:', error);
            });
    };

    const deleteCohort = (id) => {
        if (window.confirm('Are you sure you want to delete this cohort?')) {
            axios.delete(`http://localhost:8000/api/cohorts/${id}`)
                .then(() => {
                    fetchCohorts(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting cohort:', error);
                });
        }
    };

    return (
        <div className="container">
            <h2 className="my-4">List of Cohorts</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cohorts.map(cohort => (
                        <tr key={cohort.id}>
                            <td>{cohort.number}</td>
                            <td>{cohort.start_date}</td>
                            <td>{cohort.end_date}</td>
                            <td>
                                <Link to={`/cohorts/edit/${cohort.id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                <Link to={`/cohorts/admin-options/${cohort.id}`} className="btn btn-secondary btn-sm me-2">See Details</Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/cohorts/create" className="btn btn-secondary">Create New</Link>
        </div>
    );
};

export default ListCohort;
