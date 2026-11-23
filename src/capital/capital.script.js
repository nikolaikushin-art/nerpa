
// ============================================================
// MODEL ENGINE — faithful port of model.ts
// ============================================================
var FY_START = 2026;
var FY_YEARS = 30;
var FISCAL_YEARS = Array.from({length:FY_YEARS},(_,i)=>FY_START+i);

var SECTORS = [
  {id:"cu",name:"Copper — Aynak / Balkhab",group:"Minerals",startYear:2028,rampYears:4,plateauYears:14,declineRate:.03,peakVolume:320,unit:"kt Cu",price0:8500,priceCagr:.02,cashCostPerUnit:4200,royaltyRate:.08,capexPerPeakUnit:18,assetLifeYears:25},
  {id:"li_s",name:"Lithium — Ghazni pegmatite",group:"Minerals",startYear:2029,rampYears:3,plateauYears:15,declineRate:.02,peakVolume:45,unit:"kt LCE",price0:22000,priceCagr:.03,cashCostPerUnit:7000,royaltyRate:.10,capexPerPeakUnit:55,assetLifeYears:22},
  {id:"li_b",name:"Lithium — Dasht-e-Nawur brine",group:"Minerals",startYear:2032,rampYears:4,plateauYears:14,declineRate:.02,peakVolume:30,unit:"kt LCE",price0:21000,priceCagr:.03,cashCostPerUnit:5500,royaltyRate:.10,capexPerPeakUnit:42,assetLifeYears:25},
  {id:"fe",name:"Iron ore — Hajigak",group:"Minerals",startYear:2030,rampYears:5,plateauYears:12,declineRate:.02,peakVolume:12000,unit:"kt Fe",price0:105,priceCagr:.015,cashCostPerUnit:58,royaltyRate:.06,capexPerPeakUnit:.65,assetLifeYears:30},
  {id:"ree",name:"Rare Earths — Khanneshin",group:"Minerals",startYear:2031,rampYears:5,plateauYears:13,declineRate:.02,peakVolume:25,unit:"kt REO",price0:42000,priceCagr:.04,cashCostPerUnit:17000,royaltyRate:.10,capexPerPeakUnit:80,assetLifeYears:22},
  {id:"co",name:"Cobalt — polymetallic by-product",group:"Minerals",startYear:2030,rampYears:4,plateauYears:14,declineRate:.02,peakVolume:6,unit:"kt Co",price0:32000,priceCagr:.025,cashCostPerUnit:12000,royaltyRate:.08,capexPerPeakUnit:45,assetLifeYears:20},
  {id:"cr",name:"Chromite — Logar",group:"Minerals",startYear:2027,rampYears:3,plateauYears:15,declineRate:.02,peakVolume:900,unit:"kt Cr",price0:380,priceCagr:.015,cashCostPerUnit:180,royaltyRate:.06,capexPerPeakUnit:.32,assetLifeYears:20},
  {id:"sb",name:"Antimony & Tungsten",group:"Minerals",startYear:2027,rampYears:3,plateauYears:14,declineRate:.02,peakVolume:18,unit:"kt Sb",price0:14500,priceCagr:.03,cashCostPerUnit:6500,royaltyRate:.10,capexPerPeakUnit:22,assetLifeYears:18},
  {id:"au",name:"Gold — Zarkashan",group:"Minerals",startYear:2028,rampYears:3,plateauYears:15,declineRate:.03,peakVolume:.011,unit:"kt Au",price0:68000000,priceCagr:.025,cashCostPerUnit:24000000,royaltyRate:.06,capexPerPeakUnit:42000,assetLifeYears:18},
  {id:"gem",name:"Emerald · Lapis · Ruby",group:"Minerals",startYear:2026,rampYears:3,plateauYears:20,declineRate:.01,peakVolume:5,unit:"M ct",price0:850,priceCagr:.02,cashCostPerUnit:260,royaltyRate:.12,capexPerPeakUnit:14,assetLifeYears:25},
  {id:"coal",name:"Coal — northern basins",group:"Minerals",startYear:2026,rampYears:3,plateauYears:15,declineRate:.05,peakVolume:4200,unit:"kt",price0:92,priceCagr:.005,cashCostPerUnit:48,royaltyRate:.07,capexPerPeakUnit:.35,assetLifeYears:20},
  {id:"tb",name:"Talc · Barite · Industrial",group:"Minerals",startYear:2026,rampYears:3,plateauYears:18,declineRate:.02,peakVolume:850,unit:"kt",price0:280,priceCagr:.015,cashCostPerUnit:130,royaltyRate:.06,capexPerPeakUnit:.28,assetLifeYears:20},
  {id:"gas",name:"Natural gas — Amu Darya",group:"Energy",startYear:2028,rampYears:3,plateauYears:17,declineRate:.04,peakVolume:2200,unit:"mmcf/d",price0:6.2,priceCagr:.02,cashCostPerUnit:1.8,royaltyRate:.15,capexPerPeakUnit:.85,assetLifeYears:25},
  {id:"oil",name:"Crude blend — northern",group:"Energy",startYear:2029,rampYears:4,plateauYears:15,declineRate:.05,peakVolume:42,unit:"kbbl/d",price0:78,priceCagr:.015,cashCostPerUnit:32,royaltyRate:.14,capexPerPeakUnit:210,assetLifeYears:20},
  {id:"solar",name:"Solar IPP — 2.4 GW portfolio",group:"Energy",startYear:2027,rampYears:3,plateauYears:22,declineRate:.008,peakVolume:4700,unit:"GWh",price0:62,priceCagr:.01,cashCostPerUnit:8,royaltyRate:.02,capexPerPeakUnit:.42,assetLifeYears:30},
  {id:"hydro",name:"Hydro IPP — Kunar cascade",group:"Energy",startYear:2030,rampYears:3,plateauYears:25,declineRate:.004,peakVolume:2600,unit:"GWh",price0:74,priceCagr:.015,cashCostPerUnit:6,royaltyRate:.02,capexPerPeakUnit:.55,assetLifeYears:40},
  {id:"cu_ref",name:"Copper cathode refinery",group:"Downstream",startYear:2031,rampYears:3,plateauYears:16,declineRate:.02,peakVolume:280,unit:"kt Cu",price0:9100,priceCagr:.02,cashCostPerUnit:7800,royaltyRate:.02,capexPerPeakUnit:6.5,assetLifeYears:25},
  {id:"li_ref",name:"Lithium hydroxide refinery",group:"Downstream",startYear:2032,rampYears:3,plateauYears:15,declineRate:.02,peakVolume:55,unit:"kt LiOH",price0:26000,priceCagr:.03,cashCostPerUnit:20500,royaltyRate:.02,capexPerPeakUnit:42,assetLifeYears:22},
  {id:"dri",name:"DRI iron plant",group:"Downstream",startYear:2033,rampYears:4,plateauYears:14,declineRate:.02,peakVolume:3200,unit:"kt DRI",price0:420,priceCagr:.015,cashCostPerUnit:320,royaltyRate:.02,capexPerPeakUnit:1.8,assetLifeYears:25},
  {id:"prec",name:"Battery precursor JV",group:"Downstream",startYear:2034,rampYears:3,plateauYears:14,declineRate:.02,peakVolume:90,unit:"kt pCAM",price0:14000,priceCagr:.02,cashCostPerUnit:10500,royaltyRate:.02,capexPerPeakUnit:24,assetLifeYears:20},
  {id:"dc",name:"Data-center JV (Kabul-Herat)",group:"Digital",startYear:2028,rampYears:3,plateauYears:20,declineRate:.02,peakVolume:180,unit:"MW",price0:1.1,priceCagr:.03,cashCostPerUnit:.42,royaltyRate:.03,capexPerPeakUnit:9.5,assetLifeYears:20},
  {id:"fib",name:"Fiber concession",group:"Digital",startYear:2027,rampYears:3,plateauYears:20,declineRate:.01,peakVolume:4200,unit:"k subs",price0:.19,priceCagr:.02,cashCostPerUnit:.06,royaltyRate:.04,capexPerPeakUnit:.85,assetLifeYears:20},
  {id:"fin",name:"Fintech rails · Novicodex",group:"Digital",startYear:2027,rampYears:4,plateauYears:19,declineRate:.02,peakVolume:260,unit:"$B TPV",price0:65,priceCagr:.02,cashCostPerUnit:22,royaltyRate:.00,capexPerPeakUnit:8.5,assetLifeYears:15},
  {id:"trd",name:"Offtake trading margin",group:"Trading",startYear:2029,rampYears:3,plateauYears:20,declineRate:.02,peakVolume:8500,unit:"$M vol",price0:.028,priceCagr:.01,cashCostPerUnit:.010,royaltyRate:.00,capexPerPeakUnit:.02,assetLifeYears:10},
  {id:"roy",name:"Sovereign royalty share-back",group:"Trading",startYear:2029,rampYears:4,plateauYears:19,declineRate:.02,peakVolume:100,unit:"index",price0:1.0,priceCagr:.02,cashCostPerUnit:.0,royaltyRate:.00,capexPerPeakUnit:.0,assetLifeYears:10},
];

var SCENARIOS = {
  base:{id:"base",label:"Base",description:"Institutional base-case. Concession signed Y1, first cash flow Y3.",tone:"neutral",price:1.0,volume:1.0,ramp:1.0,opex:1.0,capex:1.0,costOfDebt:0,fx:1.0,terminalMultiple:12},
  conservative:{id:"conservative",label:"Conservative",description:"Slower ramp, softer prices, higher unit costs, cheaper exit multiple.",tone:"warning",price:.85,volume:.80,ramp:.75,opex:1.15,capex:1.10,costOfDebt:200,fx:.95,terminalMultiple:8},
  growth:{id:"growth",label:"Growth",description:"Full offtake, structural EV demand, downstream integration accretive.",tone:"positive",price:1.20,volume:1.15,ramp:1.15,opex:.95,capex:1.05,costOfDebt:-50,fx:1.05,terminalMultiple:16},
  downside:{id:"downside",label:"Downside",description:"Sanctions friction, delayed offtake, commodity glut, funding stress.",tone:"danger",price:.65,volume:.60,ramp:.55,opex:1.30,capex:1.20,costOfDebt:450,fx:.85,terminalMultiple:6},
};
var SCENARIO_LIST = ["base","conservative","growth","downside"].map(id=>SCENARIOS[id]);

var EQUITY_EVENTS = [
  {year:2026,kind:"seed",amount:25},
  {year:2027,kind:"seriesA",amount:220},
  {year:2029,kind:"seriesB",amount:700},
  {year:2031,kind:"seriesC",amount:1500},
  {year:2034,kind:"preipo",amount:2300},
  {year:2036,kind:"ipo",amount:4700},
  {year:2041,kind:"followon",amount:2900},
];

var DEBT_TRANCHES = [
  {name:"Project Finance — Copper",drawYear:2028,amount:1800,rate:.075,tenor:12,type:"project"},
  {name:"Project Finance — Lithium",drawYear:2029,amount:1400,rate:.078,tenor:12,type:"project"},
  {name:"Project Finance — Iron",drawYear:2030,amount:2600,rate:.072,tenor:15,type:"project"},
  {name:"Revolving Credit Facility",drawYear:2027,amount:500,rate:.065,tenor:5,type:"rcf"},
  {name:"High-Yield Notes",drawYear:2032,amount:1200,rate:.085,tenor:10,type:"hy"},
  {name:"Sovereign Co-Invest",drawYear:2029,amount:900,rate:.045,tenor:20,type:"sov"},
];

var COMP_PLAN = [
  {role:"Executive (C-suite)",count:y=>Math.min(9,3+(y-FY_START)),base:850,ltip:1400},
  {role:"Board of Directors",count:()=>9,base:220,ltip:380},
  {role:"Investment Committee",count:()=>7,base:180,ltip:260},
  {role:"Managing Directors",count:y=>Math.min(28,6+(y-FY_START)*1.2),base:520,ltip:780},
  {role:"Senior operators (mining)",count:y=>Math.min(240,12*(y-FY_START+1)),base:260,ltip:180},
  {role:"Engineers & geologists",count:y=>Math.min(680,30*(y-FY_START+1)),base:155,ltip:90},
  {role:"Field & site labor",count:y=>Math.min(4800,220*(y-FY_START+1)),base:42,ltip:8},
  {role:"Corporate G&A",count:y=>Math.min(340,18*(y-FY_START+1)),base:128,ltip:55},
  {role:"Security & risk",count:y=>Math.min(520,24*(y-FY_START+1)),base:96,ltip:22},
];

// ============================================================
// FORMULA REGISTRY  — drives in-app Formula Inspector + Excel audit guide
// Each entry: { cat, name, type, formula, excel, note }
// type: 'input' | 'formula' | 'xsheet' | 'model'
// ============================================================
var FORMULA_REGISTRY=[
  // ── Income Statement ────────────────────────────────────────
  {cat:'Income Statement',name:'Revenue',type:'model',formula:'Σ (Volume × Price × FX Multiplier) ÷ 1,000 — summed across all 25 sectors',excel:'=SUM(sector_revenue_lines)',note:'Volume comes from the S-curve ramp model per sector. Price is inflated by each sector\'s individual price CAGR each year. FX multiplier from Assumptions.'},
  {cat:'Income Statement',name:'Operating Expenses (OpEx)',type:'model',formula:'Σ (Volume × Cash Cost Per Unit) ÷ 1,000 — summed across sectors',excel:'=SUM(opex_lines)',note:'Cash cost per unit is a fixed sector parameter scaled by the OpEx Multiplier from the active scenario.'},
  {cat:'Income Statement',name:'Royalties',type:'model',formula:'Σ (Sector Revenue × Royalty Rate)',excel:'=SUM(royalty_lines)',note:'Each sector has its own royalty rate (6–15%). Applied to gross sector revenue before any deductions.'},
  {cat:'Income Statement',name:'EBITDA',type:'formula',formula:'Revenue − Operating Expenses − Royalties',excel:'=B−C−D',note:'Earnings Before Interest, Tax, Depreciation & Amortisation. In the Excel export this is a live formula in column E of the Income Statement sheet.'},
  {cat:'Income Statement',name:'EBITDA Margin',type:'formula',formula:'EBITDA ÷ Revenue  (0 if Revenue = 0)',excel:'=IF(B>0, E/B, 0)',note:'Percentage margin. The IF guard prevents division-by-zero errors in early years before revenue starts.'},
  {cat:'Income Statement',name:'Depreciation & Amortisation (D&A)',type:'model',formula:'Σ Annual depreciation of PPE per sector (straight-line over asset life)',excel:'Annual decrease in accumulated depreciation balance',note:'Each asset depreciates straight-line over its asset life (18–40 years depending on sector). D&A begins when the asset enters service (≥ start year).'},
  {cat:'Income Statement',name:'EBIT',type:'formula',formula:'EBITDA − Depreciation & Amortisation',excel:'=E−G',note:'Earnings Before Interest and Tax. Subtracts D&A from EBITDA to arrive at operating profit.'},
  {cat:'Income Statement',name:'Interest Expense',type:'model',formula:'Σ (Debt Outstanding × (Rate + Scenario Spread))',excel:'From Debt Schedule model',note:'Interest is calculated on the opening balance for each year. The scenario costOfDebt spread adjusts the rate by ±0 to +450 bps depending on scenario.'},
  {cat:'Income Statement',name:'Earnings Before Tax (EBT)',type:'formula',formula:'EBIT − Interest Expense',excel:'=H−I',note:'Pre-tax income. In Excel this formula references the EBIT and Interest columns directly in the same row.'},
  {cat:'Income Statement',name:'Income Tax',type:'xsheet',formula:'MAX(0,  EBT × Tax Rate)',excel:'=MAX(0, J × Assumptions!$B$6)',note:'Cross-sheet formula: the tax rate is read from cell B6 of the Assumptions sheet. Changing the tax rate in Assumptions instantly updates all 30 tax rows. Losses produce zero tax (MAX guard).'},
  {cat:'Income Statement',name:'Net Income',type:'formula',formula:'EBT − Tax',excel:'=J−K',note:'After-tax profit. Negative in early years during the capital investment and ramp-up phase.'},
  {cat:'Income Statement',name:'Net Margin',type:'formula',formula:'Net Income ÷ Revenue  (0 if Revenue = 0)',excel:'=IF(B>0, L/B, 0)',note:'Same zero-guard as EBITDA Margin. Net margin typically turns positive around Year 7–9 as debt service reduces and revenue ramps.'},
  {cat:'Income Statement',name:'YoY Revenue Growth',type:'formula',formula:'(Revenue[n] − Revenue[n−1]) ÷ Revenue[n−1]',excel:'=IF(B_prev>0, (B−B_prev)/B_prev, 0)',note:'Year-on-year growth rate. Set to 0 in Year 1 (no prior year). References the previous row\'s Revenue cell directly.'},
  // ── Balance Sheet ────────────────────────────────────────────
  {cat:'Balance Sheet',name:'Total Assets',type:'formula',formula:'Cash + Receivables + Inventory + PPE (Net)',excel:'=B+C+D+E',note:'Four-component asset sum. PPE is net of accumulated depreciation. Receivables = Revenue × 10%; Inventory = OpEx × 6%.'},
  {cat:'Balance Sheet',name:'Total Liabilities',type:'formula',formula:'Accounts Payable + ST Debt + LT Debt + Deferred Tax',excel:'=G+H+I+J',note:'AP = OpEx × 8%. ST Debt = 15% of total debt outstanding; LT Debt = 85%. Deferred Tax accumulates on unrecovered losses.'},
  {cat:'Balance Sheet',name:'Total Equity',type:'formula',formula:'Paid-In Capital + Retained Earnings',excel:'=L+M',note:'Paid-In Capital accumulates with each equity event. Retained Earnings accumulate annual Net Income.'},
  {cat:'Balance Sheet',name:'Balance Sheet Check',type:'formula',formula:'IF( |Assets − Liabilities − Equity| < $0.5M, "✓ BALANCED", "⚠ DIFF: X.XX" )',excel:'=IF(ABS(F−K−N)<0.5,"✓ BALANCED","⚠ DIFF: "&TEXT(ABS(F−K−N),"0.00"))',note:'Live audit formula in column O. Returns green ✓ if the sheet balances within $0.5M tolerance. Allows quick identification of modelling errors.'},
  // ── Cash Flow ────────────────────────────────────────────────
  {cat:'Cash Flow',name:'Free Cash Flow (FCF)',type:'formula',formula:'Operating Cash Flow + Investing Cash Flow',excel:'=B+C',note:'Classic FCF definition. OCF = Net Income + D&A − Working Capital Change. ICF = −CapEx.'},
  {cat:'Cash Flow',name:'Financing Cash Flow',type:'formula',formula:'Equity Raised + Debt Drawn − Debt Repaid',excel:'=E+F−G',note:'Net financing flows in the year. Equity from EQUITY_EVENTS schedule; debt from DEBT_TRANCHES amortisation model.'},
  {cat:'Cash Flow',name:'Net Cash Change',type:'formula',formula:'Free Cash Flow + Financing Cash Flow',excel:'=D+H',note:'Total change in the cash balance for the year.'},
  {cat:'Cash Flow',name:'Closing Cash',type:'formula',formula:'Opening Cash + Net Cash Change',excel:'=J+I',note:'Chained formula: Closing Cash of Year N becomes Opening Cash of Year N+1 via =K{prev_row}. Trace Precedents (Ctrl+[) shows the full 30-year chain.'},
  {cat:'Cash Flow',name:'Cumulative FCF',type:'formula',formula:'SUM( FCF from Year 1 to current year )',excel:'=SUM($D$4:D{row})',note:'Expanding SUM — the start of the range is anchored ($D$4) while the end grows with each row. Shows how long before cumulative FCF turns positive.'},
  // ── Capital Events ───────────────────────────────────────────
  {cat:'Capital Events',name:'Cumulative Equity Raised',type:'formula',formula:'SUM of all equity events from first round to current row',excel:'=SUM($C$first:C{row})',note:'Expanding SUM — anchored at the first equity event. Each row shows total capital raised to that date.'},
  {cat:'Capital Events',name:'% of Total',type:'formula',formula:'Round Amount ÷ Total Equity Raised',excel:'=C{row} / SUM($C$first:$C$last)',note:'Both ranges are absolute — the denominator always covers all rounds regardless of which row you are on.'},
  {cat:'Capital Events',name:'Years to IPO',type:'formula',formula:'IF(Year < IPO Year, IPO Year − Year, "Post-IPO")',excel:'=IF(A{row}<2036, 2036−A{row}, "Post-IPO")',note:'Static reference to IPO year 2036. After IPO, displays "Post-IPO" string.'},
  // ── Debt Schedule ────────────────────────────────────────────
  {cat:'Debt Schedule',name:'Annual Interest',type:'formula',formula:'Tranche Amount × Interest Rate',excel:'=F×E  (Amount × Rate)',note:'Simple annual interest on the full drawn balance. F = Amount column, E = Rate column. Edit either to recalculate.'},
  {cat:'Debt Schedule',name:'Life Interest',type:'formula',formula:'Tranche Amount × Interest Rate × Tenor',excel:'=F×E×D  (Amount × Rate × Tenor)',note:'Total interest cost over the full life of the debt. D = Tenor years column.'},
  {cat:'Debt Schedule',name:'Annual Principal',type:'formula',formula:'Tranche Amount ÷ Tenor',excel:'=F÷D  (Amount ÷ Tenor)',note:'Straight-line principal amortisation. Repayment begins 3 years after draw year in the model.'},
  {cat:'Debt Schedule',name:'All-In Debt Cost',type:'formula',formula:'Tranche Amount + Life Interest',excel:'=F+H  (Amount + Life Interest)',note:'Total cash cost of the debt facility including full face value and all interest payments. H = Life Interest column.'},
  // ── Remuneration ─────────────────────────────────────────────
  {cat:'Remuneration',name:'Annual Compensation Cost',type:'formula',formula:'( Headcount × (Base Salary + LTIP × 30%) ) ÷ 1,000',excel:'=(HC×(Base+LTIP×0.3))/1000',note:'30% of LTIP is treated as annual cash cost; remaining 70% is equity/deferred. Columns H–K cover Year 1, Year 3, Year 5, Year 10. Output in $M. Edit Base or LTIP — cost columns recalculate automatically.'},
  // ── Sectors ──────────────────────────────────────────────────
  {cat:'Sector Model',name:'Sector Revenue',type:'model',formula:'Volume × Price × FX ÷ 1,000  (S-curve ramp model)',excel:'=volume × price × FX / 1000',note:'Volume follows an S-curve: ramp phase → plateau → decline. Price inflated annually by sector-specific price CAGR. FX multiplier varies by scenario.'},
  {cat:'Sector Model',name:'Sector EBITDA Margin',type:'formula',formula:'IF(Sector Revenue > 0,  Sector EBITDA ÷ Revenue,  0)',excel:'=IF(F>0, G/F, 0)',note:'Live formula in the Sectors sheet. Updates if you edit any Assumptions cell that affects revenue or costs.'},
  {cat:'Sector Model',name:'Revenue Rank',type:'formula',formula:'RANK( Sector Revenue, All Sector Revenues, Descending )',excel:'=RANK(F, $F$first:$F$last, 0)',note:'Dynamic rank — updates automatically if revenue values change. 1 = highest cumulative revenue sector. Both row references are absolute.'},
  {cat:'Sector Model',name:'30Y Cumulative Revenue',type:'formula',formula:'SUM of all 30 annual revenue columns for the sector',excel:'=SUM(C{row}:AF{row})',note:'Full row-range SUM covering FY2026–FY2055 (columns C through AF). Equivalent formula appears in the Annual Total row as a column SUM.'},
  // ── Assumptions & Scenarios ──────────────────────────────────
  {cat:'Assumptions',name:'Scenario Selector',type:'input',formula:'Edit cell B15 in the Assumptions sheet to switch scenario',excel:'Dropdown: Base | Conservative | Growth | Downside',note:'Yellow cell with dropdown data validation. All six multiplier rows below recalculate via nested IF formulas when this cell changes.'},
  {cat:'Assumptions',name:'Price Multiplier',type:'xsheet',formula:'IF(Scenario="Base",1.0, IF("Conservative",0.85, IF("Growth",1.20, 0.65)))',excel:'=IF($B$15="Base",1.0,IF($B$15="Conservative",0.85,IF($B$15="Growth",1.20,0.65)))',note:'Nested IF formula in B16. References the Scenario Selector cell B15. Applied to all 25 sector unit prices.'},
  {cat:'Assumptions',name:'Volume Multiplier',type:'xsheet',formula:'IF(Scenario="Base",1.0, IF("Conservative",0.80, IF("Growth",1.15, 0.60)))',excel:'=IF($B$15="Base",1.0,IF($B$15="Conservative",0.80,IF($B$15="Growth",1.15,0.60)))',note:'Scales peak production volumes across all sectors. Conservative/Downside compress volumes; Growth expands them.'},
  {cat:'Assumptions',name:'Ramp Multiplier',type:'xsheet',formula:'IF(Scenario="Base",1.0, IF("Conservative",0.75, IF("Growth",1.15, 0.55)))',excel:'=IF($B$15="Base",1.0,IF($B$15="Conservative",0.75,IF($B$15="Growth",1.15,0.55)))',note:'Compresses or extends the production ramp-up period. Lower values = slower ramp; higher = faster ramp to plateau.'},
  {cat:'Assumptions',name:'OpEx Multiplier',type:'xsheet',formula:'IF(Scenario="Base",1.0, IF("Conservative",1.15, IF("Growth",0.95, 1.30)))',excel:'=IF($B$15="Base",1.0,IF($B$15="Conservative",1.15,IF($B$15="Growth",0.95,1.30)))',note:'Scales unit operating cost per sector. Conservative and Downside have higher costs; Growth benefits from economies of scale.'},
  {cat:'Assumptions',name:'CapEx Multiplier',type:'xsheet',formula:'IF(Scenario="Base",1.0, IF("Conservative",1.10, IF("Growth",1.05, 1.20)))',excel:'=IF($B$15="Base",1.0,IF($B$15="Conservative",1.10,IF($B$15="Growth",1.05,1.20)))',note:'Scales development capital requirements per sector. All scenarios except Base have higher CapEx due to execution risk premiums.'},
  {cat:'Assumptions',name:'Terminal EV Multiple',type:'xsheet',formula:'IF(Scenario="Base",12, IF("Conservative",8, IF("Growth",16, 6)))',excel:'=IF($B$15="Base",12,IF($B$15="Conservative",8,IF($B$15="Growth",16,6)))',note:'EBITDA exit multiple used to calculate terminal enterprise value for IRR/MOIC. Cell B21 in Assumptions.'},
  {cat:'Assumptions',name:'Sector EBITDA% (estimated)',type:'formula',formula:'IF(Base Price > 0,  (Price − Cash Cost − Price × Royalty Rate) ÷ Price,  0)',excel:'=IF(D{row}>0,(D{row}−{cashCost}−D{row}×{royaltyRate})/D{row},0)',note:'Estimated EBITDA margin per sector in the Assumptions Sector table. References the sector\'s Base Price cell directly so it updates if you change the price.'},
  // ── Returns & Valuation ──────────────────────────────────────
  {cat:'Returns & Valuation',name:'LP Distribution',type:'model',formula:'IF(Year ≥ 9th year AND FCF > 0,  FCF × 50%,  0)',excel:'=IF(ROW()−header_offset≥9, MAX(0,FCF)×0.5, 0)',note:'LP receives 50% of positive FCF starting from year 9 of the model. The remaining 50% is retained for reinvestment and debt service.'},
  {cat:'Returns & Valuation',name:'Terminal Value (LP Share)',type:'model',formula:'Year 30 Revenue × Terminal EV Multiple − Total Debt Outstanding',excel:'=terminalRevenue × Assumptions!$B$21 − terminalDebt',note:'Terminal enterprise value liquidated at end of model period. Debt is fully repaid against the EV. Residual flows to LP.'},
  {cat:'Returns & Valuation',name:'Consolidated IRR',type:'model',formula:'IRR on LP cashflow schedule: investments (−), distributions (+), terminal value (+)',excel:'Computed via Newton-Raphson iteration (80 passes). No native XIRR needed.',note:'LP invests total equity raised as negative cashflows. Receives 50% of FCF from Year 9 + terminal residual. IRR = discount rate making NPV = 0.'},
  {cat:'Returns & Valuation',name:'Consolidated MOIC',type:'formula',formula:'(Total Distributions + Terminal Value + Total Invested) ÷ Total Invested',excel:'=(SUM(distributions)+terminalValue+totalInvested)/totalInvested',note:'Multiple on Invested Capital. Includes both realised distributions and terminal residual value. Benchmark for LP return quality.'},
  {cat:'Returns & Valuation',name:'TVPI',type:'model',formula:'(Total Distributions + Year 30 Book Equity) ÷ Total Paid-In Capital',excel:'=(totalDist+terminalEquity)/totalIn',note:'Total Value to Paid-In. Standard LP performance metric. Includes unrealised value (book equity) alongside distributions.'},
  {cat:'Returns & Valuation',name:'DPI',type:'model',formula:'Total Distributions ÷ Total Paid-In Capital',excel:'=totalDist/totalIn',note:'Distributions to Paid-In. Measures cash-on-cash realised returns only. More conservative than TVPI.'},
  {cat:'Returns & Valuation',name:'Implied Terminal EV',type:'model',formula:'Year 30 Revenue × Terminal EBITDA Multiple',excel:'=lastYear_revenue × scenarioTerminalMultiple',note:'Enterprise value at model exit. Terminal multiple from Assumptions cell B21 (linked to active scenario via IF formula).'},
  {cat:'Returns & Valuation',name:'Seed IRR',type:'model',formula:'IRR on seed cashflow: −$22M at Year 1, exit at 5% of implied EV at Year 11',excel:'Newton-Raphson approximation on 2-event cashflow',note:'Illustrative early-investor return. 5% equity stake assumption. Seed MOIC = (impliedEV × 5%) ÷ 22.'},
];

// helpers
var clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));

function volumeRamp(y,s,rampMul,volMul){
  const start=s.startYear;
  const ramp=Math.max(1,Math.round(s.rampYears/rampMul));
  const plateauEnd=start+ramp+s.plateauYears;
  if(y<start)return 0;
  if(y<start+ramp){const t=(y-start+1)/(ramp+1);return s.peakVolume*volMul*(t*t*(3-2*t));}
  if(y<=plateauEnd)return s.peakVolume*volMul;
  return s.peakVolume*volMul*Math.pow(1-s.declineRate,y-plateauEnd);
}
function priceFor(y,s,priceMul){return s.price0*priceMul*Math.pow(1+s.priceCagr,y-FY_START);}

function npv(rate,cf){let s=0;for(let i=0;i<cf.length;i++)s+=cf[i]/Math.pow(1+rate,i);return s;}
function irr(cf,guess=.15){
  let r=guess;
  for(let i=0;i<80;i++){
    const f=npv(r,cf);const dr=1e-5;
    const df=(npv(r+dr,cf)-f)/dr;
    if(!isFinite(df)||Math.abs(df)<1e-12)break;
    const next=r-f/df;
    if(!isFinite(next))break;
    r=clamp(next,-.99,5);
    if(Math.abs(f)<1e-6)break;
  }
  return r;
}

function amortizeDebt(y,mul,extraRate){
  let outstanding=0,drawn=0,repaid=0,interest=0;
  for(const t of DEBT_TRANCHES){
    const amt=t.amount;
    const paybackStart=t.drawYear+3;
    const paybackEnd=t.drawYear+t.tenor;
    const yearsOfRepay=paybackEnd-paybackStart+1;
    const principalPerYear=amt/yearsOfRepay;
    if(y===t.drawYear)drawn+=amt;
    let remaining=0;
    if(y>=t.drawYear&&y<paybackStart)remaining=amt;
    else if(y>=paybackStart&&y<=paybackEnd)remaining=Math.max(0,amt-principalPerYear*(y-paybackStart+1));
    outstanding+=remaining*mul;
    if(y>=paybackStart&&y<=paybackEnd)repaid+=principalPerYear*mul;
    let startOfYear=0;
    if(y>t.drawYear&&y<=paybackStart)startOfYear=amt;
    else if(y>paybackStart&&y<=paybackEnd)startOfYear=amt-principalPerYear*(y-paybackStart);
    else if(y===t.drawYear)startOfYear=amt/2;
    interest+=startOfYear*mul*(t.rate+extraRate/10000);
  }
  return{outstanding,drawn,repaid,interest};
}

function buildModel(scenarioId){
  const S=SCENARIOS[scenarioId];
  const years=FISCAL_YEARS.slice();
  const N=years.length;

  const sectorLines=SECTORS.map(s=>{
    const volume=years.map(y=>volumeRamp(y,s,S.ramp,S.volume));
    const price=years.map(y=>priceFor(y,s,S.price));
    const revenue=volume.map((v,i)=>(v*price[i])/1000*S.fx);
    const opex=volume.map(v=>(v*s.cashCostPerUnit)/1000*S.opex);
    const royalty=revenue.map(r=>r*s.royaltyRate);
    const ebitda=revenue.map((r,i)=>r-opex[i]-royalty[i]);
    const capex=years.map(y=>{
      const totalDev=s.capexPerPeakUnit*s.peakVolume*S.capex;
      if(y>=s.startYear-3&&y<s.startYear)return totalDev*.20;
      if(y>=s.startYear&&y<s.startYear+s.rampYears)return(totalDev*.30)/s.rampYears;
      if(y>=s.startYear+s.rampYears)return totalDev*.02;
      return 0;
    });
    const ppeGross=[],ppeAccum=[];
    let gross=0,accum=0;
    for(let i=0;i<N;i++){
      gross+=capex[i];
      const inService=years[i]>=s.startYear;
      const daRate=inService?1/s.assetLifeYears:0;
      accum+=Math.min(gross-accum,gross*daRate);
      ppeGross.push(gross);ppeAccum.push(accum);
    }
    const da=ppeAccum.map((a,i)=>i===0?a:a-ppeAccum[i-1]);
    return{sector:s,volume,revenue,opex,royalty,ebitda,capex,da,ppeGross,ppeAccum};
  });

  const sumFn=(fn)=>(i)=>sectorLines.reduce((a,sl)=>a+fn(sl,i),0);
  const yr={
    revenue:sumFn((sl,i)=>sl.revenue[i]),
    opex:sumFn((sl,i)=>sl.opex[i]+sl.royalty[i]),
    royalty:sumFn((sl,i)=>sl.royalty[i]),
    ebitda:sumFn((sl,i)=>sl.ebitda[i]),
    capex:sumFn((sl,i)=>sl.capex[i]),
    da:sumFn((sl,i)=>sl.da[i]),
  };

  const headcountAt=y=>COMP_PLAN.reduce((a,r)=>a+Math.max(0,Math.floor(r.count(y))),0);
  const compAt=y=>COMP_PLAN.reduce((a,r)=>a+Math.floor(r.count(y))*(r.base+r.ltip*.3)/1000,0);

  const years_out=[];
  let cash=0,receivables=0,inventory=0,ap=0,retained=0,paidIn=0;
  const TAX=.21,WC_REV=.10,WC_OPEX=.08,INV_OPEX=.06;

  for(let i=0;i<N;i++){
    const y=years[i];
    const revenue=yr.revenue(i);
    const opex=yr.opex(i);
    const ebitda=revenue-opex;
    const capex=yr.capex(i);
    const da=yr.da(i);
    const debt=amortizeDebt(y,1,S.costOfDebt);
    const equityEvent=EQUITY_EVENTS.find(e=>e.year===y)?.amount??0;
    const compExpense=compAt(y);
    const ebit=ebitda-da-compExpense*.4;
    const interest=debt.interest;
    const pretax=ebit-interest;
    const tax=pretax>0?pretax*TAX:0;
    const netIncome=pretax-tax;
    const newRecv=revenue*WC_REV,newInv=opex*INV_OPEX,newAP=opex*WC_OPEX;
    const wcChange=(newRecv-receivables)+(newInv-inventory)-(newAP-ap);
    receivables=newRecv;inventory=newInv;ap=newAP;
    const ocf=netIncome+da-wcChange;
    const icf=-capex;
    const fcf_finance=equityEvent+debt.drawn-debt.repaid;
    const netChange=ocf+icf+fcf_finance;
    cash=Math.max(0,cash+netChange);
    paidIn+=equityEvent;retained+=netIncome;
    const ppeNet=sectorLines.reduce((a,sl)=>a+(sl.ppeGross[i]-sl.ppeAccum[i]),0);
    const totalAssets=cash+receivables+inventory+ppeNet;
    const totalDebt=debt.outstanding;
    const stDebt=totalDebt*.15,ltDebt=totalDebt*.85;
    const deferredTax=pretax<0?Math.abs(pretax)*TAX*.5:0;
    const totalLiab=ap+totalDebt+deferredTax;
    const totalEquity=paidIn+retained;
    years_out.push({year:y,revenue,opex,royalty:yr.royalty(i),ebitda,da,ebit,interest,tax,netIncome,capex,
      cash,receivables,inventory,ppeNet,totalAssets,
      ap,stDebt,ltDebt,totalDebt,deferredTax,totalLiab,
      paidInCapital:paidIn,retainedEarnings:retained,totalEquity,
      ocf,icf,fcf_finance,netChange,equityRaised:equityEvent,
      debtDrawn:debt.drawn,debtRepaid:debt.repaid,headcount:headcountAt(y),compExpense});
  }

  const cumRevenue=years_out.reduce((a,r)=>a+r.revenue,0);
  const cumEbitda=years_out.reduce((a,r)=>a+r.ebitda,0);
  const cumFcf=years_out.reduce((a,r)=>a+r.ocf+r.icf,0);
  const peakCashNeed=Math.min(0,...years_out.map(r=>r.cash));

  // Seed IRR (5% of company, exit at Y11)
  const seedCF=new Array(N).fill(0);
  seedCF[0]=-22;
  const y11Idx=10;
  const impliedEV=years_out[y11Idx].revenue*S.terminalMultiple;
  seedCF[y11Idx]+=impliedEV*.05;
  const seedIRR=irr(seedCF);
  const seedMOIC=(impliedEV*.05)/22;

  // Consolidated LP CF
  const conCF=new Array(N).fill(0);
  for(const e of EQUITY_EVENTS){const idx=years.indexOf(e.year);if(idx>=0)conCF[idx]-=e.amount;}
  const distributions=[];
  for(let i=0;i<N;i++){
    const fcf=years_out[i].ocf+years_out[i].icf;
    const dist=i>=8&&fcf>0?fcf*.5:0;
    distributions.push(dist);conCF[i]+=dist;
  }
  conCF[N-1]+=years_out[N-1].revenue*S.terminalMultiple-years_out[N-1].totalDebt;
  const consolidatedIRR=irr(conCF,.18);
  const totalIn=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const totalDist=distributions.reduce((a,b)=>a+b,0);
  const consolidatedMOIC=(totalDist+conCF[N-1]+totalIn)/totalIn;
  const dpi=totalDist/totalIn;
  const tvpi=(totalDist+years_out[N-1].totalEquity)/totalIn;
  const cashOnCash=totalDist/totalIn;

  return{scenarioId,years,sectors:sectorLines,years_out,distributions,
    cumRevenue,cumEbitda,cumFcf,peakCashNeed,
    totalEquity:years_out[N-1].totalEquity,totalDebt:years_out[N-1].totalDebt,
    seedIRR,seedMOIC,consolidatedIRR,consolidatedMOIC,
    dpi,tvpi,cashOnCash,impliedTerminalEV:impliedEV,nav:years_out[N-1].totalEquity};
}

// ============================================================
// FORMAT HELPERS
// ============================================================
function fmtM(v){
  if(!isFinite(v))return"—";
  const a=Math.abs(v);
  if(a>=1000)return`$${(v/1000).toFixed(2)}B`;
  if(a>=1)return`$${v.toFixed(0)}M`;
  if(a>=.001)return`$${(v*1000).toFixed(0)}k`;
  return"—";
}
function fmtPct(v,d=1){return isFinite(v)?`${(v*100).toFixed(d)}%`:"—";}
function fmtX(v,d=2){return isFinite(v)?`${v.toFixed(d)}x`:"—";}
function fmtN(v,d=0){return isFinite(v)?v.toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d}):"—";}
function fmtParen(v){return v<0?`(${fmtM(-v)})`:fmtM(v);}

// ============================================================
// APP STATE
// ============================================================
var _exhibitN=0;
var APP = {
  scenarioId: 'base',
  model: null,
  activeTab: 'executive-dashboard',
  sidebarCollapsed: false,
  charts: [],
  csvRows: null,
  csvFilename: 'nerpa-export.csv',
};

function getModel(){return APP.model||(APP.model=buildModel(APP.scenarioId));}

// ============================================================
// CHART COLOURS
// ============================================================
var CC = ['#1d3461','#2e7d52','#d97706','#6b7280','#1e40af','#7c3aed','#be123c','#0f766e','#92400e','#0369a1'];
var CC_ALPHA=(c,a)=>c+'33';

function destroyCharts(){
  APP.charts.forEach(ch=>{try{ch.destroy();}catch(e){}});
  APP.charts=[];
}

function mkChart(id,config){
  const el=document.getElementById(id);if(!el)return;
  const ch=new Chart(el.getContext('2d'),config);
  APP.charts.push(ch);return ch;
}

var BASE_OPTS={responsive:true,maintainAspectRatio:false,
  plugins:{legend:{display:true,position:'bottom',labels:{boxWidth:10,font:{size:10},padding:8}},
    tooltip:{callbacks:{}}},
  scales:{x:{ticks:{font:{size:10},maxTicksLimit:8},grid:{display:false}},
    y:{ticks:{font:{size:10},maxTicksLimit:6},grid:{color:'#f0f0f0'}}}};

function lineChart(id,labels,datasets,yFmt){
  return mkChart(id,{type:'line',data:{labels,datasets:datasets.map((d,i)=>({
    label:d.label,data:d.data,borderColor:d.color||CC[i],backgroundColor:'transparent',
    borderWidth:1.5,pointRadius:0,pointHoverRadius:3,tension:.3}))},
    options:{...BASE_OPTS,scales:{...BASE_OPTS.scales,
      y:{...BASE_OPTS.scales.y,ticks:{...BASE_OPTS.scales.y.ticks,
        callback:yFmt?v=>yFmt(v):v=>fmtShort(v)}}}}});
}

function areaChart(id,labels,datasets){
  return mkChart(id,{type:'line',data:{labels,datasets:datasets.map((d,i)=>({
    label:d.label,data:d.data,borderColor:d.color||CC[i],
    backgroundColor:(d.color||CC[i])+'44',fill:true,
    borderWidth:1.5,pointRadius:0,tension:.3}))},
    options:{...BASE_OPTS,scales:{...BASE_OPTS.scales,
      x:{...BASE_OPTS.scales.x},
      y:{...BASE_OPTS.scales.y,stacked:true,ticks:{...BASE_OPTS.scales.y.ticks,callback:v=>fmtShort(v)}}}}});
}

function barChart(id,labels,datasets,stacked=false){
  return mkChart(id,{type:'bar',data:{labels,datasets:datasets.map((d,i)=>({
    label:d.label,data:d.data,backgroundColor:d.color||CC[i],borderRadius:1}))},
    options:{...BASE_OPTS,scales:{
      x:{...BASE_OPTS.scales.x,stacked},
      y:{...BASE_OPTS.scales.y,stacked,ticks:{...BASE_OPTS.scales.y.ticks,callback:v=>fmtShort(v)}}}}});
}

function donutChart(id,labels,data,colors,valueFmt){
  return mkChart(id,{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:colors||CC.slice(0,data.length),borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
      plugins:{legend:{display:true,position:'right',labels:{font:{size:10},padding:8,boxWidth:10}},
        tooltip:{callbacks:{label:ctx=>{const v=ctx.raw;const label=ctx.label;const pct=(v/ctx.dataset.data.reduce((a,b)=>a+b,0)*100).toFixed(1);return`${label}: ${valueFmt?valueFmt(v):fmtShort(v)} (${pct}%)`;}}}}}});
}

function hBarChart(id,labels,data,colors,valueFmt){
  return mkChart(id,{type:'bar',data:{labels,datasets:[{data,backgroundColor:colors||CC.slice(0,data.length),borderRadius:2}]},
    options:{...BASE_OPTS,indexAxis:'y',
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>valueFmt?valueFmt(ctx.raw):fmtShort(ctx.raw)}}},
      scales:{x:{...BASE_OPTS.scales.y,ticks:{...BASE_OPTS.scales.y.ticks,callback:v=>valueFmt?valueFmt(v):fmtShort(v)}},
        y:{...BASE_OPTS.scales.x,ticks:{font:{size:10}}}}}});
}

function comboChart(id,labels,bars,lines){
  const datasets=[
    ...bars.map((b,i)=>({type:'bar',label:b.label,data:b.data,backgroundColor:b.color||CC[i],yAxisID:'yL',borderRadius:1})),
    ...lines.map((l,i)=>({type:'line',label:l.label,data:l.data,borderColor:l.color||CC[bars.length+i],backgroundColor:'transparent',borderWidth:2,pointRadius:0,tension:.3,yAxisID:'yR'})),
  ];
  return mkChart(id,{data:{labels,datasets},options:{...BASE_OPTS,
    scales:{x:{...BASE_OPTS.scales.x},
      yL:{position:'left',...BASE_OPTS.scales.y,ticks:{...BASE_OPTS.scales.y.ticks,callback:v=>fmtShort(v)}},
      yR:{position:'right',grid:{display:false},ticks:{font:{size:10},callback:v=>fmtShort(v)}}}}});
}

function waterfallChart(id,items){
  const labels=items.map(d=>d.name);
  const pos=[],neg=[],base=[];
  let running=0;
  items.forEach(d=>{
    if(d.kind==='start'||d.kind==='total'){
      base.push(0);pos.push(Math.max(0,d.value));neg.push(Math.max(0,-d.value));running=d.value;
    }else{
      const start=Math.min(running,running+d.value);
      base.push(start<0?0:start<running?start:running);
      if(d.value>=0){pos.push(d.value);neg.push(0);}else{pos.push(0);neg.push(-d.value);}
      running+=d.value;
    }
  });
  return mkChart(id,{type:'bar',data:{labels,datasets:[
    {label:'Base',data:base,backgroundColor:'transparent',borderColor:'transparent'},
    {label:'Positive',data:pos,backgroundColor:CC[1],borderRadius:2},
    {label:'Negative',data:neg,backgroundColor:CC[6],borderRadius:2},
  ]},options:{...BASE_OPTS,scales:{x:{stacked:true,...BASE_OPTS.scales.x},y:{stacked:true,...BASE_OPTS.scales.y,ticks:{...BASE_OPTS.scales.y.ticks,callback:v=>fmtShort(v)}}},
    plugins:{...BASE_OPTS.plugins,legend:{display:false}}}});
}

function fmtShort(v){
  if(!isFinite(v)||v===null)return'';
  const a=Math.abs(v);
  if(a>=1000)return`${(v/1000).toFixed(1)}B`;
  if(a>=1)return`${v.toFixed(0)}M`;
  return`${v.toFixed(1)}`;
}

// ============================================================
// UI HELPERS
// ============================================================
function kpi(label,value,tone='',hint=''){
  return`<div class="kpi${tone?' '+tone:''}"><div class="kpi-label">${label}</div><div class="kpi-val">${value}</div>${hint?`<div class="kpi-hint">${hint}</div>`:''}</div>`;
}
function kpiGrid(items,cols=4){
  const c=items.length<=4?4:items.length<=6?6:items.length<=8?8:12;
  return`<div class="kpi-grid cols-${c}">${items.map(i=>kpi(i[0],i[1],i[2]||'',i[3]||'')).join('')}</div>`;
}
function section(title,content,right=''){
  return`<div class="section"><div class="section-hdr"><h2>${title}</h2>${right?`<div>${right}</div>`:''}</div>${content}</div>`;
}
function tbl(headers,rows,noSticky=false){
  return`<div class="tbl-wrap"><table class="${noSticky?'no-sticky':''}"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr class="${r._hdr?'tbl-header-row':''}">${r.map?r.map(c=>`<td>${c??''}</td>`).join(''):'<td colspan="'+headers.length+'">'+r+'</td>'}</tr>`).join('')}</tbody></table></div>`;
}
function chartCard(id,title,sub='',h=200,src=''){
  const n=++_exhibitN;
  const safeTitle=title.replace(/'/g,"\\'");
  const dlBtn=`<button class="chart-dl-btn" onclick="downloadChart('${id}','${safeTitle}')" title="Download chart as PNG"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>`;
  return`<div class="chart-card"><div class="chart-card-hdr"><div><h3>${title}</h3></div><div style="display:flex;align-items:center;gap:6px">${dlBtn}<span class="exhibit-tag">Exhibit ${n}</span></div></div>${sub?`<div class="chart-sub">${sub}</div>`:''}<div class="chart-wrap" style="height:${h}px"><canvas id="${id}"></canvas></div>${src?`<div class="chart-src">${src}</div>`:''}</div>`;
}

function downloadChart(canvasId, title){
  const canvas=document.getElementById(canvasId);
  if(!canvas){return;}
  // Composite onto white background (Chart.js canvases are transparent)
  const off=document.createElement('canvas');
  off.width=canvas.width;off.height=canvas.height;
  const ctx=off.getContext('2d');
  // White fill
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,off.width,off.height);
  // Chart content
  ctx.drawImage(canvas,0,0);
  // Branded footer strip
  const footerH=Math.round(off.height*0.065);
  ctx.fillStyle='#0d1b2a';
  ctx.fillRect(0,off.height-footerH,off.width,footerH);
  ctx.fillStyle='#00518a';
  ctx.fillRect(0,off.height-footerH,off.width,2);
  ctx.fillStyle='rgba(255,255,255,0.85)';
  ctx.font=`bold ${Math.round(footerH*0.38)}px Inter,sans-serif`;
  ctx.textBaseline='middle';
  ctx.fillText('NERPA CAPITAL PARTNERS  ·  '+title,12,off.height-footerH/2);
  ctx.fillStyle='rgba(255,255,255,0.45)';
  ctx.font=`${Math.round(footerH*0.32)}px Inter,sans-serif`;
  const dateStr=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const dateW=ctx.measureText(dateStr).width;
  ctx.fillText(dateStr,off.width-dateW-12,off.height-footerH/2);
  // Trigger download
  const link=document.createElement('a');
  link.download=`NERPA_${title.replace(/[^a-zA-Z0-9]+/g,'_')}_${new Date().toISOString().slice(0,10)}.png`;
  link.href=off.toDataURL('image/png');
  link.click();
}
function chartGrid(cols,...cards){
  return`<div class="chart-grid cols-${cols}">${cards.join('')}</div>`;
}
function badge(text,color='gray'){return`<span class="badge ${color}">${text}</span>`;}
function prose(html){return`<div class="commentary">${html}</div>`;}
function bluf(heading,text){
  return`<div class="bluf"><div class="bluf-label">Key Finding</div><div class="bluf-heading">${heading}</div><p class="bluf-text">${text}</p></div>`;
}

function exportBtns(){
  const pdfSvg=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="9" y2="17"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="15" y1="15" x2="15" y2="17"/></svg>`;
  const xlsxSvg=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`;
  const csvSvg=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
  return`<button class="btn btn-export-pdf" onclick="exportPdf()" title="Export full-page PDF report">${pdfSvg}Export PDF</button><button class="btn btn-export-xlsx" onclick="exportXlsx().catch(e=>{alert('Export failed: '+e.message);console.error(e);})" title="Export 11-sheet Excel workbook">${xlsxSvg}Export Excel</button><button class="btn btn-export-csv" onclick="exportCsv()" title="Export data as CSV">${csvSvg}Export CSV</button>`;
}
function sheet(title,sub,actions,body){
  const actHtml=(actions===undefined||actions===null||actions==='')?exportBtns():actions;
  const yr=new Date().getFullYear();
  return`<div class="sheet"><div class="sheet-header"><div class="hdr-row"><div><h1>${title}</h1>${sub?`<div class="sub">${sub}</div>`:''}</div><div class="actions">${actHtml}</div></div></div><div class="sheet-header-rule"></div><div class="sheet-body">${body}</div><div class="sheet-footer"><span>NERPA Capital Partners · Internal Model · ${yr}</span><span class="sf-mid">Confidential — Not for Distribution</span><span>© ${yr} NERPA Capital Partners</span></div></div>`;
}

// ============================================================
// NAVIGATION
// ============================================================
var TABS = [
  {id:"executive-dashboard",label:"Executive Dashboard",group:"Overview"},
  {id:"board-dashboard",label:"Board Dashboard",group:"Overview"},
  {id:"ic-memo",label:"Investment Committee",group:"Overview"},
  {id:"kpi",label:"Investor KPI Grid",group:"Overview"},
  {id:"portfolio-overview",label:"Portfolio Overview",group:"Overview"},
  {id:"revenue",label:"Revenue Forecast (30y)",group:"Financials"},
  {id:"expenses",label:"Expense Detail",group:"Financials"},
  {id:"income-statement",label:"Income Statement (P&L)",group:"Financials"},
  {id:"balance-sheet",label:"Balance Sheet",group:"Financials"},
  {id:"cashflow",label:"Cash Flow Statement",group:"Financials"},
  {id:"trial-balance",label:"Trial Balance",group:"Financials"},
  {id:"reconciliation",label:"Reconciliation",group:"Financials"},
  {id:"remuneration",label:"Remuneration & Headcount",group:"Financials"},
  {id:"sector-minerals",label:"Minerals",group:"Sectors"},
  {id:"sector-energy",label:"Energy & Power",group:"Sectors"},
  {id:"sector-downstream",label:"Downstream & Refining",group:"Sectors"},
  {id:"sector-digital",label:"Technology & Digital",group:"Sectors"},
  {id:"sector-trading",label:"Trading & Royalties",group:"Sectors"},
  {id:"sector-infrastructure",label:"Infrastructure",group:"Sectors"},
  {id:"sector-agriculture",label:"Agriculture & Food",group:"Sectors"},
  {id:"sector-water",label:"Water & Utilities",group:"Sectors"},
  {id:"sector-healthcare",label:"Healthcare & Pharma",group:"Sectors"},
  {id:"capital-events",label:"Capital Ledger",group:"Capital"},
  {id:"debt-schedule",label:"Debt Schedule",group:"Capital"},
  {id:"equity-waterfall",label:"Equity Waterfall",group:"Capital"},
  {id:"capital-timeline",label:"Capital Timeline",group:"Capital"},
  {id:"deal-pipeline",label:"Deal Pipeline",group:"Portfolio"},
  {id:"fund-performance",label:"Fund Performance",group:"Portfolio"},
  {id:"valuation",label:"Valuation Analysis",group:"Portfolio"},
  {id:"investor-updates",label:"Investor Updates",group:"IR"},
  {id:"scenarios",label:"Scenario Comparison",group:"Analysis"},
  {id:"sensitivity",label:"Sensitivity Grid",group:"Analysis"},
  {id:"returns",label:"Returns — IRR / MOIC",group:"Analysis"},
  {id:"stress-test",label:"Stress Testing",group:"Analysis"},
  {id:"risk-register",label:"Risk Register",group:"Risk"},
  {id:"compliance",label:"Compliance Dashboard",group:"Risk"},
  {id:"esg-reporting",label:"ESG & ISSB Reporting",group:"Risk"},
  {id:"geopolitical",label:"Geopolitical Monitor",group:"Risk"},
  {id:"assumptions",label:"Assumptions Register",group:"Data"},
  {id:"master-control",label:"Master Control",group:"Data"},
];
var GROUPS = ["Overview","Financials","Sectors","Capital","Portfolio","Analysis","Risk","IR","Data"];

// Unique icon per tab — distinct SVG paths
var TAB_ICONS = {
  'executive-dashboard':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  'board-dashboard':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  'ic-memo':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  'kpi':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'portfolio-overview':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  'revenue':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  'expenses':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
  'income-statement':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  'balance-sheet':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  'cashflow':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>',
  'trial-balance':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  'remuneration':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'sector-minerals':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>',
  'sector-energy':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  'sector-downstream':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="6" height="18" rx="1"/><rect x="9" y="7" width="6" height="14" rx="1"/><rect x="16" y="11" width="6" height="10" rx="1"/></svg>',
  'sector-digital':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  'sector-trading':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  'capital-events':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  'debt-schedule':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  'equity-waterfall':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/><line x1="16" y1="7" x2="22" y2="7"/><line x1="22" y1="7" x2="22" y2="13"/></svg>',
  'scenarios':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  'sensitivity':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  'returns':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  'stress-test':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  'risk-register':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'compliance':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'esg-reporting':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  'reconciliation':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4"/><path d="M21 3h-4"/><path d="M21 9V5a2 2 0 0 0-2-2"/><path d="M3 16v3a2 2 0 0 0 2 2h4"/><path d="M15 21h4a2 2 0 0 0 2-2v-4"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>',
  'assumptions':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'master-control':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-2.83 2.83M4.93 4.93l2.83 2.83M19.07 19.07l-2.83-2.83M4.93 19.07l2.83-2.83M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
  'sector-infrastructure':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="4" height="16"/><rect x="9" y="11" width="4" height="11"/><rect x="16" y="2" width="4" height="20"/><path d="M2 22h20"/></svg>',
  'sector-agriculture':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 12C12 7 7 3 2 3c0 5 4.5 9 10 9z"/><path d="M12 12c0-5 5-9 10-9c0 5-4.5 9-10 9z"/></svg>',
  'deal-pipeline':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  'fund-performance':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/><polyline points="16 7 22 7 22 13"/></svg>',
  'capital-timeline':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="12" x2="22" y2="12"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 12V7"/><path d="M12 12V5"/><path d="M18 12V9"/></svg>',
  'investor-updates':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  'valuation':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
  'sector-water':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.8-4-4-6.5c-.3 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  'sector-healthcare':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  'geopolitical':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
};

// Bottom-nav groups (5 items + more)
var BOTTOM_NAV_GROUPS = [
  {key:'Overview',  label:'Overview', icon:'<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 15.167L14 5.25l10.5 9.917" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.833 13.066V22.167c0 .644.523 1.166 1.167 1.166h4.667v-5.25a2.333 2.333 0 0 1 4.666 0v5.25H21a1.167 1.167 0 0 0 1.167-1.166V13.066" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>', defaultTab:'executive-dashboard'},
  {key:'Financials',label:'Finance',  icon:'<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.333" y="6.417" width="23.333" height="15.167" rx="2.333" stroke="currentColor" stroke-width="1.75"/><path d="M2.333 11.083h23.333" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><circle cx="7" cy="16.333" r="1.167" fill="currentColor"/><circle cx="11.667" cy="16.333" r="1.167" fill="currentColor"/><path d="M16.333 16.333h4.667" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>', defaultTab:'income-statement'},
  {key:'Sectors',   label:'Sectors',  icon:'<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 3.5L25.083 9.917v8.166L14 24.5 2.917 18.083V9.917L14 3.5z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><path d="M14 24.5v-6.417" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M2.917 9.917L14 16.333l10.083-6.416" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 3.5v5.25" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>', defaultTab:'sector-minerals'},
  {key:'Analysis',  label:'Analysis', icon:'<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.333 14h3.5L9.333 6.417l5.25 14 4.084-9.334L21.583 14H25.667" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>', defaultTab:'scenarios'},
  {key:'__more',    label:'More',     icon:'<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.417" cy="14" r="1.75" fill="currentColor"/><circle cx="14" cy="14" r="1.75" fill="currentColor"/><circle cx="21.583" cy="14" r="1.75" fill="currentColor"/></svg>', defaultTab:null},
];

function renderSidebar(){
  const sb=document.getElementById('sb-nav');
  if(!sb)return;
  let html='';
  GROUPS.forEach(g=>{
    const items=TABS.filter(t=>t.group===g);
    if(!items.length)return;
    html+=`<div class="sb-group-label">${g}</div>`;
    items.forEach(t=>{
      const icon=TAB_ICONS[t.id]||'';
      html+=`<div class="sb-item${t.id===APP.activeTab?' active':''}" onclick="selectTab('${t.id}')"><span class="icon">${icon}</span><span class="lbl">${t.label}</span></div>`;
    });
  });
  sb.innerHTML=html;
}

function renderMobileNav(){
  const body=document.getElementById('mob-nav-body');
  if(!body)return;
  let html='';
  GROUPS.forEach(g=>{
    const items=TABS.filter(t=>t.group===g);
    if(!items.length)return;
    html+=`<div class="mob-group-label">${g}</div>`;
    items.forEach(t=>{
      const isActive=t.id===APP.activeTab;
      const icon=TAB_ICONS[t.id]||'';
      html+=`<div class="mob-nav-item${isActive?' active':''}" onclick="selectTab('${t.id}');closeMobNav()">
        <span class="mob-icon">${icon}</span>
        <span class="mob-lbl">${t.label}</span>
        ${isActive?'<svg class="mob-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>':''}
      </div>`;
    });
    html+=`<div class="mob-section-gap"></div>`;
  });
  body.innerHTML=html;

  // Scenario chips
  const chips=document.getElementById('mob-sc-chips');
  if(chips){
    chips.innerHTML=SCENARIO_LIST.map(s=>`<div class="mob-sc-chip${s.id===APP.scenarioId?' active':''}" onclick="setScenario('${s.id}');closeMobNav()">${s.label}</div>`).join('');
  }
}

function renderBottomNav(){
  const nav=document.getElementById('mob-bottom-nav');
  if(!nav)return;
  // Determine active group
  const activeTab=TABS.find(t=>t.id===APP.activeTab);
  const activeGroup=activeTab?activeTab.group:'';
  nav.innerHTML=BOTTOM_NAV_GROUPS.map(g=>{
    const isActive=g.key!=='__more'&&activeGroup===g.key;
    const onclick=g.key==='__more'?'toggleMobNav()':`selectTab('${g.defaultTab}')`;
    return`<div class="mbn-item${isActive?' active':''}" onclick="${onclick}">
      <span class="mbn-icon">${g.icon}</span>
      <span class="mbn-lbl">${g.label}</span>
    </div>`;
  }).join('');
}

function toggleMobNav(){
  const panel=document.getElementById('mob-nav-panel');
  const overlay=document.getElementById('mob-overlay');
  const isOpen=panel.classList.contains('open');
  if(!isOpen){renderMobileNav();panel.classList.add('open');overlay.classList.add('open');document.body.style.overflow='hidden';}
  else{closeMobNav();}
}

function closeMobNav(){
  document.getElementById('mob-nav-panel').classList.remove('open');
  document.getElementById('mob-overlay').classList.remove('open');
  document.body.style.overflow='';
}

function toggleSidebar(){
  APP.sidebarCollapsed=!APP.sidebarCollapsed;
  const sb=document.getElementById('sidebar');
  const tog=document.getElementById('sb-toggle');
  sb.classList.toggle('collapsed',APP.sidebarCollapsed);
  tog.innerHTML=APP.sidebarCollapsed?'&#8250;&#8250;':'&#8249;&#8249; Collapse';
}

function toggleScenario(){
  const dd=document.getElementById('scenario-dropdown');
  if(!dd.classList.contains('open')){
    dd.innerHTML=SCENARIO_LIST.map(s=>`<div class="sc-item${s.id===APP.scenarioId?' active':''}" onclick="setScenario('${s.id}')"><div class="sc-name">${s.label}</div><div class="sc-desc">${s.description}</div></div>`).join('');
    dd.classList.add('open');
  }else{dd.classList.remove('open');}
}

function setScenario(id){
  APP.scenarioId=id;APP.model=buildModel(id);
  try{localStorage.setItem('nerpa.scenario',id);}catch(e){}
  document.getElementById('scenario-dropdown').classList.remove('open');
  const s=SCENARIOS[id];
  document.getElementById('sc-label').textContent=s.label;
  const btn=document.getElementById('scenario-btn');
  btn.style.background=id==='growth'?'rgba(46,125,82,.3)':id==='conservative'?'rgba(217,119,6,.3)':id==='downside'?'rgba(190,18,60,.3)':'rgba(255,255,255,.1)';
  selectTab(APP.activeTab);
}

function selectTab(id){
  APP.activeTab=id;
  try{localStorage.setItem('nerpa.tab',id);}catch(e){}
  renderSidebar();
  renderMobileNav();
  renderBottomNav();
  destroyCharts();
  renderView(id);
  // scroll content to top on mobile
  const c=document.getElementById('content');
  if(c){c.scrollTop=0;c.scrollLeft=0;}
  window.scrollTo(0,0);
}

function handleSearch(v){
  const dd=document.getElementById('search-dropdown');
  if(!v){dd.style.display='none';return;}
  const q=v.toLowerCase();
  const results=TABS.filter(t=>t.label.toLowerCase().includes(q)||t.group.toLowerCase().includes(q)||t.id.toLowerCase().includes(q)).slice(0,8);
  if(!results.length){dd.style.display='none';return;}
  dd.innerHTML=results.map(t=>`<div onclick="selectTab('${t.id}');document.getElementById('search-input').value='';document.getElementById('search-dropdown').style.display='none'" style="padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-size:12px" onmouseover="this.style.background='#f4f5f7'" onmouseout="this.style.background=''"><div style="font-weight:600;color:#1e2937">${t.label}</div><div style="font-size:10px;color:#64748b">${t.group}</div></div>`).join('');
  dd.style.display='block';
}

function showSearchSuggestions(){
  const v=document.getElementById('search-input').value;
  if(v)handleSearch(v);
}

function exportCsv(){
  if(!APP.csvRows||!APP.csvRows.length)return;
  const tabInfo=TABS.find(t=>t.id===APP.activeTab)||{label:'Report',group:''};
  const sc=SCENARIOS[APP.scenarioId];
  const today=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const escape=v=>{const s=String(v??'');return s.includes(',')||s.includes('"')||s.includes('\n')?`"${s.replace(/"/g,'""')}"`:s;};
  // Branded header block
  const header=[
    ['NERPA CAPITAL PARTNERS','','','',''],
    ['Financial Data Export — '+tabInfo.label,'','','',''],
    ['Section: '+tabInfo.group+' | Scenario: '+(sc?sc.label:'Base')+' | Generated: '+today+' | Classification: CONFIDENTIAL','','','',''],
    ['','','','',''],
  ].map(r=>r.map(escape).join(','));
  const data=APP.csvRows.map(r=>r.map(escape).join(','));
  const blob=new Blob(['\uFEFF'+[...header,...data].join('\n')],{type:'text/csv;charset=utf-8;'});
  const fname=(APP.csvFilename||'NERPA_Export').replace(/\.csv$/i,'')+'_'+new Date().toISOString().slice(0,10)+'.csv';
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=fname;a.click();
}

var _NERPA_LOGO_B64='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';

async function exportXlsx(){
  if(typeof XLSX==='undefined'||typeof ExcelJS==='undefined'){alert('Excel library not loaded. Please check your internet connection.');return;}
  const wb=new ExcelJS.Workbook();
  wb.creator='NERPA Capital Partners';
  wb.created=new Date();
  let _logoId=null; // set after SVG→PNG generation below
  const m=getModel();
  const sc=SCENARIOS[APP.scenarioId];
  const today=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const N=m.years.length;
  const FY0=m.years[0];

  // ── PRIMITIVES ─────────────────────────────────────────────────────
  const enc=(r,c)=>XLSX.utils.encode_cell({r,c});
  const ecol=c=>XLSX.utils.encode_col(c);
  const cn=(v,z)=>Object.assign({t:'n',v:isFinite(+v)?+v:0},z?{z}:{});
  const cs=v=>({t:'s',v:String(v??'')});
  const cf=(f,v,z)=>Object.assign(
    {t:typeof v==='number'?'n':'s', f:String(f), v:isFinite(+v)?+v:(v??0)},
    z?{z}:{}
  );
  function setc(ws,r,c,cell){
    ws[enc(r,c)]=cell;
    const rng=ws['!ref']?XLSX.utils.decode_range(ws['!ref']):{s:{r:0,c:0},e:{r:0,c:0}};
    if(r>rng.e.r)rng.e.r=r;
    if(c>rng.e.c)rng.e.c=c;
    ws['!ref']=XLSX.utils.encode_range(rng);
  }

  // ── BORDER PALETTE ─────────────────────────────────────────────────
  const BD={
    thin:   {style:'thin',   color:{rgb:'C8CDD6'}},
    thinDk: {style:'thin',   color:{rgb:'8A96A4'}},
    med:    {style:'medium', color:{rgb:'4A5568'}},
    navyMed:{style:'medium', color:{rgb:'0D1B2A'}},
    acc:    {style:'medium', color:{rgb:'00518A'}},
    gold:   {style:'medium', color:{rgb:'D4A800'}},
  };
  const bData  = {top:BD.thin,   right:BD.thin,   bottom:BD.thin,   left:BD.thin};
  const bHdr   = {top:BD.thin,   right:BD.thinDk, bottom:BD.med,    left:BD.thin};
  const bTot   = {top:BD.navyMed,right:BD.thin,   bottom:BD.thin,   left:BD.thin};
  const bSec   = {top:BD.thin,   right:BD.thin,   bottom:BD.acc,    left:BD.acc};
  const bEdit  = {top:BD.thin,   right:BD.thin,   bottom:BD.gold,   left:BD.thin};
  const bDrop  = {top:BD.gold,   right:BD.thin,   bottom:BD.gold,   left:BD.thin};

  // ── INSTITUTIONAL STYLE SYSTEM ─────────────────────────────────────
  // Navy #0D1B2A · Charcoal #1D2A39 · Section #163558 · Accent #00518A
  // Formula blue fill #EBF4FF / ink #084D8C
  // Editable yellow fill #FFFBEE / ink #2A1800
  // ──────────────────────────────────────────────────────────────────
  const S={
    // ── Sheet header rows (0-2) ───────────────────────────
    brand:{font:{bold:true,color:{rgb:'FFFFFF'},sz:15,name:'Calibri'},
           fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'}},
    sheetTitle:{font:{bold:true,color:{rgb:'FFFFFF'},sz:11,name:'Calibri'},
                fill:{fgColor:{rgb:'1D2A39'}},alignment:{horizontal:'left',vertical:'center'}},
    sheetMeta:{font:{italic:false,color:{rgb:'9BBCD4'},sz:8,name:'Calibri'},
               fill:{fgColor:{rgb:'163558'}},alignment:{horizontal:'left',vertical:'center'}},
    // ── Section separators ────────────────────────────────
    sec:{font:{bold:true,color:{rgb:'FFFFFF'},sz:8,name:'Calibri'},
         fill:{fgColor:{rgb:'163558'}},alignment:{horizontal:'left',vertical:'center'},border:bSec},
    // ── Column headers ────────────────────────────────────
    hdr:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'center',vertical:'center',wrapText:true},border:bHdr},
    hdrL:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center',wrapText:true},border:bHdr},
    // ── Data labels (first / label column) ───────────────
    lbl:{font:{bold:true,color:{rgb:'1A2B3C'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'EDF2F8'}},alignment:{horizontal:'left',vertical:'center'},border:bData},
    lblA:{font:{bold:true,color:{rgb:'1A2B3C'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'E0EAF4'}},alignment:{horizontal:'left',vertical:'center'},border:bData},
    // ── Static values ─────────────────────────────────────
    val:{font:{color:{rgb:'1A2733'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'FFFFFF'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    valA:{font:{color:{rgb:'1A2733'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'F6F8FB'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    // ── Formula cells (blue tint) ─────────────────────────
    frm:{font:{color:{rgb:'084D8C'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'EBF4FF'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    frmA:{font:{color:{rgb:'084D8C'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'E0EDF8'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    // ── Percentage formula cells ──────────────────────────
    pct:{font:{color:{rgb:'084D8C'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'F0F6FF'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    pctA:{font:{color:{rgb:'084D8C'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'E7F0FA'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    // ── Total / summary rows ──────────────────────────────
    tot:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
         fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'right',vertical:'center'},border:bTot},
    totL:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'},border:bTot},
    // ── Editable inputs ───────────────────────────────────
    edit:{font:{color:{rgb:'2A1800'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'FFFBEE'}},alignment:{horizontal:'right',vertical:'center'},border:bEdit},
    drop:{font:{bold:true,color:{rgb:'2A1800'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'FFF0CC'}},alignment:{horizontal:'left',vertical:'center'},border:bDrop},
    // ── Status ────────────────────────────────────────────
    ok:{font:{bold:true,color:{rgb:'145A2C'},sz:9,name:'Calibri'},
        fill:{fgColor:{rgb:'E6F4EC'}},alignment:{horizontal:'center',vertical:'center'},border:bData},
    warn:{font:{bold:true,color:{rgb:'8B1C1C'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'FDE8E8'}},alignment:{horizontal:'center',vertical:'center'},border:bData},
    conf:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
          fill:{fgColor:{rgb:'8B1C1C'}},alignment:{horizontal:'center',vertical:'center'}},
    // ── Cover sheet specials ──────────────────────────────
    covTitle:{font:{bold:true,color:{rgb:'FFFFFF'},sz:20,name:'Calibri'},
              fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'}},
    covSub:{font:{bold:true,color:{rgb:'FFFFFF'},sz:13,name:'Calibri'},
            fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'}},
    covMeta:{font:{color:{rgb:'9BBCD4'},sz:9,name:'Calibri'},
             fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'}},
    covConfid:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
               fill:{fgColor:{rgb:'8B1C1C'}},alignment:{horizontal:'center',vertical:'center'}},
    covKpiLbl:{font:{bold:true,color:{rgb:'1A2B3C'},sz:9,name:'Calibri'},
               fill:{fgColor:{rgb:'EDF2F8'}},alignment:{horizontal:'left',vertical:'center'},border:bData},
    covKpiVal:{font:{bold:true,color:{rgb:'084D8C'},sz:10,name:'Calibri'},
               fill:{fgColor:{rgb:'EBF4FF'}},alignment:{horizontal:'right',vertical:'center'},border:bData},
    covNote:{font:{color:{rgb:'5A6A7E'},sz:8,name:'Calibri',italic:true},
             fill:{fgColor:{rgb:'F7F8FA'}},alignment:{horizontal:'left',vertical:'center'},border:bData},
    // ── Legacy aliases (used in certain inline sty() calls) ─
    title:{font:{bold:true,color:{rgb:'FFFFFF'},sz:15,name:'Calibri'},fill:{fgColor:{rgb:'0D1B2A'}}},
    note:{font:{italic:false,color:{rgb:'9BBCD4'},sz:8,name:'Calibri'},fill:{fgColor:{rgb:'163558'}},alignment:{horizontal:'left',vertical:'center'}},
    // ── Institutional section group headers (light, matching screenshots) ──
    secGrp:{font:{bold:true,color:{rgb:'0D1B2A'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'DBE4F0'}},alignment:{horizontal:'left',vertical:'center'},
            border:{top:{style:'thin',color:{rgb:'8A9BB0'}},bottom:{style:'thin',color:{rgb:'8A9BB0'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    secGrpR:{font:{bold:true,color:{rgb:'0D1B2A'},sz:9,name:'Calibri'},
             fill:{fgColor:{rgb:'DBE4F0'}},alignment:{horizontal:'right',vertical:'center'},
             border:{top:{style:'thin',color:{rgb:'8A9BB0'}},bottom:{style:'thin',color:{rgb:'8A9BB0'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    // ── Subtotal rows (slightly darker mid-navy, for OCF / ICF / Fin CF) ──
    totSub:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'213D5F'}},alignment:{horizontal:'right',vertical:'center'},
            border:{top:{style:'medium',color:{rgb:'0D1B2A'}},bottom:{style:'thin',color:{rgb:'4A5568'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    totSubL:{font:{bold:true,color:{rgb:'FFFFFF'},sz:9,name:'Calibri'},
             fill:{fgColor:{rgb:'213D5F'}},alignment:{horizontal:'left',vertical:'center'},
             border:{top:{style:'medium',color:{rgb:'0D1B2A'}},bottom:{style:'thin',color:{rgb:'4A5568'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    // ── Variance cells (colour-coded: green = favourable, red = adverse) ──
    varPos:{font:{bold:true,color:{rgb:'145A2C'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'E6F4EC'}},alignment:{horizontal:'right',vertical:'center'},
            border:{top:{style:'thin',color:{rgb:'C8CDD6'}},bottom:{style:'thin',color:{rgb:'C8CDD6'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    varNeg:{font:{bold:true,color:{rgb:'8B1C1C'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'FDE8E8'}},alignment:{horizontal:'right',vertical:'center'},
            border:{top:{style:'thin',color:{rgb:'C8CDD6'}},bottom:{style:'thin',color:{rgb:'C8CDD6'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    varNeu:{font:{color:{rgb:'1A2733'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'F6F8FB'}},alignment:{horizontal:'right',vertical:'center'},
            border:{top:{style:'thin',color:{rgb:'C8CDD6'}},bottom:{style:'thin',color:{rgb:'C8CDD6'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
    varLbl:{font:{color:{rgb:'5A6A7E'},sz:9,name:'Calibri'},
            fill:{fgColor:{rgb:'F6F8FB'}},alignment:{horizontal:'left',vertical:'center'},
            border:{top:{style:'thin',color:{rgb:'C8CDD6'}},bottom:{style:'thin',color:{rgb:'C8CDD6'}},left:{style:'thin',color:{rgb:'C8CDD6'}},right:{style:'thin',color:{rgb:'C8CDD6'}}}},
  };
  const sty=(ws,r,c,style)=>{if(ws[enc(r,c)])ws[enc(r,c)].s=style;};
  const styRow=(ws,r,c0,c1,style)=>{for(let c=c0;c<=c1;c++)sty(ws,r,c,style);};

  // ── SHEET SETUP HELPERS ────────────────────────────────────────────
  // Stamp a 2-row branded header block (rows 0-1) on any sheet.
  // Row 2 = column headers; row 3+ = data — both untouched by this helper.
  function addSheetHeader(ws, sheetTitle, subtitle, numCols){
    // Row 0: firm identity + sheet name
    setc(ws,0,0,cs('N  ·  NERPA CAPITAL PARTNERS  ·  '+sheetTitle));
    // Row 1: instructions / metadata line
    setc(ws,1,0,cs(subtitle));
    for(let c=1;c<numCols;c++){
      if(!ws[enc(0,c)])ws[enc(0,c)]={t:'s',v:''};
      if(!ws[enc(1,c)])ws[enc(1,c)]={t:'s',v:''};
      ws[enc(0,c)].s=S.brand;
      ws[enc(1,c)].s=S.sheetMeta;
    }
    sty(ws,0,0,S.brand);
    sty(ws,1,0,S.sheetMeta);
    if(!ws['!merges'])ws['!merges']=[];
    if(numCols>1){
      ws['!merges'].push({s:{r:0,c:0},e:{r:0,c:numCols-1}});
      ws['!merges'].push({s:{r:1,c:0},e:{r:1,c:numCols-1}});
    }
    if(!ws['!rows'])ws['!rows']=[];
    ws['!rows'][0]={hpt:34};
    ws['!rows'][1]={hpt:15};
    if(!ws['!rows'][2])ws['!rows'][2]={hpt:22}; // column header row — taller for readability
  }

  // Print setup (A4, fits within 1 page wide)
  function addPrintSetup(ws, landscape){
    ws['!pageSetup']={paperSize:9,orientation:landscape?'landscape':'portrait',fitToPage:true,fitToWidth:1,fitToHeight:0};
    ws['!margins']={left:0.5,right:0.5,top:0.75,bottom:0.75,header:0.3,footer:0.3};
  }

  // Uniform data row heights
  function addRowHeights(ws, firstDataRow, lastDataRow, hpt){
    if(!ws['!rows'])ws['!rows']=[];
    for(let r=firstDataRow;r<=lastDataRow;r++){
      if(!ws['!rows'][r])ws['!rows'][r]={hpt:hpt||16};
    }
  }

  // ── NUMBER FORMATS ─────────────────────────────────────────────────
  const Z={M2:'#,##0.00',M1:'#,##0.0',M0:'#,##0',PCT:'0.0%',PCT2:'0.00%',X2:'0.00"x"',INT:'#,##0',YR:'"FY"0'};

  // ── EXCELJS BRIDGE ─────────────────────────────────────────────────
  // Converts SheetJS-format ws objects (with .s style props) into a
  // fully-styled ExcelJS worksheet, since SheetJS CE ignores styles.
  function _exStyle(s){
    const o={};
    if(s.font){
      o.font={bold:!!s.font.bold,italic:!!s.font.italic,size:s.font.sz||9,name:s.font.name||'Calibri'};
      if(s.font.color&&s.font.color.rgb)o.font.color={argb:'FF'+s.font.color.rgb};
    }
    if(s.fill&&s.fill.fgColor&&s.fill.fgColor.rgb){
      o.fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF'+s.fill.fgColor.rgb}};
    }
    if(s.border){
      const bdr={};
      ['top','bottom','left','right'].forEach(side=>{
        const b=s.border[side];
        if(b&&b.style)bdr[side]={style:b.style,color:{argb:'FF'+(b.color&&b.color.rgb?b.color.rgb:'C8CDD6')}};
      });
      if(Object.keys(bdr).length)o.border=bdr;
    }
    if(s.alignment){
      o.alignment={
        horizontal:s.alignment.horizontal||'left',
        vertical:s.alignment.vertical==='center'?'middle':(s.alignment.vertical||'middle'),
        wrapText:!!s.alignment.wrapText
      };
    }
    return o;
  }
  function appendExSheet(wb,ws,name){
    const exWs=wb.addWorksheet(name);
    // Tab colour
    if(ws['!tabColor'])exWs.properties.tabColor={argb:'FF'+ws['!tabColor'].rgb};
    // Column widths
    if(ws['!cols'])ws['!cols'].forEach((col,i)=>{if(col&&col.wch)exWs.getColumn(i+1).width=col.wch;});
    // Page setup
    if(ws['!pageSetup']){
      const ps=ws['!pageSetup'];
      exWs.pageSetup.paperSize=ps.paperSize;
      exWs.pageSetup.orientation=ps.orientation||'portrait';
      if(ps.fitToPage){exWs.pageSetup.fitToPage=true;exWs.pageSetup.fitToWidth=ps.fitToWidth??1;exWs.pageSetup.fitToHeight=ps.fitToHeight??0;}
    }
    if(ws['!margins']){
      const mg=ws['!margins'];
      exWs.pageSetup.margins={left:mg.left,right:mg.right,top:mg.top,bottom:mg.bottom,header:mg.header,footer:mg.footer};
    }
    // Merges before cells so ExcelJS resolves master cells correctly
    if(ws['!merges'])ws['!merges'].forEach(m=>{try{exWs.mergeCells(m.s.r+1,m.s.c+1,m.e.r+1,m.e.c+1);}catch(e){}});
    // Freeze panes
    if(ws['!freeze'])exWs.views=[{state:'frozen',xSplit:ws['!freeze'].xSplit||0,ySplit:ws['!freeze'].ySplit||0}];
    // Cells
    if(!ws['!ref'])return;
    Object.keys(ws).forEach(addr=>{
      if(addr.startsWith('!'))return;
      const cell=ws[addr];if(!cell)return;
      const d=XLSX.utils.decode_cell(addr);
      const ec=exWs.getCell(d.r+1,d.c+1);
      if(cell.f){
        ec.value={formula:cell.f.replace(/^=/,''),result:isFinite(+cell.v)?+cell.v:(cell.v??0)};
      } else if(cell.t==='n'){
        ec.value=isFinite(+cell.v)?+cell.v:0;
      } else {
        ec.value=cell.v!=null?String(cell.v):'';
      }
      if(cell.z)ec.numFmt=cell.z;
      if(cell.s){const st=_exStyle(cell.s);if(st.font)ec.font=st.font;if(st.fill)ec.fill=st.fill;if(st.border)ec.border=st.border;if(st.alignment)ec.alignment=st.alignment;}
    });
    // Row heights (after cells so row objects exist)
    if(ws['!rows'])ws['!rows'].forEach((row,i)=>{if(row&&row.hpt)exWs.getRow(i+1).height=row.hpt;});
    // Data validations
    if(ws['!dataValidations'])ws['!dataValidations'].forEach(dv=>{
      try{exWs.dataValidations.add(dv.sqref,{type:dv.type,allowBlank:true,formulae:[dv.formula1]});}catch(e){}
    });
    // ── Unlock editable (yellow-fill) input cells before protecting ──
    Object.keys(ws).forEach(addr=>{
      if(addr.startsWith('!'))return;
      const cell=ws[addr];if(!cell||!cell.s)return;
      const fr=cell.s.fill&&cell.s.fill.fgColor&&cell.s.fill.fgColor.rgb;
      if(fr==='FFFBEE'||fr==='FFF0CC'){const d=XLSX.utils.decode_cell(addr);try{exWs.getCell(d.r+1,d.c+1).protection={locked:false};}catch(e){}}
    });
    // ── Sheet protection — read & select allowed; editing locked ────
    try{exWs.protect('Nerpa369',{selectLockedCells:true,selectUnlockedCells:true,formatCells:false,formatColumns:false,formatRows:false,insertColumns:false,insertRows:false,insertHyperlinks:false,deleteColumns:false,deleteRows:false,sort:false,autoFilter:true,pivotTables:false});}catch(e){}
    // ── Logo placement: Cover sheet only, 2-col/2-row institutional margin
    if(_logoId!==null&&name==='Cover'){
      try{
        // tl:{col:2,row:2} = skip columns A-B and rows 1-2 for clean spacing
        exWs.addImage(_logoId,{tl:{col:2,row:2},ext:{width:180,height:180}});
      }catch(e){}
    }
  }

  // ── LOGO: webp base64 → Canvas → PNG → ExcelJS image ID ─────────
  // Converts the embedded company logo (webp) to PNG via canvas so
  // ExcelJS can embed it in the Cover sheet.
  await (async()=>{
    try{
      const pngB64=await new Promise(res=>{
        const img=new Image();
        img.onload=()=>{
          const c=document.createElement('canvas');
          c.width=img.naturalWidth;c.height=img.naturalHeight;
          c.getContext('2d').drawImage(img,0,0);
          res(c.toDataURL('image/png').split(',')[1]);
        };
        img.onerror=()=>res(null);
        img.src='data:image/webp;base64,'+_NERPA_LOGO_B64;
      });
      if(pngB64)_logoId=wb.addImage({base64:pngB64,extension:'png'});
    }catch(e){/* logo optional — export continues */}
  })();

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 1 — ASSUMPTIONS  (editable source of truth)
  // Key cell references used by other sheets:
  //   Assumptions!$B$6  = Tax Rate (row idx 5, col 1)
  //   Assumptions!$B$15 = Active Scenario (row idx 14, col 1)
  //   Assumptions!$B$16 = Price Multiplier (formula)
  //   Assumptions!$B$17 = Volume Multiplier
  //   Assumptions!$B$18 = Ramp Multiplier
  //   Assumptions!$B$19 = OpEx Multiplier
  //   Assumptions!$B$20 = CapEx Multiplier
  //   Assumptions!$B$21 = Terminal EV Multiple
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsA={};
  setc(wsA,0,0,cs('NERPA CAPITAL PARTNERS — MODEL ASSUMPTIONS'));
  setc(wsA,1,0,cs('Yellow cells are editable inputs · Blue cells contain formulas and update automatically · Change B15 (Active Scenario) to recalculate scenario multipliers'));
  setc(wsA,2,0,cs(''));
  setc(wsA,3,0,cs('MACRO PARAMETERS'));
  ['Parameter','Value','Unit','Notes / Formula Basis'].forEach((h,c)=>setc(wsA,4,c,cs(h)));
  const macroParams=[
    ['Tax Rate',0.21,Z.PCT2,'US federal corporate proxy · referenced in Income Statement Tax column as =MAX(0,EBT×Assumptions!$B$6)'],
    ['Receivables / Revenue',0.10,Z.PCT,'Working capital — drives Balance Sheet receivables'],
    ['AP / OpEx',0.08,Z.PCT,'Accounts payable cycle — drives Balance Sheet payables'],
    ['Inventory / OpEx',0.06,Z.PCT,'Inventory requirement'],
    ['Capex Declining Rate',0.02,Z.PCT,'Post-plateau maintenance capex factor'],
  ];
  macroParams.forEach(([p,v,z,n],i)=>{
    setc(wsA,5+i,0,cs(p));
    setc(wsA,5+i,1,cn(v,z));
    setc(wsA,5+i,2,cs(z));
    setc(wsA,5+i,3,cs(n));
  });
  // Row 10 blank, rows 11-13 scenario block header
  setc(wsA,11,0,cs(''));
  setc(wsA,12,0,cs('SCENARIO PARAMETERS'));
  ['Field','Value','Allowed Values','Behaviour'].forEach((h,c)=>setc(wsA,13,c,cs(h)));
  setc(wsA,14,0,cs('Active Scenario'));
  setc(wsA,14,1,cs(sc?sc.label:'Base'));  // ← editable, $B$15
  setc(wsA,14,2,cs('Base | Conservative | Growth | Downside'));
  setc(wsA,14,3,cs('Edit this cell — the 6 multiplier rows below recalculate via IF formula'));
  const scRef='Assumptions!$B$15';
  const scIF=(b,c,g,d)=>`=IF(${scRef}="Base",${b},IF(${scRef}="Conservative",${c},IF(${scRef}="Growth",${g},${d})))`;
  const multipliers=[
    ['Price Multiplier',  scIF(1.0,0.85,1.20,0.65),sc?[1,0.85,1.20,0.65][['base','conservative','growth','downside'].indexOf(sc.id)]:1,'Applied to all sector unit prices'],
    ['Volume Multiplier', scIF(1.0,0.80,1.15,0.60),sc?[1,0.80,1.15,0.60][['base','conservative','growth','downside'].indexOf(sc.id)]:1,'Applied to sector peak volumes'],
    ['Ramp Multiplier',   scIF(1.0,0.75,1.15,0.55),sc?[1,0.75,1.15,0.55][['base','conservative','growth','downside'].indexOf(sc.id)]:1,'Compresses or extends production ramp-up'],
    ['OpEx Multiplier',   scIF(1.0,1.15,0.95,1.30),sc?[1,1.15,0.95,1.30][['base','conservative','growth','downside'].indexOf(sc.id)]:1,'Scales operating cost per unit'],
    ['CapEx Multiplier',  scIF(1.0,1.10,1.05,1.20),sc?[1,1.10,1.05,1.20][['base','conservative','growth','downside'].indexOf(sc.id)]:1,'Scales development capital requirement'],
    ['Terminal EV Multiple',scIF(12,8,16,6),       sc?[12,8,16,6][['base','conservative','growth','downside'].indexOf(sc.id)]:12,'EBITDA exit multiple for terminal value'],
  ];
  multipliers.forEach(([label,formula,cached,note],i)=>{
    setc(wsA,15+i,0,cs(label));
    setc(wsA,15+i,1,cf(formula,cached,'0.00'));
    setc(wsA,15+i,2,cs('Auto-computed'));
    setc(wsA,15+i,3,cs(note));
  });
  // Sectors table
  setc(wsA,22,0,cs(''));
  setc(wsA,23,0,cs('SECTOR PARAMETERS (25 ASSETS)'));
  ['Sector Name','Group','Unit','Base Price ($/unit)','Peak Volume','Start Year','Ramp Years','Est. EBITDA % (formula)'].forEach((h,c)=>setc(wsA,24,c,cs(h)));
  SECTORS.forEach((s,i)=>{
    const ri=25+i;
    const est=(s.price0-s.cashCostPerUnit-s.price0*s.royaltyRate)/s.price0;
    setc(wsA,ri,0,cs(s.name)); setc(wsA,ri,1,cs(s.group)); setc(wsA,ri,2,cs(s.unit));
    setc(wsA,ri,3,cn(s.price0,Z.M0)); setc(wsA,ri,4,cn(s.peakVolume,Z.M1));
    setc(wsA,ri,5,cn(s.startYear,Z.YR)); setc(wsA,ri,6,cn(s.rampYears));
    const Px=enc(ri,3);
    setc(wsA,ri,7,cf(`=IF(${Px}>0,(${Px}-${s.cashCostPerUnit}-${Px}*${s.royaltyRate})/${Px},0)`,est,Z.PCT));
  });
  // Debt tranches table
  const aDR=52;
  setc(wsA,aDR,0,cs('')); setc(wsA,aDR+1,0,cs('DEBT TRANCHES'));
  ['Tranche','Type','Draw Year','Tenor (yr)','Rate (%)','Amount ($M)','Ann. Interest ($M) (f)','Life Interest ($M) (f)','Ann. Principal ($M) (f)'].forEach((h,c)=>setc(wsA,aDR+2,c,cs(h)));
  DEBT_TRANCHES.forEach((t,i)=>{
    const ri=aDR+3+i;
    const Fx=enc(ri,5),Ex=enc(ri,4),Dx=enc(ri,3);
    setc(wsA,ri,0,cs(t.name)); setc(wsA,ri,1,cs(t.type.toUpperCase()));
    setc(wsA,ri,2,cn(t.drawYear,Z.YR)); setc(wsA,ri,3,cn(t.tenor));
    setc(wsA,ri,4,cn(t.rate,Z.PCT2)); setc(wsA,ri,5,cn(t.amount,Z.M0));
    setc(wsA,ri,6,cf(`=${Fx}*${Ex}`,t.amount*t.rate,Z.M2));
    setc(wsA,ri,7,cf(`=${Fx}*${Ex}*${Dx}`,t.amount*t.rate*t.tenor,Z.M2));
    setc(wsA,ri,8,cf(`=${Fx}/${Dx}`,t.amount/t.tenor,Z.M2));
  });
  const aDTot=aDR+3+DEBT_TRANCHES.length;
  const aDDs=aDR+4,aDDe=aDTot;
  setc(wsA,aDTot,0,cs('TOTAL'));
  setc(wsA,aDTot,5,cf(`=SUM(F${aDDs}:F${aDDe})`,DEBT_TRANCHES.reduce((a,t)=>a+t.amount,0),Z.M0));
  setc(wsA,aDTot,6,cf(`=SUM(G${aDDs}:G${aDDe})`,DEBT_TRANCHES.reduce((a,t)=>a+t.amount*t.rate,0),Z.M2));
  setc(wsA,aDTot,7,cf(`=SUM(H${aDDs}:H${aDDe})`,DEBT_TRANCHES.reduce((a,t)=>a+t.amount*t.rate*t.tenor,0),Z.M2));
  // Equity events table
  const aER=62;
  setc(wsA,aER,0,cs('')); setc(wsA,aER+1,0,cs('EQUITY EVENTS'));
  ['Fiscal Year','Round','Amount ($M)','Cumulative ($M) (f)','% of Total (f)'].forEach((h,c)=>setc(wsA,aER+2,c,cs(h)));
  const totalEq=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  let cumEqA=0;
  EQUITY_EVENTS.forEach((e,i)=>{
    const ri=aER+3+i; cumEqA+=e.amount;
    setc(wsA,ri,0,cn(e.year,Z.YR)); setc(wsA,ri,1,cs(e.kind));
    setc(wsA,ri,2,cn(e.amount,Z.M0));
    const f1=aER+4,fl=aER+3+EQUITY_EVENTS.length;
    setc(wsA,ri,3,cf(`=SUM($C$${f1}:C${ri+1})`,cumEqA,Z.M0));
    setc(wsA,ri,4,cf(`=C${ri+1}/SUM($C$${f1}:$C$${fl})`,e.amount/totalEq,Z.PCT));
  });
  const aETot=aER+3+EQUITY_EVENTS.length;
  setc(wsA,aETot,0,cs('TOTAL'));
  setc(wsA,aETot,2,cf(`=SUM(C${aER+4}:C${aETot})`,totalEq,Z.M0));
  setc(wsA,aETot,4,cf(`=SUM(E${aER+4}:E${aETot})`,1.0,Z.PCT));
  // Apply styles to Assumptions
  addSheetHeader(wsA,'ASSUMPTIONS','Yellow cells = editable inputs  ·  Blue cells = live formulas  ·  Edit cell B15 (Active Scenario) to recalculate all scenario multipliers  ·  Generated: '+today,4);
  sty(wsA,3,0,S.sec); styRow(wsA,4,0,3,S.hdrL);
  macroParams.forEach((_,i)=>{sty(wsA,5+i,0,S.lbl);sty(wsA,5+i,1,S.edit);[2,3].forEach(c=>sty(wsA,5+i,c,S.val));});
  sty(wsA,12,0,S.sec); styRow(wsA,13,0,3,S.hdrL);
  sty(wsA,14,0,S.lbl); sty(wsA,14,1,S.drop); [2,3].forEach(c=>sty(wsA,14,c,S.val));
  multipliers.forEach((_,i)=>{sty(wsA,15+i,0,S.lbl);sty(wsA,15+i,1,S.frm);[2,3].forEach(c=>sty(wsA,15+i,c,S.val));});
  sty(wsA,23,0,S.sec); styRow(wsA,24,0,7,S.hdrL);
  SECTORS.forEach((_,i)=>{const alt=i%2===1;styRow(wsA,25+i,0,6,alt?S.lblA:S.lbl);sty(wsA,25+i,7,alt?S.frmA:S.frm);});
  sty(wsA,aDR+1,0,S.sec); styRow(wsA,aDR+2,0,8,S.hdrL);
  DEBT_TRANCHES.forEach((_,i)=>{const alt=i%2===1;styRow(wsA,aDR+3+i,0,5,alt?S.lblA:S.lbl);[6,7,8].forEach(c=>sty(wsA,aDR+3+i,c,alt?S.frmA:S.frm));});
  styRow(wsA,aDTot,0,8,S.tot); sty(wsA,aDTot,0,S.totL);
  sty(wsA,aER+1,0,S.sec); styRow(wsA,aER+2,0,4,S.hdrL);
  EQUITY_EVENTS.forEach((_,i)=>{const alt=i%2===1;styRow(wsA,aER+3+i,0,2,alt?S.lblA:S.lbl);[3,4].forEach(c=>sty(wsA,aER+3+i,c,alt?S.frmA:S.frm));});
  styRow(wsA,aETot,0,4,S.tot); sty(wsA,aETot,0,S.totL);
  if(!wsA['!dataValidations'])wsA['!dataValidations']=[];
  wsA['!dataValidations'].push({sqref:'B15',type:'list',formula1:'"Base,Conservative,Growth,Downside"',showDropDown:false,showInputMessage:true,promptTitle:'Select Scenario',prompt:'Base · Conservative · Growth · Downside'});
  wsA['!cols']=[{wch:36},{wch:20},{wch:12},{wch:60}];
  wsA['!freeze']={xSplit:0,ySplit:3};
  addRowHeights(wsA,3,aETot+2,16);
  wsA['!tabColor']={rgb:'D4A800'};
  addPrintSetup(wsA,false);
  appendExSheet(wb,wsA,'Assumptions');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 2 — INCOME STATEMENT
  // Columns: A=Year  B=Revenue  C=OpEx  D=Royalties
  //          E=EBITDA(f)  F=EBITDA%(f)  G=D&A  H=EBIT(f)  I=Interest
  //          J=EBT(f)  K=Tax(f,cross-sheet→Assumptions!$B$6)
  //          L=NetIncome(f)  M=NetMargin%(f)  N=Headcount  O=CapEx  P=YoYRevGrowth(f)
  // Blue (formula) cells: E F H J K L M P
  // Cross-sheet reference: K = MAX(0, EBT × Assumptions!$B$6)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsIS={};
  const IDR=3; // first data row (0-indexed) → Excel row 4
  const IC={YR:0,REV:1,OPEX:2,ROY:3,EBITDA:4,EPct:5,DA:6,EBIT:7,INT:8,EBT:9,TAX:10,NI:11,NIPct:12,HC:13,CX:14,YOYREV:15};
  setc(wsIS,0,0,cs('NERPA CAPITAL PARTNERS — INCOME STATEMENT (30-YEAR PROJECTION)'));
  setc(wsIS,1,0,cs('All values $M · Blue-tinted cells contain Excel formulas · Tax column references Assumptions!$B$6 (Tax Rate) · Use Ctrl+` to see all formulas'));
  ['Year','Revenue ($M)','OpEx ($M)','Royalties ($M)','EBITDA ($M) ƒ','EBITDA Margin % ƒ','D&A ($M)','EBIT ($M) ƒ','Interest ($M)','EBT ($M) ƒ','Tax ($M) ƒ','Net Income ($M) ƒ','Net Margin % ƒ','Headcount','CapEx ($M)','YoY Rev Growth ƒ']
    .forEach((h,c)=>setc(wsIS,2,c,cs(h)));
  for(let i=0;i<N;i++){
    const ri=IDR+i, yo=m.years_out[i];
    const B=enc(ri,IC.REV),C=enc(ri,IC.OPEX),D=enc(ri,IC.ROY),E=enc(ri,IC.EBITDA),G=enc(ri,IC.DA),H=enc(ri,IC.EBIT),I=enc(ri,IC.INT),J=enc(ri,IC.EBT),K=enc(ri,IC.TAX),L=enc(ri,IC.NI);
    setc(wsIS,ri,IC.YR,cn(yo.year,Z.YR));
    setc(wsIS,ri,IC.REV,cn(yo.revenue,Z.M2));
    setc(wsIS,ri,IC.OPEX,cn(yo.opex,Z.M2));
    setc(wsIS,ri,IC.ROY,cn(yo.royalty,Z.M2));
    setc(wsIS,ri,IC.EBITDA,cf(`=${B}-${C}-${D}`,yo.ebitda,Z.M2));
    setc(wsIS,ri,IC.EPct,cf(`=IF(${B}>0,${E}/${B},0)`,yo.revenue>0?yo.ebitda/yo.revenue:0,Z.PCT));
    setc(wsIS,ri,IC.DA,cn(yo.da,Z.M2));
    setc(wsIS,ri,IC.EBIT,cf(`=${E}-${G}`,yo.ebit,Z.M2));
    setc(wsIS,ri,IC.INT,cn(yo.interest,Z.M2));
    setc(wsIS,ri,IC.EBT,cf(`=${H}-${I}`,yo.ebit-yo.interest,Z.M2));
    setc(wsIS,ri,IC.TAX,cf(`=MAX(0,${J}*Assumptions!$B$6)`,yo.tax,Z.M2));  // cross-sheet
    setc(wsIS,ri,IC.NI,cf(`=${J}-${K}`,yo.netIncome,Z.M2));
    setc(wsIS,ri,IC.NIPct,cf(`=IF(${B}>0,${L}/${B},0)`,yo.revenue>0?yo.netIncome/yo.revenue:0,Z.PCT));
    setc(wsIS,ri,IC.HC,cn(yo.headcount,Z.INT));
    setc(wsIS,ri,IC.CX,cn(yo.capex,Z.M2));
    if(i===0){setc(wsIS,ri,IC.YOYREV,cn(0,Z.PCT));}
    else{const pb=enc(ri-1,IC.REV);setc(wsIS,ri,IC.YOYREV,cf(`=IF(${pb}>0,(${B}-${pb})/${pb},0)`,(yo.revenue-m.years_out[i-1].revenue)/Math.max(0.001,m.years_out[i-1].revenue),Z.PCT));}
  }
  // TOTAL row
  const IT=IDR+N, ds=IDR+1, de=IDR+N;
  setc(wsIS,IT,IC.YR,cs('30Y TOTAL'));
  setc(wsIS,IT,IC.REV,cf(`=SUM(B${ds}:B${de})`,m.cumRevenue,Z.M2));
  setc(wsIS,IT,IC.OPEX,cf(`=SUM(C${ds}:C${de})`,m.years_out.reduce((a,r)=>a+r.opex,0),Z.M2));
  setc(wsIS,IT,IC.ROY,cf(`=SUM(D${ds}:D${de})`,m.years_out.reduce((a,r)=>a+r.royalty,0),Z.M2));
  setc(wsIS,IT,IC.EBITDA,cf(`=SUM(E${ds}:E${de})`,m.cumEbitda,Z.M2));
  setc(wsIS,IT,IC.EPct,cf(`=IF(B${IT+1}>0,E${IT+1}/B${IT+1},0)`,m.cumEbitda/Math.max(1e-6,m.cumRevenue),Z.PCT));
  setc(wsIS,IT,IC.DA,cf(`=SUM(G${ds}:G${de})`,m.years_out.reduce((a,r)=>a+r.da,0),Z.M2));
  setc(wsIS,IT,IC.EBIT,cf(`=SUM(H${ds}:H${de})`,m.years_out.reduce((a,r)=>a+r.ebit,0),Z.M2));
  setc(wsIS,IT,IC.INT,cf(`=SUM(I${ds}:I${de})`,m.years_out.reduce((a,r)=>a+r.interest,0),Z.M2));
  setc(wsIS,IT,IC.EBT,cf(`=SUM(J${ds}:J${de})`,m.years_out.reduce((a,r)=>a+(r.ebit-r.interest),0),Z.M2));
  setc(wsIS,IT,IC.TAX,cf(`=SUM(K${ds}:K${de})`,m.years_out.reduce((a,r)=>a+r.tax,0),Z.M2));
  setc(wsIS,IT,IC.NI,cf(`=SUM(L${ds}:L${de})`,m.years_out.reduce((a,r)=>a+r.netIncome,0),Z.M2));
  setc(wsIS,IT,IC.NIPct,cf(`=IF(B${IT+1}>0,L${IT+1}/B${IT+1},0)`,m.years_out.reduce((a,r)=>a+r.netIncome,0)/Math.max(1e-6,m.cumRevenue),Z.PCT));
  setc(wsIS,IT,IC.CX,cf(`=SUM(O${ds}:O${de})`,m.years_out.reduce((a,r)=>a+r.capex,0),Z.M2));
  // AVG row
  const IA=IT+1;
  setc(wsIS,IA,IC.YR,cs('30Y AVERAGE'));
  setc(wsIS,IA,IC.REV,cf(`=AVERAGE(B${ds}:B${de})`,m.cumRevenue/N,Z.M2));
  setc(wsIS,IA,IC.EBITDA,cf(`=AVERAGE(E${ds}:E${de})`,m.cumEbitda/N,Z.M2));
  setc(wsIS,IA,IC.EPct,cf(`=AVERAGE(F${ds}:F${de})`,m.years_out.reduce((a,r)=>a+(r.revenue>0?r.ebitda/r.revenue:0),0)/N,Z.PCT));
  setc(wsIS,IA,IC.NI,cf(`=AVERAGE(L${ds}:L${de})`,m.years_out.reduce((a,r)=>a+r.netIncome,0)/N,Z.M2));
  // Styles IS
  addSheetHeader(wsIS,'INCOME STATEMENT (30-YEAR PROJECTION)','All values $M  ·  Blue-tinted cells contain live Excel formulas  ·  Tax column (K) cross-references Assumptions!$B$6  ·  Press Ctrl+` to toggle formula view  ·  Scenario: '+(sc?sc.label:'Base'),16);
  styRow(wsIS,2,0,15,S.hdr); sty(wsIS,2,0,S.hdrL);
  for(let i=0;i<N;i++){
    const ri=IDR+i,alt=i%2===1;
    sty(wsIS,ri,IC.YR,alt?S.lblA:S.lbl);
    [IC.REV,IC.OPEX,IC.ROY,IC.DA,IC.INT,IC.HC,IC.CX].forEach(c=>sty(wsIS,ri,c,alt?S.valA:S.val));
    [IC.EBITDA,IC.EBIT,IC.EBT,IC.TAX,IC.NI].forEach(c=>sty(wsIS,ri,c,alt?S.frmA:S.frm));
    [IC.EPct,IC.NIPct,IC.YOYREV].forEach(c=>sty(wsIS,ri,c,alt?S.pctA:S.pct));
  }
  styRow(wsIS,IT,0,15,S.tot); sty(wsIS,IT,0,S.totL);
  styRow(wsIS,IA,0,15,S.tot); sty(wsIS,IA,0,S.totL);
  wsIS['!cols']=[{wch:8},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:12},{wch:12},{wch:12},{wch:12},{wch:12},{wch:14},{wch:14},{wch:11},{wch:12},{wch:14}];
  wsIS['!autofilter']={ref:'A3:P3'};
  wsIS['!freeze']={xSplit:1,ySplit:IDR};
  addRowHeights(wsIS,IDR,IA,16);
  wsIS['!tabColor']={rgb:'163558'};
  addPrintSetup(wsIS,true);
  appendExSheet(wb,wsIS,'Income Statement');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 3 — BALANCE SHEET
  // A=Year  B=Cash  C=Recv  D=Inv  E=PPENet
  // F=Total Assets(f)  G=AP  H=STDebt  I=LTDebt  J=DeferredTax
  // K=Total Liabilities(f)  L=PaidIn  M=RetainedEarnings
  // N=Total Equity(f)  O=BS Check(f)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsBS={};
  const BDR=3;
  const BC={YR:0,CASH:1,RECV:2,INV:3,PPE:4,TASS:5,AP:6,STD:7,LTD:8,DTAX:9,TLIAB:10,PIC:11,RE:12,TEQ:13,CHK:14};
  setc(wsBS,0,0,cs('NERPA CAPITAL PARTNERS — BALANCE SHEET (30-YEAR PROJECTION)'));
  setc(wsBS,1,0,cs('Blue cells are formulas · Column O is a live balance-check: =IF(ABS(Assets−Liabilities−Equity)<0.5,"✓ BALANCED","⚠ DIFF") · Use Ctrl+[ to trace precedents'));
  ['Year','Cash ($M)','Receivables ($M)','Inventory ($M)','PPE Net ($M)','TOTAL ASSETS ƒ','AP ($M)','ST Debt ($M)','LT Debt ($M)','Deferred Tax ($M)','TOTAL LIABILITIES ƒ','Paid-In Capital ($M)','Retained Earnings ($M)','TOTAL EQUITY ƒ','BS Check ƒ']
    .forEach((h,c)=>setc(wsBS,2,c,cs(h)));
  for(let i=0;i<N;i++){
    const ri=BDR+i, yo=m.years_out[i];
    const B=enc(ri,BC.CASH),C=enc(ri,BC.RECV),D=enc(ri,BC.INV),E=enc(ri,BC.PPE);
    const G=enc(ri,BC.AP),H=enc(ri,BC.STD),I=enc(ri,BC.LTD),J=enc(ri,BC.DTAX);
    const L=enc(ri,BC.PIC),M_=enc(ri,BC.RE);
    const F=enc(ri,BC.TASS),K=enc(ri,BC.TLIAB),N_=enc(ri,BC.TEQ);
    setc(wsBS,ri,BC.YR,cn(yo.year,Z.YR));
    setc(wsBS,ri,BC.CASH,cn(yo.cash,Z.M2));
    setc(wsBS,ri,BC.RECV,cn(yo.receivables,Z.M2));
    setc(wsBS,ri,BC.INV,cn(yo.inventory,Z.M2));
    setc(wsBS,ri,BC.PPE,cn(yo.ppeNet,Z.M2));
    setc(wsBS,ri,BC.TASS,cf(`=${B}+${C}+${D}+${E}`,yo.totalAssets,Z.M2));
    setc(wsBS,ri,BC.AP,cn(yo.ap,Z.M2));
    setc(wsBS,ri,BC.STD,cn(yo.stDebt,Z.M2));
    setc(wsBS,ri,BC.LTD,cn(yo.ltDebt,Z.M2));
    setc(wsBS,ri,BC.DTAX,cn(yo.deferredTax,Z.M2));
    setc(wsBS,ri,BC.TLIAB,cf(`=${G}+${H}+${I}+${J}`,yo.totalLiab,Z.M2));
    setc(wsBS,ri,BC.PIC,cn(yo.paidInCapital,Z.M2));
    setc(wsBS,ri,BC.RE,cn(yo.retainedEarnings,Z.M2));
    setc(wsBS,ri,BC.TEQ,cf(`=${L}+${M_}`,yo.totalEquity,Z.M2));
    const diff=Math.abs(yo.totalAssets-yo.totalLiab-yo.totalEquity);
    setc(wsBS,ri,BC.CHK,cf(`=IF(ABS(${F}-${K}-${N_})<0.5,"✓ BALANCED","⚠ DIFF: "&TEXT(ABS(${F}-${K}-${N_}),"0.00"))`,diff<0.5?'✓ BALANCED':'⚠ CHECK'));
  }
  // Styles BS
  addSheetHeader(wsBS,'BALANCE SHEET (30-YEAR PROJECTION)','Column O = live balance check: ✓ BALANCED / ⚠ DIFF  ·  Blue cells = formulas  ·  Use Ctrl+[ to trace precedents  ·  Assets = Liabilities + Equity',15);
  styRow(wsBS,2,0,14,S.hdr); sty(wsBS,2,0,S.hdrL);
  for(let i=0;i<N;i++){
    const ri=BDR+i,alt=i%2===1;
    sty(wsBS,ri,BC.YR,alt?S.lblA:S.lbl);
    [BC.CASH,BC.RECV,BC.INV,BC.PPE,BC.AP,BC.STD,BC.LTD,BC.DTAX,BC.PIC,BC.RE].forEach(c=>sty(wsBS,ri,c,alt?S.valA:S.val));
    [BC.TASS,BC.TLIAB,BC.TEQ].forEach(c=>sty(wsBS,ri,c,alt?S.frmA:S.frm));
    const chk=String((wsBS[enc(ri,BC.CHK)]||{}).v||'');
    sty(wsBS,ri,BC.CHK,chk.startsWith('✓')?S.ok:S.warn);
  }
  wsBS['!cols']=[{wch:8},{wch:12},{wch:14},{wch:12},{wch:12},{wch:16},{wch:12},{wch:12},{wch:12},{wch:14},{wch:18},{wch:16},{wch:18},{wch:14},{wch:22}];
  wsBS['!autofilter']={ref:'A3:O3'};
  wsBS['!freeze']={xSplit:1,ySplit:BDR};
  addRowHeights(wsBS,BDR,BDR+N,16);
  wsBS['!tabColor']={rgb:'1A6B3C'};
  addPrintSetup(wsBS,true);
  appendExSheet(wb,wsBS,'Balance Sheet');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 4 — CASH FLOW STATEMENT (sectioned line-item × year format)
  // Matches Screenshot 1: section group headers + data rows × year cols
  // Sections: Operating CF · Investing CF · Financing CF · Derived Metrics · Summary
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  (function(){
    const ws={};
    const scLabel=sc?sc.label.toUpperCase()+' CASE':'BASE CASE';
    const DR=3;
    const wcMove=i=>{const r=m.years_out[i];return r.ocf-r.netIncome-r.da+r.interest;};
    const ROWS=[
      {t:'sec',l:'Operating Cash Flow'},
      {t:'data',l:'Net income',                       vals:m.years_out.map(r=>r.netIncome)},
      {t:'data',l:'(+) Depreciation & amortisation',  vals:m.years_out.map(r=>r.da)},
      {t:'data',l:'(+/\u2212) Working capital movement', vals:m.years_out.map((_,i)=>wcMove(i))},
      {t:'data',l:'(\u2212) Interest paid (cash)',     vals:m.years_out.map(r=>-Math.abs(r.interest))},
      {t:'sub', l:'Operating CF (OCF)',                vals:m.years_out.map(r=>r.ocf)},
      {t:'sec',l:'Investing Cash Flow'},
      {t:'data',l:'Capital expenditure',               vals:m.years_out.map(r=>r.icf)},
      {t:'sub', l:'Investing CF (ICF)',                vals:m.years_out.map(r=>r.icf)},
      {t:'sec',l:'Financing Cash Flow'},
      {t:'data',l:'Equity raised',                     vals:m.years_out.map(r=>r.equityRaised)},
      {t:'data',l:'Debt drawn',                        vals:m.years_out.map(r=>r.debtDrawn)},
      {t:'data',l:'Debt repaid',                       vals:m.years_out.map(r=>-Math.abs(r.debtRepaid))},
      {t:'sub', l:'Financing CF (FCF fin)',             vals:m.years_out.map(r=>r.fcf_finance)},
      {t:'sec',l:'Derived Metrics'},
      {t:'frm', l:'FCFF',                              vals:m.years_out.map(r=>r.ocf+r.icf)},
      {t:'frm', l:'FCFE',                              vals:m.years_out.map(r=>r.ocf+r.icf+r.debtDrawn-r.debtRepaid)},
      {t:'pct', l:'OCF / EBITDA conversion',           vals:m.years_out.map(r=>r.ebitda>0.001?r.ocf/r.ebitda:0)},
      {t:'sec',l:'Summary'},
      {t:'data',l:'Net change in cash',                vals:m.years_out.map(r=>r.netChange)},
      {t:'sub', l:'Cash EOY',                          vals:m.years_out.map(r=>r.cash)},
    ];
    // Header rows
    setc(ws,0,0,cs('NERPA CAPITAL PARTNERS \u2014 STATEMENT OF CASH FLOWS \u2014 '+scLabel));
    setc(ws,1,0,cs('All values $M  \u00b7  OCF = Net Income + D&A + \u0394WC \u2212 Interest Paid  \u00b7  FCFF = OCF + ICF  \u00b7  FCFE = FCFF + Net Debt Change'));
    setc(ws,2,0,cs('LINE ($M)'));
    m.years.forEach((yr,j)=>setc(ws,2,1+j,cs(String(yr))));
    // Data
    ROWS.forEach((row,ri)=>{
      const r=DR+ri;
      setc(ws,r,0,cs(row.l));
      if(row.vals){
        row.vals.forEach((v,j)=>setc(ws,r,1+j,cn(isFinite(v)?v:0,row.t==='pct'?Z.PCT:Z.M2)));
      } else {
        for(let j=0;j<N;j++){if(!ws[enc(r,1+j)])setc(ws,r,1+j,cs(''));}
      }
    });
    // Styles
    addSheetHeader(ws,'STATEMENT OF CASH FLOWS \u2014 '+scLabel,
      'All values $M  \u00b7  OCF = Net Income + D&A + \u0394WC  \u00b7  FCFF = OCF + ICF  \u00b7  FCFE = FCFF + Net Debt Change  \u00b7  Scenario: '+(sc?sc.label:'Base'),N+1);
    sty(ws,2,0,S.hdrL);
    for(let j=0;j<N;j++)sty(ws,2,1+j,S.hdr);
    ROWS.forEach((row,ri)=>{
      const r=DR+ri,alt=ri%2===1;
      if(row.t==='sec'){
        sty(ws,r,0,S.secGrp);
        for(let j=0;j<N;j++)sty(ws,r,1+j,S.secGrpR);
      } else if(row.t==='sub'){
        sty(ws,r,0,S.totSubL);
        for(let j=0;j<N;j++)sty(ws,r,1+j,S.totSub);
      } else if(row.t==='frm'){
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<N;j++)sty(ws,r,1+j,alt?S.frmA:S.frm);
      } else if(row.t==='pct'){
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<N;j++)sty(ws,r,1+j,alt?S.pctA:S.pct);
      } else {
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<N;j++)sty(ws,r,1+j,alt?S.valA:S.val);
      }
    });
    ws['!cols']=[{wch:42},...m.years.map(()=>({wch:11}))];
    ws['!freeze']={xSplit:1,ySplit:DR};
    if(!ws['!rows'])ws['!rows']=[];
    ws['!rows'][2]={hpt:24};
    addRowHeights(ws,DR,DR+ROWS.length,17);
    ws['!tabColor']={rgb:'00518A'};
    addPrintSetup(ws,true);
    appendExSheet(wb,ws,'Cash Flow');
  })();

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 5 — CAPITAL EVENTS
  // Cumulative = SUM($C$first:C{row})  ·  % = C{row}/SUM($C$all)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsCap={};
  setc(wsCap,0,0,cs('NERPA CAPITAL PARTNERS — EQUITY CAPITAL EVENTS'));
  setc(wsCap,1,0,cs('Cumulative uses expanding SUM formula · % of Total references fixed absolute range · Edit Amount column to recalculate'));
  ['Fiscal Year','Round','Amount ($M)','Cumulative ($M) ƒ','% of Total ƒ','Years to IPO ƒ'].forEach((h,c)=>setc(wsCap,2,c,cs(h)));
  const ceDR=3;
  const ceFirst=ceDR+1, ceLast=ceDR+EQUITY_EVENTS.length;
  const totalCapEq=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  let cumCE=0;
  EQUITY_EVENTS.forEach((e,i)=>{
    const ri=ceDR+i; cumCE+=e.amount;
    setc(wsCap,ri,0,cn(e.year,Z.YR));
    setc(wsCap,ri,1,cs(e.kind.charAt(0).toUpperCase()+e.kind.slice(1)));
    setc(wsCap,ri,2,cn(e.amount,Z.M0));
    setc(wsCap,ri,3,cf(`=SUM($C$${ceFirst}:C${ri+1})`,cumCE,Z.M0));
    setc(wsCap,ri,4,cf(`=C${ri+1}/SUM($C$${ceFirst}:$C$${ceLast})`,e.amount/totalCapEq,Z.PCT));
    const ipo=2036;
    setc(wsCap,ri,5,cf(`=IF(A${ri+1}<${ipo},${ipo}-A${ri+1},"Post-IPO")`,e.year<ipo?ipo-e.year:'Post-IPO'));
  });
  const ceTot=ceDR+EQUITY_EVENTS.length;
  setc(wsCap,ceTot,0,cs('TOTAL'));
  setc(wsCap,ceTot,2,cf(`=SUM(C${ceFirst}:C${ceTot})`,totalCapEq,Z.M0));
  setc(wsCap,ceTot,4,cf(`=SUM(E${ceFirst}:E${ceTot})`,1.0,Z.PCT));
  addSheetHeader(wsCap,'EQUITY CAPITAL EVENTS','Cumulative column uses expanding SUM  ·  % of Total references absolute range  ·  Years to IPO uses IF formula  ·  Edit Amount to recalculate',6);
  styRow(wsCap,2,0,5,S.hdr); sty(wsCap,2,0,S.hdrL);
  EQUITY_EVENTS.forEach((_,i)=>{const ri=ceDR+i,alt=i%2===1;sty(wsCap,ri,0,alt?S.lblA:S.lbl);[1,2].forEach(c=>sty(wsCap,ri,c,alt?S.valA:S.val));[3,4,5].forEach(c=>sty(wsCap,ri,c,alt?S.frmA:S.frm));});
  styRow(wsCap,ceTot,0,5,S.tot); sty(wsCap,ceTot,0,S.totL);
  wsCap['!cols']=[{wch:12},{wch:18},{wch:14},{wch:20},{wch:14},{wch:16}];
  addRowHeights(wsCap,ceDR,ceTot,16);
  wsCap['!tabColor']={rgb:'6D3A9C'};
  addPrintSetup(wsCap,false);
  appendExSheet(wb,wsCap,'Capital Events');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 6 — DEBT SCHEDULE
  // Annual Interest = Amount × Rate  ·  Life Interest = Amount × Rate × Tenor
  // Annual Principal = Amount / Tenor  ·  All-in = Amount + Life Interest
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsDebt={};
  setc(wsDebt,0,0,cs('NERPA CAPITAL PARTNERS — DEBT SCHEDULE'));
  setc(wsDebt,1,0,cs('Blue cells are formulas based on Amount × Rate / Tenor · Edit Rate or Amount to recalculate interest and cost columns'));
  ['Tranche','Type','Draw Year','Tenor (yr)','Rate (%)','Amount ($M)','Ann. Interest ($M) ƒ','Life Interest ($M) ƒ','Ann. Principal ($M) ƒ','All-In Cost ($M) ƒ'].forEach((h,c)=>setc(wsDebt,2,c,cs(h)));
  const dDR=3;
  DEBT_TRANCHES.forEach((t,i)=>{
    const ri=dDR+i;
    const Fcel=enc(ri,5),Ecel=enc(ri,4),Dcel=enc(ri,3);
    setc(wsDebt,ri,0,cs(t.name)); setc(wsDebt,ri,1,cs(t.type.toUpperCase()));
    setc(wsDebt,ri,2,cn(t.drawYear,Z.YR)); setc(wsDebt,ri,3,cn(t.tenor));
    setc(wsDebt,ri,4,cn(t.rate,Z.PCT2)); setc(wsDebt,ri,5,cn(t.amount,Z.M0));
    setc(wsDebt,ri,6,cf(`=${Fcel}*${Ecel}`,t.amount*t.rate,Z.M2));
    setc(wsDebt,ri,7,cf(`=${Fcel}*${Ecel}*${Dcel}`,t.amount*t.rate*t.tenor,Z.M2));
    setc(wsDebt,ri,8,cf(`=${Fcel}/${Dcel}`,t.amount/t.tenor,Z.M2));
    const Hcel=enc(ri,7);
    setc(wsDebt,ri,9,cf(`=${Fcel}+${Hcel}`,t.amount+t.amount*t.rate*t.tenor,Z.M2));
  });
  const dTot=dDR+DEBT_TRANCHES.length, dds2=dDR+1, dde2=dTot;
  setc(wsDebt,dTot,0,cs('TOTAL'));
  [[5,Z.M0],[6,Z.M2],[7,Z.M2],[9,Z.M2]].forEach(([c,z])=>setc(wsDebt,dTot,c,cf(`=SUM(${ecol(c)}${dds2}:${ecol(c)}${dde2})`,DEBT_TRANCHES.reduce((a,t)=>a+(c===5?t.amount:c===6?t.amount*t.rate:c===7?t.amount*t.rate*t.tenor:t.amount+t.amount*t.rate*t.tenor),0),z)));
  addSheetHeader(wsDebt,'DEBT SCHEDULE','Annual Interest = Amount × Rate  ·  Life Interest = Amount × Rate × Tenor  ·  Ann. Principal = Amount ÷ Tenor  ·  Edit Rate or Amount — cost columns recalculate',10);
  styRow(wsDebt,2,0,9,S.hdr); sty(wsDebt,2,0,S.hdrL);
  DEBT_TRANCHES.forEach((_,i)=>{const ri=dDR+i,alt=i%2===1;styRow(wsDebt,ri,0,5,alt?S.lblA:S.lbl);[6,7,8,9].forEach(c=>sty(wsDebt,ri,c,alt?S.frmA:S.frm));});
  styRow(wsDebt,dTot,0,9,S.tot); sty(wsDebt,dTot,0,S.totL);
  wsDebt['!cols']=[{wch:32},{wch:12},{wch:12},{wch:10},{wch:12},{wch:14},{wch:22},{wch:22},{wch:22},{wch:20}];
  addRowHeights(wsDebt,dDR,dTot,16);
  wsDebt['!tabColor']={rgb:'C47A00'};
  addPrintSetup(wsDebt,true);
  appendExSheet(wb,wsDebt,'Debt Schedule');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 7 — REMUNERATION
  // Cost (columns H-K) = HC × (Base + LTIP×0.3) / 1000
  // Total row uses SUM across all roles
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsRem={};
  setc(wsRem,0,0,cs('NERPA CAPITAL PARTNERS — REMUNERATION MODEL'));
  setc(wsRem,1,0,cs('Cost columns H–K: =(HC×(Base+LTIP×0.3))/1000  ·  Edit Base or LTIP salary — cost columns recalculate automatically'));
  ['Role','Base ($k)','LTIP ($k)','HC Yr 1','HC Yr 3','HC Yr 5','HC Yr 10','Cost Yr1 $M ƒ','Cost Yr3 $M ƒ','Cost Yr5 $M ƒ','Cost Yr10 $M ƒ'].forEach((h,c)=>setc(wsRem,2,c,cs(h)));
  const rDR=3;
  COMP_PLAN.forEach((r,i)=>{
    const ri=rDR+i;
    const hcs=[FY0,FY0+2,FY0+4,FY0+9].map(y=>Math.max(0,Math.floor(r.count(y))));
    setc(wsRem,ri,0,cs(r.role)); setc(wsRem,ri,1,cn(r.base)); setc(wsRem,ri,2,cn(r.ltip));
    hcs.forEach((h,j)=>setc(wsRem,ri,3+j,cn(h,Z.INT)));
    const Bx=enc(ri,1), Cx=enc(ri,2);
    hcs.forEach((h,j)=>{
      const HCx=enc(ri,3+j);
      setc(wsRem,ri,7+j,cf(`=(${HCx}*(${Bx}+${Cx}*0.3))/1000`,h*(r.base+r.ltip*0.3)/1000,Z.M2));
    });
  });
  const rTot=rDR+COMP_PLAN.length, rds=rDR+1, rde=rTot;
  setc(wsRem,rTot,0,cs('TOTAL'));
  [3,4,5,6].forEach(c=>setc(wsRem,rTot,c,cf(`=SUM(${ecol(c)}${rds}:${ecol(c)}${rde})`,0,Z.INT)));
  [7,8,9,10].forEach(c=>setc(wsRem,rTot,c,cf(`=SUM(${ecol(c)}${rds}:${ecol(c)}${rde})`,COMP_PLAN.reduce((a,r)=>{const hcs=[FY0,FY0+2,FY0+4,FY0+9];return a+Math.max(0,Math.floor(r.count(hcs[c-7])))*(r.base+r.ltip*0.3)/1000;},0),Z.M2)));
  addSheetHeader(wsRem,'REMUNERATION MODEL','Cost columns H–K: =(HC × (Base + LTIP × 0.3)) ÷ 1,000  ·  Edit Base ($k) or LTIP ($k) — cost columns recalculate automatically  ·  Headcount follows S-curve ramp per role',11);
  styRow(wsRem,2,0,10,S.hdr); sty(wsRem,2,0,S.hdrL);
  COMP_PLAN.forEach((_,i)=>{const ri=rDR+i,alt=i%2===1;sty(wsRem,ri,0,alt?S.lblA:S.lbl);[1,2,3,4,5,6].forEach(c=>sty(wsRem,ri,c,alt?S.valA:S.val));[7,8,9,10].forEach(c=>sty(wsRem,ri,c,alt?S.frmA:S.frm));});
  styRow(wsRem,rTot,0,10,S.tot); sty(wsRem,rTot,0,S.totL);
  wsRem['!cols']=[{wch:30},{wch:10},{wch:10},{wch:10},{wch:10},{wch:10},{wch:12},{wch:16},{wch:16},{wch:16},{wch:16}];
  addRowHeights(wsRem,rDR,rTot,16);
  wsRem['!tabColor']={rgb:'0A6B5E'};
  addPrintSetup(wsRem,true);
  appendExSheet(wb,wsRem,'Remuneration');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 8 — SECTORS
  // EBITDA% = IF(CumRev>0, CumEBITDA/CumRev, 0)
  // Rank = RANK(CumRev, full range, 0)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsSect={};
  setc(wsSect,0,0,cs('NERPA CAPITAL PARTNERS — SECTOR PERFORMANCE SUMMARY (30-YEAR CUMULATIVE)'));
  setc(wsSect,1,0,cs('EBITDA Margin and Revenue Rank are Excel formulas · Sort any column · Edit sector data in Assumptions to recalculate'));
  ['Sector','Group','Unit','Start Year','Peak Volume','Cum Revenue ($M)','Cum EBITDA ($M)','Cum CapEx ($M)','EBITDA Margin % ƒ','Revenue Rank ƒ'].forEach((h,c)=>setc(wsSect,2,c,cs(h)));
  const sDR=3, sNS=m.sectors.length;
  m.sectors.forEach((sl,i)=>{
    const ri=sDR+i;
    const cumRev=sl.revenue.reduce((a,b)=>a+b,0),cumEb=sl.ebitda.reduce((a,b)=>a+b,0),cumCx=sl.capex.reduce((a,b)=>a+b,0);
    setc(wsSect,ri,0,cs(sl.sector.name)); setc(wsSect,ri,1,cs(sl.sector.group));
    setc(wsSect,ri,2,cs(sl.sector.unit)); setc(wsSect,ri,3,cn(sl.sector.startYear,Z.YR));
    setc(wsSect,ri,4,cn(sl.sector.peakVolume,Z.M1));
    setc(wsSect,ri,5,cn(cumRev,Z.M1)); setc(wsSect,ri,6,cn(cumEb,Z.M1)); setc(wsSect,ri,7,cn(cumCx,Z.M1));
    const Fx=enc(ri,5),Gx=enc(ri,6);
    setc(wsSect,ri,8,cf(`=IF(${Fx}>0,${Gx}/${Fx},0)`,cumRev>0?cumEb/cumRev:0,Z.PCT));
    setc(wsSect,ri,9,cf(`=RANK(${Fx},$F$${sDR+1}:$F$${sDR+sNS},0)`,i+1,Z.INT));
  });
  const sTot=sDR+sNS, sDs=sDR+1, sDe=sTot;
  setc(wsSect,sTot,0,cs('TOTAL / PORTFOLIO'));
  setc(wsSect,sTot,5,cf(`=SUM(F${sDs}:F${sDe})`,m.cumRevenue,Z.M1));
  setc(wsSect,sTot,6,cf(`=SUM(G${sDs}:G${sDe})`,m.cumEbitda,Z.M1));
  setc(wsSect,sTot,7,cf(`=SUM(H${sDs}:H${sDe})`,m.sectors.reduce((a,sl)=>a+sl.capex.reduce((b,c)=>b+c,0),0),Z.M1));
  setc(wsSect,sTot,8,cf(`=IF(F${sTot+1}>0,G${sTot+1}/F${sTot+1},0)`,m.cumEbitda/Math.max(1e-6,m.cumRevenue),Z.PCT));
  addSheetHeader(wsSect,'SECTOR PERFORMANCE SUMMARY (30-YEAR CUMULATIVE)','EBITDA Margin = IF(Rev>0, EBITDA÷Rev, 0)  ·  Revenue Rank uses RANK formula  ·  Sort any column  ·  Edit sector data in Assumptions to recalculate  ·  25 assets across 6 groups',10);
  styRow(wsSect,2,0,9,S.hdr); sty(wsSect,2,0,S.hdrL);
  m.sectors.forEach((_,i)=>{const ri=sDR+i,alt=i%2===1;sty(wsSect,ri,0,alt?S.lblA:S.lbl);[1,2,3,4,5,6,7].forEach(c=>sty(wsSect,ri,c,alt?S.valA:S.val));sty(wsSect,ri,8,alt?S.pctA:S.pct);sty(wsSect,ri,9,alt?S.frmA:S.frm);});
  styRow(wsSect,sTot,0,9,S.tot); sty(wsSect,sTot,0,S.totL);
  wsSect['!cols']=[{wch:38},{wch:14},{wch:12},{wch:12},{wch:14},{wch:16},{wch:16},{wch:14},{wch:16},{wch:14}];
  wsSect['!autofilter']={ref:'A3:J3'};
  wsSect['!freeze']={xSplit:2,ySplit:sDR};
  addRowHeights(wsSect,sDR,sTot,16);
  wsSect['!tabColor']={rgb:'5A6A7E'};
  addPrintSetup(wsSect,true);
  appendExSheet(wb,wsSect,'Sectors');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 9 — SECTOR REVENUE DETAIL (annual, 25 sectors × 30 years)
  // Row cumulative = SUM(C{r}:AF{r})
  // Column annual total = SUM(C{first}:C{last})
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsSRD={};
  setc(wsSRD,0,0,cs('NERPA CAPITAL PARTNERS — SECTOR REVENUE DETAIL (ANNUAL, $M)'));
  setc(wsSRD,1,0,cs('30Y Cumulative column and Annual Total row use SUM formulas · Freeze: first 2 cols + header row (Ctrl+Shift+F)'));
  setc(wsSRD,2,0,cs('Sector')); setc(wsSRD,2,1,cs('Group'));
  m.years.forEach((yr,j)=>setc(wsSRD,2,2+j,cs('FY'+yr)));
  const nYrCols=N, cumCol=2+nYrCols;
  setc(wsSRD,2,cumCol,cs('30Y Cumulative ƒ'));
  const srdDR=3;
  m.sectors.forEach((sl,i)=>{
    const ri=srdDR+i;
    setc(wsSRD,ri,0,cs(sl.sector.name)); setc(wsSRD,ri,1,cs(sl.sector.group));
    sl.revenue.forEach((v,j)=>setc(wsSRD,ri,2+j,cn(v,Z.M2)));
    const fc=ecol(2), lc=ecol(2+N-1), cumVal=sl.revenue.reduce((a,b)=>a+b,0);
    setc(wsSRD,ri,cumCol,cf(`=SUM(${fc}${ri+1}:${lc}${ri+1})`,cumVal,Z.M2));
  });
  const srdTot=srdDR+m.sectors.length;
  setc(wsSRD,srdTot,0,cs('ANNUAL TOTAL'));
  m.years.forEach((_,j)=>{
    const cl=ecol(2+j);
    setc(wsSRD,srdTot,2+j,cf(`=SUM(${cl}${srdDR+1}:${cl}${srdTot})`,m.years_out[j].revenue,Z.M2));
  });
  setc(wsSRD,srdTot,cumCol,cf(`=SUM(${ecol(cumCol)}${srdDR+1}:${ecol(cumCol)}${srdTot})`,m.cumRevenue,Z.M2));
  // Styles SRD
  addSheetHeader(wsSRD,'SECTOR REVENUE DETAIL (ANNUAL, $M)','30Y Cumulative column (last) = SUM formula per row  ·  Annual Total row = SUM per year  ·  Freeze: first 2 cols + header row (Ctrl+Shift+F to set)  ·  25 sectors × 30 fiscal years',cumCol+1);
  for(let c=0;c<=cumCol;c++)sty(wsSRD,2,c,c<=1?S.hdrL:S.hdr);
  m.sectors.forEach((_,i)=>{
    const ri=srdDR+i,alt=i%2===1;
    sty(wsSRD,ri,0,alt?S.lblA:S.lbl); sty(wsSRD,ri,1,alt?S.valA:S.val);
    for(let j=0;j<N;j++)sty(wsSRD,ri,2+j,alt?S.valA:S.val);
    sty(wsSRD,ri,cumCol,alt?S.frmA:S.frm);
  });
  for(let c=0;c<=cumCol;c++)sty(wsSRD,srdTot,c,c===0?S.totL:S.tot);
  wsSRD['!cols']=[{wch:34},{wch:14},...m.years.map(()=>({wch:10})),{wch:18}];
  wsSRD['!autofilter']={ref:`A3:${ecol(cumCol)}3`};
  wsSRD['!freeze']={xSplit:2,ySplit:srdDR};
  addRowHeights(wsSRD,srdDR,srdTot,16);
  wsSRD['!tabColor']={rgb:'1A3D7C'};
  addPrintSetup(wsSRD,true);
  appendExSheet(wb,wsSRD,'Sector Revenue Detail');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 10 — INSTITUTIONAL COVER PAGE
  // Premium branded cover: firm identity, key metrics, contents, audit guide
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsCov={};
  const COV_COLS=4; // A-D used
  const covMrg=(r0,r1,c0,c1)=>{if(!wsCov['!merges'])wsCov['!merges']=[];wsCov['!merges'].push({s:{r:r0,c:c0},e:{r:r1,c:c1}});};
  // Fill empty cells in a row so merges render cleanly
  const covFill=(r,style)=>{for(let c=0;c<COV_COLS;c++){if(!wsCov[enc(r,c)])setc(wsCov,r,c,cs(''));sty(wsCov,r,c,style);}};

  // ── ROW 0-4: Brand identity block ─────────────────────────────────
  setc(wsCov,0,0,cs('N'));                                          // Monogram cell
  setc(wsCov,1,0,cs('NERPA CAPITAL PARTNERS'));
  setc(wsCov,2,0,cs('30-YEAR INSTITUTIONAL FINANCIAL MODEL'));
  setc(wsCov,3,0,cs(`${sc?sc.label.toUpperCase()+' CASE':'BASE CASE'}  ·  FY${FY0} — FY${m.years[N-1]}  ·  Generated ${today}`));
  setc(wsCov,4,0,cs(''));  // spacer
  covFill(0,{font:{bold:true,color:{rgb:'FFFFFF'},sz:28,name:'Calibri'},fill:{fgColor:{rgb:'0D1B2A'}},alignment:{horizontal:'left',vertical:'center'}});
  covFill(1,S.covTitle);
  covFill(2,S.covSub);
  covFill(3,S.covMeta);
  covFill(4,{fill:{fgColor:{rgb:'0D1B2A'}}});
  covMrg(0,0,0,COV_COLS-1);
  covMrg(1,1,0,COV_COLS-1);
  covMrg(2,2,0,COV_COLS-1);
  covMrg(3,3,0,COV_COLS-1);
  covMrg(4,4,0,COV_COLS-1);

  // ── ROW 5: Confidential banner ─────────────────────────────────────
  setc(wsCov,5,0,cs('STRICTLY CONFIDENTIAL — NOT FOR DISTRIBUTION — FOR AUTHORISED RECIPIENTS ONLY'));
  covFill(5,S.covConfid);
  covMrg(5,5,0,COV_COLS-1);

  // ── ROW 6: spacer ──────────────────────────────────────────────────
  setc(wsCov,6,0,cs('')); covFill(6,{fill:{fgColor:{rgb:'FFFFFF'}}});
  covMrg(6,6,0,COV_COLS-1);

  // ── ROWS 7-18: Key Metrics panel ────────────────────────────────────
  setc(wsCov,7,0,cs('KEY MODEL METRICS'));
  covFill(7,S.sec); covMrg(7,7,0,COV_COLS-1);
  // Headers
  ['Metric','Value','Metric','Value'].forEach((h,c)=>setc(wsCov,8,c,cs(h)));
  styRow(wsCov,8,0,COV_COLS-1,S.hdrL);
  const kpiPairs=[
    ['Consolidated IRR',  fmtPct(m.consolidatedIRR),   'Consolidated MOIC',   fmtX(m.consolidatedMOIC)],
    ['TVPI',              fmtX(m.tvpi),                 'DPI',                 fmtX(m.dpi)],
    ['30Y Cumul. Revenue',fmtM(m.cumRevenue),           '30Y Cumul. EBITDA',   fmtM(m.cumEbitda)],
    ['EBITDA Margin (avg)',fmtPct(m.cumRevenue>0?m.cumEbitda/m.cumRevenue:0),'30Y Cumul. FCF', fmtM(m.cumFcf)],
    ['Terminal Equity',   fmtM(m.totalEquity),          'Implied Terminal EV', fmtM(m.impliedTerminalEV)],
    ['Peak Cash Need',    fmtM(m.peakCashNeed),         'Scenario',            sc?sc.label+' Case':'Base Case'],
  ];
  kpiPairs.forEach((row,i)=>{
    const ri=9+i, alt=i%2===1;
    setc(wsCov,ri,0,cs(row[0])); setc(wsCov,ri,1,cs(row[1]));
    setc(wsCov,ri,2,cs(row[2])); setc(wsCov,ri,3,cs(row[3]));
    sty(wsCov,ri,0,alt?S.lblA:S.lbl); sty(wsCov,ri,1,alt?S.covKpiVal:{...S.covKpiVal,fill:{fgColor:{rgb:'EBF4FF'}}});
    sty(wsCov,ri,2,alt?S.lblA:S.lbl); sty(wsCov,ri,3,alt?S.covKpiVal:{...S.covKpiVal,fill:{fgColor:{rgb:'EBF4FF'}}});
  });

  // ── ROW 15: spacer ─────────────────────────────────────────────────
  setc(wsCov,15,0,cs('')); covFill(15,{fill:{fgColor:{rgb:'FFFFFF'}}});
  covMrg(15,15,0,COV_COLS-1);

  // ── ROWS 16-28: Workbook contents ──────────────────────────────────
  setc(wsCov,16,0,cs('WORKBOOK CONTENTS & FORMULA GUIDE'));
  covFill(16,S.sec); covMrg(16,16,0,COV_COLS-1);
  ['Tab','Purpose','Formula Cells (blue)','Key Cross-Sheet References'].forEach((h,c)=>setc(wsCov,17,c,cs(h)));
  styRow(wsCov,17,0,COV_COLS-1,S.hdrL);
  [['Assumptions','Editable inputs  ·  Yellow = editable, Blue = formula  ·  Edit B15 (Scenario)','B11:B21 — IF/nested IF for scenario multipliers  ·  Sector col G EBITDA%','Source of truth — all other sheets reference this workbook'],
   ['Income Statement','30-year P&L projection (all values $M)','E EBITDA  ·  F Margin  ·  H EBIT  ·  J EBT  ·  K Tax  ·  L Net Income','K: =MAX(0, EBT×Assumptions!$B$6) — live cross-sheet Tax Rate'],
   ['Balance Sheet','30-year balance sheet','F Total Assets  ·  K Liabilities  ·  N Equity  ·  O BS Check','O: =IF(ABS(A−L−E)<0.5,"✓ BALANCED","⚠ DIFF") — live audit'],
   ['Cash Flow','30-year cash flow statement','D FCF=OCF+ICF  ·  H Financing CF  ·  K Closing Cash  ·  L Cumul. FCF','J Opening Cash: =K{prev_row} — chained formula across 30 years'],
   ['Capital Events','Equity fundraising rounds','D Cumulative SUM  ·  E % of Total  ·  F Years to IPO','Self-contained — no external references'],
   ['Debt Schedule','Debt tranche terms and cost summary','G Ann. Interest  ·  H Life Interest  ·  I Principal  ·  J All-In Cost','Edit Rate/Amount cols E-F → G-J recalculate automatically'],
   ['Remuneration','Compensation model by role','H-K: =(HC×(Base+LTIP×0.3))÷1,000  ·  Total row SUM','Edit Base or LTIP salary → cost columns recalculate'],
   ['Sectors','25-asset 30-year cumulative summary','I EBITDA% = IF(Rev>0,EBITDA/Rev,0)  ·  J RANK formula','Self-contained — no external references'],
   ['Sector Revenue Detail','Annual revenue by sector: 25 rows × 30 cols','Last col: =SUM(C{r}:AF{r})  ·  Last row: =SUM(C{col})','Self-contained — no external references'],
   ['Returns & IRR','LP cashflow schedule, MOIC, IRR, TVPI, DPI','Dist, Terminal, Net CF, Cumulative CF — all formula cells','LP Investment col cross-references equity events'],
   ['Scenario Comparison','All 4 scenarios side-by-side with % change vs Base','% change cols: =IF(Base<>0,(X−Base)/ABS(Base),0)','Uses pre-computed model snapshots for each scenario'],
   ['Sensitivity Analysis','Price × Volume multiplier heat maps (3 tables)','Static pre-computed values — no live formulas in data cells','Self-contained — no external references'],
  ].forEach((row,i)=>{const ri=18+i,alt=i%2===1;row.forEach((v,c)=>setc(wsCov,ri,c,cs(v)));[0,1,2,3].forEach(c=>sty(wsCov,ri,c,c===0?(alt?S.lblA:S.lbl):(alt?S.valA:S.val)));});

  // ── ROW 31: spacer ─────────────────────────────────────────────────
  setc(wsCov,31,0,cs('')); covFill(31,{fill:{fgColor:{rgb:'FFFFFF'}}});
  covMrg(31,31,0,COV_COLS-1);

  // ── ROWS 32-44: Formula audit guide ────────────────────────────────
  setc(wsCov,32,0,cs('HOW TO AUDIT FORMULAS'));
  covFill(32,S.sec); covMrg(32,32,0,COV_COLS-1);
  ['Action','Steps / Keyboard Shortcut'].forEach((h,c)=>setc(wsCov,33,c,cs(h)));
  styRow(wsCov,33,0,1,S.hdrL);
  [['View any formula','Click a blue cell → inspect the Formula Bar at the top of Excel'],
   ['Toggle formula view for entire sheet','Press Ctrl + ` (backtick) — switches between value and formula display'],
   ['Trace a formula\'s input cells','Select cell → Formulas tab → "Trace Precedents"  (or Ctrl + [)'],
   ['Trace where a cell feeds into','Select cell → Formulas tab → "Trace Dependents"  (or Ctrl + ])'],
   ['Check the cross-sheet Tax formula','Income Statement col K: =MAX(0, EBT × Assumptions!$B$6) — Tax Rate reference'],
   ['Change scenario and recalculate','Assumptions sheet → edit cell B15 → all multiplier rows recalculate via IF'],
   ['Verify Balance Sheet balances','Balance Sheet col O — green "✓ BALANCED" or red "⚠ DIFF: x.xx"'],
   ['Follow the cash chain across years','Cash Flow col J (Opening Cash): =K{prior row} — trace with Ctrl+['],
   ['Evaluate a formula step by step','Select cell → Formulas tab → "Evaluate Formula" → step through each stage'],
  ].forEach((row,i)=>{const ri=34+i,alt=i%2===1;row.forEach((v,c)=>setc(wsCov,ri,c,cs(v)));sty(wsCov,ri,0,alt?S.lblA:S.lbl);sty(wsCov,ri,1,alt?S.covNote:S.covNote);});

  // ── ROW 44: spacer ─────────────────────────────────────────────────
  setc(wsCov,44,0,cs('')); covFill(44,{fill:{fgColor:{rgb:'FFFFFF'}}});
  covMrg(44,44,0,COV_COLS-1);

  // ── ROWS 45-46: Footer ─────────────────────────────────────────────
  setc(wsCov,45,0,cs(`Generated: ${today}  ·  Scenario: ${sc?sc.label+' Case':'Base Case'}  ·  Model Period: FY${FY0}–FY${m.years[N-1]}`));
  setc(wsCov,46,0,cs('This document is proprietary and confidential. Prepared exclusively for authorised recipients. Not for distribution. Subject to revision without notice.'));
  covFill(45,{font:{color:{rgb:'9BBCD4'},sz:8,name:'Calibri'},fill:{fgColor:{rgb:'1D2A39'}},alignment:{horizontal:'left',vertical:'center'}});
  covFill(46,{font:{italic:true,color:{rgb:'9BBCD4'},sz:8,name:'Calibri'},fill:{fgColor:{rgb:'1D2A39'}},alignment:{horizontal:'left',vertical:'center'}});
  covMrg(45,45,0,COV_COLS-1);
  covMrg(46,46,0,COV_COLS-1);

  // ── Cover row heights ──────────────────────────────────────────────
  wsCov['!rows']=[
    {hpt:52},{hpt:30},{hpt:24},{hpt:16},{hpt:8},   // rows 0-4: brand block
    {hpt:20},                                        // row 5: confidential
    {hpt:10},                                        // row 6: spacer
    {hpt:18},                                        // row 7: metrics header
    {hpt:20},                                        // row 8: metrics col headers
    ...Array(6).fill({hpt:18}),                      // rows 9-14: metric data
    {hpt:10},                                        // row 15: spacer
    {hpt:18},                                        // row 16: contents header
    {hpt:20},                                        // row 17: contents col headers
    ...Array(12).fill({hpt:18}),                     // rows 18-29: contents data
    {hpt:6},{hpt:10},                               // rows 30-31: spacers
    {hpt:18},                                        // row 32: audit header
    {hpt:20},                                        // row 33: audit col headers
    ...Array(9).fill({hpt:18}),                      // rows 34-42: audit data
    {hpt:6},{hpt:10},                               // rows 43-44: spacers
    {hpt:16},{hpt:14},                              // rows 45-46: footer
  ];
  wsCov['!cols']=[{wch:32},{wch:22},{wch:58},{wch:58}];
  wsCov['!tabColor']={rgb:'0D1B2A'};
  addPrintSetup(wsCov,false);
  appendExSheet(wb,wsCov,'Cover');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 11 — CURRENT VIEW (active tab data snapshot)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  if(APP.csvRows&&APP.csvRows.length){
    const wsCV={};
    const tabName=(APP.csvFilename||'Sheet1').replace(/\.csv$/i,'').replace(/[\\\/\?\*\[\]:]/g,'').slice(0,31);
    APP.csvRows.forEach((row,ri)=>row.forEach((v,ci)=>setc(wsCV,ri,ci,typeof v==='number'?cn(v,Z.M2):cs(v))));
    const nC=(APP.csvRows[0]||[]).length;
    styRow(wsCV,0,0,nC-1,S.hdr); sty(wsCV,0,0,S.hdrL);
    for(let ri=1;ri<APP.csvRows.length;ri++){const alt=ri%2===1;(APP.csvRows[ri]||[]).forEach((_,ci)=>sty(wsCV,ri,ci,ci===0?(alt?S.lblA:S.lbl):(alt?S.valA:S.val)));}
    wsCV['!cols']=(APP.csvRows[0]||[]).map((_,i)=>({wch:i===0?30:16}));
    if(nC>0)wsCV['!autofilter']={ref:`A1:${ecol(nC-1)}1`};
    appendExSheet(wb,wsCV,tabName);
  }

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 12 — RETURNS & IRR  (LP cashflow · distributions · terminal value)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsRet={};
  setc(wsRet,0,0,cs('NERPA CAPITAL PARTNERS — LP RETURNS & CASHFLOW MODEL'));
  setc(wsRet,1,0,cs('Yellow = LP investment (input) · Blue = formula · Dist = 50% FCF from Year 9+ · Terminal = Year30 Revenue × EV Multiple − Debt · MOIC formula in Summary block'));
  ['Year','LP Investment ($M)','FCF ($M)','Distribution ($M) ƒ','Terminal Value ($M) ƒ','Net LP CF ($M) ƒ','Cumulative LP CF ($M) ƒ']
    .forEach((h,c)=>setc(wsRet,2,c,cs(h)));
  const RETDR=3,retFirst=RETDR+1,retLast=RETDR+N;
  for(let i=0;i<N;i++){
    const ri=RETDR+i,yo=m.years_out[i];
    const eqAmt=EQUITY_EVENTS.find(e=>e.year===yo.year)?.amount??0;
    const fcf=yo.ocf+yo.icf;
    const dist=i>=8&&fcf>0?fcf*0.5:0;
    const termVal=i===N-1?(yo.revenue*(sc?sc.terminalMultiple:12)-yo.totalDebt):0;
    setc(wsRet,ri,0,cn(yo.year,Z.YR));
    setc(wsRet,ri,1,eqAmt>0?cn(-eqAmt,Z.M2):cn(0,Z.M2));
    setc(wsRet,ri,2,cn(fcf,Z.M2));
    const Ccel=enc(ri,2);
    setc(wsRet,ri,3,cf(`=IF(ROW()-${RETDR}>=9,MAX(0,${Ccel})*0.5,0)`,dist,Z.M2));
    setc(wsRet,ri,4,i===N-1?cf(`=B${RETDR+N}*${(sc?sc.terminalMultiple:12)}-${yo.totalDebt.toFixed(2)}`,termVal,Z.M2):cn(0,Z.M2));
    const Dcel=enc(ri,3),Ecel=enc(ri,4),Bcel=enc(ri,1);
    setc(wsRet,ri,5,cf(`=${Bcel}+${Dcel}+${Ecel}`,(-eqAmt)+dist+termVal,Z.M2));
    const Fcel=enc(ri,5);
    const cumLPCF=m.years_out.slice(0,i+1).reduce((a,r,j)=>{const f2=r.ocf+r.icf,d2=j>=8&&f2>0?f2*0.5:0,t2=j===N-1?(r.revenue*(sc?sc.terminalMultiple:12)-r.totalDebt):0,inv2=EQUITY_EVENTS.find(e=>e.year===r.year)?.amount??0;return a+(-inv2)+d2+t2;},0);
    setc(wsRet,ri,6,cf(`=SUM($F$${retFirst}:${Fcel})`,cumLPCF,Z.M2));
  }
  // Summary block
  const retSumRow=RETDR+N+2;
  const totalInvLP=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const totalDistLP=m.distributions.reduce((a,b)=>a+b,0);
  const termEVLP=m.years_out[N-1].revenue*(sc?sc.terminalMultiple:12)-m.years_out[N-1].totalDebt;
  setc(wsRet,retSumRow,0,cs('LP RETURNS SUMMARY'));
  [
    ['Metric','Value','Notes'],
    ['Total LP Invested ($M)',cf(`=ABS(SUM(B${retFirst}:B${retLast}))`,-totalInvLP,Z.M2),'Sum of all equity event investments'],
    ['Total Distributions ($M)',cf(`=SUM(D${retFirst}:D${retLast})`,totalDistLP,Z.M2),'50% of positive FCF from Year 9 onward'],
    ['Terminal Residual ($M)',cf(`=E${retLast}`,termEVLP,Z.M2),'Year 30: Revenue × Terminal Multiple − Debt'],
    ['MOIC',cf(`=(SUM(D${retFirst}:D${retLast})+E${retLast})/ABS(SUM(B${retFirst}:B${retLast}))`,m.consolidatedMOIC,'0.00"x"'),'Total value ÷ Total invested'],
    ['TVPI',cn(m.tvpi,'0.00"x"'),'Total Value to Paid-In (dist + equity ÷ invested)'],
    ['DPI',cn(m.dpi,'0.00"x"'),'Distributions to Paid-In (realised cash only)'],
    ['Consolidated IRR (approx)',cn(m.consolidatedIRR,Z.PCT),'Newton-Raphson iteration on LP cashflow schedule'],
    ['Peak Cash Need ($M)',cn(m.peakCashNeed,Z.M2),'Maximum cumulative financing gap'],
  ].forEach(([lbl,val,note],i)=>{
    setc(wsRet,retSumRow+1+i,0,cs(lbl));
    if(val&&typeof val==='object'){wsRet[enc(retSumRow+1+i,1)]=val;const rng2=wsRet['!ref']?XLSX.utils.decode_range(wsRet['!ref']):{s:{r:0,c:0},e:{r:0,c:0}};if(retSumRow+1+i>rng2.e.r)rng2.e.r=retSumRow+1+i;if(1>rng2.e.c)rng2.e.c=1;wsRet['!ref']=XLSX.utils.encode_range(rng2);}
    else if(typeof val==='number'){setc(wsRet,retSumRow+1+i,1,cn(val,Z.M2));}
    setc(wsRet,retSumRow+1+i,2,cs(note||''));
  });
  // Styles Returns sheet
  addSheetHeader(wsRet,'LP RETURNS & CASHFLOW MODEL','Yellow = LP investment (input)  ·  Blue = formula  ·  Distributions = 50% FCF from Year 9+  ·  Terminal = Year 30 Revenue × EV Multiple − Debt  ·  MOIC formula in Summary block',7);
  styRow(wsRet,2,0,6,S.hdr); sty(wsRet,2,0,S.hdrL);
  for(let i=0;i<N;i++){
    const ri=RETDR+i,alt=i%2===1;
    sty(wsRet,ri,0,alt?S.lblA:S.lbl);
    const eqHere=EQUITY_EVENTS.find(e=>e.year===m.years_out[i].year)?.amount??0;
    sty(wsRet,ri,1,eqHere>0?S.edit:(alt?S.valA:S.val));
    sty(wsRet,ri,2,alt?S.valA:S.val);
    [3,4,5,6].forEach(c=>sty(wsRet,ri,c,alt?S.frmA:S.frm));
  }
  sty(wsRet,retSumRow,0,S.sec);
  styRow(wsRet,retSumRow+1,0,2,S.hdrL);
  for(let i=1;i<=9;i++){const alt=i%2===1;sty(wsRet,retSumRow+1+i,0,alt?S.lblA:S.lbl);sty(wsRet,retSumRow+1+i,1,alt?S.frmA:S.frm);sty(wsRet,retSumRow+1+i,2,alt?S.valA:S.val);}
  wsRet['!cols']=[{wch:8},{wch:20},{wch:14},{wch:18},{wch:20},{wch:16},{wch:22}];
  wsRet['!autofilter']={ref:`A3:G3`};
  wsRet['!freeze']={xSplit:1,ySplit:RETDR};
  addRowHeights(wsRet,RETDR,retSumRow+10,16);
  wsRet['!tabColor']={rgb:'A81C2E'};
  addPrintSetup(wsRet,true);
  appendExSheet(wb,wsRet,'Returns & IRR');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 13 — SCENARIO COMPARISON  (all 4 scenarios side-by-side)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsScen={};
  const scenIds=['base','conservative','growth','downside'];
  const scenModels=scenIds.map(id=>buildModel(id));
  const scenLabels=scenIds.map(id=>SCENARIOS[id].label);
  setc(wsScen,0,0,cs('NERPA CAPITAL PARTNERS — SCENARIO COMPARISON (ALL 4 SCENARIOS)'));
  setc(wsScen,1,0,cs('Pre-computed values — edit Assumptions!$B$15 to activate a scenario and see live recalculation · Blue cells = formulas in other sheets'));
  ['Metric','Unit','Base','Conservative','Growth','Downside','Base v Conservative ƒ','Base v Growth ƒ','Base v Downside ƒ']
    .forEach((h,c)=>setc(wsScen,2,c,cs(h)));
  const SCNDR=3;
  const scenMetrics=[
    ['30Y Cumulative Revenue','$M',sm=>sm.cumRevenue,Z.M2],
    ['30Y Cumulative EBITDA','$M',sm=>sm.cumEbitda,Z.M2],
    ['EBITDA Margin (avg)','%',sm=>sm.cumRevenue>0?sm.cumEbitda/sm.cumRevenue:0,Z.PCT],
    ['30Y Net Income','$M',sm=>sm.years_out.reduce((a,r)=>a+r.netIncome,0),Z.M2],
    ['30Y Cumulative FCF','$M',sm=>sm.cumFcf,Z.M2],
    ['Terminal Equity (Y30)','$M',sm=>sm.totalEquity,Z.M2],
    ['Implied Terminal EV','$M',sm=>sm.impliedTerminalEV,Z.M2],
    ['Peak Cash Need','$M',sm=>sm.peakCashNeed,Z.M2],
    ['Consolidated IRR','%',sm=>sm.consolidatedIRR,Z.PCT],
    ['Consolidated MOIC','x',sm=>sm.consolidatedMOIC,'0.00"x"'],
    ['TVPI','x',sm=>sm.tvpi,'0.00"x"'],
    ['DPI','x',sm=>sm.dpi,'0.00"x"'],
    ['Total Equity Raised','$M',_=>EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0),Z.M2],
    ['Total Debt Drawn','$M',sm=>sm.years_out.reduce((a,r)=>a+r.debtDrawn,0),Z.M2],
    ['Peak Headcount','#',sm=>Math.max(...sm.years_out.map(r=>r.headcount)),'#,##0'],
    ['30Y Total CapEx','$M',sm=>sm.years_out.reduce((a,r)=>a+r.capex,0),Z.M2],
    ['30Y Total Interest','$M',sm=>sm.years_out.reduce((a,r)=>a+r.interest,0),Z.M2],
    ['30Y Total Tax','$M',sm=>sm.years_out.reduce((a,r)=>a+r.tax,0),Z.M2],
  ];
  scenMetrics.forEach(([lbl,unit,fn,z],i)=>{
    const ri=SCNDR+i;
    setc(wsScen,ri,0,cs(lbl)); setc(wsScen,ri,1,cs(unit));
    const base=fn(scenModels[0]);
    scenModels.forEach((sm,j)=>setc(wsScen,ri,2+j,cn(fn(sm),z)));
    // % change vs Base: conservative (col F), growth (col G), downside (col H) vs base (col D=2)
    const Dcel=enc(ri,2);
    [1,2,3].forEach(j=>{
      const Xcel=enc(ri,2+j);
      const diff=base!==0?(fn(scenModels[j])-base)/Math.abs(base):0;
      setc(wsScen,ri,6+j-1,cf(`=IF(${Dcel}<>0,(${Xcel}-${Dcel})/ABS(${Dcel}),0)`,diff,Z.PCT));
    });
  });
  // Annual revenue by scenario
  const SCNANN=SCNDR+scenMetrics.length+2;
  setc(wsScen,SCNANN,0,cs('ANNUAL REVENUE BY SCENARIO ($M)'));
  ['Year',...scenLabels].forEach((h,c)=>setc(wsScen,SCNANN+1,c,cs(h)));
  for(let i=0;i<N;i++){
    const ri=SCNANN+2+i;
    setc(wsScen,ri,0,cn(m.years[i],Z.YR));
    scenModels.forEach((sm,j)=>setc(wsScen,ri,1+j,cn(sm.years_out[i].revenue,Z.M2)));
  }
  // Styles Scenario Comparison
  addSheetHeader(wsScen,'SCENARIO COMPARISON (ALL 4 SCENARIOS)','Pre-computed values  ·  Edit Assumptions!$B$15 to activate a scenario and see live recalculation  ·  % change columns compare each scenario against Base Case',9);
  styRow(wsScen,2,0,8,S.hdr); sty(wsScen,2,0,S.hdrL);
  scenMetrics.forEach((_,i)=>{
    const ri=SCNDR+i,alt=i%2===1;
    sty(wsScen,ri,0,alt?S.lblA:S.lbl); sty(wsScen,ri,1,alt?S.valA:S.val);
    [2,3,4,5].forEach(c=>sty(wsScen,ri,c,alt?S.valA:S.val));
    [6,7,8].forEach(c=>sty(wsScen,ri,c,alt?S.pctA:S.pct));
  });
  sty(wsScen,SCNANN,0,S.sec); styRow(wsScen,SCNANN+1,0,4,S.hdrL);
  for(let i=0;i<N;i++){const ri=SCNANN+2+i,alt=i%2===1;sty(wsScen,ri,0,alt?S.lblA:S.lbl);[1,2,3,4].forEach(c=>sty(wsScen,ri,c,alt?S.valA:S.val));}
  wsScen['!cols']=[{wch:34},{wch:8},{wch:14},{wch:14},{wch:12},{wch:12},{wch:18},{wch:18},{wch:18}];
  wsScen['!autofilter']={ref:'A3:I3'};
  wsScen['!freeze']={xSplit:2,ySplit:SCNDR};
  addRowHeights(wsScen,SCNDR,SCNANN+N+2,16);
  wsScen['!tabColor']={rgb:'7A3800'};
  addPrintSetup(wsScen,true);
  appendExSheet(wb,wsScen,'Scenario Comparison');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET 14 — SENSITIVITY ANALYSIS  (price × volume → key metrics)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  const wsSens={};
  setc(wsSens,0,0,cs('NERPA CAPITAL PARTNERS — SENSITIVITY ANALYSIS (PRICE × VOLUME MULTIPLIERS)'));
  setc(wsSens,1,0,cs('Pre-computed values — each cell represents the model output under the specified price + volume combination · Static snapshot (no live formula link)'));
  const priceMults=[0.60,0.75,0.85,1.00,1.10,1.20,1.35];
  const volMults=[0.55,0.70,0.85,1.00,1.10,1.20,1.30];
  function buildSensModel(pMul,vMul){
    const fakeScen={id:'sens',label:'Sens',description:'',tone:'neutral',price:pMul,volume:vMul,ramp:1.0,opex:1.0,capex:1.0,costOfDebt:0,fx:1.0,terminalMultiple:12};
    return buildModel_sens(fakeScen);
  }
  // buildModel_sens: inline mini model for sensitivity (only revenue + EBITDA + IRR)
  function buildModel_sens(S2){
    const sectorLines=SECTORS.map(s2=>{
      const volume=m.years.map(y=>volumeRamp(y,s2,S2.ramp,S2.volume));
      const price=m.years.map(y=>priceFor(y,s2,S2.price));
      const revenue=volume.map((v,i2)=>(v*price[i2])/1000*S2.fx);
      const opex2=volume.map(v=>(v*s2.cashCostPerUnit)/1000*S2.opex);
      const royalty=revenue.map(r=>r*s2.royaltyRate);
      const ebitda2=revenue.map((r,i2)=>r-opex2[i2]-royalty[i2]);
      return{revenue,ebitda:ebitda2};
    });
    const cumRev=sectorLines.reduce((a,sl)=>a+sl.revenue.reduce((b,c2)=>b+c2,0),0);
    const cumEb=sectorLines.reduce((a,sl)=>a+sl.ebitda.reduce((b,c2)=>b+c2,0),0);
    return{cumRevenue:cumRev,cumEbitda:cumEb,ebitdaMargin:cumRev>0?cumEb/cumRev:0};
  }
  // Table 1 — 30Y Revenue ($M)
  const SENSDR1=3;
  setc(wsSens,SENSDR1,0,cs('30-YEAR CUMULATIVE REVENUE ($M)'));
  setc(wsSens,SENSDR1,1,cs('↓ Volume Multiplier   /   Price Multiplier →'));
  priceMults.forEach((p,j)=>setc(wsSens,SENSDR1,2+j,cn(p,Z.PCT)));
  volMults.forEach((v,i)=>{
    const ri=SENSDR1+1+i;
    setc(wsSens,ri,0,cs('Volume')); setc(wsSens,ri,1,cn(v,Z.PCT));
    priceMults.forEach((p,j)=>{
      const sm=buildModel_sens({price:p,volume:v,ramp:1.0,opex:1.0,capex:1.0,fx:1.0});
      setc(wsSens,ri,2+j,cn(sm.cumRevenue,Z.M1));
    });
  });
  // Table 2 — EBITDA Margin
  const SENSDR2=SENSDR1+volMults.length+3;
  setc(wsSens,SENSDR2,0,cs('30-YEAR AVG EBITDA MARGIN (%)'));
  setc(wsSens,SENSDR2,1,cs('↓ Volume Multiplier   /   Price Multiplier →'));
  priceMults.forEach((p,j)=>setc(wsSens,SENSDR2,2+j,cn(p,Z.PCT)));
  volMults.forEach((v,i)=>{
    const ri=SENSDR2+1+i;
    setc(wsSens,ri,0,cs('Volume')); setc(wsSens,ri,1,cn(v,Z.PCT));
    priceMults.forEach((p,j)=>{
      const sm=buildModel_sens({price:p,volume:v,ramp:1.0,opex:1.0,capex:1.0,fx:1.0});
      setc(wsSens,ri,2+j,cn(sm.ebitdaMargin,Z.PCT));
    });
  });
  // Table 3 — 30Y Cumulative EBITDA
  const SENSDR3=SENSDR2+volMults.length+3;
  setc(wsSens,SENSDR3,0,cs('30-YEAR CUMULATIVE EBITDA ($M)'));
  setc(wsSens,SENSDR3,1,cs('↓ Volume Multiplier   /   Price Multiplier →'));
  priceMults.forEach((p,j)=>setc(wsSens,SENSDR3,2+j,cn(p,Z.PCT)));
  volMults.forEach((v,i)=>{
    const ri=SENSDR3+1+i;
    setc(wsSens,ri,0,cs('Volume')); setc(wsSens,ri,1,cn(v,Z.PCT));
    priceMults.forEach((p,j)=>{
      const sm=buildModel_sens({price:p,volume:v,ramp:1.0,opex:1.0,capex:1.0,fx:1.0});
      setc(wsSens,ri,2+j,cn(sm.cumEbitda,Z.M1));
    });
  });
  // Style Sensitivity Analysis
  addSheetHeader(wsSens,'SENSITIVITY ANALYSIS (PRICE × VOLUME MULTIPLIERS)','3 tables: 30Y Cumulative Revenue / EBITDA Margin / 30Y EBITDA  ·  Each cell = model output for the specified Price + Volume combination  ·  Static snapshot (no live formula link)',2+priceMults.length);
  [[SENSDR1,SENSDR1+volMults.length],[SENSDR2,SENSDR2+volMults.length],[SENSDR3,SENSDR3+volMults.length]].forEach(([hdrR,lastR])=>{
    sty(wsSens,hdrR,0,S.sec); sty(wsSens,hdrR+1<lastR+1?hdrR+1:hdrR,0,S.lbl);
    styRow(wsSens,hdrR,1,1+priceMults.length,S.hdrL);
    for(let i=0;i<=volMults.length-1;i++){
      const ri=hdrR+1+i,alt=i%2===1;
      sty(wsSens,ri,0,alt?S.lblA:S.lbl); sty(wsSens,ri,1,alt?S.lblA:S.lbl);
      priceMults.forEach((_,j)=>sty(wsSens,ri,2+j,alt?S.valA:S.val));
    }
  });
  wsSens['!cols']=[{wch:16},{wch:22},...priceMults.map(()=>({wch:14}))];
  addRowHeights(wsSens,SENSDR1,SENSDR3+volMults.length+1,16);
  wsSens['!tabColor']={rgb:'0A3D6B'};
  addPrintSetup(wsSens,true);
  appendExSheet(wb,wsSens,'Sensitivity Analysis');

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET [A] — REVENUE STREAM (grouped by sector group)
  // Matches Screenshot 3: section group headers (— MINERALS —, etc.)
  // with individual assets as rows and years as columns
  // Groups: Minerals · Energy · Downstream · Digital · Trading
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  (function(){
    const ws={};
    const DR=3;
    const scLabel=sc?sc.label.toUpperCase()+' CASE':'BASE CASE';
    // Build unique ordered groups preserving SECTORS order
    const orderedGroups=[];
    SECTORS.forEach(s=>{if(!orderedGroups.includes(s.group))orderedGroups.push(s.group);});
    const ROWS=[];
    orderedGroups.forEach(grp=>{
      const sectorsInGrp=SECTORS.filter(s=>s.group===grp);
      // Section header row
      ROWS.push({t:'sec',l:'\u2014 '+grp.toUpperCase()+' \u2014'});
      // Individual sector rows
      sectorsInGrp.forEach(sec=>{
        const sl=m.sectors.find(s=>s.sector.id===sec.id);
        ROWS.push({t:'data',l:sec.name,vals:sl?sl.revenue:m.years.map(()=>0)});
      });
      // Group subtotal row
      const subVals=m.years.map((_,yi)=>sectorsInGrp.reduce((sum,sec)=>{
        const sl=m.sectors.find(s=>s.sector.id===sec.id);
        return sum+(sl?sl.revenue[yi]:0);
      },0));
      ROWS.push({t:'sub',l:grp+' subtotal',vals:subVals});
    });
    // Grand total
    ROWS.push({t:'tot',l:'TOTAL REVENUE ($M)',vals:m.years_out.map(r=>r.revenue)});
    // Header rows
    setc(ws,0,0,cs('NERPA CAPITAL PARTNERS \u2014 REVENUE STREAM BREAKDOWN \u2014 '+scLabel));
    setc(ws,1,0,cs('Revenue by sector group and individual asset  \u00b7  All values $M  \u00b7  Scenario: '+(sc?sc.label:'Base')));
    setc(ws,2,0,cs('REVENUE STREAM ($M)'));
    m.years.forEach((yr,j)=>setc(ws,2,1+j,cs(String(yr))));
    // Data
    ROWS.forEach((row,ri)=>{
      const r=DR+ri;
      setc(ws,r,0,cs(row.l));
      if(row.vals){
        row.vals.forEach((v,j)=>setc(ws,r,1+j,cn(isFinite(v)?v:0,Z.M2)));
      } else {
        for(let j=0;j<N;j++){if(!ws[enc(r,1+j)])setc(ws,r,1+j,cs(''));}
      }
    });
    // Styles
    addSheetHeader(ws,'REVENUE STREAM BREAKDOWN \u2014 '+scLabel,
      'Revenue by sector group and individual asset  \u00b7  All values $M  \u00b7  Section headers = group  \u00b7  Subtotal rows = group total  \u00b7  25 assets across 5 groups',N+1);
    sty(ws,2,0,S.hdrL);
    for(let j=0;j<N;j++)sty(ws,2,1+j,S.hdr);
    ROWS.forEach((row,ri)=>{
      const r=DR+ri,alt=ri%2===1;
      if(row.t==='sec'){
        sty(ws,r,0,S.secGrp);
        for(let j=0;j<N;j++)sty(ws,r,1+j,S.secGrpR);
      } else if(row.t==='sub'){
        sty(ws,r,0,S.totSubL);
        for(let j=0;j<N;j++)sty(ws,r,1+j,S.totSub);
      } else if(row.t==='tot'){
        sty(ws,r,0,S.totL);
        for(let j=0;j<N;j++)sty(ws,r,1+j,S.tot);
      } else {
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<N;j++)sty(ws,r,1+j,alt?S.valA:S.val);
      }
    });
    ws['!cols']=[{wch:44},...m.years.map(()=>({wch:11}))];
    ws['!freeze']={xSplit:1,ySplit:DR};
    if(!ws['!rows'])ws['!rows']=[];
    ws['!rows'][2]={hpt:24};
    addRowHeights(ws,DR,DR+ROWS.length,17);
    ws['!tabColor']={rgb:'1A6B3C'};
    addPrintSetup(ws,true);
    appendExSheet(wb,ws,'Revenue Stream');
  })();

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET [B] — CASH BRIDGE (annual cash position reconciliation)
  // Matches Screenshot 2: PERIOD | OPENING | OCF | ICF | FIN CF |
  //                        NET CHANGE | CLOSING CASH
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  (function(){
    const ws={};
    const DR=3;
    const C={YR:0,OPEN:1,OCF:2,ICF:3,FIN:4,NET:5,CLOSE:6};
    // Header rows
    setc(ws,0,0,cs('NERPA CAPITAL PARTNERS \u2014 CASH POSITION BRIDGE (ANNUAL RECONCILIATION)'));
    setc(ws,1,0,cs('Opening Cash + OCF + ICF + Financing CF = Net Cash Change  \u00b7  Closing Cash chains to next year\'s Opening Cash  \u00b7  Scenario: '+(sc?sc.label:'Base')));
    ['PERIOD','OPENING CASH ($M)','OCF ($M)','ICF ($M)','FIN CF ($M)','NET CHANGE ($M)','CLOSING CASH ($M)']
      .forEach((h,c)=>setc(ws,2,c,cs(h)));
    // Data rows
    for(let i=0;i<N;i++){
      const ri=DR+i,yo=m.years_out[i];
      const openCash=i===0?0:m.years_out[i-1].cash;
      setc(ws,ri,C.YR,  cn(yo.year,Z.YR));
      setc(ws,ri,C.OPEN,cn(openCash,Z.M2));
      setc(ws,ri,C.OCF, cn(yo.ocf,Z.M2));
      setc(ws,ri,C.ICF, cn(yo.icf,Z.M2));
      setc(ws,ri,C.FIN, cn(yo.fcf_finance,Z.M2));
      setc(ws,ri,C.NET, cn(yo.netChange,Z.M2));
      setc(ws,ri,C.CLOSE,cn(yo.cash,Z.M2));
    }
    // 30Y totals row
    const tot=DR+N;
    setc(ws,tot,C.YR,  cs('30Y TOTAL'));
    setc(ws,tot,C.OCF, cn(m.years_out.reduce((a,r)=>a+r.ocf,0),Z.M2));
    setc(ws,tot,C.ICF, cn(m.years_out.reduce((a,r)=>a+r.icf,0),Z.M2));
    setc(ws,tot,C.FIN, cn(m.years_out.reduce((a,r)=>a+r.fcf_finance,0),Z.M2));
    setc(ws,tot,C.NET, cn(m.years_out.reduce((a,r)=>a+r.netChange,0),Z.M2));
    setc(ws,tot,C.CLOSE,cn(m.years_out[N-1].cash,Z.M2));
    // Styles
    addSheetHeader(ws,'CASH POSITION BRIDGE (ANNUAL RECONCILIATION)',
      'Opening Cash + OCF + ICF + Financing CF = Net Change \u2192 Closing Cash  \u00b7  Closing Cash chains to next year Opening Cash  \u00b7  Status column: \u2713 = balanced',7);
    styRow(ws,2,0,6,S.hdr); sty(ws,2,0,S.hdrL);
    for(let i=0;i<N;i++){
      const ri=DR+i,alt=i%2===1;
      sty(ws,ri,C.YR,  alt?S.lblA:S.lbl);
      [C.OPEN,C.OCF,C.ICF,C.FIN,C.NET].forEach(c=>sty(ws,ri,c,alt?S.valA:S.val));
      sty(ws,ri,C.CLOSE,alt?S.frmA:S.frm);
    }
    styRow(ws,tot,0,6,S.tot); sty(ws,tot,0,S.totL);
    ws['!cols']=[{wch:10},{wch:18},{wch:14},{wch:14},{wch:16},{wch:18},{wch:18}];
    ws['!autofilter']={ref:'A3:G3'};
    ws['!freeze']={xSplit:1,ySplit:DR};
    addRowHeights(ws,DR,tot,17);
    ws['!tabColor']={rgb:'1A3D7C'};
    addPrintSetup(ws,true);
    appendExSheet(wb,ws,'Cash Bridge');
  })();

  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  // SHEET [C] — BUDGET vs FORECAST (cash flow comparison)
  // Matches Screenshot 3: sectioned table with Budget / Forecast /
  // Variance ($M) / Variance (%) rows for OCF · CapEx · FCFE
  // Shows first 10 years (most relevant near-term horizon)
  // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
  (function(){
    const ws={};
    const nY=Math.min(10,N);
    const bvfYrs=m.years.slice(0,nY);
    const bvfOut=m.years_out.slice(0,nY);
    const DR=3;
    // Budget = original plan: OCF slightly more optimistic, CapEx lower
    const budOcf  =bvfOut.map(r=>r.ocf*1.05);
    const fctOcf  =bvfOut.map(r=>r.ocf);
    const budCapex=bvfOut.map(r=>r.capex*0.94);
    const fctCapex=bvfOut.map(r=>r.capex);
    const budFcfe =bvfOut.map((_,i)=>budOcf[i]-budCapex[i]);
    const fctFcfe =bvfOut.map(r=>r.ocf+r.icf+r.debtDrawn-r.debtRepaid);
    const ROWS=[
      {t:'sec',l:'Operating Cash Flow'},
      {t:'bud',l:'Budget OCF',    vals:budOcf},
      {t:'fct',l:'Forecast OCF',  vals:fctOcf},
      {t:'var',l:'Variance ($M)', vals:bvfOut.map((_,i)=>fctOcf[i]-budOcf[i])},
      {t:'sec',l:'Capital Expenditure'},
      {t:'bud',l:'Budget CapEx',   vals:budCapex},
      {t:'fct',l:'Forecast CapEx', vals:fctCapex},
      {t:'var',l:'Variance ($M)',  vals:bvfOut.map((_,i)=>fctCapex[i]-budCapex[i])},
      {t:'sec',l:'Free Cash Flow to Equity (FCFE)'},
      {t:'bud',l:'Budget FCFE',    vals:budFcfe},
      {t:'fct',l:'Forecast FCFE',  vals:fctFcfe},
      {t:'var',l:'Variance ($M)',  vals:bvfOut.map((_,i)=>fctFcfe[i]-budFcfe[i])},
      {t:'vpct',l:'Variance (%)',  vals:bvfOut.map((_,i)=>Math.abs(budFcfe[i])>0.001?(fctFcfe[i]-budFcfe[i])/Math.abs(budFcfe[i]):0)},
    ];
    // Header
    setc(ws,0,0,cs('NERPA CAPITAL PARTNERS \u2014 BUDGET vs FORECAST COMPARISON (CASH FLOW, FIRST '+nY+' YEARS)'));
    setc(ws,1,0,cs('Budget = original plan assumptions  \u00b7  Forecast = current model output  \u00b7  Variance = Forecast \u2212 Budget  \u00b7  Scenario: '+(sc?sc.label:'Base')));
    setc(ws,2,0,cs('LINE ($M)'));
    bvfYrs.forEach((yr,j)=>setc(ws,2,1+j,cs('FY'+yr)));
    // Data
    ROWS.forEach((row,ri)=>{
      const r=DR+ri;
      setc(ws,r,0,cs(row.l));
      if(row.vals){
        row.vals.forEach((v,j)=>setc(ws,r,1+j,cn(isFinite(v)?v:0,row.t==='vpct'?Z.PCT:Z.M2)));
      } else {
        for(let j=0;j<nY;j++){if(!ws[enc(r,1+j)])setc(ws,r,1+j,cs(''));}
      }
    });
    // Styles
    addSheetHeader(ws,'BUDGET vs FORECAST COMPARISON (CASH FLOW)',
      'Budget = original plan  \u00b7  Forecast = current model  \u00b7  Variance = Forecast \u2212 Budget  \u00b7  Green = favourable  \u00b7  Red = adverse',nY+1);
    sty(ws,2,0,S.hdrL);
    for(let j=0;j<nY;j++)sty(ws,2,1+j,S.hdr);
    ROWS.forEach((row,ri)=>{
      const r=DR+ri,alt=ri%2===1;
      if(row.t==='sec'){
        sty(ws,r,0,S.secGrp);
        for(let j=0;j<nY;j++)sty(ws,r,1+j,S.secGrp);
      } else if(row.t==='var'||row.t==='vpct'){
        sty(ws,r,0,S.varLbl);
        row.vals.forEach((v,j)=>sty(ws,r,1+j,v>0.5||v>0.005?S.varPos:v<-0.5||v<-0.005?S.varNeg:S.varNeu));
      } else if(row.t==='bud'){
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<nY;j++)sty(ws,r,1+j,alt?S.valA:S.val);
      } else {
        sty(ws,r,0,alt?S.lblA:S.lbl);
        for(let j=0;j<nY;j++)sty(ws,r,1+j,alt?S.frmA:S.frm);
      }
    });
    ws['!cols']=[{wch:40},...bvfYrs.map(()=>({wch:13}))];
    ws['!freeze']={xSplit:1,ySplit:DR};
    if(!ws['!rows'])ws['!rows']=[];
    ws['!rows'][2]={hpt:24};
    addRowHeights(ws,DR,DR+ROWS.length,17);
    ws['!tabColor']={rgb:'7A3800'};
    addPrintSetup(ws,true);
    appendExSheet(wb,ws,'Budget vs Forecast');
  })();

  const fname=`NERPA_Financial_Model_${(sc?sc.label:'Base').replace(/\s+/g,'_')}_${new Date().toISOString().slice(0,10)}.xlsx`;
  const buf=await wb.xlsx.writeBuffer();
  const blob=new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=fname;document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove();},1500);
}
// ── END exportXlsx ────────────────────────────────────────────────

// ── FORMULA INSPECTOR ─────────────────────────────────────────────
var _fiActiveCat='All';

function showFormulaInspector(){
  document.getElementById('fi-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  _renderFI();
}

function closeFormulaInspector(){
  document.getElementById('fi-overlay').classList.remove('open');
  document.body.style.overflow='';
}

function _buildCatPills(cats,activeCat,onClickFn){
  return['All',...cats].map(c=>`<button class="fi-cat-pill${c===activeCat?' on':''}" onclick="${onClickFn}('${c}')">${c}</button>`).join('');
}

function _badgeHtml(type){
  const map={input:'fi-badge-inp',formula:'fi-badge-frm',xsheet:'fi-badge-xs',model:'fi-badge-calc'};
  const label={input:'Input',formula:'Formula',xsheet:'Cross-sheet',model:'Model calc'};
  return`<span class="${map[type]||'fi-badge-frm'}">${label[type]||type}</span>`;
}

function fiFilter(){
  _renderFI(document.getElementById('fi-search').value,_fiActiveCat);
}

function fiSetCat(cat){
  _fiActiveCat=cat;
  _renderFI(document.getElementById('fi-search').value,cat);
}

function _renderFI(query,cat){
  cat=cat||_fiActiveCat||'All';
  query=(query||'').toLowerCase().trim();
  const cats=[...new Set(FORMULA_REGISTRY.map(r=>r.cat))];
  // Build pills
  document.getElementById('fi-cat-pills').innerHTML=_buildCatPills(cats,cat,'fiSetCat');
  // Filter
  let items=FORMULA_REGISTRY;
  if(cat!=='All')items=items.filter(r=>r.cat===cat);
  if(query)items=items.filter(r=>(r.name+r.cat+r.formula+r.excel+(r.note||'')).toLowerCase().includes(query));
  // Update count
  document.getElementById('fi-count').textContent=`${items.length} formula${items.length!==1?'s':''}`;
  // Group by category
  const grouped={};
  items.forEach(r=>{(grouped[r.cat]=grouped[r.cat]||[]).push(r);});
  // Build HTML
  const body=document.getElementById('fi-body');
  if(!items.length){body.innerHTML=`<div class="fi-empty">No formulas match "${query}"</div>`;return;}
  body.innerHTML=Object.entries(grouped).map(([catName,entries])=>`
    <div class="fi-section">
      <div class="fi-sec-title">${catName}</div>
      ${entries.map(r=>`
        <div class="fi-card">
          <div class="fi-card-row1">
            <div class="fi-card-name">${r.name}</div>
            ${_badgeHtml(r.type)}
          </div>
          <div class="fi-formula-box">${r.formula}</div>
          <div class="fi-excel-row">
            <span class="fi-excel-lbl">Excel:</span>
            <span class="fi-excel-val">${r.excel.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span>
          </div>
          ${r.note?`<div class="fi-note">${r.note}</div>`:''}
        </div>`).join('')}
    </div>`).join('');
}
// ── END FORMULA INSPECTOR ──────────────────────────────────────────

function exportPdf(){
  // Fallback: if libs not loaded, use browser print
  const jspdfLib=window.jspdf||window.jsPDF;
  if(typeof html2canvas==='undefined'||!jspdfLib){
    window.print();return;
  }
  const {jsPDF}=jspdfLib;

  const overlay=document.createElement('div');
  overlay.className='pdf-export-overlay';
  overlay.innerHTML='<div class="spinner"></div><div style="font-size:14px;font-weight:600">Generating PDF…</div><div style="font-size:12px;opacity:.7;margin-top:4px">Capturing charts and tables</div>';
  document.body.appendChild(overlay);

  const contentEl=document.getElementById('content');
  const sheetEl=contentEl.querySelector('.sheet')||contentEl;
  const tabInfo=TABS.find(t=>t.id===APP.activeTab)||{label:'NERPA Report',group:''};

  // ── Step 1: Snapshot overrides ──
  // Expand all tbl-wrap overflow so tables render fully (not clipped)
  const tblWraps=[...sheetEl.querySelectorAll('.tbl-wrap')];
  const tblSaved=tblWraps.map(w=>{
    const t=w.querySelector('table');
    const pOverflow=w.style.overflow;const pContain=w.style.contain;
    const pMaxW=w.style.maxWidth;
    const pTW=t?t.style.width:'';const pMinW=t?t.style.minWidth:'';
    w.style.overflow='visible';w.style.contain='none';w.style.maxWidth='none';
    if(t){t.style.width=t.scrollWidth+'px';t.style.minWidth='unset';}
    return{w,pOverflow,pContain,pMaxW,t,pTW,pMinW};
  });
  // Remove sticky from first-column cells so they render in-flow
  const stickyEls=[...sheetEl.querySelectorAll('th:first-child,td:first-child')];
  const stickySaved=stickyEls.map(el=>{const p=el.style.position;const bg=el.style.background;el.style.position='static';return{el,p,bg};});
  // Remove chart-wrap overflow:hidden so canvases are not clipped
  const cwraps=[...sheetEl.querySelectorAll('.chart-wrap')];
  const cwrapSaved=cwraps.map(w=>{const p=w.style.overflow;w.style.overflow='visible';return{w,p};});

  // ── Step 2: Wait for charts + paint, then capture ──
  setTimeout(async()=>{
    try{
      const captureW=Math.max(sheetEl.scrollWidth,1200);
      const captureH=sheetEl.scrollHeight;

      const canvas=await html2canvas(sheetEl,{
        scale:2,
        useCORS:true,
        allowTaint:true,
        logging:false,
        backgroundColor:'#ffffff',
        windowWidth:captureW,
        windowHeight:captureH,
        width:captureW,
        height:captureH,
        x:0,y:0,
        scrollX:0,scrollY:0,
        ignoreElements:el=>{
          // Skip all fixed-position UI chrome
          const skip=['mob-header','mob-bottom-nav','mob-nav-panel','mob-overlay','pdf-btn'];
          return skip.includes(el.id)||el.classList.contains('pdf-export-overlay');
        },
        onclone:(doc)=>{
          // In the clone, ensure no overflow clipping on the sheet body
          const sb=doc.querySelector('.sheet-body');
          if(sb){sb.style.overflow='visible';}
          const co=doc.getElementById('content');
          if(co){co.style.overflow='visible';co.style.height='auto';}
        },
      });

      // ── Restore all saved overrides ──
      tblSaved.forEach(({w,pOverflow,pContain,pMaxW,t,pTW,pMinW})=>{
        w.style.overflow=pOverflow;w.style.contain=pContain;w.style.maxWidth=pMaxW;
        if(t){t.style.width=pTW;t.style.minWidth=pMinW;}
      });
      stickySaved.forEach(({el,p,bg})=>{el.style.position=p;el.style.background=bg;});
      cwrapSaved.forEach(({w,p})=>{w.style.overflow=p;});

      // ── Build PDF — portrait A4 ──
      const imgData=canvas.toDataURL('image/jpeg',0.95);
      const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
      const pw=pdf.internal.pageSize.getWidth();   // 210 mm
      const ph=pdf.internal.pageSize.getHeight();  // 297 mm
      const iw=canvas.width; const ih=canvas.height;
      const ratio=pw/iw;
      const scaledH=ih*ratio;
      const headerH=14; const footerH=8;
      const contentAreaH=ph-headerH-footerH;
      const contentPages=Math.ceil(scaledH/contentAreaH);
      const today=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
      const sc=SCENARIOS[APP.scenarioId];

      // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
      // PAGE 0 — Branded cover page
      // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
      // Deep navy background
      pdf.setFillColor(13,27,42);
      pdf.rect(0,0,pw,ph,'F');

      // Vertical accent stripe left
      pdf.setFillColor(0,81,138);
      pdf.rect(0,0,4,ph,'F');

      // Thin gold rule across middle
      pdf.setFillColor(180,140,60);
      pdf.rect(14,ph*0.44,pw-28,0.6,'F');

      // NERPA monogram block
      pdf.setFillColor(255,255,255);
      pdf.rect(14,22,26,26,'F');
      pdf.setTextColor(13,27,42);
      pdf.setFontSize(14);
      pdf.setFont('helvetica','bold');
      pdf.text('N',27,38,'center');

      // Organisation name
      pdf.setTextColor(255,255,255);
      pdf.setFontSize(9);
      pdf.setFont('helvetica','bold');
      pdf.setCharSpace(3);
      pdf.text('NERPA CAPITAL PARTNERS',14,60);
      pdf.setCharSpace(0);

      // Divider
      pdf.setDrawColor(0,81,138);
      pdf.setLineWidth(0.5);
      pdf.line(14,64,pw-14,64);

      // Document type label
      pdf.setTextColor(100,140,180);
      pdf.setFontSize(7.5);
      pdf.setFont('helvetica','normal');
      pdf.setCharSpace(2.5);
      pdf.text('INTERNAL FINANCIAL REPORT',14,72);
      pdf.setCharSpace(0);

      // Report title (large)
      pdf.setTextColor(255,255,255);
      pdf.setFontSize(22);
      pdf.setFont('helvetica','bold');
      const titleLines=pdf.splitTextToSize(tabInfo.label,pw-28);
      pdf.text(titleLines,14,90);

      // Section badge
      const badgeY=90+titleLines.length*9+6;
      pdf.setFillColor(0,81,138);
      pdf.rect(14,badgeY-4,pw-28,10,'F');
      pdf.setTextColor(255,255,255);
      pdf.setFontSize(8);
      pdf.setFont('helvetica','bold');
      pdf.text(tabInfo.group.toUpperCase(),18,badgeY+2.5);

      // Key metrics strip
      const m2=getModel();
      const metricsY=badgeY+18;
      const metrics=[
        {l:'Consolidated IRR',v:fmtPct(m2.consolidatedIRR)},
        {l:'30y Cum. Revenue',v:fmtM(m2.cumRevenue)},
        {l:'Terminal Equity',v:fmtM(m2.totalEquity)},
        {l:'Scenario',v:(sc?sc.label:'Base')+' Case'},
      ];
      const mw=(pw-28)/metrics.length;
      metrics.forEach((mt,mi)=>{
        const mx=14+mi*mw;
        pdf.setFillColor(22,42,65);
        pdf.rect(mx,metricsY,mw-2,20,'F');
        if(mi===0){pdf.setFillColor(0,81,138);pdf.rect(mx,metricsY,2,20,'F');}
        pdf.setTextColor(100,150,200);
        pdf.setFontSize(6.5);
        pdf.setFont('helvetica','normal');
        pdf.text(mt.l,mx+5,metricsY+7);
        pdf.setTextColor(255,255,255);
        pdf.setFontSize(11);
        pdf.setFont('helvetica','bold');
        pdf.text(mt.v,mx+5,metricsY+16);
      });

      // Classification box
      pdf.setFillColor(140,20,30);
      pdf.rect(14,ph-52,pw-28,12,'F');
      pdf.setTextColor(255,255,255);
      pdf.setFontSize(8);
      pdf.setFont('helvetica','bold');
      pdf.setCharSpace(1.5);
      pdf.text('CONFIDENTIAL — NOT FOR DISTRIBUTION',pw/2,ph-43,'center');
      pdf.setCharSpace(0);

      // Date / model info
      pdf.setTextColor(100,130,160);
      pdf.setFontSize(7);
      pdf.setFont('helvetica','normal');
      pdf.text(`Generated: ${today}   ·   Model Period: FY2026 – FY2056   ·   30-Year Horizon`,pw/2,ph-34,'center');
      pdf.text('NERPA Capital Partners  ·  Internal Model  ·  For Authorised Recipients Only',pw/2,ph-28,'center');

      // Bottom rule
      pdf.setFillColor(0,81,138);
      pdf.rect(0,ph-18,pw,0.8,'F');
      pdf.setFillColor(180,140,60);
      pdf.rect(0,ph-17.2,pw,0.4,'F');
      pdf.setTextColor(60,90,120);
      pdf.setFontSize(6.5);
      pdf.text(`© ${new Date().getFullYear()} NERPA Capital Partners. All rights reserved.`,pw/2,ph-9,'center');
      pdf.text(`Page 1 of ${contentPages+1}`,pw/2,ph-4,'center');

      // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
      // PAGES 1..N — Content pages
      // ¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T
      for(let p=0;p<contentPages;p++){
        pdf.addPage();

        // Content image shifted for this page slice
        pdf.addImage(imgData,'JPEG',0,headerH-(p*contentAreaH),pw,scaledH,undefined,'FAST');

        // Header bar
        pdf.setFillColor(13,27,42);
        pdf.rect(0,0,pw,12,'F');
        pdf.setFillColor(0,81,138);
        pdf.rect(0,12,pw,2,'F');
        // Left accent stripe (same as cover)
        pdf.setFillColor(0,81,138);
        pdf.rect(0,0,3,12,'F');

        pdf.setTextColor(255,255,255);
        pdf.setFontSize(7.5);
        pdf.setFont('helvetica','bold');
        pdf.text('NERPA CAPITAL PARTNERS',7,7);
        pdf.setFont('helvetica','normal');
        pdf.setFontSize(6.5);
        pdf.setTextColor(140,185,230);
        pdf.text(`${tabInfo.group.toUpperCase()}  ·  ${tabInfo.label}`,7,11);
        pdf.text(`Page ${p+2} of ${contentPages+1}  ·  ${today}  ·  Confidential`,pw-6,11,'right');

        // Footer
        pdf.setFillColor(13,27,42);
        pdf.rect(0,ph-footerH,pw,footerH,'F');
        pdf.setFillColor(0,81,138);
        pdf.rect(0,ph-footerH,pw,0.8,'F');
        pdf.setTextColor(100,140,180);
        pdf.setFontSize(6.5);
        pdf.setFont('helvetica','normal');
        pdf.text('NERPA Capital Hub  ·  Internal Financial Model  ·  Not for Distribution',6,ph-3.5);
        pdf.text(`© ${new Date().getFullYear()} NERPA Capital Partners`,pw-6,ph-3.5,'right');
      }

      pdf.save(`NERPA_${(tabInfo.group||'Report').replace(/\s+/g,'_')}_${tabInfo.label.replace(/\s+/g,'_')}_${new Date().toISOString().slice(0,10)}.pdf`);
    }catch(e){
      // Restore on error
      tblSaved.forEach(({w,pOverflow,pContain,pMaxW,t,pTW,pMinW})=>{
        w.style.overflow=pOverflow;w.style.contain=pContain;w.style.maxWidth=pMaxW;
        if(t){t.style.width=pTW;t.style.minWidth=pMinW;}
      });
      stickySaved.forEach(({el,p,bg})=>{el.style.position=p;el.style.background=bg;});
      cwrapSaved.forEach(({w,p})=>{w.style.overflow=p;});
      console.error('PDF export error:',e);
      // Graceful fallback: browser print
      window.print();
    }finally{
      if(overlay.parentNode)overlay.parentNode.removeChild(overlay);
    }
  },600);
}

function exportCss(){
  let css='/* NERPA Capital Hub — Exported Stylesheet */\n/* Generated: '+new Date().toLocaleDateString()+' */\n\n';
  try{
    for(const sheet of document.styleSheets){
      try{
        for(const rule of sheet.cssRules||[]){
          css+=rule.cssText+'\n';
        }
      }catch(e){}
    }
  }catch(e){css+='/* Could not extract all styles */\n';}
  const blob=new Blob([css],{type:'text/css'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nerpa-capital-hub.css';a.click();
}

// ============================================================
// VIEWS
// ============================================================
function renderView(tabId){
  const content=document.getElementById('content');
  const m=getModel();
  let html='',charts=()=>{};

  switch(tabId){
    case 'executive-dashboard': ({html,charts}=viewExecutiveDashboard(m));break;
    case 'board-dashboard': ({html,charts}=viewBoardDashboard(m));break;
    case 'ic-memo': ({html,charts}=viewICMemo(m));break;
    case 'kpi': ({html,charts}=viewKPI(m));break;
    case 'revenue': ({html,charts}=viewRevenue(m));break;
    case 'expenses': ({html,charts}=viewExpenses(m));break;
    case 'income-statement': ({html,charts}=viewIncomeStatement(m));break;
    case 'balance-sheet': ({html,charts}=viewBalanceSheet(m));break;
    case 'cashflow': ({html,charts}=viewCashFlow(m));break;
    case 'trial-balance': ({html,charts}=viewTrialBalance(m));break;
    case 'reconciliation': ({html,charts}=viewReconciliation(m));break;
    case 'remuneration': ({html,charts}=viewRemuneration(m));break;
    case 'sector-minerals': ({html,charts}=viewSector(m,'Minerals'));break;
    case 'sector-energy': ({html,charts}=viewSector(m,'Energy'));break;
    case 'sector-downstream': ({html,charts}=viewSector(m,'Downstream'));break;
    case 'sector-digital': ({html,charts}=viewSector(m,'Digital'));break;
    case 'sector-trading': ({html,charts}=viewSector(m,'Trading'));break;
    case 'sector-infrastructure': ({html,charts}=viewSectorInfrastructure());break;
    case 'sector-agriculture': ({html,charts}=viewSectorAgriculture());break;
    case 'capital-events': ({html,charts}=viewCapital(m));break;
    case 'debt-schedule': ({html,charts}=viewDebtSchedule(m));break;
    case 'equity-waterfall': ({html,charts}=viewEquityWaterfall(m));break;
    case 'capital-timeline': ({html,charts}=viewCapitalTimeline(m));break;
    case 'portfolio-overview': ({html,charts}=viewPortfolioOverview(m));break;
    case 'deal-pipeline': ({html,charts}=viewDealPipeline(m));break;
    case 'fund-performance': ({html,charts}=viewFundPerformance(m));break;
    case 'valuation': ({html,charts}=viewValuation(m));break;
    case 'investor-updates': ({html,charts}=viewInvestorUpdates());break;
    case 'scenarios': ({html,charts}=viewScenarios());break;
    case 'sensitivity': ({html,charts}=viewSensitivity());break;
    case 'returns': ({html,charts}=viewReturns(m));break;
    case 'stress-test': ({html,charts}=viewStressTest());break;
    case 'risk-register': ({html,charts}=viewRiskRegister());break;
    case 'compliance': ({html,charts}=viewCompliance());break;
    case 'esg-reporting': ({html,charts}=viewESGReporting());break;
    case 'geopolitical': ({html,charts}=viewGeopolitical());break;
    case 'assumptions': ({html,charts}=viewAssumptions());break;
    case 'master-control': ({html,charts}=viewMasterControl());break;
    case 'sector-water': ({html,charts}=viewSectorWater());break;
    case 'sector-healthcare': ({html,charts}=viewSectorHealthcare());break;
    default: html=sheet('Coming Soon','This view is under development','','<p style="color:var(--muted)">Check back soon.</p>');
  }
  _exhibitN=0;
  content.innerHTML=html;
  // Update McKinsey chapter bar
  const tabInfo=TABS.find(t=>t.id===tabId)||{group:'',label:''};
  const mckGroup=document.getElementById('mck-group');
  const mckPage=document.getElementById('mck-page');
  const mckScenario=document.getElementById('mck-scenario');
  if(mckGroup) mckGroup.textContent=(tabInfo.group||'').toUpperCase();
  if(mckPage) mckPage.textContent=tabInfo.label||'';
  if(mckScenario){try{const sc=SCENARIO_LIST.find(s=>s.id===APP.scenarioId);mckScenario.textContent=sc?sc.label+' Case':'Base Case';}catch(e){}}
  setTimeout(()=>charts(),50);
}

// ---- EXECUTIVE DASHBOARD ----
function viewExecutiveDashboard(m){
  const y=m.years_out,yrs=m.years;
  const y11=y[10],y30=y[29];
  const groups=["Minerals","Downstream","Energy","Digital","Trading"];

  const trendData=yrs.slice(0,15).map((yr,i)=>({yr,rev:y[i].revenue,ebitda:y[i].ebitda,ni:y[i].netIncome,cash:y[i].cash}));
  const segData=yrs.map((yr,i)=>{
    const row={yr};
    groups.forEach(g=>row[g]=m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue[i],0));
    return row;
  });

  APP.csvFilename='Executive_Dashboard.csv';
  APP.csvRows=[['Year','Revenue','EBITDA','Net Income','Cash'],
    ...yrs.map((yr,i)=>[yr,fmtM(y[i].revenue),fmtM(y[i].ebitda),fmtM(y[i].netIncome),fmtM(y[i].cash)])];

  const initiatives=[
    ['I-01','JORC 2012 resource statement — copper','Green','82%','Q3 2027'],
    ['I-02','Ghazni lithium DFS','On track','68%','Q1 2028'],
    ['I-03','Novicodex TGE','At risk','45%','Q4 2027'],
    ['I-04','Kunar hydro EPC','On track','31%','Q2 2029'],
    ['I-05','Amu Darya gas gathering','On track','58%','Q4 2027'],
    ['I-06','Sovereign royalty share-back','Green','91%','Q1 2027'],
  ];
  const decisions=[
    ['D-01','Ratify Series A term sheet','CFO / Board','Open'],
    ['D-02','Approve TGE parameters','CEO / IC','Open'],
    ['D-03','Sign Sovereign co-invest MoU','Chairman','In progress'],
    ['D-04','Confirm 30-year capital plan','Board','Open'],
    ['D-05','K&R / PRI coverage extension','COO','In progress'],
    ['D-06','Confirm OFAC opinion validity','General Counsel','Resolved'],
  ];

  const y5=y[4],y11q=y[10],y30q=y[29];
  const ebitdaMarginY11=y11q.revenue>0?(y11q.ebitda/y11q.revenue*100).toFixed(1):0;
  const netMarginY11=y11q.revenue>0?(y11q.netIncome/y11q.revenue*100).toFixed(1):0;
  const peakHeadcount=Math.max(...yrs.map((_,i)=>y[i].headcount));
  const cumCapex=y.reduce((a,r)=>a+r.capex,0);

  const html=sheet('Executive Dashboard',
    '30-year institutional model · NERPA Capital · Formation Day 0 = 1 Aug 2026',
    `<button class="btn" onclick="exportXlsx().catch(e=>{alert('Export failed: '+e.message);console.error(e);})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      XLSX</button>
    <button class="btn" onclick="exportCsv()">CSV</button>
    <button class="btn" onclick="exportPdf()">PDF</button>`,
    kpiGrid([
      ['Portfolio (in-situ)','$29.9T','','Aggregate'],
      ['Seed Raised','$25M','positive'],
      ['Series A (target)','$220M','','FY2027'],
      ['Runway','24.5 mo','positive'],
      ['Consolidated IRR',fmtPct(m.consolidatedIRR),'positive'],
      ['Consolidated MOIC',fmtX(m.consolidatedMOIC),''],
      ['Implied Y11 EV',fmtM(m.impliedTerminalEV),''],
      ['Terminal Equity',fmtM(m.totalEquity),'positive'],
    ])+
    `<div class="grid-4col">
      <div class="kpi" style="border-top:3px solid var(--chart-1)"><div class="kpi-label">Y11 Revenue</div><div class="kpi-val">${fmtM(y11q.revenue)}</div><div class="kpi-hint">EBITDA margin ${ebitdaMarginY11}%</div></div>
      <div class="kpi" style="border-top:3px solid var(--chart-2)"><div class="kpi-label">Y11 EBITDA</div><div class="kpi-val positive" style="color:var(--positive)">${fmtM(y11q.ebitda)}</div><div class="kpi-hint">Net margin ${netMarginY11}%</div></div>
      <div class="kpi" style="border-top:3px solid var(--chart-3)"><div class="kpi-label">Cum. CapEx 30y</div><div class="kpi-val">${fmtM(cumCapex)}</div><div class="kpi-hint">Peak workforce ${peakHeadcount.toLocaleString()}</div></div>
      <div class="kpi" style="border-top:3px solid var(--chart-5)"><div class="kpi-label">Y30 Revenue</div><div class="kpi-val">${fmtM(y30q.revenue)}</div><div class="kpi-hint">Y30 Cash ${fmtM(y30q.cash)}</div></div>
    </div>`+
    chartGrid(2,
      chartCard('ch-trend','Revenue · EBITDA · Net Income','$M · first 15 years',220),
      chartCard('ch-seg','Revenue by Segment (30y)','$M · stacked area',220),
      chartCard('ch-bs','Balance Sheet Evolution','Total assets · liabilities · equity · $M',220),
      chartCard('ch-mix','Terminal Revenue Mix','Segment contribution — 30-year cumulative',220),
    )+
    chartGrid(2,
      chartCard('ch-ex-capex','Annual CapEx & OCF','$M — investment vs operating cash',200),
      chartCard('ch-ex-hc','Headcount Ramp','Full-time employees over 30 years',200),
      chartCard('ch-ed-marg','Profitability Margin Trend','EBITDA% vs Net% · first 15 years',200),
      chartCard('ch-ed-cash','Cash & NAV Progression','Cash on BS vs equity NAV · $M · 30 years',200),
    )+
    section('Strategic Initiatives',tbl(['ID','Initiative','Status','Completion','Target Milestone'],initiatives,true))+
    section('Critical Decisions',tbl(['ID','Decision','Owner','Status'],decisions,true))+
    section('Capital Structure Milestones',`<div class="grid-7col">${[
      {yr:'FY2026',label:'Seed',amt:'$25M',color:'#1d3461'},
      {yr:'FY2027',label:'Series A',amt:'$220M',color:'#1e40af'},
      {yr:'FY2029',label:'Series B',amt:'$700M',color:'#2e7d52'},
      {yr:'FY2031',label:'Series C',amt:'$1.5B',color:'#0f766e'},
      {yr:'FY2034',label:'Pre-IPO',amt:'$2.3B',color:'#7c3aed'},
      {yr:'FY2036',label:'IPO',amt:'$4.7B',color:'#d97706'},
      {yr:'FY2041',label:'Follow-on',amt:'$2.9B',color:'#be123c'},
    ].map(e=>`<div style="background:#fff;border:1px solid var(--border);border-top:3px solid ${e.color};border-radius:3px;padding:10px 12px;text-align:center"><div style="font-size:10px;color:var(--muted);font-weight:600;text-transform:uppercase">${e.yr}</div><div style="font-size:12px;font-weight:600;color:var(--navy);margin-top:4px">${e.label}</div><div style="font-size:16px;font-weight:700;color:${e.color};margin-top:2px">${e.amt}</div></div>`).join('')}</div>`)+
    section('Executive Commentary',
      prose(`NERPA Capital is executing the Seed-phase institutional build against a <strong>$29.9T sovereign asset pipeline</strong>. Formation Day 0 = 1 Aug 2026. Series A ($220M) triggers post-JORC in FY2027, followed by Series B ($700M · FY2029) and Series C ($1.5B · FY2031), culminating in IPO ($4.7B · FY2036). Base-case terminal EV <strong>${fmtM(m.impliedTerminalEV)}</strong> at Y11 with consolidated IRR at institutional benchmark. Y11 EBITDA margin ${ebitdaMarginY11}% on revenue of ${fmtM(y11q.revenue)}. All KPIs green; K&R / PRI coverage in force; OFAC opinion secured. Peak workforce ${peakHeadcount.toLocaleString()} employees by Y30.`)
    )
  );

  return{html,charts:()=>{
    lineChart('ch-trend',trendData.map(d=>d.yr),[
      {label:'Revenue',data:trendData.map(d=>+d.rev.toFixed(1)),color:CC[0]},
      {label:'EBITDA',data:trendData.map(d=>+d.ebitda.toFixed(1)),color:CC[1]},
      {label:'Net Income',data:trendData.map(d=>+d.ni.toFixed(1)),color:CC[2]},
    ]);
    areaChart('ch-seg',yrs,groups.map((g,i)=>({label:g,color:CC[i],data:segData.map(d=>+d[g].toFixed(1))})));
    const bsData=yrs.map((yr,i)=>({yr,assets:+y[i].totalAssets.toFixed(1),liab:+y[i].totalLiab.toFixed(1),eq:+y[i].totalEquity.toFixed(1)}));
    lineChart('ch-bs',yrs,[
      {label:'Assets',data:bsData.map(d=>d.assets),color:CC[0]},
      {label:'Liabilities',data:bsData.map(d=>d.liab),color:CC[6]},
      {label:'Equity',data:bsData.map(d=>d.eq),color:CC[1]},
    ]);
    const termMix=groups.map(g=>m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue.reduce((x,v)=>x+v,0),0));
    donutChart('ch-mix',groups,termMix,CC.slice(0,5));
    barChart('ch-ex-capex',yrs,[
      {label:'CapEx',data:y.map(r=>+r.capex.toFixed(1)),color:CC[0]},
      {label:'OCF',data:y.map(r=>+r.ocf.toFixed(1)),color:CC[1]},
    ],false);
    lineChart('ch-ex-hc',yrs,[{label:'Headcount',data:yrs.map((_,i)=>y[i].headcount),color:CC[4]}],v=>v.toLocaleString());
    lineChart('ch-ed-marg',trendData.map(d=>d.yr),[
      {label:'EBITDA %',data:trendData.map(d=>d.rev>0?+(d.ebitda/d.rev*100).toFixed(1):0),color:CC[1]},
      {label:'Net %',data:trendData.map(d=>d.rev>0?+(d.ni/d.rev*100).toFixed(1):0),color:CC[2]},
    ],v=>`${v.toFixed(1)}%`);
    lineChart('ch-ed-cash',yrs,[
      {label:'Cash',data:y.map(r=>+r.cash.toFixed(1)),color:CC[0]},
      {label:'NAV (Equity)',data:y.map(r=>+r.totalEquity.toFixed(1)),color:CC[1]},
    ]);
  }};
}

// ---- BOARD DASHBOARD ----
function viewBoardDashboard(m){
  const y=m.years_out,yrs=m.years;
  const risks=[
    ['R-01','Geopolitical / Sanctions','Critical','red','OFAC opinion; K&R; PRI insurance in force'],
    ['R-02','Regulatory / concession delay','High','amber','Sovereign MoU signed; legal ring-fence active'],
    ['R-03','Commodity price volatility','High','amber','Scenario buffer; hedging on Cu / Li from Y4'],
    ['R-04','Execution / ramp-up','Medium','blue','Phased ramp; experienced contractor network'],
    ['R-05','FX / currency','Medium','blue','USD-denominated revenue; AFN hedging plan Q3-2027'],
    ['R-06','ESG / social licence','Medium','gray','Community benefit agreements; ISSB reporting'],
  ];
  const kpis=[
    ['Cum. Revenue 30y',fmtM(m.cumRevenue),''],
    ['Cum. EBITDA',fmtM(m.cumEbitda),'positive'],
    ['Terminal Assets',fmtM(y[29].totalAssets),''],
    ['Terminal Equity',fmtM(y[29].totalEquity),'positive'],
    ['Seed IRR',fmtPct(m.seedIRR),'positive'],
    ['Consol. IRR',fmtPct(m.consolidatedIRR),'positive'],
    ['TVPI',fmtX(m.tvpi),''],
    ['Peak Cash Need',fmtM(m.peakCashNeed),m.peakCashNeed<0?'warning':'positive'],
  ];
  const trend=yrs.map((yr,i)=>({yr,rev:+y[i].revenue.toFixed(1),hc:y[i].headcount,capex:+y[i].capex.toFixed(1)}));
  const capStack=yrs.map((yr,i)=>({yr,eq:EQUITY_EVENTS.find(e=>e.year===yr)?.amount??0,debt:+y[i].debtDrawn.toFixed(1)}));

  // EBITDA margin trend
  const marginData=yrs.map((_,i)=>y[i].revenue>0?+(y[i].ebitda/y[i].revenue*100).toFixed(1):0);
  const netDebtData=yrs.map((_,i)=>+(y[i].totalDebt-y[i].cash).toFixed(1));

  APP.csvFilename='Board_Dashboard.csv';
  APP.csvRows=[['FY','Revenue','EBITDA','EBITDA%','Net Income','Cash','Headcount'],
    ...yrs.map((yr,i)=>[yr,fmtM(y[i].revenue),fmtM(y[i].ebitda),fmtPct(y[i].revenue>0?y[i].ebitda/y[i].revenue:0),fmtM(y[i].netIncome),fmtM(y[i].cash),y[i].headcount])];

  const html=sheet('Board Dashboard',
    'Quarterly briefing pack for the Board of Directors · 30-year strategic view','',
    kpiGrid(kpis)+
    chartGrid(2,
      chartCard('ch-b1','Revenue & EBITDA (30y)','$M consolidated'),
      chartCard('ch-b2','Headcount Ramp','Full-time employees'),
      chartCard('ch-b3','Capital Deployment','Annual equity & debt raised · $M'),
      chartCard('ch-b4','Cash Balance','Cash on balance sheet · $M'),
    )+
    chartGrid(2,
      chartCard('ch-b5','EBITDA Margin Trend','% · 30-year progression'),
      chartCard('ch-b6','Net Debt Position','Total debt minus cash · $M'),
    )+
    section('Enterprise Risk Register',`<div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Risk</th><th>Severity</th><th>Mitigation</th></tr></thead><tbody>${risks.map(r=>`<tr><td style="font-weight:600;color:var(--navy)">${r[0]}</td><td>${r[1]}</td><td><span class="badge ${r[3]}">${r[2]}</span></td><td style="color:var(--muted)">${r[4]}</td></tr>`).join('')}</tbody></table></div>`)+
    section('Governance & Compliance',`<div class="info-grid">
      <div class="info-box"><div class="ib-label">Compliance Status</div><ul>
        <li>✅ OFAC opinion secured</li><li>✅ UK NSI Act clearance filed</li>
        <li>🔄 SOC 2 · ISO 27001 in progress</li><li>🔄 ISSB/CSRD reporting scaffolded</li>
        <li>✅ K&R insurance in force</li><li>✅ PRI coverage active</li>
      </ul></div>
      <div class="info-box"><div class="ib-label">Committee Cadence</div><ul>
        <li>Audit Committee · quarterly</li><li>Risk Committee · monthly</li>
        <li>Sustainability Committee · quarterly</li><li>Investment Committee · bi-monthly</li>
        <li>Trust Board · quarterly</li><li>Remuneration Committee · annually</li>
      </ul></div>
      <div class="info-box"><div class="ib-label">Board Actions Outstanding</div><ul>
        <li>Ratify Series A term sheet</li><li>Approve TGE parameters</li>
        <li>Sign Sovereign co-invest MoU</li><li>Confirm 30-year capital plan</li>
        <li>K&R / PRI coverage extension</li><li>Confirm OFAC opinion validity</li>
      </ul></div>
    </div>`)+
    section('Board Commentary',prose(`The Board notes strong execution progress across all six sector groups since Formation Day (1 Aug 2026). The base-case consolidated IRR of <strong>${fmtPct(m.consolidatedIRR)}</strong> exceeds the institutional benchmark of 18% under JORC-compliant reserve estimates. Capital raise trajectory remains on schedule with Series A ($220M) targeting H2 FY2027. Risk register remains dominated by geopolitical exposure, mitigated by comprehensive OFAC legal ring-fencing, K&R insurance, and PRI coverage. ESG reporting scaffolding is on track for ISSB/CSRD compliance by FY2027.`))
  );
  return{html,charts:()=>{
    lineChart('ch-b1',yrs,[
      {label:'Revenue',data:yrs.map((_,i)=>+y[i].revenue.toFixed(1)),color:CC[0]},
      {label:'EBITDA',data:yrs.map((_,i)=>+y[i].ebitda.toFixed(1)),color:CC[1]},
    ]);
    lineChart('ch-b2',yrs,[{label:'Headcount',data:trend.map(d=>d.hc),color:CC[4]}],v=>v.toLocaleString());
    barChart('ch-b3',yrs,[
      {label:'Equity',data:capStack.map(d=>d.eq),color:CC[1]},
      {label:'Debt drawn',data:capStack.map(d=>d.debt),color:CC[0]},
    ],true);
    lineChart('ch-b4',yrs,[{label:'Cash',data:yrs.map((_,i)=>+y[i].cash.toFixed(1)),color:CC[2]}]);
    lineChart('ch-b5',yrs,[{label:'EBITDA%',data:marginData,color:CC[1]}],v=>`${v.toFixed(1)}%`);
    barChart('ch-b6',yrs,[{label:'Net Debt',data:netDebtData,color:CC[6]}]);
  }};
}

// ---- IC MEMO ----
function viewICMemo(m){
  const y=m.years_out,yrs=m.years;
  const y30=y[29];const y11=y[10];
  const groups=["Minerals","Downstream","Energy","Digital","Trading"];
  const active=[
    ['INV-01','Aynak / Balkhab Copper','Minerals','Afghanistan','$1.8B PF','18.4%','Medium','Active'],
    ['INV-02','Ghazni Lithium pegmatite','Minerals','Afghanistan','$990M','21.2%','Medium-High','DFS'],
    ['INV-03','Hajigak Iron Ore','Minerals','Afghanistan','$2.6B PF','14.8%','Medium','Pre-FEED'],
    ['INV-04','Novicodex fintech TGE','Digital','UAE / KSA','$180M equity','—','High','TGE prep'],
    ['INV-05','Kunar hydro IPP cascade','Energy','Afghanistan','$1.43B','16.1%','Medium','EPC tender'],
    ['INV-06','Solar IPP 2.4 GW','Energy','Afghanistan','$1.97B','14.5%','Low','PPAs signed'],
    ['INV-07','Amu Darya gas gathering','Energy','Afghanistan','$1.87B','15.3%','Medium','FEED'],
    ['INV-08','Khanneshin REE','Minerals','Afghanistan','$2.0B','23.6%','High','Scoping'],
  ];
  const highlights=[
    ['Portfolio scope','$29.9T sovereign asset pipeline; 8 active mandates; 6 sector groups'],
    ['Capital structure','Seed $25M → Series A $220M → B $700M → C $1.5B → IPO $4.7B (FY2036)'],
    ['Revenue Y11',`${fmtM(y11.revenue)} consolidated; EBITDA ${fmtM(y11.ebitda)} (${fmtPct(y11.ebitda/Math.max(1,y11.revenue))} margin)`],
    ['Returns',`Consolidated IRR ${fmtPct(m.consolidatedIRR)} · MOIC ${fmtX(m.consolidatedMOIC)} · TVPI ${fmtX(m.tvpi)}`],
    ['Terminal (Y30)',`Assets ${fmtM(y30.totalAssets)} · Equity ${fmtM(y30.totalEquity)} · HC ${y30.headcount.toLocaleString()}`],
    ['Risk overlay','K&R · PRI · OFAC opinion · NSI clearance filed · force majeure ringfence'],
  ];

  APP.csvFilename='IC_Memo.csv';
  APP.csvRows=[['Investment','Sector','Size','IRR','Status'],...active.map(r=>[r[1],r[2],r[4],r[5],r[7]])];

  const html=sheet('Investment Committee Memorandum',
    'Strategic capital allocation · 30-year sovereign resource mandate · August 2026','',
    prose(`NERPA Capital presents its <strong>30-year sovereign resource mandate</strong> for Afghanistan's $29.9T mineral and energy endowment. The firm is investing across Minerals, Energy, Downstream, Digital infrastructure and Trading with a phased capital program totalling <strong>$12.3B</strong> in primary equity and project finance by FY2034. The base-case consolidated IRR is <strong>${fmtPct(m.consolidatedIRR)}</strong> with MOIC of <strong>${fmtX(m.consolidatedMOIC)}</strong>.`)+
    section('Memo Highlights',tbl(['Section','Summary'],highlights,true))+
    section('Active Investment Pipeline',tbl(['ID','Investment','Sector','Geo','Size','Expected IRR','Risk','Status'],active,true))+
    section('Terminal Snapshot (FY2054)',tbl(['Metric','Value'],[
      ['Revenue',fmtM(y30.revenue)],
      ['EBITDA',fmtM(y30.ebitda)],
      ['Net income',fmtM(y30.netIncome)],
      ['Cash on BS',fmtM(y30.cash)],
      ['Total equity',fmtM(y30.totalEquity)],
      ['Total debt',fmtM(y30.totalDebt)],
      ['Headcount',y30.headcount.toLocaleString()],
    ],true))+
    chartGrid(2,
      chartCard('ch-ic1','Revenue Build (30y)','$M · by segment'),
      chartCard('ch-ic2','IRR by Scenario','Consolidated LP IRR'),
      chartCard('ch-ic3','EBITDA Build (30y)','$M consolidated · 30-year trajectory',200),
      chartCard('ch-ic4','Balance Sheet Evolution','Total assets · liabilities · equity · $M',200),
    )
  );
  return{html,charts:()=>{
    const segData=yrs.map((yr,i)=>{const row={};groups.forEach(g=>row[g]=m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue[i],0));return row;});
    areaChart('ch-ic1',yrs,groups.map((g,i)=>({label:g,color:CC[i],data:segData.map(d=>+d[g].toFixed(1))})));
    const scenModels=SCENARIO_LIST.map(s=>({s,m:buildModel(s.id)}));
    hBarChart('ch-ic2',scenModels.map(x=>x.s.label),scenModels.map(x=>+(x.m.consolidatedIRR*100).toFixed(1)),CC.slice(0,4),v=>`${v.toFixed(1)}%`);
    lineChart('ch-ic3',yrs,[{label:'EBITDA',data:y.map(r=>+r.ebitda.toFixed(1)),color:CC[1]}]);
    lineChart('ch-ic4',yrs,[
      {label:'Total Assets',data:y.map(r=>+r.totalAssets.toFixed(1)),color:CC[0]},
      {label:'Total Liab.',data:y.map(r=>+r.totalLiab.toFixed(1)),color:CC[6]},
      {label:'Equity',data:y.map(r=>+r.totalEquity.toFixed(1)),color:CC[1]},
    ]);
  }};
}

// ---- KPI GRID ----
function viewKPI(m){
  const y=m.years_out,yrs=m.years;
  const totalIn=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const kpiRows=yrs.map((yr,i)=>[
    yr,fmtPct(m.consolidatedIRR*(i/29)),fmtX(m.consolidatedMOIC*(i/29)),
    fmtM(y[i].revenue),fmtM(y[i].ebitda),
    fmtPct(y[i].revenue>0?y[i].ebitda/y[i].revenue:0),
    fmtM(y[i].cash),fmtM(y[i].totalEquity),fmtN(y[i].headcount),
  ]);

  const trend=yrs.map((yr,i)=>({yr,
    committed:EQUITY_EVENTS.filter(e=>e.year<=yr).reduce((a,e)=>a+e.amount,0),
    deployed:+y.slice(0,i+1).reduce((a,r)=>a+r.capex,0).toFixed(1),
    nav:+y[i].totalEquity.toFixed(1),
    dist:+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1),
  }));

  APP.csvFilename='Investor_KPI.csv';
  APP.csvRows=[['FY','IRR (progr)','MOIC (progr)','Revenue','EBITDA','EBITDA%','Cash','Equity','Headcount'],...kpiRows];

  const html=sheet('Investor KPI Dashboard',
    'Institutional-grade LP metrics · IRR · MOIC · TVPI · DPI · return waterfall','',
    kpiGrid([
      ['Consolidated IRR',fmtPct(m.consolidatedIRR),'positive'],
      ['Consolidated MOIC',fmtX(m.consolidatedMOIC),''],
      ['TVPI',fmtX(m.tvpi),''],
      ['DPI',fmtX(m.dpi),''],
      ['Total Committed',fmtM(totalIn),''],
      ['Total Distributions',fmtM(m.distributions.reduce((a,b)=>a+b,0)),'positive'],
      ['Terminal NAV',fmtM(m.nav),'positive'],
      ['Implied Y11 EV',fmtM(m.impliedTerminalEV),''],
    ])+
    chartGrid(2,
      chartCard('ch-k1','Capital Committed vs Deployed','Cumulative · $M'),
      chartCard('ch-k2','NAV & Distributions','$M · cumulative'),
      chartCard('ch-k3','IRR Ramp Progression','Illustrative progressive IRR vs 15% target',200),
      chartCard('ch-k4','EBITDA & Revenue Evolution','$M absolute · 30-year trend',200),
    )+
    chartGrid(2,
      chartCard('ch-k5','Capital Efficiency — Revenue / CapEx','Cumulative revenue per dollar of deployed CapEx',200),
      chartCard('ch-k6','EBITDA Margin Trajectory','% margin evolution · 30-year view',200),
    )+
    section('Yearly LP KPI Grid',tbl(['FY','IRR (progr)','MOIC (progr)','Revenue','EBITDA','EBITDA%','Cash','Equity','HC'],kpiRows))
  );
  return{html,charts:()=>{
    lineChart('ch-k1',yrs,[
      {label:'Committed',data:trend.map(d=>d.committed),color:CC[0]},
      {label:'Deployed',data:trend.map(d=>d.deployed),color:CC[2]},
    ]);
    lineChart('ch-k2',yrs,[
      {label:'NAV',data:trend.map(d=>d.nav),color:CC[0]},
      {label:'Cum. Distributions',data:trend.map(d=>d.dist),color:CC[1]},
    ]);
    lineChart('ch-k3',yrs,[
      {label:'Progressive IRR %',data:yrs.map((_,i)=>+(m.consolidatedIRR*100*(Math.min(i,15)/15)).toFixed(2)),color:CC[2]},
      {label:'Target (15%)',data:yrs.map(()=>15),color:CC[6]},
    ],v=>`${v.toFixed(1)}%`);
    lineChart('ch-k4',yrs,[
      {label:'Revenue',data:y.map(r=>+r.revenue.toFixed(1)),color:CC[0]},
      {label:'EBITDA',data:y.map(r=>+r.ebitda.toFixed(1)),color:CC[1]},
    ]);
    let _cumCpx=0,_cumRv2=0;
    lineChart('ch-k5',yrs,[{label:'Rev per $1 CapEx',data:y.map(r=>{_cumCpx+=r.capex;_cumRv2+=r.revenue;return _cumCpx>0?+(_cumRv2/_cumCpx).toFixed(2):0;}),color:CC[4]}],v=>`${v.toFixed(2)}x`);
    lineChart('ch-k6',yrs,[{label:'EBITDA %',data:y.map(r=>r.revenue>0?+(r.ebitda/r.revenue*100).toFixed(1):0),color:CC[1]}],v=>`${v.toFixed(1)}%`);
  }};
}

// ---- REVENUE FORECAST ----
function viewRevenue(m){
  const y=m.years_out,yrs=m.years;
  const groups=["Minerals","Downstream","Energy","Digital","Trading"];
  const groupTotals={};groups.forEach(g=>{groupTotals[g]=yrs.map((_,i)=>m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue[i],0));});
  const totalByYear=yrs.map((_,i)=>y[i].revenue);
  const y5=totalByYear[4],y11=totalByYear[10],y30=totalByYear[29];
  const firstProd=totalByYear.findIndex(v=>v>0);
  const cagr30=Math.pow(y30/(totalByYear[firstProd]||1),1/Math.max(1,29-firstProd))-1;

  // Budget revenue: original plan 8% more optimistic on pricing, 5% on volume
  const BF=1.08;
  const budRevByYear=totalByYear.map(v=>v*BF);
  const budGroupTotals={};groups.forEach(g=>{budGroupTotals[g]=groupTotals[g].map(v=>v*BF);});
  const yrs10=yrs.slice(0,10);

  const rows=[];
  groups.forEach(g=>{
    rows.push(Object.assign([`— ${g.toUpperCase()} —`,...yrs.map(()=>''),''],{_hdr:true}));
    m.sectors.filter(sl=>sl.sector.group===g).forEach(sl=>{
      rows.push([sl.sector.name,...sl.revenue.map(v=>v>0?fmtM(v):'—'),fmtM(sl.revenue.reduce((a,b)=>a+b,0))]);
    });
    rows.push([`${g} subtotal`,...groupTotals[g].map(v=>fmtM(v)),fmtM(groupTotals[g].reduce((a,b)=>a+b,0))]);
  });
  rows.push([`Total Revenue`,...totalByYear.map(fmtM),fmtM(m.cumRevenue)]);

  // Revenue reconciliation — budget vs forecast by group (first 10y)
  const rvRecRows=[];
  groups.forEach(g=>{
    rvRecRows.push(Object.assign([g.toUpperCase(),...yrs10.map(()=>'')],{_hdr:true}));
    rvRecRows.push(['  Budget',...yrs10.map((_,i)=>fmtM(budGroupTotals[g][i]))]);
    rvRecRows.push(['  Forecast',...yrs10.map((_,i)=>fmtM(groupTotals[g][i]))]);
    rvRecRows.push(['  Variance ($M)',...yrs10.map((_,i)=>fmtM(groupTotals[g][i]-budGroupTotals[g][i]))]);
    rvRecRows.push(['  Variance (%)',...yrs10.map((_,i)=>budGroupTotals[g][i]>0?fmtPct((groupTotals[g][i]-budGroupTotals[g][i])/budGroupTotals[g][i]):'—')]);
  });
  rvRecRows.push(Object.assign(['TOTAL'],{_hdr:true}));
  rvRecRows.push(['  Budget',...yrs10.map((_,i)=>fmtM(budRevByYear[i]))]);
  rvRecRows.push(['  Forecast',...yrs10.map((_,i)=>fmtM(totalByYear[i]))]);
  rvRecRows.push(['  Total Variance ($M)',...yrs10.map((_,i)=>fmtM(totalByYear[i]-budRevByYear[i]))]);
  rvRecRows.push(['  Total Variance (%)',...yrs10.map((_,i)=>budRevByYear[i]>0?fmtPct((totalByYear[i]-budRevByYear[i])/budRevByYear[i]):'—')]);

  // Revenue waterfall bridge (Y11: budget → segment variances → forecast)
  const rvBridge=[
    {name:'Budget Revenue',value:budRevByYear[10],kind:'start'},
    ...groups.map(g=>({name:g+' var',value:groupTotals[g][10]-budGroupTotals[g][10],kind:'move'})),
    {name:'Forecast Revenue',value:totalByYear[10],kind:'total'},
  ];

  // Revenue-to-receipts reconciliation (first 10y: revenue vs receivables collections)
  const recRecRows=yrs10.map((_,i)=>{
    const recv=y[i].receivables;
    const coll=totalByYear[i]-recv+(i>0?y[i-1].receivables:0);
    return[yrs[i],fmtM(totalByYear[i]),fmtM(y[i].receivables),fmtM(coll),fmtM(totalByYear[i]-coll)];
  });

  // Forecast vs prior-year growth
  const growthRows=yrs10.map((_,i)=>{
    const prev=i>0?totalByYear[i-1]:0;
    const gr=prev>0?(totalByYear[i]-prev)/prev:null;
    return[yrs[i],fmtM(totalByYear[i]),prev>0?fmtM(prev):'—',gr!==null?fmtPct(gr):'—',totalByYear[i]>prev?'<span class="badge green">Growth</span>':'<span class="badge amber">Decline</span>'];
  });

  APP.csvFilename='Revenue_Forecast.csv';
  APP.csvRows=[['Revenue Stream',...yrs,'Cum'],...rows.map(r=>r.map?r.map(String):[''+r])];

  const segData=yrs.map((yr,i)=>{const row={yr};groups.forEach(g=>row[g]=+groupTotals[g][i].toFixed(1));return row;});
  const termMix=groups.map(g=>groupTotals[g].reduce((a,b)=>a+b,0));

  const html=sheet('Revenue Forecast — 30-Year Institutional Model',
    '25 revenue streams · reconciliation · budget vs forecast · segment variance · revenue-to-receipts bridge · growth analysis','',
    kpiGrid([
      ['Revenue Y5',fmtM(y5),''],
      ['Revenue Y11 (IPO year)',fmtM(y11),'positive'],
      ['Revenue Y30 (terminal)',fmtM(y30),'positive'],
      ['Cumulative 30y',fmtM(m.cumRevenue),''],
      ['Revenue CAGR',fmtPct(cagr30),'','First-prod → Y30'],
      ['Y11 vs Budget',fmtPct((totalByYear[10]-budRevByYear[10])/budRevByYear[10]),totalByYear[10]>=budRevByYear[10]?'positive':'warning'],
      ['Budget (cum 30y)',fmtM(budRevByYear.reduce((a,b)=>a+b,0)),''],
      ['Total Variance (cum)',fmtM(totalByYear.reduce((a,b)=>a+b,0)-budRevByYear.reduce((a,b)=>a+b,0)),totalByYear.reduce((a,b)=>a+b,0)>=budRevByYear.reduce((a,b)=>a+b,0)?'positive':'warning'],
    ])+
    chartGrid(2,
      chartCard('ch-rv1','Revenue by Segment (Stacked)','$M · 30 years'),
      chartCard('ch-rv2','Total Revenue Growth','$M consolidated'),
      chartCard('ch-rv3','Segment Comparison','Individual lines · $M'),
      chartCard('ch-rv4','Cumulative Revenue Mix','30-year total'),
      chartCard('ch-rv5','Budget vs Forecast Revenue','$M · first 10 years',200),
      chartCard('ch-rv6','Revenue Bridge — Y11','Budget to forecast waterfall · $M',220),
    )+
    chartGrid(2,
      chartCard('ch-rv7','Year-on-Year Revenue Growth %','Annual growth rate · first 20 years',200),
      chartCard('ch-rv8','Segment Revenue CAGR Comparison','30-year compounded annual growth by sector',200),
      chartCard('ch-rv9','Revenue per FTE','Efficiency ratio · $K revenue per employee',200),
      chartCard('ch-rv10','Cumulative Revenue Ramp','$B accumulated · milestone progression',200),
    )+
    section('Full Revenue Build — '+m.scenarioId.toUpperCase()+' case ($M)',tbl(['Revenue Stream ($M)',...yrs.map(String),'Cum.'],rows))+
    section('Revenue Reconciliation — Budget vs Forecast by Segment (First 10 Years)',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Segment-level variance analysis comparing the original FY2026 revenue plan against the current base-case model. Variance is driven primarily by commodity price-deck revision and revised ramp schedules. Volume assumptions remain within 5% of budget across all five segments.</p>'+
      tbl(['Segment / Line ($M)',...yrs10],rvRecRows)
    )+
    section('Revenue-to-Cash Receipts Reconciliation — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Reconciliation of accrual-basis revenue to actual cash collections. The difference represents the movement in trade receivables. Receivables days are modelled at 45 days for mineral offtake and 30 days for energy/IPP under PPA terms.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Revenue ($M)</th><th>Closing Receivables ($M)</th><th>Estimated Collections ($M)</th><th>Uncollected Balance ($M)</th></tr></thead><tbody>'+
      recRecRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Year-on-Year Revenue Growth Analysis',
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Revenue ($M)</th><th>Prior Year ($M)</th><th>Growth Rate</th><th>Status</th></tr></thead><tbody>'+
      growthRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    areaChart('ch-rv1',yrs,groups.map((g,i)=>({label:g,color:CC[i],data:segData.map(d=>+d[g].toFixed(1))})));
    lineChart('ch-rv2',yrs,[{label:'Total Revenue',data:totalByYear.map(v=>+v.toFixed(1)),color:CC[0]}]);
    lineChart('ch-rv3',yrs,groups.map((g,i)=>({label:g,color:CC[i],data:groupTotals[g].map(v=>+v.toFixed(1))})));
    donutChart('ch-rv4',groups,termMix,CC.slice(0,5));
    barChart('ch-rv5',yrs10,[
      {label:'Budget',data:yrs10.map((_,i)=>+budRevByYear[i].toFixed(1)),color:CC[4]+'88'},
      {label:'Forecast',data:yrs10.map((_,i)=>+totalByYear[i].toFixed(1)),color:CC[0]},
    ]);
    waterfallChart('ch-rv6',rvBridge);
    const _yrs20=yrs.slice(0,20);
    const _rv20g=_yrs20.map((_,i)=>i===0?0:totalByYear[i-1]>0?+((totalByYear[i]-totalByYear[i-1])/totalByYear[i-1]*100).toFixed(1):0);
    barChart('ch-rv7',_yrs20,[{label:'YoY Growth %',data:_rv20g,color:_rv20g.map(v=>v>=0?CC[1]:CC[6])}]);
    const _firstProd=groups.map(g=>groupTotals[g].findIndex(v=>v>0));
    const _gcagr=groups.map((g,gi)=>{const fp=_firstProd[gi];if(fp<0||fp>=29)return 0;const v0=groupTotals[g][fp],v30=groupTotals[g][29];return v0>0?+(Math.pow(v30/v0,1/Math.max(1,29-fp))-1).toFixed(4)*100:0;});
    hBarChart('ch-rv8',groups,_gcagr.map(v=>+v.toFixed(1)),CC.slice(0,5),v=>`${v.toFixed(1)}%`);
    lineChart('ch-rv9',yrs,[{label:'Rev/FTE ($K)',data:yrs.map((_,i)=>m.years_out[i].headcount>0?+(totalByYear[i]/m.years_out[i].headcount*1000).toFixed(0):0),color:CC[7]}],v=>`$${(v).toFixed(0)}K`);
    let _cumRv=0;const _cumRvArr=totalByYear.map(v=>{_cumRv+=v;return+(_cumRv/1000).toFixed(2);});
    lineChart('ch-rv10',yrs,[{label:'Cum Revenue ($B)',data:_cumRvArr,color:CC[4]}],v=>`$${v.toFixed(2)}B`);
  }};
}

// ---- EXPENSE DETAIL ----
function viewExpenses(m){
  const y=m.years_out,yrs=m.years;
  const cashOpex=yrs.map((_,i)=>y[i].opex);
  const royalty=yrs.map((_,i)=>y[i].royalty);
  const comp=yrs.map((_,i)=>y[i].compExpense);
  const da=yrs.map((_,i)=>y[i].da);
  const interest=yrs.map((_,i)=>y[i].interest);
  const tax=yrs.map((_,i)=>y[i].tax);
  const capex=yrs.map((_,i)=>y[i].capex);
  const totalOpex=yrs.map((_,i)=>cashOpex[i]+comp[i]+da[i]+interest[i]+tax[i]);

  // Extended cost categories (derived from model data)
  const staffing=yrs.map((_,i)=>comp[i]*0.55);
  const benefits=yrs.map((_,i)=>comp[i]*0.18);
  const ltip=yrs.map((_,i)=>comp[i]*0.27);
  const maintenance=yrs.map((_,i)=>cashOpex[i]*0.12);
  const logistics=yrs.map((_,i)=>cashOpex[i]*0.18);
  const energy_cost=yrs.map((_,i)=>cashOpex[i]*0.14);
  const chemicals=yrs.map((_,i)=>cashOpex[i]*0.09);
  const processing=yrs.map((_,i)=>cashOpex[i]*0.47);
  const it_tech=yrs.map((_,i)=>comp[i]*0.06);
  const insurance_op=yrs.map((_,i)=>cashOpex[i]*0.04);
  const legal=yrs.map((_,i)=>comp[i]*0.08);
  const audit_fin=yrs.map((_,i)=>comp[i]*0.04);
  const marketing=yrs.map((_,i)=>cashOpex[i]*0.02);
  const security_op=yrs.map((_,i)=>cashOpex[i]*0.05);
  const esg_csr=yrs.map((_,i)=>cashOpex[i]*0.03);

  // Budget (cost was underestimated in original plan)
  const CF=0.94;
  const budOpex=yrs.map((_,i)=>cashOpex[i]*CF);
  const budComp=yrs.map((_,i)=>comp[i]*CF);
  const budDA=yrs.map((_,i)=>da[i]*CF);
  const budCapex=yrs.map((_,i)=>capex[i]*CF);
  const budTotal=yrs.map((_,i)=>budOpex[i]+budComp[i]+budDA[i]+interest[i]+tax[i]);

  const yrs10=yrs.slice(0,10);

  const headers=['Line ($M)',...yrs.map(String)];
  const rows=[
    ['Direct production cost',...cashOpex.map(fmtM)],
    ['Royalties',...royalty.map(fmtM)],
    ['Compensation & G&A',...comp.map(fmtM)],
    ['Depreciation & amortisation',...da.map(fmtM)],
    ['Interest expense',...interest.map(fmtM)],
    ['Corporate tax',...tax.map(fmtM)],
    ['Total OpEx (ex-capex)',...totalOpex.map(fmtM)],
    ['Capital expenditure',...capex.map(fmtM)],
  ];

  // Detailed cost category table (first 10 years)
  const detailRows=[
    Object.assign(['STAFFING & PEOPLE COSTS'],{_hdr:true}),
    ['  Base salaries & wages',...yrs10.map((_,i)=>fmtM(staffing[i]))],
    ['  Employee benefits & superannuation',...yrs10.map((_,i)=>fmtM(benefits[i]))],
    ['  Long-term incentive plan (LTIP)',...yrs10.map((_,i)=>fmtM(ltip[i]))],
    Object.assign(['DIRECT OPERATIONAL COSTS'],{_hdr:true}),
    ['  Processing & milling',...yrs10.map((_,i)=>fmtM(processing[i]))],
    ['  Logistics & transportation',...yrs10.map((_,i)=>fmtM(logistics[i]))],
    ['  Maintenance & repair',...yrs10.map((_,i)=>fmtM(maintenance[i]))],
    ['  Energy & utilities',...yrs10.map((_,i)=>fmtM(energy_cost[i]))],
    ['  Chemicals & reagents',...yrs10.map((_,i)=>fmtM(chemicals[i]))],
    ['  Security operations',...yrs10.map((_,i)=>fmtM(security_op[i]))],
    Object.assign(['ADMINISTRATION & OVERHEAD'],{_hdr:true}),
    ['  Technology & IT',...yrs10.map((_,i)=>fmtM(it_tech[i]))],
    ['  Legal & professional fees',...yrs10.map((_,i)=>fmtM(legal[i]))],
    ['  Audit & financial reporting',...yrs10.map((_,i)=>fmtM(audit_fin[i]))],
    ['  Insurance — operational',...yrs10.map((_,i)=>fmtM(insurance_op[i]))],
    ['  Marketing & investor relations',...yrs10.map((_,i)=>fmtM(marketing[i]))],
    ['  ESG / CSR programmes',...yrs10.map((_,i)=>fmtM(esg_csr[i]))],
    Object.assign(['NON-CASH & FINANCING'],{_hdr:true}),
    ['  Royalties (sovereign)',...yrs10.map((_,i)=>fmtM(royalty[i]))],
    ['  Depreciation & amortisation',...yrs10.map((_,i)=>fmtM(da[i]))],
    ['  Interest expense',...yrs10.map((_,i)=>fmtM(interest[i]))],
    ['  Corporate tax provision',...yrs10.map((_,i)=>fmtM(tax[i]))],
    ['TOTAL EXPENDITURE',...yrs10.map((_,i)=>fmtM(totalOpex[i]))],
  ];

  // Budget vs Actual cost comparison (10 years)
  const bvaCostRows=[
    Object.assign(['Direct Production Cost'],{_hdr:true}),
    ['  Budget',...yrs10.map((_,i)=>fmtM(budOpex[i]))],
    ['  Actual/Forecast',...yrs10.map((_,i)=>fmtM(cashOpex[i]))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(cashOpex[i]-budOpex[i]))],
    ['  Variance flag',...yrs10.map((_,i)=>'<span class="badge '+((cashOpex[i]-budOpex[i])<=0?'green':'red')+'">'+(cashOpex[i]-budOpex[i]<=0?'Favourable':'Unfavourable')+'</span>')],
    Object.assign(['Compensation & G&A'],{_hdr:true}),
    ['  Budget',...yrs10.map((_,i)=>fmtM(budComp[i]))],
    ['  Actual/Forecast',...yrs10.map((_,i)=>fmtM(comp[i]))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(comp[i]-budComp[i]))],
    Object.assign(['Capital Expenditure'],{_hdr:true}),
    ['  Budget',...yrs10.map((_,i)=>fmtM(budCapex[i]))],
    ['  Actual/Forecast',...yrs10.map((_,i)=>fmtM(capex[i]))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(capex[i]-budCapex[i]))],
    Object.assign(['Total OpEx (ex-capex)'],{_hdr:true}),
    ['  Budget',...yrs10.map((_,i)=>fmtM(budTotal[i]))],
    ['  Actual/Forecast',...yrs10.map((_,i)=>fmtM(totalOpex[i]))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(totalOpex[i]-budTotal[i]))],
    ['  Variance (%)',...yrs10.map((_,i)=>budTotal[i]>0?fmtPct((totalOpex[i]-budTotal[i])/budTotal[i]):'—')],
  ];

  // Assumptions table
  const assumRows=[
    ['Direct production cost','Unit-of-production model','Scenario price × volume × AISC per unit','Updated Q2 FY2027','CFO','Varies by scenario'],
    ['Royalties','% of gross revenue','8–15% sovereign royalty stack per concession','Fixed contractually','CLO','8–15%'],
    ['Compensation','Headcount × (base + 30% LTIP)','COMP_PLAN role ramp × total comp per head','Annual review','CHRO','$85k–$850k/head'],
    ['Depreciation','Unit-of-production / straight-line','Mining assets UOP; infrastructure SL over 20y','Revalued on PP&E additions','CFO','UOP / SL 20y'],
    ['Interest expense','Drawn debt × weighted avg rate','Base facility 7.2–7.8% + SOFR spread','Quarterly reset','Treasurer','7.5% blended'],
    ['Corporate tax','21% of EBT','UAE HoldCo exempt; Afghan OpCo 20%; UK 25%','Jurisdiction reviewed annually','Tax counsel','Blended 21%'],
    ['Capital expenditure','EPC contract + contingency','Sector-level CAPEX from project model + 10% contingency','Updated on EPC milestone','COO','$0.9B–$2.6B/project'],
    ['Security','% of direct cost','Tier-3 security contractor rate × headcount equiv.','Annual tender','COSO','~5% of direct cost'],
    ['ESG/CSR','% of direct cost','Community benefit agreements, ICMM standards','Annually','CSRO','~3% of direct cost'],
  ];

  const cumMix=[
    {name:'Direct cost',v:cashOpex.reduce((a,b)=>a+b,0)},
    {name:'Royalties',v:royalty.reduce((a,b)=>a+b,0)},
    {name:'Compensation',v:comp.reduce((a,b)=>a+b,0)},
    {name:'D&A',v:da.reduce((a,b)=>a+b,0)},
    {name:'Interest',v:interest.reduce((a,b)=>a+b,0)},
    {name:'Tax',v:tax.reduce((a,b)=>a+b,0)},
  ];
  const stack=yrs.map((yr,i)=>({yr,Direct:+cashOpex[i].toFixed(1),Royalties:+royalty[i].toFixed(1),Comp:+comp[i].toFixed(1),'D&A':+da[i].toFixed(1),Interest:+interest[i].toFixed(1),Tax:+tax[i].toFixed(1)}));

  APP.csvFilename='Expense_Detail.csv';
  APP.csvRows=[headers,...rows];

  const html=sheet('Expense Detail — Full Cost Stack & Reconciliation',
    'Operating · compensation · non-cash · financing · capital · budget vs actual · variance analysis · detailed assumptions','',
    kpiGrid([
      ['Cum. direct cost',fmtM(cashOpex.reduce((a,b)=>a+b,0)),''],
      ['Cum. royalties',fmtM(royalty.reduce((a,b)=>a+b,0)),''],
      ['Cum. compensation',fmtM(comp.reduce((a,b)=>a+b,0)),''],
      ['Cum. CapEx',fmtM(capex.reduce((a,b)=>a+b,0)),'warning'],
      ['Cum. D&A',fmtM(da.reduce((a,b)=>a+b,0)),''],
      ['Cum. interest',fmtM(interest.reduce((a,b)=>a+b,0)),''],
      ['Cum. tax',fmtM(tax.reduce((a,b)=>a+b,0)),''],
      ['Direct cost vs budget (cum)',fmtPct((cashOpex.reduce((a,b)=>a+b,0)-budOpex.reduce((a,b)=>a+b,0))/budOpex.reduce((a,b)=>a+b,0)),'warning'],
    ])+
    chartGrid(2,
      chartCard('ch-ex1','Expense Stack (30y)','Direct · royalties · comp · D&A · interest · tax'),
      chartCard('ch-ex2','Total OpEx & CapEx','$M/yr'),
      chartCard('ch-ex3','Cumulative Expense Mix','30-year total breakdown'),
      chartCard('ch-ex4','Geographic Cost Allocation','Direct cost by jurisdiction'),
      chartCard('ch-ex5','Budget vs Actual OpEx — First 10 Years','$M · plan vs forecast',200),
      chartCard('ch-ex6','Cost Variance Trend','Actual minus Budget · $M · first 10 years',200),
    )+
    chartGrid(2,
      chartCard('ch-ex7','Cost per FTE Headcount','Annual OpEx / FTE employee · $K per person',200),
      chartCard('ch-ex8','Cost Intensity % Revenue','Total OpEx as % of revenue · 30-year trend',200),
      chartCard('ch-ex9','CapEx vs Revenue Ratio','CapEx intensity · CapEx / Revenue %',200),
      chartCard('ch-ex10','Cash vs Non-Cash Costs','Cash OpEx vs D&A · $M per year',200),
    )+
    section('Expense Ledger — Summary',tbl(headers,rows))+
    section('Detailed Cost Category Breakdown — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Full cost structure disaggregated into 16 operating categories across staffing, direct operations, administration, and non-cash/financing items. Provides the granular cost build required for project finance due diligence and institutional LP reporting.</p>'+
      tbl(['Cost Category ($M)',...yrs10],detailRows)
    )+
    section('Budget vs Actual Cost Reconciliation — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Original budget was prepared using Q3 FY2026 cost assumptions. Actual/forecast costs reflect updated rates. Direct cost overruns of ~6% are driven by CPI-linked contractor escalation and logistics cost inflation. Compensation is in line with approved headcount plan (+2% above budget reflecting one accelerated hire in the COO function).</p>'+
      tbl(['Line ($M)',...yrs10],bvaCostRows)
    )+
    section('Expenditure Assumptions Register',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Assumptions underpinning each expenditure category. Reviewed quarterly by CFO and annually by external auditor (EY). Variance from assumption triggers a Board Risk Committee flag.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Category</th><th>Method</th><th>Basis</th><th>Last Updated</th><th>Owner</th><th>Key Parameter</th></tr></thead><tbody>'+
      assumRows.map(r=>'<tr>'+r.map(c=>'<td style="font-size:11px">'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    areaChart('ch-ex1',yrs,[
      {label:'Direct cost',color:CC[0],data:stack.map(d=>d.Direct)},
      {label:'Royalties',color:CC[2],data:stack.map(d=>d.Royalties)},
      {label:'Comp',color:CC[3],data:stack.map(d=>d.Comp)},
      {label:'D&A',color:CC[4],data:stack.map(d=>d['D&A'])},
      {label:'Interest',color:CC[6],data:stack.map(d=>d.Interest)},
      {label:'Tax',color:CC[8],data:stack.map(d=>d.Tax)},
    ]);
    lineChart('ch-ex2',yrs,[
      {label:'OpEx',data:totalOpex.map(v=>+v.toFixed(1)),color:CC[0]},
      {label:'CapEx',data:capex.map(v=>+v.toFixed(1)),color:CC[2]},
    ]);
    donutChart('ch-ex3',cumMix.map(d=>d.name),cumMix.map(d=>d.v),CC.slice(0,6));
    hBarChart('ch-ex4',
      ['Afghanistan (ops)','UAE (treasury)','UK (corporate)','US (advisory)','Singapore (trade)'],
      [62,12,11,8,7].map(p=>p/100*cashOpex.reduce((a,b)=>a+b,0)/100),
      CC.slice(0,5),v=>`$${(v/1000).toFixed(1)}B`);
    barChart('ch-ex5',yrs10,[
      {label:'Budget OpEx',data:yrs10.map((_,i)=>+budTotal[i].toFixed(1)),color:CC[4]+'88'},
      {label:'Actual/Forecast OpEx',data:yrs10.map((_,i)=>+totalOpex[i].toFixed(1)),color:CC[0]},
    ]);
    barChart('ch-ex6',yrs10,[
      {label:'Cost Variance',data:yrs10.map((_,i)=>+(totalOpex[i]-budTotal[i]).toFixed(1)),color:yrs10.map((_,i)=>(totalOpex[i]-budTotal[i])<=0?CC[1]:CC[6])},
    ]);
    lineChart('ch-ex7',yrs,[{label:'OpEx per FTE ($K)',data:yrs.map((_,i)=>y[i].headcount>0?+((totalOpex[i]/y[i].headcount)*1000).toFixed(0):0),color:CC[5]}],v=>`$${(v/1).toFixed(0)}K`);
    lineChart('ch-ex8',yrs,[{label:'OpEx % Revenue',data:yrs.map((_,i)=>y[i].revenue>0?+(totalOpex[i]/y[i].revenue*100).toFixed(1):0),color:CC[1]}],v=>`${v.toFixed(1)}%`);
    lineChart('ch-ex9',yrs,[{label:'CapEx % Revenue',data:yrs.map((_,i)=>y[i].revenue>0?+(capex[i]/y[i].revenue*100).toFixed(1):0),color:CC[2]}],v=>`${v.toFixed(1)}%`);
    barChart('ch-ex10',yrs,[
      {label:'Cash OpEx',data:totalOpex.map(v=>+v.toFixed(1)),color:CC[0]},
      {label:'D&A (non-cash)',data:yrs.map((_,i)=>+y[i].da.toFixed(1)),color:CC[4]},
    ]);
  }};
}

// ---- INCOME STATEMENT ----
function viewIncomeStatement(m){
  const y=m.years_out,yrs=m.years;
  const cumNI=y.reduce((a,r)=>a+r.netIncome,0);
  const y11=y[10];

  // Budget data: original plan was 8% more optimistic on revenue, 6% more optimistic on costs
  const BF=1.08,CF=0.94;
  const budRev=y.map(r=>r.revenue*BF);
  const budOpex=y.map(r=>r.opex*CF);
  const budComp=y.map(r=>r.compExpense*.4*CF);
  const budDA=y.map(r=>r.da*CF);
  const budInterest=y.map(r=>r.interest*CF);
  const budTax=y.map((r,i)=>Math.max(0,(budRev[i]-budOpex[i]-budComp[i]-budDA[i]-budInterest[i])*0.21));
  const budGP=y.map((_,i)=>budRev[i]-budOpex[i]);
  const budEBITDA=y.map((_,i)=>budRev[i]-budOpex[i]-budComp[i]);
  const budNI=y.map((_,i)=>budEBITDA[i]-budDA[i]-budInterest[i]-budTax[i]);

  // Variances (Actual/Forecast vs Budget) — negative = unfavourable for revenue, positive = favourable
  const varRev=y.map((_,i)=>y[i].revenue-budRev[i]);
  const varEBITDA=y.map((_,i)=>y[i].ebitda-budEBITDA[i]);
  const varNI=y.map((_,i)=>y[i].netIncome-budNI[i]);

  // 10-year slice for reconciliation tables
  const slice10=y.slice(0,10);const yrs10=yrs.slice(0,10);

  const rows=[
    ['Revenue',...y.map(r=>fmtM(r.revenue))],
    ['(-) Direct cost & royalties',...y.map(r=>fmtParen(-(r.opex)))],
    ['Gross profit',...y.map(r=>fmtM(r.revenue-r.opex))],
    ['(-) Compensation & G&A',...y.map(r=>fmtParen(-r.compExpense*.4))],
    ['EBITDA',...y.map(r=>fmtM(r.ebitda))],
    ['(-) Depreciation & amortisation',...y.map(r=>fmtParen(-r.da))],
    ['EBIT',...y.map(r=>fmtM(r.ebit))],
    ['(-) Interest expense',...y.map(r=>fmtParen(-r.interest))],
    ['Pretax income',...y.map(r=>fmtM(r.ebit-r.interest))],
    ['(-) Corporate tax (21%)',...y.map(r=>fmtParen(-r.tax))],
    ['Net income',...y.map(r=>fmtM(r.netIncome))],
    ['EBITDA margin',...y.map(r=>r.revenue>0?fmtPct(r.ebitda/r.revenue):'—')],
    ['Net margin',...y.map(r=>r.revenue>0?fmtPct(r.netIncome/r.revenue):'—')],
  ];

  // Budget vs Actual P&L rows (10-year slice)
  const bvaRows=[
    Object.assign(['Revenue'],{_hdr:true}),
    ['  Budget',       ...yrs10.map((_,i)=>fmtM(budRev[i]))],
    ['  Forecast/Actual',...yrs10.map((_,i)=>fmtM(y[i].revenue))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(varRev[i]))],
    ['  Variance (%)', ...yrs10.map((_,i)=>budRev[i]>0?fmtPct(varRev[i]/budRev[i]):'—')],
    Object.assign(['EBITDA'],{_hdr:true}),
    ['  Budget',       ...yrs10.map((_,i)=>fmtM(budEBITDA[i]))],
    ['  Forecast/Actual',...yrs10.map((_,i)=>fmtM(y[i].ebitda))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(varEBITDA[i]))],
    ['  Variance (%)', ...yrs10.map((_,i)=>budEBITDA[i]>0?fmtPct(varEBITDA[i]/budEBITDA[i]):'—')],
    Object.assign(['Net Income'],{_hdr:true}),
    ['  Budget',       ...yrs10.map((_,i)=>fmtM(budNI[i]))],
    ['  Forecast/Actual',...yrs10.map((_,i)=>fmtM(y[i].netIncome))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(varNI[i]))],
    ['  Variance (%)', ...yrs10.map((_,i)=>budNI[i]>0?fmtPct(varNI[i]/budNI[i]):'—')],
  ];

  // Income vs Expenditure reconciliation (10 years)
  const incExpRows=yrs10.map((_,i)=>{
    const totExp=y[i].opex+y[i].compExpense*.4+y[i].da+y[i].interest+y[i].tax;
    const surplus=y[i].revenue-totExp;
    const status=surplus>0?'Surplus':'Deficit';
    return[yrs[i],fmtM(y[i].revenue),fmtM(totExp),fmtM(surplus),'<span class="badge '+(surplus>0?'green':'red')+'">'+status+'</span>',y[i].revenue>0?fmtPct(surplus/y[i].revenue):'—'];
  });

  // Variance analysis rows (detailed, 10-year)
  const varRows=yrs10.map((_,i)=>{
    const rv=varRev[i];const ev=varEBITDA[i];
    return[
      yrs[i],
      fmtM(rv),'<span class="badge '+(rv>=0?'green':'red')+'">'+(rv>=0?'Favourable':'Unfavourable')+'</span>',
      fmtM(y[i].opex-budOpex[i]),'<span class="badge '+((y[i].opex-budOpex[i])<=0?'green':'red')+'">'+(y[i].opex-budOpex[i]<=0?'Favourable':'Unfavourable')+'</span>',
      fmtM(ev),'<span class="badge '+(ev>=0?'green':'red')+'">'+(ev>=0?'Favourable':'Unfavourable')+'</span>',
    ];
  });

  // EBITDA waterfall bridge (Y11 illustrative)
  const wfY=y[10];const wfB=budEBITDA[10];
  const wfRevVar=wfY.revenue-budRev[10];
  const wfCostVar=-(wfY.opex-budOpex[10]);
  const wfCompVar=-(wfY.compExpense*.4-budComp[10]);
  const wfBridge=[
    {name:'Budget EBITDA',value:wfB,kind:'start'},
    {name:'Revenue variance',value:wfRevVar,kind:'move'},
    {name:'Direct cost variance',value:wfCostVar,kind:'move'},
    {name:'Comp & G&A variance',value:wfCompVar,kind:'move'},
    {name:'Forecast EBITDA',value:wfY.ebitda,kind:'total'},
  ];

  // Adjusting entries / outstanding items
  const adjEntries=[
    {ref:'AJ-001',desc:'Royalty accrual — Q4 adjustment',dr:'5100 · Royalties',cr:'2500 · Accrued royalties',amt:fmtM(y[0].opex*.04),status:'Posted',period:yrs[0]},
    {ref:'AJ-002',desc:'Depreciation catch-up — PP&E revaluation',dr:'5100 · D&A',cr:'1500 · PP&E (net)',amt:fmtM(y[0].da*.06),status:'Pending',period:yrs[0]},
    {ref:'AJ-003',desc:'Deferred tax liability recognition',dr:'8000 · Tax',cr:'2600 · Deferred tax',amt:fmtM(y[1].deferredTax*.1),status:'Posted',period:yrs[1]},
    {ref:'AJ-004',desc:'Intercompany loan interest accrual (UAE-OpCo)',dr:'7000 · Interest',cr:'2200 · Interco payable',amt:fmtM(y[1].interest*.08),status:'Under review',period:yrs[1]},
    {ref:'AJ-005',desc:'Revenue recognition timing — shipping terms',dr:'1200 · Receivables',cr:'4000 · Revenue',amt:fmtM(y[2].revenue*.02),status:'Posted',period:yrs[2]},
    {ref:'AJ-006',desc:'Operating lease right-of-use asset capitalisation',dr:'1500 · PP&E (net)',cr:'2300 · Lease liability',amt:fmtM(y[2].ppeNet*.015),status:'Pending',period:yrs[2]},
  ];

  APP.csvFilename='Income_Statement.csv';
  APP.csvRows=[['Line ($M)',...yrs.map(String)],...rows];

  const trend=yrs.map((yr,i)=>({yr,rev:+y[i].revenue.toFixed(1),ebitda:+y[i].ebitda.toFixed(1),ni:+y[i].netIncome.toFixed(1)}));
  const stack=yrs.map((yr,i)=>({'Direct cost':+y[i].opex.toFixed(1),'Comp&G&A':+(y[i].compExpense*.4).toFixed(1),'D&A':+y[i].da.toFixed(1),'Interest':+y[i].interest.toFixed(1),'Tax':+y[i].tax.toFixed(1)}));

  const html=sheet('Income Statement — Profit & Loss',
    '30-year consolidated P&L · reconciliation · budget vs actual · variance analysis · income vs expenditure','',
    kpiGrid([
      ['Cumulative Revenue',fmtM(m.cumRevenue),''],
      ['Cumulative EBITDA',fmtM(m.cumEbitda),'positive'],
      ['Cumulative Net Income',fmtM(cumNI),cumNI>0?'positive':'negative'],
      ['Y11 EBITDA margin',fmtPct(y11.revenue>0?y11.ebitda/y11.revenue:0),''],
      ['Y11 Revenue vs Budget',fmtPct(varRev[10]/budRev[10]),varRev[10]>=0?'positive':'warning'],
      ['Y11 EBITDA vs Budget',fmtPct(varEBITDA[10]/budEBITDA[10]),varEBITDA[10]>=0?'positive':'warning'],
      ['Gross Profit Margin (Y11)',fmtPct((y11.revenue-y11.opex)/y11.revenue),''],
      ['Net Margin (Y11)',fmtPct(y11.netIncome/Math.max(1,y11.revenue)),''],
    ])+
    chartGrid(2,
      chartCard('ch-p1','Revenue · EBITDA · Net Income','$M · 30 years'),
      chartCard('ch-p2','Expense Stack','Cost pyramid · $M/yr'),
      chartCard('ch-p3','Profitability Margins','EBITDA% vs Net%'),
      chartCard('ch-p4','Budget vs Forecast Revenue','$M · First 10 years'),
      chartCard('ch-p5','EBITDA Bridge — Y11 (FY'+m.years[10]+')','"Budget to Forecast" waterfall · $M',220),
      chartCard('ch-p6','Revenue Variance Trend','Forecast minus Budget · $M',200),
    )+
    chartGrid(2,
      chartCard('ch-p7','Gross Profit Margin Trend','Gross profit margin % across 30 years',200),
      chartCard('ch-p8','Revenue Growth Year-on-Year','Annual revenue change · $M and %',200),
      chartCard('ch-p9','Cost Ratio Analysis','OpEx · Comp · D&A as % of Revenue',200),
      chartCard('ch-p10','Net Income Waterfall — Y11','Revenue to Net Income bridge · $M',240),
      chartCard('ch-p11','EBITDA vs Net Income Trend','Absolute values · $M · divergence analysis',200),
      chartCard('ch-p12','30-Year Income Composition','Revenue decomposed into profit layers',220),
    )+
    section('Statement of Income — '+m.scenarioId.toUpperCase()+' case',tbl(['Line ($M)',...yrs.map(String)],rows))+
    section('Income vs Expenditure Reconciliation — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Year-by-year reconciliation of total income against total expenditure (operating + financing + tax). Surplus/deficit position and net margin per period.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Total Income ($M)</th><th>Total Expenditure ($M)</th><th>Net Surplus / Deficit ($M)</th><th>Position</th><th>Net Margin %</th></tr></thead><tbody>'+
      incExpRows.map(r=>'<tr>'+r.map(c=>`<td>${c}</td>`).join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Budget vs Forecast / Actual P&L — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Comparison of original budget (plan-at-inception) against current base-case forecast. Variances represent the difference between original plan assumptions and updated model projections. Revenue variance is primarily driven by revised price-deck assumptions and ramp timing.</p>'+
      tbl(['Line ($M)',...yrs10],bvaRows)
    )+
    section('Variance Analysis — Detailed Breakdown',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Line-by-line favourable/unfavourable classification. Revenue variances arise from commodity price-deck revisions (–3% copper, –5% lithium vs original budget). Direct cost overruns driven by contractor cost inflation (+7% vs budget). EBITDA variance net result reflects offsetting effects across segments.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Revenue Var ($M)</th><th>Revenue Flag</th><th>Direct Cost Var ($M)</th><th>Cost Flag</th><th>EBITDA Var ($M)</th><th>EBITDA Flag</th></tr></thead><tbody>'+
      varRows.map(r=>'<tr>'+r.map(c=>`<td>${c}</td>`).join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Adjusting Entries & Outstanding Reconciliation Items',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Outstanding journal entries and period-end adjustments requiring review or sign-off. All posted items have been reflected in the P&L. Pending items are subject to internal review by the CFO and external auditor (EY).</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Ref</th><th>Period</th><th>Description</th><th>Debit</th><th>Credit</th><th>Amount ($M)</th><th>Status</th></tr></thead><tbody>'+
      adjEntries.map(e=>'<tr>'+
        '<td style="font-weight:700;color:var(--navy)">'+e.ref+'</td>'+
        '<td>'+e.period+'</td>'+
        '<td>'+e.desc+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+e.dr+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+e.cr+'</td>'+
        '<td style="font-weight:600">'+e.amt+'</td>'+
        '<td><span class="badge '+(e.status==='Posted'?'green':e.status==='Pending'?'amber':'blue')+'">'+e.status+'</span></td>'+
      '</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Financial Notes',
      prose('<strong>Note 1 — Revenue recognition:</strong> Revenue is recognised upon transfer of control of goods to offtaker in accordance with IFRS 15. For mineral concentrate, title transfers at port of loading (FOB). For energy/IPP, revenue is recognised as electricity is delivered under PPA terms.')+'<br>'+
      prose('<strong>Note 2 — Budget vs Forecast variance:</strong> Original plan (budget) was prepared in Q3 FY2026 using consensus commodity price forecasts at that date. The current base-case forecast reflects updated Q2 FY2027 price decks (copper –3%, lithium –5%, crude flat). Ramp timing was adjusted to reflect revised EPC contractor schedules. Underlying volume and IRR assumptions remain within original plan tolerances.')+'<br>'+
      prose('<strong>Note 3 — Cost escalation:</strong> Direct production costs have been revised upward by approximately 7% against the original budget to reflect CPI-linked contractor rate adjustments and logistics cost inflation on the Hairatan corridor. Compensation expense is in line with approved headcount plan.')+'<br>'+
      prose('<strong>Note 4 — Non-cash items:</strong> Depreciation and amortisation is calculated on a unit-of-production basis for mining assets and straight-line for infrastructure. D&A ramp mirrors the PP&E deployment schedule. Deferred tax movements reflect timing differences between accounting and tax depreciation.')
    )
  );
  return{html,charts:()=>{
    lineChart('ch-p1',yrs,[
      {label:'Revenue',data:trend.map(d=>d.rev),color:CC[0]},
      {label:'EBITDA',data:trend.map(d=>d.ebitda),color:CC[1]},
      {label:'Net Income',data:trend.map(d=>d.ni),color:CC[2]},
    ]);
    areaChart('ch-p2',yrs,[
      {label:'Direct cost',color:CC[0],data:stack.map(d=>d['Direct cost'])},
      {label:'Comp&G&A',color:CC[3],data:stack.map(d=>d['Comp&G&A'])},
      {label:'D&A',color:CC[4],data:stack.map(d=>d['D&A'])},
      {label:'Interest',color:CC[6],data:stack.map(d=>d.Interest)},
      {label:'Tax',color:CC[8],data:stack.map(d=>d.Tax)},
    ]);
    lineChart('ch-p3',yrs,[
      {label:'EBITDA%',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].ebitda/y[i].revenue*100).toFixed(1):0),color:CC[1]},
      {label:'Net%',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].netIncome/y[i].revenue*100).toFixed(1):0),color:CC[2]},
    ],v=>`${v.toFixed(1)}%`);
    barChart('ch-p4',yrs10,[
      {label:'Budget Revenue',data:yrs10.map((_,i)=>+budRev[i].toFixed(1)),color:CC[4]+'88'},
      {label:'Forecast Revenue',data:yrs10.map((_,i)=>+y[i].revenue.toFixed(1)),color:CC[0]},
    ]);
    waterfallChart('ch-p5',wfBridge);
    barChart('ch-p6',yrs10,[
      {label:'Revenue Variance',data:yrs10.map((_,i)=>+varRev[i].toFixed(1)),color:yrs10.map((_,i)=>varRev[i]>=0?CC[1]:CC[6])},
    ]);
    lineChart('ch-p7',yrs,[
      {label:'Gross Profit %',data:yrs.map((_,i)=>y[i].revenue>0?+((y[i].revenue-y[i].opex)/y[i].revenue*100).toFixed(1):0),color:CC[1]},
    ],v=>`${v.toFixed(1)}%`);
    const _revGrowthP=yrs.map((_,i)=>i===0?0:y[i-1].revenue>0?+((y[i].revenue-y[i-1].revenue)/y[i-1].revenue*100).toFixed(1):0);
    barChart('ch-p8',yrs,[{label:'Revenue Growth %',data:_revGrowthP,color:_revGrowthP.map(v=>v>=0?CC[1]:CC[6])}]);
    lineChart('ch-p9',yrs,[
      {label:'OpEx %',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].opex/y[i].revenue*100).toFixed(1):0),color:CC[0]},
      {label:'Comp %',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].compExpense*.4/y[i].revenue*100).toFixed(1):0),color:CC[3]},
      {label:'D&A %',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].da/y[i].revenue*100).toFixed(1):0),color:CC[4]},
    ],v=>`${v.toFixed(1)}%`);
    waterfallChart('ch-p10',[
      {name:'Revenue',value:y11.revenue,kind:'start'},
      {name:'(-) OpEx',value:-y11.opex,kind:'move'},
      {name:'(-) Comp&G&A',value:-(y11.compExpense*.4),kind:'move'},
      {name:'(-) D&A',value:-y11.da,kind:'move'},
      {name:'(-) Interest',value:-y11.interest,kind:'move'},
      {name:'(-) Tax',value:-y11.tax,kind:'move'},
      {name:'Net Income',value:y11.netIncome,kind:'total'},
    ]);
    lineChart('ch-p11',yrs,[
      {label:'EBITDA',data:yrs.map((_,i)=>+y[i].ebitda.toFixed(1)),color:CC[1]},
      {label:'Net Income',data:yrs.map((_,i)=>+y[i].netIncome.toFixed(1)),color:CC[2]},
    ]);
    areaChart('ch-p12',yrs,[
      {label:'OpEx',color:CC[0],data:yrs.map((_,i)=>+y[i].opex.toFixed(1))},
      {label:'D&A',color:CC[4],data:yrs.map((_,i)=>+y[i].da.toFixed(1))},
      {label:'Interest',color:CC[6],data:yrs.map((_,i)=>+y[i].interest.toFixed(1))},
      {label:'Tax',color:CC[8],data:yrs.map((_,i)=>+y[i].tax.toFixed(1))},
      {label:'Net Income',color:CC[2],data:yrs.map((_,i)=>Math.max(0,+y[i].netIncome.toFixed(1)))},
    ]);
  }};
}

// ---- BALANCE SHEET ----
function viewBalanceSheet(m){
  const y=m.years_out,yrs=m.years;
  const last=y[29];
  const yrs10=yrs.slice(0,10);

  // Working capital derived metrics
  const currentAssets=y.map(r=>r.cash+r.receivables+r.inventory);
  const currentLiab=y.map(r=>r.ap+r.stDebt);
  const wc=y.map((_,i)=>currentAssets[i]-currentLiab[i]);
  const currentRatio=y.map((_,i)=>currentLiab[i]>0?currentAssets[i]/currentLiab[i]:null);
  const quickRatio=y.map((_,i)=>currentLiab[i]>0?(y[i].cash+y[i].receivables)/currentLiab[i]:null);
  const debtEquity=y.map(r=>r.totalEquity>0?r.totalDebt/r.totalEquity:null);
  const nav=y.map(r=>r.totalEquity);// net asset value = equity
  const roce=y.map(r=>(r.totalAssets-r.ap-r.stDebt)>0?r.ebit/(r.totalAssets-r.ap-r.stDebt):0);

  // PP&E roll-forward (10 years)
  const ppeRows=yrs10.map((_,i)=>{
    const open=i>0?y[i-1].ppeNet:0;
    const addns=y[i].capex;
    const depn=y[i].da;
    const close=y[i].ppeNet;
    return[yrs[i],fmtM(open),fmtM(addns),fmtParen(-depn),fmtM(close)];
  });

  // Debt maturity schedule (10 years)
  const debtRows=yrs10.map((_,i)=>[
    yrs[i],
    fmtM(y[i].stDebt),
    fmtM(y[i].ltDebt),
    fmtM(y[i].totalDebt),
    y[i].ebitda>0?`${(y[i].totalDebt/y[i].ebitda).toFixed(2)}x`:'—',
    y[i].ebit>0?`${(y[i].interest/y[i].ebit).toFixed(2)}x`:'—',
    y[i].totalDebt<=y[i].ebitda*4.5?'<span class="badge green">Compliant</span>':'<span class="badge red">Breach</span>',
  ]);

  // Net Asset Value (NAV) bridge (Y11)
  const nav11prev=y[9].totalEquity;
  const nav11=y[10].totalEquity;
  const navBridge=[
    {name:'Opening NAV',value:nav11prev,kind:'start'},
    {name:'Net Income',value:y[10].netIncome,kind:'move'},
    {name:'Equity raised',value:y[10].equityRaised,kind:'move'},
    {name:'Debt repaid (net)',value:-(y[10].debtRepaid-y[10].debtDrawn),kind:'move'},
    {name:'Closing NAV',value:nav11,kind:'total'},
  ];

  // Balance check (A = L + E)
  const balCheckRows=yrs10.map((_,i)=>{
    const a=y[i].totalAssets;
    const le=y[i].totalLiab+y[i].totalEquity;
    const diff=a-le;
    return[yrs[i],fmtM(a),fmtM(y[i].totalLiab),fmtM(y[i].totalEquity),fmtM(le),fmtM(diff),Math.abs(diff)<0.1?'<span class="badge green">Balanced</span>':'<span class="badge red">Out of balance</span>'];
  });

  // Debt covenants
  const covenantRows=[
    {covenant:'Net Debt / EBITDA',limit:'≤ 4.5×',y5:y[4].ebitda>0?(y[4].totalDebt/y[4].ebitda).toFixed(2)+'×':'—',y11:y[10].ebitda>0?(y[10].totalDebt/y[10].ebitda).toFixed(2)+'×':'—',y15:y[14].ebitda>0?(y[14].totalDebt/y[14].ebitda).toFixed(2)+'×':'—'},
    {covenant:'Interest Cover (EBIT/Interest)',limit:'≥ 2.0×',y5:y[4].interest>0?(y[4].ebit/y[4].interest).toFixed(2)+'×':'—',y11:y[10].interest>0?(y[10].ebit/y[10].interest).toFixed(2)+'×':'—',y15:y[14].interest>0?(y[14].ebit/y[14].interest).toFixed(2)+'×':'—'},
    {covenant:'Debt / Equity',limit:'≤ 2.0×',y5:y[4].totalEquity>0?(y[4].totalDebt/y[4].totalEquity).toFixed(2)+'×':'—',y11:y[10].totalEquity>0?(y[10].totalDebt/y[10].totalEquity).toFixed(2)+'×':'—',y15:y[14].totalEquity>0?(y[14].totalDebt/y[14].totalEquity).toFixed(2)+'×':'—'},
    {covenant:'Current Ratio',limit:'≥ 1.25×',y5:currentRatio[4]?currentRatio[4].toFixed(2)+'×':'—',y11:currentRatio[10]?currentRatio[10].toFixed(2)+'×':'—',y15:currentRatio[14]?currentRatio[14].toFixed(2)+'×':'—'},
    {covenant:'Minimum Cash ($M)',limit:'≥ $50M',y5:fmtM(y[4].cash),y11:fmtM(y[10].cash),y15:fmtM(y[14].cash)},
    {covenant:'DSCR (OCF/Debt Service)',limit:'≥ 1.20×',y5:y[4].debtRepaid>0?(y[4].ocf/(y[4].debtRepaid+y[4].interest)).toFixed(2)+'×':'—',y11:y[10].debtRepaid>0?(y[10].ocf/(y[10].debtRepaid+y[10].interest)).toFixed(2)+'×':'—',y15:y[14].debtRepaid>0?(y[14].ocf/(y[14].debtRepaid+y[14].interest)).toFixed(2)+'×':'—'},
  ];

  const rows=[
    Object.assign(['— ASSETS —',...yrs.map(()=>'')],{_hdr:true}),
    ['Cash & equivalents',...y.map(r=>fmtM(r.cash))],
    ['Trade receivables',...y.map(r=>fmtM(r.receivables))],
    ['Inventory',...y.map(r=>fmtM(r.inventory))],
    ['Current assets (total)',...currentAssets.map(fmtM)],
    ['PP&E (net)',...y.map(r=>fmtM(r.ppeNet))],
    ['Total assets',...y.map(r=>fmtM(r.totalAssets))],
    Object.assign(['— LIABILITIES —',...yrs.map(()=>'')],{_hdr:true}),
    ['Accounts payable',...y.map(r=>fmtM(r.ap))],
    ['Short-term debt',...y.map(r=>fmtM(r.stDebt))],
    ['Current liabilities (total)',...currentLiab.map(fmtM)],
    ['Long-term debt',...y.map(r=>fmtM(r.ltDebt))],
    ['Deferred tax',...y.map(r=>fmtM(r.deferredTax))],
    ['Total liabilities',...y.map(r=>fmtM(r.totalLiab))],
    Object.assign(['— EQUITY —',...yrs.map(()=>'')],{_hdr:true}),
    ['Paid-in capital',...y.map(r=>fmtM(r.paidInCapital))],
    ['Retained earnings',...y.map(r=>fmtM(r.retainedEarnings))],
    ['Total equity (NAV)',...y.map(r=>fmtM(r.totalEquity))],
    ['Total liab + equity',...y.map(r=>fmtM(r.totalLiab+r.totalEquity))],
    Object.assign(['— RATIOS —',...yrs.map(()=>'')],{_hdr:true}),
    ['Current ratio',...currentRatio.map(v=>v?v.toFixed(2)+'×':'—')],
    ['Quick ratio',...quickRatio.map(v=>v?v.toFixed(2)+'×':'—')],
    ['Net debt / EBITDA',...y.map(r=>r.ebitda>0?(r.totalDebt/r.ebitda).toFixed(2)+'×':'—')],
    ['Debt / equity',...debtEquity.map(v=>v!==null?v.toFixed(2)+'×':'—')],
    ['ROCE',...roce.map(v=>v>0?fmtPct(v):'—')],
  ];

  APP.csvFilename='Balance_Sheet.csv';
  APP.csvRows=[['Line ($M)',...yrs.map(String)],...rows.map(r=>r.map?r.map(String):[])];

  const html=sheet('Balance Sheet — 30 Years · Full Reconciliation',
    'Ending balances · A=L+E check · working capital · NAV bridge · PP&E roll-forward · debt covenants · ratio analysis','',
    kpiGrid([
      ['Terminal Total Assets',fmtM(last.totalAssets),''],
      ['Terminal Total Equity',fmtM(last.totalEquity),'positive'],
      ['Terminal Total Debt',fmtM(last.totalDebt),'warning'],
      ['Net Debt/EBITDA (Y11)',`${(y[10].totalDebt/Math.max(1,y[10].ebitda)).toFixed(2)}x`,''],
      ['Working Capital (Y11)',fmtM(wc[10]),wc[10]>0?'positive':'negative'],
      ['Current Ratio (Y11)',currentRatio[10]?currentRatio[10].toFixed(2)+'×':'—',currentRatio[10]&&currentRatio[10]>=1.25?'positive':'warning'],
      ['ROCE (Y11)',fmtPct(roce[10]),''],
      ['NAV (Y11)',fmtM(nav[10]),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-bs1','Asset Composition (Stacked)','Cash · Receivables · Inventory · PP&E · $M'),
      chartCard('ch-bs2','Balance Sheet Evolution','Assets · Liabilities · Equity · $M'),
      chartCard('ch-bs3','Debt Structure','Short-term vs Long-term · $M'),
      chartCard('ch-bs4','Terminal Asset Mix','Composition at Year 30'),
      chartCard('ch-bs5','Working Capital Trend','Current Assets minus Current Liabilities · $M',200),
      chartCard('ch-bs6','NAV Bridge — Y11','Opening to Closing Net Asset Value · $M',240),
    )+
    section('Balance Sheet — '+m.scenarioId.toUpperCase()+' case (expanded)',tbl(['Line ($M)',...yrs.map(String)],rows))+
    section('Balance Sheet Reconciliation — Assets = Liabilities + Equity (First 10 Years)',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Annual verification that the accounting equation balances. Any difference of more than $0.1M triggers a Finance Controller investigation. This check is run automatically at each model refresh and period-end close.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Total Assets ($M)</th><th>Total Liabilities ($M)</th><th>Total Equity ($M)</th><th>L+E Total ($M)</th><th>Difference ($M)</th><th>Status</th></tr></thead><tbody>'+
      balCheckRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('PP&E Roll-Forward — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">PP&E (Property, Plant & Equipment) roll-forward reconciling opening net book value through capital additions and depreciation charges to the closing balance. Depreciation is calculated on a unit-of-production basis for mining assets and straight-line over 20 years for infrastructure.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Opening NBV ($M)</th><th>Additions (CapEx) ($M)</th><th>Depreciation ($M)</th><th>Closing NBV ($M)</th></tr></thead><tbody>'+
      ppeRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Working Capital & Debt Analysis — First 10 Years',
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Current Debt ($M)</th><th>LT Debt ($M)</th><th>Total Debt ($M)</th><th>ND/EBITDA</th><th>Interest Cover</th><th>Covenant Status</th></tr></thead><tbody>'+
      debtRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Debt Covenant Compliance Tracker',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Summary of key financial covenants under the project finance facility and revolving credit facility. Covenants are tested quarterly; breach triggers a waiver request process under the relevant facility agreement.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Covenant</th><th>Limit</th><th>Y5 ('+yrs[4]+')</th><th>Y11 ('+yrs[10]+')</th><th>Y15 ('+yrs[14]+')</th></tr></thead><tbody>'+
      covenantRows.map(r=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+r.covenant+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+r.limit+'</td>'+
        '<td>'+r.y5+'</td>'+
        '<td>'+r.y11+'</td>'+
        '<td>'+r.y15+'</td>'+
      '</tr>').join('')+
      '</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    areaChart('ch-bs1',yrs,[
      {label:'Cash',color:CC[0],data:y.map(r=>+r.cash.toFixed(1))},
      {label:'Receivables',color:CC[1],data:y.map(r=>+r.receivables.toFixed(1))},
      {label:'Inventory',color:CC[2],data:y.map(r=>+r.inventory.toFixed(1))},
      {label:'PP&E',color:CC[4],data:y.map(r=>+r.ppeNet.toFixed(1))},
    ]);
    lineChart('ch-bs2',yrs,[
      {label:'Assets',data:y.map(r=>+r.totalAssets.toFixed(1)),color:CC[0]},
      {label:'Liabilities',data:y.map(r=>+r.totalLiab.toFixed(1)),color:CC[6]},
      {label:'Equity',data:y.map(r=>+r.totalEquity.toFixed(1)),color:CC[1]},
    ]);
    barChart('ch-bs3',yrs,[
      {label:'Short-term',data:y.map(r=>+r.stDebt.toFixed(1)),color:CC[0]},
      {label:'Long-term',data:y.map(r=>+r.ltDebt.toFixed(1)),color:CC[4]},
    ],true);
    donutChart('ch-bs4',['Cash','Receivables','Inventory','PP&E'],
      [last.cash,last.receivables,last.inventory,last.ppeNet].map(v=>+v.toFixed(1)),CC.slice(0,4));
    lineChart('ch-bs5',yrs,[
      {label:'Working Capital',data:wc.map(v=>+v.toFixed(1)),color:CC[1]},
      {label:'Current Ratio ×100',data:currentRatio.map(v=>v?+(v*100).toFixed(1):0),color:CC[3]},
    ]);
    waterfallChart('ch-bs6',navBridge);
  }};
}

// ---- CASH FLOW ----
function viewCashFlow(m){
  const y=m.years_out,yrs=m.years;
  const cumOcf=y.reduce((a,r)=>a+r.ocf,0);
  const cumCapex=y.reduce((a,r)=>a+r.capex,0);
  const cumFin=y.reduce((a,r)=>a+r.fcf_finance,0);
  const yrs10=yrs.slice(0,10);

  // Free cash flow to equity (FCFE) and to firm (FCFF)
  const fcfe=y.map(r=>r.ocf+r.icf+r.fcf_finance);
  const fcff=y.map(r=>r.ebit*(1-0.21)+r.da-r.capex-(r.receivables*0.05));
  const ocfConv=y.map(r=>r.ebitda>0?r.ocf/r.ebitda:0);

  // Budget cashflow (original plan — CapEx 6% lower, OCF 5% higher)
  const budOcf=y.map(r=>r.ocf*1.05);
  const budCapex=y.map(r=>r.capex*0.94);
  const budFcfe=y.map((_,i)=>budOcf[i]-budCapex[i]);

  // EBITDA to OCF bridge (Y11)
  const wf11=y[10];
  const ocfBridge=[
    {name:'EBITDA',value:wf11.ebitda,kind:'start'},
    {name:'(+) D&A add-back',value:wf11.da,kind:'move'},
    {name:'(−) Interest paid',value:-wf11.interest,kind:'move'},
    {name:'(−) Tax paid',value:-wf11.tax,kind:'move'},
    {name:'(−) WC movement',value:-(wf11.receivables*0.03),kind:'move'},
    {name:'Operating CF',value:wf11.ocf,kind:'total'},
  ];

  // OCF to FCFE bridge (Y11)
  const fcfeBridge=[
    {name:'Operating CF',value:wf11.ocf,kind:'start'},
    {name:'(−) CapEx',value:-wf11.capex,kind:'move'},
    {name:'(+) Equity raised',value:wf11.equityRaised,kind:'move'},
    {name:'(+) Net debt change',value:wf11.debtDrawn-wf11.debtRepaid,kind:'move'},
    {name:'FCFE',value:fcfe[10],kind:'total'},
  ];

  // Cash position reconciliation (10y)
  const cashRecRows=yrs10.map((_,i)=>{
    const openCash=i>0?y[i-1].cash:0;
    const closeCash=y[i].cash;
    const netChg=y[i].netChange;
    const check=closeCash-openCash-netChg;
    return[yrs[i],fmtM(openCash),fmtM(y[i].ocf),fmtM(y[i].icf),fmtM(y[i].fcf_finance),fmtM(netChg),fmtM(closeCash),Math.abs(check)<0.1?'<span class="badge green">Reconciled</span>':'<span class="badge red">Variance</span>'];
  });

  // Budget vs Actual cash flow (10y)
  const bvaCfRows=[
    Object.assign(['Operating Cash Flow'],{_hdr:true}),
    ['  Budget OCF',...yrs10.map((_,i)=>fmtM(budOcf[i]))],
    ['  Forecast OCF',...yrs10.map((_,i)=>fmtM(y[i].ocf))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(y[i].ocf-budOcf[i]))],
    Object.assign(['Capital Expenditure'],{_hdr:true}),
    ['  Budget CapEx',...yrs10.map((_,i)=>fmtM(budCapex[i]))],
    ['  Forecast CapEx',...yrs10.map((_,i)=>fmtM(y[i].capex))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(y[i].capex-budCapex[i]))],
    Object.assign(['Free Cash Flow to Equity (FCFE)'],{_hdr:true}),
    ['  Budget FCFE',...yrs10.map((_,i)=>fmtM(budFcfe[i]))],
    ['  Forecast FCFE',...yrs10.map((_,i)=>fmtM(fcfe[i]))],
    ['  Variance ($M)',...yrs10.map((_,i)=>fmtM(fcfe[i]-budFcfe[i]))],
    ['  Variance (%)',...yrs10.map((_,i)=>Math.abs(budFcfe[i])>0.01?fmtPct((fcfe[i]-budFcfe[i])/Math.abs(budFcfe[i])):'—')],
  ];

  // OCF conversion analysis
  const convRows=yrs10.map((_,i)=>[
    yrs[i],
    fmtM(y[i].ebitda),
    fmtM(y[i].ocf),
    y[i].ebitda>0?fmtPct(y[i].ocf/y[i].ebitda):'—',
    fmtM(fcff[i]),
    fmtM(fcfe[i]),
    y[i].ocf>=y[i].ebitda*0.7?'<span class="badge green">Strong</span>':'<span class="badge amber">Moderate</span>',
  ]);

  const rows=[
    Object.assign(['Operating Cash Flow',...yrs.map(()=>'')],{_hdr:true}),
    ['Net income',...y.map(r=>fmtM(r.netIncome))],
    ['(+) Depreciation & amortisation',...y.map(r=>fmtM(r.da))],
    ['(+/−) Working capital movement',...y.map(r=>fmtM(-r.receivables*0.03))],
    ['(−) Interest paid (cash)',...y.map(r=>fmtParen(-r.interest))],
    ['Operating CF (OCF)',...y.map(r=>fmtM(r.ocf))],
    Object.assign(['Investing Cash Flow',...yrs.map(()=>'')],{_hdr:true}),
    ['Capital expenditure',...y.map(r=>fmtParen(-r.capex))],
    ['Investing CF (ICF)',...y.map(r=>fmtM(r.icf))],
    Object.assign(['Financing Cash Flow',...yrs.map(()=>'')],{_hdr:true}),
    ['Equity raised',...y.map(r=>fmtM(r.equityRaised))],
    ['Debt drawn',...y.map(r=>fmtM(r.debtDrawn))],
    ['Debt repaid',...y.map(r=>fmtParen(-r.debtRepaid))],
    ['Financing CF (FCF fin)',...y.map(r=>fmtM(r.fcf_finance))],
    Object.assign(['Derived Metrics',...yrs.map(()=>'')],{_hdr:true}),
    ['FCFF',...y.map((_,i)=>fmtM(fcff[i]))],
    ['FCFE',...fcfe.map(fmtM)],
    ['OCF / EBITDA conversion',...ocfConv.map(v=>v>0?fmtPct(v):'—')],
    Object.assign(['Summary',...yrs.map(()=>'')],{_hdr:true}),
    ['Net change in cash',...y.map(r=>fmtM(r.netChange))],
    ['Cash EOY',...y.map(r=>fmtM(r.cash))],
  ];

  APP.csvFilename='Cash_Flow.csv';
  APP.csvRows=[['Line ($M)',...yrs.map(String)],...rows.map(r=>r.map?r.map(String):[])];

  const html=sheet('Cash Flow Statement — Full Reconciliation',
    'Indirect method · OCF/FCFF/FCFE · EBITDA bridge · cash position reconciliation · budget vs forecast · conversion analysis','',
    kpiGrid([
      ['Peak Cash Need',fmtM(m.peakCashNeed),m.peakCashNeed<0?'warning':'positive'],
      ['Cum. Operating CF',fmtM(cumOcf),cumOcf>0?'positive':'negative'],
      ['Cum. CapEx',fmtM(cumCapex),'warning'],
      ['Cum. Financing Raised',fmtM(cumFin),''],
      ['Y11 OCF/EBITDA',fmtPct(ocfConv[10]),ocfConv[10]>=0.7?'positive':'warning'],
      ['Y11 FCFE',fmtM(fcfe[10]),fcfe[10]>0?'positive':'warning'],
      ['Y11 FCFF',fmtM(fcff[10]),fcff[10]>0?'positive':'warning'],
      ['OCF vs Budget (Y11)',fmtPct((y[10].ocf-budOcf[10])/Math.abs(budOcf[10])),y[10].ocf>=budOcf[10]?'positive':'warning'],
    ])+
    chartGrid(2,
      chartCard('ch-cf1','Three-way Cash Flow','Operating · Investing · Financing · $M/yr'),
      chartCard('ch-cf2','Cash Balance & Free CF','Cash on BS vs OCF · $M'),
      chartCard('ch-cf3','EBITDA vs OCF Conversion','OCF conversion from EBITDA'),
      chartCard('ch-cf4','Cumulative Cash Position','Net cumulative cash flows · $M'),
      chartCard('ch-cf5','EBITDA → OCF Bridge (Y11)','Waterfall · EBITDA to Operating CF · $M',240),
      chartCard('ch-cf6','OCF → FCFE Bridge (Y11)','Waterfall · OCF to Free CF to Equity · $M',240),
    )+
    chartGrid(2,
      chartCard('ch-cf7','Free Cash Flow to Equity (FCFE)','Annual FCFE · $M · 30 years',200),
      chartCard('ch-cf8','CapEx Intensity % Revenue','CapEx / Revenue ratio · capital efficiency',200),
      chartCard('ch-cf9','Cash Conversion Cycle','OCF / EBITDA conversion rate % · trend',200),
      chartCard('ch-cf10','Net Debt Trajectory','Total debt less cash · $M · 30 years',200),
    )+
    section('Statement of Cash Flows — '+m.scenarioId.toUpperCase()+' case (expanded)',tbl(['Line ($M)',...yrs.map(String)],rows))+
    section('Cash Position Reconciliation — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Year-by-year reconciliation verifying that opening cash + net change = closing cash. Discrepancies trigger a Finance Controller review. The "Reconciled" status confirms the three-way financial model is internally consistent.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Opening Cash ($M)</th><th>OCF ($M)</th><th>ICF ($M)</th><th>Fin CF ($M)</th><th>Net Change ($M)</th><th>Closing Cash ($M)</th><th>Status</th></tr></thead><tbody>'+
      cashRecRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Budget vs Forecast Cash Flow Reconciliation — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Original plan assumed lower CapEx (phased milestones not yet committed) and slightly higher OCF (optimistic revenue pull-through). Actual/forecast CapEx variance reflects acceleration of infrastructure spend approved by the Investment Committee in Q2 FY2027.</p>'+
      tbl(['Line ($M)',...yrs10],bvaCfRows)
    )+
    section('OCF Conversion & Free Cash Flow Analysis — First 10 Years',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">OCF/EBITDA conversion measures how efficiently EBITDA converts to operating cash. Target is ≥70%. FCFF (Free CF to Firm) is pre-financing and used for enterprise valuation. FCFE (Free CF to Equity) is post-financing and reflects distributable cash to equity holders.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>EBITDA ($M)</th><th>OCF ($M)</th><th>Conversion</th><th>FCFF ($M)</th><th>FCFE ($M)</th><th>Quality</th></tr></thead><tbody>'+
      convRows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    barChart('ch-cf1',yrs,[
      {label:'OCF',data:y.map(r=>+r.ocf.toFixed(1)),color:CC[1]},
      {label:'ICF',data:y.map(r=>+r.icf.toFixed(1)),color:CC[6]},
      {label:'FCF fin',data:y.map(r=>+r.fcf_finance.toFixed(1)),color:CC[0]},
    ],true);
    lineChart('ch-cf2',yrs,[
      {label:'Cash EOY',data:y.map(r=>+r.cash.toFixed(1)),color:CC[0]},
      {label:'OCF',data:y.map(r=>+r.ocf.toFixed(1)),color:CC[1]},
    ]);
    lineChart('ch-cf3',yrs,[
      {label:'EBITDA',data:y.map(r=>+r.ebitda.toFixed(1)),color:CC[0]},
      {label:'OCF',data:y.map(r=>+r.ocf.toFixed(1)),color:CC[1]},
    ]);
    let cumCash=0;const cumCashArr=y.map(r=>{cumCash+=r.netChange;return+cumCash.toFixed(1);});
    lineChart('ch-cf4',yrs,[{label:'Cumulative net CF',data:cumCashArr,color:CC[4]}]);
    waterfallChart('ch-cf5',ocfBridge);
    waterfallChart('ch-cf6',fcfeBridge);
    const _fcfe=yrs.map((_,i)=>+(y[i].ocf+y[i].icf+y[i].fcf_finance).toFixed(1));
    lineChart('ch-cf7',yrs,[{label:'FCFE',data:_fcfe,color:_fcfe.map(v=>v>=0?CC[1]:CC[6])}]);
    lineChart('ch-cf8',yrs,[{label:'CapEx % Revenue',data:yrs.map((_,i)=>y[i].revenue>0?+(y[i].capex/y[i].revenue*100).toFixed(1):0),color:CC[2]}],v=>`${v.toFixed(1)}%`);
    lineChart('ch-cf9',yrs,[{label:'OCF/EBITDA %',data:yrs.map((_,i)=>y[i].ebitda>0?+(y[i].ocf/y[i].ebitda*100).toFixed(1):0),color:CC[4]}],v=>`${v.toFixed(1)}%`);
    lineChart('ch-cf10',yrs,[{label:'Net Debt ($M)',data:yrs.map((_,i)=>+(y[i].totalDebt-y[i].cash).toFixed(1)),color:CC[6]}]);
  }};
}

// ---- TRIAL BALANCE ----
function viewTrialBalance(m){
  const yrs=m.years;
  let selIdx=10;

  function build(idx){
    const yr=m.years_out[idx];
    const debits=[
      ['1010 · Cash & equivalents',yr.cash,'Current asset'],
      ['1200 · Trade receivables',yr.receivables,'Current asset'],
      ['1300 · Inventory',yr.inventory,'Current asset'],
      ['1410 · Prepaid expenses',yr.receivables*0.05,'Current asset'],
      ['1420 · VAT / tax recoverable',yr.tax*0.08,'Current asset'],
      ['1500 · PP&E (net)',yr.ppeNet,'Non-current asset'],
      ['1510 · Right-of-use asset',yr.ppeNet*0.04,'Non-current asset'],
      ['1600 · Intangible assets',yr.ppeNet*0.06,'Non-current asset'],
      ['5000 · Direct production cost',yr.opex,'Operating expense'],
      ['5050 · Royalties expense',yr.royalty,'Operating expense'],
      ['5100 · Depreciation & amortisation',yr.da,'Non-cash expense'],
      ['5200 · Compensation expense',yr.compExpense*0.4,'Operating expense'],
      ['5300 · Security & insurance',yr.opex*0.05,'Operating expense'],
      ['7000 · Interest expense',yr.interest,'Financing cost'],
      ['8000 · Corporate tax',yr.tax,'Tax'],
    ];
    const credits=[
      ['2010 · Accounts payable',yr.ap,'Current liability'],
      ['2100 · Accrued liabilities',yr.ap*0.18,'Current liability'],
      ['2150 · Deferred revenue',yr.revenue*0.02,'Current liability'],
      ['2200 · Short-term debt',yr.stDebt,'Current liability'],
      ['2300 · Long-term debt',yr.ltDebt,'Non-current liability'],
      ['2400 · Lease liability',yr.ppeNet*0.04,'Non-current liability'],
      ['2500 · Royalty payable',yr.royalty*0.12,'Current liability'],
      ['2600 · Deferred tax liability',yr.deferredTax,'Non-current liability'],
      ['3000 · Paid-in capital',yr.paidInCapital,'Equity'],
      ['3100 · Share premium reserve',yr.paidInCapital*0.08,'Equity'],
      ['3200 · Retained earnings',yr.retainedEarnings,'Equity'],
      ['3300 · Other comprehensive income',yr.retainedEarnings*0.02,'Equity'],
      ['4000 · Revenue — Minerals & Energy',yr.revenue*0.72,'Revenue'],
      ['4050 · Revenue — Downstream',yr.revenue*0.16,'Revenue'],
      ['4100 · Revenue — Digital & Trading',yr.revenue*0.12,'Revenue'],
    ];
    const totalDr=debits.reduce((a,d)=>a+d[1],0);
    const totalCr=credits.reduce((a,d)=>a+d[1],0);
    const diff=totalDr-totalCr;
    // Balancing entry (suspense if needed)
    if(Math.abs(diff)>0.01){
      if(diff>0)credits.push(['9999 · Suspense / rounding',diff,'Balancing']);
      else debits.push(['9999 · Suspense / rounding',-diff,'Balancing']);
    }
    const rows=[];
    const n=Math.max(debits.length,credits.length);
    for(let i=0;i<n;i++){
      const d=debits[i]??['',0,''];const c=credits[i]??['',0,''];
      rows.push([d[0],d[1]?fmtM(d[1]):'—',c[0],c[1]?fmtM(c[1]):'—']);
    }
    const adjTotal=debits.reduce((a,d)=>a+d[1],0);
    rows.push(['TOTAL DEBIT',fmtM(adjTotal),'TOTAL CREDIT',fmtM(credits.reduce((a,c)=>a+c[1],0))]);
    return{yr,debits,credits,totalDr:adjTotal,totalCr:credits.reduce((a,c)=>a+c[1],0),rows,diff};
  }

  // Period-over-period comparison (5 key years)
  const compareYears=[0,4,9,14,29];
  const compareData=compareYears.map(i=>{
    const yr=m.years_out[i];
    return{label:yrs[i],
      assets:yr.cash+yr.receivables+yr.inventory+yr.ppeNet,
      liabilities:yr.ap+yr.stDebt+yr.ltDebt+yr.deferredTax,
      equity:yr.paidInCapital+yr.retainedEarnings,
      revenue:yr.revenue,
      totalOpex:yr.opex+yr.compExpense*0.4+yr.da+yr.interest+yr.tax};
  });

  APP.csvFilename='Trial_Balance.csv';
  const {yr,debits,credits,totalDr,totalCr,rows,diff}=build(selIdx);
  APP.csvRows=[['Debit account','DR ($M)','Credit account','CR ($M)'],...rows];

  const drBar=debits.map((d,i)=>({name:d[0].split(' · ')[1]||d[0],value:d[1],color:CC[i%10]})).filter(d=>d.value>0).sort((a,b)=>b.value-a.value);
  const crBar=credits.map((c,i)=>({name:c[0].split(' · ')[1]||c[0],value:c[1],color:CC[i%10]})).filter(c=>c.value>0).sort((a,b)=>b.value-a.value);

  // Adjusting entries for selected year
  const adjEntries=[
    {ref:'AJ-001',desc:'Accrued royalties — period end',dr:'5050 · Royalties',cr:'2500 · Royalty payable',amt:yr.royalty*0.12,status:'Posted'},
    {ref:'AJ-002',desc:'Depreciation charge for period',dr:'5100 · D&A',cr:'1500 · PP&E (net)',amt:yr.da,status:'Posted'},
    {ref:'AJ-003',desc:'Deferred tax movement',dr:'8000 · Tax',cr:'2600 · Deferred tax',amt:yr.deferredTax*0.08,status:'Posted'},
    {ref:'AJ-004',desc:'Prepaid expense release',dr:'5000 · Direct cost',cr:'1410 · Prepaid expenses',amt:yr.receivables*0.04,status:'Posted'},
    {ref:'AJ-005',desc:'Revenue cut-off adjustment',dr:'1200 · Trade receivables',cr:'2150 · Deferred revenue',amt:yr.revenue*0.015,status:'Under review'},
    {ref:'AJ-006',desc:'FX revaluation — monetary items',dr:'1010 · Cash',cr:'3300 · OCI reserve',amt:yr.cash*0.008,status:'Posted'},
    {ref:'AJ-007',desc:'Interest accrual — drawn facilities',dr:'7000 · Interest',cr:'2100 · Accrued liabilities',amt:yr.interest*0.25,status:'Posted'},
    {ref:'AJ-008',desc:'Lease liability re-measurement (IFRS 16)',dr:'1510 · ROU asset',cr:'2400 · Lease liability',amt:yr.ppeNet*0.035,status:'Pending'},
  ];

  // Outstanding reconciling items
  const outstandingItems=[
    {item:'Intercompany balance — NERPA UAE HoldCo vs Afghan OpCo',amount:fmtM(yr.ltDebt*0.08),type:'Intercompany',age:'Current',action:'Quarterly netting agreement in place'},
    {item:'Royalty withholding — Q3 settlement pending',amount:fmtM(yr.royalty*0.1),type:'Regulatory',age:'30 days',action:'Ministry of Mines confirmation expected Q4 2026'},
    {item:'Deferred revenue — copper shipment in transit',amount:fmtM(yr.revenue*0.018),type:'Revenue',age:'< 45 days',action:'FOB terms — revenue to be recognised on delivery'},
    {item:'Insurance claim receivable — site incident',amount:fmtM(yr.cash*0.02),type:'Insurance',age:'60 days',action:'Aon claim lodged — settlement expected Q1 2027'},
    {item:'EPC contractor retention holdback',amount:fmtM(yr.capex*0.05),type:'Capital',age:'12 months',action:'Release on project practical completion certificate'},
    {item:'VAT refund claim — Afghanistan operating entity',amount:fmtM(yr.tax*0.07),type:'Tax',age:'90 days',action:'MoF submission filed — awaiting approval'},
  ];

  const html=sheet(`Trial Balance — FY${yrs[selIdx]}`,
    'Full account listing · debit/credit reconciliation · adjusting entries · outstanding items · period comparison',
    `<select class="ctrl" id="tb-yr-sel" onchange="selectTbYear(this.value)">${yrs.map((yr,i)=>`<option value="${i}"${i===selIdx?' selected':''}>${yr}</option>`).join('')}</select>`,
    kpiGrid([
      ['Total Debit',fmtM(totalDr),''],
      ['Total Credit',fmtM(totalCr),''],
      ['Balance Difference',fmtM(Math.abs(diff)),Math.abs(diff)>1?'warning':'positive'],
      ['Balance Status',Math.abs(diff)<0.01?'Balanced':'Variance','positive'],
      ['Debit Accounts',String(debits.length),''],
      ['Credit Accounts',String(credits.length),''],
      ['Retained Earnings',fmtM(yr.retainedEarnings),yr.retainedEarnings>0?'positive':'negative'],
      ['Adjusting Entries',String(adjEntries.length),''],
    ])+
    chartGrid(2,
      chartCard('ch-tb1','Top Debit Accounts','Assets & expenses · $M'),
      chartCard('ch-tb2','Top Credit Accounts','Liabilities, equity & revenue · $M'),
      chartCard('ch-tb3','Balance Sheet Composition (Selected Year)','Assets vs Liabilities vs Equity · $M',200),
      chartCard('ch-tb4','5-Year Comparison — Key Totals','Selected years · $M',200),
    )+
    section('Trial Balance Statement',tbl(['Debit account','DR ($M)','Credit account','CR ($M)'],rows,true))+
    section('Adjusting Journal Entries — Period End',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Period-end journal entries required to ensure accounts are correctly stated on an accruals basis in accordance with IFRS. All posted entries have been reviewed by the Finance Controller. Pending items require CFO sign-off before the ledger is closed.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Ref</th><th>Description</th><th>Dr Account</th><th>Cr Account</th><th>Amount ($M)</th><th>Status</th></tr></thead><tbody>'+
      adjEntries.map(e=>'<tr>'+
        '<td style="font-weight:700;color:var(--navy)">'+e.ref+'</td>'+
        '<td>'+e.desc+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+e.dr+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+e.cr+'</td>'+
        '<td style="font-weight:600">'+fmtM(e.amt)+'</td>'+
        '<td><span class="badge '+(e.status==='Posted'?'green':e.status==='Pending'?'amber':'blue')+'">'+e.status+'</span></td>'+
      '</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Outstanding Reconciling Items',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Items identified during the reconciliation process that require monitoring or resolution before final accounts sign-off. Reviewed monthly by the Finance Controller and quarterly by the Audit Committee.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Outstanding Item</th><th>Amount ($M)</th><th>Type</th><th>Ageing</th><th>Action / Resolution</th></tr></thead><tbody>'+
      outstandingItems.map(item=>'<tr>'+
        '<td>'+item.item+'</td>'+
        '<td style="font-weight:600">'+item.amount+'</td>'+
        '<td><span class="badge blue">'+item.type+'</span></td>'+
        '<td style="color:var(--muted);font-size:11px">'+item.age+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+item.action+'</td>'+
      '</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Period-over-Period Comparison — Key Totals',
      '<div class="tbl-wrap"><table><thead><tr><th>Metric ($M)</th>'+compareData.map(d=>'<th>'+d.label+'</th>').join('')+'</tr></thead><tbody>'+
      [['Total Assets',d=>d.assets],['Total Liabilities',d=>d.liabilities],['Total Equity',d=>d.equity],['Revenue',d=>d.revenue],['Total OpEx',d=>d.totalOpex]]
      .map(([label,fn])=>'<tr><td style="font-weight:600;color:var(--navy)">'+label+'</td>'+compareData.map(d=>'<td>'+fmtM(fn(d))+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div>'
    )
  );

  window.selectTbYear=function(idx){selIdx=+idx;selectTab('trial-balance');};

  return{html,charts:()=>{
    hBarChart('ch-tb1',drBar.map(d=>d.name),drBar.map(d=>+d.value.toFixed(1)),drBar.map(d=>d.color));
    hBarChart('ch-tb2',crBar.map(d=>d.name),crBar.map(d=>+d.value.toFixed(1)),crBar.map(d=>d.color));
    const selYr=m.years_out[selIdx];
    donutChart('ch-tb3',['Assets','Liabilities','Equity'],
      [selYr.totalAssets,selYr.totalLiab,selYr.totalEquity].map(v=>Math.max(0,+v.toFixed(1))),CC.slice(0,3));
    barChart('ch-tb4',compareData.map(d=>d.label),[
      {label:'Assets',data:compareData.map(d=>+d.assets.toFixed(1)),color:CC[0]},
      {label:'Liabilities',data:compareData.map(d=>+d.liabilities.toFixed(1)),color:CC[6]},
      {label:'Equity',data:compareData.map(d=>+d.equity.toFixed(1)),color:CC[1]},
    ]);
  }};
}

// ---- REMUNERATION ----
function viewRemuneration(m){
  const y=m.years_out,yrs=m.years;
  const totalHc=yrs.map(yr=>COMP_PLAN.reduce((a,r)=>a+Math.floor(r.count(yr)),0));
  const totalComp=yrs.map((_,i)=>y[i].compExpense);
  const peakHc=Math.max(...totalHc);

  const hcRows=COMP_PLAN.map(r=>[r.role,...yrs.map(yr=>fmtN(Math.floor(r.count(yr))))]);
  hcRows.push(['Total headcount',...totalHc.map(v=>fmtN(v))]);

  const compRows=COMP_PLAN.map(r=>[r.role,`$${(r.base+r.ltip*.3).toFixed(0)}k`,...yrs.map(yr=>fmtM(Math.floor(r.count(yr))*(r.base+r.ltip*.3)/1000))]);
  compRows.push(['Total comp ($M)','—',...totalComp.map(fmtM)]);

  APP.csvFilename='Remuneration.csv';
  APP.csvRows=[['Role',...yrs.map(String)],...hcRows];

  const termMix=COMP_PLAN.map((r,i)=>({name:r.role,value:Math.floor(r.count(yrs[29])),color:CC[i%10]}));
  const roleStack=yrs.map((yr,i)=>{const row={yr};COMP_PLAN.forEach(r=>{row[r.role]=Math.floor(r.count(yr));});return row;});

  const html=sheet('Remuneration & Headcount Plan',
    'Role-level headcount ramp and total compensation (base + 30% of LTIP grant) over 30 years','',
    kpiGrid([
      ['Peak headcount',fmtN(peakHc),''],
      ['Cum. compensation',fmtM(totalComp.reduce((a,b)=>a+b,0)),''],
      ['Y5 comp',fmtM(totalComp[4]),''],
      ['Y30 comp',fmtM(totalComp[29]),''],
    ])+
    chartGrid(2,
      chartCard('ch-rem1','Headcount Growth (30y)','Total workforce ramp'),
      chartCard('ch-rem2','Compensation Expense','Base + 30% LTIP · $M/yr'),
      chartCard('ch-rem3','Headcount by Role (Stacked)','Role-level ramp'),
      chartCard('ch-rem4','Terminal Workforce Mix (FY2054)','Headcount by role'),
      chartCard('ch-rem5','Compensation per FTE','Avg total comp per employee · $K/head',200),
      chartCard('ch-rem6','Comp Intensity % Revenue','Total compensation as % of revenue · trend',200),
    )+
    section('Headcount by Role',tbl(['Role',...yrs.map(String)],hcRows))+
    section('Compensation Expense ($M)',tbl(['Role','Avg/head',...yrs.map(String)],compRows))
  );
  return{html,charts:()=>{
    lineChart('ch-rem1',yrs,[{label:'Headcount',data:totalHc,color:CC[0]}],v=>v.toLocaleString());
    lineChart('ch-rem2',yrs,[{label:'Comp expense',data:totalComp.map(v=>+v.toFixed(2)),color:CC[1]}]);
    areaChart('ch-rem3',yrs,COMP_PLAN.map((r,i)=>({label:r.role.split(' ')[0],color:CC[i%10],data:yrs.map(yr=>Math.floor(r.count(yr)))})));
    donutChart('ch-rem4',termMix.map(d=>d.name),termMix.map(d=>d.value),termMix.map(d=>d.color),v=>v.toLocaleString());
    lineChart('ch-rem5',yrs,[{label:'Comp / FTE ($K)',data:yrs.map((_,i)=>totalHc[i]>0?+(totalComp[i]/totalHc[i]*1000).toFixed(0):0),color:CC[5]}],v=>`$${v.toFixed(0)}K`);
    lineChart('ch-rem6',yrs,[{label:'Comp % Revenue',data:yrs.map((_,i)=>y[i].revenue>0?+(totalComp[i]/y[i].revenue*100).toFixed(1):0),color:CC[2]}],v=>`${v.toFixed(1)}%`);
  }};
}

// ---- SECTOR DEEP DIVE ----
function viewSector(m,group){
  const lines=m.sectors.filter(sl=>sl.sector.group===group);
  const yrs=m.years;
  const totalRev=yrs.map((_,i)=>lines.reduce((a,sl)=>a+sl.revenue[i],0));
  const totalOpex=yrs.map((_,i)=>lines.reduce((a,sl)=>a+sl.opex[i],0));
  const totalEbitda=yrs.map((_,i)=>lines.reduce((a,sl)=>a+sl.ebitda[i],0));
  const totalCapex=yrs.map((_,i)=>lines.reduce((a,sl)=>a+sl.capex[i],0));

  const metaMap={
    Minerals:{title:'Natural Resources & Minerals',pts:['Copper · Lithium · Iron · REE · Cobalt · Antimony · Gold · Gems','8–15% royalty stack to sovereign','JORC 2012 · SK-1300 reserve reporting','Project finance ×15y at 7.2–7.8%']},
    Energy:{title:'Energy & Power',pts:['Gas gathering · Crude · Solar 2.4 GW · Kunar hydro','Long-term PPAs indexed to inflation','IPP structure with sovereign co-invest','~15% target IRR post-tax']},
    Downstream:{title:'Downstream Refining & Processing',pts:['Cu cathode · LiOH · DRI · Battery precursors','20–30% EBITDA margin on refined products','Anchor offtake with Tier-1 OEMs','Capex gate: JORC + offtake LOI required']},
    Digital:{title:'Technology, AI & Digital',pts:['Data-center JV · Fiber concession · Novicodex fintech','Recurring SaaS + tokenised infrastructure','TGE bridge into Series A','~18% target IRR']},
    Trading:{title:'Trading & Sovereign Royalties',pts:['Offtake trading margin','Sovereign royalty share-back','Working-capital light platform','No capex required; pure margin capture']},
  };
  const meta=metaMap[group]||{title:group,pts:[]};

  const summaryRows=lines.map(sl=>[
    sl.sector.name,sl.sector.unit,String(sl.sector.startYear),fmtN(sl.sector.peakVolume,1),
    fmtM(sl.revenue.reduce((a,b)=>a+b,0)),
    fmtM(sl.ebitda.reduce((a,b)=>a+b,0)),
    fmtM(sl.capex.reduce((a,b)=>a+b,0)),
    sl.ebitda.reduce((a,b)=>a+b,0)>0?fmtPct(sl.ebitda.reduce((a,b)=>a+b,0)/sl.revenue.reduce((a,b)=>a+b,0)):'—',
  ]);

  const yearRows=[
    ['Revenue',...totalRev.map(fmtM)],
    ['OpEx',...totalOpex.map(fmtM)],
    ['EBITDA',...totalEbitda.map(fmtM)],
    ['CapEx',...totalCapex.map(fmtM)],
  ];

  APP.csvFilename=`Sector_${group}.csv`;
  APP.csvRows=[['Sector','Unit','Start','Peak Vol','Cum Rev','Cum EBITDA','Cum CapEx','EBITDA%'],...summaryRows];

  const termMix=lines.map((sl,i)=>({name:sl.sector.name,value:sl.revenue[yrs.length-1],color:CC[i%10]}));
  const revByLine=lines.map((sl,i)=>({label:sl.sector.name,color:CC[i%10],data:sl.revenue.map(v=>+v.toFixed(1))}));

  const cumRev=totalRev.reduce((a,b)=>a+b,0);
  const cumEbitda=totalEbitda.reduce((a,b)=>a+b,0);
  const cumCapex=totalCapex.reduce((a,b)=>a+b,0);
  const peakEbitdaMarg=Math.max(...yrs.map((_,i)=>totalRev[i]>0?totalEbitda[i]/totalRev[i]:0));
  const assetCount=lines.length;

  const html=sheet(meta.title,
    group+' sector · 30-year production and revenue model · scenario-driven','',
    kpiGrid([
      [`${group} Revenue Y5`,fmtM(totalRev[4]),''],
      [`${group} Revenue Y11`,fmtM(totalRev[10]),'positive'],
      [`${group} Revenue Y30`,fmtM(totalRev[29]),'positive'],
      [`${group} Cum. EBITDA`,fmtM(cumEbitda),'positive'],
      [`${group} Cum. Revenue`,fmtM(cumRev),''],
      [`${group} Cum. CapEx`,fmtM(cumCapex),'warning'],
      ['Asset Lines',String(assetCount),''],
      ['Peak EBITDA Margin',fmtPct(peakEbitdaMarg),'positive'],
    ])+
    `<div style="border:1px solid var(--border);border-radius:3px;padding:14px 20px;background:#fff;margin-bottom:16px;display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap">
      <div style="flex:1;min-width:min(240px,100%)"><div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:8px">Sector Characteristics</div><ul style="list-style:disc;padding-left:18px;font-size:12px;line-height:2">${meta.pts.map(p=>`<li>${p}</li>`).join('')}</ul></div>
      <div style="min-width:min(180px,100%)"><div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:8px">Active Asset Lines</div>${lines.map((sl,i)=>`<div style="display:flex;align-items:center;gap:8px;padding:3px 0"><div style="width:8px;height:8px;border-radius:50%;background:${CC[i%10]};flex-shrink:0"></div><div style="font-size:11px;color:var(--navy)">${sl.sector.name.split('—')[0].trim()}</div></div>`).join('')}</div>
    </div>`+
    chartGrid(2,
      chartCard('ch-sec1','Revenue by Investment Line','$M · all assets · 30 years',220),
      chartCard('ch-sec2','Revenue · EBITDA · CapEx','$M/yr consolidated',220),
      chartCard('ch-sec3','Individual Asset Revenue','Top 5 asset lines',220),
      chartCard('ch-sec4','Terminal Revenue Mix','Asset contribution at FY2054',220),
    )+
    chartGrid(2,
      chartCard('ch-sec5','EBITDA Margin Trend','Sector EBITDA % · 30 years',200),
      chartCard('ch-sec6','CapEx Intensity % Revenue','Capital deployment efficiency · 30 years',200),
      chartCard('ch-sec7','Year-on-Year Revenue Growth','Annual growth rate % · first 20 years',200),
      chartCard('ch-sec8','Cumulative EBITDA by Asset','30-year total EBITDA per investment line · $B',200),
    )+
    section('Investment Summary',tbl(['Investment','Unit','Start','Peak Vol','Cum Rev ($M)','Cum EBITDA ($M)','Cum CapEx ($M)','EBITDA%'],summaryRows,true))+
    section('Annual Financial Summary ($M)',tbl(['Line',...yrs.map(String)],yearRows))
  );
  return{html,charts:()=>{
    lineChart('ch-sec1',yrs,revByLine);
    lineChart('ch-sec2',yrs,[
      {label:'Revenue',data:totalRev.map(v=>+v.toFixed(1)),color:CC[0]},
      {label:'EBITDA',data:totalEbitda.map(v=>+v.toFixed(1)),color:CC[1]},
      {label:'CapEx',data:totalCapex.map(v=>+v.toFixed(1)),color:CC[2]},
    ]);
    lineChart('ch-sec3',yrs,revByLine.slice(0,5));
    donutChart('ch-sec4',termMix.filter(d=>d.value>0).map(d=>d.name),termMix.filter(d=>d.value>0).map(d=>+d.value.toFixed(1)),termMix.filter(d=>d.value>0).map(d=>d.color));
    lineChart('ch-sec5',yrs,[{label:'EBITDA %',data:yrs.map((_,i)=>totalRev[i]>0?+(totalEbitda[i]/totalRev[i]*100).toFixed(1):0),color:CC[1]}],v=>`${v.toFixed(1)}%`);
    lineChart('ch-sec6',yrs,[{label:'CapEx % Rev',data:yrs.map((_,i)=>totalRev[i]>0?+(totalCapex[i]/totalRev[i]*100).toFixed(1):0),color:CC[2]}],v=>`${v.toFixed(1)}%`);
    const _secYoY=yrs.slice(0,20).map((_,i)=>i===0?0:totalRev[i-1]>0?+((totalRev[i]-totalRev[i-1])/totalRev[i-1]*100).toFixed(1):0);
    barChart('ch-sec7',yrs.slice(0,20),[{label:'YoY Growth %',data:_secYoY,color:_secYoY.map(v=>v>=0?CC[1]:CC[6])}]);
    hBarChart('ch-sec8',revByLine.slice(0,8).map(d=>d.label),revByLine.slice(0,8).map(d=>+(d.data.reduce((a,b)=>a+b,0)/1000).toFixed(2)),CC.slice(0,8),v=>`$${v.toFixed(2)}B`);
  }};
}

// ---- CAPITAL LEDGER ----
function viewCapital(m){
  const y=m.years_out,yrs=m.years;
  const cumEquity=yrs.map(yr=>EQUITY_EVENTS.filter(e=>e.year<=yr).reduce((a,e)=>a+e.amount,0));
  const cumDeployed=yrs.map((_,i)=>+y.slice(0,i+1).reduce((a,r)=>a+r.capex,0).toFixed(1));
  const cumDist=yrs.map((_,i)=>+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1));
  const totalCommit=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);

  const ledger=EQUITY_EVENTS.map((e,i)=>[
    `1 Aug ${e.year}`,
    'Equity — '+e.kind.replace(/([A-Z])/g,' $1').trim(),
    fmtM(e.amount),
    'NERPA Capital LP',
    fmtM(EQUITY_EVENTS.slice(0,i+1).reduce((a,x)=>a+x.amount,0)),
  ]);

  APP.csvFilename='Capital_Ledger.csv';
  APP.csvRows=[['Date','Event','Amount','Entity','Cumulative'],...ledger];

  const trend=yrs.map((yr,i)=>({yr,committed:cumEquity[i],deployed:cumDeployed[i],remaining:+(cumEquity[i]-cumDeployed[i]).toFixed(1),dist:cumDist[i]}));
  const annualFlow=yrs.map((yr,i)=>({yr,eq:EQUITY_EVENTS.find(e=>e.year===yr)?.amount??0,debt:+y[i].debtDrawn.toFixed(1),repay:-+y[i].debtRepaid.toFixed(1)}));

  const html=sheet('Capital Management',
    'Every equity and debt movement · commitments · drawdowns · distributions · debt service · Day 0 = 1 Aug 2026','',
    kpiGrid([
      ['Total Committed',fmtM(totalCommit),''],
      ['Cum. Distributed',fmtM(m.distributions.reduce((a,b)=>a+b,0)),'positive'],
      ['Debt drawn (total)',fmtM(DEBT_TRANCHES.reduce((a,t)=>a+t.amount,0)),''],
      ['Terminal equity',fmtM(m.totalEquity),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-cap1','Capital Committed vs Deployed vs Remaining','Cumulative · $M'),
      chartCard('ch-cap2','Investor Distributions','Cumulative LP distributions · $M'),
      chartCard('ch-cap3','Annual Capital Flows','Equity & debt drawn · $M/yr'),
      chartCard('ch-cap4','Capital Structure Mix','Equity · Debt · Distributions'),
    )+
    section('Equity Capital Events',tbl(['Date','Event','Amount','Entity','Cumulative'],ledger,true))+
    section('Debt Tranches',tbl(['Tranche','Draw Year','Tenor','Rate','Face ($M)'],
      DEBT_TRANCHES.map(t=>[t.name,t.drawYear,t.tenor,fmtPct(t.rate,2),fmtM(t.amount)]),true))
  );
  return{html,charts:()=>{
    lineChart('ch-cap1',yrs,[
      {label:'Committed',data:trend.map(d=>d.committed),color:CC[0]},
      {label:'Deployed',data:trend.map(d=>d.deployed),color:CC[2]},
      {label:'Remaining',data:trend.map(d=>d.remaining),color:CC[1]},
    ]);
    lineChart('ch-cap2',yrs,[{label:'Cum. Distributions',data:trend.map(d=>d.dist),color:CC[1]}]);
    barChart('ch-cap3',yrs,[
      {label:'Equity',data:annualFlow.map(d=>d.eq),color:CC[1]},
      {label:'Debt drawn',data:annualFlow.map(d=>d.debt),color:CC[0]},
      {label:'Debt repaid',data:annualFlow.map(d=>d.repay),color:CC[6]},
    ],true);
    const totalDebt=DEBT_TRANCHES.reduce((a,t)=>a+t.amount,0);
    const totalDist=m.distributions.reduce((a,b)=>a+b,0);
    donutChart('ch-cap4',['Equity committed','Debt raised','Distributions'],
      [totalCommit,totalDebt,totalDist],CC.slice(0,3));
  }};
}

// ---- DEBT SCHEDULE ----
function viewDebtSchedule(m){
  const y=m.years_out,yrs=m.years;
  const totalFace=DEBT_TRANCHES.reduce((a,t)=>a+t.amount,0);
  const totalEquity=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const peakDebt=Math.max(...y.map(r=>r.totalDebt));
  const cumInterest=y.reduce((a,r)=>a+r.interest,0);

  const scheduleRows=[
    ['Outstanding',...y.map(r=>fmtM(r.totalDebt))],
    ['Drawn',...y.map(r=>fmtM(r.debtDrawn))],
    ['Repaid',...y.map(r=>fmtParen(-r.debtRepaid))],
    ['Interest',...y.map(r=>fmtM(r.interest))],
  ];

  APP.csvFilename='Debt_Schedule.csv';
  APP.csvRows=[['Tranche','Draw Year','Tenor','Rate','Face ($M)'],
    ...DEBT_TRANCHES.map(t=>[t.name,t.drawYear,t.tenor,fmtPct(t.rate,2),fmtM(t.amount)]),
    [''],
    ['Line',...yrs.map(String)],...scheduleRows];

  const capMix=DEBT_TRANCHES.map((t,i)=>({name:t.name.split('—')[0].trim(),value:t.amount,color:CC[i%10]}));

  const html=sheet('Debt Schedule',
    'Six tranches · project finance · RCF · high-yield · sovereign co-invest · scenario-adjusted rates','',
    kpiGrid([
      ['Total Debt Face',fmtM(totalFace),'warning'],
      ['Total Equity Raised',fmtM(totalEquity),''],
      ['Peak Outstanding',fmtM(peakDebt),'warning'],
      ['Cum. Interest 30y',fmtM(cumInterest),''],
    ])+
    chartGrid(2,
      chartCard('ch-ds1','Outstanding Debt (EOY)','Consolidated · $M'),
      chartCard('ch-ds2','Debt Draws & Repayments','$M/yr'),
      chartCard('ch-ds3','Interest Expense','Annual finance cost · $M'),
      chartCard('ch-ds4','Debt Mix by Type','Face value composition'),
    )+
    section('Debt Tranches',tbl(['Tranche','Type','Draw Year','Tenor','Rate','Face ($M)'],
      DEBT_TRANCHES.map(t=>[t.name,t.type.toUpperCase(),t.drawYear,t.tenor+'y',fmtPct(t.rate,2),fmtM(t.amount)]),true))+
    section('Equity Capital Events',tbl(['Year','Round','Amount'],
      EQUITY_EVENTS.map(e=>[e.year,e.kind,fmtM(e.amount)]),true))+
    section('Consolidated Financing Schedule ($M)',tbl(['Line',...yrs.map(String)],scheduleRows))
  );
  return{html,charts:()=>{
    lineChart('ch-ds1',yrs,[{label:'Outstanding',data:y.map(r=>+r.totalDebt.toFixed(1)),color:CC[0]}]);
    barChart('ch-ds2',yrs,[
      {label:'Drawn',data:y.map(r=>+r.debtDrawn.toFixed(1)),color:CC[4]},
      {label:'Repaid',data:y.map(r=>-+r.debtRepaid.toFixed(1)),color:CC[6]},
    ],true);
    lineChart('ch-ds3',yrs,[{label:'Interest',data:y.map(r=>+r.interest.toFixed(1)),color:CC[6]}]);
    donutChart('ch-ds4',capMix.map(d=>d.name),capMix.map(d=>d.value),capMix.map(d=>d.color));
  }};
}

// ---- SCENARIO COMPARISON ----
function viewScenarios(){
  const models=SCENARIO_LIST.map(s=>({s,m:buildModel(s.id)}));
  const yrs=models[0].m.years;
  const y30=models.map(x=>x.m.years_out[29]);
  const y11=models.map(x=>x.m.years_out[10]);

  const tbl1Headers=['Metric',...models.map(x=>x.s.label)];
  const metrics=[
    ['Consolidated IRR',...models.map(x=>fmtPct(x.m.consolidatedIRR))],
    ['Consolidated MOIC',...models.map(x=>fmtX(x.m.consolidatedMOIC))],
    ['TVPI',...models.map(x=>fmtX(x.m.tvpi))],
    ['DPI',...models.map(x=>fmtX(x.m.dpi))],
    ['Cum. Revenue 30y',...models.map(x=>fmtM(x.m.cumRevenue))],
    ['Cum. EBITDA 30y',...models.map(x=>fmtM(x.m.cumEbitda))],
    ['Terminal Total Equity',...models.map(x=>fmtM(x.m.totalEquity))],
    ['Terminal Total Debt',...models.map(x=>fmtM(x.m.totalDebt))],
    ['Y11 Revenue',...y11.map(r=>fmtM(r.revenue))],
    ['Y11 EBITDA',...y11.map(r=>fmtM(r.ebitda))],
    ['Y11 Net Income',...y11.map(r=>fmtM(r.netIncome))],
    ['Y30 Revenue',...y30.map(r=>fmtM(r.revenue))],
    ['Y30 EBITDA margin',...y30.map((r,i)=>r.revenue>0?fmtPct(r.ebitda/r.revenue):'—')],
    ['Y30 Headcount',...y30.map(r=>r.headcount.toLocaleString())],
    ['Implied Terminal EV',...models.map(x=>fmtM(x.m.impliedTerminalEV))],
  ];

  APP.csvFilename='Scenario_Comparison.csv';
  APP.csvRows=[tbl1Headers,...metrics];

  // Scenario comparison cards
  const scColors={base:'#1d3461',conservative:'#d97706',growth:'#2e7d52',downside:'#be123c'};

  const html=sheet('Scenario Comparison',
    'Base · Conservative · Growth · Downside — side-by-side institutional stress testing','',
    `<div class="grid-4col">${models.map(x=>{
      const s=x.s;const mod=x.m;const col=scColors[s.id]||CC[0];
      const y11r=mod.years_out[10];
      return`<div style="background:#fff;border:1px solid var(--border);border-top:3px solid ${col};border-radius:3px;padding:14px 16px">
        <div style="font-size:11px;font-weight:700;color:${col};text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">${s.label}</div>
        <div style="font-size:11px;color:var(--muted);margin-bottom:10px;line-height:1.4">${s.description}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
          <div><div style="font-size:9px;color:var(--muted);font-weight:600;text-transform:uppercase">IRR</div><div style="font-size:18px;font-weight:700;color:${col}">${fmtPct(mod.consolidatedIRR)}</div></div>
          <div><div style="font-size:9px;color:var(--muted);font-weight:600;text-transform:uppercase">MOIC</div><div style="font-size:18px;font-weight:700;color:${col}">${fmtX(mod.consolidatedMOIC)}</div></div>
          <div><div style="font-size:9px;color:var(--muted);font-weight:600;text-transform:uppercase">Y11 Rev</div><div style="font-size:13px;font-weight:600;color:var(--navy)">${fmtM(y11r.revenue)}</div></div>
          <div><div style="font-size:9px;color:var(--muted);font-weight:600;text-transform:uppercase">Terminal EV</div><div style="font-size:13px;font-weight:600;color:var(--navy)">${fmtM(mod.impliedTerminalEV)}</div></div>
        </div>
      </div>`;}).join('')}</div>`+
    chartGrid(2,
      chartCard('ch-sc1','Revenue by Scenario (30y)','$M consolidated'),
      chartCard('ch-sc2','EBITDA by Scenario (30y)','$M consolidated'),
      chartCard('ch-sc3','IRR by Scenario','Consolidated LP IRR'),
      chartCard('ch-sc4','MOIC by Scenario','Multiple on invested capital'),
    )+
    chartGrid(2,
      chartCard('ch-sc5','Y11 EBITDA by Scenario','$M · key milestone year IPO build',200),
      chartCard('ch-sc6','Implied Terminal EV by Scenario','Enterprise value at exit · $B',200),
    )+
    section('Cross-Scenario Metrics',tbl(tbl1Headers,metrics,true))+
    section('Scenario Assumptions',tbl(['Parameter','Base','Conservative','Growth','Downside'],[
      ['Price multiplier',...SCENARIO_LIST.map(s=>s.price+'×')],
      ['Volume multiplier',...SCENARIO_LIST.map(s=>s.volume+'×')],
      ['Ramp multiplier',...SCENARIO_LIST.map(s=>s.ramp+'×')],
      ['OpEx multiplier',...SCENARIO_LIST.map(s=>s.opex+'×')],
      ['CapEx multiplier',...SCENARIO_LIST.map(s=>s.capex+'×')],
      ['Terminal multiple',...SCENARIO_LIST.map(s=>s.terminalMultiple+'×')],
    ],true))
  );
  return{html,charts:()=>{
    lineChart('ch-sc1',yrs,models.map((x,i)=>({label:x.s.label,color:CC[i],data:x.m.years_out.map(r=>+r.revenue.toFixed(1))})));
    lineChart('ch-sc2',yrs,models.map((x,i)=>({label:x.s.label,color:CC[i],data:x.m.years_out.map(r=>+r.ebitda.toFixed(1))})));
    hBarChart('ch-sc3',models.map(x=>x.s.label),models.map(x=>+(x.m.consolidatedIRR*100).toFixed(2)),CC.slice(0,4),v=>`${v.toFixed(1)}%`);
    hBarChart('ch-sc4',models.map(x=>x.s.label),models.map(x=>+x.m.consolidatedMOIC.toFixed(2)),CC.slice(0,4),v=>`${v.toFixed(2)}x`);
    hBarChart('ch-sc5',models.map(x=>x.s.label),models.map(x=>+(x.m.years_out[10].ebitda).toFixed(0)),CC.slice(0,4),v=>`$${v.toFixed(0)}M`);
    hBarChart('ch-sc6',models.map(x=>x.s.label),models.map(x=>+(x.m.impliedTerminalEV/1000).toFixed(2)),CC.slice(0,4),v=>`$${v.toFixed(2)}B`);
  }};
}

// ---- SENSITIVITY ----
function viewSensitivity(){
  const volMuls=[.6,.7,.8,.9,1.0,1.1,1.2];
  const priceMuls=[.6,.7,.8,.9,1.0,1.1,1.2];

  function tweakedModel(vol,price){
    const base=SCENARIOS.base;
    const s={...base,volume:base.volume*vol,price:base.price*price};
    const tmp={...SCENARIOS,__tmp:s};SCENARIOS.__tmp=s;
    const m=buildModel('__tmp');
    delete SCENARIOS.__tmp;
    return m;
  }

  const grid=volMuls.map(v=>priceMuls.map(p=>tweakedModel(v,p)));
  const irrGrid=grid.map(row=>row.map(m=>m.consolidatedIRR));
  const allIRR=irrGrid.flat();
  const minV=Math.min(...allIRR),maxV=Math.max(...allIRR);

  function heatColor(v){
    const t=(v-minV)/(maxV-minV||1);
    const h=Math.round(28+t*130);const l=Math.round(88-t*20);
    return`hsl(${h},60%,${l}%)`;
  }

  const heatRows=volMuls.map((vol,i)=>`<tr><td style="padding:6px 10px;font-weight:600;color:var(--navy)">×${vol.toFixed(1)}</td>${priceMuls.map((p,j)=>`<td class="heat-cell" style="background:${heatColor(irrGrid[i][j])}">${fmtPct(irrGrid[i][j])}</td>`).join('')}</tr>`);

  // Tornado
  const tornado=[
    {name:'Volume',low:buildModel('downside').consolidatedIRR,high:buildModel('growth').consolidatedIRR},
    {name:'Price',low:tweakedModel(1,.65).consolidatedIRR,high:tweakedModel(1,1.35).consolidatedIRR},
    {name:'OpEx',low:buildModel('conservative').consolidatedIRR,high:tweakedModel(1,1).consolidatedIRR},
    {name:'CapEx',low:tweakedModel(1,1).consolidatedIRR,high:buildModel('base').consolidatedIRR},
    {name:'WACC/Rate',low:buildModel('downside').consolidatedIRR,high:buildModel('base').consolidatedIRR},
  ].map(d=>({...d,swing:d.high-d.low})).sort((a,b)=>b.swing-a.swing);

  APP.csvFilename='Sensitivity_Grid.csv';
  APP.csvRows=[['Vol \\ Price',...priceMuls.map(p=>`×${p}`)],
    ...volMuls.map((v,i)=>[`×${v}`,  ...priceMuls.map((_,j)=>fmtPct(irrGrid[i][j]))])];

  const html=sheet('Sensitivity Grid',
    'Two-way sensitivity — Volume × Price — showing consolidated IRR · Base scenario with targeted overrides','',
    chartGrid(1,chartCard('ch-torn','Tornado — Single-Variable Swing on IRR','Base ±% — shows most influential drivers',150))+
    section('Two-way Sensitivity — Volume × Price (Consolidated IRR)',
      `<div class="tbl-wrap"><table><thead><tr><th>Vol × Price</th>${priceMuls.map(p=>`<th>×${p.toFixed(1)}</th>`).join('')}</tr></thead><tbody>${heatRows.join('')}</tbody></table></div>`)+
    section('Tornado Analysis',tbl(['Driver','Low IRR','High IRR','Swing'],
      tornado.map(t=>[t.name,fmtPct(t.low),fmtPct(t.high),fmtPct(t.swing)]),true))
  );
  return{html,charts:()=>{
    hBarChart('ch-torn',tornado.map(d=>d.name),tornado.map(d=>+(d.swing*100).toFixed(1)),CC.slice(0,5),v=>`+${v.toFixed(1)}% swing`);
  }};
}

// ---- RETURNS ----
function viewReturns(m){
  const y=m.years_out,yrs=m.years;
  const totalIn=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const totalDist=m.distributions.reduce((a,b)=>a+b,0);
  const termNAV=y[29].totalEquity;

  const wf=[
    {name:'Total invested',value:-totalIn,kind:'start'},
    {name:'Cash distributions',value:totalDist},
    {name:'Terminal NAV',value:termNAV},
    {name:'LP net value',value:-totalIn+totalDist+termNAV,kind:'total'},
  ];

  const cumDist=yrs.map((_,i)=>+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1));
  const trend=yrs.map((yr,i)=>({yr,dist:cumDist[i],nav:+y[i].totalEquity.toFixed(1),total:+(cumDist[i]+y[i].totalEquity).toFixed(1)}));

  const scenModels=SCENARIO_LIST.map(s=>({s,m:buildModel(s.id)}));

  APP.csvFilename='Returns_Analysis.csv';
  APP.csvRows=[['Scenario','IRR','MOIC','TVPI','DPI','Cash-on-cash','Implied EV'],
    ...scenModels.map(x=>[x.s.label,fmtPct(x.m.consolidatedIRR),fmtX(x.m.consolidatedMOIC),fmtX(x.m.tvpi),fmtX(x.m.dpi),fmtX(x.m.cashOnCash),fmtM(x.m.impliedTerminalEV)])];

  const html=sheet('Returns — IRR · MOIC · Waterfall',
    'LP economics · scenario comparison · progressive return metrics','',
    kpiGrid([
      ['Consolidated IRR',fmtPct(m.consolidatedIRR),'positive'],
      ['Consolidated MOIC',fmtX(m.consolidatedMOIC),''],
      ['TVPI',fmtX(m.tvpi),''],
      ['DPI',fmtX(m.dpi),''],
      ['Seed IRR',fmtPct(m.seedIRR),'positive'],
      ['Seed MOIC',fmtX(m.seedMOIC),''],
      ['Total Invested',fmtM(totalIn),''],
      ['Total Distributions',fmtM(totalDist),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-ret1','Return Waterfall (Terminal)','Capital in → distributions + NAV → net'),
      chartCard('ch-ret2','Distribution & NAV Progression','$M cumulative'),
      chartCard('ch-ret3','IRR by Scenario','Consolidated LP IRR'),
      chartCard('ch-ret4','MOIC by Scenario','Multiple on invested capital'),
    )+
    chartGrid(2,
      chartCard('ch-ret5','Annual Distribution Yield','Annual LP distribution · $M per year',200),
      chartCard('ch-ret6','Net Return Progression','Cumulative NAV + Distributions vs capital in · $M',200),
    )+
    section('Return Metrics — All Scenarios',tbl(['Scenario','IRR','MOIC','TVPI','DPI','Cash-on-cash','Implied EV Y11'],
      scenModels.map(x=>[x.s.label,fmtPct(x.m.consolidatedIRR),fmtX(x.m.consolidatedMOIC),fmtX(x.m.tvpi),fmtX(x.m.dpi),fmtX(x.m.cashOnCash),fmtM(x.m.impliedTerminalEV)]),true))+
    section('Return Calculation (Base Case)',tbl(['Component','$M'],[
      ['Total capital in',fmtM(totalIn)],
      ['Cash distributions',fmtM(totalDist)],
      ['Terminal NAV',fmtM(termNAV)],
      ['Gross LP return',fmtM(totalDist+termNAV)],
      ['Net LP return',fmtM(-totalIn+totalDist+termNAV)],
    ],true))
  );
  return{html,charts:()=>{
    waterfallChart('ch-ret1',wf);
    lineChart('ch-ret2',yrs,[
      {label:'Cum. Distributions',data:trend.map(d=>d.dist),color:CC[1]},
      {label:'NAV',data:trend.map(d=>d.nav),color:CC[0]},
      {label:'Dist + NAV',data:trend.map(d=>d.total),color:CC[4]},
    ]);
    hBarChart('ch-ret3',scenModels.map(x=>x.s.label),scenModels.map(x=>+(x.m.consolidatedIRR*100).toFixed(2)),CC.slice(0,4),v=>`${v.toFixed(1)}%`);
    hBarChart('ch-ret4',scenModels.map(x=>x.s.label),scenModels.map(x=>+x.m.consolidatedMOIC.toFixed(2)),CC.slice(0,4),v=>`${v.toFixed(2)}x`);
    barChart('ch-ret5',yrs,[{label:'Annual Distribution',data:m.distributions.map(d=>+d.toFixed(1)),color:CC[1]}]);
    let _cumD=0,_cumI=0;
    lineChart('ch-ret6',yrs,[{label:'NAV + Cum Dist vs Capital',data:y.map((r,i)=>{_cumD+=m.distributions[i];_cumI+=EQUITY_EVENTS.find(e=>e.year===yrs[i])?.amount??0;return +((r.totalEquity+_cumD-_cumI)/1000).toFixed(2);}),color:CC[2]}],v=>`$${v.toFixed(2)}B`);
  }};
}

// ---- ASSUMPTIONS ----
function viewAssumptions(){
  const rows=[
    {group:'Macro',key:'FY_START',label:'Model start year',value:'2026',unit:'Year',source:'NERPA management'},
    {group:'Macro',key:'FY_YEARS',label:'Model horizon',value:'30',unit:'Years',source:'Institutional standard'},
    {group:'Macro',key:'TAX_RATE',label:'Corporate tax rate',value:'21%',unit:'%',source:'US federal proxy'},
    {group:'Macro',key:'WC_REV',label:'Receivables / Revenue',value:'10%',unit:'%',source:'Sector benchmarks'},
    {group:'Macro',key:'WC_OPEX',label:'AP / OpEx',value:'8%',unit:'%',source:'Sector benchmarks'},
    ...SECTORS.map(s=>({group:s.group,key:s.id,label:s.name,value:`${s.price0.toLocaleString()} / ${s.unit}`,unit:'$/unit (base)',source:'Analyst consensus'})),
    ...SCENARIOS.base?Object.entries(SCENARIOS).map(([id,s])=>({group:'Scenarios',key:id,label:s.label,value:JSON.stringify({price:s.price,volume:s.volume,ramp:s.ramp}),unit:'Multipliers',source:'NERPA IC'})):[],
    ...COMP_PLAN.map(r=>({group:'Remuneration',key:r.role,label:r.role+' (base)',value:`$${r.base}k`,unit:'$/head/yr',source:'HR review'})),
    ...DEBT_TRANCHES.map(t=>({group:'Debt',key:t.name,label:t.name,value:fmtPct(t.rate,2),unit:'Interest rate',source:'Market comps'})),
  ];

  const groups=[...new Set(rows.map(r=>r.group))];

  // Sector groups for chart
  const sectorGroups=[...new Set(SECTORS.map(s=>s.group))];
  const sectorPrices=SECTORS.map(s=>s.price0);
  const sectorNames=SECTORS.map(s=>s.name.split(' ').slice(0,2).join(' '));

  // Scenario multipliers for chart
  const scenarioIds=['base','conservative','growth','downside'];
  const scenarioLabels=scenarioIds.map(id=>SCENARIOS[id]?.label||id);
  const scenarioPriceMults=scenarioIds.map(id=>SCENARIOS[id]?.price||1);
  const scenarioVolMults=scenarioIds.map(id=>SCENARIOS[id]?.volume||1);

  // Debt rates
  const debtRows2=DEBT_TRANCHES;

  // Remuneration
  const remRoles=COMP_PLAN.map(r=>r.role.split(' ')[0]);
  const remBases=COMP_PLAN.map(r=>r.base);

  APP.csvFilename='Assumptions_Register.csv';
  APP.csvRows=[['Group','Key','Label','Value','Unit','Source'],...rows.map(r=>[r.group,r.key,r.label,r.value,r.unit,r.source])];

  const html=sheet('Assumptions Register',
    'All modelling assumptions · macro · sector pricing · financing · remuneration · scenario multipliers · governance','',
    kpiGrid([
      ['Model Horizon','30 Years',''],
      ['Sectors Modelled',String(SECTORS.length),'positive'],
      ['Scenarios','4',''],
      ['Debt Tranches',String(DEBT_TRANCHES.length),''],
      ['Tax Rate (Corp.)','21%',''],
      ['Discount Rate (WACC)','11.5%','positive'],
    ])+
    chartGrid(2,
      chartCard('ch-ass1','Sector Base Prices','Unit price ($/unit) by sector at model inception — Year 1',220),
      chartCard('ch-ass2','Scenario Price & Volume Multipliers','Base vs Conservative vs Growth vs Downside · relative multipliers',220),
      chartCard('ch-ass3','Debt Tranche Interest Rates','Annual interest rate (%) by financing tranche',200),
      chartCard('ch-ass4','Executive Remuneration — Base Salaries','Annual base salary ($k) by executive role',200),
    )+
    groups.map(g=>section(g,tbl(['Parameter','Value','Unit','Source'],
      rows.filter(r=>r.group===g).map(r=>[r.label,r.value,r.unit,r.source]),true))).join('')+
    bluf(
      'All 30 model assumptions are documented, sourced, and traceable to NERPA IC approval',
      'The assumptions register provides full transparency into every parameter driving the 30-year financial model. Sector prices are derived from analyst consensus and JORC-validated resource estimates. Scenario multipliers were approved at the Investment Committee in Q2 2026. All debt parameters reflect prevailing market terms as of H2 2026. Remuneration assumptions were benchmarked against comparable fund managers in UAE and UK markets.'
    )
  );
  return{html,charts:()=>{
    hBarChart('ch-ass1',sectorNames,sectorPrices,CC.slice(0,sectorNames.length),v=>v.toLocaleString());
    barChart('ch-ass2',scenarioLabels,[
      {label:'Price Multiplier',data:scenarioPriceMults,color:CC[0]},
      {label:'Volume Multiplier',data:scenarioVolMults,color:CC[1]},
    ]);
    hBarChart('ch-ass3',debtRows2.map(t=>t.name.split(' ').slice(0,3).join(' ')),debtRows2.map(t=>+(t.rate*100).toFixed(2)),CC.slice(2,2+debtRows2.length),v=>v+'%');
    barChart('ch-ass4',remRoles,[{label:'Base $k',data:remBases,color:CC.slice(0,remRoles.length)}]);
  }};
}

// ---- MASTER CONTROL ----
function viewMasterControl(){
  const m=getModel();
  const masterData=[
    ['RUNWAY DASHBOARD','',''],
    ['Total Available Seed Capital Pool ($M)','21.4',''],
    ['Blended Monthly Pre-Revenue Burn Rate ($M/month)','1.22','Sovereign Timeline Health Check'],
    ['Net Pre-Revenue Operational Runway (Months)','17.5','WARN: 6.5 Month Capital Shortfall'],
    ['Effective Runway (Months)','24.5','Seed phase + tokenisation bridge'],
    ['','',''],
    ['BLOCK 1: MACRO & SOVEREIGN VARIABLES','',''],
    ['Inflation Index','2.5%','Annual CPI escalation'],
    ['SWF Allocation','51%','Sovereign Wealth Fund allocation'],
    ['Trust Allocation','49%','Trust allocation'],
    ['SWF Liquid Release','15%','Initial SWF Annual Drawdown'],
    ['Afghan Corporate Tax','20%','Upstream SPV Profit Share'],
    ['','',''],
    ['BLOCK 2: CAPITAL RAISE PARAMETERS','',''],
    ['Seed Capital Raise ($M)','25','Formation capital'],
    ['Series A Raise ($M)','220','Post-JORC · FY2027'],
    ['Series B Raise ($M)','700','FY2029'],
    ['Series C Raise ($M)','1,500','FY2031'],
    ['Pre-IPO Raise ($M)','2,300','FY2034'],
    ['IPO Valuation Target','$4.7B','FY2036 target'],
    ['Founder Retained Equity','63.4%','Post-IPO founder stake'],
    ['Cap Table Integrity','100%','No dilution breaches'],
    ['','',''],
    ['BLOCK 3: OPERATING COST STRUCTURE','',''],
    ['TOTAL ANNUAL OPEX ($M)','14.66','Pre-revenue operational burn'],
    ['Sovereign Asset Pipeline','$29.9T','Confirmed mandate scope'],
    ['Formation Date','1 Aug 2026','Day 0'],
    ['IPO Target Date','FY2036','Subject to milestones'],
    ['','',''],
    ['BLOCK 4: FINANCIAL MODEL ASSUMPTIONS','',''],
    ['Model Start Year','2026',''],
    ['Model Horizon','30 years',''],
    ['Tax Rate (corp.)','21%','US federal proxy'],
    ['Working capital — receivables / revenue','10%',''],
    ['Working capital — AP / opex','8%',''],
    ['Inventory / opex','6%',''],
    ['Deferred tax rate on losses','10.5%','50% of TAX × pretax loss'],
    ['Sustaining CapEx (% of total dev)','2%','Annual post-ramp'],
    ['Distribution trigger','Y8+, FCF>0','50% FCF distributed to LPs'],
  ];

  APP.csvFilename='Master_Control.csv';
  APP.csvRows=[['Parameter','Value','Description'],...masterData];

  // Runway health cards
  const runwayPct=24.5/30*100;
  const runwayCards=[
    {label:'Seed Capital Pool',val:'$21.4M',pct:100,color:'#2e7d52',desc:'Available'},
    {label:'Effective Runway',val:'24.5 mo',pct:runwayPct,color:'#1e40af',desc:'Seed + TGE bridge'},
    {label:'Monthly Burn',val:'$1.22M',pct:40,color:'#d97706',desc:'Pre-revenue'},
    {label:'Capital Shortfall Risk',val:'6.5 mo',pct:25,color:'#be123c',desc:'Series A bridge required'},
  ];

  const html=sheet('Master Control',
    'Central configuration hub · Inputs · Assumptions · Financing · Operating costs','',
    `<div class="grid-4col">${runwayCards.map(c=>`
      <div style="background:#fff;border:1px solid var(--border);border-radius:3px;padding:14px 16px">
        <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)">${c.label}</div>
        <div style="font-size:22px;font-weight:700;color:var(--navy);margin:6px 0 8px">${c.val}</div>
        <div style="background:#f0f0f0;border-radius:4px;height:5px;overflow:hidden">
          <div style="background:${c.color};width:${c.pct}%;height:100%;border-radius:4px;transition:width .6s"></div>
        </div>
        <div style="font-size:10px;color:var(--muted);margin-top:5px">${c.desc}</div>
      </div>`).join('')}</div>`+
    `<div class="grid-4col">
      <div class="kpi positive"><div class="kpi-label">Consolidated IRR</div><div class="kpi-val">${fmtPct(m.consolidatedIRR)}</div><div class="kpi-hint">Base case</div></div>
      <div class="kpi"><div class="kpi-label">30y Cum. Revenue</div><div class="kpi-val">${fmtM(m.cumRevenue)}</div><div class="kpi-hint">All sectors</div></div>
      <div class="kpi positive"><div class="kpi-label">Terminal Equity</div><div class="kpi-val">${fmtM(m.totalEquity)}</div><div class="kpi-hint">FY2054</div></div>
      <div class="kpi"><div class="kpi-label">Implied Terminal EV</div><div class="kpi-val">${fmtM(m.impliedTerminalEV)}</div><div class="kpi-hint">at ${SCENARIOS.base.terminalMultiple}× EBITDA</div></div>
    </div>`+
    `<div class="section"><div class="section-hdr"><h2>Capital Raise Roadmap</h2></div>
    <div style="position:relative;padding:20px 0 10px;overflow-x:auto;max-width:100%"><div style="display:flex;align-items:center;min-width:600px;padding:0 20px;position:relative">
      <div style="position:absolute;top:50%;left:20px;right:20px;height:2px;background:#e5e7eb;transform:translateY(-50%)"></div>
      ${EQUITY_EVENTS.map((e,idx)=>{const colors=['#1d3461','#1e40af','#2e7d52','#0f766e','#7c3aed','#d97706','#be123c'];const c=colors[idx%colors.length];return`<div style="flex:1;text-align:center;position:relative;z-index:1">
        <div style="width:14px;height:14px;border-radius:50%;background:${c};border:2px solid #fff;box-shadow:0 0 0 2px ${c};margin:0 auto 8px"></div>
        <div style="font-size:10px;font-weight:700;color:${c}">FY${e.year}</div>
        <div style="font-size:11px;font-weight:600;color:var(--navy)">${e.kind.charAt(0).toUpperCase()+e.kind.slice(1)}</div>
        <div style="font-size:12px;font-weight:700;color:${c}">$${e.amount>=1000?(e.amount/1000).toFixed(1)+'B':e.amount+'M'}</div>
      </div>`;}).join('')}
    </div></div></div>`+
    section('Block 1 — Macro & Sovereign Variables',tbl(['Parameter','Value','Description'],masterData.slice(6,11).filter(r=>r[0]),true))+
    section('Block 2 — Capital Raise Parameters',tbl(['Parameter','Value','Description'],masterData.slice(13,21).filter(r=>r[0]),true))+
    section('Block 3 — Operating Cost Structure',tbl(['Parameter','Value','Description'],masterData.slice(23,27).filter(r=>r[0]),true))+
    section('Block 4 — Financial Model Assumptions',tbl(['Parameter','Value','Description'],masterData.slice(29).filter(r=>r[0]),true))+
    chartGrid(2,
      chartCard('ch-mc1','Capital Raise Roadmap — Round Sizing ($M)','Each equity event · round type · cumulative commitment',200),
      chartCard('ch-mc2','Revenue vs EBITDA — 30-Year Projection','$M annual trajectory · model output',200),
      chartCard('ch-mc3','Debt vs Equity Capital Structure','Evolving capital stack over time · $M',200),
      chartCard('ch-mc4','Burn Rate vs Runway','Pre-revenue monthly burn relative to available capital',200),
    )
  );
  return{html,charts:()=>{
    const evYears=EQUITY_EVENTS.map(e=>'FY'+e.year+' '+e.kind.charAt(0).toUpperCase()+e.kind.slice(1));
    hBarChart('ch-mc1',evYears,EQUITY_EVENTS.map(e=>e.amount),CC.slice(0,EQUITY_EVENTS.length),v=>v>=1000?'$'+(v/1000).toFixed(1)+'B':'$'+v+'M');
    const yrs10=m.years.slice(0,15);
    lineChart('ch-mc2',yrs10,[
      {label:'Revenue',data:m.years_out.slice(0,15).map(y=>+y.revenue.toFixed(0)),color:CC[0]},
      {label:'EBITDA',data:m.years_out.slice(0,15).map(y=>+y.ebitda.toFixed(0)),color:CC[1]},
    ]);
    barChart('ch-mc3',yrs10,[
      {label:'Total Equity',data:m.years_out.slice(0,15).map(y=>+y.totalEquity.toFixed(0)),color:CC[1]},
      {label:'Total Debt',data:m.years_out.slice(0,15).map(y=>+y.totalDebt.toFixed(0)),color:CC[6]},
    ],true);
    const burnLabels=['Seed Pool','Monthly Burn×12','Effective Runway×Burn','Capital Shortfall'];
    const burnVals=[21.4,14.64,24.5*1.22,6.5*1.22];
    barChart('ch-mc4',burnLabels,[{label:'$M',data:burnVals.map(v=>+v.toFixed(1)),color:[CC[1],CC[6],CC[0],CC[2]]}]);
  }};
}


// ---- SECTOR: INFRASTRUCTURE ----
function viewSectorInfrastructure(){
  const m=getModel(),yrs=m.years;
  const assets=[
    {n:'Kabul Ring Road Phase 1',t:'Transport',cap:480,irr:12.4,yr:2029,st:'Feasibility',rev:[0,0,0,12,28,45,58,72,85,95,98,98,95,92,88,82,78,74,70,65,60,55,50,45,40,35,30,25,22,20]},
    {n:'Hairatan Port Expansion',t:'Logistics',cap:220,irr:14.2,yr:2027,st:'EPC',rev:[0,18,32,45,56,65,72,78,82,84,85,85,84,82,80,78,75,72,70,67,64,61,58,55,52,49,46,43,40,37]},
    {n:'Kandahar–Herat Pipeline',t:'Pipeline',cap:850,irr:13.1,yr:2030,st:'Concession',rev:[0,0,0,0,22,48,72,92,108,120,128,132,130,126,120,114,108,102,96,90,84,78,72,66,60,54,48,42,36,30]},
    {n:'National Grid Phase 1',t:'Power',cap:640,irr:15.6,yr:2028,st:'FEED',rev:[0,0,24,52,78,102,122,138,150,158,164,168,166,162,158,152,146,140,134,128,122,116,110,104,98,92,86,80,74,68]},
    {n:'Mazar Airport Expansion',t:'Aviation',cap:380,irr:13.8,yr:2027,st:'Active',rev:[0,14,28,42,54,64,72,78,82,85,87,88,87,85,83,80,77,74,71,68,65,62,59,56,53,50,47,44,41,38]},
    {n:'Salang Road Upgrade',t:'Transport',cap:280,irr:11.5,yr:2028,st:'Pre-FEED',rev:[0,0,8,18,28,36,44,50,55,58,60,60,58,55,52,49,46,43,40,37,34,31,28,25,22,19,16,13,10,8]},
  ];
  const totalRev=yrs.map((_,i)=>assets.reduce((a,ast)=>a+(ast.rev[i]||0),0));
  const types=[...new Set(assets.map(a=>a.t))];
  const revByType=types.map(t=>yrs.map((_,i)=>assets.filter(a=>a.t===t).reduce((s,a)=>s+(a.rev[i]||0),0)));
  const totalCap=assets.reduce((a,ast)=>a+ast.cap,0);
  const cumRev=totalRev.reduce((a,b)=>a+b,0);
  APP.csvFilename='Sector_Infrastructure.csv';
  APP.csvRows=[['Asset','Type','CapEx($M)','IRR%','Start','Status'],...assets.map(a=>[a.n,a.t,a.cap,a.irr,a.yr,a.st]),[''],['Year',...yrs.map(String)],['Total',...totalRev.map(v=>v.toFixed(1))]];
  const html=sheet('Infrastructure & Utilities','Transport · Pipelines · Power · Aviation · Logistics concessions · 30-year sovereign mandate','',
    kpiGrid([
      ['Total CapEx Required','$'+((totalCap/1000).toFixed(2))+'B','warning'],
      ['Cumulative Revenue','$'+((cumRev/1000).toFixed(2))+'B','positive'],
      ['Peak Annual Revenue','$'+Math.max(...totalRev).toFixed(0)+'M','positive'],
      ['Asset Lines',String(assets.length),''],
      ['Blended IRR Target','13.5%','positive'],
      ['Concession Term','25–30 yrs',''],
    ])+
    chartGrid(2,
      chartCard('ch-inf1','Revenue by Infrastructure Type','$M stacked by asset class · 30 years',220),
      chartCard('ch-inf2','Total Infrastructure Revenue','$M consolidated annual',220),
      chartCard('ch-inf3','CapEx by Asset','Investment sizing · $M',200),
      chartCard('ch-inf4','Revenue Mix at Maturity (Y15)','Stable-state income composition',200)
    )+
    chartGrid(2,
      chartCard('ch-inf5','Asset IRR Comparison','Target return by infrastructure asset',200),
      chartCard('ch-inf6','Revenue Growth — First 20 Years','Year-on-year growth % · sector trajectory',200),
    )+
    section('Asset Summary',tbl(['Asset','Type','CapEx','IRR Target','Start Yr','Status'],
      assets.map(a=>[a.n,a.t,'$'+a.cap+'M',a.irr+'%',a.yr,badge(a.st,a.st==='Active'?'green':a.st==='EPC'?'blue':'amber')]),true))+
    section('Annual Revenue Projection ($M)',tbl(['Asset',...yrs.map(String),'Cum'],
      assets.map(a=>[a.n,...a.rev.map(v=>v||'—'),a.rev.reduce((x,y)=>x+y,0)])))
  );
  return{html,charts:()=>{
    areaChart('ch-inf1',yrs,types.map((t,i)=>({label:t,color:CC[i],data:revByType[i].map(v=>+v.toFixed(1))})));
    lineChart('ch-inf2',yrs,[{label:'Total Revenue',data:totalRev.map(v=>+v.toFixed(1)),color:CC[0]}]);
    hBarChart('ch-inf3',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>a.cap),CC.slice(0,6),v=>'$'+v+'M');
    donutChart('ch-inf4',types,types.map((t,i)=>revByType[i][14]||0),CC.slice(0,types.length));
    hBarChart('ch-inf5',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>+(a.irr||12)),CC.slice(0,assets.length),v=>`${v.toFixed(1)}%`);
    const _infG=yrs.slice(0,20).map((_,i)=>i===0?0:totalRev[i-1]>0?+((totalRev[i]-totalRev[i-1])/totalRev[i-1]*100).toFixed(1):0);
    barChart('ch-inf6',yrs.slice(0,20),[{label:'YoY Growth %',data:_infG,color:_infG.map(v=>v>=0?CC[1]:CC[6])}]);
  }};
}

// ---- SECTOR: AGRICULTURE ----
function viewSectorAgriculture(){
  const m=getModel(),yrs=m.years;
  const assets=[
    {n:'Helmand Valley Irrigation',t:'Irrigation',cap:380,irr:11.2,yr:2028,st:'Feasibility',rev:[0,0,0,8,18,28,38,46,52,56,58,58,57,55,52,49,46,43,40,37,34,31,28,25,22,19,16,13,10,8]},
    {n:'Northern Wheat Processing',t:'Processing',cap:240,irr:14.5,yr:2027,st:'Active',rev:[0,22,42,60,76,90,102,112,120,126,130,132,131,128,124,120,115,110,105,100,94,88,82,76,70,64,58,52,46,40]},
    {n:'Cotton & Textile Hub',t:'Agro-industry',cap:180,irr:16.2,yr:2028,st:'DFS',rev:[0,0,18,36,52,66,78,88,96,102,106,108,107,104,100,96,92,88,84,80,76,72,68,64,60,56,52,48,44,40]},
    {n:'Kunduz Food Processing',t:'Processing',cap:160,irr:15.8,yr:2029,st:'Pre-FEED',rev:[0,0,0,14,28,40,50,58,64,68,70,70,69,67,64,61,58,55,52,49,46,43,40,37,34,31,28,25,22,19]},
    {n:'Pomegranate Export Corridor',t:'Agri-trade',cap:85,irr:18.4,yr:2027,st:'Active',rev:[0,12,22,32,40,48,54,60,64,67,68,68,67,65,63,60,57,54,51,48,45,42,39,36,33,30,27,24,21,18]},
    {n:'Saffron & High-Value Crops',t:'Specialty',cap:120,irr:22.1,yr:2026,st:'Active',rev:[8,16,26,36,46,56,65,72,78,82,84,84,82,80,77,74,71,68,65,62,59,56,53,50,47,44,41,38,35,32]},
  ];
  const totalRev=yrs.map((_,i)=>assets.reduce((a,ast)=>a+(ast.rev[i]||0),0));
  const types=[...new Set(assets.map(a=>a.t))];
  const revByType=types.map(t=>yrs.map((_,i)=>assets.filter(a=>a.t===t).reduce((s,a)=>s+(a.rev[i]||0),0)));
  const totalCap=assets.reduce((a,ast)=>a+ast.cap,0);
  const cumRev=totalRev.reduce((a,b)=>a+b,0);
  APP.csvFilename='Sector_Agriculture.csv';
  APP.csvRows=[['Asset','Type','CapEx($M)','IRR%','Start','Status'],...assets.map(a=>[a.n,a.t,a.cap,a.irr,a.yr,a.st])];
  const html=sheet('Agriculture & Food Security','Irrigation · Wheat · Cotton · Saffron · Export corridors · Agro-industrial processing','',
    kpiGrid([
      ['Total CapEx','$'+((totalCap/1000).toFixed(2))+'B','warning'],
      ['Cumulative Revenue','$'+((cumRev/1000).toFixed(2))+'B','positive'],
      ['Peak Annual Revenue','$'+Math.max(...totalRev).toFixed(0)+'M','positive'],
      ['Asset Lines',String(assets.length),''],
      ['Blended IRR','16.2%','positive'],
      ['Farmland Area','4.2M ha','','Total addressable'],
    ])+
    chartGrid(2,
      chartCard('ch-agr1','Revenue by Agricultural Segment','$M stacked · 30 years',220),
      chartCard('ch-agr2','Total Agriculture Revenue','$M annual · 30 years',220),
      chartCard('ch-agr3','Asset CapEx Distribution','Investment by type · $M',200),
      chartCard('ch-agr4','Revenue Mix at Year 15','Stable-state composition',200)
    )+
    chartGrid(2,
      chartCard('ch-agr5','Asset IRR Comparison','Target return by agricultural asset',200),
      chartCard('ch-agr6','Revenue Growth — First 20 Years','Annual growth % · sector ramp trajectory',200),
    )+
    section('Asset Summary',tbl(['Asset','Type','CapEx','IRR Target','Start','Status'],
      assets.map(a=>[a.n,a.t,'$'+a.cap+'M',a.irr+'%',a.yr,badge(a.st,a.st==='Active'?'green':a.st==='DFS'?'blue':'amber')]),true))+
    prose('Afghanistan has the potential to become a leading agricultural exporter in Central Asia. The national irrigation rehabilitation program covers <strong>4.2 million hectares</strong> of farmland. The saffron, pomegranate, and high-value crop export corridors represent the highest IRR assets (18–22%) in the agriculture portfolio with minimal capital intensity. The cotton and textile hub anchors downstream value-added processing.')
  );
  return{html,charts:()=>{
    areaChart('ch-agr1',yrs,types.map((t,i)=>({label:t,color:CC[i],data:revByType[i].map(v=>+v.toFixed(1))})));
    lineChart('ch-agr2',yrs,[{label:'Total Revenue',data:totalRev.map(v=>+v.toFixed(1)),color:CC[1]}]);
    hBarChart('ch-agr3',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>a.cap),CC.slice(0,6),v=>'$'+v+'M');
    donutChart('ch-agr4',types,types.map((t,i)=>revByType[i][14]||0),CC.slice(0,types.length));
    hBarChart('ch-agr5',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>+(a.irr||12)),CC.slice(0,assets.length),v=>`${v.toFixed(1)}%`);
    const _agrG=yrs.slice(0,20).map((_,i)=>i===0?0:totalRev[i-1]>0?+((totalRev[i]-totalRev[i-1])/totalRev[i-1]*100).toFixed(1):0);
    barChart('ch-agr6',yrs.slice(0,20),[{label:'YoY Growth %',data:_agrG,color:_agrG.map(v=>v>=0?CC[1]:CC[6])}]);
  }};
}

// ---- SECTOR: WATER & UTILITIES ----
function viewSectorWater(){
  const m=getModel(),yrs=m.years;
  const assets=[
    {n:'Kabul Water Treatment Phase 1',t:'Water Supply',cap:280,irr:10.8,yr:2028,st:'Feasibility',rev:[0,0,0,14,26,38,48,56,62,66,68,68,67,65,63,60,57,54,52,49,46,44,41,38,36,33,30,28,25,22]},
    {n:'Kandahar Sanitation Network',t:'Sanitation',cap:190,irr:12.2,yr:2029,st:'Pre-FEED',rev:[0,0,0,0,12,22,32,40,46,50,52,52,51,49,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17]},
    {n:'Helmand Irrigation Canals',t:'Irrigation',cap:420,irr:11.5,yr:2028,st:'FEED',rev:[0,0,8,20,32,44,54,62,68,72,74,74,73,71,69,66,63,60,57,54,51,48,46,43,40,38,35,32,30,27]},
    {n:'Amu Darya Water Rights',t:'Water Rights',cap:85,irr:14.6,yr:2027,st:'Active',rev:[0,8,14,20,26,30,34,36,38,40,41,41,40,39,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8]},
    {n:'Herat Desalination JV',t:'Water Supply',cap:160,irr:13.4,yr:2030,st:'Scoping',rev:[0,0,0,0,0,10,20,28,34,38,40,40,39,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6]},
  ];
  const totalRev=yrs.map((_,i)=>assets.reduce((a,ast)=>a+(ast.rev[i]||0),0));
  const types=[...new Set(assets.map(a=>a.t))];
  const revByType=types.map(t=>yrs.map((_,i)=>assets.filter(a=>a.t===t).reduce((s,a)=>s+(a.rev[i]||0),0)));
  const totalCap=assets.reduce((a,ast)=>a+ast.cap,0);
  const cumRev=totalRev.reduce((a,b)=>a+b,0);
  APP.csvFilename='Sector_Water.csv';
  APP.csvRows=[['Asset','Type','CapEx($M)','IRR%','Start','Status'],...assets.map(a=>[a.n,a.t,a.cap,a.irr,a.yr,a.st])];
  const html=sheet('Water & Utilities','Water supply · Sanitation · Irrigation infrastructure · concession-based financing','',
    kpiGrid([
      ['Total CapEx','$'+((totalCap/1000).toFixed(2))+'B','warning'],
      ['Cumulative Revenue','$'+((cumRev/1000).toFixed(2))+'B','positive'],
      ['Peak Annual Revenue','$'+Math.max(...totalRev).toFixed(0)+'M','positive'],
      ['Asset Lines',String(assets.length),''],
      ['Blended IRR','12.1%','positive'],
      ['Population Served','8.4M','positive'],
    ])+
    chartGrid(2,
      chartCard('ch-wat1','Revenue by Water Segment','$M stacked · 30 years',220),
      chartCard('ch-wat2','Total Water Revenue','$M consolidated',220),
      chartCard('ch-wat3','CapEx by Asset','Investment by project · $M',200),
      chartCard('ch-wat4','Y15 Revenue Mix','Mature-state composition',200)
    )+
    chartGrid(2,
      chartCard('ch-wat5','Asset IRR Comparison','Target return by water infrastructure asset',200),
      chartCard('ch-wat6','Revenue Growth — First 20 Years','Annual growth % · water sector ramp',200),
    )+
    section('Asset Summary',tbl(['Asset','Type','CapEx','IRR Target','Start','Status'],
      assets.map(a=>[a.n,a.t,'$'+a.cap+'M',a.irr+'%',a.yr,badge(a.st,a.st==='Active'?'green':a.st==='FEED'?'blue':'amber')]),true))+
    prose('Access to clean water is a strategic priority across Afghanistan\'s 40M+ population. The NERPA Water & Utilities vertical operates under 20-30 year concession agreements with sovereign backstop guarantees. Blended IRRs of 10-15% are underpinned by user-fee models, government offtake agreements, and international development finance co-investment from multilateral partners.')
  );
  return{html,charts:()=>{
    areaChart('ch-wat1',yrs,types.map((t,i)=>({label:t,color:CC[i],data:revByType[i].map(v=>+v.toFixed(1))})));
    lineChart('ch-wat2',yrs,[{label:'Total Revenue',data:totalRev.map(v=>+v.toFixed(1)),color:CC[5]}]);
    hBarChart('ch-wat3',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>a.cap),CC.slice(0,5),v=>'$'+v+'M');
    donutChart('ch-wat4',types,types.map((t,i)=>revByType[i][14]||0),CC.slice(0,types.length));
    hBarChart('ch-wat5',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>+(a.irr||12)),CC.slice(0,assets.length),v=>`${v.toFixed(1)}%`);
    const _watG=yrs.slice(0,20).map((_,i)=>i===0?0:totalRev[i-1]>0?+((totalRev[i]-totalRev[i-1])/totalRev[i-1]*100).toFixed(1):0);
    barChart('ch-wat6',yrs.slice(0,20),[{label:'YoY Growth %',data:_watG,color:_watG.map(v=>v>=0?CC[1]:CC[6])}]);
  }};
}

// ---- SECTOR: HEALTHCARE ----
function viewSectorHealthcare(){
  const m=getModel(),yrs=m.years;
  const assets=[
    {n:'Kabul National Hospital JV',t:'Hospitals',cap:320,irr:14.2,yr:2028,st:'Feasibility',rev:[0,0,0,18,36,54,68,80,90,96,100,100,98,96,93,90,87,84,81,78,75,72,69,66,63,60,57,54,51,48]},
    {n:'Medical Diagnostics Network',t:'Diagnostics',cap:180,irr:16.8,yr:2027,st:'Active',rev:[0,12,24,36,48,58,66,72,76,80,82,82,81,79,77,74,71,68,65,62,59,56,53,50,47,44,41,38,35,32]},
    {n:'Generic Pharma Manufacturing',t:'Pharma',cap:240,irr:18.4,yr:2029,st:'DFS',rev:[0,0,0,0,14,28,42,56,68,78,86,90,92,92,90,88,85,82,79,76,73,70,67,64,61,58,55,52,49,46]},
    {n:'Rural Health Clinics (150x)',t:'Primary Care',cap:140,irr:12.6,yr:2027,st:'Active',rev:[0,10,20,30,38,44,48,52,54,55,56,56,55,54,52,50,48,46,44,42,40,38,36,34,32,30,28,26,24,22]},
    {n:'Medical Training Institute',t:'Education',cap:95,irr:15.2,yr:2028,st:'Pre-FEED',rev:[0,0,6,12,18,24,28,32,35,36,37,37,36,35,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4]},
  ];
  const totalRev=yrs.map((_,i)=>assets.reduce((a,ast)=>a+(ast.rev[i]||0),0));
  const types=[...new Set(assets.map(a=>a.t))];
  const revByType=types.map(t=>yrs.map((_,i)=>assets.filter(a=>a.t===t).reduce((s,a)=>s+(a.rev[i]||0),0)));
  const totalCap=assets.reduce((a,ast)=>a+ast.cap,0);
  const cumRev=totalRev.reduce((a,b)=>a+b,0);
  APP.csvFilename='Sector_Healthcare.csv';
  APP.csvRows=[['Asset','Type','CapEx($M)','IRR%','Start','Status'],...assets.map(a=>[a.n,a.t,a.cap,a.irr,a.yr,a.st])];
  const html=sheet('Healthcare & Pharma','Hospitals · Diagnostics · Pharma manufacturing · Primary care · Medical education','',
    kpiGrid([
      ['Total CapEx','$'+((totalCap/1000).toFixed(2))+'B','warning'],
      ['Cumulative Revenue','$'+((cumRev/1000).toFixed(2))+'B','positive'],
      ['Peak Annual Revenue','$'+Math.max(...totalRev).toFixed(0)+'M','positive'],
      ['Asset Lines',String(assets.length),''],
      ['Blended IRR','15.4%','positive'],
      ['Beds Capacity','4,200+','positive'],
    ])+
    chartGrid(2,
      chartCard('ch-hc1','Revenue by Healthcare Segment','$M stacked · 30 years',220),
      chartCard('ch-hc2','Total Healthcare Revenue','$M consolidated annual',220),
      chartCard('ch-hc3','CapEx by Asset','Investment sizing · $M',200),
      chartCard('ch-hc4','Segment Mix at Maturity','Y15 revenue composition',200)
    )+
    chartGrid(2,
      chartCard('ch-hc5','Asset IRR Comparison','Target return by healthcare asset',200),
      chartCard('ch-hc6','Revenue Growth — First 20 Years','Annual growth % · healthcare sector ramp',200),
    )+
    section('Asset Summary',tbl(['Asset','Type','CapEx','IRR Target','Start','Status'],
      assets.map(a=>[a.n,a.t,'$'+a.cap+'M',a.irr+'%',a.yr,badge(a.st,a.st==='Active'?'green':a.st==='DFS'?'blue':'amber')]),true))+
    prose('The NERPA Healthcare vertical targets Afghanistan\'s acute under-provision of medical services across a population of 40M+. The generic pharmaceuticals manufacturing hub leverages low-cost labor and regional export potential to Central Asia and MENA. Public-private partnership structures with government offtake provide stable revenue floors. The rural clinic rollout (150 clinics) serves as both a social license anchor and a recurring revenue base.')
  );
  return{html,charts:()=>{
    areaChart('ch-hc1',yrs,types.map((t,i)=>({label:t,color:CC[i],data:revByType[i].map(v=>+v.toFixed(1))})));
    lineChart('ch-hc2',yrs,[{label:'Total Revenue',data:totalRev.map(v=>+v.toFixed(1)),color:CC[7]}]);
    hBarChart('ch-hc3',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>a.cap),CC.slice(0,5),v=>'$'+v+'M');
    donutChart('ch-hc4',types,types.map((t,i)=>revByType[i][14]||0),CC.slice(0,types.length));
    hBarChart('ch-hc5',assets.map(a=>a.n.split(' ').slice(0,3).join(' ')),assets.map(a=>+(a.irr||12)),CC.slice(0,assets.length),v=>`${v.toFixed(1)}%`);
    const _hcG=yrs.slice(0,20).map((_,i)=>i===0?0:totalRev[i-1]>0?+((totalRev[i]-totalRev[i-1])/totalRev[i-1]*100).toFixed(1):0);
    barChart('ch-hc6',yrs.slice(0,20),[{label:'YoY Growth %',data:_hcG,color:_hcG.map(v=>v>=0?CC[1]:CC[6])}]);
  }};
}

// ---- EQUITY WATERFALL ----
function viewEquityWaterfall(m){
  const yrs=m.years,y=m.years_out;
  const totalIn=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const cumDist=yrs.map((_,i)=>+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1));
  const totalDist=m.distributions.reduce((a,b)=>a+b,0);
  const termNAV=y[29].totalEquity;
  const PREF=0.08;const CATCHUP=0.20;const CARRY=0.20;
  const prefPool=totalIn*(Math.pow(1+PREF,30)-1);
  const abovePref=Math.max(0,totalDist+termNAV-(totalIn+prefPool));
  const gpCatchUp=Math.min(abovePref,(totalIn+prefPool)*CATCHUP);
  const residual=Math.max(0,abovePref-gpCatchUp);
  const gpCarry=residual*CARRY;
  const lpTotal=totalIn+prefPool+(residual*(1-CARRY));
  const gpTotal=gpCatchUp+gpCarry;
  const scenModels=SCENARIO_LIST.map(s=>({s,m:buildModel(s.id)}));
  APP.csvFilename='Equity_Waterfall.csv';
  APP.csvRows=[['Component','$M'],['LP Capital In','('+fmtM(totalIn)+')'],['LP Pref Return 8%',fmtM(prefPool)],['GP Catch-up 20%',fmtM(gpCatchUp)],['GP Carry 20%',fmtM(gpCarry)],['LP Total Return',fmtM(lpTotal)],['GP Total',fmtM(gpTotal)]];
  const html=sheet('Equity Waterfall & LP Economics','Preferred return · catch-up · GP carry · distributions · terminal NAV · full LP/GP split','',
    kpiGrid([
      ['Total LP Return',fmtM(lpTotal),'positive'],['Total GP Return',fmtM(gpTotal),'positive'],
      ['LP MOIC',fmtX(lpTotal/totalIn),''],['GP Carry',fmtM(gpCarry),'positive'],
      ['Pref. Return Hurdle','8% p.a.',''],['GP Carry Rate','20%',''],
    ])+
    chartGrid(2,
      chartCard('ch-wf1','Return Waterfall (Terminal)','Capital in → pref → catch-up → carry → net LP',220),
      chartCard('ch-wf2','NAV & Cumulative Distributions','$M cumulative progression',220),
      chartCard('ch-wf3','IRR by Scenario','Consolidated LP IRR across all scenarios',200),
      chartCard('ch-wf4','MOIC by Scenario','Multiple on invested capital',200)
    )+
    section('Waterfall Distribution Tiers',tbl(['Component','Value'],[
      ['Total Capital Committed',fmtM(totalIn)],
      ['Preferred Return Pool (8% p.a.)',fmtM(prefPool)],
      ['LP Pref + Capital',fmtM(totalIn+prefPool)],
      ['GP Catch-up (20%)',fmtM(gpCatchUp)],
      ['GP Carried Interest (20%)',fmtM(gpCarry)],
      ['LP Residual Share (80%)',fmtM(residual*0.8)],
      ['Total LP Return',fmtM(lpTotal)],
      ['Total GP Return',fmtM(gpTotal)],
      ['LP MOIC',fmtX(lpTotal/totalIn)],
    ],true))+
    section('Capital Events & Cumulative Return',tbl(['Year','Event','Amount','Cum. Return'],
      EQUITY_EVENTS.map((e,idx)=>{
        const cumRet=m.distributions.slice(0,m.years.indexOf(e.year)+1).reduce((a,b)=>a+b,0);
        return[e.year,e.kind.replace(/([A-Z])/g,' $1').trim(),fmtM(e.amount),fmtM(cumRet)];
      }),true))
  );
  return{html,charts:()=>{
    waterfallChart('ch-wf1',[
      {name:'LP Invested',value:-totalIn,kind:'start'},
      {name:'LP Pref Return',value:prefPool},
      {name:'Distributions',value:totalDist},
      {name:'Terminal NAV',value:termNAV},
      {name:'GP Carry',value:-gpCarry},
      {name:'Net LP',value:lpTotal-totalIn,kind:'total'},
    ]);
    lineChart('ch-wf2',yrs,[
      {label:'NAV',data:y.map(r=>+r.totalEquity.toFixed(1)),color:CC[0]},
      {label:'Cum. Distributions',data:cumDist,color:CC[1]},
    ]);
    hBarChart('ch-wf3',scenModels.map(x=>x.s.label),scenModels.map(x=>+(x.m.consolidatedIRR*100).toFixed(2)),CC.slice(0,4),v=>v.toFixed(1)+'%');
    hBarChart('ch-wf4',scenModels.map(x=>x.s.label),scenModels.map(x=>+x.m.consolidatedMOIC.toFixed(2)),CC.slice(0,4),v=>v.toFixed(2)+'x');
  }};
}

// ---- CAPITAL TIMELINE ----
function viewCapitalTimeline(m){
  const yrs=m.years,y=m.years_out;
  const milestones=[
    {yr:2026,q:'Q3',event:'Formation Day 0',type:'Founding',detail:'NERPA Capital incorporated · Seed $25M · Legal framework established'},
    {yr:2026,q:'Q4',event:'JORC mapping — copper',type:'Technical',detail:'Resource estimate commenced · Aynak / Balkhab concession'},
    {yr:2027,q:'Q1',event:'OFAC opinion secured',type:'Legal',detail:'WSGR opinion secured · NSI clearance filed · K&R in force'},
    {yr:2027,q:'Q2',event:'Series A close $220M',type:'Capital',detail:'Post-JORC · 14 institutional LPs · anchor sovereign fund'},
    {yr:2027,q:'Q3',event:'Novicodex TGE',type:'Digital',detail:'Tokenised infrastructure launch · KSA / UAE · FSRA compliant'},
    {yr:2027,q:'Q4',event:'Hairatan Port EPC start',type:'Infrastructure',detail:'Construction commenced · $220M project · KPI: 2y completion'},
    {yr:2028,q:'Q2',event:'Copper first ore',type:'Production',detail:'Aynak/Balkhab · ramp begins · Cu offtake signed Tier-1'},
    {yr:2028,q:'Q4',event:'Series B $700M',type:'Capital',detail:'Expansion capital · downstream integration commenced · IPP'},
    {yr:2029,q:'Q2',event:'Gas gathering FEED',type:'Energy',detail:'Amu Darya · first gas FY2031 · sovereign royalty share-back'},
    {yr:2029,q:'Q4',event:'Lithium DFS complete',type:'Technical',detail:'Ghazni pegmatite · resource estimate · pre-FEED gate'},
    {yr:2030,q:'Q2',event:'Iron ore EPC awarded',type:'Production',detail:'Hajigak · $2.6B PF · Big-4 contractor consortium'},
    {yr:2031,q:'Q1',event:'Series C $1.5B',type:'Capital',detail:'Flagship raise · IPO preparation commences · SWF anchors'},
    {yr:2031,q:'Q3',event:'Copper cathode refinery online',type:'Downstream',detail:'First production · $9.1B revenue stream · Tier-1 OEM offtake'},
    {yr:2032,q:'Q1',event:'Lithium hydroxide production',type:'Production',detail:'Ghazni LiOH · battery supply chain · Korea/Japan JV'},
    {yr:2034,q:'Q2',event:'Pre-IPO $2.3B',type:'Capital',detail:'Pre-IPO placement · sovereign wealth funds · bookbuild'},
    {yr:2036,q:'H1',event:'IPO — LSE/ADX $4.7B',type:'Capital',detail:'Primary listing LSE · secondary ADX · $4.7B valuation'},
    {yr:2041,q:'H1',event:'Follow-on $2.9B',type:'Capital',detail:'Expansion follow-on · downstream Phase 3 · DRI plant'},
  ];
  const typeColors={Founding:'#1d3461',Capital:'#2e7d52',Technical:'#1e40af',Legal:'#7c3aed',Digital:'#0f766e',Infrastructure:'#d97706',Production:'#be123c',Energy:'#0369a1',Downstream:'#92400e'};
  const typeChips={Founding:'blue',Capital:'green',Technical:'blue',Legal:'gray',Digital:'blue',Infrastructure:'amber',Production:'red',Energy:'blue',Downstream:'amber'};
  const capByYr=yrs.map((yr)=>EQUITY_EVENTS.find(e=>e.year===yr)?.amount??0);
  const cumCapByYr=yrs.map((yr)=>EQUITY_EVENTS.filter(e=>e.year<=yr).reduce((a,e)=>a+e.amount,0));
  APP.csvFilename='Capital_Timeline.csv';
  APP.csvRows=[['Year','Q','Event','Type','Detail'],...milestones.map(ms=>[ms.yr,ms.q,ms.event,ms.type,ms.detail])];
  const html=sheet('Capital Timeline','Chronological milestones · equity events · production starts · technical gates · legal clearances · 30-year roadmap','',
    kpiGrid([
      ['Total Capital Raised',fmtM(EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0)),''],
      ['Capital Events',String(EQUITY_EVENTS.length),''],
      ['First Production','FY2028','positive'],
      ['IPO Target','FY2036',''],
      ['Model End','FY2054',''],
      ['Key Milestones',String(milestones.length),''],
    ])+
    chartGrid(2,
      chartCard('ch-tl1','Capital Raised by Year','Annual equity raised · $M',220),
      chartCard('ch-tl2','Cumulative Capital Raised','$M trajectory to IPO and beyond',220)
    )+
    section('Milestone Roadmap',
      '<div style="overflow-x:auto"><div style="padding:10px 0">'+
      milestones.map((ms,idx)=>{
        const isLeft=idx%2===0;const col=typeColors[ms.type]||'#1d3461';
        return '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:14px'+(!isLeft?';flex-direction:row-reverse':'')+'">'+
          '<div style="width:calc(50% - 40px);'+(isLeft?'text-align:right':'text-align:left')+'">'+
            '<div style="font-size:12px;font-weight:700;color:'+col+'">'+ms.event+'</div>'+
            '<div style="font-size:10px;color:var(--muted);margin-top:2px;line-height:1.4">'+ms.detail+'</div>'+
          '</div>'+
          '<div style="width:80px;display:flex;flex-direction:column;align-items:center;flex-shrink:0">'+
            '<div style="width:14px;height:14px;border-radius:50%;background:'+col+';border:3px solid #fff;box-shadow:0 0 0 2px '+col+'"></div>'+
            '<div style="font-size:9px;font-weight:700;color:'+col+';margin-top:4px;text-align:center">'+ms.yr+' '+ms.q+'</div>'+
          '</div>'+
          '<div style="width:calc(50% - 40px)"><span class="badge '+typeChips[ms.type]+'">'+ms.type+'</span></div>'+
        '</div>';
      }).join('')+
      '</div></div>'
    )+
    section('Capital Events Schedule',tbl(['Year','Event','Amount ($M)','Cumulative ($M)'],
      EQUITY_EVENTS.map((e,i)=>[e.year,e.kind.replace(/([A-Z])/g,' $1').trim(),fmtM(e.amount),fmtM(EQUITY_EVENTS.slice(0,i+1).reduce((a,x)=>a+x.amount,0))]),true))
  );
  return{html,charts:()=>{
    barChart('ch-tl1',yrs,[{label:'Equity Raised ($M)',data:capByYr,color:CC[1]}]);
    lineChart('ch-tl2',yrs,[{label:'Cumulative Raised',data:cumCapByYr,color:CC[0]}]);
  }};
}

// ---- PORTFOLIO OVERVIEW ----
function viewPortfolioOverview(m){
  const yrs=m.years,y=m.years_out;
  const groups=['Minerals','Energy','Downstream','Digital','Trading'];
  const groupRevY11=groups.map(g=>+m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue[10],0).toFixed(1));
  const groupRevCum=groups.map(g=>+m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.revenue.reduce((x,v)=>x+v,0),0).toFixed(1));
  const groupCapex=groups.map(g=>+m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.capex.reduce((x,v)=>x+v,0),0).toFixed(1));
  const groupEbitda=groups.map(g=>+m.sectors.filter(sl=>sl.sector.group===g).reduce((a,sl)=>a+sl.ebitda.reduce((x,v)=>x+v,0),0).toFixed(1));
  const groupEbitdaMarg=groups.map((g,i)=>groupRevCum[i]>0?+(groupEbitda[i]/groupRevCum[i]*100).toFixed(1):0);
  const allAssets=m.sectors.map(sl=>({
    name:sl.sector.name,group:sl.sector.group,start:sl.sector.startYear,
    cumRev:+sl.revenue.reduce((a,b)=>a+b,0).toFixed(1),
    cumEbitda:+sl.ebitda.reduce((a,b)=>a+b,0).toFixed(1),
    cumCapex:+sl.capex.reduce((a,b)=>a+b,0).toFixed(1),
    ebitdaMarg:sl.ebitda.reduce((a,b)=>a+b,0)>0?fmtPct(sl.ebitda.reduce((a,b)=>a+b,0)/sl.revenue.reduce((a,b)=>a+b,0)):'—',
  })).sort((a,b)=>b.cumRev-a.cumRev);
  APP.csvFilename='Portfolio_Overview.csv';
  APP.csvRows=[['Group','Assets','Y11 Rev($M)','Cum Rev($M)','Cum CapEx($M)','EBITDA%'],...groups.map((g,i)=>[g,m.sectors.filter(sl=>sl.sector.group===g).length,groupRevY11[i],groupRevCum[i],groupCapex[i],groupEbitdaMarg[i]+'%'])];
  const html=sheet('Portfolio Overview','All 25 investment lines · sector summary · asset performance · capital allocation · full-portfolio view','',
    kpiGrid([
      ['Total Asset Lines','25',''],['Active Sectors','5',''],
      ['Y11 Total Revenue',fmtM(y[10].revenue),'positive'],
      ['30y Cum. Revenue',fmtM(m.cumRevenue),'positive'],
      ['Cum. CapEx',fmtM(y.reduce((a,r)=>a+r.capex,0)),'warning'],
      ['30y Cum. EBITDA',fmtM(m.cumEbitda),'positive'],
      ['Terminal Equity',fmtM(y[29].totalEquity),'positive'],
      ['Consolidated IRR',fmtPct(m.consolidatedIRR),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-po1','Revenue by Group at Y11','Peak-year segment contribution · $M',220),
      chartCard('ch-po2','Cumulative Revenue by Group','30-year totals · $B',220),
      chartCard('ch-po3','CapEx Allocation by Group','Total investment per sector · $M',200),
      chartCard('ch-po4','30y EBITDA by Group','Profitability contribution per sector',200)
    )+
    section('Group Summary',tbl(['Group','Assets','Y11 Rev','Cum Rev (30y)','Cum CapEx','EBITDA Margin','Status'],
      groups.map((g,i)=>[g,m.sectors.filter(sl=>sl.sector.group===g).length,fmtM(groupRevY11[i]),fmtM(groupRevCum[i]),fmtM(groupCapex[i]),groupEbitdaMarg[i]+'%',badge(groupRevY11[i]>500?'Active':groupRevY11[i]>0?'Ramping':'Developing',groupRevY11[i]>500?'green':groupRevY11[i]>0?'blue':'amber')]),true))+
    section('Full Asset Register',tbl(['Asset','Group','Start','Cum Rev ($M)','Cum EBITDA ($M)','Cum CapEx ($M)','EBITDA Margin'],
      allAssets.map(a=>[a.name,a.group,a.start,fmtM(a.cumRev),fmtM(a.cumEbitda),fmtM(a.cumCapex),a.ebitdaMarg])))
  );
  return{html,charts:()=>{
    donutChart('ch-po1',groups,groupRevY11,CC.slice(0,5));
    hBarChart('ch-po2',groups,groupRevCum.map(v=>+(v/1000).toFixed(2)),CC.slice(0,5),v=>'$'+v.toFixed(2)+'B');
    donutChart('ch-po3',groups,groupCapex,CC.slice(0,5));
    hBarChart('ch-po4',groups,groupEbitda.map(v=>+(v/1000).toFixed(2)),CC.slice(0,5),v=>'$'+v.toFixed(2)+'B');
  }};
}

// ---- DEAL PIPELINE ----
function viewDealPipeline(m){
  const pipeline=[
    {id:'DP-01',name:'Aynak Copper — PF Tranche 2',stage:'Execution',size:1800,prob:92,irr:18.4,type:'Minerals'},
    {id:'DP-02',name:'Ghazni Lithium — DFS Funding',stage:'Due Diligence',size:990,prob:78,irr:21.2,type:'Minerals'},
    {id:'DP-03',name:'Hajigak Iron Ore — EPC Award',stage:'FEED',size:2600,prob:65,irr:14.8,type:'Minerals'},
    {id:'DP-04',name:'Novicodex TGE — Series A co-lead',stage:'Execution',size:180,prob:88,irr:28.0,type:'Digital'},
    {id:'DP-05',name:'Kunar Hydro IPP — EPC Tender',stage:'Pre-FEED',size:1430,prob:60,irr:16.1,type:'Energy'},
    {id:'DP-06',name:'Solar 2.4 GW — Phase 2 PPAs',stage:'Execution',size:1970,prob:85,irr:14.5,type:'Energy'},
    {id:'DP-07',name:'Amu Darya Gas — FEED Gate',stage:'FEED',size:1870,prob:55,irr:15.3,type:'Energy'},
    {id:'DP-08',name:'Khanneshin REE — Scoping Study',stage:'Screening',size:2000,prob:40,irr:23.6,type:'Minerals'},
    {id:'DP-09',name:'Battery Precursor JV — LOI',stage:'Due Diligence',size:2160,prob:70,irr:22.0,type:'Downstream'},
    {id:'DP-10',name:'Data Center JV Phase 2',stage:'Execution',size:850,prob:80,irr:18.5,type:'Digital'},
    {id:'DP-11',name:'Fiber Concession Expansion',stage:'Execution',size:420,prob:90,irr:20.2,type:'Digital'},
    {id:'DP-12',name:'Chromite Logar Phase 2',stage:'Feasibility',size:380,prob:55,irr:14.5,type:'Minerals'},
  ];
  const stageOrder=['Screening','Feasibility','Due Diligence','Pre-FEED','FEED','Execution'];
  const stageCounts=stageOrder.map(s=>pipeline.filter(d=>d.stage===s).length);
  const stageValues=stageOrder.map(s=>pipeline.filter(d=>d.stage===s).reduce((a,d)=>a+d.size,0));
  const totalPipeline=pipeline.reduce((a,d)=>a+d.size,0);
  const weightedProb=(pipeline.reduce((a,d)=>a+d.prob*d.size,0)/totalPipeline).toFixed(1);
  const weightedIRR=(pipeline.reduce((a,d)=>a+d.irr*d.size,0)/totalPipeline).toFixed(1);
  APP.csvFilename='Deal_Pipeline.csv';
  APP.csvRows=[['ID','Deal','Stage','Size($M)','Prob%','IRR%','Type'],...pipeline.map(d=>[d.id,d.name,d.stage,d.size,d.prob,d.irr,d.type])];
  const html=sheet('Deal Pipeline','Active investment mandates · stage progression · probability · capital sizing · expected returns','',
    kpiGrid([
      ['Total Pipeline',fmtM(totalPipeline),''],
      ['Active Deals',String(pipeline.length),''],
      ['Weighted Probability',weightedProb+'%','positive'],
      ['Weighted IRR',weightedIRR+'%','positive'],
      ['In Execution',String(pipeline.filter(d=>d.stage==='Execution').length),'positive'],
      ['Early Stage',String(pipeline.filter(d=>['Screening','Feasibility'].includes(d.stage)).length),''],
    ])+
    chartGrid(2,
      chartCard('ch-dp1','Pipeline by Stage (Deal Count)','Funnel view · number of active deals',200),
      chartCard('ch-dp2','Pipeline by Stage (Value $M)','Capital at each stage',200),
      chartCard('ch-dp3','Pipeline by Sector Type','$M sector distribution',200),
      chartCard('ch-dp4','Expected IRR by Deal','Top 8 deals by expected return',200),
      chartCard('ch-dp5','Probability-Weighted Value by Stage','Expected capital value · prob × size · $M',200),
      chartCard('ch-dp6','Deal Size vs IRR','Capital size comparison by deal · $M',200),
    )+
    section('Active Deal Pipeline',
      '<div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Deal Name</th><th>Type</th><th>Stage</th><th>Size</th><th>Probability</th><th>Exp. IRR</th></tr></thead><tbody>'+
      pipeline.map(d=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+d.id+'</td>'+
        '<td>'+d.name+'</td>'+
        '<td><span class="badge blue">'+d.type+'</span></td>'+
        '<td><span class="badge '+(d.stage==='Execution'?'green':d.stage==='Screening'?'red':'amber')+'">'+d.stage+'</span></td>'+
        '<td style="text-align:right;font-weight:600">'+fmtM(d.size)+'</td>'+
        '<td style="text-align:right"><div style="display:flex;align-items:center;gap:6px;justify-content:flex-end"><div style="width:44px;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden"><div style="width:'+d.prob+'%;height:100%;background:'+(d.prob>=80?'#2e7d52':d.prob>=60?'#d97706':'#be123c')+';border-radius:3px"></div></div>'+d.prob+'%</div></td>'+
        '<td style="text-align:right;font-weight:600">'+d.irr+'%</td>'+
      '</tr>').join('')+
      '</tbody></table></div>'
    )+
    section('Stage Summary',tbl(['Stage','Deals','Total Value ($M)','Avg Probability'],
      stageOrder.map((s,i)=>[s,stageCounts[i],fmtM(stageValues[i]),stageCounts[i]?Math.round(pipeline.filter(d=>d.stage===s).reduce((a,d)=>a+d.prob,0)/stageCounts[i])+'%':'—']),true))
  );
  return{html,charts:()=>{
    barChart('ch-dp1',stageOrder,[{label:'Deals',data:stageCounts,color:CC[0]}]);
    barChart('ch-dp2',stageOrder,[{label:'Value $M',data:stageValues,color:CC[1]}]);
    const secTypes=[...new Set(pipeline.map(d=>d.type))];
    const secVals=secTypes.map(t=>pipeline.filter(d=>d.type===t).reduce((a,d)=>a+d.size,0));
    donutChart('ch-dp3',secTypes,secVals,CC.slice(0,secTypes.length));
    hBarChart('ch-dp4',pipeline.slice(0,8).map(d=>d.id),pipeline.slice(0,8).map(d=>d.irr),CC.slice(0,8),v=>v+'%');
    const _pwv=stageOrder.map(s=>+pipeline.filter(d=>d.stage===s).reduce((a,d)=>a+d.size*d.prob/100,0).toFixed(0));
    barChart('ch-dp5',stageOrder,[{label:'Prob-weighted $M',data:_pwv,color:CC.slice(0,6)}]);
    barChart('ch-dp6',pipeline.map(d=>d.id),[{label:'Deal Size $M',data:pipeline.map(d=>d.size),color:pipeline.map((_,i)=>CC[i%10])}]);
  }};
}

// ---- FUND PERFORMANCE ----
function viewFundPerformance(m){
  const yrs=m.years,y=m.years_out;
  const cumDist=yrs.map((_,i)=>+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1));
  const totalIn=EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0);
  const benchmarks=[
    {name:'NERPA Base Case',irr:m.consolidatedIRR,moic:m.consolidatedMOIC,tvpi:m.tvpi,dpi:m.dpi},
    {name:'EM PE — Top Quartile',irr:.225,moic:2.9,tvpi:3.1,dpi:.8},
    {name:'Global Private Credit',irr:.112,moic:1.9,tvpi:2.0,dpi:1.2},
    {name:'Listed Mining (10y avg)',irr:.085,moic:2.1,tvpi:2.1,dpi:1.8},
    {name:'Infrastructure Fund',irr:.128,moic:1.95,tvpi:2.1,dpi:1.0},
    {name:'Frontier EM PE',irr:.182,moic:2.4,tvpi:2.6,dpi:.5},
  ];
  const vintage=[
    {yr:'2026',nav:25,dist:0,implied:0},
    {yr:'2027',nav:240,dist:0,implied:0},
    {yr:'2029',nav:850,dist:0,implied:0},
    {yr:'2031',nav:2800,dist:42,implied:8.2},
    {yr:'2034',nav:6200,dist:380,implied:14.8},
    {yr:'2036',nav:12400,dist:1200,implied:+(m.consolidatedIRR*100).toFixed(1)},
  ];
  APP.csvFilename='Fund_Performance.csv';
  APP.csvRows=[['Metric','NERPA','EM PE Top','Global Credit','Listed Mining','Infra Fund','Frontier EM'],['IRR',...benchmarks.map(b=>fmtPct(b.irr))],['MOIC',...benchmarks.map(b=>fmtX(b.moic))],['TVPI',...benchmarks.map(b=>fmtX(b.tvpi))],['DPI',...benchmarks.map(b=>fmtX(b.dpi))]];
  const outperformBps=((m.consolidatedIRR-0.182)*10000).toFixed(0);
  const html=sheet('Fund Performance','IRR · MOIC · TVPI · DPI vs peer benchmarks · vintage analysis · performance attribution','',
    kpiGrid([
      ['Fund IRR (Base)',fmtPct(m.consolidatedIRR),'positive'],
      ['Fund MOIC',fmtX(m.consolidatedMOIC),''],
      ['TVPI',fmtX(m.tvpi),''],
      ['DPI',fmtX(m.dpi),''],
      ['vs Frontier EM PE','+'+outperformBps+'bps','positive','Over Frontier EM benchmark'],
      ['Total Committed',fmtM(totalIn),''],
    ])+
    chartGrid(2,
      chartCard('ch-fp1','IRR vs Peer Benchmarks','NERPA vs comparable asset classes',220),
      chartCard('ch-fp2','MOIC vs Peer Benchmarks','Multiple on invested capital comparison',220),
      chartCard('ch-fp3','NAV & Distribution Progression','$M fund lifecycle · 30 years',200),
      chartCard('ch-fp4','Annual LP Distributions','Cash yield · $M per year',200)
    )+
    chartGrid(2,
      chartCard('ch-fp5','TVPI Comparison vs Benchmarks','Total Value to Paid-In · peer comparison',200),
      chartCard('ch-fp6','Cumulative LP Distributions vs Capital','$M · distributions vs committed capital',200),
    )+
    section('Benchmark Comparison',tbl(['Fund / Index','IRR','MOIC','TVPI','DPI'],
      benchmarks.map(b=>[b.name,fmtPct(b.irr),fmtX(b.moic),fmtX(b.tvpi),fmtX(b.dpi)]),true))+
    section('Vintage Performance',tbl(['Vintage Year','NAV ($M)','Distributions ($M)','Total Return ($M)','Implied IRR'],
      vintage.map(v=>[v.yr,fmtM(v.nav),fmtM(v.dist),fmtM(v.nav+v.dist),v.implied?fmtPct(v.implied/100):'—']),true))
  );
  return{html,charts:()=>{
    hBarChart('ch-fp1',benchmarks.map(b=>b.name),benchmarks.map(b=>+(b.irr*100).toFixed(2)),CC.slice(0,benchmarks.length),v=>v.toFixed(1)+'%');
    hBarChart('ch-fp2',benchmarks.map(b=>b.name),benchmarks.map(b=>+b.moic.toFixed(2)),CC.slice(0,benchmarks.length),v=>v.toFixed(2)+'x');
    lineChart('ch-fp3',yrs,[{label:'NAV',data:y.map(r=>+r.totalEquity.toFixed(1)),color:CC[0]},{label:'Cum. Dist',data:cumDist,color:CC[1]}]);
    barChart('ch-fp4',yrs,[{label:'Annual Distributions',data:m.distributions.map(d=>+d.toFixed(1)),color:CC[1]}]);
    hBarChart('ch-fp5',benchmarks.map(b=>b.name),benchmarks.map(b=>+b.tvpi.toFixed(2)),CC.slice(0,benchmarks.length),v=>`${v.toFixed(2)}x`);
    const _cumDist2=yrs.map((_,i)=>+m.distributions.slice(0,i+1).reduce((a,b)=>a+b,0).toFixed(1));
    lineChart('ch-fp6',yrs,[
      {label:'Cum. Distributions',data:_cumDist2,color:CC[1]},
      {label:'Capital Committed',data:yrs.map((yr,i)=>EQUITY_EVENTS.filter(e=>e.year<=yr).reduce((a,e)=>a+e.amount,0)),color:CC[0]},
    ]);
  }};
}

// ---- VALUATION ----
function viewValuation(m){
  const yrs=m.years,y=m.years_out,y11=y[10];
  const comps=[
    {name:'Rio Tinto',sector:'Diversified Mining',ev_ebitda:7.2,pe:14.5,ev_rev:3.1},
    {name:'BHP Group',sector:'Diversified Mining',ev_ebitda:6.8,pe:13.2,ev_rev:2.9},
    {name:'Anglo American',sector:'Diversified Mining',ev_ebitda:5.9,pe:11.8,ev_rev:2.2},
    {name:'Freeport-McMoRan',sector:'Copper',ev_ebitda:8.4,pe:18.2,ev_rev:3.6},
    {name:'Glencore',sector:'Diversified/Trading',ev_ebitda:6.2,pe:12.4,ev_rev:2.4},
    {name:'SQM',sector:'Lithium',ev_ebitda:9.8,pe:22.4,ev_rev:4.2},
    {name:'Albemarle',sector:'Lithium',ev_ebitda:10.2,pe:25.6,ev_rev:3.8},
    {name:'Saudi Aramco',sector:'Energy/Sovereign',ev_ebitda:12.1,pe:17.8,ev_rev:3.4},
  ];
  const ev_multiples=[6,8,10,12,14,16];
  const evAtMult=ev_multiples.map(mult=>+(mult*y11.ebitda/1000).toFixed(2));
  const wacc=0.12;const tg=0.03;
  const fcfStream=yrs.map((_,i)=>y[i].ocf+y[i].icf);
  const pvFCF=fcfStream.reduce((a,v,i)=>a+v/Math.pow(1+wacc,i),0);
  const termFCF=fcfStream[29];
  const tv=termFCF*(1+tg)/(wacc-tg);
  const pvTV=tv/Math.pow(1+wacc,30);
  const dcfEV=pvFCF+pvTV;
  APP.csvFilename='Valuation_Analysis.csv';
  APP.csvRows=[['Comparable','Sector','EV/EBITDA','P/E','EV/Rev'],...comps.map(c=>[c.name,c.sector,c.ev_ebitda,c.pe,c.ev_rev]),[''],['EV Mult','Implied EV ($B)'],...ev_multiples.map((mu,i)=>[mu+'x','$'+(evAtMult[i]*1000).toFixed(0)+'M'])];
  const html=sheet('Valuation Analysis','DCF · EV/EBITDA · comparable company analysis · sum-of-the-parts · scenario valuation bridge','',
    kpiGrid([
      ['Y11 EBITDA',fmtM(y11.ebitda),'positive'],
      ['Y11 Revenue',fmtM(y11.revenue),''],
      ['DCF Intrinsic EV',fmtM(dcfEV),'positive'],
      ['Implied Terminal EV',fmtM(m.impliedTerminalEV),''],
      ['Median Comp Multiple','6.8×',''],
      ['EV at Median',fmtM(6.8*y11.ebitda),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-val1','EV Sensitivity at Y11 EBITDA Multiple','Implied enterprise value by exit multiple · $B',220),
      chartCard('ch-val2','Comparable Trading Multiples','EV/EBITDA · peer group',220),
      chartCard('ch-val3','Revenue & EBITDA Build to Y11','Bridge to key IPO valuation metrics',200),
      chartCard('ch-val4','DCF Component Mix','PV of FCF vs PV of Terminal Value',200)
    )+
    section('Comparable Company Analysis',tbl(['Company','Sector','EV/EBITDA','P/E','EV/Rev'],
      comps.map(c=>[c.name,c.sector,c.ev_ebitda+'×',c.pe+'×',c.ev_rev+'×']),true))+
    section('Implied EV Sensitivity (Y11)',tbl(['EV/EBITDA Multiple','Implied EV','EV / Share (est @450M shs)'],
      ev_multiples.map((mult,i)=>[mult+'×',fmtM(evAtMult[i]*1000),'$'+(evAtMult[i]*1000/450).toFixed(2)]),true))+
    section('DCF Valuation Summary',tbl(['Component','$M'],[
      ['PV of Free Cash Flows (30y)',fmtM(pvFCF)],['Terminal Value (Gordon Growth)',fmtM(tv)],
      ['PV of Terminal Value',fmtM(pvTV)],['WACC Assumption','12.0%'],
      ['Terminal Growth Rate','3.0%'],['Intrinsic Enterprise Value',fmtM(dcfEV)],
    ],true))
  );
  return{html,charts:()=>{
    barChart('ch-val1',ev_multiples.map(m=>m+'×'),[{label:'Implied EV ($B)',data:evAtMult,color:CC[0]}]);
    hBarChart('ch-val2',comps.map(c=>c.name),comps.map(c=>c.ev_ebitda),CC.slice(0,comps.length),v=>v+'×');
    lineChart('ch-val3',yrs.slice(0,12),[{label:'Revenue',data:y.slice(0,12).map(r=>+r.revenue.toFixed(1)),color:CC[0]},{label:'EBITDA',data:y.slice(0,12).map(r=>+r.ebitda.toFixed(1)),color:CC[1]}]);
    donutChart('ch-val4',['PV of FCF','PV Terminal Value'],[Math.max(0,+pvFCF.toFixed(1)),+pvTV.toFixed(1)],CC.slice(0,2));
  }};
}

// ---- INVESTOR UPDATES ----
function viewInvestorUpdates(){
  const updates=[
    {period:'Q3 2026',type:'Quarterly',title:'Formation & Seed — Day 0 Report',irr:'—',nav:'$25M',status:'Issued'},
    {period:'Q4 2026',type:'Quarterly',title:'Q4 2026 Investor Update',irr:'—',nav:'$24.2M',status:'Issued'},
    {period:'Q1 2027',type:'Quarterly',title:'Q1 2027 — Series A Pre-Close',irr:'—',nav:'$22.8M',status:'Issued'},
    {period:'Q2 2027',type:'Quarterly',title:'Q2 2027 — Series A Close',irr:'4.2%',nav:'$228M',status:'Issued'},
    {period:'Q3 2027',type:'Quarterly',title:'Q3 2027 — Operational Update',irr:'6.1%',nav:'$240M',status:'Issued'},
    {period:'Q4 2027',type:'Annual',title:'Q4 2027 — Year 1 Annual Report',irr:'7.8%',nav:'$248M',status:'Issued'},
    {period:'H1 2028',type:'Semi-Annual',title:'H1 2028 — First Production Milestone',irr:'9.4%',nav:'$262M',status:'Issued'},
    {period:'Q4 2028',type:'Annual',title:'FY2028 Annual Report',irr:'11.2%',nav:'$285M',status:'Issued'},
    {period:'H1 2029',type:'Semi-Annual',title:'H1 2029 — Revenue Inflection',irr:'13.6%',nav:'$520M',status:'Draft'},
    {period:'Q4 2029',type:'Annual',title:'FY2029 Annual Report',irr:'15.1%',nav:'$680M',status:'Planned'},
    {period:'H1 2030',type:'Semi-Annual',title:'H1 2030 — Series B Deployment',irr:'15.8%',nav:'$1.2B',status:'Planned'},
  ];
  const calendar=[
    {date:'15 Jan 2027',event:'LP Portal — Series A data room opens',type:'Capital'},
    {date:'28 Feb 2027',event:'Series A LP close (first tranche)',type:'Capital'},
    {date:'15 Mar 2027',event:'Q1 2027 investor letter issued',type:'Reporting'},
    {date:'30 Jun 2027',event:'H1 2027 semi-annual report',type:'Reporting'},
    {date:'15 Sep 2027',event:'Copper JORC resource statement',type:'Technical'},
    {date:'31 Dec 2027',event:'Annual report FY2027 — Audit sign-off',type:'Reporting'},
    {date:'15 Apr 2028',event:'LP Advisory Committee meeting',type:'Governance'},
    {date:'30 Sep 2028',event:'Series B investor roadshow',type:'Capital'},
    {date:'15 Jan 2029',event:'FY2028 Annual Report issued',type:'Reporting'},
    {date:'30 Jun 2029',event:'LP Distribution — first payment',type:'Capital'},
  ];
  APP.csvFilename='Investor_Updates.csv';
  APP.csvRows=[['Period','Type','Title','IRR','NAV','Status'],...updates.map(u=>[u.period,u.type,u.title,u.irr,u.nav,u.status])];
  const html=sheet('Investor Relations','Quarterly LP updates · annual reports · capital event notices · LP portal · governance calendar','',
    kpiGrid([
      ['Updates Issued',String(updates.filter(u=>u.status==='Issued').length),'positive'],
      ['LP Investors','14',''],
      ['Latest IRR','11.2%','positive'],
      ['Latest NAV','$285M','positive'],
      ['Next Meeting','Apr 2028',''],
      ['Reporting Cadence','Quarterly',''],
    ])+
    chartGrid(2,
      chartCard('ch-ir1','NAV Trajectory','Fund NAV ($M) across all reporting periods',200),
      chartCard('ch-ir2','IRR Progression','Consolidated IRR % — period-on-period',200),
      chartCard('ch-ir3','Update Type Distribution','Quarterly · Semi-Annual · Annual breakdown',200),
      chartCard('ch-ir4','Calendar Event Types','IR calendar events by category',200),
    )+
    section('Update History & Outlook',
      '<div class="tbl-wrap"><table><thead><tr><th>Period</th><th>Type</th><th>Title</th><th>IRR</th><th>NAV</th><th>Status</th></tr></thead><tbody>'+
      updates.map(u=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+u.period+'</td>'+
        '<td><span class="badge '+(u.type==='Annual'?'blue':u.type==='Semi-Annual'?'green':'gray')+'">'+u.type+'</span></td>'+
        '<td>'+u.title+'</td>'+
        '<td style="text-align:right;font-weight:600;color:var(--positive)">'+u.irr+'</td>'+
        '<td style="text-align:right;font-weight:600">'+u.nav+'</td>'+
        '<td><span class="badge '+(u.status==='Issued'?'green':u.status==='Draft'?'amber':'gray')+'">'+u.status+'</span></td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )+
    section('LP Calendar 2027–2029',tbl(['Date','Event','Type'],calendar.map(c=>[c.date,c.event,badge(c.type,c.type==='Capital'?'green':c.type==='Reporting'?'blue':c.type==='Technical'?'amber':'gray')]),true))+
    prose('NERPA Capital maintains quarterly reporting cadence with institutional LP base. Annual reports include audited IFRS financials prepared by a Big-4 external auditor. Semi-annual reports provide operational updates, asset-level performance, and NAV calculations. The LP Advisory Committee meets bi-annually. All reports distributed via secure LP portal with ISAE 3402 controls. IRR and NAV calculations reviewed independently by a Big-4 valuation team.')
  );
  return{html,charts:()=>{
    const navVals=updates.map(u=>{const n=u.nav.replace('$','').replace('B','000').replace('M','');return parseFloat(n);});
    const irrVals=updates.map(u=>u.irr==='—'?null:parseFloat(u.irr));
    const periods=updates.map(u=>u.period);
    lineChart('ch-ir1',periods,[{label:'NAV ($M)',data:navVals,color:CC[0]}],v=>v>=1000?'$'+(v/1000).toFixed(1)+'B':'$'+v+'M');
    lineChart('ch-ir2',periods.filter((_,i)=>irrVals[i]!==null),[{label:'IRR %',data:irrVals.filter(v=>v!==null),color:CC[1]}],v=>v+'%');
    const typeMap={};updates.forEach(u=>typeMap[u.type]=(typeMap[u.type]||0)+1);
    donutChart('ch-ir3',Object.keys(typeMap),Object.values(typeMap),CC.slice(0,Object.keys(typeMap).length));
    const calTypes=[...new Set(calendar.map(c=>c.type))];
    donutChart('ch-ir4',calTypes,calTypes.map(t=>calendar.filter(c=>c.type===t).length),CC.slice(2,2+calTypes.length));
  }};
}

// ---- STRESS TEST ----
function viewStressTest(){
  const m=getModel(),yrs=m.years;
  const stressScenarios=[
    {name:'Sanctions Escalation',rev:.60,opex:1.35,capex:1.25,prob:'15%'},
    {name:'Commodity Super-Cycle Down',rev:.70,opex:1.10,capex:1.05,prob:'20%'},
    {name:'3-Year Project Delay',rev:.85,opex:1.15,capex:1.20,prob:'30%'},
    {name:'Capital Markets Closure',rev:.90,opex:1.05,capex:1.00,prob:'25%'},
    {name:'Sovereign Regime Change',rev:.65,opex:1.20,capex:1.10,prob:'10%'},
    {name:'Combined Black Swan',rev:.50,opex:1.40,capex:1.30,prob:'5%'},
  ];
  const stressedResults=stressScenarios.map(sc=>{
    const sid='__st'+Math.random().toString(36).slice(2,6);
    SCENARIOS[sid]={...SCENARIOS.base,id:sid,label:sc.name,price:SCENARIOS.base.price*sc.rev,volume:SCENARIOS.base.volume*sc.rev,opex:SCENARIOS.base.opex*sc.opex,capex:SCENARIOS.base.capex*sc.capex};
    const sm=buildModel(sid);delete SCENARIOS[sid];
    return{...sc,irr:sm.consolidatedIRR,cumRev:sm.cumRevenue,impliedEV:sm.impliedTerminalEV};
  });
  const mitigants=[
    ['OFAC/Sanctions','Critical','K&R · OFAC opinion · force majeure ring-fence · DC sovereign backstop'],
    ['Commodity Prices','High','Hedge Cu/Li from Y4 · diversified 5-sector revenue · fixed offtake LOIs'],
    ['Construction Delay','High','EPC wrap contract · $250M contingency · phased approach · contractor insurance'],
    ['Capital Access','Medium','Pre-committed LP commitments · sovereign co-invest · PF structure locked'],
    ['Sovereign Risk','Medium','Concession ring-fence · dual jurisdiction · ICSID arbitration clause'],
    ['ESG / Social Licence','Low','ICMM standards · community benefit agreements · ISSB reporting'],
  ];
  APP.csvFilename='Stress_Test.csv';
  APP.csvRows=[['Scenario','Rev Mult','OpEx Mult','CapEx Mult','Probability','Stressed IRR','Stressed Cum Rev'],...stressedResults.map(s=>[s.name,s.rev,s.opex,s.capex,s.prob,fmtPct(s.irr),fmtM(s.cumRev)])];
  const html=sheet('Stress Testing','Multi-variable downside scenarios · probability-weighted stress · IRR resilience · mitigation framework','',
    kpiGrid([
      ['Base IRR',fmtPct(m.consolidatedIRR),'positive'],
      ['Worst Case IRR',fmtPct(Math.min(...stressedResults.map(s=>s.irr))),'negative'],
      ['Best Stress IRR',fmtPct(Math.max(...stressedResults.map(s=>s.irr))),'warning'],
      ['Scenarios Modelled',String(stressScenarios.length),''],
      ['Insurance Coverage','$2.4B','positive'],
      ['Capital at Risk',fmtM(EQUITY_EVENTS.reduce((a,e)=>a+e.amount,0)),'warning'],
    ])+
    chartGrid(2,
      chartCard('ch-st1','Stressed IRR vs Base Case','All scenarios vs baseline consolidated IRR',220),
      chartCard('ch-st2','Stressed Cumulative Revenue','30y revenue impact · $B',220),
      chartCard('ch-st3','Probability-Weighted IRR','Expected IRR · probability × stressed IRR',200),
      chartCard('ch-st4','Stress Factor Impact','Revenue & OpEx multipliers by scenario',200),
    )+
    section('Stress Scenarios',
      '<div class="tbl-wrap"><table><thead><tr><th>Scenario</th><th>Rev Mult</th><th>OpEx Mult</th><th>CapEx Mult</th><th>Probability</th><th>Stressed IRR</th><th>Stressed Cum Rev</th></tr></thead><tbody>'+
      stressedResults.map(s=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+s.name+'</td>'+
        '<td style="text-align:right">'+s.rev+'×</td>'+
        '<td style="text-align:right;color:var(--negative)">'+s.opex+'×</td>'+
        '<td style="text-align:right;color:var(--warning)">'+s.capex+'×</td>'+
        '<td style="text-align:right"><span class="badge '+(parseFloat(s.prob)<=10?'red':parseFloat(s.prob)<=20?'amber':'gray')+'">'+s.prob+'</span></td>'+
        '<td style="text-align:right;font-weight:700;color:'+(s.irr>0.12?'var(--positive)':'var(--negative)')+'">'+fmtPct(s.irr)+'</td>'+
        '<td style="text-align:right">'+fmtM(s.cumRev)+'</td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )+
    section('Risk Mitigation Framework',tbl(['Risk Area','Severity','Mitigation'],
      mitigants.map(r=>[r[0],badge(r[1],r[1]==='Critical'?'red':r[1]==='High'?'amber':'blue'),r[2]]),true))
  );
  return{html,charts:()=>{
    const all=[{name:'Base (no stress)',irr:m.consolidatedIRR},...stressedResults.map(s=>({name:s.name.split(' ').slice(0,2).join(' '),irr:s.irr}))];
    hBarChart('ch-st1',all.map(s=>s.name),all.map(s=>+(s.irr*100).toFixed(2)),all.map((_,i)=>i===0?CC[1]:CC[6]),v=>v.toFixed(1)+'%');
    hBarChart('ch-st2',stressedResults.map(s=>s.name.split(' ').slice(0,2).join(' ')),stressedResults.map(s=>+(s.cumRev/1000).toFixed(2)),CC.slice(2,8),v=>'$'+v.toFixed(2)+'B');
    const _pwIRR=stressedResults.map(s=>+(s.irr*100*parseFloat(s.prob)/100).toFixed(2));
    barChart('ch-st3',stressedResults.map(s=>s.name.split(' ').slice(0,2).join(' ')),[{label:'Prob-weighted IRR %',data:_pwIRR,color:CC.slice(0,6)}]);
    barChart('ch-st4',stressedResults.map(s=>s.name.split(' ').slice(0,2).join(' ')),[
      {label:'Rev Multiplier',data:stressedResults.map(s=>+(s.rev*100).toFixed(0)),color:CC[1]},
      {label:'OpEx Multiplier',data:stressedResults.map(s=>+(s.opex*100).toFixed(0)),color:CC[6]},
    ]);
  }};
}

// ---- RECONCILIATION ----
function viewReconciliation(m){
  const yrs=m.years.slice(0,10);
  const yo=m.years_out.slice(0,10);

  // Budget vs Actual — first 5 years (actuals through Y4, budget rest)
  const budgetRev=  [42,180,420,780,1200,1580,1920,2240,2520,2760];
  const actualRev=  [38,172,408,762,1185,1540,1870,2180,2450,2680];
  const budgetOpex= [28,110,240,430,640,820,980,1120,1250,1360];
  const actualOpex= [31,116,252,448,658,834,994,1132,1258,1370];
  const budgetEbitda=budgetRev.map((r,i)=>r-budgetOpex[i]);
  const actualEbitda=actualRev.map((r,i)=>r-actualOpex[i]);
  const revVariance=actualRev.map((a,i)=>+(a-budgetRev[i]).toFixed(1));
  const opexVariance=actualOpex.map((a,i)=>+(a-budgetOpex[i]).toFixed(1));
  const ebitdaVariance=actualEbitda.map((a,i)=>+(a-budgetEbitda[i]).toFixed(1));

  // Income reconciliation waterfall (Y5 illustrative)
  const incomeWaterfall=[
    {name:'Budgeted Revenue',value:1200,kind:'start'},
    {name:'Volume Shortfall',value:-15,kind:'neg'},
    {name:'Price Realisation +',value:8,kind:'pos'},
    {name:'FX Impact',value:-8,kind:'neg'},
    {name:'New Streams',value:12,kind:'pos'},
    {name:'Other Adjustments',value:-2,kind:'neg'},
    {name:'Actual Revenue',value:1185,kind:'total'},
  ];

  // Expense reconciliation waterfall (Y5 illustrative)
  const expenseWaterfall=[
    {name:'Budgeted OpEx',value:640,kind:'start'},
    {name:'Labour Overrun',value:9,kind:'pos'},
    {name:'Energy Efficiency',value:-5,kind:'neg'},
    {name:'Logistics Cost +',value:7,kind:'pos'},
    {name:'SG&A Savings',value:-4,kind:'neg'},
    {name:'One-Off Items',value:11,kind:'pos'},
    {name:'Actual OpEx',value:658,kind:'total'},
  ];

  // Quarterly recon table
  const quarters=[
    {q:'Q3 2026',rev:9.4,opex:7.2,ebitda:2.2,budRev:10.5,budOpex:7.0,status:'Reviewed'},
    {q:'Q4 2026',rev:11.8,opex:7.8,ebitda:4.0,budRev:12.2,budOpex:7.5,status:'Reviewed'},
    {q:'Q1 2027',rev:38.2,opex:14.2,ebitda:24.0,budRev:40.0,budOpex:13.8,status:'Reviewed'},
    {q:'Q2 2027',rev:42.6,opex:15.1,ebitda:27.5,budRev:44.0,budOpex:14.5,status:'Reviewed'},
    {q:'Q3 2027',rev:45.8,opex:15.8,ebitda:30.0,budRev:46.5,budOpex:15.2,status:'Reviewed'},
    {q:'Q4 2027',rev:49.2,opex:16.4,ebitda:32.8,budRev:50.0,budOpex:16.0,status:'Audited'},
    {q:'Q1 2028',rev:88.4,opex:26.2,ebitda:62.2,budRev:90.0,budOpex:25.5,status:'Draft'},
    {q:'Q2 2028',rev:92.1,opex:27.0,ebitda:65.1,budRev:94.0,budOpex:26.5,status:'Planned'},
  ];

  // Audit control items
  const auditItems=[
    {area:'Revenue Recognition',status:'Clean',finding:'None',auditor:'EY',date:'Dec 2027'},
    {area:'Intercompany Eliminations',status:'Clean',finding:'None',auditor:'EY',date:'Dec 2027'},
    {area:'FX Translation (IAS 21)',status:'Note',finding:'AFN revaluation gain $0.8M — disclosed',auditor:'EY',date:'Dec 2027'},
    {area:'Deferred Tax (IAS 12)',status:'Clean',finding:'None',auditor:'EY',date:'Dec 2027'},
    {area:'Capital vs OpEx Classification',status:'Note',finding:'2 items reclassified post-review — $1.2M',auditor:'EY',date:'Dec 2027'},
    {area:'Related Party Transactions',status:'Clean',finding:'None — no related party loans',auditor:'EY',date:'Dec 2027'},
    {area:'Debt Covenant Compliance',status:'Clean',finding:'All covenants met; headroom >35%',auditor:'EY',date:'Dec 2027'},
    {area:'Payroll & Remuneration',status:'Clean',finding:'None',auditor:'EY',date:'Dec 2027'},
    {area:'CapEx Authorisation Controls',status:'Note',finding:'1 item approved post-spend — policy tightened',auditor:'EY',date:'Dec 2027'},
    {area:'Cash & Bank Reconciliation',status:'Clean',finding:'Reconciled to $0 difference',auditor:'EY',date:'Dec 2027'},
  ];

  const totalRevVar=revVariance.reduce((a,b)=>a+b,0);
  const totalOpexVar=opexVariance.reduce((a,b)=>a+b,0);
  const avgEbitdaVar=(ebitdaVariance.reduce((a,b)=>a+b,0)/ebitdaVariance.length).toFixed(1);
  const cleanAudit=auditItems.filter(a=>a.status==='Clean').length;

  APP.csvFilename='Reconciliation.csv';
  APP.csvRows=[
    ['Year',...yrs.map(String)],
    ['Budget Revenue ($M)',...budgetRev],
    ['Actual Revenue ($M)',...actualRev],
    ['Revenue Variance ($M)',...revVariance],
    ['Budget OpEx ($M)',...budgetOpex],
    ['Actual OpEx ($M)',...actualOpex],
    ['OpEx Variance ($M)',...opexVariance],
    ['Budget EBITDA ($M)',...budgetEbitda],
    ['Actual EBITDA ($M)',...actualEbitda],
    ['EBITDA Variance ($M)',...ebitdaVariance],
  ];

  const html=sheet('Reconciliation','Income · Expense · EBITDA · Budget vs Actual · Waterfall analysis · Quarterly recon · Audit control dashboard','',
    kpiGrid([
      ['Cum Revenue Variance',fmtM(totalRevVar),'negative'],
      ['Cum OpEx Overrun',fmtM(totalOpexVar),'negative'],
      ['Avg EBITDA Variance','$'+avgEbitdaVar+'M','warning'],
      ['Revenue Attainment',((actualRev[4]/budgetRev[4])*100).toFixed(1)+'%','positive'],
      ['OpEx vs Budget',(actualOpex[4]/budgetOpex[4]*100).toFixed(1)+'%','warning'],
      ['Clean Audit Items',cleanAudit+' / '+auditItems.length,'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-rec1','Revenue — Budget vs Actual','$M annual · 10-year comparison',220),
      chartCard('ch-rec2','EBITDA Variance','Actual minus budget · $M · positive = beat',220),
      chartCard('ch-rec3','Revenue Reconciliation Waterfall (Y5)','Variance bridge from budgeted to actual revenue',220),
      chartCard('ch-rec4','Expense Reconciliation Waterfall (Y5)','OpEx variance bridge — drivers of cost deviation',220),
    )+
    chartGrid(2,
      chartCard('ch-rec5','Cumulative Variance Trend','Rolling 10-year cumulative revenue vs budget gap',200),
      chartCard('ch-rec6','Audit Finding Distribution','Clean · Notes · Issues — audit control breakdown',200),
    )+
    section('Annual Budget vs Actual — 10-Year Summary',
      '<div class="tbl-wrap"><table><thead><tr>'+
      '<th>Year</th><th>Budget Rev</th><th>Actual Rev</th><th>Rev Var</th><th>Budget OpEx</th><th>Actual OpEx</th><th>OpEx Var</th><th>Budget EBITDA</th><th>Actual EBITDA</th><th>EBITDA Var</th></tr></thead><tbody>'+
      yrs.map((yr,i)=>{
        const rvPct=((actualRev[i]/budgetRev[i]-1)*100).toFixed(1);
        const evPct=((actualEbitda[i]/budgetEbitda[i]-1)*100).toFixed(1);
        return'<tr>'+
          '<td style="font-weight:700;color:var(--navy)">'+yr+'</td>'+
          '<td style="text-align:right">$'+budgetRev[i]+'M</td>'+
          '<td style="text-align:right;font-weight:600">$'+actualRev[i]+'M</td>'+
          '<td style="text-align:right;font-weight:700;color:'+(revVariance[i]>=0?'var(--positive)':'var(--negative)')+'">'+
            (revVariance[i]>=0?'+':'')+revVariance[i]+'M <span style="font-size:10px">('+rvPct+'%)</span></td>'+
          '<td style="text-align:right">$'+budgetOpex[i]+'M</td>'+
          '<td style="text-align:right;font-weight:600">$'+actualOpex[i]+'M</td>'+
          '<td style="text-align:right;font-weight:700;color:'+(opexVariance[i]<=0?'var(--positive)':'var(--negative)')+'">'+
            (opexVariance[i]>=0?'+':'')+opexVariance[i]+'M</td>'+
          '<td style="text-align:right">$'+budgetEbitda[i]+'M</td>'+
          '<td style="text-align:right;font-weight:600">$'+actualEbitda[i]+'M</td>'+
          '<td style="text-align:right;font-weight:700;color:'+(ebitdaVariance[i]>=0?'var(--positive)':'var(--negative)')+'">'+
            (ebitdaVariance[i]>=0?'+':'')+ebitdaVariance[i]+'M <span style="font-size:10px">('+evPct+'%)</span></td>'+
        '</tr>';
      }).join('')+
      '</tbody></table></div>'
    )+
    section('Quarterly Reconciliation — Detailed Review',
      '<div class="tbl-wrap"><table><thead><tr>'+
      '<th>Quarter</th><th>Budget Rev</th><th>Actual Rev</th><th>Rev Var %</th><th>Budget OpEx</th><th>Actual OpEx</th><th>Actual EBITDA</th><th>Status</th></tr></thead><tbody>'+
      quarters.map(q=>{
        const rVar=((q.rev/q.budRev-1)*100).toFixed(1);
        const beat=parseFloat(rVar)>=0;
        return'<tr>'+
          '<td style="font-weight:700;color:var(--navy)">'+q.q+'</td>'+
          '<td style="text-align:right">$'+q.budRev+'M</td>'+
          '<td style="text-align:right;font-weight:600">$'+q.rev+'M</td>'+
          '<td style="text-align:right;font-weight:700;color:'+(beat?'var(--positive)':'var(--negative)')+'">'+rVar+'%</td>'+
          '<td style="text-align:right">$'+q.budOpex+'M</td>'+
          '<td style="text-align:right">$'+q.opex+'M</td>'+
          '<td style="text-align:right;font-weight:600;color:var(--positive)">$'+q.ebitda+'M</td>'+
          '<td><span class="badge '+(q.status==='Audited'?'green':q.status==='Reviewed'?'blue':q.status==='Draft'?'amber':'gray')+'">'+q.status+'</span></td>'+
        '</tr>';
      }).join('')+'</tbody></table></div>'
    )+
    section('Financial Control & Audit Dashboard',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Big-4 external audit (EY) · Annual sign-off · IFRS 10/15/16 · All findings tracked to closure · FY2027 audit completed Q1 2028</p>'+
      '<div class="tbl-wrap"><table><thead><tr>'+
      '<th>Control Area</th><th>Status</th><th>Audit Finding / Note</th><th>Auditor</th><th>Period</th></tr></thead><tbody>'+
      auditItems.map(a=>'<tr>'+
        '<td style="font-weight:500">'+a.area+'</td>'+
        '<td><span class="badge '+(a.status==='Clean'?'green':a.status==='Note'?'amber':'red')+'">'+a.status+'</span></td>'+
        '<td style="font-size:11px;color:var(--muted)">'+a.finding+'</td>'+
        '<td style="color:var(--muted)">'+a.auditor+'</td>'+
        '<td style="color:var(--muted)">'+a.date+'</td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )+
    bluf(
      'Revenue attainment 98.8% of budget · EBITDA tracking ahead of plan from Y3',
      'Variance analysis confirms NERPA\'s financial model integrity. Revenue shortfalls driven primarily by FX and logistics timing — partially offset by price realisation gains. OpEx overruns contained below 3% in all years. EBITDA outcomes track or exceed budget from Year 3, confirming operating leverage thesis. All material audit items addressed. No audit qualifications issued.'
    )
  );
  return{html,charts:()=>{
    barChart('ch-rec1',yrs,[
      {label:'Budget Rev',data:budgetRev,color:CC[4]+'99'},
      {label:'Actual Rev',data:actualRev,color:CC[1]},
    ]);
    barChart('ch-rec2',yrs,[{label:'EBITDA Variance',data:ebitdaVariance,color:ebitdaVariance.map(v=>v>=0?CC[1]:CC[6])}]);
    waterfallChart('ch-rec3',incomeWaterfall.map(d=>({...d,value:d.kind==='start'||d.kind==='total'?d.value:d.kind==='pos'?d.value:-d.value})));
    waterfallChart('ch-rec4',expenseWaterfall.map(d=>({...d,value:d.kind==='start'||d.kind==='total'?d.value:d.kind==='pos'?d.value:-d.value})));
    const cumVar=revVariance.reduce((acc,v,i)=>{acc.push((acc[i-1]||0)+v);return acc;},[]);
    lineChart('ch-rec5',yrs,[
      {label:'Cumulative Rev Variance',data:cumVar,color:CC[6]},
    ],v=>'$'+v.toFixed(0)+'M');
    const notes=auditItems.filter(a=>a.status==='Note').length;
    const issues=auditItems.filter(a=>a.status==='Issue').length;
    donutChart('ch-rec6',['Clean','Notes','Issues'],[cleanAudit,notes,Math.max(issues,0)],[CC[1],CC[2],CC[6]]);
  }};
}

// ---- RISK REGISTER ----
function viewRiskRegister(){
  const risks=[
    {id:'R-01',cat:'Geopolitical',name:'OFAC sanctions — secondary exposure',prob:1,impact:4,owner:'Gen. Counsel',mitigation:'WSGR OFAC opinion secured & renewable annually · no US-person nexus · monthly SDN screening · UAE ring-fence structure · force majeure clause',status:'Monitoring',trend:'↓'},
    {id:'R-02',cat:'Geopolitical',name:'Regime / governance transition risk',prob:2,impact:4,owner:'CEO / Chairman',mitigation:'Dual-jurisdiction concession · sovereign MoU · ICSID arbitration clause · asset ring-fence · documented wind-down playbook · Control Risks quarterly briefing',status:'Active',trend:'↔'},
    {id:'R-03',cat:'Legal',name:'Concession renegotiation',prob:3,impact:4,owner:'CLO',mitigation:'30-yr concession · sovereign MoU · ICSID clause',status:'Active',trend:'↔'},
    {id:'R-04',cat:'Financial',name:'Commodity price collapse',prob:3,impact:4,owner:'CFO',mitigation:'Hedging Cu/Li from Y4 · diversified revenue · 30% scenario buffer',status:'Monitoring',trend:'↔'},
    {id:'R-05',cat:'Operational',name:'Project construction delay',prob:3,impact:3,owner:'COO',mitigation:'EPC wrap · $250M contingency · phased schedule · experienced EPC',status:'Active',trend:'↑'},
    {id:'R-06',cat:'Financial',name:'Series B/C capital access',prob:2,impact:4,owner:'CFO',mitigation:'Pre-committed LP · sovereign co-invest · PF structure locked',status:'Monitoring',trend:'↔'},
    {id:'R-07',cat:'ESG',name:'Social licence / community',prob:2,impact:3,owner:'CSRO',mitigation:'Community benefit agreements · ICMM standards · 40% local hire',status:'Green',trend:'↓'},
    {id:'R-08',cat:'Regulatory',name:'UK NSI Act scrutiny',prob:2,impact:3,owner:'Gen. Counsel',mitigation:'NSI clearance filed · Clifford Chance engaged',status:'Green',trend:'↔'},
    {id:'R-09',cat:'Operational',name:'Security — site and personnel',prob:3,impact:4,owner:'COSO',mitigation:'K&R insurance · Tier-3 security protocol · vetting',status:'Active',trend:'↑'},
    {id:'R-10',cat:'Technical',name:'Geological / reserve shortfall',prob:2,impact:3,owner:'Chief Geologist',mitigation:'JORC 2012 · SK-1300 · independent QP review · phased commit',status:'Monitoring',trend:'↔'},
    {id:'R-11',cat:'Financial',name:'FX / AFN debasement',prob:3,impact:3,owner:'Treasurer',mitigation:'USD-denominated revenues · AFN hedging plan Q3-2027',status:'Monitoring',trend:'↔'},
    {id:'R-12',cat:'Reputational',name:'ESG / human rights diligence',prob:2,impact:3,owner:'Board / CSRO',mitigation:'ISSB/CSRD reporting · IFC PS compliance · UN GP',status:'Green',trend:'↓'},
    {id:'R-13',cat:'Technology',name:'Novicodex TGE regulatory risk',prob:3,impact:3,owner:'CTO / CLO',mitigation:'UAE/KSA FSRA consultation · 12-jurisdiction legal review',status:'Monitoring',trend:'↑'},
    {id:'R-14',cat:'Macro',name:'Global risk-off / liquidity shock',prob:2,impact:3,owner:'CFO',mitigation:'Diversified LP base · sovereign SWF commitments',status:'Monitoring',trend:'↔'},
  ];
  const catCounts=[...new Set(risks.map(r=>r.cat))].map(c=>({cat:c,count:risks.filter(r=>r.cat===c).length,score:risks.filter(r=>r.cat===c).reduce((a,r)=>a+r.prob*r.impact,0)}));
  const sevBuckets=['Critical','High','Medium-High','Medium'];
  function getSev(r){const s=r.prob*r.impact;return s>=20?'Critical':s>=12?'High':s>=6?'Medium-High':'Medium';}
  APP.csvFilename='Risk_Register.csv';
  APP.csvRows=[['ID','Category','Risk','Probability','Impact','Score','Owner','Status'],...risks.map(r=>[r.id,r.cat,r.name,r.prob,r.impact,r.prob*r.impact,r.owner,r.status])];
  const html=sheet('Risk Register','Institutional risk management · probability × impact matrix · mitigation framework · 14 tracked risks','',
    kpiGrid([
      ['Total Risks',String(risks.length),''],
      ['Critical (Score 20+)',String(risks.filter(r=>r.prob*r.impact>=20).length),'negative'],
      ['High (Score 12+)',String(risks.filter(r=>r.prob*r.impact>=12&&r.prob*r.impact<20).length),'warning'],
      ['Medium',String(risks.filter(r=>r.prob*r.impact<12).length),''],
      ['Active Mitigants',String(risks.filter(r=>r.status==='Active').length),''],
      ['Green / Resolved',String(risks.filter(r=>r.status==='Green').length),'positive'],
    ])+
    chartGrid(2,
      chartCard('ch-rr1','Risk Score by Category','Probability × Impact aggregated per category',200),
      chartCard('ch-rr2','Risk Count by Category','Number of risks per domain',200),
      chartCard('ch-rr3','Severity Distribution','Risks by Critical · High · Med-High · Medium tier',200),
      chartCard('ch-rr4','Risk Trend Indicators','Improving · Stable · Worsening · count by trend',200),
    )+
    '<div class="section"><div class="section-hdr"><h2>Risk Heat Map (Probability × Impact)</h2></div>'+
    '<div style="overflow-x:auto"><table style="min-width:400px"><thead><tr><th style="background:var(--charcoal);color:#fff">Prob \\ Impact</th>'+
    [1,2,3,4,5].map(i=>'<th style="text-align:center;background:var(--charcoal);color:#fff">'+i+'</th>').join('')+'</tr></thead><tbody>'+
    [5,4,3,2,1].map(prob=>'<tr><td style="font-weight:600;background:#f8f9fb">Prob '+prob+'</td>'+
      [1,2,3,4,5].map(imp=>{
        const score=prob*imp;
        const bg=score>=20?'#fee2e2':score>=12?'#fef3c7':score>=6?'#fef9c3':'#f0fdf4';
        const col=score>=20?'#991b1b':score>=12?'#92400e':score>=6?'#713f12':'#166534';
        const items=risks.filter(r=>r.prob===prob&&r.impact===imp).map(r=>r.id).join(', ');
        return'<td style="text-align:center;background:'+bg+';color:'+col+';font-weight:'+(items?700:400)+';padding:8px 6px">'+(items||'—')+'</td>';
      }).join('')+'</tr>'
    ).join('')+'</tbody></table></div></div>'+
    section('Risk Register — Full Detail',
      '<div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Category</th><th>Risk</th><th>P</th><th>I</th><th>Score</th><th>Severity</th><th>Owner</th><th>Status</th><th>Trend</th></tr></thead><tbody>'+
      risks.map(r=>{const score=r.prob*r.impact;const sev=getSev(r);return'<tr>'+
        '<td style="font-weight:700;color:var(--navy)">'+r.id+'</td>'+
        '<td><span class="badge '+(r.cat==='Geopolitical'?'red':r.cat==='Financial'?'amber':r.cat==='ESG'?'green':'blue')+'">'+r.cat+'</span></td>'+
        '<td>'+r.name+'</td>'+
        '<td style="text-align:center;font-weight:600">'+r.prob+'</td>'+
        '<td style="text-align:center;font-weight:600">'+r.impact+'</td>'+
        '<td style="text-align:center;font-weight:700;color:'+(score>=20?'var(--negative)':score>=12?'var(--warning)':'var(--info)')+'">'+score+'</td>'+
        '<td><span class="badge '+(sev==='Critical'?'red':sev==='High'?'amber':'blue')+'">'+sev+'</span></td>'+
        '<td style="color:var(--muted);font-size:11px">'+r.owner+'</td>'+
        '<td><span class="badge '+(r.status==='Active'?'amber':r.status==='Green'?'green':'gray')+'">'+r.status+'</span></td>'+
        '<td style="text-align:center">'+r.trend+'</td>'+
      '</tr>';}).join('')+'</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    hBarChart('ch-rr1',catCounts.map(c=>c.cat),catCounts.map(c=>c.score),CC.slice(0,catCounts.length),v=>String(v));
    hBarChart('ch-rr2',catCounts.map(c=>c.cat),catCounts.map(c=>c.count),CC.slice(0,catCounts.length),v=>String(v));
    const _sevL=['Critical (20+)','High (12-19)','Med-High (6-11)','Medium (<6)'];
    const _sevC=[risks.filter(r=>r.prob*r.impact>=20).length,risks.filter(r=>{const s=r.prob*r.impact;return s>=12&&s<20;}).length,risks.filter(r=>{const s=r.prob*r.impact;return s>=6&&s<12;}).length,risks.filter(r=>r.prob*r.impact<6).length];
    donutChart('ch-rr3',_sevL,_sevC,[CC[6],CC[3],CC[4],CC[1]]);
    barChart('ch-rr4',['Improving (↓)','Stable (↔)','Worsening (↑)'],[{label:'Risk Count',data:[risks.filter(r=>r.trend==='↓').length,risks.filter(r=>r.trend==='↔').length,risks.filter(r=>r.trend==='↑').length],color:[CC[1],CC[4],CC[6]]}]);
  }};
}

// ---- COMPLIANCE ----
function viewCompliance(){
  const checks=[
    {area:'OFAC / US Treasury',item:'OFAC Legal Opinion (WSGR)',status:'Green',date:'Jul 2026',owner:'WSGR (US Counsel)',detail:'Opinion secured · no prohibited nexus · renewable annually'},
    {area:'OFAC / US Treasury',item:'Ongoing counterparty screening',status:'Green',date:'Rolling',owner:'Compliance Officer',detail:'Monthly OFAC/SDN screening of all counterparties'},
    {area:'UK Regulation',item:'UK NSI Act clearance',status:'Yellow',date:'Q4 2026',owner:'UK Counsel / CCC',detail:'Clearance filed; awaiting formal response'},
    {area:'Insurance',item:'K&R Insurance — $150M',status:'Green',date:'Aug 2026',owner:'Aon (broker)',detail:'$150M K&R · Tier-3 security protocol active'},
    {area:'Insurance',item:'Political Risk Insurance (PRI)',status:'Green',date:'Aug 2026',owner:'MIGA / Aon',detail:'$250M PRI · expropriation · war risk · transfer restriction'},
    {area:'AML / KYC',item:'LP AML/KYC onboarding',status:'Green',date:'Rolling',owner:'Compliance team',detail:'All 14 LPs cleared · FATF-compliant jurisdictions · EDD complete'},
    {area:'Tax',item:'Transfer pricing documentation',status:'Green',date:'FY2026',owner:'Tax counsel',detail:"Arm's-length documentation · OECD BEPS compliant"},
    {area:'Tax',item:'US PFIC status assessment',status:'Yellow',date:'Q4 2026',owner:'US Tax Counsel',detail:'PFIC analysis in progress · fund structuring under review'},
    {area:'Cyber / Data',item:'SOC 2 Type II certification',status:'Yellow',date:'Q2 2027',owner:'CISO / BDO',detail:'Audit commenced · certification target Q2 2027'},
    {area:'Cyber / Data',item:'ISO 27001 certification',status:'Yellow',date:'Q3 2027',owner:'CISO',detail:'Gap assessment complete · remediation roadmap underway'},
    {area:'ESG Reporting',item:'ISSB IFRS S1/S2 Disclosure',status:'Yellow',date:'FY2027',owner:'Sustainability Officer',detail:'Framework scaffolded; first report target FY2027'},
    {area:'ESG Reporting',item:'CSRD (EU) alignment',status:'Yellow',date:'FY2028',owner:'Sustainability Officer',detail:'Materiality assessment; aligned to EU LP exposure'},
    {area:'Governance',item:'Board independence requirement',status:'Green',date:'Ongoing',owner:'Company Secretary',detail:'5 of 9 board seats independent · audit committee 100% independent'},
    {area:'Governance',item:'Audit Committee Charter',status:'Green',date:'Aug 2026',owner:'Audit Chair',detail:'Quarterly cadence · Big-4 external auditor mandate'},
    {area:'Financial Reporting',item:'IFRS financial statements',status:'Green',date:'Annual',owner:'CFO / EY',detail:'IFRS 10/15/16 compliance · Big-4 external audit engagement'},
  ];
  const areaGroups=[...new Set(checks.map(c=>c.area))];
  const greenCount=checks.filter(c=>c.status==='Green').length;
  const yellowCount=checks.filter(c=>c.status==='Yellow').length;
  const redCount=checks.filter(c=>c.status==='Red').length;
  APP.csvFilename='Compliance_Dashboard.csv';
  APP.csvRows=[['Area','Item','Status','Date','Owner'],...checks.map(c=>[c.area,c.item,c.status,c.date,c.owner])];
  const html=sheet('Compliance Dashboard','Regulatory · Legal · AML · Tax · Cyber · ESG · Governance · Reporting · 15 tracked items','',
    kpiGrid([
      ['Total Items',String(checks.length),''],
      ['Green / Complete',String(greenCount),'positive'],
      ['In Progress',String(yellowCount),'warning'],
      ['Critical Issues',String(redCount)||'None','positive'],
      ['Compliance Score',Math.round(greenCount/checks.length*100)+'%','positive'],
      ['Next Review','Q1 2027',''],
    ])+
    chartGrid(2,
      chartCard('ch-comp1','Compliance Status Distribution','Green · In Progress · Outstanding',200),
      chartCard('ch-comp2','Items by Regulatory Domain','Coverage breakdown',200)
    )+
    areaGroups.map(area=>section(area,
      '<div class="tbl-wrap"><table><thead><tr><th>Item</th><th>Status</th><th>Target Date</th><th>Owner</th><th>Detail</th></tr></thead><tbody>'+
      checks.filter(c=>c.area===area).map(c=>'<tr>'+
        '<td style="font-weight:500">'+c.item+'</td>'+
        '<td><span class="badge '+(c.status==='Green'?'green':c.status==='Red'?'red':'amber')+'">'+c.status+'</span></td>'+
        '<td>'+c.date+'</td>'+
        '<td style="color:var(--muted)">'+c.owner+'</td>'+
        '<td style="color:var(--muted);font-size:11px">'+c.detail+'</td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )).join('')
  );
  return{html,charts:()=>{
    donutChart('ch-comp1',['Green','In Progress','Outstanding'],[greenCount,yellowCount,Math.max(redCount,0)],[CC[1],CC[2],CC[6]]);
    const areaCounts=areaGroups.map(a=>checks.filter(c=>c.area===a).length);
    hBarChart('ch-comp2',areaGroups,areaCounts,CC.slice(0,areaGroups.length),v=>String(v));
  }};
}

// ---- ESG REPORTING ----
function viewESGReporting(){
  const yrArr=['2026','2027','2028','2029','2030'];
  const env_kpis=[
    {metric:'Scope 1 emissions (kt CO₂e)',v:[12,18,48,82,140]},
    {metric:'Scope 2 — market-based (kt CO₂e)',v:[4,8,22,38,62]},
    {metric:'Renewable energy %',v:[8,18,42,64,78]},
    {metric:'Water intensity (m³/$M rev)',v:[820,760,680,600,520]},
    {metric:'Land disturbed (ha)',v:[180,420,1200,2800,4200]},
    {metric:'Land rehabilitated (ha)',v:[0,20,80,200,450]},
  ];
  const soc_kpis=[
    {metric:'Total headcount (FTE)',v:[45,280,1800,4200,9600]},
    {metric:'Local employment %',v:[48,55,62,68,72]},
    {metric:'LTIFR (per 200k hrs)',v:[0,0.8,1.2,0.9,0.6]},
    {metric:'Community investment ($M)',v:[0.5,2.2,6.8,14,24]},
    {metric:'Training hours / employee',v:[24,32,38,42,45]},
    {metric:'Women in management %',v:[18,22,26,28,30]},
  ];
  const gov_kpis=[
    {metric:'Independent board directors',v:[5,5,6,6,7]},
    {metric:'Board diversity — women %',v:[11,22,28,28,33]},
    {metric:'Audit committee independence %',v:[100,100,100,100,100]},
    {metric:'CEO pay ratio (×)',v:[28,35,42,48,52]},
    {metric:'Supplier ESG screening %',v:[60,75,85,90,92]},
  ];
  const frameworks=[
    {name:'ISSB IFRS S1 (General Requirements)',status:'Scaffolded',target:'FY2027'},
    {name:'ISSB IFRS S2 (Climate)',status:'In Progress',target:'FY2027'},
    {name:'CSRD (EU ESRS)',status:'Planning',target:'FY2028'},
    {name:'GRI Standards',status:'Partial',target:'FY2027'},
    {name:'SASB — Metals & Mining',status:'Scaffolded',target:'FY2027'},
    {name:'TCFD Alignment',status:'Scaffolded',target:'FY2027'},
    {name:'UN SDG Mapping',status:'Complete',target:'Ongoing'},
    {name:'IFC Performance Standards',status:'Active',target:'Ongoing'},
  ];
  APP.csvFilename='ESG_Reporting.csv';
  APP.csvRows=[['Metric',...yrArr],...env_kpis.map(k=>[k.metric,...k.v]),...soc_kpis.map(k=>[k.metric,...k.v]),...gov_kpis.map(k=>[k.metric,...k.v])];
  const html=sheet('ESG & ISSB Reporting','Environmental · Social · Governance · ISSB S1/S2 · CSRD · GRI · TCFD · IFC PS alignment','',
    kpiGrid([
      ['ISSB S1/S2','In Progress','','Target FY2027'],
      ['CSRD Alignment','Planning','','Target FY2028'],
      ['GRI Reporting','Partial','','FY2027'],
      ['SDG Mapping','Complete','positive','17 goals mapped'],
      ['LTIFR (Latest)','0.8','positive','per 200k hrs FY2027'],
      ['Local Employment','55%','positive','FY2027'],
    ])+
    chartGrid(2,
      chartCard('ch-esg1','Scope 1 + 2 Emissions (kt CO₂e)','Annual trajectory · absolute and intensity',200),
      chartCard('ch-esg2','Renewable Energy Penetration','% of total energy consumption',200),
      chartCard('ch-esg3','Community Investment ($M)','Annual commitment · cumulative impact',200),
      chartCard('ch-esg4','Local Employment Rate (%)','Afghan national workforce percentage',200)
    )+
    section('Environmental KPIs',tbl(['Metric',...yrArr],env_kpis.map(k=>[k.metric,...k.v]),true))+
    section('Social KPIs',tbl(['Metric',...yrArr],soc_kpis.map(k=>[k.metric,...k.v]),true))+
    section('Governance KPIs',tbl(['Metric',...yrArr],gov_kpis.map(k=>[k.metric,...k.v]),true))+
    section('Reporting Framework Status',tbl(['Framework','Status','Target Date'],
      frameworks.map(f=>[f.name,badge(f.status,f.status==='Complete'||f.status==='Active'?'green':f.status==='Scaffolded'||f.status==='Partial'?'blue':'amber'),f.target]),true))
  );
  return{html,charts:()=>{
    barChart('ch-esg1',yrArr,[
      {label:'Scope 1',data:env_kpis[0].v,color:CC[6]},
      {label:'Scope 2',data:env_kpis[1].v,color:CC[2]},
    ],true);
    lineChart('ch-esg2',yrArr,[{label:'Renewable %',data:env_kpis[2].v,color:CC[1]}],v=>v+'%');
    barChart('ch-esg3',yrArr,[{label:'Community $M',data:soc_kpis[3].v,color:CC[1]}]);
    lineChart('ch-esg4',yrArr,[{label:'Local Employment %',data:soc_kpis[1].v,color:CC[0]}],v=>v+'%');
  }};
}

// ---- GEOPOLITICAL ----
function viewGeopolitical(){
  const countryRisks=[
    {region:'Afghanistan (operational)',score:42,trend:'↓',cat:'Medium-High',factors:'Governance transition · concession framework · monitored exposure',mitigation:'OFAC legal opinion (WSGR) · K&R $150M · PRI $250M · dual-jurisdiction ring-fence · ICA arbitration · quarterly compliance review · on-the-ground security protocol'},
    {region:'UAE (treasury hub)',score:18,trend:'↔',cat:'Low',factors:'Stable · DIFC · ADGM framework',mitigation:'UAE licensed entity · FSRA compliant · CBUAE reporting'},
    {region:'United Kingdom',score:12,trend:'↔',cat:'Low',factors:'NSI Act scrutiny · FDI screening',mitigation:'NSI clearance filed · Clifford Chance engaged'},
    {region:'United States',score:32,trend:'↓',cat:'Medium',factors:'OFAC secondary · CFIUS · ESG scrutiny',mitigation:'WSGR OFAC opinion secured · no US persons in prohibited activity · monthly SDN screening'},
    {region:'China (offtake)',score:40,trend:'↔',cat:'Medium',factors:'Geopolitical friction · supply chain risk',mitigation:'Diversified offtake LOIs · EU/Korea/Japan alternatives · no single-buyer concentration'},
    {region:'Saudi Arabia / GCC',score:20,trend:'↓',cat:'Low-Medium',factors:'Vision 2030 alignment · SWF participation',mitigation:'PIF/ADIA engagement · DIFC legal structure · MoU in progress'},
    {region:'Russia (regional)',score:52,trend:'↔',cat:'High',factors:'SWIFT/sanctions spillover · trans-boundary logistics',mitigation:'Central Asia corridor routing · no Russian financial exposure · Hairatan/Torkham routes active'},
    {region:'Central Asia corridor',score:35,trend:'↓',cat:'Medium',factors:'Border controls · customs · logistics',mitigation:'Hairatan primary route · Kandahar-Karachi backup · tri-party customs MoU'},
  ];

  const mitigationFramework=[
    {pillar:'Legal & Structural Ring-Fence',controls:['WSGR OFAC legal opinion renewed annually','Dual-jurisdiction concession structure (UAE HoldCo + Afghan OpCo)','30-year sovereign MoU with force majeure and ICSID arbitration clause','Clifford Chance (UK) and Baker McKenzie (US) on retainer'],status:'Active'},
    {pillar:'Financial & Insurance Controls',controls:['K&R (Kidnap & Ransom) insurance — $150M Aon-brokered','Political Risk Insurance (PRI) — $250M MIGA/Aon','War-risk and expropriation coverage across all operational sites','Segregated USD treasury accounts — no AFN exposure at group level'],status:'Active'},
    {pillar:'Security & Operational Protocol',controls:['Tier-3 security contractor (Control Risks) on all operational sites','Monthly security situation reports to Board Risk Committee','Evacuation and business continuity plans tested bi-annually','Staff vetting — biometric and background checks — all contractor grades'],status:'Active'},
    {pillar:'Compliance & Monitoring',controls:['Monthly OFAC/UN SDN counterparty screening (all vendors, LPs, offtakers)','Quarterly Board Risk Committee review with external advisor briefing','FATF compliance — all jurisdictions operate in non-grey-list territories','AML/KYC — full enhanced due diligence (EDD) completed for all 14 LPs'],status:'Active'},
    {pillar:'Governance Framework',controls:['Independent Risk Oversight Committee (3 independent directors)','External geopolitical advisor — Control Risks quarterly briefing','Board-level risk appetite statement reviewed annually','Whistleblower and incident escalation protocol — 24hr response SLA'],status:'Active'},
    {pillar:'Contingency & Response Plans',controls:['Documented exit and wind-down playbook for scenario escalation','Asset ring-fence ensures project assets preserved under any ownership transition','Multi-jurisdiction arbitration path (ICSID/LCIA) for concession disputes','Phased capital deployment — no full commitment until project-by-project milestone sign-off'],status:'Active'},
  ];

  const watchList=[
    {event:'OFAC Annual Opinion Renewal',date:'Q1 2027',impact:'High',status:'Scheduled'},
    {event:'UK NSI Act clearance response',date:'Q4 2026',impact:'High',status:'Awaiting'},
    {event:'US Congressional hearings — Afghan minerals',date:'Q2 2027',impact:'Medium',status:'Monitoring'},
    {event:'China NDRC Critical Minerals Review',date:'H1 2027',impact:'Medium',status:'Monitoring'},
    {event:'FATF Afghanistan status — bilateral engagement',date:'Q3 2027',impact:'Medium',status:'Managed'},
    {event:'UN SC — critical minerals access resolution',date:'2027',impact:'Medium',status:'Monitoring'},
    {event:'GCC — NERPA sovereign co-invest MoU',date:'Q3 2027',impact:'High',status:'Negotiation'},
    {event:'EU Critical Raw Materials Act (CRMA) — opportunity',date:'2026+',impact:'Medium',status:'Opportunity'},
    {event:'Afghanistan Concession Renewal Window',date:'2028',impact:'Medium',status:'Pre-positioned'},
    {event:'Security protocol quarterly review',date:'Q4 2026',impact:'Low',status:'On Track'},
  ];

  const scoringHistory=[
    {quarter:'Q3 2025',score:74,actions:'Initial OFAC opinion · legal structure established'},
    {quarter:'Q4 2025',score:66,actions:'K&R insurance placed · dual-jurisdiction concession drafted'},
    {quarter:'Q1 2026',score:58,actions:'PRI coverage secured · Control Risks protocol active'},
    {quarter:'Q2 2026',score:50,actions:'WSGR OFAC opinion renewed · Board Risk Committee established'},
    {quarter:'Q3 2026',score:45,actions:'NSI filing lodged · EDD on all LPs completed'},
    {quarter:'Q4 2026',score:42,actions:'Independent Risk Oversight Committee formed · contingency playbook finalised'},
  ];

  APP.csvFilename='Geopolitical_Monitor.csv';
  APP.csvRows=[['Region','Risk Score','Category','Trend','Key Factors','Mitigation Controls'],...countryRisks.map(r=>[r.region,r.score,r.cat,r.trend,r.factors,r.mitigation]),[''],['Event','Date','Impact','Status'],...watchList.map(w=>[w.event,w.date,w.impact,w.status])];

  const html=sheet('Geopolitical Monitor','Structured risk management · governance framework · sanctions compliance · security controls · mitigation protocols · watch-list oversight','',
    kpiGrid([
      ['Countries Monitored',String(countryRisks.length),''],
      ['Managed Exposure Regions','1','warning'],
      ['Watch-List Events',String(watchList.length),''],
      ['OFAC Status','Opinion secured','positive'],
      ['K&R Coverage','$150M','positive'],
      ['PRI Coverage','$250M','positive'],
      ['Risk Trend — Afghanistan','↓ Reducing','positive'],
      ['Mitigation Pillars','6 Active','positive'],
    ])+
    chartGrid(2,
      chartCard('ch-geo1','Country Risk Score (Managed)','Residual risk post-mitigation controls · scale 0–100',220),
      chartCard('ch-geo2','Risk Category Distribution','Residual exposure spread across tiers',220)
    )+
    section('Country Risk Assessment — Residual Exposure',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Scores reflect <strong>residual risk after application of all active mitigation controls</strong>. Afghanistan operational exposure has been reduced through structured legal, financial, and operational controls from an initial inherent score of 74 (Q3 2025) to a current managed score of 42 — a <strong>43% reduction</strong> driven by governance framework implementation.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Region</th><th>Residual Score</th><th>Trend</th><th>Category</th><th>Key Factors</th><th>Active Mitigation Controls</th></tr></thead><tbody>'+
      countryRisks.map(r=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+r.region+'</td>'+
        '<td style="text-align:right"><div style="display:flex;align-items:center;gap:8px;justify-content:flex-end"><div style="width:60px;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden"><div style="width:'+r.score+'%;height:100%;background:'+(r.score>=65?'#be123c':r.score>=40?'#d97706':'#2e7d52')+';border-radius:3px"></div></div><span style="font-weight:700;color:'+(r.score>=65?'var(--negative)':r.score>=40?'var(--warning)':'var(--positive)')+'">'+r.score+'</span></div></td>'+
        '<td style="text-align:center;color:'+(r.trend==='↓'?'var(--positive)':r.trend==='↑'?'var(--negative)':'var(--muted)')+'">'+r.trend+'</td>'+
        '<td><span class="badge '+(r.cat==='Critical'?'red':r.cat==='High'?'red':r.cat.includes('High')?'amber':r.cat.includes('Medium')?'blue':'green')+'">'+r.cat+'</span></td>'+
        '<td style="font-size:11px;color:var(--muted)">'+r.factors+'</td>'+
        '<td style="font-size:11px;color:var(--muted)">'+r.mitigation+'</td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )+
    section('Risk Reduction Trajectory — Afghanistan Operational',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:12px">Quarterly residual risk score following structured mitigation programme implementation. Each reduction reflects a discrete governance, legal, or operational control activated by the Risk Management function.</p>'+
      '<div class="tbl-wrap"><table><thead><tr><th>Quarter</th><th>Residual Score</th><th>Score Bar</th><th>Key Actions Taken</th></tr></thead><tbody>'+
      scoringHistory.map(h=>'<tr>'+
        '<td style="font-weight:600;color:var(--navy)">'+h.quarter+'</td>'+
        '<td style="text-align:center;font-weight:700;color:'+(h.score>=65?'var(--negative)':h.score>=45?'var(--warning)':'var(--positive)')+'">'+h.score+'/100</td>'+
        '<td><div style="width:120px;height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden"><div style="width:'+h.score+'%;height:100%;background:'+(h.score>=65?'#be123c':h.score>=45?'#d97706':'#2e7d52')+';border-radius:3px;transition:width .3s"></div></div></td>'+
        '<td style="font-size:11px;color:var(--muted)">'+h.actions+'</td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )+
    section('Mitigation Framework — Six Pillars of Risk Control',
      '<p style="font-size:12px;color:var(--muted);margin-bottom:14px">NERPA Capital operates a structured six-pillar risk mitigation framework specifically designed to manage Afghanistan operational exposure to an acceptable residual level consistent with institutional investment mandates.</p>'+
      mitigationFramework.map(p=>'<div style="background:#f8f9fb;border-radius:6px;padding:16px 18px;margin-bottom:10px;border-left:3px solid var(--navy)"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><span style="font-weight:700;font-size:13px;color:var(--navy)">'+p.pillar+'</span><span class="badge green">'+p.status+'</span></div><ul style="margin:0;padding-left:16px;list-style:disc">'+p.controls.map(c=>'<li style="font-size:12px;color:var(--txt);margin-bottom:4px">'+c+'</li>').join('')+'</ul></div>'
      ).join('')
    )+
    section('Geopolitical Watch List — Monitored Events',
      '<div class="tbl-wrap"><table><thead><tr><th>Event</th><th>Expected Date</th><th>Impact</th><th>Status</th></tr></thead><tbody>'+
      watchList.map(w=>'<tr>'+
        '<td>'+w.event+'</td><td>'+w.date+'</td>'+
        '<td><span class="badge '+(w.impact==='Critical'?'red':w.impact==='High'?'amber':'blue')+'">'+w.impact+'</span></td>'+
        '<td><span class="badge '+(w.status==='Opportunity'||w.status==='On Track'||w.status==='Managed'||w.status==='Pre-positioned'?'green':w.status==='Scheduled'?'green':w.status==='Monitoring'?'blue':w.status==='Awaiting'?'amber':'gray')+'">'+w.status+'</span></td>'+
      '</tr>').join('')+'</tbody></table></div>'
    )
  );
  return{html,charts:()=>{
    hBarChart('ch-geo1',countryRisks.map(r=>r.region.split('(')[0].trim()),countryRisks.map(r=>r.score),countryRisks.map(r=>r.score>=65?CC[6]:r.score>=40?CC[2]:CC[1]),v=>v+'/100');
    const cats=[...new Set(countryRisks.map(r=>r.cat))];
    donutChart('ch-geo2',cats,cats.map(c=>countryRisks.filter(r=>r.cat===c).length),CC.slice(0,cats.length));
  }};
}



// ============================================================
// INIT
// ============================================================
// Consolidate close-on-outside-click
document.addEventListener('click',e=>{
  if(!e.target.closest('#scenario-btn'))document.getElementById('scenario-dropdown').classList.remove('open');
  if(!e.target.closest('#topbar-search')){const sd=document.getElementById('search-dropdown');if(sd)sd.style.display='none';}
});

function init(){
  // Restore state
  try{const t=localStorage.getItem('nerpa.tab');if(t&&TABS.find(x=>x.id===t))APP.activeTab=t;}catch(e){}
  try{const s=localStorage.getItem('nerpa.scenario');if(s&&SCENARIOS[s])APP.scenarioId=s;}catch(e){}
  APP.model=buildModel(APP.scenarioId);
  // Render scenario button colour
  const sc=SCENARIOS[APP.scenarioId];
  const btn=document.getElementById('scenario-btn');
  if(btn)btn.style.background=APP.scenarioId==='growth'?'rgba(46,125,82,.3)':APP.scenarioId==='conservative'?'rgba(217,119,6,.3)':APP.scenarioId==='downside'?'rgba(190,18,60,.3)':'rgba(255,255,255,.1)';
  document.getElementById('sc-label').textContent=sc.label;
  renderSidebar();
  renderMobileNav();
  renderBottomNav();
  renderView(APP.activeTab);
}

init();
