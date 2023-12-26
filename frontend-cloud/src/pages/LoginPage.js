import React, { useState } from 'react';

const LoginPage = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: Email, password }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.userId);

      // Set success message
      setMessage('You are logged in successfully');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Login Page</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={Email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;