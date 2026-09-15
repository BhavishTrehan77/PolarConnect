import React, { useState, useEffect, useRef } from 'react';

export default function PublicSummaryModal({ open, onClose, summary, loading, onGenerate }) {
  const dialogRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  // Handle native light dismiss
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    
    const handleCancel = (e) => {
      e.preventDefault(); // Prevent default close so we can handle it via props
      onClose();
    };
    
    const handleClick = (e) => {
      if (e.target === dialog) {
        onClose();
      }
    };
    
    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('click', handleClick);
    
    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  const handleCopy = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <dialog 
      ref={dialogRef}
      className="glass-dialog"
      style={{
        width: '100%',
        maxWidth: '650px',
      }}
    >
      <div className="stat-card-glow glass-panel animate-in" style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl), var(--glow-blue)',
        padding: '1.5rem',
        margin: '1.5rem' // Ensure it doesn't touch edges on small screens
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--polar-navy-900)' }}>
            ✨ AI Public Summary
          </h2>
          <button 
            onClick={onClose}
            style={{ 
              background: 'transparent', 
              fontSize: '1.75rem', 
              color: 'var(--text-light)',
              padding: '0 0.5rem',
              lineHeight: 1,
              borderRadius: '0.5rem',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}
          >
            &times;
          </button>
        </div>

        <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {loading ? (
            <div style={{ textAlign: 'center', color: 'var(--polar-blue-600)' }}>
              <div style={{ 
                width: '40px', height: '40px', 
                border: '3px solid var(--polar-ice-100)', 
                borderTop: '3px solid var(--polar-blue-600)',
                borderRadius: '50%', 
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem auto'
              }}></div>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
              `}} />
              <p style={{ fontWeight: 500 }}>Generating public-friendly summary with AI...</p>
            </div>
          ) : summary ? (
            <div style={{ 
              background: 'rgba(248, 250, 252, 0.8)', 
              padding: '1.25rem', 
              borderRadius: '0.75rem',
              border: '1px solid #bae6fd',
              color: 'var(--text-main)',
              lineHeight: 1.7,
              fontSize: '1.05rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
            }}>
              {summary}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '1.1rem' }}>
              Click generate to create an accessible, public-friendly summary of this scientific record.
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          {summary && !loading && (
            <button 
              onClick={handleCopy}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '0.5rem',
                background: 'var(--polar-ice-100)',
                color: 'var(--polar-blue-600)',
                fontWeight: 600,
                border: '1px solid #bae6fd',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#e0f2fe'}
              onMouseOut={(e) => e.currentTarget.style.background = 'var(--polar-ice-100)'}
            >
              {copied ? '✓ Copied!' : '📋 Copy Text'}
            </button>
          )}
          
          <button 
            onClick={onGenerate}
            disabled={loading}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '0.5rem',
              background: 'linear-gradient(135deg, var(--polar-blue-600), var(--polar-teal-400))',
              color: 'white',
              fontWeight: 600,
              boxShadow: 'var(--shadow-md)',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
            onMouseOver={(e) => {
              if(!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }
            }}
            onMouseOut={(e) => {
              if(!loading) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }
            }}
          >
            {summary ? '🔄 Regenerate' : '✨ Generate Public Summary'}
          </button>
        </div>
      </div>
    </dialog>
  );
}
