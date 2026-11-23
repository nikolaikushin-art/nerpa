/**
 * MASSIVE CONTACT SECTIONS EXPANSION
 * Deep-expands all contact page sections with rich, unique content
 */

import { Briefcase, Building, CheckCircle2, Clock, FileText, Globe, Handshake, Headphones, Mail, MapPin, MessageSquare, Phone, Send, Users } from 'lucide-react';

export const EMAIL_EXTRA_SECTIONS = [
  {
    title: 'Automated Response & Tracking Systems',
    content: `Intelligent email routing systems classify incoming messages by content, language, and urgency using natural language processing. Investment inquiries containing keywords like "opportunity," "investment," or "partnership" receive automatic priority routing to the investment team with acknowledgment within 2 hours. Technical queries route to appropriate technical departments based on mineral type, regulatory area, or engineering discipline. General inquiries receive standard acknowledgment within 4 hours with full response within 24-48 hours.

Ticketing systems assign unique reference numbers to each inquiry, enabling status tracking through online portals. Requestors can check response status, add supplementary information, and view response history through self-service portals. Escalation procedures automatically notify managers when response times approach deadlines, ensuring that no inquiry falls through administrative gaps.

Analytics dashboards track response volumes, times, satisfaction scores, and inquiry categories. Weekly reports identify trends enabling proactive content development—frequently asked questions become knowledge base articles, reducing future inquiry volumes. Seasonal patterns inform staffing decisions ensuring adequate coverage during peak investment seasons. These systems ensure consistent, measurable communication quality across all email channels.`,
    icon: Mail,
    alignment: 'left' as const
  },
  {
    title: 'Secure Document Exchange & Data Room Access',
    content: `Virtual data rooms (VDRs) provide secure environments for sharing confidential geological, financial, and legal documents with qualified investors. Access-controlled repositories organize documents by project, category, and classification level. Watermarking, download restrictions, and view-only modes protect sensitive information while enabling due diligence review. Audit trails record every document access, providing transparency for both parties.

Encrypted file transfer systems supplement data rooms for ad-hoc document exchange. End-to-end encryption ensures that documents remain protected in transit and at rest. Large file handling accommodates geological databases, seismic surveys, and high-resolution imagery that exceed standard email attachment limits. Expiring links provide time-limited access to sensitive documents, automatically revoking access after review periods.

Document management systems organize ministry archives including geological reports, exploration data, contract templates, and regulatory guidance. Version control ensures that recipients always access current documents. Translation management coordinates multilingual document versions. These systems support the full lifecycle of investor engagement from initial inquiry through due diligence to contract execution and ongoing reporting.`,
    icon: FileText,
    alignment: 'right' as const
  },
  {
    title: 'Multilingual Communication & Cultural Liaison',
    content: `The Ministry maintains professional translation and interpretation services supporting communication in English, Dari, Pashto, Arabic, Chinese, Russian, Turkish, and French. Certified translators ensure accuracy of technical, legal, and financial documents. Terminology databases maintain consistent translation of mining-specific vocabulary across languages and documents. Quality assurance through back-translation verification ensures that critical documents convey intended meaning.

Cultural liaison officers facilitate communication with investors from different cultural backgrounds. Understanding business customs, communication styles, and decision-making processes enables more effective engagement. Liaison officers prepare briefings on Afghan business culture for incoming investors while advising ministry officials on partner country customs. This cultural bridge reduces misunderstandings and accelerates relationship building.

Language-specific communication channels ensure that non-English-speaking investors receive native-language support. Chinese-language investor relations staff serve the significant Chinese mining investment community. Arabic-language services support Middle Eastern investors. Russian-language capability leverages historical connections and technical vocabulary established during Soviet-era cooperation. These comprehensive language services ensure that communication barriers never impede investment opportunities.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Investor Relations & Periodic Reporting',
    content: `Structured investor relations programs maintain ongoing communication with current and prospective investors. Monthly newsletters summarize regulatory developments, project milestones, and market conditions. Quarterly reports provide detailed operational and financial updates for active projects. Annual reviews compile comprehensive sector performance data including production statistics, revenue figures, and development progress.

Investor conferences and roadshows present Afghan mineral opportunities to international investment communities. Annual Afghanistan Mining Investment Forum convenes in Dubai, attracting 500+ participants from 40+ countries. Regional roadshows in London, Beijing, Toronto, and Perth target mining investment centers. Virtual briefings enable regular engagement without travel. Presentation materials include geological summaries, financial projections, and regulatory overviews tailored to investor audience sophistication.

ESG (Environmental, Social, and Governance) reporting addresses growing investor requirements for sustainability disclosure. Annual sustainability reports following GRI (Global Reporting Initiative) standards document environmental performance, community impact, and governance practices. TCFD (Task Force on Climate-related Financial Disclosures) reporting addresses climate risk and opportunity. These reports demonstrate alignment with international best practice and support ESG-focused investment mandates.`,
    icon: Briefcase,
    alignment: 'right' as const
  },
];

export const PHONE_EXTRA_SECTIONS = [
  {
    title: 'Video Conferencing & Virtual Meeting Infrastructure',
    content: `Professional video conferencing facilities enable virtual meetings between ministry officials and international stakeholders. Purpose-built conference rooms with high-definition cameras, multi-microphone arrays, and large-format displays provide near-in-person meeting quality. Secure conferencing platforms protect confidential discussions. Simultaneous interpretation feeds enable multilingual meetings without interruption.

Virtual site visit capabilities leverage drone video, 360-degree cameras, and satellite imagery to provide remote stakeholders with visual understanding of project sites and mineral deposits. Pre-recorded flyover videos supplement live sessions, providing polished presentations of project areas. Geological visualization software presents 3D subsurface models during technical briefings, enabling remote geologists to evaluate deposits from their offices.

Webinar platforms support large-scale information dissemination. Monthly technical webinars present geological, engineering, and environmental topics relevant to Afghan mineral development. Registration systems manage attendance while recording enables on-demand viewing. Q&A sessions provide interactive engagement. These virtual capabilities extend the Ministry's reach to global audiences while reducing travel requirements.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Call Center Operations & Quality Assurance',
    content: `Dedicated call center operations provide structured support during extended business hours. Tier 1 operators handle common inquiries using knowledge base scripts, resolving 70% of calls at first contact. Complex inquiries escalate to Tier 2 subject matter experts in geology, law, or finance. Tier 3 escalation routes to senior ministry officials for strategic or policy questions requiring authority.

Quality assurance programs monitor call quality through recording, evaluation, and coaching. Random call monitoring by supervisors identifies training needs and service improvement opportunities. Customer satisfaction surveys following calls measure service quality. Net Promoter Score (NPS) tracking quantifies stakeholder loyalty and identifies detractors requiring follow-up. These quality programs ensure consistent, professional service delivery.

Interactive voice response (IVR) systems provide automated information for common requests. Callers access recorded information about business hours, office locations, application status, and regulatory guidance without agent assistance. IVR systems operate 24/7 in English, Dari, and Pashto. Callback scheduling enables callers to reserve appointments for complex discussions. These automated systems improve efficiency while ensuring caller satisfaction.`,
    icon: Phone,
    alignment: 'right' as const
  },
  {
    title: 'Satellite Communication & Remote Site Connectivity',
    content: `VSAT (Very Small Aperture Terminal) satellite communication systems provide reliable connectivity to remote mining operations beyond terrestrial network coverage. Ku-band and Ka-band systems deliver broadband internet, voice, and video communication to mine sites in mountainous terrain where fiber optic and cellular coverage is unavailable. Redundant satellite links ensure communication continuity essential for safety and operations.

Remote site communication supports operational management, safety monitoring, and community engagement. Daily reporting from exploration camps transmits geological data and personnel status. Emergency communication systems provide distress alerting and coordination capability. Telemedicine links connect remote site clinics to provincial hospitals for specialist consultation. These systems ensure that even the most remote mining operations maintain reliable contact with headquarters and support services.

Mesh radio networks provide local communication within mine sites and surrounding communities. Digital radio systems carry voice, data, and safety alerts across mine infrastructure. Community radio broadcasting shares information about mining activities, safety procedures, and community programs with local populations. Mobile communication infrastructure installed by mining companies often represents the first telecommunications access for remote communities, creating lasting communication benefits beyond mining operations.`,
    icon: Headphones,
    alignment: 'left' as const
  },
];

