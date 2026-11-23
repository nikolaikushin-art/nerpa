import { useEffect } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import "@/capital/capital.css";
import markup from "@/capital/capital.body.html?raw";
import script from "@/capital/capital.script.js?raw";

/**
 * Nerpa Capital – 30-Year Institutional Model (CRM).
 * The supplied page's markup, styles and application script are mounted directly in the
 * React tree (no iframe). Third-party libraries it uses are loaded on demand from CDNs.
 */
const LIBS: { id: string; src: string; global: string }[] = [
  { id: "cap-lib-chartjs", src: "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js", global: "Chart" },
  { id: "cap-lib-html2canvas", src: "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", global: "html2canvas" },
  { id: "cap-lib-jspdf", src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", global: "jspdf" },
  { id: "cap-lib-xlsx", src: "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js", global: "XLSX" },
  { id: "cap-lib-exceljs", src: "https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js", global: "ExcelJS" },
];

const loadLib = (lib: (typeof LIBS)[number]) =>
  new Promise<void>((resolve) => {
    if ((window as any)[lib.global]) return resolve();
    const existing = document.getElementById(lib.id) as HTMLScriptElement | null;
    const el = existing ?? document.createElement("script");
    el.addEventListener("load", () => resolve());
    el.addEventListener("error", () => resolve()); // page still works; only the matching export/chart feature is unavailable
    if (!existing) {
      el.id = lib.id;
      el.src = lib.src;
      el.async = true;
      document.body.appendChild(el);
    }
  });

const NerpaCapital = () => {
  useEffect(() => {
    let cancelled = false;
    const tracked: Array<[EventTarget, string, EventListenerOrEventListenerObject, any]> = [];

    Promise.all(LIBS.map(loadLib)).then(() => {
      if (cancelled) return;
      // Track listeners the page script registers on document/window so they can be removed on unmount.
      const targets: EventTarget[] = [document, window];
      const originals = targets.map((t) => t.addEventListener);
      targets.forEach((t) => {
        const orig = t.addEventListener.bind(t);
        (t as any).addEventListener = (type: string, fn: any, opts?: any) => {
          tracked.push([t, type, fn, opts]);
          return orig(type, fn, opts);
        };
      });
      try {
        // Indirect eval => global scope, so the page's inline onclick handlers resolve.
        (0, eval)(script);
      } catch (e) {
        console.error("Nerpa Capital failed to initialise", e);
      } finally {
        targets.forEach((t, i) => ((t as any).addEventListener = originals[i]));
      }
    });

    return () => {
      cancelled = true;
      tracked.forEach(([t, type, fn, opts]) => t.removeEventListener(type, fn, opts));
      document.body.style.overflow = "";
      document.querySelectorAll(".pdf-export-overlay").forEach((n) => n.remove());
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b0c10" }}>
      <TopNavigation />
      <div className="cap-scope" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
};

export default NerpaCapital;
