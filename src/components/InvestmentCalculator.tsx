import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator, TrendingUp, DollarSign, Factory, Wheat, Zap, Building2,
  Pickaxe, Cpu, Heart, GraduationCap, Truck, Home, Globe, ChevronRight,
  Info, Target, Users, Clock, CheckCircle, BarChart3, PieChart } from
"lucide-react";

const sectors = [
{
  id: "mining",
  name: "Mining & Minerals",
  icon: Pickaxe,
  baseROI: 18,
  riskLevel: "medium",
  timeline: "5-8 years",
  minInvestment: 10,
  description: "Copper, lithium, rare earth elements extraction",
  keyFactors: ["Resource quality", "Infrastructure access", "Export routes"]
},
{
  id: "agriculture",
  name: "Agriculture & Food",
  icon: Wheat,
  baseROI: 12,
  riskLevel: "low",
  timeline: "2-4 years",
  minInvestment: 0.5,
  description: "Saffron, pomegranates, dried fruits processing",
  keyFactors: ["Climate conditions", "Export certifications", "Cold chain"]
},
{
  id: "energy",
  name: "Renewable Energy",
  icon: Zap,
  baseROI: 15,
  riskLevel: "low",
  timeline: "3-5 years",
  minInvestment: 5,
  description: "Solar, wind, hydroelectric power generation",
  keyFactors: ["Grid connectivity", "PPP framework", "Tariff guarantees"]
},
{
  id: "manufacturing",
  name: "Manufacturing",
  icon: Factory,
  baseROI: 14,
  riskLevel: "medium",
  timeline: "3-6 years",
  minInvestment: 2,
  description: "Textiles, food processing, construction materials",
  keyFactors: ["Labour availability", "Raw materials", "Market access"]
},
{
  id: "technology",
  name: "Technology & IT",
  icon: Cpu,
  baseROI: 22,
  riskLevel: "medium",
  timeline: "2-4 years",
  minInvestment: 0.2,
  description: "Software development, fintech, e-commerce",
  keyFactors: ["Talent pool", "Internet infrastructure", "Regulatory support"]
},
{
  id: "infrastructure",
  name: "Infrastructure",
  icon: Building2,
  baseROI: 10,
  riskLevel: "low",
  timeline: "5-10 years",
  minInvestment: 20,
  description: "Roads, bridges, airports, utilities",
  keyFactors: ["Government contracts", "PPP terms", "Maintenance provisions"]
},
{
  id: "healthcare",
  name: "Healthcare",
  icon: Heart,
  baseROI: 13,
  riskLevel: "low",
  timeline: "3-5 years",
  minInvestment: 3,
  description: "Hospitals, pharmaceuticals, medical equipment",
  keyFactors: ["Licensing", "Equipment supply", "Skilled workforce"]
},
{
  id: "education",
  name: "Education",
  icon: GraduationCap,
  baseROI: 11,
  riskLevel: "low",
  timeline: "4-7 years",
  minInvestment: 1,
  description: "Universities, vocational training, EdTech",
  keyFactors: ["Accreditation", "Curriculum standards", "Demand patterns"]
},
{
  id: "logistics",
  name: "Transport & Logistics",
  icon: Truck,
  baseROI: 16,
  riskLevel: "medium",
  timeline: "3-5 years",
  minInvestment: 5,
  description: "Warehousing, freight, cold chain facilities",
  keyFactors: ["Location", "Trade routes", "Customs efficiency"]
},
{
  id: "realestate",
  name: "Real Estate",
  icon: Home,
  baseROI: 12,
  riskLevel: "low",
  timeline: "3-6 years",
  minInvestment: 2,
  description: "Residential, commercial, mixed-use development",
  keyFactors: ["Land rights", "Urban planning", "Financing options"]
}];


const investmentTiers = [
{ min: 0, max: 1, multiplier: 1 },
{ min: 1, max: 10, multiplier: 1.1 },
{ min: 10, max: 50, multiplier: 1.2 },
{ min: 50, max: 100, multiplier: 1.25 },
{ min: 100, max: Infinity, multiplier: 1.3 }];


