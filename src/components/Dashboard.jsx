import React, { useState } from 'react';
import { curriculumPhases, flexibleSchedules, fortyFiveDaysCalendar } from '../data/curriculumData';

export default function Dashboard({
  setActiveView,
  setActiveDay,
  completedDays,
  toggleDayCompleted,
  completedChallenges,
  toggleChallengeCompleted
}) {
  const [selectedChallengeDay, setSelectedChallengeDay] = useState(null);

  const totalCompleted = completedDays.length;
  const totalChallengesCompleted = completedChallenges.length;
  const totalCombinedProgress = totalCompleted + totalChallengesCompleted;
  const totalCombinedDays = 60;
  const overallPercentage = Math.round((totalCombinedProgress / totalCombinedDays) * 100);

  return (
    <div className="vp-doc slide-up">
      {/* VitePress Styled Hero Banner */}
      <section className="vp-hero-section">
        <span className="vp-hero-badge">Curriculum Version 1.1</span>
        <h1 className="vp-hero-headline">Learn Practical English</h1>
        <p className="vp-hero-lead">A comprehensive 60-day interactive e-book remapping English grammar directly to Hindi sentence logic. Perfect for professional office communication.</p>
        
        <div className="vp-hero-actions">
          <button className="vp-action-btn primary" onClick={() => { setActiveView('reader'); setActiveDay(1); }}>
            Start Day 1 Lesson
          </button>
          <button className="vp-action-btn secondary" onClick={() => setActiveView('checker')}>
            Browse Common Mistakes
          </button>
        </div>
      </section>

      {/* Progress & Stat Cards (VitePress styled) */}
      <h2 id="study-progress">Overall Study Progress</h2>
      <div className="vp-card-grid">
        <div className="vp-card">
          <h3>📊 {overallPercentage}% Completed</h3>
          <p>Your combined progress across grammar lessons and speaking fluency challenges.</p>
        </div>
        <div className="vp-card">
          <h3>📘 {totalCompleted} / 15 Lessons</h3>
          <p>Phase 1 Foundation lessons covering S+V+O, tenses, modals, and rules.</p>
        </div>
        <div className="vp-card">
          <h3>🗣️ {totalChallengesCompleted} / 30 Challenges</h3>
          <p>Phase 2–4 speaking prompts to overcome hesitation and build fluency.</p>
        </div>
      </div>

      {/* Grid: Course Phases & Timetable */}
      <div className="vp-dash-columns">
        {/* Left: Phases */}
        <div className="vp-dash-col-left">
          <h2 id="course-phases">Course Phases</h2>
          <div className="vp-phases-list">
            {curriculumPhases.map((phase) => {
              const phaseDayLimit = phase.id === 1 ? 15 : 0;
              const completedInPhase = completedDays.filter(d => {
                if (phase.id === 1) return d <= 15;
                return false;
              }).length;
              const isP1 = phase.id === 1;

              return (
                <div key={phase.id} className="vp-phase-card">
                  <div className="vp-phase-card-top">
                    <div>
                      <span className="vp-phase-tag">{phase.days}</span>
                      <h4>{phase.title}</h4>
                      <p className="vp-phase-hindi">{phase.hindi}</p>
                    </div>
                    {isP1 && (
                      <span className="vp-phase-pcent">{Math.round((completedInPhase / 15) * 100)}%</span>
                    )}
                  </div>
                  <p className="vp-phase-focus">{phase.focus}</p>
                  {isP1 ? (
                    <button 
                      className="vp-phase-btn"
                      onClick={() => { setActiveView('reader'); setActiveDay(1); }}
                    >
                      Enter Foundation Plan →
                    </button>
                  ) : (
                    <div className="vp-phase-notice">Mapped in the 30-Day challenge below</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Daily Timetable (Styled as VitePress custom blocks) */}
        <div className="vp-dash-col-right">
          <h2 id="study-routine">Daily 2.5-Hour Routine</h2>
          <div className="vp-custom-block tip">
            <h4>🌅 Morning (30 min) — Active Listening</h4>
            <p>Watch 1 English video with subtitles. Note down 3 new phrases in your logbook.</p>
          </div>
          <div className="vp-custom-block info">
            <h4>☀️ Midday (30 min) — Vocabulary & Reading</h4>
            <p>Read 1 short article. Review vocabulary layers using Flashcards.</p>
          </div>
          <div className="vp-custom-block warning">
            <h4>🌆 Evening (45 min) — Speaking Drills</h4>
            <p>Repeat lesson structures. Speak out loud and record your pronunciation.</p>
          </div>
          <div className="vp-custom-block info" style={{ borderLeftColor: 'var(--color-primary)' }}>
            <h4>🌙 Night (30 min) — Writing Practice</h4>
            <p>Draft 5–10 sentences or copy-paste office email templates to practice.</p>
          </div>
        </div>
      </div>

      {/* 30-Day Fluency Challenge */}
      <h2 id="fluency-challenge">Days 31–60: Speaking & Fluency Challenge</h2>
      <p className="vp-section-intro-text">Select a challenge day below. Practice explaining the prompts out loud for at least two minutes to build absolute fluency.</p>
      
      <div className="vp-challenge-cards">
        {fortyFiveDaysCalendar.map((item) => {
          const isDone = completedChallenges.includes(item.day);
          return (
            <button
              key={item.day}
              className={`vp-challenge-block ${isDone ? 'done' : ''}`}
              onClick={() => setSelectedChallengeDay(item)}
            >
              <div className="vp-ch-header">
                <strong>Day {item.day}</strong>
                <span>{isDone ? '✓ Completed' : 'Start'}</span>
              </div>
              <p className="vp-ch-body">{item.challenge}</p>
            </button>
          );
        })}
      </div>

      {/* Challenge Modal */}
      {selectedChallengeDay && (
        <div className="vp-modal-backdrop" onClick={() => setSelectedChallengeDay(null)}>
          <div className="vp-modal glass slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="vp-modal-header">
              <h3>Day {selectedChallengeDay.day} Conversation Challenge</h3>
              <button className="vp-modal-close" onClick={() => setSelectedChallengeDay(null)}>×</button>
            </div>
            <div className="vp-modal-body">
              <div className="vp-custom-block info">
                <h4>🎙️ Today's Task:</h4>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: '5px' }}>
                  "{selectedChallengeDay.challenge}"
                </p>
              </div>

              <div className="vp-modal-instructions">
                <h5>💡 Instructions:</h5>
                <ul>
                  <li>Open a voice memo app on your phone.</li>
                  <li>Speak continuously about this topic for at least **2 minutes**.</li>
                  <li>Focus on correct sentence structure (Subject + Verb + Object).</li>
                  <li>Listen back, correct grammar errors, and try again!</li>
                </ul>
              </div>

              <button
                className={`vp-modal-submit-btn ${completedChallenges.includes(selectedChallengeDay.day) ? 'done' : ''}`}
                onClick={() => {
                  toggleChallengeCompleted(selectedChallengeDay.day);
                }}
              >
                {completedChallenges.includes(selectedChallengeDay.day) ? '✓ Completed (Click to Undo)' : 'Mark Challenge Completed'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        /* Hero Banner styles */
        .vp-hero-section {
          text-align: center;
          padding: 3rem 0;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .vp-hero-badge {
          display: inline-block;
          font-size: 0.72rem;
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          padding: 3px 10px;
          border-radius: 12px;
          font-weight: 700;
          border: 1px solid var(--color-primary);
          margin-bottom: 12px;
        }
        
        .vp-hero-headline {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }
        
        .vp-hero-lead {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 1.5rem auto;
          line-height: 1.5;
        }
        
        .vp-hero-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .vp-action-btn {
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .vp-action-btn.primary {
          background-color: var(--color-primary);
          color: white;
          border: none;
        }
        
        .vp-action-btn.primary:hover {
          background-color: var(--color-primary-hover);
        }
        
        .vp-action-btn.secondary {
          border: 1px solid var(--border-color);
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }
        
        .vp-action-btn.secondary:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        
        /* Dash Columns Layout */
        .vp-dash-columns {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
          margin-bottom: 2.5rem;
        }
        
        @media (max-width: 960px) {
          .vp-dash-columns {
            grid-template-columns: 1fr;
          }
        }
        
        .vp-phases-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 1rem;
        }
        
        .vp-phase-card {
          border: 1px solid var(--border-color);
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .vp-phase-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .vp-phase-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        
        .vp-phase-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        
        .vp-phase-hindi {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        
        .vp-phase-pcent {
          font-size: 0.72rem;
          background-color: var(--color-accent-light);
          color: var(--color-accent);
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: 700;
        }
        
        .vp-phase-focus {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        
        .vp-phase-btn {
          align-self: flex-start;
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .vp-phase-btn:hover {
          background-color: var(--color-primary-light);
          border-color: var(--color-primary);
        }
        
        .vp-phase-notice {
          font-size: 0.68rem;
          color: var(--text-muted);
          background-color: var(--bg-secondary);
          border: 1px dashed var(--border-color);
          padding: 6px;
          border-radius: 4px;
          text-align: center;
        }
        
        /* 30 Day Challenges */
        .vp-section-intro-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: -0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .vp-challenge-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 10px;
        }
        
        .vp-challenge-block {
          border: 1px solid var(--border-color);
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          padding: 12px;
          text-align: left;
          height: 125px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .vp-challenge-block:hover {
          border-color: var(--color-primary);
        }
        
        .vp-challenge-block.done {
          border-color: var(--color-accent);
          background-color: var(--color-accent-light);
        }
        
        .vp-ch-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
        }
        
        .vp-ch-header strong {
          color: var(--text-muted);
        }
        
        .vp-challenge-block.done .vp-ch-header strong {
          color: var(--color-accent);
        }
        
        .vp-ch-header span {
          color: var(--color-primary);
          font-weight: 600;
        }
        
        .vp-challenge-block.done .vp-ch-header span {
          color: var(--color-accent);
        }
        
        .vp-ch-body {
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0 !important;
        }

        /* Modal classes */
        .vp-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }
        
        .vp-modal {
          width: 100%;
          max-width: 480px;
          background-color: var(--bg-primary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: var(--card-shadow);
        }
        
        .vp-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
          margin-bottom: 12px;
        }
        
        .vp-modal-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
        }
        
        .vp-modal-close {
          border: none;
          background: transparent;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-muted);
        }
        
        .vp-modal-instructions {
          margin-top: 12px;
          background-color: var(--bg-secondary);
          padding: 10px 14px;
          border-radius: var(--border-radius-sm);
        }
        
        .vp-modal-instructions h5 {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }
        
        .vp-modal-instructions ul {
          list-style-type: none;
          padding-left: 0;
        }
        
        .vp-modal-instructions li {
          font-size: 0.7rem;
          color: var(--text-secondary);
          margin-bottom: 2px;
          padding-left: 8px;
          position: relative;
        }
        
        .vp-modal-instructions li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--color-primary);
        }
        
        .vp-modal-submit-btn {
          width: 100%;
          padding: 10px;
          border-radius: var(--border-radius-sm);
          border: none;
          background-color: var(--color-primary);
          color: white;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          margin-top: 16px;
          transition: var(--transition-smooth);
        }
        
        .vp-modal-submit-btn:hover {
          background-color: var(--color-primary-hover);
        }
        
        .vp-modal-submit-btn.done {
          background-color: var(--color-accent);
        }
        
        .vp-modal-submit-btn.done:hover {
          background-color: var(--color-accent-hover);
        }
      `}} />
    </div>
  );
}
