# Translation pipeline (i18n)

All user-visible text must be translatable. New or changed content must flow through this system.

## Where translations live

| Content type | Source of truth (EN) | Translation maps | Used by |
|-------------|------------------------|------------------|--------|
| Nav, dropdowns, UI labels | `translations.ts` | Same file (en, ps, fa, ar, zh, ru) | All pages, `LanguageContext` |
| Investment detail pages | `data/investmentDatabase.ts` | `detailPageTranslations.ts` → `investmentByPath` | `InvestmentDetailPage` |
| Operations detail pages | `data/operationsDatabase.ts` | `detailPageTranslations.ts` → `operationsByPath` | `OperationsDetailPage` |
| Province detail pages | `data/provinceDatabase.ts` | `detailPageTranslations.ts` → `provinceByPath` | `ProvinceDetailPage` |
| Contact detail pages | `data/contactDatabase.ts` | `detailPageTranslations.ts` → `contactByPath` | `ContactDetailPage` |
| Timeline detail pages | `data/timelineDatabase.ts` | `timelineTranslations.ts` → `timelineTranslationMaps` | `TimelineDetailPage` |
| Mineral detail pages | `data/mineralDatabase.ts` (and expanded) | `mineralTranslations.ts` → `mineralTranslationMaps` | `MineralDetailPage` |

## Adding new content

1. **New nav/dropdown/UI string**  
   Add the key to the `Translations` type in `translations.ts` and add the string for **all 6 languages** (en, ps, fa, ar, zh, ru) in each language block.

2. **New investment/operations/province/contact detail path**  
   - Add the EN content in the relevant database file.  
   - Add an entry in `detailPageTranslations.ts` in the right `*ByPath` map with at least `title`, `subtitle`, `overview` for **ps, fa, ar, zh, ru** (NonEn).  
   - Path is normalized (lowercase, trim); URL param must match the key (e.g. `faryab`, `sar-e-pol`). Use alias in code if the URL uses a variant (e.g. `sar-e-pul` → `sar-e-pol`).

3. **New timeline path**  
   - Add EN entry in `timelineDatabase.ts`.  
   - Add an entry in `timelineTranslations.ts` in `timelineTranslationMaps` for the same path (lowercase, hyphenated) with `title`, `subtitle`, `overview` for ps, fa, ar, zh, ru.

4. **New mineral path**  
   - Add EN entry in mineral database.  
   - Add an entry in `mineralTranslations.ts` in `mineralTranslationMaps` for the path (e.g. `category/deposit`) with `title`, `subtitle`, `overview` (and sections/stats if used) for ps, fa, ar, zh, ru.

## Rules

- **No English fallbacks** in UI: use `t.key ?? ''` or translated content only; never `|| 'English text'` for user-facing strings.
- **Path normalization**: Detail translators use lowercase, trimmed paths; province alias `sar-e-pul` → `sar-e-pol` is applied in `translateProvinceContent`.
- **LanguageContext** provides `t` and `language`; detail pages call `translate*Content(baseData, language, path)` and render the returned object so that title, subtitle, overview (and sections where applicable) are translated when `language !== 'en'`.