export const OFFICES_EXTRA_SECTIONS = [
  {
    title: 'One-Stop Investment Service Centers',
    content: `One-stop investment service centers co-locate representatives from all relevant government agencies—mining ministry, environment, finance, commerce, customs, and land authority—in single facilities serving investors. This co-location eliminates the need for investors to visit multiple offices across Kabul, reducing permit processing time from months to weeks. Dedicated case managers guide investors through regulatory processes, coordinating across agencies on their behalf.

Service centers include document preparation assistance, ensuring that applications meet all requirements before submission. Template libraries provide standard documents in multiple languages. Legal advisory services help investors understand regulatory requirements. Financial modeling support assists with feasibility study development. These value-added services reduce investor transaction costs while accelerating project development.

Digital service delivery extends one-stop center access online. E-licensing portals enable application submission, payment, and status tracking from anywhere in the world. Video consultations connect international investors with service center staff. Electronic document authentication eliminates requirements for physical presence. These digital services ensure that Afghanistan's regulatory environment is accessible to investors regardless of location or time zone.`,
    icon: Building,
    alignment: 'left' as const
  },
  {
    title: 'Provincial Geological Survey Offices & Core Libraries',
    content: `Provincial geological survey offices maintain regional geological knowledge and core libraries serving exploration companies and researchers. Core libraries preserve diamond drill core from historical and current exploration programs, creating permanent geological records accessible for future reference. Climate-controlled storage ensures long-term core preservation. Cataloging systems enable efficient identification and retrieval of specific intervals.

Core logging facilities at provincial offices provide workspace for geologists examining historical core. Digital photography, spectral scanning, and X-ray fluorescence analysis equipment enable modern analytical techniques to be applied to historical core. Re-analysis of legacy core with modern methods has revealed mineralization overlooked by earlier investigations, demonstrating the value of systematic core preservation.

Provincial geological databases compile all available geological information for each province—maps, reports, analytical results, and interpretation. GIS platforms enable spatial analysis and visualization. Data sharing agreements with international research institutions ensure access to latest analytical techniques. These provincial resources ensure that geological knowledge is preserved, accessible, and continuously improved, supporting informed mineral development decisions across Afghanistan.`,
    icon: MapPin,
    alignment: 'right' as const
  },
  {
    title: 'International Mining Attaché Network',
    content: `Mining attachés stationed in key international capitals represent Afghanistan's mineral sector interests abroad. Attachés in Beijing serve the world's largest mineral consumer market, facilitating trade and investment from Chinese companies. London-based attachés engage with the global mining finance community centered on the London Metal Exchange and London mining investment houses. Dubai attachés serve Middle Eastern investors and coordinate logistics through the region's trade hub.

Mining attachés organize regular networking events connecting Afghan mineral opportunities with international capital. Investment breakfasts, geological presentations, and mine site video tours provide varying engagement levels for different audience types. Pre-qualified investor databases enable targeted outreach for specific project opportunities. Follow-up coordination ensures that interested investors receive timely, comprehensive information.

Cultural and commercial intelligence gathered by attachés informs ministry strategy. Understanding investor sentiment, competitive dynamics, and market trends enables proactive positioning of Afghan opportunities. Competitor benchmarking identifies regulatory improvements that would enhance Afghan competitiveness. Policy recommendations based on international experience guide reform efforts. The attaché network serves as both commercial representative and strategic intelligence resource.`,
    icon: Globe,
    alignment: 'left' as const
  },
];
