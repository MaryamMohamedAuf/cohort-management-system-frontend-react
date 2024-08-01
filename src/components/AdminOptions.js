import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AdminOptions = () => {
    const { id } = useParams();
    console.log('Cohort ID in AdminOptions:', id);

    return (
        <div className="container">
            <h2 className="my-4">Admin Options for Cohort {id}</h2>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Link to={`/followup/${id}`} className="btn btn-outline-primary w-100">Follow-Up Surveys</Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to={`/onboarding/${id}`} className="btn btn-outline-secondary w-100">Onboarding Surveys</Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to={`/round1/${id}`} className="btn btn-outline-info w-100">Round 1</Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to={`/round2/${id}`} className="btn btn-outline-warning w-100">Round 2</Link>
                </div>
                <div className="col-md-4 mb-3">
                    <Link to={`/round3/${id}`} className="btn btn-outline-danger w-100">Round 3</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminOptions;
