# Image Replacement Guide - Realistic Images Needed

## Overview
This document lists all images currently used across the website that need to be replaced with more realistic, authentic, high-quality images. Approximately 50% of current images appear generated or artificial and need authentic replacements.

## Priority: HIGH - Replace with Realistic, Authentic Images

### Sector Pages (Hero Images)
**Location**: `src/assets/sectors/`

1. **Mining Sector** (`mining-aynak-copper.jpg`)
   - **Current**: May appear generated
   - **Need**: Real photo of Aynak copper mine or actual mining operations in Afghanistan
   - **Used in**: `src/pages/SectorMining.tsx`

2. **Agriculture Sector** (`saffron-harvest-herat.jpg`)
   - **Current**: May appear generated
   - **Need**: Authentic photo of saffron harvest in Herat province
   - **Used in**: `src/pages/SectorAgriculture.tsx`

3. **Energy Sector** (`solar-farm-afghanistan.jpg`)
   - **Current**: May appear generated
   - **Need**: Real solar farm installation in Afghanistan
   - **Used in**: `src/pages/SectorEnergy.tsx`

4. **Healthcare Sector** (`modern-hospital-kabul.jpg`)
   - **Current**: May appear generated
   - **Need**: Real hospital building or medical facility in Kabul
   - **Used in**: `src/pages/SectorHealthcare.tsx`

5. **Technology Sector** (`tech-startup-kabul.jpg`)
   - **Current**: May appear generated
   - **Need**: Real tech office or startup workspace in Kabul
   - **Used in**: `src/pages/SectorTechnology.tsx`

6. **Infrastructure Sector** (`highway-bridge-mountains.jpg`)
   - **Current**: May appear generated
   - **Need**: Real highway or bridge infrastructure in Afghanistan
   - **Used in**: `src/pages/SectorInfrastructure.tsx`

7. **Education Sector** (`university-classroom-modern.jpg`)
   - **Current**: May appear generated
   - **Need**: Real university classroom or educational facility
   - **Used in**: `src/pages/SectorEducation.tsx`

8. **Finance Sector** (`banking-headquarters.jpg`)
   - **Current**: May appear generated
   - **Need**: Real bank building or financial institution in Afghanistan
   - **Used in**: `src/pages/SectorFinance.tsx`

9. **Water Sector** (`hydro-dam-kajaki.jpg`)
   - **Current**: May appear generated
   - **Need**: Real hydroelectric dam (Kajaki or similar) in Afghanistan
   - **Used in**: `src/pages/SectorWater.tsx`

10. **Housing Sector** (`urban-housing-kabul.jpg`)
    - **Current**: May appear generated
    - **Need**: Real urban housing development in Kabul
    - **Used in**: `src/pages/SectorHousing.tsx`

### Province Pages (Hero Images)
**Location**: `src/assets/provinces/`

1. **Kabul** (`kabul-panorama.jpg`)
   - **Need**: Real panoramic view of Kabul city
   - **Used in**: `src/pages/ProvinceComprehensiveKabul.tsx`

2. **Herat** (`herat-ancient-citadel.jpg`)
   - **Need**: Real photo of Herat Citadel (UNESCO site)
   - **Used in**: `src/pages/ProvinceComprehensiveHerat.tsx`

3. **Kandahar** (`kandahar-pomegranate-fields.jpg`)
   - **Need**: Real pomegranate fields in Kandahar
   - **Used in**: `src/pages/ProvinceComprehensiveKandahar.tsx`

4. **Balkh** (`balkh-blue-mosque.jpg`)
   - **Need**: Real photo of Blue Mosque (Shrine of Ali) in Mazar-i-Sharif
   - **Used in**: `src/pages/ProvinceComprehensiveBalkh.tsx`

5. **Nangarhar** (`nangarhar-jalalabad.jpg` or `nangarhar-citrus.jpg`)
   - **Need**: Real photo of Jalalabad or citrus fields
   - **Used in**: `src/pages/ProvinceComprehensiveNangarhar.tsx`

