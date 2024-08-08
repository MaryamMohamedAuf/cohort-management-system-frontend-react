import React, { useState } from 'react';
import axiosInstance from './axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const CreateComment = () => {
  const { applicant_id, round_id, round_type } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [decision, setDecision] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        feedback,
        decision,
      };

      await axiosInstance.post(`/comments/${applicant_id}/${round_id}/${round_type}`, data);
      navigate(`/comments/${applicant_id}`);
    } catch (error) {
      setMessage('Error submitting feedback');
    }
  };

  return (
    <div className="container mt-20">
      <h2>Provide Feedback</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            className="form-control"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="decision">Decision</label>
          <select
            className="form-control"
            id="decision"
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
          >
            <option value="">Select Decision</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <button type="submit" className="btn btn-secondary mt-2">Submit Feedback</button>
      </form>
    </div>
  );
};

export default CreateComment;
