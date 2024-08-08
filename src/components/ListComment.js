import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance'; 

const ListComment = () => {
    const { id } = useParams();
  const { applicant_id } = useParams();
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        console.log('Fetching comments for applicant_id:', applicant_id);
        const response = await axiosInstance.get(`http://localhost:8000/api/comments/applicant/${id}`);
        console.log('Response data:', response.data);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setMessage('Error fetching comments');
      }
    };

    fetchComments();
  }, [applicant_id]);

  return (
    <div className="container">
      <h2>Comments for Applicant</h2>
      {message && <p>{message}</p>}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Admin Name</th>
              <th>Applicant Name</th>
              <th>Cohort</th>
              <th>Round</th>
              <th>Feedback</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {comments.length > 0 ? comments.map(comment => (
              <tr key={comment.id}>
                <td>{comment.user?.name || 'N/A'}</td>
                <td>{comment.applicant?.first_name || 'N/A'}</td>
                <td>{comment.cohort?.id || 'N/A'}</td>
                <td>
                  {comment.round1_id ? 'Round 1' : comment.round2_id ? 'Round 2' : 'Round 3'}
                </td>
                <td>{comment.feedback || 'N/A'}</td>
                <td>{comment.decision || 'N/A'}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6">No comments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListComment;
