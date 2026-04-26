'use client';

const Toast = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="toast" style={{
      position: 'fixed',
      bottom: 'var(--space-lg)',
      right: 'var(--space-lg)',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: 'var(--space-md) var(--space-lg)',
      borderRadius: 'var(--radius-card)',
      fontSize: '0.95rem',
      zIndex: '2000',
      animation: 'slideIn 0.3s ease',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {message}
    </div>
  );
};

export default Toast;