### Index Page Images
**Location**: `src/assets/sectors/` and `src/assets/provinces/`

All images used in `src/pages/Index.tsx` need realistic replacements:
- `miningCopper` - Real copper mining operations
- `agricultureSaffron` - Real saffron harvest
- `energySolar` - Real solar installations
- `healthcareHospital` - Real hospitals
- `educationClassroom` - Real classrooms
- `waterDam` - Real dams
- `bankingModern` - Real banks
- `smartCity` - Real smart city infrastructure
- `infrastructureBridge` - Real bridges
- `housingDevelopment` - Real housing projects
- `digitalTech` - Real tech facilities
- `energyWind` - Real wind farms
- `logisticsTransport` - Real logistics hubs
- `cultureHeritage` - Real heritage sites
- `businessConference` - Real business events
- `agriculturePomegranate` - Real pomegranate harvests
- `energyControlCenter` - Real energy control centers
- `dataCenterFacility` - Real data centers
- `agriculturalResearch` - Real agricultural research facilities

### Component Images
**Location**: Various component files

1. **ProvinceShowcase Component** (`src/components/ProvinceShowcase.tsx`)
   - All 34 province images need realistic replacements
   - Current images may appear generated

2. **InteractiveSectorExplorer Component** (`src/components/InteractiveSectorExplorer.tsx`)
   - All sector-specific images need realistic replacements
   - Includes: copper mines, lithium extraction, saffron harvests, greenhouses, construction, wind farms, surgery rooms, university campuses, dams, banks, tech offices, logistics hubs, etc.

3. **HeroSlideshow Component** (`src/components/HeroSlideshow.tsx`)
   - Hero images need realistic replacements

## Image Quality Requirements

### Criteria for Realistic Images:
1. **Authentic**: Real photos, not AI-generated or stock photos that look fake
2. **High Quality**: Minimum 1920x1080 resolution, sharp and clear
3. **Contextually Appropriate**: Images should actually represent Afghanistan
4. **Professional**: Well-composed, good lighting, professional photography
5. **Natural**: No obvious signs of AI generation, manipulation, or artificiality
6. **Relevant**: Images should match the content they represent

### Sources for Realistic Images:
1. **Stock Photo Sites** (with realistic filters):
   - Unsplash (free, high-quality)
   - Pexels (free, realistic)
   - Pixabay (free, verify authenticity)
   - Getty Images (paid, high-quality)
   - Shutterstock (paid, verify authenticity)

2. **Afghanistan-Specific Sources**:
   - Real news photography from Afghanistan
   - Documentary photography
   - Travel photography (with proper licensing)
   - Government or NGO photography (with permission)

3. **Verification Checklist**:
   - Does the image look natural?
   - Are there any obvious AI artifacts?
   - Does it authentically represent Afghanistan?
   - Is the lighting and composition natural?
   - Would a viewer believe this is a real photo?

## Implementation Steps

1. **Audit Current Images**: Review all images in `src/assets/` folders
2. **Identify Generated Images**: Flag images that appear AI-generated or artificial
3. **Source Replacements**: Find realistic alternatives for each flagged image
4. **Verify Authenticity**: Ensure replacements look natural and authentic
5. **Replace Files**: Update image files while maintaining same filenames
6. **Test**: Verify images display correctly across all pages
7. **Quality Check**: Review final result to ensure 100% realistic images

## Priority Order

1. **Hero Images** (Sector and Province pages) - HIGHEST PRIORITY
2. **Index Page Images** - HIGH PRIORITY
3. **Component Images** (ProvinceShowcase, InteractiveSectorExplorer) - MEDIUM PRIORITY
4. **Background Images** - LOWER PRIORITY

## Notes

- Maintain same filenames when replacing to avoid code changes
- Ensure images are optimized for web (compressed but high quality)
- Consider using WebP format for better performance
- Maintain aspect ratios where possible
- Ensure images are properly licensed for commercial use
