import React, { useState, useEffect } from 'react';

export default function InteractiveDrill({ drill, dayId, onDrillSuccess }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Reset drill states if day changes
  useEffect(() => {
    setSelectedOption(null);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  }, [dayId]);

  const handleSubmit = (option) => {
    setSelectedOption(option);
    setSubmitted(true);
    if (option === drill.answer) {
      setIsCorrect(true);
      onDrillSuccess();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="drill-card glass fade-in">
      <div className="drill-header">
        <span className="drill-badge">Interactive Drill</span>
        <h4>Day {dayId} Quick Check</h4>
      </div>

      <div className="drill-question">
        <p>{drill.question}</p>
      </div>

      {/* Choice Grid */}
      <div className="choices-list">
        {drill.choices.map((choice, i) => {
          let choiceClass = '';
          if (submitted) {
            if (choice === drill.answer) {
              choiceClass = 'correct-choice';
            } else if (selectedOption === choice) {
              choiceClass = 'wrong-choice';
            } else {
              choiceClass = 'disabled-choice';
            }
          } else {
            choiceClass = selectedOption === choice ? 'selected-choice' : '';
          }

          return (
            <button
              key={i}
              className={`choice-item ${choiceClass}`}
              onClick={() => !submitted && setSelectedOption(choice)}
              disabled={submitted}
            >
              <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
              <span className="choice-text">{choice}</span>
            </button>
          );
        })}
      </div>

      {/* Action Row */}
      <div className="drill-actions">
        {!submitted ? (
          <>
            <button 
              className="hint-btn" 
              onClick={() => setShowHint(!showHint)}
            >
              {showHint ? 'Hide Hint' : 'Show Hint 💡'}
            </button>
            <button 
              className="submit-btn" 
              disabled={!selectedOption}
              onClick={() => handleSubmit(selectedOption)}
            >
              Submit Answer
            </button>
          </>
        ) : (
          <div className="feedback-message-row">
            {isCorrect ? (
              <div className="alert-success-box">
                <span className="alert-icon">🎉</span>
                <div>
                  <strong>सही जवाब! (Excellent Job!)</strong>
                  <p>You have mastered this concept. Let's practice speaking now!</p>
                </div>
              </div>
            ) : (
              <div className="alert-error-box">
                <span className="alert-icon">❌</span>
                <div>
                  <strong>Oops, Incorrect!</strong>
                  <p>No worries, review the hint and try again!</p>
                  <button className="retry-btn" onClick={() => setSubmitted(false)}>Try Again</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showHint && (
        <div className="hint-card-box slide-up">
          <strong>💡 Study Hint:</strong>
          <p>{drill.hint}</p>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .drill-card {
          margin-top: 2rem;
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          box-shadow: var(--card-shadow);
        }
        
        .drill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .drill-badge {
          background-color: var(--color-secondary-light);
          color: var(--color-secondary);
          font-weight: 700;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 12px;
          border: 1px solid var(--color-secondary);
        }
        
        .drill-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        
        .drill-question p {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }
        
        /* Choices List */
        .choices-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 1.25rem;
        }
        
        .choice-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1.5px solid var(--border-color);
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          text-align: left;
          width: 100%;
          font-family: var(--font-sans);
          transition: var(--transition-smooth);
        }
        
        .choice-item:hover:not(:disabled) {
          border-color: var(--color-primary);
          background-color: var(--bg-secondary);
        }
        
        .choice-letter {
          width: 24px;
          height: 24px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        
        .choice-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        
        /* Choice State Stylings */
        .choice-item.selected-choice {
          border-color: var(--color-primary);
          background-color: var(--color-primary-light);
        }
        
        .choice-item.selected-choice .choice-letter {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
        
        .choice-item.selected-choice .choice-text {
          color: var(--text-primary);
        }
        
        .choice-item.correct-choice {
          border-color: var(--color-accent);
          background-color: var(--color-accent-light);
        }
        
        .choice-item.correct-choice .choice-letter {
          background-color: var(--color-accent);
          color: white;
          border-color: var(--color-accent);
        }
        
        .choice-item.correct-choice .choice-text {
          color: var(--text-primary);
        }
        
        .choice-item.wrong-choice {
          border-color: #ef4444;
          background-color: #fef2f2;
        }
        
        .choice-item.wrong-choice .choice-letter {
          background-color: #ef4444;
          color: white;
          border-color: #ef4444;
        }
        
        .choice-item.wrong-choice .choice-text {
          color: #ef4444;
        }
        
        .choice-item.disabled-choice {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Actions */
        .drill-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        
        .hint-btn {
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.8rem;
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .hint-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
        }
        
        .submit-btn {
          background-color: var(--color-primary);
          color: white;
          border: none;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 9px 20px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .submit-btn:hover:not(:disabled) {
          background-color: var(--color-primary-hover);
        }
        
        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Feedback Box Alert */
        .feedback-message-row {
          width: 100%;
        }
        
        .alert-success-box, .alert-error-box {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--border-radius-sm);
          align-items: center;
          width: 100%;
        }
        
        .alert-success-box {
          background-color: var(--color-accent-light);
          border: 1px solid var(--color-accent);
          color: var(--text-primary);
        }
        
        .alert-error-box {
          background-color: #fef2f2;
          border: 1px solid #ef4444;
          color: #b91c1c;
          justify-content: space-between;
        }
        
        .alert-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .alert-success-box strong, .alert-error-box strong {
          font-size: 0.85rem;
          display: block;
        }
        
        .alert-success-box p, .alert-error-box p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        
        .retry-btn {
          background-color: #ef4444;
          color: white;
          border: none;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 6px;
        }
        
        .hint-card-box {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 12px;
          margin-top: 12px;
        }
        
        .hint-card-box strong {
          font-size: 0.75rem;
          display: block;
          color: var(--text-primary);
        }
        
        .hint-card-box p {
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
      `}} />
    </div>
  );
}
