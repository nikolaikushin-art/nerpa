import { ChevronRight, type LucideIcon } from "lucide-react";

export type PortalMenuLink = { label: string; href: string };
export type PortalMenuGroup = { title?: string; links: PortalMenuLink[] };

const columnClass = {
  2: "grid grid-cols-1 gap-x-8 sm:grid-cols-2",
  3: "grid grid-cols-1 gap-x-8 sm:grid-cols-2 xl:grid-cols-3",
  4: "grid grid-cols-2 gap-x-8 xl:grid-cols-4",
} as const;

const balanceColumns = (groups: PortalMenuGroup[], count: number) => {
  const items = groups.flatMap((group) =>
    group.links.map((link) => ({ ...link, section: group.title })),
  );
  const base = Math.floor(items.length / count);
  const extra = items.length % count;
  const columns: PortalMenuGroup[][] = [];
  let cursor = 0;

  for (let index = 0; index < count; index += 1) {
    const take = base + (index < extra ? 1 : 0);
    const slice = items.slice(cursor, cursor + take);
    cursor += take;
    const column: PortalMenuGroup[] = [];
    slice.forEach((item) => {
      const current = column[column.length - 1];
      if (!current || current.title !== item.section) {
        column.push({ title: item.section, links: [] });
      }
      column[column.length - 1].links.push({ label: item.label, href: item.href });
    });
    if (column.length) columns.push(column);
  }

  return columns;
};

const PortalMegaPanel = ({
  icon: Icon,
  title,
  subtitle,
  viewAll,
  groups,
  columns = 3,
  onItemClick,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  viewAll?: PortalMenuLink;
  groups: PortalMenuGroup[];
  columns?: 2 | 3 | 4;
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    onItemClick(e, href);
  };
  const balanced = balanceColumns(groups, columns);

  return (
    <div
      className="absolute left-4 right-4 top-full z-40 mt-1 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-white/10 bg-[#0b0c10] shadow-2xl"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-1 bg-gradient-to-r from-[#f8c757] via-amber-200 to-[#f8c757]" />
      <div className="px-5 pb-3 pt-4">
        <div className="mb-3 flex items-center gap-3 border-b border-white/10 pb-3">
          <div className="rounded-xl bg-[#f8c757]/10 p-2">
            <Icon className="h-5 w-5 text-[#f8c757]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/60">{subtitle}</p>
          </div>
          {viewAll && (
            <a
              href={viewAll.href}
              onClick={(e) => go(e, viewAll.href)}
              className="hidden shrink-0 items-center gap-1 text-sm text-[#f8c757] hover:underline sm:flex"
            >
              {viewAll.label}
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <div className={`${columnClass[columns]} items-start`}>
          {balanced.map((column, columnIndex) => (
            <div key={column[0]?.links[0]?.href || columnIndex}>
              {column.map((group) => (
                <div key={`${group.title || "links"}-${group.links[0]?.href}`} className="mb-4">
                  {group.title && (
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f8c757]">
                      {group.title}
                    </p>
                  )}
                  {group.links.map((link) => (
                    <a
                      key={`${link.href}-${link.label}`}
                      href={link.href}
                      onClick={(e) => go(e, link.href)}
                      className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[13.5px] text-white/85 hover:bg-white/5 hover:text-[#f8c757]"
                    >
                      <span className="flex-1">{link.label}</span>
                      <ChevronRight className="h-3 w-3 text-white/25" />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalMegaPanel;
