import React from 'react';
import verbFormsMarkdown from '../../V2_Verb_Forms_Daily_Use.md?raw';

export default function ReferenceResources() {
  const previewLines = verbFormsMarkdown.split('\n').slice(0, 40);
  const previewText = previewLines.join('\n');

  return (
    <div className="vp-doc slide-up">
      <header className="vp-doc-header">
        <div className="vp-doc-meta">Reference • Connected Resources</div>
        <h1>Modal Verbs and V2 Verb Forms</h1>
        <p className="vp-focus-lead">This page links your external lesson files into the app and previews the V2 verb reference directly inside the curriculum.</p>
      </header>

      <div className="vp-card-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="vp-card">
          <h3>Modal Verbs Chapter</h3>
          <p>Open the full standalone modal verbs lesson saved from your project.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            This file is now available from the app and can be opened in a new tab.
          </p>
          <a
            href="/modal_verbs_chapter.html"
            target="_blank"
            rel="noreferrer"
            className="vp-action-btn primary"
            style={{ marginTop: '1rem' }}
          >
            Open Modal Verbs Lesson
          </a>
        </div>

        <div className="vp-card">
          <h3>V2 Verb Forms Reference</h3>
          <p>Preview the verb form guide from your curriculum and open the full markdown file.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            The reference now lives inside the app and is accessible directly as a resource.
          </p>
          <a
            href="/V2_Verb_Forms_Daily_Use.md"
            target="_blank"
            rel="noreferrer"
            className="vp-action-btn secondary"
            style={{ marginTop: '1rem' }}
          >
            Open V2 Verb Forms Reference
          </a>
        </div>
      </div>

      <section>
        <h2>Preview: V2 Verb Forms Reference</h2>
        <div className="vp-markdown-preview" style={{ marginTop: '1rem' }}>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
{previewText}
          </pre>
        </div>
        <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          The preview above is generated directly from your `V2_Verb_Forms_Daily_Use.md` file.
        </p>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .vp-markdown-preview {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          padding: 1rem;
          overflow-x: auto;
          max-height: 480px;
        }

        .vp-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
        }

        .vp-card {
          padding: 1.25rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          box-shadow: var(--card-shadow);
        }

        .vp-card h3 {
          margin-top: 0;
        }
      ` }} />
    </div>
  );
}
