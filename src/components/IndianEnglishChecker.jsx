import React, { useState } from 'react';
import { commonMistakes } from '../data/curriculumData';

export default function IndianEnglishChecker() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMistakes = commonMistakes.filter((item) => {
    const matchesSearch = `${item.wrong} ${item.correct} ${item.reason}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="checker-root slide-up">
      <header className="checker-header">
        <h2>Indian English vs. Standard English Checker</h2>
        <p>Identify common local idioms or grammatical errors inspired by Hindi syntax and quickly learn their internationally accepted equivalents.</p>
      </header>

      {/* Filter Row */}
      <div className="checker-filter-bar glass">
        <div className="search-field-box">
          <span className="search-symbol">🔍</span>
          <input 
            type="text" 
            placeholder="Search phrases (e.g. prepone, revert, doubt)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-toggles">
          {['All', 'Grammar', 'Vocabulary'].map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mistakes Cards Grid */}
      <div className="mistakes-cards-grid">
        {filteredMistakes.length > 0 ? (
          filteredMistakes.map((item, idx) => (
            <div key={idx} className="mistake-item-card glass">
              <div className="card-top-row">
                <span className="mistake-cat-tag">{item.category}</span>
                <span className="why-tag">Why?</span>
              </div>

              {/* Compare Column Layout */}
              <div className="compare-layout">
                <div className="comparison-box wrong">
                  <div className="comp-label">❌ Avoid (Indian English):</div>
                  <p className="comp-phrase">"{item.wrong}"</p>
                </div>
                <div className="comparison-box correct">
                  <div className="comp-label">✅ Use (Standard English):</div>
                  <p className="comp-phrase">"{item.correct}"</p>
                </div>
              </div>

              {/* Rationale Explain Panel */}
              <div className="rationale-panel">
                <strong>📝 Explanation (सीखें क्यों):</strong>
                <p>{item.reason}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-results-box glass">
            <span>🔍</span>
            <h4>No matches found!</h4>
            <p>Try searching another keyword, or switch filters to see the full database.</p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .checker-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .checker-header h2 {
          font-size: 1.6rem;
          font-weight: 700;
        }
        
        .checker-header p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 4px;
        }
        
        /* Filter Bar */
        .checker-filter-bar {
          border-radius: var(--border-radius-md);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          box-shadow: var(--card-shadow);
          background-color: var(--bg-secondary);
        }
        
        .search-field-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 8px 14px;
          flex: 1;
        }
        
        .search-symbol {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        .search-field-box input {
          border: none;
          background: transparent;
          width: 100%;
          outline: none;
          color: var(--text-primary);
          font-size: 0.85rem;
        }
        
        .category-toggles {
          display: flex;
          gap: 6px;
        }
        
        .cat-btn {
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .cat-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        
        .cat-btn.active {
          background-color: var(--color-primary-light);
          border-color: var(--color-primary);
          color: var(--color-primary);
          font-weight: 700;
        }
        
        /* Mistakes Grid */
        .mistakes-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        
        .mistake-item-card {
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          background-color: var(--bg-secondary);
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border-color);
        }
        
        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .mistake-cat-tag {
          font-size: 0.65rem;
          background-color: var(--color-secondary-light);
          color: var(--color-secondary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 12px;
          border: 1px solid var(--color-secondary);
        }
        
        .why-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
        }
        
        /* Compare Columns */
        .compare-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        
        @media (max-width: 600px) {
          .compare-layout {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
        
        .comparison-box {
          border-radius: var(--border-radius-sm);
          padding: 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .comparison-box.wrong {
          background-color: #fef2f2;
          border-left: 4px solid #ef4444;
        }
        
        .comparison-box.correct {
          background-color: var(--color-accent-light);
          border-left: 4px solid var(--color-accent);
        }
        
        .comp-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        
        .comparison-box.wrong .comp-label {
          color: #ef4444;
        }
        
        .comparison-box.correct .comp-label {
          color: var(--color-accent);
        }
        
        .comp-phrase {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        /* Rationale Panel */
        .rationale-panel {
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          padding: 12px 16px;
          border: 1px solid var(--border-color);
        }
        
        .rationale-panel strong {
          font-size: 0.78rem;
          color: var(--text-primary);
          display: block;
        }
        
        .rationale-panel p {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.4;
        }
        
        .empty-results-box {
          text-align: center;
          padding: 3rem 1.5rem;
          border-radius: var(--border-radius-md);
        }
        
        .empty-results-box span {
          font-size: 2.5rem;
          display: block;
        }
        
        .empty-results-box h4 {
          font-size: 1.1rem;
          margin-top: 8px;
        }
        
        .empty-results-box p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          .checker-filter-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
        }
      `}} />
    </div>
  );
}
