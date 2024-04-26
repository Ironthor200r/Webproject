import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('http://localhost:3001/', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/dashboard');
        } else {
          navigate('/dashboard');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffffff, #8c6bff)',
        fontFamily: 'Arial, sans-serif',
        color: '#4a4a4a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          filter: 'blur(100px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '100px', // Adjusted right position
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: '#8c6bff',
          filter: 'blur(10px)',
        }}
      />
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
          maxWidth: '450px',
          width: '100%',
          position: 'relative',
          zIndex: '1',
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
          Cryptogram
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '50px',
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
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{
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
            type="submit"
            disabled={loading}
            style={{
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p
          style={{
            marginTop: '1.5rem',
            color: '#4a4a4a',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          New user?{' '}
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              color: '#8c6bff',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8c6bff';
            }}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Landing;
