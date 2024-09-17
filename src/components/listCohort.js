import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

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
                const response = await axiosInstance.get('cohorts');
                setCohorts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCohorts();
    }, []);

    
    const fetchCohorts = () => {
        axiosInstance.get('/cohorts')
            .then(response => {
                setCohorts(response.data);                

            })
            .catch(error => {
                console.error('Error fetching cohorts:', error);
                console.error('Unauthorized access or account deleted. Redirecting to login...');
                localStorage.removeItem('authToken'); // remove the token                
                window.location.href = '/'; // Redirect to the login page
            });
    };

    const deleteCohort = (id) => {
        if (window.confirm('Are you sure you want to delete this cohort?')) {
            axiosInstance.delete(`cohorts/${id}`)
                .then(() => {
                    fetchCohorts(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting cohort:', error);
                });
        }
    };
    const userId = localStorage.getItem('userId');    
    console.log('Retrieved userId:', userId);
    const deleteAdmin = (id) => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            axiosInstance.delete(`/admin/${id}`)
                .then(() => {
                    fetchCohorts(); // Refresh the list after deletion
                })
                .catch(error => {
                    console.error('Error deleting cohort:', error);
                });
        }
    };
    return (
        <div className="container mt-3">
             <Link to="/cohorts/create" className="btn btn-secondary">Create New Cohort</Link>
            {/* <Link to="/admins/register" className="btn btn-secondary m-2">Add New Admin</Link> */}
            <Link to={`/admin/edit/${userId}`} className="btn btn-secondary m-2">Edit Your Info</Link>
            <Link to={`/applicants/filter`} className="btn btn-secondary m-2">query applicants</Link>

            <button onClick={() => deleteAdmin(userId)} className="btn btn-danger btn-sm">delete your account?</button>

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
           

        </div>
    );
};

export default ListCohort;
