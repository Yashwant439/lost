import React, { useEffect } from 'react';

/**
 * Simple toast component.
 * Props:
 * - show: boolean
 * - message: string
 * - onClose: () => void
 * - duration: milliseconds to auto-dismiss (default 4000)
 */
export default function Toast({ show, message, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(t);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div
        className="max-w-sm w-full px-4 py-3 rounded-lg shadow-lg flex items-start gap-3"
        style={{ background: 'var(--brand-surface)', color: 'var(--brand-text-primary)', border: '1px solid var(--brand-border)' }}
        role="status"
        aria-live="polite"
      >
        <div className="flex-shrink-0 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m0-4h.01M12 9v2" />
          </svg>
        </div>
        <div className="flex-1 text-sm">
          <div className="font-medium mb-0.5">{message}</div>
        </div>
        <button onClick={onClose} className="text-brand-text-secondary hover:text-brand-text-primary ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
