import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }

    setError('');
    axios.post("http://localhost:3001/register", {
      name: name,
      password:password,
      phone:phone,
      address:address,
      email:email
    })
      .then(result => {
        console.log(result);
        navigate('/dashboard');
      })
      .catch(err => {
        console.log(err);
        setError('An error occurred while registering. Please try again later.');
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffffff, #8c6bff)',
        fontFamily: 'Arial, sans-serif',
        color: '#4a4a4a',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '3rem',
            marginBottom: '2rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            color: '#8c6bff',
          }}
        >
          Registration Form
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              filter: 'blur(10px)',
            }}
          />
        </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '8px',
              border: 'none',
              marginBottom: '16px',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
              color: '#4a4a4a',
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '14px 24px',
              fontWeight: 'bold',
              fontSize: '1rem',
              backgroundColor: '#8c6bff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            }}
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
