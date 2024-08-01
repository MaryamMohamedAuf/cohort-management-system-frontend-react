import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useParams, useNavigate } from 'react-router-dom';

import axiosInstance from './axiosInstance'; 

const EditRound3 = () => {
    //const cohortId = id;
  const { id } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [finalDecision, setFinalDecision] = useState(null);
  const [recordedMeetingLink, setRecordedMeetingLink] = useState('');
  const [cohortId, setCohortId] = useState(null);


  useEffect(() => {
    fetchApplicants();
    fetchRound3Details();
  }, []);

  const fetchApplicants = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8000/api/applicants');
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };

  const fetchRound3Details = async () => {
    try {
      const response = await axiosInstance.get(`http://localhost:8000/api/round3/${id}`);
      const round3 = response.data;
      console.log('Fetched round3 details:', round3);

      setSelectedApplicant({ value: round3.applicant_id, label: round3.applicant.company_name });
      setFinalDecision(round3.final_decision === 1);
      setRecordedMeetingLink(round3.recorded_meeting_link);
      setCohortId(round3.cohort_id); // Store cohort_id

    } catch (error) {
      console.error('Error fetching round3 details:', error);
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
      await axiosInstance.put(`http://localhost:8000/api/round3/${id}`, requestData);
      navigate(`/round3/${cohortId}`); // Navigate to round3/cohortId

    } catch (error) {
      console.error('Error updating data:', error);
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
          value={selectedApplicant}
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
            value="true"
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
            value="false"
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
      <button type="submit" className="btn btn-secondary m-3">Update</button>
    </form>
    </div>
  );
};

export default EditRound3;
