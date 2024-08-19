import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 


const CreateRound3 = () => {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [finalDecision, setFinalDecision] = useState(false);
  const [recordedMeetingLink, setRecordedMeetingLink] = useState('');
  const [cohortId, setCohortId] = useState(null);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const response = await axiosInstance.get('/applicants');
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };

  const handleApplicantChange = (selectedOption) => {
    setSelectedApplicant(selectedOption);
  };

  const handleDecisionChange = (e) => {
    setFinalDecision(e.target.value === 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        applicant_id: selectedApplicant.value,
        final_decision: finalDecision,
        recorded_meeting_link: recordedMeetingLink,
        
      };
      
      const response = await axiosInstance.post('round3', requestData)
      .then(response => {
        console.log('Data saved successfully:', response.data);
        console.log('API Response:', response.data);

        const newCohortId = response.data?.round3?.cohort_id;
        
        if (newCohortId) {
            navigate(`/round3/${newCohortId}`); 
        } else {
            console.error('Cohort ID is missing in the response');
        }

    })
     
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
  const applicantOptions = applicants.map(applicant => ({
    value: applicant.id,
    label: applicant.company_name,
  }));

  return (
    <div className="container mt-5">

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="applicant">Applicant Company Name</label>
        <Select
          id="applicant"
          options={applicantOptions}
          onChange={handleApplicantChange}
          isSearchable
        />
      </div>
      <div className="form-group">
        <label>Final Decision</label>
        <div>
          <input
            type="radio"
            id="accepted"
            name="finalDecision"
            value={true}
            checked={finalDecision === true}
            onChange={handleDecisionChange}
          />
          <label htmlFor="accepted">Accepted</label>
        </div>
        <div>
          <input
            type="radio"
            id="rejected"
            name="finalDecision"
            value={false}
            checked={finalDecision === false}
            onChange={handleDecisionChange}
          />
          <label htmlFor="rejected">Rejected</label>
        </div>
        </div> 

      <div className="form-group">
        <label htmlFor="recordedMeetingLink">Recorded Meeting Link</label>
        <input
          type="text"
          id="recordedMeetingLink"
          value={recordedMeetingLink}
          onChange={(e) => setRecordedMeetingLink(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-secondary m-3">Submit</button>
    </form>

    </div>
  );
};

export default CreateRound3;
