import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Smooth scroll to anchor (e.g. /sudama-seva#donate)
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Instant jump to top on page change — avoids conflict with mid-flight smooth scroll
    window.scrollTo(0, 0);
  }, [pathname, hash])

  return children
}
