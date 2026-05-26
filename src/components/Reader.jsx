import React, { useState } from 'react';
import { curriculumDays } from '../data/curriculumData';
import InteractiveDrill from './InteractiveDrill';

export default function Reader({
  activeDay,
  setActiveDay,
  completedDays,
  toggleDayCompleted
}) {
  const dayData = curriculumDays.find(d => d.day === activeDay);

  if (!dayData) {
    return (
      <div className="vp-doc">
        <h2>Lesson Not Found</h2>
        <p>This day's detailed course content is still being generated. Please browse Phase 1 (Days 1–15).</p>
      </div>
    );
  }

  const isCompleted = completedDays.includes(activeDay);

  const prevDayData = activeDay > 1 ? curriculumDays.find(d => d.day === activeDay - 1) : null;
  const nextDayData = activeDay < 15 ? curriculumDays.find(d => d.day === activeDay + 1) : null;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="vp-reader-layout">
      {/* Central Article Column */}
      <article className="vp-doc vp-article-content">
        <header className="vp-doc-header">
          <div className="vp-doc-meta">Phase 1 • Day {activeDay} of 15</div>
          <h1 id="lesson-top">{dayData.title} <span className="vp-title-hindi">({dayData.hindiTitle})</span></h1>
          <p className="vp-focus-lead"><strong>Focus:</strong> {dayData.focus}</p>
        </header>

        {/* Brand Quote (VitePress Callout style) */}
        {dayData.quote && (
          <blockquote className="vp-quote-box">
            <p>"{dayData.quote}"</p>
          </blockquote>
        )}

        {/* 1. Theory Concept */}
        <h2 id="grammar-concept">📘 व्याकरण का नियम (Grammar Concept)</h2>
        {dayData.theory.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* 2. Formula */}
        {dayData.formula && (
          <div id="formula-section">
            <h2 id="sentence-formula">💡 वाक्य बनाने का सूत्र (Golden Formula)</h2>
            <div className="vp-formula-block">
              <code>{dayData.formula}</code>
            </div>
          </div>
        )}

        {/* 3. Examples Table */}
        <h2 id="examples-table">📖 उदाहरण (Examples)</h2>
        <div className="vp-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Hindi Sentence</th>
                <th>English Translation</th>
              </tr>
            </thead>
            <tbody>
              {dayData.examples.map((ex, idx) => (
                <tr key={idx}>
                  <td className="vp-hindi-cell">{ex.hindi}</td>
                  <td className="vp-english-cell"><strong>{ex.english}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Interactive Quiz Check */}
        {dayData.drill && (
          <div id="quiz-section" style={{ marginTop: '2.5rem' }}>
            <h2 id="interactive-drill">📝 Quick Check Drill</h2>
            <InteractiveDrill
              drill={dayData.drill}
              dayId={activeDay}
              onDrillSuccess={() => {
                if (!isCompleted) toggleDayCompleted(activeDay);
              }}
            />
          </div>
        )}

        {/* 5. Speaking Practice */}
        {dayData.speakingTask && (
          <div id="speaking-section" style={{ marginTop: '2.5rem' }}>
            <h2 id="speaking-drill">🗣️ बोलचाल अभ्यास (Speaking Task)</h2>
            <div className="vp-custom-block warning">
              <h4>Active Speaking Prompt:</h4>
              <p style={{ fontWeight: 600, fontSize: '1rem', marginTop: '4px' }}>
                {dayData.speakingTask}
              </p>
              <div className="speaking-helper-tip">
                Open a voice recording app. Speak clearly and open your mouth fully. Re-record 3 times!
              </div>
            </div>
          </div>
        )}

        {/* Mark completed checkbox */}
        <div className="vp-complete-toggle-row">
          <button
            className={`vp-comp-check-btn ${isCompleted ? 'done' : ''}`}
            onClick={() => toggleDayCompleted(activeDay)}
          >
            <span className="check-box-square">{isCompleted ? '✓' : ''}</span>
            <span>{isCompleted ? 'Completed Day Lesson!' : 'Mark Day as Completed'}</span>
          </button>
        </div>

        {/* VitePress Bottom Document Pager */}
        <nav className="vp-pager">
          {prevDayData ? (
            <button className="vp-pager-link prev" onClick={() => setActiveDay(activeDay - 1)}>
              <span className="vp-pager-desc">Previous Day</span>
              <span className="vp-pager-title">Day {prevDayData.day}: {prevDayData.title}</span>
            </button>
          ) : (
            <div style={{ flex: 1 }}></div>
          )}

          {nextDayData ? (
            <button className="vp-pager-link next" onClick={() => setActiveDay(activeDay + 1)}>
              <span className="vp-pager-desc">Next Day</span>
              <span className="vp-pager-title">Day {nextDayData.day}: {nextDayData.title}</span>
            </button>
          ) : (
            <div style={{ flex: 1 }}></div>
          )}
        </nav>
      </article>

      {/* Right "On This Page" Aside outline */}
      <aside className="vp-outline-aside">
        <span className="outline-heading">ON THIS PAGE</span>
        <button className="outline-anchor-btn" onClick={() => scrollToSection('grammar-concept')}>
          📘 Grammar Concept
        </button>
        {dayData.formula && (
          <button className="outline-anchor-btn" onClick={() => scrollToSection('sentence-formula')}>
            💡 Golden Formula
          </button>
        )}
        <button className="outline-anchor-btn" onClick={() => scrollToSection('examples-table')}>
          📖 Examples List
        </button>
        {dayData.drill && (
          <button className="outline-anchor-btn" onClick={() => scrollToSection('interactive-drill')}>
            📝 Quick Check Drill
          </button>
        )}
        {dayData.speakingTask && (
          <button className="outline-anchor-btn" onClick={() => scrollToSection('speaking-drill')}>
            🗣️ Speaking Drill
          </button>
        )}
        <button className="outline-anchor-btn outline-back-top" onClick={() => scrollToSection('lesson-top')}>
          ↑ Back to top
        </button>
      </aside>

      <style dangerouslySetInnerHTML={{__html: `
        .vp-reader-layout {
          display: flex;
          justify-content: space-between;
          width: 100%;
          gap: 2.5rem;
        }
        
        .vp-article-content {
          flex: 1;
          max-width: 740px;
        }
        
        .vp-doc-header {
          margin-bottom: 2rem;
        }
        
        .vp-doc-meta {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .vp-title-hindi {
          font-size: 1.45rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        .vp-focus-lead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-top: 8px;
        }
        
        .vp-quote-box {
          background-color: var(--bg-tertiary);
          border-left: 4px solid var(--color-primary);
          padding: 1rem 1.25rem;
          border-radius: var(--border-radius-sm);
          font-style: italic;
          margin-bottom: 2.5rem;
        }
        
        .vp-quote-box p {
          margin: 0 !important;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        
        .vp-formula-block {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 12px 20px;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .vp-formula-block code {
          font-family: Courier, monospace;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.02em;
        }
        
        /* Examples tables styling */
        .vp-table-wrap {
          width: 100%;
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          margin-bottom: 1.5rem;
        }
        
        .vp-table-wrap table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        
        .vp-table-wrap th {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .vp-table-wrap td {
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.9rem;
        }
        
        .vp-table-wrap tr:last-child td {
          border-bottom: none;
        }
        
        .vp-hindi-cell {
          color: var(--text-secondary);
          width: 50%;
        }
        
        .vp-english-cell {
          color: var(--color-primary);
        }
        
        .speaking-helper-tip {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 6px;
        }
        
        /* Checkbox btn */
        .vp-complete-toggle-row {
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
        }
        
        .vp-comp-check-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid var(--border-color);
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .vp-comp-check-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        
        .vp-comp-check-btn.done {
          border-color: var(--color-accent);
          background-color: var(--color-accent-light);
          color: var(--color-accent);
        }
        
        .check-box-square {
          width: 16px;
          height: 16px;
          border: 1.5px solid var(--text-muted);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
        }
        
        .vp-comp-check-btn.done .check-box-square {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          color: white;
        }
        
        /* Outline aside buttons */
        .vp-outline-aside .outline-heading {
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .outline-anchor-btn {
          border: none;
          background: transparent;
          text-align: left;
          font-size: 0.72rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 2px 0;
          font-family: var(--font-sans);
        }
        
        .outline-anchor-btn:hover {
          color: var(--color-primary);
        }
        
        .outline-back-top {
          margin-top: 1rem;
          color: var(--text-muted);
          font-weight: 600;
          border-top: 1px solid var(--border-color);
          padding-top: 6px;
        }
        
        /* Pager styled as buttons */
        .vp-pager-link {
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          cursor: pointer;
        }
      `}} />
    </div>
  );
}
