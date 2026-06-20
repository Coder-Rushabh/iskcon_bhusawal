import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'hi', label: 'हि', full: 'हिन्दी' },
  { code: 'mr', label: 'म', full: 'मराठी' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-saffron-500 border border-stone-200 hover:border-saffron-400 px-2.5 py-1.5 transition-colors duration-200"
        aria-label="Change language"
      >
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-stone-100 shadow-lg z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-saffron-50 hover:text-saffron-600 ${
                lang.code === i18n.language ? 'text-saffron-500 font-semibold bg-saffron-50' : 'text-stone-700'
              }`}
            >
              {lang.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
