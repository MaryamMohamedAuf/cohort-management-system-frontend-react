import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance'; 
import { Link, useParams } from 'react-router-dom';
import './FilterApplicants.css'; // Optional for custom styles

const FilterApplicants = () => {
    const { cohortId } = useParams();

    const [filters, setFilters] = useState({});
    const [filterOptions, setFilterOptions] = useState({});
    const [applicants, setApplicants] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // Search term state

    // Fetch filter options when the component mounts
    useEffect(() => {
        const fetchFilterOptions = async () => {
            try {
                const response = await axiosInstance.get('filter-options');
                console.log('Filter Options:', response.data); // Debugging

                setFilterOptions(response.data.original.original);
            } catch (err) {
                setError('Failed to fetch filter options.');
                console.error(err);
            }
        };

        fetchFilterOptions();
    }, []);

    // Fetch applicants whenever filters change or initially load all applicants if no filters are selected
    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await axiosInstance.post('applicants/filter', filters, { ...filters, search: searchTerm });
                console.log('Applicants:', response.data); // Debugging

                // Ensure the response is an array
                setApplicants(Array.isArray(response.data) ? response.data : []);
            } catch (err) {
                setError('Failed to fetch applicants.');
                console.error(err);
            }
        };

        fetchApplicants();
    }, [filters,searchTerm ]);
//It updates the filters state by spreading the previous filters object ({ ...prev }) and adding/updating the specific filter with the new value.
//This ensures that the filters object is always up-to-date with the current selections.
    const handleFilterChange = (filter, value) => {
        setFilters(prev => ({ ...prev, [filter]: value }));
    };
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    return (
        <div className="filterable-applicants">
            <aside className="sidebar">
                <h2>Filters</h2>
                {error && <p>{error}</p>}
                {/* Render filter controls */}
                {Object.keys(filterOptions).map((filter) => (
                    <div key={filter}>
                        <label>{filter}</label>
                        <select onChange={(e) => handleFilterChange(filter, e.target.value)} defaultValue="">
                            <option value="">Select {filter}</option>
                            {Array.isArray(filterOptions[filter]) ? (
                                filterOptions[filter].map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
//If filterOptions[filter] is an array, it maps over the array to create <option> elements for each filter value.
//If the filter options are not available or not an array, it displays a single <option> indicating "No options available."
                                ))
                            ) : (
                                <option value="">No options available</option>
                            )}
                        </select>
                    </div>
                ))}
            </aside>
            <main className="main-content">
                <h2>Applicants</h2>
                {/* <input
    type="search"
    value={searchTerm}
    onChange={handleSearch}
    placeholder="Search applicants..."
  /> */}
                {/* Display a message if no applicants are found */}
                {applicants.length === 0 ? (
                    <p>No applicants found with this filter.</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Company Name</th>
                                <th>Company Website</th>
                                <th>Sector</th>
                                <th>Final Decision</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map(item => (
                                <tr key={item.id}>
                                    <td>{item.first_name || 'N/A'}</td>
                                    <td>{item.last_name || 'N/A'}</td>
                                    <td>{item.email || 'N/A'}</td>
                                    <td>{item.company_name || 'N/A'}</td>
                                    <td>{item.round1?.[0]?.company_website || 'N/A'}</td>
                                    <td>{item.round2?.[0]?.sector || 'N/A'}</td>
                                    <td>{item.round3?.[0]?.final_decision ?"Accepted":"Rejected"|| 'N/A'}</td>
                                    <td>
                                        <Link to={`/applicant/${item.id}`} className="btn btn-secondary btn-sm">See applicant details</Link>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
};

export default FilterApplicants;
