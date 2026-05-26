import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reader from './components/Reader';
import IndianEnglishChecker from './components/IndianEnglishChecker';
import FlashcardDeck from './components/FlashcardDeck';
import ReferenceResources from './components/ReferenceResources';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [activeDay, setActiveDay] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Theme state: light, dark, or sepia
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('curriculum-theme') || 'light';
  });

  // Completed Days state (localStorage)
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('curriculum-completed-days');
    return saved ? JSON.parse(saved) : [];
  });

  // Completed Challenges state (Days 31-60)
  const [completedChallenges, setCompletedChallenges] = useState(() => {
    const saved = localStorage.getItem('curriculum-completed-challenges');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync theme to root HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('curriculum-theme', theme);
  }, [theme]);

  // Sync completed days to local storage
  useEffect(() => {
    localStorage.setItem('curriculum-completed-days', JSON.stringify(completedDays));
  }, [completedDays]);

  // Sync completed challenges to local storage
  useEffect(() => {
    localStorage.setItem('curriculum-completed-challenges', JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  const toggleDayCompleted = (day) => {
    setCompletedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const toggleChallengeCompleted = (day) => {
    setCompletedChallenges(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <Dashboard
            setActiveView={setActiveView}
            setActiveDay={setActiveDay}
            completedDays={completedDays}
            toggleDayCompleted={toggleDayCompleted}
            completedChallenges={completedChallenges}
            toggleChallengeCompleted={toggleChallengeCompleted}
          />
        );
      case 'reader':
        return (
          <Reader
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            completedDays={completedDays}
            toggleDayCompleted={toggleDayCompleted}
          />
        );
      case 'checker':
        return <IndianEnglishChecker />;
      case 'flashcards':
        return <FlashcardDeck />;
      case 'resources':
        return <ReferenceResources />;
      default:
        return (
          <Dashboard
            setActiveView={setActiveView}
            setActiveDay={setActiveDay}
            completedDays={completedDays}
            toggleDayCompleted={toggleDayCompleted}
            completedChallenges={completedChallenges}
            toggleChallengeCompleted={toggleChallengeCompleted}
          />
        );
    }
  };

  return (
    <div className="vp-layout-root">
      {/* VitePress Styled Global Header Bar */}
      <header className="vp-navbar">
        {/* Brand Logo & Name */}
        <div className="vp-nav-brand" onClick={() => { setActiveView('dashboard'); setSidebarOpen(false); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="12" x2="19" y2="8" />
            <line x1="12" y1="12" x2="20" y2="13" />
            <line x1="12" y1="12" x2="16.5" y2="19" />
            <line x1="12" y1="12" x2="7.5" y2="19" />
            <line x1="12" y1="12" x2="4" y2="13" />
            <line x1="12" y1="12" x2="8" y2="4" />
          </svg>
          <h2>Learn Practical English</h2>
        </div>

        {/* Global Navigation Links */}
        <nav className="vp-nav-menu">
          {/* Mobile hamburger menu indicator */}
          <button className="vp-hamburger-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>

          <button 
            className={`vp-nav-link ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`vp-nav-link ${activeView === 'reader' ? 'active' : ''}`}
            onClick={() => { setActiveView('reader'); setActiveDay(1); }}
          >
            Lessons
          </button>
          <button 
            className={`vp-nav-link ${activeView === 'checker' ? 'active' : ''}`}
            onClick={() => setActiveView('checker')}
          >
            Checker
          </button>
          <button 
            className={`vp-nav-link ${activeView === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveView('flashcards')}
          >
            Flashcards
          </button>
          <button 
            className={`vp-nav-link ${activeView === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveView('resources')}
          >
            Resources
          </button>

          <ThemeSelector theme={theme} setTheme={setTheme} />
        </nav>
      </header>

      {/* Main Core Layout Grid */}
      <div className="vp-app-layout">
        {/* Left Drawer Navigation */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          completedDays={completedDays}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Central Article Container */}
        <div className="vp-content-wrapper">
          <div className="vp-article-container">
            {renderActiveView()}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .vp-layout-root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .vp-hamburger-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 960px) {
          .vp-hamburger-toggle {
            display: block;
          }
          .vp-nav-link {
            display: none;
          }
        }
      `}} />
    </div>
  );
}
