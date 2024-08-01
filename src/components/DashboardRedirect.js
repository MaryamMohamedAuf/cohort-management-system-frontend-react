import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardRedirect = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        window.location.href = 'http://localhost:8000';
    }, []);

    return (
        <div>Loading...</div>
    );
};

export default DashboardRedirect;
