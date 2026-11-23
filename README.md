# NERPA – National Economic Reform Programme of Afghanistan

Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Run locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in /dist
```

## Deploy

- **GitHub:** create a repo, then `git init && git add . && git commit -m "NERPA" && git remote add origin <url> && git push -u origin main`
- **Vercel:** Import the GitHub repo. Framework preset: *Vite* (or leave as is — `vercel.json` already sets build command `npm run build`, output `dist`, and the SPA rewrite).

## Top navigation

Edit links in `src/components/TopNavigation.tsx` (`NAV_LINKS` and `CTA` at the top of the file).

---

## Integrated sections

| Navigation header | Route | Source |
|---|---|---|
| Nerpa Capital | `/nerpa-capital` | `src/pages/NerpaCapital.tsx` + `src/capital/` (CRM page, themed to the Nerpa identity). Chart/export libraries (Chart.js, jsPDF, html2canvas, SheetJS, ExcelJS) load on demand from CDNs. |
| Minerals Portal | `/minerals-portal` (+ `/minerals/...`, `/provinces/:province`, `/investment/:category`, `/timeline/:category`, `/contact/:category`, `/operations/:operation`) | `src/minerals-portal/` (self-contained, own design tokens scoped to `.minerals-portal`). |
| Investor Intelligence | `/investor-intelligence` | Placeholder – untouched |
| Consortium Overview | `/consortium-overview` | Placeholder – untouched |

The Minerals Portal contact form opens the visitor's mail client (mailto) – it has no backend dependency.
