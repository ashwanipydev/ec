import React from 'react';

export default function ThemeSelector({ theme, setTheme }) {
  const themes = [
    {
      id: 'light',
      label: 'Light',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      )
    },
    {
      id: 'dark',
      label: 'Dark',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      )
    },
    {
      id: 'sepia',
      label: 'Sepia',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10M6 10h10M6 14h10"/>
        </svg>
      )
    }
  ];

  return (
    <div className="theme-selector-container">
      {themes.map((t) => (
        <button
          key={t.id}
          className={`theme-btn ${theme === t.id ? 'active' : ''}`}
          onClick={() => setTheme(t.id)}
          title={`Switch to ${t.label} theme`}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
      
      <style dangerouslySetInnerHTML={{__html: `
        .theme-selector-container {
          display: flex;
          background-color: var(--bg-tertiary);
          padding: 4px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          gap: 2px;
        }
        
        .theme-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 16px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-family: var(--font-sans);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .theme-btn:hover {
          color: var(--text-primary);
        }
        
        .theme-btn.active {
          background-color: var(--bg-secondary);
          color: var(--color-primary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        @media (max-width: 480px) {
          .theme-btn span {
            display: none;
          }
          .theme-btn {
            padding: 8px;
          }
        }
      `}} />
    </div>
  );
}
