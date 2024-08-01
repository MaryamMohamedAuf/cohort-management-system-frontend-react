import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const CreateRound1 = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    company_website: '',
    company_zip_code: '',
    year_company_founded: '',
    number_of_founding_team_members: '',
    current_product_stage: '',
    current_business_stage: '',
    company_formed: '',
    one_sentence_description: '',
    company_team_location: '',
    if_you_selected_other_please_specify: '',
    short_problem_description: '',
    detailed_description: '',
    applied_to_accelerator: '',
    If_Yes_please_indicate_ALL_the_PREVIOUS_places: '',
    previous_accelerator_places: '',
    funding_received: [],
    amount_funding_raised: '',
    revenue_generated: '',
    covid_impact: '',
    reason_for_applying: '',
    biggest_challenge: '',
    how_did_you_hear_about_us: [],
    race_ethnicity: [],
    gender: [],
    additional_demographics: '',
    team_identifiers: [],
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
       setFormData({ ...formData, [name]: formData[name].filter(item => item !== value) });
       // setFormData({ ...formData, [name]: [] }); 
    }
    } else {
      setFormData({ ...formData, [name]: value });
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/round1/create', formData);
      console.log('Data saved successfully', response.data);
      //const newCohortId = response.data?.round1?.cohort_id; 
                setSuccessMessage('data saved successfully will get in touch with you soon')

      // if (newCohortId) {
      //   //  navigate(`/round1/${newCohortId}`); 

      // } else {
      //     console.error('Cohort ID is missing in the response');
      // }
    } catch (error) {
        console.error('Error saving data', error.response ? error.response.data : error.message);
        setErrorMessage('There was an error saving the data. Please please make sure all required fields are filled.');

    }
  };

  return (
    <div className="container mt-5">
      <h2>Round 1 Application</h2>
      <p>This form contains 24 required questions. Please set aside ~10 minutes to complete the form. Please note that applications without adequate detail for evaluation will likely not advance to a Round 2 application invitation.

This form MAY NOT SAVE your answers before submission. We highly recommend you draft your answers in a separate document before starting this form.
</p>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="first_name">First Name *</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name *</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Applicant Email *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company_name">Company / Project Name *</label>
          <input
            type="text"
            className="form-control"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company_website">Company Website (if available)
          e.g. acmecorp.co</label>
          <input
            type="url"
            className="form-control"
            id="company_website"
            name="company_website"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company_zip_code">Company Zip Code (if a company zip code is not available, please provide the applicant’s zip code)
*
e.g. 96792</label>
          <input
            type="text"
            className="form-control"
            id="company_zip_code"
            name="company_zip_code"
            value={formData.company_zip_code}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year_company_founded">Year Company Founded (if applicable)
          e.g. 2018</label>
          <input
            type="number"
            className="form-control"
            id="year_company_founded"
            name="year_company_founded"
            value={formData.year_company_founded}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
  <label htmlFor="number_of_founding_team_members">Number of Founding Team Members *</label>
  <select
    className="form-control"
    id="number_of_founding_team_members"
    name="number_of_founding_team_members"
    value={formData.number_of_founding_team_members}
    onChange={handleChange}
    required
  >
    <option value="">Select Number</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6 or more">6 or more </option>
  </select>
</div>

        <div className="form-group">
          <label>Current Product Stage *</label>
          <select
            className="form-control"
            name="current_product_stage"
            value={formData.current_product_stage}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Idea">Idea</option>
            <option value="Some Research and/or Business Planning">Some Research and/or Business Planning</option>
            <option value="Prototype Designed">Prototype Designed</option>
            <option value="Prototype Developed">Prototype Developed</option>
            <option value="Beta Testing">Beta Testing</option>
            <option value="Live Customers">Live Customers</option>
          </select>
        </div>

        <div className="form-group">
          <label>Current Business Stage *</label>
          <select
            className="form-control"
            name="current_business_stage"
            value={formData.current_business_stage}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Idea">Idea</option>
            <option value="Startup">Startup</option>
            <option value="Growth">Growth</option>
            <option value="Established">Established</option>
            <option value="Expansion">Expansion</option>
            <option value="Declining">Declining</option>
            <option value="Exit">Exit</option>
          </select>
        </div>
        <div className="form-group">
          <label>Do you already have a company formed? *</label>
          <select
            className="form-control"
            name="company_formed"
            value={formData.company_formed}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="No">No</option>
            <option value="Yes (LLC)">Yes (LLC)</option>
            <option value="Yes (B-Corp)">Yes (B-Corp)</option>
            <option value="Yes (C-Corp)">Yes (C-Corp)</option>
            <option value="Yes (S-Corp)">Yes (S-Corp)</option>
            <option value="Yes (Nonprofit)">Yes (Nonprofit)</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="one_sentence_description">One-Sentence Description * (125 characters max)
*
e.g. We sell the best bird traps</label>
          <input
            type="text"
            className="form-control"
            id="one_sentence_description"
            name="one_sentence_description"
            value={formData.one_sentence_description}
            onChange={handleChange}
            maxLength="125"
            required
          />
        </div>
        <div className="form-group">
          <label>Company / Team Location *</label>
          <select
            className="form-control"
            name="company_team_location"
            value={formData.company_team_location}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Hawaii Island">Hawaii Island</option>
            <option value="Kauai">Kauai</option>
            <option value="Lanai">Lanai</option>
            <option value="Maui">Maui</option>
            <option value="Molokai">Molokai</option>
            <option value="Niihau">Niihau</option>
            <option value="Oahu">Oahu</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {formData.company_team_location === 'Other' && (
          <div className="form-group">
            <label htmlFor="if_you_selected_other_please_specify">If you selected Other, please specify</label>
            <input
              type="text"
              className="form-control"
              id="if_you_selected_other_please_specify"
              name="if_you_selected_other_please_specify"
              value={formData.if_you_selected_other_please_specify}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="short_problem_description">Short Problem Description (problem you’re solving for with your product or service). (625 characters max)
*
e.g. Roadrunners provide a great source of nutrition but those pesky birds are difficult to catch.</label>
          <textarea
            className="form-control"
            id="short_problem_description"
            name="short_problem_description"
            value={formData.short_problem_description}
            onChange={handleChange}
            maxLength="250"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="detailed_description">Detailed Description of Your Solution / Idea / Business (1,875 characters max)
*
e.g. The ACME Corp. provides you with a monthly subscription of the latest Rube Goldberg traps guaranteed to catch a roadrunner or your money back.</label>
          <textarea
            className="form-control"
            id="detailed_description"
            name="detailed_description"
            value={formData.detailed_description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Have you ever applied to an Accelerator, Investor Group, or Investment Fund before? *</label>
          <select
            className="form-control"
            name="applied_to_accelerator"
            value={formData.applied_to_accelerator}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            
            <option value="No">No</option>
            <option value="Yes - I was accepted and received funding">Yes - I was accepted and received funding</option>
  <option value="Yes - I was accepted but there was no funding">Yes - I was accepted but there was no funding</option>
  <option value="Yes - I was accepted but decided to pass">Yes - I was accepted but decided to pass</option>
  <option value="Yes - I was not accepted / did not receive funding">Yes - I was not accepted / did not receive funding</option>
  <option value="I’m not sure">I’m not sure</option>

          </select>
        </div>
        {formData.applied_to_accelerator === 'Yes' && (
          <div className="form-group">
            <label htmlFor="If_Yes_please_indicate_ALL_the_PREVIOUS_places">
            If you selected any of the “Yes” options above, please indicate ALL the PREVIOUS places where you have applied.
            e.g. BeepBeep Accelerator, Looney Tunes Angel Group, and Warner Bros. Family Fund              </label>
            <input
              type="text"
              className="form-control"
              id="If_Yes_please_indicate_ALL_the_PREVIOUS_places"
              name="If_Yes_please_indicate_ALL_the_PREVIOUS_places"
              value={formData.If_Yes_please_indicate_ALL_the_PREVIOUS_places}
              onChange={handleChange}
            />
          </div>
        )}

       <div className="form-group">
  <label>
    Have you ever received funding before? Check all that apply (NOTE: Must be actual financial capital, NOT time invested) *
  </label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="No Funding"
      checked={formData.funding_received.includes('No Funding')}
      onChange={handleChange}
    />
    <label className="form-check-label">No Funding</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Self-Funded"
      checked={formData.funding_received.includes('Self-Funded')}
      onChange={handleChange}
    />
    <label className="form-check-label">Self-Funded</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Family & Friends"
      checked={formData.funding_received.includes('Family & Friends')}
      onChange={handleChange}
    />
    <label className="form-check-label">Family & Friends</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Accelerator"
      checked={formData.funding_received.includes('Accelerator')}
      onChange={handleChange}
    />
    <label className="form-check-label">Accelerator</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Angel Investor"
      checked={formData.funding_received.includes('Angel Investor')}
      onChange={handleChange}
    />
    <label className="form-check-label">Angel Investor</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Venture Capital Fund"
      checked={formData.funding_received.includes('Venture Capital Fund')}
      onChange={handleChange}
    />
    <label className="form-check-label">Venture Capital Fund</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Crowdfund"
      checked={formData.funding_received.includes('Crowdfund')}
      onChange={handleChange}
    />
    <label className="form-check-label">Crowdfund</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Bank Loan"
      checked={formData.funding_received.includes('Bank Loan')}
      onChange={handleChange}
    />
    <label className="form-check-label">Bank Loan</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Grants"
      checked={formData.funding_received.includes('Grants')}
      onChange={handleChange}
    />
    <label className="form-check-label">Other</label>
  </div>
<div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="funding_received"
      value="Grants"
      checked={formData.funding_received.includes('other')}
      onChange={handleChange}
    />
    <label className="form-check-label">Other</label>
  </div>
  </div>

        <div className="form-group">
          <label htmlFor="amount_funding_raised">
          If you have received funding, please indicate the amount of funding you have raised to date (if none, put $0).            </label>
          <input
            type="text"
            className="form-control"
            id="amount_funding_raised"
            name="amount_funding_raised"
            value={formData.amount_funding_raised}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="revenue_generated">
          Revenue Generated in the Past Year (if none, put $0)
          *            </label>
          <input
            type="text"
            className="form-control"
            id="revenue_generated"
            name="revenue_generated"
            value={formData.revenue_generated}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="covid_impact">Has COVID-19 impacted your business?
          *</label>
          <select className="form-control" name="covid_impact" value={formData.covid_impact} onChange={handleChange} required>
  <option value="">Select</option>
  <option value="No, it has not impacted business.">No, it has not impacted business.</option>
  <option value="Yes, and business is still struggling.">Yes, and business is still struggling.</option>
  <option value="Yes, initially but now business is back to near pre-pandemic levels.">Yes, initially but now business is back to near pre-pandemic levels.</option>
  <option value="Yes, initially but now business is better than ever.">Yes, initially but now business is better than ever.</option>
  <option value="Yes, but business has pivoted.">Yes, but business has pivoted.</option>
</select>
        </div>
        <div className="form-group">
          <label htmlFor="reason_for_applying">Why are you applying to preX? (1,000 characters max)
          *</label>
          <textarea
            className="form-control"
            id="reason_for_applying"
            name="reason_for_applying"
            value={formData.reason_for_applying}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="biggest_challenge"> What has been the biggest challenge of doing business in Hawaii? (1,000 characters max)</label>
          <textarea
            className="form-control"
            id="biggest_challenge"
            name="biggest_challenge"
            value={formData.biggest_challenge}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
  <label>
    How Did You Hear About the preX Program? (check all that apply) *
  </label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Instagram"
      checked={formData.how_did_you_hear_about_us.includes('Instagram')}
      onChange={handleChange}
    />
    <label className="form-check-label">Instagram</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Twitter"
      checked={formData.how_did_you_hear_about_us.includes('Twitter')}
      onChange={handleChange}
    />
    <label className="form-check-label">Twitter</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Facebook"
      checked={formData.how_did_you_hear_about_us.includes('Facebook')}
      onChange={handleChange}
    />
    <label className="form-check-label">Facebook</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="LinkedIn"
      checked={formData.how_did_you_hear_about_us.includes('LinkedIn')}
      onChange={handleChange}
    />
    <label className="form-check-label">LinkedIn</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="XLR8HI Email"
      checked={formData.how_did_you_hear_about_us.includes('XLR8HI Email')}
      onChange={handleChange}
    />
    <label className="form-check-label">XLR8HI Email</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="HTDC"
      checked={formData.how_did_you_hear_about_us.includes('HTDC')}
      onChange={handleChange}
    />
    <label className="form-check-label">HTDC</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Word of Mouth / Referral"
      checked={formData.how_did_you_hear_about_us.includes('Word of Mouth / Referral')}
      onChange={handleChange}
    />
    <label className="form-check-label">Word of Mouth / Referral</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="preX Alumni"
      checked={formData.how_did_you_hear_about_us.includes('preX Alumni')}
      onChange={handleChange}
    />
    <label className="form-check-label">preX Alumni</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Google Search"
      checked={formData.how_did_you_hear_about_us.includes('Google Search')}
      onChange={handleChange}
    />
    <label className="form-check-label">Google Search</label>
  </div>
 
   <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Hawaii Business Magazine"
      checked={formData.how_did_you_hear_about_us.includes('Hawaii Business Magazine')}
      onChange={handleChange}
    />
    <label className="form-check-label">Hawaii Business Magazine  </label>
  </div>
   <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Pacific Business News"
      checked={formData.how_did_you_hear_about_us.includes('Pacific Business News')}
      onChange={handleChange}
    />
    <label className="form-check-label">Pacific Business News </label>
  </div> 

   <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Radio"
      checked={formData.how_did_you_hear_about_us.includes('Radio')}
      onChange={handleChange}
    />
    <label className="form-check-label">Radio</label>
  </div> 
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="TV"
      checked={formData.how_did_you_hear_about_us.includes('TV')}
      onChange={handleChange}
    />
    <label className="form-check-label">TV</label>
  </div> 
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Startup Paradise Entity Social Media "
      checked={formData.how_did_you_hear_about_us.includes('Startup Paradise Entity Social Media ')}
      onChange={handleChange}
    />
    <label className="form-check-label">Startup Paradise Entity Social Media </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Startup Paradise Entity Email"
      checked={formData.how_did_you_hear_about_us.includes('Startup Paradise Entity Email')}
      onChange={handleChange}
    />
    <label className="form-check-label">Startup Paradise Entity Email </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="how_did_you_hear_about_us"
      value="Other"
      checked={formData.how_did_you_hear_about_us.includes('Other')}
      onChange={handleChange}
    />
    <label className="form-check-label"> other </label>
  </div>
  </div>

        DEMOGRAPHICS
In an effort to promote and support inclusivity, please answer as many of the following demographic questions (optional).
        
<div className="form-group">
  <label>Race / Ethnicity - I and/or someone on my team identifies as (check all that apply) *</label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="American Indian or Alaska Native"
      checked={formData.race_ethnicity.includes('American Indian or Alaska Native')}
      onChange={handleChange}
    />
    <label className="form-check-label">American Indian or Alaska Native</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Asian or Asian American"
      checked={formData.race_ethnicity.includes('Asian or Asian American')}
      onChange={handleChange}
    />
    <label className="form-check-label">Asian or Asian American</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Black or African American"
      checked={formData.race_ethnicity.includes('Black or African American')}
      onChange={handleChange}
    />
    <label className="form-check-label">Black or African American</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="White"
      checked={formData.race_ethnicity.includes('White')}
      onChange={handleChange}
    />
    <label className="form-check-label">White</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Hispanic, Latino or Latinx"
      checked={formData.race_ethnicity.includes('Hispanic, Latino or Latinx')}
      onChange={handleChange}
    />
    <label className="form-check-label">Hispanic, Latino or Latinx</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Native Hawaiian"
      checked={formData.race_ethnicity.includes('Native Hawaiian')}
      onChange={handleChange}
    />
    <label className="form-check-label">Native Hawaiian</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Pacific Islander"
      checked={formData.race_ethnicity.includes('Pacific Islander')}
      onChange={handleChange}
    />
    <label className="form-check-label">Pacific Islander</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="race_ethnicity"
      value="Other"
      checked={formData.race_ethnicity.includes('Other')}
      onChange={handleChange}
    />
    <label className="form-check-label">Other</label>
  </div>
</div>

        <div className="form-group">
          <label>Gender - I and/or someone on my team identifies as (check all that apply) *</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Female"
              checked={formData.gender.includes('Female')}
              onChange={handleChange}
              
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Male"
              checked={formData.gender.includes('Male')}
              onChange={handleChange}
              
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Non-binary / third gender"
              checked={formData.gender.includes('Non-binary / third gender')}
              onChange={handleChange}
              
            />
            <label className="form-check-label">Non-binary / third gender</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value="Other"
              checked={formData.gender.includes('Other')}
              onChange={handleChange}
              
            />
            <label className="form-check-label">Other</label>
          </div>
        </div>
        {/* <div className="form-group">
          <label htmlFor="additional_demographics">Additional Demographics</label>
          <input
            type="text"
            className="form-control"
            id="additional_demographics"
            name="additional_demographics"
            value={formData.additional_demographics}
            onChange={handleChange}
          />
        </div> */}

       <div className="form-group">
  <label>
    I and/or someone on my team is a(n) (check all that apply):
  </label>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Active Service Member"
      checked={formData.team_identifiers.includes('Active Service Member')}
      onChange={handleChange}
    />
    <label className="form-check-label">Active Service Member</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Spouse of an Active Service Member"
      checked={formData.team_identifiers.includes('Spouse of an Active Service Member')}
      onChange={handleChange}
    />
    <label className="form-check-label">Spouse of an Active Service Member</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Veteran"
      checked={formData.team_identifiers.includes('Veteran')}
      onChange={handleChange}
    />
    <label className="form-check-label">Veteran</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Spouse of a Veteran"
      checked={formData.team_identifiers.includes('Spouse of a Veteran')}
      onChange={handleChange}
    />
    <label className="form-check-label">Spouse of a Veteran</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Individual with a Disability"
      checked={formData.team_identifiers.includes('Individual with a Disability')}
      onChange={handleChange}
    />
    <label className="form-check-label">Individual with a Disability</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="English Language Learner"
      checked={formData.team_identifiers.includes('English Language Learner')}
      onChange={handleChange}
    />
    <label className="form-check-label">English Language Learner</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual"
      checked={formData.team_identifiers.includes('Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual')}
      onChange={handleChange}
    />
    <label className="form-check-label">Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual</label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name="team_identifiers"
      value="Other"
      checked={formData.team_identifiers.includes('Other')}
      onChange={handleChange}
    />
    <label className="form-check-label">Other</label>
  </div>
</div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

    
  );
};

export default CreateRound1;

