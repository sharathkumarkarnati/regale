import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FormStyles.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://regaleappmain.onrender.com/api/auth/register', { email, password });
      setError('');
      alert('Registration successful, you can now log in!');
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-input">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email"
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default Register;
