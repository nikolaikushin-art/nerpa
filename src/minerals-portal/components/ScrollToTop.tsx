import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page on every route change.
 * Ensures Home and other navigations always show the top of the page.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const topEl = document.getElementById('page-top');
      if (topEl) topEl.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    scroll();
    requestAnimationFrame(scroll);
    const t1 = setTimeout(scroll, 0);
    const t2 = setTimeout(scroll, 50);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
