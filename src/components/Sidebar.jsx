import React, { useState } from 'react';
import { curriculumPhases, curriculumDays } from '../data/curriculumData';

export default function Sidebar({
  activeView,
  setActiveView,
  activeDay,
  setActiveDay,
  completedDays,
  sidebarOpen,
  setSidebarOpen
}) {
  const [expandedPhases, setExpandedPhases] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [searchTerm, setSearchTerm] = useState('');

  const togglePhase = (id) => {
    setExpandedPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDays = curriculumDays.filter(day => {
    const combinedText = `${day.title} ${day.focus} ${day.hindiTitle}`.toLowerCase();
    return combinedText.includes(searchTerm.toLowerCase());
  });

  const completionPercentage = Math.round((completedDays.length / 60) * 100);

  return (
    <>
      {/* Backing Overlay for Mobile Drawer */}
      {sidebarOpen && <div className="vp-sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

      <aside className={`vp-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Progress Bar inside Sidebar */}
        <div className="vp-side-progress">
          <div className="vp-side-progress-label">
            <span>Progress status</span>
            <strong>{completedDays.length} / 15 Days</strong>
          </div>
          <div className="vp-side-progress-track">
            <div className="vp-side-progress-fill" style={{ width: `${(completedDays.length / 15) * 100}%` }}></div>
          </div>
        </div>

        {/* Global Shortcuts */}
        <div className="vp-side-shortcuts">
          <button 
            className={`vp-side-shortcut-btn ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setActiveView('dashboard'); setSidebarOpen(false); }}
          >
            📊 Dashboard Overview
          </button>
          <button 
            className={`vp-side-shortcut-btn ${activeView === 'checker' ? 'active' : ''}`}
            onClick={() => { setActiveView('checker'); setSidebarOpen(false); }}
          >
            🔍 Indian English Checker
          </button>
          <button 
            className={`vp-side-shortcut-btn ${activeView === 'flashcards' ? 'active' : ''}`}
            onClick={() => { setActiveView('flashcards'); setSidebarOpen(false); }}
          >
            🎴 Vocabulary Flashcards
          </button>
          <button 
            className={`vp-side-shortcut-btn ${activeView === 'resources' ? 'active' : ''}`}
            onClick={() => { setActiveView('resources'); setSidebarOpen(false); }}
          >
            📚 Reference Resources
          </button>
        </div>

        {/* Search bar inside Sidebar */}
        <div className="vp-side-search">
          <input 
            type="text" 
            placeholder="Quick search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Accordion Lesson Tree (VitePress style groups) */}
        <nav className="vp-side-nav">
          {curriculumPhases.map((phase) => {
            const phaseDays = filteredDays.filter(d => d.phase === phase.id);
            if (phaseDays.length === 0 && searchTerm) return null;

            const isExpanded = expandedPhases[phase.id];

            return (
              <div key={phase.id} className="vp-side-group">
                <button 
                  className={`vp-side-group-header ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => togglePhase(phase.id)}
                >
                  <span className="vp-side-group-title">{phase.title}</span>
                  <span className="vp-side-group-caret">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </button>

                {isExpanded && (
                  <div className="vp-side-group-items">
                    {phaseDays.map((day) => {
                      const isActive = activeView === 'reader' && activeDay === day.day;
                      const isDone = completedDays.includes(day.day);

                      return (
                        <div key={day.day} className={`vp-side-item-wrapper ${isActive ? 'active' : ''}`}>
                          <button
                            className="vp-side-item-link"
                            onClick={() => {
                              setActiveView('reader');
                              setActiveDay(day.day);
                              setSidebarOpen(false);
                            }}
                          >
                            <span className="vp-side-item-checkbox">
                              {isDone ? '✓' : '○'}
                            </span>
                            <span className="vp-side-item-text">Day {day.day}: {day.title}</span>
                          </button>
                        </div>
                      );
                    })}

                    {phase.id > 1 && (
                      <div className="vp-phase-locked-notice">
                        🔒 Mapped under your Dashboard's 30-Day Fluency Challenge!
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      <style dangerouslySetInnerHTML={{__html: `
        /* Sidebar styling additions */
        .vp-sidebar-overlay {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 95;
          animation: fadeIn 0.2s ease-out;
        }

        .vp-side-progress {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 10px 12px;
          margin-bottom: 1.25rem;
        }
        
        .vp-side-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .vp-side-progress-track {
          height: 4px;
          background-color: var(--border-color);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .vp-side-progress-fill {
          height: 100%;
          background-color: var(--color-primary);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .vp-side-shortcuts {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 1.25rem;
        }
        
        .vp-side-shortcut-btn {
          width: 100%;
          text-align: left;
          padding: 8px 12px;
          border-radius: var(--border-radius-sm);
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .vp-side-shortcut-btn:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }
        
        .vp-side-shortcut-btn.active {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          border-color: var(--color-primary-light);
          font-weight: 600;
        }
        
        .vp-side-search {
          margin-bottom: 1.5rem;
        }
        
        .vp-side-search input {
          width: 100%;
          border: 1px solid var(--border-color);
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          padding: 6px 12px;
          font-size: 0.78rem;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-smooth);
        }
        
        .vp-side-search input:focus {
          border-color: var(--color-primary);
          background-color: var(--bg-primary);
        }
        
        .vp-side-nav {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .vp-side-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .vp-side-group-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 4px 0;
          text-align: left;
        }
        
        .vp-side-group-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .vp-side-group-caret {
          color: var(--text-muted);
          transition: transform 0.2s ease;
          display: flex;
        }
        
        .vp-side-group-header.expanded .vp-side-group-caret {
          transform: rotate(90deg);
        }
        
        .vp-side-group-items {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-left: 2px;
          margin-top: 4px;
          border-left: 1px solid var(--border-color);
        }
        
        .vp-side-item-wrapper {
          position: relative;
        }
        
        .vp-side-item-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-sans);
          transition: var(--transition-smooth);
        }
        
        .vp-side-item-checkbox {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          flex-shrink: 0;
        }
        
        .vp-side-item-text {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .vp-side-item-wrapper:hover .vp-side-item-text {
          color: var(--text-primary);
        }
        
        .vp-side-item-wrapper.active {
          background-color: var(--sidebar-active-bg);
          border-left: 1.5px solid var(--color-primary);
          margin-left: -1px;
        }
        
        .vp-side-item-wrapper.active .vp-side-item-text {
          color: var(--color-primary);
          font-weight: 600;
        }
        
        .vp-side-item-wrapper.active .vp-side-item-checkbox {
          color: var(--color-primary);
        }
        
        .vp-phase-locked-notice {
          padding: 8px 10px;
          font-size: 0.68rem;
          color: var(--text-muted);
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          margin-top: 4px;
          line-height: 1.3;
        }
      `}} />
    </>
  );
}
