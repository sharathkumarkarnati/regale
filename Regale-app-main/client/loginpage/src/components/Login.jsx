import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './FormStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://regaleappmain.onrender.com/api/auth/login', { email, password });
      
      console.log(response.data);  
      // Store token in localStorage for future use
      localStorage.setItem('token', response.data.token);

      setError('');
      
      // After login success, redirect to the Regale Recipe app
      window.location.assign('https://regalerecipe.netlify.app'); 
      
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err);
      setError('Invalid email or password');
    }
  };


  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-input">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email(test@gmail.com)"
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password(test123)"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
