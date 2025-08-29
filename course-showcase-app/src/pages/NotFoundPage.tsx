import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0', color: 'var(--text-muted)' }}>404</h1>
        <h2 style={{ margin: '0 0 1rem 0' }}>Page Not Found</h2>
        <p style={{ 
          fontSize: 'var(--font-size-lg)', 
          color: 'var(--text-secondary)', 
          marginBottom: '2rem',
          maxWidth: '500px'
        }}>
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;