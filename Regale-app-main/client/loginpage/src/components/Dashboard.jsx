import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      // Optionally, fetch user data if necessary
      // Example: axios.get('your-api-endpoint', { headers: { Authorization: `Bearer ${token}` } })
      setUserData({ email: 'user@example.com' }); // Replace with real user data
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to your Dashboard!</h2>
      <p>Email: {userData?.email}</p>
      <button onClick={() => localStorage.removeItem('token')}>Log Out</button>
    </div>
  );
};

export default Dashboard;
