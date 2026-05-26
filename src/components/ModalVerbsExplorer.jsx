import React, { useState } from 'react';

const modalDb = [
  { modal: "Could", use: "Polite Request", example: "Could you please check this report?", tone: "Very Polite & Professional" },
  { modal: "Would", use: "Very Polite Offer/Request", example: "Would you like to join the sync call?", tone: "Extremely Formal & Respectful" },
  { modal: "Should", use: "Advice / Recommendation", example: "You should review the checklist before submitting.", tone: "Constructive & Helpful" },
  { modal: "Must", use: "Strong Necessity / Obligation", example: "We must complete the deployment by EOD.", tone: "Urgent & Compulsory" },
  { modal: "May", use: "Formal Permission", example: "May I share my screen with the client?", tone: "Formal & Courteous" },
  { modal: "Can", use: "Informal Ability / Request", example: "Can you help me with this bug?", tone: "Casual & Friendly" }
];

const officeUpgrades = [
  { blunt: "Send me the file.", polite: "Could you please send me the file?", modalUsed: "Could" },
  { blunt: "Come to the meeting.", polite: "Would you be able to join the meeting?", modalUsed: "Would" },
  { blunt: "Change this code.", polite: "I suggest you should refine this logic.", modalUsed: "Should" },
  { blunt: "Give me an update.", polite: "May I request a quick status update?", modalUsed: "May" },
  { blunt: "Do this today.", polite: "We must prioritize and complete this today.", modalUsed: "Must" }
];

