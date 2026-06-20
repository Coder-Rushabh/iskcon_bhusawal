import React, { useState, useEffect } from 'react';
import logo from '../assets/iskcon.png';

export default function InstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setPrompt(e);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!prompt) return;
    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') setVisible(false);
  };

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('pwa-dismissed', '1');
  };

  if (!visible || sessionStorage.getItem('pwa-dismissed')) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-50 bg-white border border-amber-200 shadow-xl rounded-xl p-4 flex items-start gap-3 animate-in slide-in-from-bottom duration-300">
      <img src={logo} alt="ISKCON" className="w-10 h-10 rounded-lg shrink-0 object-contain" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-stone-900 leading-snug">Install ISKCON Bhusawal</p>
        <p className="text-xs text-stone-500 mt-0.5">Add to home screen for quick daily access to darshan timings & programs.</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={install}
            className="bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-medium px-4 py-1.5 rounded transition-colors"
          >
            Install
          </button>
          <button
            onClick={dismiss}
            className="text-stone-400 hover:text-stone-600 text-xs font-medium px-3 py-1.5 transition-colors"
          >
            Not now
          </button>
        </div>
      </div>
      <button onClick={dismiss} className="text-stone-300 hover:text-stone-500 shrink-0 transition-colors" aria-label="Dismiss">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
