import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const EditRound2 = () => {
    const navigate = useNavigate();
    const [cohortId, setCohortId] = useState(null);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company_name: '',
        phone: '',
        One_Sentence_Description: '',
        sector: '',
        other_sector: '',
        business_model: '',
        other_business_model: '',
        solution: '',
        other_solution: '',
        demo_url: '',
        traction: '',
        where_customer_find_solution: '',
        revenue_generated: '',
        funding_received: [],
        other_funding_type: '',
        sources_of_funding: [],
        core_team_members: '',
        previous_startup_experience: false,
        core_team: '',
        core_team_experience: '',
        employees_full_time_part_time_interns: '',
        positions_to_fill: '',
        goals_next_3_to_12_months: '',
        prex_program_expectations: '',
        accomplish_within_year: [],
        submit_pitch_video_url: '',
        covid19_resilience_impact: '',
        social_impact: '',
        covid19_impact: [],
        other_covid19_impact: '',
        critical_support_resource: [],
        best_support_resource: [],
        holding_back_growth_reason: '',
        other_comments: '',
        race_ethnicity: [],
        gender: [],
        team_identifiers: [],
        if_other_team_identifiers: ''
    });

    useEffect(() => {
        const fetchRound2Data = async () => {
          try {
            const response = await axiosInstance.get(`http://localhost:8000/api/round2/${id}`);
            const data = response.data;
            setCohortId(data.applicant.cohort_id);
            setFormData({
              applicant_id: data.applicant.applicant_id || '',
              first_name: data.applicant.first_name || '',
              last_name: data.applicant.last_name || '',
              email: data.applicant.email || '',
            company_name:data.applicant.company_name || '', 
                phone: data.phone || '',
                One_Sentence_Description: data.One_Sentence_Description || '',
                sector: data.sector || '',
                other_sector: data.other_sector || '',
                business_model: data.business_model || '',
                other_business_model: data.other_business_model || '',
                solution: data.solution || '',
                other_solution: data.other_solution || '',
                demo_url: data.demo_url || '',
                traction: data.traction || '',
                where_customer_find_solution: data.where_customer_find_solution || '',
                revenue_generated: data.revenue_generated || '',
                funding_received: data.funding_received ? data.funding_received.split(',') : [],
                other_funding_type: data.other_funding_type || '',
                sources_of_funding: data.sources_of_funding ? data.sources_of_funding.split(',') : [],
                core_team_members: data.core_team_members || '',
                previous_startup_experience: data.previous_startup_experience || false,
                core_team: data.core_team || '',
                core_team_experience: data.core_team_experience || '',
                employees_full_time_part_time_interns: data.employees_full_time_part_time_interns || '',
                positions_to_fill: data.positions_to_fill || '',
                goals_next_3_to_12_months: data.goals_next_3_to_12_months || '',
                prex_program_expectations: data.prex_program_expectations || '',
                accomplish_within_year: data.accomplish_within_year ? data.accomplish_within_year.split(',') : [],
                submit_pitch_video_url: data.submit_pitch_video_url || '',
                covid19_resilience_impact: data.covid19_resilience_impact || '',
                social_impact: data.social_impact || '',
                covid19_impact: data.covid19_impact ? data.covid19_impact.split(',') : [],
                other_covid19_impact: data.other_covid19_impact || '',
                critical_support_resource: data.critical_support_resource ? data.critical_support_resource.split(',') : [],
                best_support_resource: data.best_support_resource ? data.best_support_resource.split(',') : [],
                holding_back_growth_reason: data.holding_back_growth_reason || '',
                other_comments: data.other_comments || '',
                race_ethnicity: data.race_ethnicity ? data.race_ethnicity.split(',') : [],
                gender: data.gender ? data.gender.split(',') : [],
                team_identifiers: data.team_identifiers ? data.team_identifiers.split(',') : [],
                if_other_team_identifiers: data.if_other_team_identifiers || ''
            });
          } catch (error) {
            console.error('Error fetching data', error.response ? error.response.data : error.message);
          }
        };
    
        fetchRound2Data();
      }, [id]);


      const fundingOptions = [
        'Equity Financing: No funding received',
        'Equity Financing: Less than $10,000',
        'Equity Financing: $10,000- $49,999',
        'Equity Financing: $50,000- $99,999',
        'Equity Financing: $100,000- $249,999',
        'Equity Financing: $250,000- $499,999',
        'Equity Financing: $500,000- $999,999',
        'Equity Financing: $1,000,000- $2,999,999',
        'Equity Financing: More than $3,000,000',
'Debt Financing: No funding received',
'Debt Financing: Less than $10,000',
'Debt Financing: $10,000- $49,999',
'Debt Financing: $50,000- $99,999',
'Debt Financing: $100,000- $249,999',
'Debt Financing: $250,000- $499,999',
'Debt Financing: $500,000- $999,999',
'Debt Financing: $1,000,000- $2,999,999',
'Debt Financing: More than $3,000,000',
'Grants: No funding received',
'Grants: Less than $10,000',
'Grants: $10,000- $49,999',
'Grants: $50,000- $99,999',
'Grants: $100,000- $249,999',
'Grants: $250,000- $499,999',
'Grants: $500,000- $999,999',
'Grants: $1,000,000- $2,999,999',
'Grants: More than $3,000,000',
'Self-Funded: No funding received',
  'Self-Funded: Less than $10,000',
  'Self-Funded: $10,000- $49,999',
  'Self-Funded: $50,000- $99,999',
  'Self-Funded: $100,000- $249,999',
  'Self-Funded: $250,000- $499,999',
  'Self-Funded: $500,000- $999,999',
  'Self-Funded: $1,000,000- $2,999,999',
  'Self-Funded: More than $3,000,000',
  'Prizes: No funding received',
  'Prizes: Less than $10,000',
  'Prizes: $10,000- $49,999',
  'Prizes: $50,000- $99,999',
  'Prizes: $100,000- $249,999',
  'Prizes: $250,000- $499,999',
  'Prizes: $500,000- $999,999',
  'Prizes: $1,000,000- $2,999,999',
  'Prizes: More than $3,000,000',
  'Other (specify below): No funding received',
  'Other (specify below): Less than $10,000',
  'Other (specify below): $10,000- $49,999',
  'Other (specify below): $50,000- $99,999',
  'Other (specify below): $100,000- $249,999',
  'Other (specify below): $250,000- $499,999',
  'Other (specify below): $500,000- $999,999',
  'Other (specify below): $1,000,000- $2,999,999',
  'Other (specify below): More than $3,000,000',
      ];
      const sourcesOfFundingOptions = [
        'No funding received',
        'Friends & Family (Investment by a friend or family member, NOT a loan or gift from a family member)',
        'Accelerators, Incubators or Investment Programs',
        'Angel Investors or Angel Funds',
        'Institutional Investors (Venture Capital Funds, Corporate Investors, etc.)',
        'Banks (ONLY Business Loans)',
        'Competitions (Business Plan Competitions, Pitch Competitions, etc.)',
        'Founding Team (Personal Savings)',
        'Federal CARES Act Funding (e.g. PPP, EIDL, Shuttered Venues Grant, Restaurant Revitalization Fund, etc.)',
        'State CARES Act Relief (e.g. Small Business Relief & Recovery Fund, Chamber of Commerce, Oahu SBRN, etc.)',
        'State, Federal, or Non-profit Organizations (NOT CARES Act Funding)',
        'Other:'
      ];    
      
      const accomplishWithinYearOptions = [
        'Form my business (i.e. establishing a legal entity)',
        'Form a team',
        'Apply to an accelerator',
        'Raise funding from Family and Friends',
        'Raise investments from an investor (angel investor, venture capitalist)',
        'Get a bank loan',
        'Launch a crowdfunding campaign',
        'Establish an online presence',
        'Acquire my first customer',
        'Sell my business',
        'Enter a new market',
        'Launch a new product or service',
        'Hire new employees',
        'Expand my operations (having multiple offices, franchise expansion, etc.)',
        'Other'
      ];
      const covidImpactOptions = [
        '2020-Q1: No impact on business',
        '2020-Q1: Loss of revenue, customers',
        '2020-Q1: Loss of staff, workforce',
        '2020-Q1: Loss of office space, storefront',
        '2020-Q1: Increased costs (e.g. PPE, shipping, etc.)',
        '2020-Q1: Decreased staff morale, well-being',
        '2020-Q1: Delayed launch of idea, product, service',
        '2020-Q1: Permanently closed business',
        '2020-Q1: Increase in revenue, customers',
        '2020-Q1: Increase in staff, workforce',
        '2020-Q1: Created, expanded online presence',
        '2020-Q1: Launched new business / projects',
        '2020-Q1: Other (specify below)',
        // 2020-Q2
  '2020-Q2: No impact on business',
  '2020-Q2: Loss of revenue, customers',
  '2020-Q2: Loss of staff, workforce',
  '2020-Q2: Loss of office space, storefront',
  '2020-Q2: Increased costs (e.g. PPE, shipping, etc.)',
  '2020-Q2: Decreased staff morale, well-being',
  '2020-Q2: Delayed launch of idea, product, service',
  '2020-Q2: Permanently closed business',
  '2020-Q2: Increase in revenue, customers',
  '2020-Q2: Increase in staff, workforce',
  '2020-Q2: Created, expanded online presence',
  '2020-Q2: Launched new business / projects',
  '2020-Q2: Other (specify below)',

  // 2020-Q3
  '2020-Q3: No impact on business',
  '2020-Q3: Loss of revenue, customers',
  '2020-Q3: Loss of staff, workforce',
  '2020-Q3: Loss of office space, storefront',
  '2020-Q3: Increased costs (e.g. PPE, shipping, etc.)',
  '2020-Q3: Decreased staff morale, well-being',
  '2020-Q3: Delayed launch of idea, product, service',
  '2020-Q3: Permanently closed business',
  '2020-Q3: Increase in revenue, customers',
  '2020-Q3: Increase in staff, workforce',
  '2020-Q3: Created, expanded online presence',
  '2020-Q3: Launched new business / projects',
  '2020-Q3: Other (specify below)',

  //2020-Q4
  '2020-Q4: No impact on business',
  '2020-Q4: Loss of revenue, customers',
  '2020-Q4: Loss of staff, workforce',
  '2020-Q4: Loss of office space, storefront',
  '2020-Q4: Increased costs (e.g. PPE, shipping, etc.)',
  '2020-Q4: Decreased staff morale, well-being',
  '2020-Q4: Delayed launch of idea, product, service',
  '2020-Q4: Permanently closed business',
  '2020-Q4: Increase in revenue, customers',
  '2020-Q4: Increase in staff, workforce',
  '2020-Q4: Created, expanded online presence',
  '2020-Q4: Launched new business / projects',
  '2020-Q4: Other (specify below)',

  // 2021-Q1
  '2021-Q1: No impact on business',
  '2021-Q1: Loss of revenue, customers',
  '2021-Q1: Loss of staff, workforce',
  '2021-Q1: Loss of office space, storefront',
  '2021-Q1: Increased costs (e.g. PPE, shipping, etc.)',
  '2021-Q1: Decreased staff morale, well-being',
  '2021-Q1: Delayed launch of idea, product, service',
  '2021-Q1: Permanently closed business',
  '2021-Q1: Increase in revenue, customers',
  '2021-Q1: Increase in staff, workforce',
  '2021-Q1: Created, expanded online presence',
  '2021-Q1: Launched new business / projects',
  '2021-Q1: Other (specify below)',

  // 2021-Q2
  '2021-Q2: No impact on business',
  '2021-Q2: Loss of revenue, customers',
  '2021-Q2: Loss of staff, workforce',
  '2021-Q2: Loss of office space, storefront',
  '2021-Q2: Increased costs (e.g. PPE, shipping, etc.)',
  '2021-Q2: Decreased staff morale, well-being',
  '2021-Q2: Delayed launch of idea, product, service',
  '2021-Q2: Permanently closed business',
  '2021-Q2: Increase in revenue, customers',
  '2021-Q2: Increase in staff, workforce',
  '2021-Q2: Created, expanded online presence',
  '2021-Q2: Launched new business / projects',
  '2021-Q2: Other (specify below)',

  // 2021-Q3
  '2021-Q3: No impact on business',
  '2021-Q3: Loss of revenue, customers',
  '2021-Q3: Loss of staff, workforce',
  '2021-Q3: Loss of office space, storefront',
  '2021-Q3: Increased costs (e.g. PPE, shipping, etc.)',
  '2021-Q3: Decreased staff morale, well-being',
  '2021-Q3: Delayed launch of idea, product, service',
  '2021-Q3: Permanently closed business',
  '2021-Q3: Increase in revenue, customers',
  '2021-Q3: Increase in staff, workforce',
  '2021-Q3: Created, expanded online presence',
  '2021-Q3: Launched new business / projects',
  '2021-Q3: Other (specify below)',

  // 2021-Q4
  '2021-Q4: No impact on business',
  '2021-Q4: Loss of revenue, customers',
  '2021-Q4: Loss of staff, workforce',
  '2021-Q4: Loss of office space, storefront',
  '2021-Q4: Increased costs (e.g. PPE, shipping, etc.)',
  '2021-Q4: Decreased staff morale, well-being',
  '2021-Q4: Delayed launch of idea, product, service',
  '2021-Q4: Permanently closed business',
  '2021-Q4: Increase in revenue, customers',
  '2021-Q4: Increase in staff, workforce',
  '2021-Q4: Created, expanded online presence',
  '2021-Q4: Launched new business / projects',
  '2021-Q4: Other (specify below)'
      ];
      const criticalSupportOptions = [
        'Aloha Connects Innovation',
        'COVID-19 Economic Injury Disaster Loan (EIDL)',
        'Paycheck Protection Program (PPP)',
        'Rent deferral or relief',
        'SBA Debt Relief',
        'Technical Assistance',
        'Other'
      ];
      const bestSupportOptions = [
        'Additional core team member(s)',
        'Aloha Connects Innovation',
        'Business Loan',
        'Debt relief',
        'Legal guidance',
        'Mentoring',
        'Networking',
        'Technical assistance',
        'Paycheck Protection Program (PPP)',
        'Rent deferral or relief',
        'Other'
      ];
      const genderOptions = [
        '0 Male',
        '1 Male',
        '2 Male',
        '3 Male',
        '4 Male',
        '5 Male',
        '6 or more Male',
        '0 Female',
        '1 Female',
        '2 Female',
        '3 Female',
        '4 Female',
        '5 Female',
        '6 or more Female',
        '0 Non-Binary / Third Gender',
        '1 Non-Binary / Third Gender',
        '2 Non-Binary / Third Gender',
        '3 Non-Binary / Third Gender',
        '4 Non-Binary / Third Gender',
        '5 Non-Binary / Third Gender',
        '6 or more Non-Binary / Third Gender',
        '0 Prefer to Self-Describe',
        '1 Prefer to Self-Describe',
        '2 Prefer to Self-Describe',
        '3 Prefer to Self-Describe',
        '4 Prefer to Self-Describe',
        '5 Prefer to Self-Describe',
        '6 or more Prefer to Self-Describe',
        '0 Prefer Not to Answer',
        '1 Prefer Not to Answer',
        '2 Prefer Not to Answer',
        '3 Prefer Not to Answer',
        '4 Prefer Not to Answer',
        '5 Prefer Not to Answer',
        '6 or more Prefer Not to Answer'
      ];
      const raceEthnicityOptions = [
        '0 American Indian or Alaska Native',
        '1 American Indian or Alaska Native',
        '2 American Indian or Alaska Native',
        '3 American Indian or Alaska Native',
        '4 American Indian or Alaska Native',
        '5 American Indian or Alaska Native',
        '6 or more American Indian or Alaska Native',
        
        '0 Asian or Asian American',
        '1 Asian or Asian American',
        '2 Asian or Asian American',
        '3 Asian or Asian American',
        '4 Asian or Asian American',
        '5 Asian or Asian American',
        '6 or more Asian or Asian American',
        
        '0 Black or African American',
        '1 Black or African American',
        '2 Black or African American',
        '3 Black or African American',
        '4 Black or African American',
        '5 Black or African American',
        '6 or more Black or African American',
        
        '0 White',
        '1 White',
        '2 White',
        '3 White',
        '4 White',
        '5 White',
        '6 or more White',
        
        '0 Hispanic, Latino or Latinx',
        '1 Hispanic, Latino or Latinx',
        '2 Hispanic, Latino or Latinx',
        '3 Hispanic, Latino or Latinx',
        '4 Hispanic, Latino or Latinx',
        '5 Hispanic, Latino or Latinx',
        '6 or more Hispanic, Latino or Latinx',
        
        '0 Native Hawaiian',
        '1 Native Hawaiian',
        '2 Native Hawaiian',
        '3 Native Hawaiian',
        '4 Native Hawaiian',
        '5 Native Hawaiian',
        '6 or more Native Hawaiian',
        
        '0 Pacific Islander',
        '1 Pacific Islander',
        '2 Pacific Islander',
        '3 Pacific Islander',
        '4 Pacific Islander',
        '5 Pacific Islander',
        '6 or more Pacific Islander',
        
        '0 Other (specify below)',
        '1 Other (specify below)',
        '2 Other (specify below)',
        '3 Other (specify below)',
        '4 Other (specify below)',
        '5 Other (specify below)',
        '6 or more Other (specify below)'
      ];
      const teamIdentifiersOptions = [
        '0 Active Service Member',
        '1 Active Service Member',
        '2 Active Service Member',
        '3 Active Service Member',
        '4 Active Service Member',
        '5 Active Service Member',
        '6 or more Active Service Member',
        
        '0 Spouse of an Active Service Member',
        '1 Spouse of an Active Service Member',
        '2 Spouse of an Active Service Member',
        '3 Spouse of an Active Service Member',
        '4 Spouse of an Active Service Member',
        '5 Spouse of an Active Service Member',
        '6 or more Spouse of an Active Service Member',
        
        '0 Veteran',
        '1 Veteran',
        '2 Veteran',
        '3 Veteran',
        '4 Veteran',
        '5 Veteran',
        '6 or more Veteran',
        
        '0 Spouse of a Veteran',
        '1 Spouse of a Veteran',
        '2 Spouse of a Veteran',
        '3 Spouse of a Veteran',
        '4 Spouse of a Veteran',
        '5 Spouse of a Veteran',
        '6 or more Spouse of a Veteran',
        
        '0 Individual with a Disability',
        '1 Individual with a Disability',
        '2 Individual with a Disability',
        '3 Individual with a Disability',
        '4 Individual with a Disability',
        '5 Individual with a Disability',
        '6 or more Individual with a Disability',
        
        '0 English Language Learner',
        '1 English Language Learner',
        '2 English Language Learner',
        '3 English Language Learner',
        '4 English Language Learner',
        '5 English Language Learner',
        '6 or more English Language Learner',
        
        '0 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '1 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '2 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '3 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '4 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '5 Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        '6 or more Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, and/or Asexual',
        
        '0 Other (please specify below)',
        '1 Other (please specify below)',
        '2 Other (please specify below)',
        '3 Other (please specify below)',
        '4 Other (please specify below)',
        '5 Other (please specify below)',
        '6 or more Other (please specify below)'
      ];
      
    const handleCheckboxChange = (e, field) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            const fieldArray = prevState[field];
            if (checked) {
                return { ...prevState, [field]: [...fieldArray, value] };
            } else {
                return { ...prevState, [field]: fieldArray.filter((item) => item !== value) };
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
    };

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     if (type === 'checkbox') {
    //         setFormData(prevState => ({
    //             ...prevState,
    //             [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
    //         }));
    //     } else {
    //         setFormData({
    //             ...formData,
    //             [name]: value
    //         });
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.put(`http://localhost:8000/api/round2/${id}`, formData)
            .then(() => {
             navigate(`/round2/${cohortId}`);
            })
            .catch(error => {
                console.error('Error updating Round 2 data:', error);
            });
    };

    return (
        <div className="container mt-5">
        <h2>Round 2 Application</h2>
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
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="One_Sentence_Description">One Sentence Description
  <p> Please use a descriptive sentence and not a marketing one. If you do not already have one, feel free to use this formula:"(Company name) is developing (a defined offering) to help (a defined audience) (solve a problem) with (unique solution)." 155 characters max.
    </p></label>
                <input
                    type="text"
                    className="form-control"
                    id="One_Sentence_Description"
                    name="One_Sentence_Description"
                    value={formData.One_Sentence_Description}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="sector">Sector</label>
                <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="" disabled>Select sector</option>
                    {['Industrial', 'Educational', 'Technology', 'Healthcare', 'Finance', 'Consumer Goods', 'Energy', 'Telecommunications', 'Real Estate', 'Transportation','other'].map((sector) => (
                        <option key={sector} value={sector}>
                            {sector}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="other_sector">In the question above, if you selected "Other" please specify here.
                125 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="other_sector"
                    name="other_sector"
                    value={formData.other_sector}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
        <label htmlFor="business_model">Business Model</label>
        <select
            className="form-control"
            id="business_model"
            name="business_model"
            value={formData.business_model}
            onChange={handleChange}
        >
             <option value="">Select a business model</option>
            <option value="B2B">Business to Business (B2B)</option>
            <option value="B2C">Business to Consumer (B2C)</option>
            <option value="B2G">Business to Government (B2G)</option>
            <option value="B2B2C">Business to Business to Consumer (B2B2C)</option>
            <option value="C2B2C">Consumer to Business to Consumer (C2B2C)</option>
            <option value="C2C">Consumer to Consumer (C2C)</option>
            <option value="C2B">Consumer to Business (C2B)</option>
            <option value="Other">Other</option>
        </select>
    </div>
            <div className="form-group">
                <label htmlFor="other_business_model">In the question above, if you selected "Other" please specify here.
                125 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="other_business_model"
                    name="other_business_model"
                    value={formData.other_business_model}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
        <label htmlFor="solution">Solution</label>
        <select
            className="form-control"
            id="solution"
            name="solution"
            value={formData.solution}
            onChange={handleChange}
        >
            <option value="">Select a solution</option>
            <option value="Software">Software</option>
            <option value="Product">Product</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="professional Service"> professional Service</option>
            <option value="Hardware">Hardware</option>
            <option value="customer packaged goods">customer packaged goods</option>
            <option value="Hardware & software">Hardware & software </option>
            <option value="digital">digital</option>
            <option value="other">other</option>
        </select>
    </div>

            <div className="form-group">
                <label htmlFor="other_solution"> If you checked “Other,” please specify below.40 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="other_solution"
                    name="other_solution"
                    value={formData.other_solution}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="demo_url">Provide a URL to view your product / service demo, if available
                This can include a URL to your website or Dropbox / Google Drive folder with mockups, prototype sketches, photos, videos, etc. Do not password protect your folder. Before you share the URL, please make sure the link sharing settings are set up so ANYONE WITH THE LINK CAN VIEW or ACCESS the folder (this will be used for internal preX screening purposes only).</label>
                <input
                    type="text"
                    className="form-control"
                    id="demo_url"
                    name="demo_url"
                    value={formData.demo_url}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
        <label htmlFor="traction">Traction</label>
        <select
            className="form-control"
            id="traction"
            name="traction"
            value={formData.traction}
            onChange={handleChange}
        >
            <option value="">Select traction</option>
            <option value="no_customers_no_revenue">I don't have customers and did not generate any revenue</option>
            <option value="few_customers_no_revenue">customers are using my solution but i did not generate any revenue</option>
            <option value="many_customers_revenue_found_not_profitable_nor_break_even">I have customers and generated revenue, but iam not profitable nor break even </option>
            <option value="many_customers_revenue_found_profitable">I have customers and generated revenue, and iam profitable</option>
        
        </select>
    </div>
            <div className="form-group">
                <label htmlFor="where_customer_find_solution">Where can customers find your solution / idea / service / product?
*
eg. Physical Stores, Online Marketplaces, Your Website, N/A, etc. 125 characters max.</label>
                <input
                    type="text"
                    className="form-control"
                    id="where_customer_find_solution"
                    name="where_customer_find_solution"
                    value={formData.where_customer_find_solution}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
        <label htmlFor="revenue_generated">
            How much revenue has your company generated in the PAST 12 MONTHS?*
            Revenue is the income generated from sale of goods or services associated with the main operations of an organization BEFORE any costs or expenses are deducted. Outside funding such as grants, awards, money from investors DO NOT count as revenue. Money raised from Crowdfunding platforms such as Kickstarter or Indiegogo counts as revenue.
        </label>
        <select
            className="form-control"
            id="revenue_generated"
            name="revenue_generated"
            value={formData.revenue_generated}
            onChange={handleChange}
        >
            <option value="">Select revenue</option>
            <option value="no_revenue">No revenue</option>
            <option value="less_than_1000">$0 - $999</option>
            <option value="1000_to_9999">$1,000 - $9,999</option>
            <option value="10000_to_49999">$10,000 - $49,999</option>
            <option value="50000_to_99999">$50,000 - $99,999</option>
            <option value="100000_to_499999">$100,000 - $499,999</option>
            <option value="500000_to_999999">$500,000 - $999,999</option>
            <option value="1M_to_2_9M">$1,000,000 - $2,999,999</option>
            <option value="3M_and_above">$3,000,000 and above</option>
        </select>
    </div>
            <div className="form-group">
                <label> How much FUNDING has your company / idea / business received TO DATE?
*
Any funding received by the company that was NOT GENERATED by your company’s business activities (i.e. not revenue generated). NOTE:  Debt Financing = Business Loan and Self-Funded = Personal Savings, Cash, Personal Credit Cards; Time Invested Doesn’t Count.
<strong>check at least 1 range for each funding category </strong></label>
                {fundingOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`funding_received_${option}`}
                            value={option}
                            checked={formData.funding_received.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'funding_received')}
                        />
                        <label className="form-check-label" htmlFor={`funding_received_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="other_funding_type">In the question above, if you received "Other" funding, please specify the type of funding here.
                125 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="other_funding_type"
                    name="other_funding_type"
                    value={formData.other_funding_type}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>SOURCES of FUNDING received by your company / idea / business TO DATE. Check all that apply.
*
Any funding received by the company that was NOT GENERATED by your company’s business activities (i.e. not revenue generated).</label>
                {sourcesOfFundingOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`sources_of_funding_${option}`}
                            value={option}
                            checked={formData.sources_of_funding.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'sources_of_funding')}
                        />
                        <label className="form-check-label" htmlFor={`sources_of_funding_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="core_team_members">Core Team Members</label>
                <input
                    type="number"
                    className="form-control"
                    id="core_team_members"
                    name="core_team_members"
                    value={formData.core_team_members}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
<label htmlFor="previous_startup_experience">do you or any members of your core team have previous startup/business experience? check the checkbox if Yes </label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="previous_startup_experience"
                    name="previous_startup_experience"
                    checked={formData.previous_startup_experience}
                    onChange={(e) => setFormData({ ...formData, previous_startup_experience: e.target.checked })}
                />
            </div>

            <div className="form-group">
                <label htmlFor="core_team"> List all members of your core team (include yourself)
*
For each core team member provide their: Full Name, Position in Your Company, LinkedIn Profile.</label>
                <input
                    type="text"
                    className="form-control"
                    id="core_team"
                    name="core_team"
                    value={formData.core_team}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="core_team_experience">How long have all the core team members worked together? Include prior work experience together.
*
1,875 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="core_team_experience"
                    name="core_team_experience"
                    value={formData.core_team_experience}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="employees_full_time_part_time_interns">How many employees (outside of the core team) do you have? (Full-Time/Part-Time/Interns)
                    <strong> from 1 to 6 or more for each employement type </strong>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="employees_full_time_part_time_interns"
                    name="employees_full_time_part_time_interns"
                    value={formData.employees_full_time_part_time_interns}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="positions_to_fill"> Are there gaps in your team that you’re looking to fill in the next year? If so, describe the positions or roles below.
*
1,000 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="positions_to_fill"
                    name="positions_to_fill"
                    value={formData.positions_to_fill}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="goals_next_3_to_12_months">What do you want to accomplish in the next 3-12 months?
*
2,000 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="goals_next_3_to_12_months"
                    name="goals_next_3_to_12_months"
                    value={formData.goals_next_3_to_12_months}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="prex_program_expectations">What do you want to get out of the preX program?
*
2,000 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="prex_program_expectations"
                    name="prex_program_expectations"
                    value={formData.prex_program_expectations}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label> "Within the next year, I plan to..." (check all that apply)
                </label>
                {accomplishWithinYearOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`accomplish_within_year_${option}`}
                            value={option}
                            checked={formData.accomplish_within_year.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'accomplish_within_year')}
                        />
                        <label className="form-check-label" htmlFor={`accomplish_within_year_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="submit_pitch_video_url">SUBMIT A 2-MIN PITCH VIDEO. In this video make sure to 1 - Introduce yourself and your company; 2 - Describe the current problem / need you are addressing; 3 - Describe how your customers are addressing that problem/need today; 4 - Introduce your solution; 5 - Explain what is unique / different about your solution; 6 - Explain why you or your team are uniquely positioned to solve this problem. 7 - Explain why you personally want to solve this problem?
*
Please submit your video as a YouTube OR Vimeo link. Do not password protect your video (you should be able to make it non-public/unlisted so that only directly visiting the URL shows the video). Videos longer than 2 minutes will not be viewed.</label>
                <input
                    type="text"
                    className="form-control"
                    id="submit_pitch_video_url"
                    name="submit_pitch_video_url"
                    value={formData.submit_pitch_video_url}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="covid19_resilience_impact">Does or will your business add to Hawaii’s resiliency in a COVID-19 world? If yes, please explain. If no, simply answer "N/A" (you will not be penalized for answering "N/A").
*
950 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="covid19_resilience_impact"
                    name="covid19_resilience_impact"
                    value={formData.covid19_resilience_impact}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="social_impact">Does or will your business create a social impact? If yes, please explain and clarify if this impact is local, national, or global. If no, simply answer "N/A" (you will not be penalized for answering "N/A").
*
950 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="social_impact"
                    name="social_impact"
                    value={formData.social_impact}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>What impact, if any, has COVID-19 had on your company / idea / business? Check all that apply.
*
We're hoping to understand the effects of the COVID pandemic on Hawaii’s business ecosystem over time to inform how we can respond with services and support. As such, to the best of your ability, please share how the pandemic has impacted your business since 2020 broken down by quarters. <strong>check at least 1 for each quarter</strong>
</label>
                {covidImpactOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`covid19_impact_${option}`}
                            value={option}
                            checked={formData.covid19_impact.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'covid19_impact')}
                        />
                        <label className="form-check-label" htmlFor={`covid19_impact_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="other_covid19_impact"> In the question above, if you selected "Other", please specify here.
                125 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="other_covid19_impact"
                    name="other_covid19_impact"
                    value={formData.other_covid19_impact}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>During the last year, what support or resource made a critical difference for your company / idea / business? Check all that apply.</label>
                {criticalSupportOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`critical_support_resource_${option}`}
                            value={option}
                            checked={formData.critical_support_resource.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'critical_support_resource')}
                        />
                        <label className="form-check-label" htmlFor={`critical_support_resource_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label>What resource would best support your company / idea / business right now? Check all that apply.</label>
                {bestSupportOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`best_support_resource_${option}`}
                            value={option}
                            checked={formData.best_support_resource.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'best_support_resource')}
                        />
                        <label className="form-check-label" htmlFor={`best_support_resource_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="holding_back_growth_reason">Program Expectations
                    <p>If you had to pick one thing that is holding back your business from growing or succeeding, what is it and why?
*
650 characters max</p>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="program_expectations"
                    name="program_expectations"
                    value={formData.program_expectations}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="how_program_help"> Is there anything else you would like to share with us that we haven’t asked? (Optional)
                500 characters max</label>
                <input
                    type="text"
                    className="form-control"
                    id="how_program_help"
                    name="how_program_help"
                    value={formData.how_program_help}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="additional_comments">Additional Comments</label>
                <textarea
                    className="form-control"
                    id="additional_comments"
                    name="additional_comments"
                    value={formData.additional_comments}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="form-group">
                <label>Race / Ethnicity: How many members of your core team are the following race or ethnicity?</label>
                {raceEthnicityOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`race_ethnicity_${option}`}
                            value={option}
                            checked={formData.race_ethnicity.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'race_ethnicity')}
                        />
                        <label className="form-check-label" htmlFor={`race_ethnicity_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div> <div className="form-group">
                <label>Gender: How many members of your core team are the following genders?</label>
                {genderOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`gender_${option}`}
                            value={option}
                            checked={formData.gender.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'gender')}
                        />
                        <label className="form-check-label" htmlFor={`gender_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div> 
            <div className="form-group">
                <label>Additional: How many members of your core team identifies as a(n): (check all that apply)</label>
                {teamIdentifiersOptions.map((option) => (
                    <div key={option} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`team_identifiers_${option}`}
                            value={option}
                            checked={formData.team_identifiers.includes(option)}
                            onChange={(e) => handleCheckboxChange(e, 'team_identifiers')}
                        />
                        <label className="form-check-label" htmlFor={`team_identifiers_${option}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            <div className="form-group">
            <label htmlFor="if_other_team_identifiers">In the question above, if you selected "Other" please specify here</label>
                <input
                    type="text"
                    className="form-control"
                    id="if_other_team_identifiers"
                    name="if_other_team_identifiers"
                    value={formData.if_other_team_identifiers}
                    onChange={handleChange}
                    
                />
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
    </div>
    );
};

export default EditRound2;
