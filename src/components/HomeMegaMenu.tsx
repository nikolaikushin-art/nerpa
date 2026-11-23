import { ChevronRight, Landmark } from "lucide-react";

export type HomeMenuId = "hub" | "portal" | "investor" | "consortium";

type MenuItem = { label: string; href: string };
type MenuGroup = { title: string; items: MenuItem[] };

const MENUS: Record<HomeMenuId, { title: string; subtitle: string; groups: MenuGroup[] }> = {
  hub: {
    title: "Central Hub",
    subtitle: "The national programme, sector by sector",
    groups: [
      {
        title: "Programme",
        items: [
          { label: "Vision 2026–2040", href: "/#vision" },
          { label: "National Vision", href: "/vision" },
          { label: "Governance", href: "/governance" },
          { label: "Timeline", href: "/#timeline" },
        ],
      },
      {
        title: "Sectors",
        items: [
          { label: "Mining & Minerals", href: "/sector/mining" },
          { label: "Agriculture & Food", href: "/sector/agriculture" },
          { label: "Energy & Power", href: "/sector/energy" },
          { label: "Healthcare", href: "/sector/healthcare" },
          { label: "Education", href: "/sector/education" },
          { label: "Water", href: "/sector/water" },
          { label: "Banking & Finance", href: "/sector/finance" },
          { label: "Technology", href: "/sector/technology" },
          { label: "Infrastructure", href: "/sector/infrastructure" },
          { label: "Housing", href: "/sector/housing" },
        ],
      },
      {
        title: "Places",
        items: [
          { label: "Province Atlas", href: "/provinces" },
          { label: "Provinces on this page", href: "/#provinces" },
          { label: "Manufacturing", href: "/manufacturing" },
          { label: "Industries", href: "/industries" },
        ],
      },
    ],
  },
  portal: {
    title: "Minerals Portal",
    subtitle: "Deposits, provinces and the capital model",
    groups: [
      {
        title: "Portal",
        items: [
          { label: "Portal home", href: "/minerals-portal" },
          { label: "Mineral database", href: "/minerals" },
          { label: "Mining sector", href: "/sector/mining" },
        ],
      },
      {
        title: "Capital",
        items: [
          { label: "Nerpa Capital", href: "/nerpa-capital" },
          { label: "Investment calculator", href: "/calculator" },
          { label: "Live dashboard", href: "/dashboard" },
        ],
      },
    ],
  },
  investor: {
    title: "Investor Intelligence",
    subtitle: "Tools for comparing opportunities",
    groups: [
      {
        title: "Tools",
        items: [
          { label: "Live dashboard", href: "/dashboard" },
          { label: "ROI calculator", href: "/calculator" },
          { label: "Sector explorer", href: "/explorer" },
          { label: "Development timeline", href: "/timeline" },
        ],
      },
      {
        title: "Briefings",
        items: [
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing", href: "/manufacturing" },
          { label: "Publications", href: "/publications" },
          { label: "Resource centre", href: "/resource" },
          { label: "Contact the team", href: "/contact" },
        ],
      },
    ],
  },
  consortium: {
    title: "Consortium Overview",
    subtitle: "Partners, research and how to take part",
    groups: [
      {
        title: "Consortium",
        items: [
          { label: "Consortium", href: "/consortium" },
          { label: "On this page", href: "/#consortium" },
          { label: "Engagement", href: "/engagement" },
          { label: "Governance", href: "/governance" },
        ],
      },
      {
        title: "Knowledge",
        items: [
          { label: "Publications", href: "/publications" },
          { label: "Resource centre", href: "/resource" },
          { label: "National vision", href: "/vision" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
};

export const HomeMegaMenu = ({
  id,
  onNavigate,
}: {
  id: HomeMenuId;
  onNavigate: (href: string) => void;
}) => {
  const menu = MENUS[id];

  return (
    <div
      className="fixed left-4 right-4 top-[4.75rem] z-[90] overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10] shadow-2xl"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-[#f8c757] via-amber-200 to-[#f8c757]" />
      <div className="px-5 pt-4 pb-3">
        <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="rounded-xl bg-[#f8c757]/10 p-2">
            <Landmark className="h-5 w-5 text-[#f8c757]" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{menu.title}</h3>
            <p className="text-sm text-white/60">{menu.subtitle}</p>
          </div>
        </div>
        <div className="columns-1 gap-x-8 sm:columns-2 xl:columns-3">
          {menu.groups.map((group) => (
            <div key={group.title} className="mb-4 break-inside-avoid">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f8c757]">
                {group.title}
              </p>
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                  }}
                  className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[13.5px] text-white/85 hover:bg-white/5 hover:text-[#f8c757]"
                >
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight className="h-3 w-3 text-white/25" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
