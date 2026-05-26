import React, { useState, useEffect } from 'react';
import { vocabularyLayers } from '../data/curriculumData';

export default function FlashcardDeck() {
  const [selectedLayer, setSelectedLayer] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState({}); // { layerId: [cardIndices] }

  // Load current layer cards
  const activeLayerData = vocabularyLayers.find(l => l.layer === selectedLayer) || vocabularyLayers[0];
  const cards = activeLayerData.cards;

  // Reset index when changing layer
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedLayer]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const markMastered = () => {
    const currentLayerMastered = masteredCards[selectedLayer] || [];
    if (!currentLayerMastered.includes(currentIndex)) {
      setMasteredCards({
        ...masteredCards,
        [selectedLayer]: [...currentLayerMastered, currentIndex]
      });
    }
    // Flip card to show standard representation
    setIsFlipped(true);
  };

  const resetLayerProgress = () => {
    setMasteredCards({
      ...masteredCards,
      [selectedLayer]: []
    });
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const masteredCount = (masteredCards[selectedLayer] || []).length;
  const isLayerFinished = masteredCount === cards.length;

  return (
    <div className="flashcards-root slide-up">
      <header className="flashcards-header">
        <h2>Vocabulary Spaced Repetition Flashcards</h2>
        <p>Master daily, office, and phrasal verbs. Click on a card to flip it and reveal the standard English equivalent with examples.</p>
      </header>

      {/* Layer Filter Toggles */}
      <div className="layer-filter-bar glass">
        {vocabularyLayers.map((layer) => (
          <button
            key={layer.layer}
            className={`layer-tab-btn ${selectedLayer === layer.layer ? 'active' : ''}`}
            onClick={() => setSelectedLayer(layer.layer)}
          >
            <strong>Layer {layer.layer}</strong>
            <span>{layer.title}</span>
          </button>
        ))}
      </div>

      {/* Stats row */}
      <div className="flashcard-stats-row">
        <span>Active Deck: <strong>{activeLayerData.title}</strong></span>
        <span>Progress: <strong>{masteredCount} / {cards.length} Mastered</strong></span>
      </div>

      {/* Core Flashcard Interface */}
      <div className="deck-core-container">
        {!isLayerFinished ? (
          <>
            {/* The 3D Flashcard */}
            <div className="flashcard-wrapper">
              <div 
                className={`flashcard-3d ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
                title="Click card to flip"
              >
                {/* Front Side */}
                <div className="card-face front-face">
                  <div className="face-header">
                    <span className="lang-indicator">HINDI MEANING</span>
                    <span className="deck-page">{currentIndex + 1} of {cards.length}</span>
                  </div>
                  <div className="face-body">
                    <h3>{cards[currentIndex].hindi}</h3>
                    <p className="tap-hint">Tap card to flip & reveal English translation</p>
                  </div>
                  <div className="face-footer">
                    <span className="layer-name">Layer {selectedLayer}</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-face back-face">
                  <div className="face-header">
                    <span className="lang-indicator">ENGLISH STANDARD</span>
                    <span className="deck-page">{currentIndex + 1} of {cards.length}</span>
                  </div>
                  <div className="face-body">
                    <h2>{cards[currentIndex].english}</h2>
                    <div className="card-example-box">
                      <strong>Example Sentence:</strong>
                      <p>"{cards[currentIndex].example}"</p>
                    </div>
                  </div>
                  <div className="face-footer">
                    <span className="card-success-checkmark">✓ Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Action Buttons */}
            <div className="deck-controls-row">
              <div className="nav-group">
                <button className="nav-deck-btn" onClick={handlePrev} disabled={currentIndex === 0}>
                  ← Back
                </button>
                <button className="nav-deck-btn" onClick={handleNext} disabled={currentIndex === cards.length - 1}>
                  Next →
                </button>
              </div>

              <div className="action-group">
                <button 
                  className={`mastery-btn ${ (masteredCards[selectedLayer] || []).includes(currentIndex) ? 'mastered' : '' }`}
                  onClick={markMastered}
                >
                  { (masteredCards[selectedLayer] || []).includes(currentIndex) ? '✓ Mastered' : 'Mark as Mastered' }
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Finished State */
          <div className="deck-celebrate-box glass fade-in">
            <span className="celebrate-emoji">🏆</span>
            <h3>Layer Completed! (शानदार काम!)</h3>
            <p>You have successfully studied and mastered all the flashcards in the **{activeLayerData.title}** deck.</p>
            
            <div className="celebrate-buttons">
              <button className="reset-deck-btn" onClick={resetLayerProgress}>
                Restart Studying This Deck
              </button>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .flashcards-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 650px;
          margin: 0 auto;
        }
        
        .flashcards-header h2 {
          font-size: 1.6rem;
          font-weight: 700;
        }
        
        .flashcards-header p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 4px;
        }
        
        /* Filter bar */
        .layer-filter-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 6px;
          border-radius: var(--border-radius-md);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
        }
        
        .layer-tab-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px;
          border-radius: var(--border-radius-sm);
          transition: var(--transition-smooth);
        }
        
        .layer-tab-btn strong {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        
        .layer-tab-btn span {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        
        .layer-tab-btn:hover {
          background-color: var(--bg-tertiary);
        }
        
        .layer-tab-btn.active {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
        }
        
        .layer-tab-btn.active strong {
          color: var(--color-primary);
        }
        
        .layer-tab-btn.active span {
          color: var(--color-primary);
        }
        
        /* Stats row */
        .flashcard-stats-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }
        
        /* Card wrapper and 3D trigger */
        .deck-core-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }
        
        .flashcard-wrapper {
          perspective: 1200px;
          width: 100%;
          height: 320px;
        }
        
        .flashcard-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .flashcard-3d.flipped {
          transform: rotateY(180deg);
        }
        
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
        }
        
        .front-face {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          color: var(--text-primary);
        }
        
        .back-face {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--bg-secondary) 100%);
          transform: rotateY(180deg);
          border-color: var(--color-primary);
        }
        
        .face-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .lang-indicator {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        
        .deck-page {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
        }
        
        .face-body {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .front-face h3 {
          font-size: 2.2rem;
          font-family: var(--font-serif);
          font-weight: 700;
        }
        
        .back-face h2 {
          font-size: 2.2rem;
          font-family: var(--font-sans);
          font-weight: 800;
          color: var(--color-primary);
        }
        
        .tap-hint {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        
        .card-example-box {
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: var(--border-radius-sm);
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          text-align: left;
          max-width: 450px;
        }
        
        .card-example-box strong {
          font-size: 0.72rem;
          color: var(--text-secondary);
          text-transform: uppercase;
        }
        
        .card-example-box p {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 2px;
          font-style: italic;
        }
        
        .face-footer {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
        }
        
        .card-success-checkmark {
          color: var(--color-accent);
          font-weight: 700;
        }
        
        /* Controls Row */
        .deck-controls-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 1rem;
        }
        
        .nav-group {
          display: flex;
          gap: 6px;
        }
        
        .nav-deck-btn {
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .nav-deck-btn:hover:not(:disabled) {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
        
        .nav-deck-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .mastery-btn {
          background-color: var(--color-primary);
          color: white;
          border: none;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 9px 18px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .mastery-btn:hover {
          background-color: var(--color-primary-hover);
        }
        
        .mastery-btn.mastered {
          background-color: var(--color-accent);
        }
        
        /* Celebrated Finished state */
        .deck-celebrate-box {
          border-radius: var(--border-radius-lg);
          padding: 3rem 2rem;
          background-color: var(--bg-secondary);
          border: 1.5px solid var(--color-accent);
          text-align: center;
          box-shadow: var(--card-shadow);
          width: 100%;
        }
        
        .celebrate-emoji {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 12px;
          animation: pulseGlow 2s infinite;
        }
        
        .deck-celebrate-box h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .deck-celebrate-box p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 6px;
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .celebrate-buttons {
          margin-top: 24px;
        }
        
        .reset-deck-btn {
          background-color: var(--color-accent);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: var(--border-radius-sm);
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .reset-deck-btn:hover {
          background-color: var(--color-accent-hover);
        }
        
        @media (max-width: 480px) {
          .layer-filter-bar {
            grid-template-columns: 1fr;
          }
          .deck-controls-row {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          .nav-group {
            width: 100%;
          }
          .nav-deck-btn {
            flex: 1;
            text-align: center;
          }
          .mastery-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}} />
    </div>
  );
}
