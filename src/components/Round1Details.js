import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Round1Details = () => {
    const { id } = useParams();
    const [round1Details, setRound1Details] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/round1/${id}`)
            .then(response => {
                setRound1Details(response.data);
            })
            .catch(error => {
                console.error('Error fetching round 1 details:', error);
            });
    }, [id]);

    if (!round1Details) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2 className="my-4">Details for Round 1 ID: {id}</h2>
            <div className="card">
                <div className="card-body">
                    <div className="list-group">
                        <div className="list-group-item">
                            <strong>First Name:</strong> {round1Details.applicant?.first_name || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Last Name:</strong> {round1Details.applicant?.last_name || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Email:</strong> {round1Details.applicant?.email || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Name:</strong> {round1Details.applicant?.company_name || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Website:</strong> {round1Details.company_website || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Zip Code:</strong> {round1Details.company_zip_code || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Year Company Founded:</strong> {round1Details.year_company_founded || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Number of Founding Team Members:</strong> {round1Details.number_of_founding_team_members || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Current Product Stage:</strong> {round1Details.current_product_stage || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Current Business Stage:</strong> {round1Details.current_business_stage || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Formed:</strong> {round1Details.company_formed || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>One Sentence Description:</strong> {round1Details.one_sentence_description || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Team Location:</strong> {round1Details.company_team_location || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>If You Selected Other Please Specify:</strong> {round1Details.if_you_selected_other_please_specify || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Short Problem Description:</strong> {round1Details.short_problem_description || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Detailed Description:</strong> {round1Details.detailed_description || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Applied to Accelerator?</strong> {round1Details.applied_to_accelerator ? 'Yes' : 'No'}
                        </div>
                        <div className="list-group-item">
                            <strong>Previous Accelerator Places:</strong> {round1Details.previous_accelerator_places || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>If “Yes” Please Indicate All the Previous Places:</strong> {round1Details.If_Yes_please_indicate_ALL_the_PREVIOUS_places || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Funding Received:</strong> {round1Details.funding_received || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Amount Funding Raised:</strong> {round1Details.amount_funding_raised || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Revenue Generated:</strong> {round1Details.revenue_generated || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Covid Impact:</strong> {round1Details.covid_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Reason for Applying:</strong> {round1Details.reason_for_applying || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Biggest Challenge:</strong> {round1Details.biggest_challenge || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>How Did You Hear About Us:</strong> {round1Details.how_did_you_hear_about_us || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Race Ethnicity:</strong> {round1Details.race_ethnicity || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Gender:</strong> {round1Details.gender || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Additional Demographics:</strong> {round1Details.additional_demographics || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Team Identifiers:</strong> {round1Details.team_identifiers || 'N/A'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Round1Details;
