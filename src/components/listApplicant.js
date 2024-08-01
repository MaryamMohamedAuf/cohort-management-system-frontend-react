import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const ListApplicant = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/applicants/create')
            .then(response => {
                setApplicants(response.data);
            })
            .catch(error => {
                console.error('Error fetching applicants:', error);
            });
    }, []);

    return (
        <div>
            <h2>List of Applicants</h2>
            <ul>
                {applicants.map(applicants => (
                    <li key={applicants.id}>
                        {applicants.name} - {applicants.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListApplicant;
