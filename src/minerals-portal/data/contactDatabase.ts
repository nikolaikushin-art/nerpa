// Comprehensive Contact Database - Ultra-Long Detail Pages
import { Briefcase, Building, CheckCircle2, Clock, FileText, Globe, Handshake, Headphones, Mail, MapPin, MessageSquare, Phone, Send, Users } from 'lucide-react';

export interface ContactData {
  title: string;
  subtitle: string;
  overview: string;
  stats: { value: string; label: string; description: string }[];
  sections: {
    title: string;
    content: string;
    icon: typeof Mail;
    alignment: 'left' | 'right';
  }[];
  contactMethods?: {
    title: string;
    details: string[];
    icon: typeof Mail;
  }[];
  departments?: {
    name: string;
    description: string;
    contacts: string[];
  }[];
  relatedResources?: { name: string; href: string; icon: typeof Mail }[];
}

const contactDatabase: Record<string, ContactData> = {
  'email': {
    title: 'Email Contact Information',
    subtitle: 'Direct Email Communication Channels',
    overview: `The Ministry of Mines and Petroleum maintains comprehensive email communication channels ensuring efficient contact with investors, partners, and stakeholders. Email communications provide detailed responses to inquiries, enable document exchange, and facilitate ongoing dialogue throughout project development. Multiple email addresses serve different purposes including general inquiries, investment questions, technical support, and media relations.

General inquiries are handled through the main ministry email, with responses typically provided within 24-48 hours. Investment inquiries receive priority attention with dedicated investment team members ensuring rapid response to potential investors. Technical inquiries are routed to appropriate technical experts ensuring accurate, detailed responses.

Email communications support multiple languages including English, Dari, and Pashto, ensuring that all stakeholders can communicate effectively. Automated acknowledgment systems confirm receipt of emails, while tracking systems ensure that inquiries receive appropriate follow-up. Document exchange through secure email systems enables efficient information sharing.

The ministry maintains email systems meeting international security standards, ensuring that sensitive information is protected. Encrypted communications protect confidential information, while secure document exchange systems enable safe transmission of technical data and financial information. These systems ensure that all communications meet security requirements while maintaining efficiency.`,

    stats: [
      { value: '24-48hrs', label: 'Response Time', description: 'Typical response' },
      { value: '3', label: 'Languages', description: 'English, Dari, Pashto' },
      { value: '100%', label: 'Secure', description: 'Encrypted communications' },
      { value: 'Multiple', label: 'Channels', description: 'Specialized addresses' },
      { value: 'Priority', label: 'Investment', description: 'Dedicated support' },
      { value: '24/7', label: 'Monitoring', description: 'Continuous availability' },
    ],

    sections: [
      {
        title: 'General Inquiries & Information Requests',
        content: `General inquiries regarding mineral resources, investment opportunities, and regulatory information are handled through the main ministry email address. The general inquiries team provides comprehensive responses to questions about mineral deposits, investment processes, legal frameworks, and development opportunities. Responses typically include detailed information, relevant documents, and guidance on next steps.

Information requests receive priority attention with dedicated information officers ensuring rapid response. Frequently requested information including mineral maps, investment guides, and regulatory documents are available for immediate download, while customized information is prepared based on specific requests. The information team maintains comprehensive databases ensuring accurate, up-to-date responses.

General inquiries support multiple languages ensuring that all stakeholders can communicate effectively. Translation services ensure that responses are provided in preferred languages, while multilingual staff enable direct communication in English, Dari, and Pashto. This multilingual support ensures that language barriers do not impede communication.

Response tracking systems ensure that all inquiries receive appropriate follow-up, with automated reminders ensuring that no inquiry is overlooked. Quality assurance processes ensure that responses are accurate, comprehensive, and helpful. Customer satisfaction surveys gather feedback enabling continuous improvement of communication services.`,
        icon: Mail,
        alignment: 'left'
      },
      {
        title: 'Investment Inquiries & Project Development',
        content: `Investment inquiries receive dedicated support through specialized investment team email addresses. The investment team includes experts in project development, legal frameworks, fiscal terms, and partnership structures, ensuring comprehensive responses to investment questions. Investment inquiries typically receive responses within 24 hours, with priority attention for major projects.

The investment team provides detailed information on available opportunities, investment processes, legal frameworks, and partnership models. Responses include preliminary project information, investment guides, and guidance on application procedures. For serious investors, the team arranges detailed briefings and site visits enabling comprehensive project evaluation.

Project development inquiries receive support from technical experts who can provide detailed information on geological resources, development requirements, and operational considerations. Technical responses include resource estimates, feasibility study summaries, and development roadmaps. These technical details enable informed investment decisions.

Confidentiality is maintained for investment inquiries, with secure communication channels protecting sensitive business information. Non-disclosure agreements can be executed to protect proprietary information, while secure document exchange enables safe transmission of technical and financial data. These protections ensure that investors can share information confidentially.`,
        icon: Briefcase,
        alignment: 'right'
      },
      {
        title: 'Technical Support & Regulatory Compliance',
        content: `Technical inquiries receive support from specialized technical teams including geologists, engineers, and environmental specialists. Technical support addresses questions about resource estimates, mining methods, processing technologies, and environmental management. Technical responses include detailed explanations, relevant standards, and guidance on best practices.

Regulatory compliance inquiries receive support from regulatory experts who can provide detailed information on licensing requirements, environmental standards, and compliance obligations. Regulatory support includes guidance on application procedures, compliance monitoring, and reporting requirements. This support ensures that projects meet all regulatory obligations.

Technical documentation exchange enables efficient sharing of geological data, engineering designs, and environmental assessments. Secure document systems protect sensitive technical information while enabling efficient collaboration. Technical review services provide expert evaluation of project proposals and technical plans.

Ongoing technical support continues throughout project development, with technical teams available to address questions and provide guidance. Regular technical meetings enable detailed discussion of technical issues, while technical workshops provide training on regulatory requirements and best practices. This ongoing support ensures successful project development.`,
        icon: FileText,
        alignment: 'left'
      },
      {
        title: 'Media Relations & Public Communications',
        content: `Media inquiries receive dedicated support through specialized media relations email addresses. The media relations team provides information to journalists, responds to media questions, and facilitates media access to projects and officials. Media support includes press releases, background information, and interview coordination.

Public communications address questions from civil society, community organizations, and the general public. Public communication teams provide information about projects, environmental management, and community benefits. Transparent communication builds public trust while ensuring that stakeholders understand project impacts and benefits.

Social media communications enable rapid dissemination of information and engagement with stakeholders. Social media teams monitor discussions, respond to questions, and share updates about projects and development. This engagement ensures that information reaches broad audiences while enabling two-way communication.

Crisis communications procedures ensure rapid response to emergencies or incidents. Dedicated crisis communication teams provide accurate, timely information during emergencies, ensuring that stakeholders receive necessary information. These procedures protect public safety while maintaining transparency.`,
        icon: Globe,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'General Inquiries',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Response Time: 24-48 hours',
          'Languages: English, Dari, Pashto',
          'Purpose: General information requests, mineral resources, regulatory information'
        ],
        icon: Mail
      },
      {
        title: 'Investment Inquiries',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Response Time: 24 hours (priority)',
          'Languages: English, Dari, Pashto',
          'Purpose: Investment opportunities, project development, partnership inquiries'
        ],
        icon: Briefcase
      },
      {
        title: 'Technical Support',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Response Time: 48 hours',
          'Languages: English, Dari',
          'Purpose: Technical questions, regulatory compliance, engineering support'
        ],
        icon: FileText
      },
      {
        title: 'Media Relations',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Response Time: 24 hours',
          'Languages: English, Dari, Pashto',
          'Purpose: Press inquiries, media access, public communications'
        ],
        icon: Globe
      },
    ],

    relatedResources: [
      { name: 'Contact Form', href: '#contact', icon: MessageSquare },
      { name: 'Phone Directory', href: '/contact/phone', icon: Phone },
      { name: 'Office Locations', href: '/contact/offices', icon: MapPin },
    ],
  },

  'phone': {
    title: 'Phone Directory & Contact Numbers',
    subtitle: 'Direct Telephone Communication Channels',
    overview: `The Ministry of Mines and Petroleum maintains comprehensive telephone communication systems enabling direct contact with ministry officials, technical experts, and support staff. Phone communications provide immediate responses to urgent inquiries, enable detailed discussions, and facilitate efficient coordination. Multiple phone numbers serve different purposes including general inquiries, investment support, technical assistance, and emergency contacts.

Main switchboard numbers provide access to all ministry departments, with operators routing calls to appropriate staff members. Direct dial numbers enable direct contact with specific departments or individuals, reducing call transfer time and improving efficiency. Dedicated hotlines provide rapid response for urgent matters including emergencies and time-sensitive inquiries.

Phone support is available during business hours with extended hours for investment inquiries. Emergency contact numbers provide 24/7 access for urgent matters requiring immediate attention. Voicemail systems ensure that calls receive responses even when staff are unavailable.

International callers can reach ministry offices through international dialing codes, with English-speaking staff available to assist international investors and partners. Translation services enable communication in multiple languages, ensuring that language barriers do not impede contact. Conference call capabilities enable multi-party discussions facilitating efficient coordination.`,

    stats: [
      { value: '24/7', label: 'Emergency', description: 'Urgent matters' },
      { value: 'Business', label: 'Hours', description: 'Regular support' },
      { value: 'Multiple', label: 'Languages', description: 'Translation available' },
      { value: 'Direct', label: 'Dial', description: 'Department access' },
      { value: 'Priority', label: 'Investment', description: 'Dedicated lines' },
      { value: 'Secure', label: 'Lines', description: 'Encrypted communications' },
    ],

    sections: [
      {
        title: 'Main Switchboard & General Inquiries',
        content: `Main switchboard numbers provide central access to all ministry departments, with experienced operators routing calls efficiently to appropriate staff members. Switchboard operators are trained to understand ministry structure and can direct callers to the right department or individual. This centralized access ensures that callers reach appropriate contacts quickly.

General inquiry lines handle questions about mineral resources, investment opportunities, and regulatory information. Trained staff provide comprehensive responses to common questions while routing complex inquiries to specialized experts. General inquiry lines are available during business hours with voicemail for after-hours messages.

Call queuing systems ensure that high call volumes do not result in dropped calls, with estimated wait times provided to callers. Priority queuing ensures that urgent matters receive immediate attention while maintaining service quality for all callers. Callback services enable callers to receive return calls rather than waiting on hold.

Multilingual operators ensure that callers can communicate in preferred languages. English, Dari, and Pashto speakers are available, with translation services for other languages. This multilingual support ensures that language barriers do not impede communication.`,
        icon: Phone,
        alignment: 'left'
      },
      {
        title: 'Investment Hotline & Priority Support',
        content: `Dedicated investment hotlines provide priority support for investors and potential partners. Investment hotline staff are trained in investment processes, legal frameworks, and project development, enabling comprehensive responses to investment questions. Investment calls receive priority routing ensuring rapid connection to appropriate experts.

Investment hotlines are available during extended hours to accommodate international time zones, ensuring that international investors can reach ministry staff during their business hours. Dedicated investment team members ensure that investment inquiries receive expert attention with detailed responses to complex questions.

Conference call capabilities enable multi-party discussions including investors, ministry officials, and technical experts. These conference calls facilitate detailed project discussions, contract negotiations, and technical coordination. International conference calling ensures that all parties can participate regardless of location.

Follow-up procedures ensure that investment inquiries receive comprehensive responses, with dedicated account managers assigned to major investment projects. These account managers provide ongoing support throughout investment processes, ensuring that investors receive consistent, knowledgeable support.`,
        icon: Briefcase,
        alignment: 'right'
      },
      {
        title: 'Technical Support & Emergency Contacts',
        content: `Technical support lines provide direct access to technical experts including geologists, engineers, and environmental specialists. Technical support enables detailed discussion of technical issues, regulatory compliance, and operational considerations. Technical experts provide comprehensive guidance ensuring that projects meet all technical and regulatory requirements.

Emergency contact numbers provide 24/7 access for urgent matters requiring immediate attention. Emergency contacts include ministry officials, technical experts, and security personnel, ensuring that emergencies receive rapid response. Emergency procedures ensure that urgent matters are addressed promptly while maintaining safety and security.

Technical hotlines enable rapid response to technical questions and regulatory compliance issues. Technical experts provide immediate guidance on technical matters, while follow-up ensures comprehensive responses to complex questions. Technical documentation can be shared through secure systems enabling efficient technical coordination.

After-hours technical support ensures that urgent technical matters receive attention even outside business hours. On-call technical experts provide emergency support for critical issues, while routine technical questions receive responses during business hours. This support ensures that technical issues do not delay project development.`,
        icon: Headphones,
        alignment: 'left'
      },
      {
        title: 'Department Direct Lines & Specialized Contacts',
        content: `Direct dial numbers enable direct contact with specific departments or individuals, reducing call transfer time and improving efficiency. Department direct lines include geology, engineering, environmental, legal, and finance departments, enabling callers to reach appropriate experts directly. Direct lines improve communication efficiency while ensuring that inquiries reach knowledgeable staff.

Specialized contact numbers serve specific purposes including licensing, environmental compliance, community relations, and revenue management. These specialized contacts ensure that specific inquiries reach experts with relevant knowledge and authority. Specialized contacts provide comprehensive responses while ensuring appropriate decision-making.

Department directories enable callers to identify appropriate contacts for specific inquiries. Online directories provide up-to-date contact information including names, titles, direct numbers, and email addresses. These directories ensure that callers can identify and reach appropriate contacts efficiently.

Call forwarding and voicemail systems ensure that calls receive responses even when staff are unavailable. Voicemail messages receive responses within 24 hours, while urgent matters can be escalated for immediate attention. These systems ensure that all calls receive appropriate responses.`,
        icon: Building,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'Main Switchboard',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: Sunday-Thursday, 8:00 AM - 4:00 PM',
          'Languages: English, Dari, Pashto',
          'Purpose: General inquiries, department routing'
        ],
        icon: Phone
      },
      {
        title: 'Investment Hotline',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: 24/7 for urgent matters',
          'Languages: English, Dari',
          'Purpose: Investment inquiries, project development'
        ],
        icon: Briefcase
      },
      {
        title: 'Technical Support',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: Sunday-Thursday, 8:00 AM - 6:00 PM',
          'Languages: English, Dari',
          'Purpose: Technical questions, regulatory compliance'
        ],
        icon: FileText
      },
      {
        title: 'Emergency Contact',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: 24/7',
          'Languages: English, Dari, Pashto',
          'Purpose: Urgent matters, emergencies'
        ],
        icon: Headphones
      },
    ],

    relatedResources: [
      { name: 'Email Contact', href: '/contact/email', icon: Mail },
      { name: 'Office Locations', href: '/contact/offices', icon: MapPin },
      { name: 'Department Contacts', href: '/contact/departments', icon: Building },
    ],
  },

  'offices': {
    title: 'Office Locations & Regional Offices',
    subtitle: 'Ministry Offices Across Afghanistan',
    overview: `The Ministry of Mines and Petroleum maintains offices throughout Afghanistan ensuring that services are accessible to all regions. The main ministry headquarters in Kabul provides comprehensive services, while regional offices in major provinces provide local support and coordination. International offices facilitate engagement with global partners and investors.

The main headquarters in Kabul houses central administration, technical departments, and investment coordination offices. The headquarters provides comprehensive services including licensing, regulatory compliance, and investment support. Centralized services ensure consistency while maintaining efficiency.

Regional offices in major mineral provinces including Logar, Badakhshan, Bamyan, and Ghazni provide local support for projects and communities. Regional offices coordinate with local governments, engage with communities, and provide on-the-ground support for projects. These offices ensure that ministry services are accessible throughout Afghanistan.

International offices facilitate engagement with global partners, investors, and markets. Offices in key international centers enable face-to-face meetings, provide local support for international investors, and facilitate trade relationships. These offices ensure that Afghanistan maintains strong international connections supporting mineral development.`,

    stats: [
      { value: '1', label: 'Headquarters', description: 'Kabul main office' },
      { value: '8', label: 'Regional', description: 'Provincial offices' },
      { value: '5', label: 'International', description: 'Global offices' },
      { value: '14', label: 'Total', description: 'Office locations' },
      { value: '34', label: 'Provinces', description: 'Service coverage' },
      { value: '24/7', label: 'Support', description: 'Online services' },
    ],

    sections: [
      {
        title: 'Main Headquarters - Kabul',
        content: `The main ministry headquarters in Kabul provides comprehensive services including central administration, technical departments, investment coordination, and regulatory oversight. The headquarters houses over 500 staff members across multiple departments, ensuring comprehensive service delivery. Centralized services provide consistency while maintaining efficiency.

The headquarters includes specialized facilities including geological laboratories, technical libraries, and meeting facilities. These facilities support technical work, research, and stakeholder engagement. Modern office facilities ensure productive work environments while meeting international standards.

Investment coordination offices within the headquarters provide dedicated support for investors, with specialized teams handling investment inquiries, project development, and partnership coordination. Investment offices include meeting facilities enabling face-to-face discussions with investors and partners.

Regulatory departments within the headquarters handle licensing, compliance monitoring, and enforcement. Regulatory staff ensure that all projects meet regulatory requirements while providing guidance and support. Centralized regulatory functions ensure consistency and efficiency.`,
        icon: Building,
        alignment: 'left'
      },
      {
        title: 'Regional Offices & Provincial Support',
        content: `Regional offices in major mineral provinces provide local support ensuring that ministry services are accessible throughout Afghanistan. Regional offices coordinate with local governments, engage with communities, and provide on-the-ground support for projects. These offices ensure that ministry presence extends beyond Kabul.

Logar Province office supports Mes Aynak copper project and other regional projects, providing local coordination and community engagement. The office facilitates communication between projects and communities while ensuring that local concerns are addressed. Regional staff understand local contexts enabling effective engagement.

Badakhshan Province office supports gemstone and gold projects, providing coordination for artisanal mining formalization and major project development. The office engages with mining communities, facilitates community development programs, and coordinates with local authorities. Regional presence ensures that projects benefit local communities.

Bamyan Province office supports Hajigak iron project and regional development, providing coordination for major infrastructure development and community programs. The office facilitates regional economic development while ensuring that projects provide maximum local benefit.`,
        icon: MapPin,
        alignment: 'right'
      },
      {
        title: 'International Offices & Global Presence',
        content: `International offices facilitate engagement with global partners, investors, and markets. Offices in key international centers including Dubai, Istanbul, Beijing, and London enable face-to-face meetings, provide local support for international investors, and facilitate trade relationships. These offices ensure that Afghanistan maintains strong international connections.

Dubai office serves Middle Eastern and international investors, providing convenient access for major investors and partners. The office facilitates investment discussions, coordinates site visits, and supports trade relationships. Dubai's central location and business-friendly environment make it an ideal location for international engagement.

Istanbul office serves European and Central Asian markets, facilitating engagement with regional partners and investors. The office supports trade relationships, coordinates technical cooperation, and facilitates investment discussions. Istanbul's strategic location enables efficient engagement with multiple regions.

Beijing office serves Asian markets including China, Japan, and South Korea, facilitating engagement with major technology companies and manufacturers requiring mineral supply. The office supports strategic partnerships, coordinates trade relationships, and facilitates investment discussions. Beijing's importance in global supply chains makes it essential for Afghan mineral development.`,
        icon: Globe,
        alignment: 'left'
      },
      {
        title: 'Access & Visitor Services',
        content: `Headquarters and regional offices provide visitor reception, appointment booking, and security procedures. Advance appointments are recommended for investment and technical meetings. Visitor services include orientation materials, meeting facilities, and language support. Online services and 24/7 inquiry systems ensure access regardless of location.`,
        icon: Users,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'Kabul Headquarters',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: Sunday-Thursday, 8:00 AM - 4:00 PM'
        ],
        icon: Building
      },
      {
        title: 'Regional Offices',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: Sunday-Thursday, 8:00 AM - 4:00 PM'
        ],
        icon: MapPin
      },
      {
        title: 'International Offices',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Hours: Local business hours'
        ],
        icon: Globe
      },
    ],

    relatedResources: [
      { name: 'Email Contact', href: '/contact/email', icon: Mail },
      { name: 'Phone Directory', href: '/contact/phone', icon: Phone },
      { name: 'Department Contacts', href: '/contact/departments', icon: Building },
    ],
  },

  'departments': {
    title: 'Department Contacts & Organizational Structure',
    subtitle: 'Comprehensive Department Directory',
    overview: `The Ministry of Mines and Petroleum is organized into specialized departments each handling specific aspects of mineral development. Department contacts enable direct communication with experts in specific areas including geology, engineering, environmental management, legal affairs, and investment coordination. Each department maintains specialized expertise ensuring comprehensive support for all aspects of mineral development.

The Geological Survey Department conducts resource assessment, maintains geological databases, and provides technical support for exploration and development. The Mining Engineering Department reviews mine plans, ensures technical standards, and provides engineering support. The Environmental Department manages environmental compliance, reviews impact assessments, and monitors environmental performance.

The Legal Department handles contract negotiation, regulatory compliance, and dispute resolution. The Investment Coordination Office facilitates investment processes, supports project development, and coordinates partnerships. The Revenue Management Department handles royalties, taxes, and revenue transparency. Each department maintains specialized contacts enabling efficient communication.`,

    stats: [
      { value: '12', label: 'Departments', description: 'Specialized units' },
      { value: '500+', label: 'Staff', description: 'Total employees' },
      { value: 'Expert', label: 'Teams', description: 'Specialized knowledge' },
      { value: 'Direct', label: 'Contact', description: 'Department access' },
      { value: '24/7', label: 'Online', description: 'Digital services' },
      { value: 'Multiple', label: 'Languages', description: 'Communication support' },
    ],

    departments: [
      {
        name: 'Geological Survey Department',
        description: 'Conducts resource assessment, maintains geological databases, and provides technical support for exploration and development.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
      {
        name: 'Mining Engineering Department',
        description: 'Reviews mine plans, ensures technical standards, and provides engineering support for project development.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
      {
        name: 'Environmental Department',
        description: 'Manages environmental compliance, reviews impact assessments, and monitors environmental performance.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
      {
        name: 'Legal Department',
        description: 'Handles contract negotiation, regulatory compliance, and dispute resolution.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
      {
        name: 'Investment Coordination Office',
        description: 'Facilitates investment processes, supports project development, and coordinates partnerships.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
      {
        name: 'Revenue Management Department',
        description: 'Handles royalties, taxes, and revenue transparency ensuring accountable revenue management.',
        contacts: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af'
        ]
      },
    ],

    sections: [
      {
        title: 'Technical Departments',
        content: `Technical departments including Geological Survey, Mining Engineering, and Environmental Management provide specialized technical support for all aspects of mineral development. These departments maintain world-class expertise ensuring that projects meet technical standards while providing comprehensive support.

The Geological Survey Department conducts comprehensive resource assessment, maintains detailed geological databases, and provides technical support for exploration and development. Geological experts review exploration plans, assess resource estimates, and provide technical guidance. The department's expertise ensures accurate resource understanding enabling informed development decisions.

The Mining Engineering Department reviews mine plans, ensures technical standards, and provides engineering support. Engineering experts evaluate mining methods, processing approaches, and infrastructure requirements. The department ensures that projects employ appropriate technology while meeting safety and efficiency standards.

The Environmental Department manages environmental compliance, reviews impact assessments, and monitors environmental performance. Environmental experts ensure that projects meet international standards while providing guidance on environmental management. The department's expertise ensures responsible development protecting environmental values.`,
        icon: FileText,
        alignment: 'left'
      },
      {
        title: 'Administrative & Support Departments',
        content: `Administrative departments including Legal, Investment Coordination, and Revenue Management provide essential support ensuring efficient project development and revenue management. These departments handle critical functions enabling successful mineral development.

The Legal Department handles contract negotiation, regulatory compliance, and dispute resolution. Legal experts ensure that contracts protect all parties while meeting regulatory requirements. The department's expertise ensures that legal frameworks support development while protecting national interests.

The Investment Coordination Office facilitates investment processes, supports project development, and coordinates partnerships. Investment experts provide comprehensive support throughout investment processes, ensuring that investors receive expert guidance. The office's coordination ensures efficient investment processes.

The Revenue Management Department handles royalties, taxes, and revenue transparency. Revenue experts ensure that all payments are properly calculated, collected, and disclosed. The department's transparency systems ensure accountability while building public trust.`,
        icon: Building,
        alignment: 'right'
      },
      {
        title: 'Licensing & Compliance Departments',
        content: `Licensing departments process exploration and mining license applications, maintain the license register, and coordinate with technical and environmental review. Compliance departments monitor license obligations, environmental performance, and reporting. Direct contact with these departments supports efficient permitting and ongoing compliance.`,
        icon: CheckCircle2,
        alignment: 'left'
      },
      {
        title: 'Contact Directories & Coordination',
        content: `Department directories (online and printed) list directors, key staff, direct phone numbers, and email addresses. The main switchboard can route callers to the appropriate department. Investment Coordination Office serves as single point of contact for investors; other inquiries are routed to technical, legal, or administrative departments as needed.`,
        icon: Phone,
        alignment: 'right'
      },
    ],

    relatedResources: [
      { name: 'Email Contact', href: '/contact/email', icon: Mail },
      { name: 'Phone Directory', href: '/contact/phone', icon: Phone },
      { name: 'Office Locations', href: '/contact/offices', icon: MapPin },
    ],
  },

  'international': {
    title: 'International Office Contacts',
    subtitle: 'Global Representation & Overseas Coordination',
    overview: `The Ministry of Mines and Petroleum maintains international offices in key business centers to support foreign investors, diaspora engagement, and trade relations. These offices provide local points of contact in Dubai, Istanbul, Beijing, London, and other cities, enabling face-to-face meetings, time-zone-friendly support, and liaison with host-country partners. International offices coordinate visa support, site visit logistics, and investor briefings for overseas parties interested in Afghanistan's mineral sector.

Each international office is staffed with bilingual personnel and focuses on regional markets: the Dubai office serves Gulf and Middle Eastern investors; Istanbul covers European and Central Asian partners; Beijing supports Asian offtake and technology partners; London and New York facilitate dialogue with Western institutions and funds. Contact details, appointment booking, and language availability vary by office and are listed below.`,

    stats: [
      { value: '5', label: 'Offices', description: 'International locations' },
      { value: '4', label: 'Regions', description: 'Global coverage' },
      { value: '24/7', label: 'Inquiry', description: 'Email response' },
      { value: 'Local', label: 'Hours', description: 'Business hours per office' },
      { value: 'Multi', label: 'Language', description: 'English and local' },
      { value: 'Direct', label: 'Liaison', description: 'Ministry coordination' },
    ],

    sections: [
      {
        title: 'Dubai Office – Middle East & Gulf',
        content: `The Dubai office serves investors and partners from the Gulf, Middle East, and South Asia. It coordinates site visits, investment briefings, and trade delegations. Staff provide information on licensing, fiscal terms, and project opportunities and can arrange video calls with Kabul-based technical teams. Contact: info@nerpa.org.uk | info@nerpa.org.af; phone: +44 7741651795 | +93 749922932.`,
        icon: Globe,
        alignment: 'left'
      },
      {
        title: 'Istanbul Office – Europe & Central Asia',
        content: `The Istanbul office supports European and Central Asian partners, including logistics for travel to Afghanistan and follow-up on partnership and technical cooperation. It assists with visa letters, itinerary planning, and introductions to relevant departments. Contact: info@nerpa.org.uk | info@nerpa.org.af; phone: +44 7741651795 | +93 749922932.`,
        icon: MapPin,
        alignment: 'right'
      },
      {
        title: 'Beijing Office – Asia-Pacific',
        content: `The Beijing office facilitates engagement with Asian offtake partners, technology suppliers, and development finance institutions. It supports due diligence visits, contract discussions, and supply-chain dialogue. Contact: info@nerpa.org.uk | info@nerpa.org.af; phone: +44 7741651795 | +93 749922932.`,
        icon: Building,
        alignment: 'left'
      },
      {
        title: 'London & New York Liaison',
        content: `Liaison functions in London and New York support engagement with Western financial institutions, multilateral development banks, and institutional investors. Coordination is managed through the main contact team; inquiries can be directed to info@nerpa.org.uk | info@nerpa.org.af and +44 7741651795 | +93 749922932.`,
        icon: Users,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'International Coordination (Kabul)',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Purpose: General international inquiries, office routing',
          'Response: Within 24–48 hours'
        ],
        icon: Globe
      },
      {
        title: 'Dubai Office',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Focus: Gulf, Middle East, South Asia',
          'Hours: Local business hours'
        ],
        icon: MapPin
      },
      {
        title: 'Istanbul Office',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Focus: Europe, Central Asia',
          'Hours: Local business hours'
        ],
        icon: MapPin
      },
    ],

    relatedResources: [
      { name: 'Office Locations', href: '/contact/offices', icon: MapPin },
      { name: 'Investment Process', href: '/investment/process', icon: Briefcase },
      { name: 'Email Contact', href: '/contact/email', icon: Mail },
    ],
  },

  'media': {
    title: 'Media Inquiries & Press Relations',
    subtitle: 'Press Contact and Public Information',
    overview: `The Ministry of Mines and Petroleum provides dedicated channels for media inquiries, press releases, and interview requests. Journalists, broadcasters, and documentary producers can request factsheets, official statements, and background briefings on mineral policy, major projects, and sector statistics. The media team does not handle investment or technical project negotiations; those inquiries are directed to the Investment Coordination Office or relevant departments.

Press releases on licensing, major tenders, and policy updates are published on the ministry website and can be requested by email. Interview requests with senior officials are considered on a case-by-case basis; advance notice and a brief description of the topic are required. The ministry does not comment on ongoing commercial or legal proceedings except through official statements.`,

    stats: [
      { value: '24hr', label: 'Response', description: 'Initial media reply' },
      { value: '3', label: 'Languages', description: 'English, Dari, Pashto' },
      { value: 'Official', label: 'Statements', description: 'Authorized only' },
      { value: 'Press', label: 'Releases', description: 'Website and email' },
      { value: 'Briefings', label: 'Available', description: 'On request' },
      { value: 'No', label: 'Comment', description: 'On ongoing proceedings' },
    ],

    sections: [
      {
        title: 'How to Submit a Media Inquiry',
        content: `Send a concise email to info@nerpa.org.uk | info@nerpa.org.af with your name, outlet, deadline, and specific questions or topic. For interviews, include the intended format (e.g. written, phone, video) and preferred language. The media team will acknowledge receipt and either respond with information or refer you to the appropriate office. Urgent requests should be marked clearly in the subject line.`,
        icon: MessageSquare,
        alignment: 'left'
      },
      {
        title: 'Available Materials',
        content: `The ministry can provide fact sheets on mineral resources, investment framework, and key projects; official press releases; and high-level statistics (e.g. number of licenses, major deposits). Detailed technical or commercial data may require a formal request and approval. Photo and video assets are limited; requests are evaluated individually.`,
        icon: FileText,
        alignment: 'right'
      },
      {
        title: 'Interview and Attribution Policy',
        content: `Interviews with ministers or senior officials are arranged through the media office. All attributable quotes must come from designated spokespersons or approved statements. The ministry does not provide off-the-record briefings on commercial or legal matters. On-the-record statements may be published in English, Dari, or Pashto as released.`,
        icon: CheckCircle2,
        alignment: 'left'
      },
      {
        title: 'Response Times & Referrals',
        content: `Initial media inquiries receive acknowledgment within 24 hours. Detailed responses and interview decisions follow based on topic and availability. Investment and technical project inquiries are referred to the Investment Coordination Office or relevant departments. The media team coordinates with other departments to ensure accurate, authorized information.`,
        icon: Clock,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'Media Inquiries',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Purpose: Press inquiries, interviews, fact checks',
          'Response: Initial reply within 24 hours'
        ],
        icon: Mail
      },
    ],

    relatedResources: [
      { name: 'Contact Form', href: '#contact', icon: MessageSquare },
      { name: 'Email Contact', href: '/contact/email', icon: Mail },
      { name: 'Office Locations', href: '/contact/offices', icon: MapPin },
    ],
  },

  'partnerships': {
    title: 'Partnership & Collaboration Inquiries',
    subtitle: 'Joint Ventures, MOUs, and Strategic Alliances',
    overview: `The Ministry of Mines and Petroleum welcomes inquiries from companies, governments, and institutions interested in formal partnerships, memoranda of understanding (MOUs), joint ventures, or long-term supply and development agreements. Partnership inquiries are handled by the Investment Coordination Office in coordination with the Legal Department and relevant technical departments. Topics include government-to-government cooperation, company-to-ministry MOUs, and multi-stakeholder initiatives (e.g. capacity building, supply chain, sustainability).

Inquiries should outline the type of partnership envisaged, the parties involved, and the intended scope (e.g. specific mineral, region, or theme). The ministry will indicate whether the proposal fits current priorities and what next steps (e.g. concept note, formal letter, meeting) are required. Commercial terms for mining projects are negotiated separately under the investment and licensing framework.`,

    stats: [
      { value: 'ICO', label: 'Lead', description: 'Investment Coordination' },
      { value: 'Legal', label: 'Support', description: 'Contract and MOUs' },
      { value: 'Multi', label: 'Stakeholder', description: 'Gov, private, NGOs' },
      { value: 'Transparent', label: 'Process', description: 'Clear next steps' },
      { value: 'MOU', label: 'Options', description: 'Framework agreements' },
      { value: 'JV', label: 'Supported', description: 'Joint ventures' },
    ],

    sections: [
      {
        title: 'Types of Partnerships',
        content: `The ministry engages in government-to-government partnerships (e.g. geological surveys, training, technical assistance), MOUs with private companies for feasibility and development, and multi-stakeholder initiatives (e.g. artisanal mining formalization, environmental standards, community development). Each type follows different approval and signing procedures; the partnership team will guide applicants accordingly.`,
        icon: Handshake,
        alignment: 'left'
      },
      {
        title: 'How to Propose a Partnership',
        content: `Submit a short concept note or letter to info@nerpa.org.uk | info@nerpa.org.af describing the proposing organization, the type of partnership, and the desired outcome. The Investment Coordination Office will confirm receipt and either request more detail or schedule a discussion. Formal MOUs and contracts are subject to internal review and, where applicable, cabinet or other approvals.`,
        icon: FileText,
        alignment: 'right'
      },
      {
        title: 'Relationship to Investment and Licensing',
        content: `Partnership agreements (e.g. MOUs) do not replace or guarantee mining licenses or fiscal terms. Any project that involves exploration or mining rights must follow the standard licensing and investment process. Partnership inquiries that overlap with a specific project or license will be coordinated with the relevant licensing and legal teams.`,
        icon: Briefcase,
        alignment: 'left'
      },
      {
        title: 'Timeline and Next Steps',
        content: `After submitting a concept note or letter, the Investment Coordination Office will confirm receipt and indicate next steps (e.g. request for more detail, meeting, or formal proposal). MOUs and framework agreements undergo internal and, where applicable, cabinet approval. Commercial terms for mining projects are negotiated under the investment framework.`,
        icon: Send,
        alignment: 'right'
      },
    ],

    contactMethods: [
      {
        title: 'Partnership Inquiries',
        details: [
          'Address: London, UK | Kabul, Afghanistan',
          'Phone: +44 7741651795 | +93 749922932',
          'Email: info@nerpa.org.uk | info@nerpa.org.af',
          'Subject: "Partnership inquiry" or "MOU proposal"',
          'Include: Organization, type of partnership, scope'
        ],
        icon: Users
      },
    ],

    relatedResources: [
      { name: 'Investment Process', href: '/investment/process', icon: Briefcase },
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Contact Form', href: '#contact', icon: MessageSquare },
    ],
  },
};

// Wire in massive contact section expansions
import {
  EMAIL_EXTRA_SECTIONS,
  PHONE_EXTRA_SECTIONS,
  OFFICES_EXTRA_SECTIONS,
} from './contactSectionsExpansion';

if (contactDatabase['email']) {
  contactDatabase['email'].sections.push(...EMAIL_EXTRA_SECTIONS);
}
if (contactDatabase['phone']) {
  contactDatabase['phone'].sections.push(...PHONE_EXTRA_SECTIONS);
}
if (contactDatabase['offices']) {
  contactDatabase['offices'].sections.push(...OFFICES_EXTRA_SECTIONS);
}

export { contactDatabase };