export default function ModalVerbsExplorer() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [customBlunt, setCustomBlunt] = useState('');
  const [customUpgrade, setCustomUpgrade] = useState('');
  
  const handleCustomUpgrade = () => {
    if (!customBlunt.trim()) return;
    // Basic heuristics to suggest polite modals
    const lower = customBlunt.toLowerCase();
    if (lower.includes('give') || lower.includes('send') || lower.includes('tell')) {
      setCustomUpgrade(`Could you please ${customBlunt.replace(/please/gi, '').trim().replace(/^\w/, c => c.toLowerCase())}?`);
    } else if (lower.includes('come') || lower.includes('do') || lower.includes('attend')) {
      setCustomUpgrade(`Would you be able to ${customBlunt.trim().replace(/^\w/, c => c.toLowerCase())}?`);
    } else {
      setCustomUpgrade(`Could you please help me to ${customBlunt.trim().replace(/^\w/, c => c.toLowerCase())}?`);
    }
  };

  return (
    <div className="modal-exp-root slide-up">
      <header className="modal-exp-header">
        <h2>Modal Verbs & Polite Office English Explorer</h2>
        <p>Master how to sound professional, polite, and persuasive using modals, and convert blunt commands into respectful business requests.</p>
      </header>

      {/* Tabs */}
      <div className="modal-tab-bar glass">
        <button 
          className={`modal-tab ${activeTab === 'explorer' ? 'active' : ''}`}
          onClick={() => setActiveTab('explorer')}
        >
          📖 Modal Grammar Rules
        </button>
        <button 
          className={`modal-tab ${activeTab === 'upgrader' ? 'active' : ''}`}
          onClick={() => setActiveTab('upgrader')}
        >
          ⚡ Blunt-to-Polite Upgrader
        </button>
      </div>

      {activeTab === 'explorer' ? (
        /* Explorer Grid */
        <div className="modal-grid-view fade-in">
          <div className="vp-custom-block tip">
            <h4>💡 Why Modals Matter:</h4>
            <p>Direct commands in English (e.g. "Do this") often sound aggressive or rude to international colleagues. Modals soften requests, displaying respect and professionalism.</p>
          </div>

          <div className="modal-cards-container">
            {modalDb.map((m, idx) => (
              <div key={idx} className="modal-rule-card glass">
                <div className="modal-badge-row">
                  <span className="modal-title-badge">{m.modal}</span>
                  <span className="modal-tone-text">{m.tone}</span>
                </div>
                <div className="modal-body-detail">
                  <p><strong>Primary Function:</strong> {m.use}</p>
                  <div className="modal-example-bubble">
                    <span>💡 Standard Office Phrase:</span>
                    <p>"{m.example}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Upgrader Tool */
        <div className="modal-upgrader-view fade-in">
          <div className="vp-custom-block info">
            <h4>⚡ Interactive Blunt-to-Polite Converter:</h4>
            <p>Click on any blunt command to see how standard modal verbs elevate it into a professional request instantly.</p>
          </div>

          {/* Presets List */}
          <div className="presets-upgrade-list">
            {officeUpgrades.map((item, idx) => (
              <div key={idx} className="preset-upgrade-item glass">
                <div className="upgrade-block-wrong">
                  <span className="badge-wrong"> Blunter Command</span>
                  <p>"{item.blunt}"</p>
                </div>
                <div className="upgrade-block-arrow">➔</div>
                <div className="upgrade-block-right">
                  <span className="badge-right"> Polite Modal ({item.modalUsed})</span>
                  <p>"{item.polite}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sandbox tool */}
          <div className="upgrader-sandbox-card glass">
            <h4>🧠 Sandbox: Rewrite Your Own Blunt Phrase</h4>
            <p className="sandbox-desc">Type an office command (e.g. "Fix this bug", "Review this email") to suggest a polite request:</p>
            
            <div className="sandbox-input-row">
              <input 
                type="text" 
                placeholder="Type command here..." 
                value={customBlunt}
                onChange={(e) => {
                  setCustomBlunt(e.target.value);
                  setCustomUpgrade('');
                }}
              />
              <button onClick={handleCustomUpgrade} disabled={!customBlunt.trim()}>
                Upgrade Tone
              </button>
            </div>

            {customUpgrade && (
              <div className="sandbox-result-box slide-up">
                <span className="sandbox-result-label">✅ Suggested Professional Modal Version:</span>
                <p>"{customUpgrade}"</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .modal-exp-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .modal-exp-header h2 {
          font-size: 1.6rem;
          font-weight: 700;
        }
        
        .modal-exp-header p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 4px;
        }
        
        .modal-tab-bar {
          display: flex;
          padding: 4px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          gap: 4px;
        }
        
        .modal-tab {
          flex: 1;
          border: none;
          background: transparent;
          padding: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }
        
        .modal-tab:hover {
          color: var(--text-primary);
        }
        
        .modal-tab.active {
          background-color: var(--bg-primary);
          color: var(--color-primary);
          box-shadow: var(--card-shadow);
        }
        
        /* Explorer Rule Cards */
        .modal-cards-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        
        @media (max-width: 600px) {
          .modal-cards-container {
            grid-template-columns: 1fr;
          }
        }
        
        .modal-rule-card {
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 1.25rem;
          background-color: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: var(--card-shadow);
        }
        
        .modal-badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-title-badge {
          font-size: 0.85rem;
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 12px;
          border: 1px solid var(--color-primary);
        }
        
        .modal-tone-text {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        
        .modal-body-detail p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 8px !important;
        }
        
        .modal-example-bubble {
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          padding: 8px 12px;
          border-left: 3.5px solid var(--color-primary);
        }
        
        .modal-example-bubble span {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        
        .modal-example-bubble p {
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 600;
          margin: 0 !important;
        }
        
        /* Upgrader Lists */
        .presets-upgrade-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 1rem;
        }
        
        .preset-upgrade-item {
          border: 1px solid var(--border-color);
          background-color: var(--bg-secondary);
          border-radius: var(--border-radius-sm);
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          align-items: center;
          gap: 10px;
        }
        
        @media (max-width: 600px) {
          .preset-upgrade-item {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .upgrade-block-arrow {
            transform: rotate(90deg);
            margin: 4px 0;
          }
        }
        
        .upgrade-block-wrong, .upgrade-block-right {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .badge-wrong {
          align-self: flex-start;
          font-size: 0.65rem;
          background-color: #fef2f2;
          color: #ef4444;
          border: 1px solid #ef4444;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .badge-right {
          align-self: flex-start;
          font-size: 0.65rem;
          background-color: var(--color-accent-light);
          color: var(--color-accent);
          border: 1px solid var(--color-accent);
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        @media (max-width: 600px) {
          .badge-wrong, .badge-right {
            align-self: center;
          }
        }
        
        .upgrade-block-wrong p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-style: italic;
          margin: 0 !important;
        }
        
        .upgrade-block-right p {
          font-size: 0.92rem;
          color: var(--text-primary);
          font-weight: 700;
          margin: 0 !important;
        }
        
        .upgrade-block-arrow {
          font-weight: 700;
          color: var(--text-muted);
          text-align: center;
        }
        
        /* Sandbox */
        .upgrader-sandbox-card {
          margin-top: 1.5rem;
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          background-color: var(--bg-tertiary);
        }
        
        .upgrader-sandbox-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        
        .sandbox-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        
        .sandbox-input-row {
          display: flex;
          gap: 8px;
        }
        
        .sandbox-input-row input {
          flex: 1;
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          border-radius: var(--border-radius-sm);
          padding: 10px 14px;
          font-size: 0.85rem;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-smooth);
        }
        
        .sandbox-input-row input:focus {
          border-color: var(--color-primary);
        }
        
        .sandbox-input-row button {
          background-color: var(--color-primary);
          color: white;
          border: none;
          font-weight: 700;
          padding: 0 20px;
          font-size: 0.82rem;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .sandbox-input-row button:hover:not(:disabled) {
          background-color: var(--color-primary-hover);
        }
        
        .sandbox-input-row button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .sandbox-result-box {
          margin-top: 1rem;
          background-color: var(--color-accent-light);
          border: 1px solid var(--color-accent);
          border-radius: var(--border-radius-sm);
          padding: 12px;
        }
        
        .sandbox-result-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          display: block;
        }
        
        .sandbox-result-box p {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 4px 0 0 0 !important;
        }
      `}} />
    </div>
  );
}
