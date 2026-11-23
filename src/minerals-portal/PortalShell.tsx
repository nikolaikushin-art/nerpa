import { ReactNode, useEffect, useRef } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { LanguageProvider } from "@/minerals-portal/contexts/LanguageContext";
import ErrorBoundary from "@/minerals-portal/components/ErrorBoundary";
import ElfsightWidget from "@/minerals-portal/components/ElfsightWidget";
import "@/minerals-portal/portal.css";

/**
 * Wraps every Minerals Portal page: the site's own top navigation stays on top,
 * the portal renders beneath it with its original design tokens (scoped to .minerals-portal).
 */
const PortalShell = ({ children }: { children: ReactNode }) => {
  // Remember document direction/lang before the portal's language provider changes them.
  const original = useRef({
    dir: document.documentElement.dir || "ltr",
    lang: document.documentElement.lang || "en",
  });

  useEffect(() => {
    const o = original.current;
    return () => {
      document.documentElement.dir = o.dir;
      document.documentElement.lang = o.lang;
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="minerals-portal">
        <TopNavigation />
        <div className="pt-[66px]">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
        <ElfsightWidget />
      </div>
    </LanguageProvider>
  );
};

export default PortalShell;
