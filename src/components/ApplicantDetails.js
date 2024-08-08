import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const ApplicantDetails = () => {
    const { id } = useParams();
    const [applicantData, setApplicantData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get(`http://localhost:8000/api/applicant/details/${id}`)
            .then(response => {
                console.log('API Response:', response.data);
                setApplicantData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching applicant details:', error);
                setError('Error fetching applicant details');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!applicantData) {
        return <div>No data found</div>;
    }

    return (
        <div className="container">
            <h2 className="my-4">Applicant Details for ID: {id}</h2>
            <div className="card">
                <div className="card-body">
                    <h3>Applicant Information</h3>
                    <div className="list-group">
                        <div className="list-group-item">
                            <strong>First Name:</strong> {applicantData.first_name || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Last Name:</strong> {applicantData.last_name || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Email:</strong> {applicantData.email || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Company Name:</strong> {applicantData.company_name || 'N/A'}
                        </div>
                    </div>

                    <h3 className="mt-4">Round 1 Details</h3>
                    <div className="list-group">
                        {applicantData.round1 && applicantData.round1.length > 0 ? (
                            applicantData.round1.map(round1 => (
                                <React.Fragment key={round1.id}>
                                    <div className="list-group-item"><strong>Company Website:</strong> {round1.company_website || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Company Zip Code:</strong> {round1.company_zip_code || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Year Company Founded:</strong> {round1.year_company_founded || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Number of Founding Team Members:</strong> {round1.number_of_founding_team_members || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Current Product Stage:</strong> {round1.current_product_stage || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Current Business Stage:</strong> {round1.current_business_stage || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Company Formed:</strong> {round1.company_formed || 'N/A'}</div>
                                    <div className="list-group-item"><strong>One Sentence Description:</strong> {round1.one_sentence_description || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Company Team Location:</strong> {round1.company_team_location || 'N/A'}</div>
                                    <div className="list-group-item"><strong>if you selected other please specify:</strong> {round1.if_you_selected_other_please_specify || 'N/A'}</div>
                                    
                                    <div className="list-group-item"><strong>Short Problem Description:</strong> {round1.short_problem_description || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Detailed Description:</strong> {round1.detailed_description || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Applied to Accelerator:</strong> {round1.applied_to_accelerator || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Previous Accelerator Places:</strong> {round1.previous_accelerator_places || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Funding Received:</strong> {round1.funding_received ? round1.funding_received.split(',').join(', ') : 'N/A'}</div>
                                    <div className="list-group-item"><strong>Amount Funding Raised:</strong> {round1.amount_funding_raised || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Revenue Generated:</strong> {round1.revenue_generated || 'N/A'}</div>
                                    <div className="list-group-item"><strong>COVID Impact:</strong> {round1.covid_impact || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Reason for Applying:</strong> {round1.reason_for_applying || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Biggest Challenge:</strong> {round1.biggest_challenge || 'N/A'}</div>
                                    <div className="list-group-item"><strong>How Did You Hear About Us:</strong> {round1.how_did_you_hear_about_us ? round1.how_did_you_hear_about_us.split(',').join(', ') : 'N/A'}</div>
                                    <div className="list-group-item"><strong>Race/Ethnicity:</strong> {round1.race_ethnicity ? round1.race_ethnicity.split(',').join(', ') : 'N/A'}</div>
                                    <div className="list-group-item"><strong>Gender:</strong> {round1.gender ? round1.gender.split(',').join(', ') : 'N/A'}</div>
                                    <div className="list-group-item"><strong>Team Identifiers:</strong> {round1.team_identifiers ? round1.team_identifiers.split(',').join(', ') : 'N/A'}</div>
                                    <div className="list-group-item"><strong>Additional Demographics:</strong> {round1.additional_demographics || 'N/A'}</div>
                                    <div className="list-group-item">
                            <strong>If Other Team Identifiers:</strong> {round1.team_identifiers || 'N/A'}
                        </div>
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="list-group-item">Round 1 data not available</div>
                        )}
                    </div>

                    <h3 className="mt-4">Round 2 Details</h3>
                    <div className="list-group">
                        {applicantData.round2 && applicantData.round2.length > 0 ? (
                            applicantData.round2.map(round2 => (
                                <React.Fragment key={round2.id}>
                                   <div className="list-group-item">
                            <strong>Phone:</strong> {round2.phone || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>One Sentence Description:</strong> {round2.One_Sentence_Description || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Sector:</strong> {round2.sector || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Sector:</strong> {round2.other_sector || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Business Model:</strong> {round2.business_model || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Business Model:</strong> {round2.other_business_model || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Solution:</strong> {round2.solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Solution:</strong> {round2.other_solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Demo URL:</strong> {round2.demo_url || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Traction:</strong> {round2.traction || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Where Customer Find Solution:</strong> {round2.where_customer_find_solution || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Revenue Generated:</strong> {round2.revenue_generated || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Funding Received:</strong> {round2.funding_received || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Funding Type:</strong> {round2.other_funding_type || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Sources of Funding:</strong> {round2.sources_of_funding || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team Members:</strong> {round2.core_team_members || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Previous Startup Experience:</strong> {round2.previous_startup_experience ? 'Yes' : 'No'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team:</strong> {round2.core_team || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Core Team Experience:</strong> {round2.core_team_experience || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Employees (Full Time/Part Time/Interns):</strong> {round2.employees_full_time_part_time_interns || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Positions to Fill:</strong> {round2.positions_to_fill || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Goals (Next 3-12 Months):</strong> {round2.goals_next_3_to_12_months || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Prex Program Expectations:</strong> {round2.prex_program_expectations || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Accomplish Within a Year:</strong> {round2.accomplish_within_year || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Submit Pitch Video URL:</strong> {round2.submit_pitch_video_url || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Covid-19 Resilience Impact:</strong> {round2.covid19_resilience_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Social Impact:</strong> {round2.social_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Covid-19 Impact:</strong> {round2.covid19_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Covid-19 Impact:</strong> {round2.other_covid19_impact || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Critical Support Resource:</strong> {round2.critical_support_resource || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Best Support Resource:</strong> {round2.best_support_resource || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Holding Back Growth Reason:</strong> {round2.holding_back_growth_reason || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Other Comments:</strong> {round2.other_comments || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Race Ethnicity:</strong> {round2.race_ethnicity || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Gender:</strong> {round2.gender || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>Team Identifiers:</strong> {round2.team_identifiers || 'N/A'}
                        </div>
                        <div className="list-group-item">
                            <strong>If Other Team Identifiers:</strong> {round2.if_other_team_identifiers || 'N/A'}
                        </div>
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="list-group-item">Round 2 data not available</div>
                        )}
                    </div>

                    <h3 className="mt-4">Round 3 Details</h3>
                    <div className="list-group">
                        {applicantData.round3 && applicantData.round3.length > 0 ? (
                            applicantData.round3.map(round3 => (
                                <React.Fragment key={round3.id}>
                                    <div className="list-group-item"><strong>Recorded Meeting Link:</strong> {round3.recorded_meeting_link || 'N/A'}</div>
                                    <div className="list-group-item"><strong>Final Decision:</strong> {round3.final_decision ? 'Accepted':'Rejected' || 'N/A'}</div>
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="list-group-item">Round 3 data not available</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantDetails;
