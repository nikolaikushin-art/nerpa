import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { HomeMegaMenu, type HomeMenuId } from "@/components/HomeMegaMenu";

/**
 * NERPA top navigation.
 * Destinations are empty placeholder pages (see src/pages/EmptyPage.tsx) until the real pages are integrated.
 */
const NAV_LINKS: { label: string; href: string; menu?: HomeMenuId }[] = [
  { label: "Central Hub", href: "/", menu: "hub" },
  { label: "Nerpa Capital", href: "/nerpa-capital" },
  { label: "Minerals Portal", href: "/minerals-portal", menu: "portal" },
  { label: "Investor Intelligence", href: "/investor-intelligence", menu: "investor" },
  { label: "Consortium Overview", href: "/consortium-overview", menu: "consortium" },
];

const CTA = { label: "Collaborate Together", href: "/collaborate-together" };

const BAR_BG = "#0b0c10";
const CTA_BG = "#f8c757";
const FONT = "'Poppins', 'Inter', system-ui, sans-serif";

export const TopNavigation = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<HomeMenuId | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) return;
      }
      if (e.key === "Escape") {
        setOpen(false);
        setMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const close = () => setMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [menu]);

  const go = (href: string) => {
    setMenu(null);
    setOpen(false);
    const hash = href.startsWith("/#") ? href.slice(2) : "";
    if (hash && pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(href);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const PORTAL_PREFIXES = ["/minerals-portal", "/minerals", "/provinces/", "/investment/", "/timeline/", "/contact/", "/operations/"];
  const isActive = (href: string) =>
    href === "/minerals-portal"
      ? PORTAL_PREFIXES.some((p) => pathname === p || pathname.startsWith(p.endsWith("/") ? p : p + "/"))
      : pathname === href;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] border-t border-white/20"
      style={{ backgroundColor: BAR_BG, fontFamily: FONT }}
    >
      <div className="relative flex h-[66px] items-center justify-between px-5 sm:px-8 xl:px-11">
        <Link to="/" aria-label="NERPA – Central Hub" className="flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden">
          <img
            src="https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/nerpa-logo.png"
            alt="NERPA"
            className="h-full w-full object-contain"
            width={46}
            height={46}
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden xl:flex items-center gap-[35px]" aria-label="Main">
          {NAV_LINKS.map((l) =>
            l.menu ? (
              <button
                key={l.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenu(menu === l.menu ? null : l.menu!);
                }}
                className={`flex items-center gap-1.5 text-[17px] leading-none transition-colors ${
                  menu === l.menu || isActive(l.href) ? "text-[#f8c757]" : "text-white hover:text-[#f8c757]"
                }`}
              >
                {l.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${menu === l.menu ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className={`text-[17px] leading-none transition-colors ${
                  isActive(l.href) ? "text-[#f8c757]" : "text-white hover:text-[#f8c757]"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to={CTA.href}
            className="rounded-md px-6 py-2 text-[17px] text-[#0b0c10] transition-opacity hover:opacity-90"
            style={{ backgroundColor: CTA_BG }}
          >
            {CTA.label}
          </Link>
        </nav>
        {menu && <HomeMegaMenu id={menu} onNavigate={go} />}

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="xl:hidden p-2 text-white"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-[110] overflow-y-auto"
          style={{ backgroundColor: BAR_BG }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-0 right-0 h-[66px] w-[90px] bg-white text-black flex items-start justify-end pt-2 pr-2"
            style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%)" }}
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="flex flex-col items-start gap-6 px-8 pt-28 pb-12" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`text-xl ${isActive(l.href) ? "text-[#f8c757]" : "text-white"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={CTA.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md px-6 py-3 text-lg text-[#0b0c10]"
              style={{ backgroundColor: CTA_BG }}
            >
              {CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
