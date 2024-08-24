import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; 
import { useParams } from 'react-router-dom';

const Round2Details = () => {
    const { id } = useParams();
    const [round2Details, setRound2Details] = useState(null);

    useEffect(() => {
        axiosInstance.get(`round2/${id}`)
            .then(response => {
                setRound2Details(response.data);
            })
            .catch(error => {
                console.error('Error fetching round 2 details:', error);
            });
    }, [id]);

    if (!round2Details) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2 className="my-4">Details for Round 2 ID: {id}</h2>
            <div className="card">
                <div className="card-body">
                    <div className="list-group">
                        <div className="list-group-item">
                            <strong>Phone:</strong> {round2Details.phone || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>One-Sentence Description:</strong> {round2Details.One_Sentence_Description || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Sector:</strong> {round2Details.sector || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Sector:</strong> {round2Details.other_sector || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Business Model:</strong> {round2Details.business_model || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Business Model:</strong> {round2Details.other_business_model || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Solution:</strong> {round2Details.solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Solution:</strong> {round2Details.other_solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Demo URL:</strong> {round2Details.demo_url || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Traction:</strong> {round2Details.traction || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Where Customer Find Solution:</strong> {round2Details.where_customer_find_solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Revenue Generated:</strong> {round2Details.revenue_generated || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Funding Received:</strong> {round2Details.funding_received || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Funding Type:</strong> {round2Details.other_funding_type || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Sources of Funding:</strong> {round2Details.sources_of_funding || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team Members:</strong> {round2Details.core_team_members || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Previous Startup Experience:</strong> {round2Details.previous_startup_experience ? 'Yes' : 'No'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team:</strong> {round2Details.core_team || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team Experience:</strong> {round2Details.core_team_experience || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Employees (Full Time/Part Time/Interns):</strong> {round2Details.employees_full_time_part_time_interns || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Positions to Fill:</strong> {round2Details.positions_to_fill || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Goals (Next 3-12 Months):</strong> {round2Details.goals_next_3_to_12_months || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Prex Program Expectations:</strong> {round2Details.prex_program_expectations || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Accomplish Within a Year:</strong> {round2Details.accomplish_within_year || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Submit Pitch Video URL:</strong> {round2Details.submit_pitch_video_url || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Covid-19 Resilience Impact:</strong> {round2Details.covid19_resilience_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Social Impact:</strong> {round2Details.social_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Covid-19 Impact:</strong> {round2Details.covid19_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Covid-19 Impact:</strong> {round2Details.other_covid19_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Critical Support Resource:</strong> {round2Details.critical_support_resource || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Best Support Resource:</strong> {round2Details.best_support_resource || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Holding Back Growth Reason:</strong> {round2Details.holding_back_growth_reason || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Comments:</strong> {round2Details.other_comments || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Race Ethnicity:</strong> {round2Details.race_ethnicity || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Gender:</strong> {round2Details.gender || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Team Identifiers:</strong> {round2Details.team_identifiers || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>If Other Team Identifiers:</strong> {round2Details.if_other_team_identifiers || 'N/A'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Round2Details;
