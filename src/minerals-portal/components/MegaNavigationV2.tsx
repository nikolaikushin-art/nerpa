import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import MegaMenuDropdown from './navigation/MegaMenuDropdown';
import ProvincesDropdown from './navigation/ProvincesDropdown';
import OperationsDropdown from './navigation/OperationsDropdown';
import InvestmentDropdown from './navigation/InvestmentDropdown';
import TimelineDropdown, { createTimelineLinks } from './navigation/TimelineDropdown';
import ContactDropdown from './navigation/ContactDropdown';
import { Menu, X, ChevronDown, Mountain, Gem, Pickaxe, Atom, Crown, Factory, Flame, Sparkles, Globe, Users, Building, Map, FileText, Shield, Leaf, Zap, FlaskConical, Truck, Scale, Compass, Layers, Battery, Hammer, CircleDot, Hexagon, Diamond, Droplets, Wheat, Cylinder, Boxes, Workflow, Orbit, Anvil, Cloudy, Lightbulb, Paintbrush, Cpu, ThermometerSun, Construction, Package, MapPin, Shovel, FlaskRound, Landmark, ArrowRightLeft, BarChart3, Drill, Cog, Wrench, Target, Radar, TestTubes, CircuitBoard, Magnet, Warehouse, Award, BookOpen, Microscope, Crosshair, Server, Rocket, Cable, GanttChart, Activity, Gauge, Beaker, Scan, Binary, Palette, Scissors, Stamp, FileCheck, Search, Archive, Container, Pipette, Blend, Fuel, Bomb, Gem as GemIcon, Ratio, Shapes, Box, SquareStack, Columns3, Dice1, Dice2, Dice3, Fan, Shell, Cherry, Citrus, TreePine, Flower2, Sprout, Aperture, AudioWaveform, BadgeCheck, BellRing, CircleDashed, Diamond as DiamondIcon, Fingerprint, Heart, Minimize, Pentagon, RotateCcw, ScanLine, Star, Sunset, Timer, Unplug, Wind, Waves, BatteryCharging, BatteryFull, PlugZap, Power, Signal, Smartphone, Tablet, Watch, Wifi, Play, Pause, SkipForward, Volume2, Radio } from 'lucide-react';
import { Button } from '@/minerals-portal/components/ui/button';
const MegaNavigationV2 = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't close if clicking inside dropdown or button
      if (target.closest('[data-dropdown-container]') || target.closest('button')) {
        return;
      }
      setActiveDropdown(null);
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  // STRATEGIC METALS
  const strategicMetals = [{
    title: t.mineralsMegaMenu.strategicMetals.copper.title,
    icon: Hammer,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.copper.items.mesAynak,
      href: '/minerals/copper/mes-aynak', icon: Landmark
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.hajigak,
      href: '/minerals/copper/hajigak', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.balkhab,
      href: '/minerals/copper/balkhab', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.processing,
      href: '/minerals/copper/processing', icon: Cog
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.exports,
      href: '/minerals/copper/exports', icon: ArrowRightLeft
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.smelting,
      href: '/minerals/copper/smelting', icon: Flame
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.logar,
      href: '/minerals/copper/logar', icon: Compass
    }, {
      label: t.mineralsMegaMenu.strategicMetals.copper.items.refining,
      href: '/minerals/copper/refining', icon: FlaskRound
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.lithium.title,
    icon: Battery,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.ghazni,
      href: '/minerals/lithium/ghazni', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.nuristan,
      href: '/minerals/lithium/nuristan', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.batteryGrade,
      href: '/minerals/lithium/processing', icon: BatteryCharging
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.evSupply,
      href: '/minerals/lithium/ev-supply', icon: PlugZap
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.research,
      href: '/minerals/lithium/research', icon: Microscope
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.carbonate,
      href: '/minerals/lithium/carbonate', icon: FlaskConical
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.spodumene,
      href: '/minerals/lithium/spodumene', icon: Gem
    }, {
      label: t.mineralsMegaMenu.strategicMetals.lithium.items.batteryMaterials,
      href: '/minerals/lithium/battery-materials', icon: BatteryFull
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.ironOre.title,
    icon: Mountain,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.hajigak,
      href: '/minerals/iron/hajigak', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.steelProduction,
      href: '/minerals/iron/steel-production', icon: Factory
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.magnetite,
      href: '/minerals/iron/magnetite', icon: Magnet
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.infrastructure,
      href: '/minerals/iron/infrastructure', icon: Building
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.employment,
      href: '/minerals/iron/employment', icon: Users
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.beneficiation,
      href: '/minerals/iron/beneficiation', icon: Cog
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.pelletization,
      href: '/minerals/iron/pelletization', icon: CircleDot
    }, {
      label: t.mineralsMegaMenu.strategicMetals.ironOre.items.bamyan,
      href: '/minerals/iron/bamyan', icon: MapPin
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.leadZinc.title,
    icon: CircleDot,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.leadZinc.items.aynak,
      href: '/minerals/lead-zinc/aynak', icon: Landmark
    }, {
      label: t.mineralsMegaMenu.strategicMetals.leadZinc.items.zincConcentrate,
      href: '/minerals/lead-zinc/zinc-concentrate', icon: FlaskConical
    }, {
      label: t.mineralsMegaMenu.strategicMetals.leadZinc.items.smelting,
      href: '/minerals/lead-zinc/smelting', icon: Flame
    }, {
      label: t.mineralsMegaMenu.strategicMetals.leadZinc.items.batteryMaterials,
      href: '/minerals/lead-zinc/battery-materials', icon: Battery
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.cobaltNickel.title,
    icon: Orbit,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.cobaltNickel.items.cobalt,
      href: '/minerals/cobalt/deposits', icon: Atom
    }, {
      label: t.mineralsMegaMenu.strategicMetals.cobaltNickel.items.nickel,
      href: '/minerals/nickel/laterite', icon: Layers
    }, {
      label: t.mineralsMegaMenu.strategicMetals.cobaltNickel.items.alloys,
      href: '/minerals/cobalt-nickel/alloys', icon: Wrench
    }, {
      label: t.mineralsMegaMenu.strategicMetals.cobaltNickel.items.evSupply,
      href: '/minerals/cobalt-nickel/ev-supply', icon: PlugZap
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.aluminum.title,
    icon: Hexagon,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.aluminum.items.bauxite,
      href: '/minerals/aluminum/bauxite', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.strategicMetals.aluminum.items.alumina,
      href: '/minerals/aluminum/alumina', icon: Factory
    }, {
      label: t.mineralsMegaMenu.strategicMetals.aluminum.items.cryolite,
      href: '/minerals/aluminum/cryolite', icon: Gem
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.title,
    icon: Shield,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.tungsten,
      href: '/minerals/strategic/tungsten', icon: Target
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.molybdenum,
      href: '/minerals/strategic/molybdenum', icon: Crosshair
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.vanadium,
      href: '/minerals/strategic/vanadium', icon: Zap
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.titaniumRutile,
      href: '/minerals/strategic/titanium/rutile', icon: Shield
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.titaniumIlmenite,
      href: '/minerals/strategic/titanium/ilmenite', icon: Magnet
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.tin,
      href: '/minerals/strategic/tin', icon: Box
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.antimony,
      href: '/minerals/strategic/antimony', icon: Flame
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.zirconium,
      href: '/minerals/strategic/zirconium', icon: Atom
    }, {
      label: t.mineralsMegaMenu.strategicMetals.strategicHardMetals.items.tantalum,
      href: '/minerals/strategic/tantalum', icon: CircuitBoard
    }]
  }, {
    title: t.mineralsMegaMenu.strategicMetals.energyFuel.title,
    icon: Lightbulb,
    items: [{
      label: t.mineralsMegaMenu.strategicMetals.energyFuel.items.uranium,
      href: '/minerals/energy/uranium', icon: Atom
    }]
  }];

  // PRECIOUS RESOURCES
  const preciousResources = [{
    title: t.mineralsMegaMenu.preciousResources.gemstones.title,
    icon: Diamond,
    items: [{
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.panjshirEmeralds,
      href: '/minerals/gems/emeralds', icon: Gem
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.lapisLazuli,
      href: '/minerals/gems/lapis', icon: Diamond
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.jegdalekRubies,
      href: '/minerals/gems/rubies', icon: Heart
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.sapphires,
      href: '/minerals/gems/sapphires', icon: Star
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.tourmaline,
      href: '/minerals/gems/tourmaline', icon: Aperture
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.aquamarine,
      href: '/minerals/gems/aquamarine', icon: Waves
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.cutting,
      href: '/minerals/gems/cutting', icon: Scissors
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.certification,
      href: '/minerals/gems/certification', icon: BadgeCheck
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.trade,
      href: '/minerals/gems/trade', icon: Globe
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.kunzite,
      href: '/minerals/gems/kunzite', icon: Sparkles
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.garnet,
      href: '/minerals/gems/garnet', icon: Pentagon
    }, {
      label: t.mineralsMegaMenu.preciousResources.gemstones.items.peridot,
      href: '/minerals/gems/peridot', icon: Flower2
    }]
  }, {
    title: t.mineralsMegaMenu.preciousResources.gold.title,
    icon: Sparkles,
    items: [{
      label: t.mineralsMegaMenu.preciousResources.gold.items.badakhshan,
      href: '/minerals/gold/badakhshan', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.takhar,
      href: '/minerals/gold/takhar', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.refining,
      href: '/minerals/gold/refining', icon: FlaskRound
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.artisanal,
      href: '/minerals/gold/artisanal', icon: Pickaxe
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.bullion,
      href: '/minerals/gold/bullion', icon: Award
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.processing,
      href: '/minerals/gold/processing', icon: Factory
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.exports,
      href: '/minerals/gold/exports', icon: ArrowRightLeft
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.placer,
      href: '/minerals/gold/placer', icon: Waves
    }, {
      label: t.mineralsMegaMenu.preciousResources.gold.items.lode,
      href: '/minerals/gold/lode', icon: Compass
    }]
  }, {
    title: t.mineralsMegaMenu.preciousResources.rareEarth.title,
    icon: Atom,
    items: [{
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.helmand,
      href: '/minerals/ree/helmand', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.technology,
      href: '/minerals/ree/technology', icon: Cpu
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.neodymium,
      href: '/minerals/ree/neodymium', icon: Magnet
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.globalSupply,
      href: '/minerals/ree/global-supply', icon: Globe
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.research,
      href: '/minerals/ree/research', icon: Microscope
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.concentrate,
      href: '/minerals/ree/concentrate', icon: FlaskConical
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.dysprosium,
      href: '/minerals/ree/dysprosium', icon: Atom
    }, {
      label: t.mineralsMegaMenu.preciousResources.rareEarth.items.separation,
      href: '/minerals/ree/separation', icon: Workflow
    }]
  }, {
    title: t.mineralsMegaMenu.preciousResources.silver.title,
    icon: Crown,
    items: [{
      label: t.mineralsMegaMenu.preciousResources.silver.items.deposits,
      href: '/minerals/silver/deposits', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.preciousResources.silver.items.refining,
      href: '/minerals/silver/refining', icon: FlaskRound
    }, {
      label: t.mineralsMegaMenu.preciousResources.silver.items.leadOres,
      href: '/minerals/silver/lead-ores', icon: Layers
    }, {
      label: t.mineralsMegaMenu.preciousResources.silver.items.industrial,
      href: '/minerals/silver/industrial', icon: Factory
    }]
  }];

  // INDUSTRIAL MINERALS
  const industrialMinerals = [{
    title: t.mineralsMegaMenu.industrialMinerals.chromite.title,
    icon: Scale,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.reserves,
      href: '/minerals/chromite/reserves', icon: BarChart3
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.exports,
      href: '/minerals/chromite/exports', icon: ArrowRightLeft
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.steel,
      href: '/minerals/chromite/steel', icon: Shield
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.mining,
      href: '/minerals/chromite/mining', icon: Pickaxe
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.ferrochrome,
      href: '/minerals/chromite/ferrochrome', icon: Flame
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.chromite.items.logar,
      href: '/minerals/chromite/logar', icon: MapPin
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.marble.title,
    icon: Construction,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.white,
      href: '/minerals/marble/white', icon: Diamond
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.herat,
      href: '/minerals/marble/herat', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.architectural,
      href: '/minerals/marble/architectural', icon: Building
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.processing,
      href: '/minerals/marble/processing', icon: Cog
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.exports,
      href: '/minerals/marble/exports', icon: ArrowRightLeft
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.varieties,
      href: '/minerals/marble/varieties', icon: Palette
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.marble.items.trade,
      href: '/minerals/marble/trade', icon: Globe
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.coal.title,
    icon: Flame,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.basins,
      href: '/minerals/coal/basins', icon: Layers
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.underground,
      href: '/minerals/coal/underground', icon: Pickaxe
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.baghlan,
      href: '/minerals/coal/baghlan', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.metallurgical,
      href: '/minerals/coal/metallurgical', icon: Factory
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.thermal,
      href: '/minerals/coal/thermal', icon: Zap
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.processing,
      href: '/minerals/coal/processing', icon: Cog
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.coal.items.energy,
      href: '/minerals/coal/energy', icon: Power
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.talcBarite.title,
    icon: Droplets,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.talc,
      href: '/minerals/talc/high-purity', icon: Gem
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.drilling,
      href: '/minerals/barite/drilling', icon: Drill
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.salt,
      href: '/minerals/salt/deposits', icon: Droplets
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.talcProcessing,
      href: '/minerals/talc/processing', icon: Cog
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.bariteConcentrates,
      href: '/minerals/barite/concentrates', icon: FlaskConical
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.talcBarite.items.industrial,
      href: '/minerals/talc-barite/industrial', icon: Factory
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.gypsumLimestone.title,
    icon: Building,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.gypsumLimestone.items.gypsum,
      href: '/minerals/gypsum/deposits', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.gypsumLimestone.items.limestone,
      href: '/minerals/limestone/quarries', icon: Pickaxe
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.gypsumLimestone.items.cement,
      href: '/minerals/gypsum-limestone/cement', icon: Factory
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.gypsumLimestone.items.construction,
      href: '/minerals/gypsum-limestone/construction', icon: Building
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.clayKaolin.title,
    icon: Paintbrush,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.kaolin,
      href: '/minerals/kaolin/deposits', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.ceramic,
      href: '/minerals/clay/ceramic', icon: Shapes
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.pottery,
      href: '/minerals/clay-kaolin/manufacturing', icon: Palette
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.paper,
      href: '/minerals/kaolin/paper', icon: FileText
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.refractory,
      href: '/minerals/kaolin/refractory', icon: ThermometerSun
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.paint,
      href: '/minerals/kaolin/paint', icon: Paintbrush
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.pharmaceutical,
      href: '/minerals/kaolin/pharmaceutical', icon: TestTubes
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.clayKaolin.items.cosmetic,
      href: '/minerals/kaolin/cosmetic', icon: Sparkles
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.title,
    icon: FlaskConical,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.sulfur,
      href: '/minerals/sulfur/deposits', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.pyrite,
      href: '/minerals/pyrite/resources', icon: Gem
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.fertilizer,
      href: '/minerals/sulfur/fertilizer', icon: Sprout
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.chemical,
      href: '/minerals/sulfur/chemical', icon: FlaskConical
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.acid,
      href: '/minerals/sulfur/acid', icon: Droplets
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.mining,
      href: '/minerals/sulfur/mining', icon: Pickaxe
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.agricultural,
      href: '/minerals/sulfur/agricultural', icon: Wheat
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.sulfurPyrite.items.processing,
      href: '/minerals/pyrite/processing', icon: Cog
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.title,
    icon: Layers,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.mica,
      href: '/minerals/mica/deposits', icon: Layers
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.feldspar,
      href: '/minerals/feldspar/resources', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.electronics,
      href: '/minerals/mica/electronics', icon: CircuitBoard
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.glass,
      href: '/minerals/feldspar/glass', icon: Shapes
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.sheets,
      href: '/minerals/mica/sheets', icon: FileText
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.ceramic,
      href: '/minerals/feldspar/ceramic', icon: Palette
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.insulation,
      href: '/minerals/mica/insulation', icon: Shield
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.micaFeldspar.items.abrasive,
      href: '/minerals/feldspar/abrasive', icon: Cog
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.title,
    icon: Cylinder,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.graphite,
      href: '/minerals/graphite/deposits', icon: Cylinder
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.battery,
      href: '/minerals/graphite/battery', icon: BatteryCharging
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.steel,
      href: '/minerals/graphite/steel', icon: Factory
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.lubricant,
      href: '/minerals/graphite/lubricant', icon: Droplets
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.refractory,
      href: '/minerals/graphite/refractory', icon: ThermometerSun
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.graphiteCarbon.items.carbonFiber,
      href: '/minerals/graphite/carbon-fiber', icon: Cable
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.title,
    icon: Wheat,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.phosphate,
      href: '/minerals/phosphate/deposits', icon: MapPin
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.fertilizer,
      href: '/minerals/phosphate/fertilizer', icon: Sprout
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.agricultural,
      href: '/minerals/phosphate/agricultural', icon: Wheat
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.food,
      href: '/minerals/phosphate/food', icon: Cherry
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.potash,
      href: '/minerals/potash/resources', icon: Mountain
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.phosphatePotash.items.chemical,
      href: '/minerals/phosphate/chemical', icon: FlaskConical
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.quartzSilica.title,
    icon: Cpu,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.quartz,
      href: '/minerals/quartz/deposits', icon: Diamond
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.silica,
      href: '/minerals/silica/sand', icon: Waves
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.glass,
      href: '/minerals/quartz/glass', icon: Shapes
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.semiconductor,
      href: '/minerals/silica/semiconductor', icon: Cpu
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.foundry,
      href: '/minerals/silica/foundry', icon: Factory
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.quartzSilica.items.filtration,
      href: '/minerals/silica/filtration', icon: Scan
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.refractories.title,
    icon: ThermometerSun,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.refractories.items.magnesite,
      href: '/minerals/refractories/magnesite', icon: Flame
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.refractories.items.bentonite,
      href: '/minerals/refractories/bentonite', icon: Layers
    }, {
      label: t.mineralsMegaMenu.industrialMinerals.refractories.items.pyrophyllite,
      href: '/minerals/refractories/pyrophyllite', icon: Gem
    }]
  }, {
    title: t.mineralsMegaMenu.industrialMinerals.dimensionStones.title,
    icon: Package,
    items: [{
      label: t.mineralsMegaMenu.industrialMinerals.dimensionStones.items.granite,
      href: '/minerals/stones/granite', icon: Mountain
    }]
  }];
  const provinceLinks = [
    { label: t.navDropdowns.provinces.badakhshan, href: '/provinces/badakhshan' },
    { label: t.navDropdowns.provinces.badghis, href: '/provinces/badghis' },
    { label: t.navDropdowns.provinces.baghlan, href: '/provinces/baghlan' },
    { label: t.navDropdowns.provinces.balkh, href: '/provinces/balkh' },
    { label: t.navDropdowns.provinces.bamyan, href: '/provinces/bamyan' },
    { label: t.navDropdowns.provinces.daykundi, href: '/provinces/daykundi' },
    { label: t.navDropdowns.provinces.farah, href: '/provinces/farah' },
    { label: t.navDropdowns.provinces.faryab, href: '/provinces/faryab' },
    { label: t.navDropdowns.provinces.ghazni, href: '/provinces/ghazni' },
    { label: t.navDropdowns.provinces.ghor, href: '/provinces/ghor' },
    { label: t.navDropdowns.provinces.helmand, href: '/provinces/helmand' },
    { label: t.navDropdowns.provinces.herat, href: '/provinces/herat' },
    { label: t.navDropdowns.provinces.jowzjan, href: '/provinces/jowzjan' },
    { label: t.navDropdowns.provinces.kabul, href: '/provinces/kabul' },
    { label: t.navDropdowns.provinces.kandahar, href: '/provinces/kandahar' },
    { label: t.navDropdowns.provinces.kapisa, href: '/provinces/kapisa' },
    { label: t.navDropdowns.provinces.khost, href: '/provinces/khost' },
    { label: t.navDropdowns.provinces.kunar, href: '/provinces/kunar' },
    { label: t.navDropdowns.provinces.kunduz, href: '/provinces/kunduz' },
    { label: t.navDropdowns.provinces.laghman, href: '/provinces/laghman' },
    { label: t.navDropdowns.provinces.logar, href: '/provinces/logar' },
    { label: t.navDropdowns.provinces.nangarhar, href: '/provinces/nangarhar' },
    { label: t.navDropdowns.provinces.nimruz, href: '/provinces/nimruz' },
    { label: t.navDropdowns.provinces.nuristan, href: '/provinces/nuristan' },
    { label: t.navDropdowns.provinces.paktia, href: '/provinces/paktia' },
    { label: t.navDropdowns.provinces.paktika, href: '/provinces/paktika' },
    { label: t.navDropdowns.provinces.panjshir, href: '/provinces/panjshir' },
    { label: t.navDropdowns.provinces.parwan, href: '/provinces/parwan' },
    { label: t.navDropdowns.provinces.samangan, href: '/provinces/samangan' },
    { label: t.navDropdowns.provinces.sarEPol, href: '/provinces/sar-e-pol' },
    { label: t.navDropdowns.provinces.takhar, href: '/provinces/takhar' },
    { label: t.navDropdowns.provinces.uruzgan, href: '/provinces/uruzgan' },
    { label: t.navDropdowns.provinces.wardak, href: '/provinces/wardak' },
    { label: t.navDropdowns.provinces.zabul, href: '/provinces/zabul' }
  ];
  const operationsLinks = [{
    label: t.navDropdowns.operations.processing.label,
    href: '/operations/processing',
    icon: Factory,
    description: t.navDropdowns.operations.processing.description
  }, {
    label: t.navDropdowns.operations.smelting.label,
    href: '/operations/smelting',
    icon: Flame,
    description: t.navDropdowns.operations.smelting.description
  }, {
    label: t.navDropdowns.operations.research.label,
    href: '/operations/research',
    icon: FlaskConical,
    description: t.navDropdowns.operations.research.description
  }, {
    label: t.navDropdowns.operations.geological.label,
    href: '/operations/geological',
    icon: Compass,
    description: t.navDropdowns.operations.geological.description
  }, {
    label: t.navDropdowns.operations.trade.label,
    href: '/operations/trade',
    icon: Truck,
    description: t.navDropdowns.operations.trade.description
  }, {
    label: t.navDropdowns.operations.investment.label,
    href: '/operations/investment',
    icon: Scale,
    description: t.navDropdowns.operations.investment.description
  }, {
    label: t.navDropdowns.operations.sustainability.label,
    href: '/operations/sustainability',
    icon: Leaf,
    description: t.navDropdowns.operations.sustainability.description
  }, {
    label: t.navDropdowns.operations.community.label,
    href: '/operations/community',
    icon: Users,
    description: t.navDropdowns.operations.community.description
  }, {
    label: t.navDropdowns.operations.digital.label,
    href: '/operations/digital',
    icon: Globe,
    description: t.navDropdowns.operations.digital.description
  }, {
    label: t.navDropdowns.operations.safety.label,
    href: '/operations/safety',
    icon: Shield,
    description: t.navDropdowns.operations.safety.description
  }];

  // Investment links for mobile accordion (mirrors InvestmentDropdown structure)
  const investmentLinksMobile = [
    { label: t.navDropdowns.investment.framework.label, href: '/investment/framework' },
    { label: t.navDropdowns.investment.opportunities.label, href: '/investment/opportunities' },
    { label: t.navDropdowns.investment.partnerships.label, href: '/investment/partnerships' },
    { label: t.navDropdowns.investment.incentives.label, href: '/investment/incentives' },
    { label: t.navDropdowns.investment.riskManagement.label, href: '/investment/risk-management' },
    { label: t.navDropdowns.investment.partners.label, href: '/investment/partners' },
    { label: t.navDropdowns.investment.process.label, href: '/investment/process' },
    { label: t.navDropdowns.investment.statistics.label, href: '/investment/statistics' },
    { label: 'Due Diligence & Assessment', href: '/investment/due-diligence' },
    { label: 'Fiscal Terms & Revenue', href: '/investment/fiscal-terms' },
    { label: 'Environmental Compliance', href: '/investment/environmental-compliance' },
    { label: 'Workforce Development', href: '/investment/workforce-development' },
    { label: 'Infrastructure Support', href: '/investment/infrastructure-support' },
    { label: 'Dispute Resolution', href: '/investment/dispute-resolution' },
    { label: 'Mining Technology', href: '/investment/technology-innovation' },
    { label: 'Community Benefit', href: '/investment/community-benefit' },
  ];

  // Full timeline link set for mobile accordion - matches desktop dropdown
  const timelineLinksMobile = createTimelineLinks(t);

  // Contact links for mobile accordion (mirrors ContactDropdown structure)
  const contactLinksMobile = [
    { label: t.navDropdowns.contact.form.label, href: '#contact' },
    { label: t.navDropdowns.contact.offices.label, href: '/contact/offices' },
    { label: t.navDropdowns.contact.email.label, href: '/contact/email' },
    { label: t.navDropdowns.contact.phone.label, href: '/contact/phone' },
    { label: t.navDropdowns.contact.departments.label, href: '/contact/departments' },
    { label: t.navDropdowns.contact.international.label, href: '/contact/international' },
    { label: t.navDropdowns.contact.media.label, href: '/contact/media' },
    { label: t.navDropdowns.contact.partnerships.label, href: '/contact/partnerships' }
  ];

  const handleMobileLinkClick = (href: string) => {
    // Close everything immediately
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);

    // Use requestAnimationFrame to ensure state updates before navigation
    requestAnimationFrame(() => {
      // Check if it's a hash link (scroll) or route link
      if (href.startsWith('#')) {
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Navigate to the route
        navigate(href);
        // Scroll to top immediately after navigation
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  };

  const handleMobileLinkClickEvent = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    handleMobileLinkClick(href);
  };

  // Desktop dropdown handler (for mega menu dropdowns)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(null);
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const scrollToTop = () => {
    // Use multiple methods to ensure scroll works across browsers and scroll containers
    const scroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const topEl = document.getElementById('page-top');
      if (topEl) topEl.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    scroll();
    requestAnimationFrame(scroll);
    setTimeout(scroll, 0);
    setTimeout(scroll, 50);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/minerals-portal') {
      e.preventDefault();
      scrollToTop();
      setIsMobileMenuOpen(false);
    }
  };

  return <header className={`fixed top-[66px] ${isRTL ? 'right-0' : 'left-0'} z-50 w-full transition-all duration-500 ${
      isScrolled
        ? 'bg-background/99 backdrop-blur-2xl border-b border-border/60 shadow-[0_20px_60px_rgba(0,0,0,0.75)]'
        : 'bg-gradient-to-b from-background/98 via-background/92 to-background/75 shadow-[0_20px_60px_rgba(0,0,0,0.65)]'
    }`}>
      <div className="mx-auto max-w-[1920px] px-6 py-[4px]">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/minerals-portal" onClick={handleHomeClick} className="flex items-center gap-4 group">
            <div className="relative">
              
              
            </div>
            <div className="hidden md:block">
              
              <span className="ml-3 text-xs text-muted-foreground uppercase tracking-[0.3em]">Minerals Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Overview */}
            <Link to="/minerals-portal" onClick={handleHomeClick} className="px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary rounded-lg hover:bg-secondary/50">
              {t.nav.home}
            </Link>

            {/* Strategic Minerals Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'minerals' ? null : 'minerals');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'minerals' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.minerals}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'minerals' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'minerals' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <MegaMenuDropdown strategicMetals={strategicMetals} preciousResources={preciousResources} industrialMinerals={industrialMinerals} onItemClick={handleClick} />
                </div>
              )}
            </div>

            {/* Provinces Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'provinces' ? null : 'provinces');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'provinces' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.provinces}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'provinces' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'provinces' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <ProvincesDropdown provinceLinks={provinceLinks} onItemClick={handleClick} />
                </div>
              )}
            </div>

            {/* Operations Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'operations' ? null : 'operations');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'operations' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.operations}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'operations' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'operations' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <OperationsDropdown operationsLinks={operationsLinks} onItemClick={handleClick} />
                </div>
              )}
            </div>

            {/* Investment Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'investment' ? null : 'investment');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'investment' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.investment}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'investment' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'investment' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <InvestmentDropdown onItemClick={handleClick} />
                </div>
              )}
            </div>

            {/* Timeline Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'timeline' ? null : 'timeline');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'timeline' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.timeline}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'timeline' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'timeline' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <TimelineDropdown onItemClick={handleClick} />
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div 
              className="relative" 
              data-dropdown-container
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'contact' ? null : 'contact');
                }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                  activeDropdown === 'contact' ? 'text-primary bg-secondary/30' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t.nav.contact}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'contact' && (
                <div onClick={(e) => e.stopPropagation()}>
                  <ContactDropdown onItemClick={handleClick} />
                </div>
              )}
            </div>

            <div className="ml-4 pl-4 flex items-center gap-3 border-l border-border/50">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            {!isMobileMenuOpen ? (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="relative h-9 w-9 rounded-md bg-muted/50 backdrop-blur-sm border border-border/30 flex items-center justify-center transition-all duration-200 hover:bg-muted/80 active:scale-95"
              >
                <div className="w-4 h-3 flex flex-col justify-between">
                  <span className="block h-[1.5px] w-full bg-foreground/80 rounded-full" />
                  <span className="block h-[1.5px] w-3 bg-foreground/50 rounded-full" />
                  <span className="block h-[1.5px] w-full bg-foreground/80 rounded-full" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative h-10 w-10 rounded-full bg-background/80 backdrop-blur-md border-2 border-foreground/20 flex items-center justify-center transition-all duration-300 hover:border-foreground/40 active:scale-95 shadow-[0_0_15px_hsla(220,20%,6%,0.5)]"
              >
                <div className="h-8 w-8 rounded-full border border-foreground/10 flex items-center justify-center">
                  <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                    <span className="absolute block h-[1.5px] w-3.5 bg-foreground/70 rounded-full rotate-45" />
                    <span className="absolute block h-[1.5px] w-3.5 bg-foreground/70 rounded-full -rotate-45" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="mt-4 lg:hidden max-h-[80vh] overflow-y-auto border-t border-border/50 pt-4 animate-fade-in"
            onClick={(e) => {
              // Prevent clicks inside nav from closing menu unless it's a link
              const target = e.target as HTMLElement;
              if (target.tagName === 'A' || target.closest('a')) {
                return; // Let link handle it
              }
              e.stopPropagation();
            }}
          >
            <div className="space-y-2">
              {/* Mobile - Home */}
              <Link
                to="/minerals-portal"
                onClick={handleHomeClick}
                className="block w-full text-left text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors border-b border-border/30"
              >
                {t.nav.home}
              </Link>
              {/* Mobile - Minerals */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-minerals');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.minerals}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-minerals' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-minerals' && (
                  <div className="pl-4 space-y-3 mt-2 pb-2">
                    {[...strategicMetals, ...preciousResources, ...industrialMinerals].map(category => (
                      <div key={category.title} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <category.icon className="h-4 w-4" />
                          {category.title}
                        </div>
                        <div className="pl-6 space-y-1">
                          {category.items.map(item => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMobileLinkClick(item.href);
                              }}
                              className="block w-full text-left text-xs text-muted-foreground py-1.5 hover:text-primary transition-colors"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
      
              {/* Mobile - Provinces */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-provinces');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.provinces}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-provinces' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-provinces' && (
                  <div className="pl-4 grid grid-cols-2 gap-2 mt-2 pb-2">
                    {provinceLinks.map(link => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileLinkClick(link.href);
                        }}
                        className="text-left text-xs text-muted-foreground py-2 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile - Investment */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-investment');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.investment}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-investment' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-investment' && (
                  <div className="pl-4 space-y-1 mt-2 pb-2">
                    {investmentLinksMobile.map(link => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileLinkClick(link.href);
                        }}
                        className="block w-full text-left text-xs text-muted-foreground py-1.5 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile - Operations */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-operations');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.operations}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-operations' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-operations' && (
                  <div className="pl-4 space-y-1 mt-2 pb-2">
                    {operationsLinks.map(link => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileLinkClick(link.href);
                        }}
                        className="block w-full text-left text-xs text-muted-foreground py-1.5 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile - Timeline */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-timeline');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.timeline}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-timeline' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-timeline' && (
                  <div className="pl-4 space-y-1 mt-2 pb-2 max-h-[50vh] overflow-y-auto">
                    {timelineLinksMobile.map(link => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileLinkClick(link.href);
                        }}
                        className="block w-full text-left text-xs text-muted-foreground py-1.5 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile - Contact */}
              <div className="border-b border-border/30 pb-2">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('mobile-contact');
                  }} 
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.contact}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-contact' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-contact' && (
                  <div className="pl-4 space-y-1 mt-2 pb-2">
                    {contactLinksMobile.map(link => (
                      <button
                        key={link.label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMobileLinkClick(link.href);
                        }}
                        className="block w-full text-left text-xs text-muted-foreground py-1.5 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile - Map */}
              <div className="pb-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMobileLinkClick('#map');
                  }}
                  className="block w-full text-left text-sm font-medium text-foreground py-3 px-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  {t.nav.map}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>;
};
export default MegaNavigationV2;