export const InvestmentCalculator = () => {
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [investmentAmount, setInvestmentAmount] = useState(10);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);

  const getTierMultiplier = (amount: number) => {
    const tier = investmentTiers.find((t) => amount >= t.min && amount < t.max);
    return tier?.multiplier || 1;
  };

  const calculateROI = () => {
    const tierMultiplier = getTierMultiplier(investmentAmount);
    const adjustedROI = selectedSector.baseROI * tierMultiplier;
    const yearlyReturn = investmentAmount * (adjustedROI / 100);
    const totalReturn = investmentAmount + yearlyReturn * investmentPeriod;
    const percentageGain = (totalReturn - investmentAmount) / investmentAmount * 100;

    return {
      adjustedROI: adjustedROI.toFixed(1),
      yearlyReturn: yearlyReturn.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      percentageGain: percentageGain.toFixed(0),
      jobsCreated: Math.round(investmentAmount * 50), // Estimate 50 jobs per $1M
      taxContribution: (investmentAmount * 0.15).toFixed(2) // 15% estimated tax
    };
  };

  const results = calculateROI();
  const SectorIcon = selectedSector.icon;

  return (
    <section id="calculator" className="py-32 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            Investment Analysis Tool
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">ROI Calculator</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore projected returns across Afghanistan's priority investment sectors. 
            Adjust parameters to model potential outcomes for your investment portfolio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Sector Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1">
            
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Select Sector
            </h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {sectors.map((sector) => {
                const Icon = sector.icon;
                const isSelected = selectedSector.id === sector.id;

                return (
                  <motion.button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    isSelected ?
                    'bg-primary/20 border-primary/50' :
                    'bg-card border-border/50 hover:border-primary/30'}`
                    }>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-primary/30' : 'bg-white/5'}`
                      }>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-white/60'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                          {sector.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          Base ROI: {sector.baseROI}% | {sector.timeline}
                        </div>
                      </div>
                      {isSelected && <ChevronRight className="w-4 h-4 text-primary" />}
                    </div>
                  </motion.button>);

              })}
            </div>
          </motion.div>

          {/* Middle: Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1">
            
            <div className="bg-card rounded-2xl border border-border/50 p-6">
              {/* Selected Sector Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/30">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <SectorIcon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{selectedSector.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedSector.description}</p>
                </div>
              </div>

              {/* Investment Amount Slider */}
              <div className="mb-8">
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Investment Amount
                  </span>
                  <span className="text-lg font-bold text-primary">${investmentAmount}M</span>
                </label>
                <input
                  type="range"
                  min={selectedSector.minInvestment}
                  max="100"
                  step="0.5"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" />
                
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Min: ${selectedSector.minInvestment}M</span>
                  <span>Max: $100M</span>
                </div>
              </div>

              {/* Investment Period Slider */}
              <div className="mb-8">
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Investment Period
                  </span>
                  <span className="text-lg font-bold text-primary">{investmentPeriod} Years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" />
                
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 Year</span>
                  <span>15 Years</span>
                </div>
              </div>

              {/* Risk & Timeline Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Risk Level</div>
                  <div className={`font-semibold capitalize ${
                  selectedSector.riskLevel === 'low' ? 'text-green-400' :
                  selectedSector.riskLevel === 'medium' ? 'text-amber-400' : 'text-red-400'}`
                  }>
                    {selectedSector.riskLevel}
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Typical Timeline</div>
                  <div className="font-semibold text-foreground">{selectedSector.timeline}</div>
                </div>
              </div>

              {/* Key Success Factors */}
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Key Success Factors</span>
                </div>
                <div className="space-y-2">
                  {selectedSector.keyFactors.map((factor, i) =>
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      {factor}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1">
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/30 p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Projected Returns
              </h3>

              {/* Main Results */}
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Adjusted Annual ROI</div>
                  <div className="text-4xl font-bold text-primary">{results.adjustedROI}%</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-card/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Yearly Return</div>
                    <div className="text-xl font-bold text-foreground">${results.yearlyReturn}M</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-1">Total Value ({investmentPeriod}yr)</div>
                    <div className="text-xl font-bold text-foreground">${results.totalReturn}M</div>
                  </div>
                </div>

                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Total Gain</div>
                  <div className="text-3xl font-bold text-green-400">+{results.percentageGain}%</div>
                  <div className="text-xs text-muted-foreground">
                    ${(parseFloat(results.totalReturn) - investmentAmount).toFixed(2)}M profit
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Economic Impact
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-card/30 rounded-lg">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">{results.jobsCreated.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Jobs Created</div>
                  </div>
                  <div className="text-center p-3 bg-card/30 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">${results.taxContribution}M</div>
                    <div className="text-xs text-muted-foreground">Tax Contribution</div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <p className="text-xs text-amber-200/80">
                  <strong>Note:</strong> These projections are estimates based on sector averages and market conditions. 
                  Actual returns may vary. Consult with NERPA investment advisors for detailed analysis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center">
          
          <p className="text-lg text-muted-foreground mb-6">
            Ready to explore investment opportunities in Afghanistan?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Contact Investment Team
            </button>
            

            
          </div>
        </motion.div>
      </div>
    </section>);

};