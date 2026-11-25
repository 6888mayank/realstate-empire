import { PropertyType, CORPORATE_OFFICE } from './constants';

export interface PropertyItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'investment';
  type: PropertyType;
  location: string;
  city: string;
  area: string;
  price: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  operationalStatus?: 'Active in Gurugram' | 'Upcoming Pipeline';
  image: string;
  specs?: {
    beds?: string;
    baths?: string;
    sqft?: string;
    grade?: string;
    possession?: string;
  };
  highlights: string[];
  description: string;
  featured?: boolean;
}

export const ALL_PROPERTIES: PropertyItem[] = [
  // Residential - Primary Gurugram Operational
  {
    id: 'prop-1',
    name: 'Tulip Crimson & Purple Luxury Suites',
    category: 'residential',
    type: 'Luxury Apartments',
    location: 'Sector 69, Southern Peripheral Road (SPR), Gurugram',
    city: 'Gurugram',
    area: '2,800 – 4,500 sq.ft.',
    price: '₹3.6 Cr onwards',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    specs: { beds: '3 & 4 BHK', baths: '4 Baths', sqft: '3,100 sq.ft.', possession: 'Ready for Possession' },
    highlights: ['Adjacent to Sector 69 Hub', 'Zero Traffic Access to SPR & Golf Course Ext.', 'Double-Height Grand Lobby', 'Operational Clubhouse & Pool'],
    description: 'Premier ready residential enclave situated in the heart of Sector 69, Gurugram. Features expansive corner balconies, lush landscaped central greens, and rapid transit to Golf Course Extension.',
    featured: true,
  },
  {
    id: 'prop-2',
    name: 'Sovereign Grand Villas & Mansions',
    category: 'residential',
    type: 'Independent Homes & Villas',
    location: 'Golf Course Extension Road, Sector 66, Gurugram',
    city: 'Gurugram',
    area: '6,200 – 9,800 sq.ft.',
    price: '₹14.5 Cr onwards',
    status: 'New Launch',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    specs: { beds: '5 & 6 BHK', baths: '6 Baths', sqft: '7,200 sq.ft.', possession: 'Mid 2027' },
    highlights: ['Private Landscaped Lawn', 'Temperature-Controlled Pool', 'Double-Height Living', 'Smart Home Automation'],
    description: 'An exclusive gated sanctuary of modern classical mansions set amidst 45 acres of manicured greens on Golf Course Extension Road, offering private courtyards and dedicated club concierge.',
    featured: true,
  },
  {
    id: 'prop-3',
    name: 'The Aurelia Sky Residences',
    category: 'residential',
    type: 'Luxury Apartments',
    location: 'Sector 65, Golf Course Extension, Gurugram',
    city: 'Gurugram',
    area: '3,200 – 5,400 sq.ft.',
    price: '₹7.8 Cr onwards',
    status: 'Under Construction',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    specs: { beds: '4 BHK + Lounge', baths: '5 Baths', sqft: '3,600 sq.ft.', possession: 'Dec 2026' },
    highlights: ['Unobstructed Aravali Ridge Views', 'Private Elevator Lobbies', 'Olympic Sized Infinity Pool', 'Bespoke Italian Finishes'],
    description: 'Iconic high-rise twin towers redefining the Gurugram skyline. Features floor-to-ceiling double-glazed facades, wrap-around sundecks, and five-star wellness hospitality.',
    featured: true,
  },
  {
    id: 'prop-4',
    name: 'Belvedere Sanctuary Plotted Enclave',
    category: 'residential',
    type: 'Residential Plots',
    location: 'Sector 70A, Southern Peripheral Road, Gurugram',
    city: 'Gurugram',
    area: '250 – 500 sq.yds.',
    price: '₹3.2 Cr onwards',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    specs: { sqft: '2,700 sq.ft.', possession: 'Immediate Registry' },
    highlights: ['Gated Township with 24/7 Security', 'Wide 60ft Arterial Roads', 'Underground Utility Ducting', '100% Clear Freehold Titles'],
    description: 'Government-approved luxury residential plotted development right off the SPR corridor. Build your customized multi-story villa with immediate possession and registry.',
    featured: false,
  },
  {
    id: 'prop-5',
    name: 'The Grand Horizon Luxury Condos',
    category: 'residential',
    type: 'Ready-to-Move Properties',
    location: 'Sector 102, Dwarka Expressway, Gurugram',
    city: 'Gurugram',
    area: '2,150 – 3,400 sq.ft.',
    price: '₹3.1 Cr onwards',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    specs: { beds: '3 & 4 BHK', baths: '3 Baths', sqft: '2,350 sq.ft.', possession: 'Ready (OC Received)' },
    highlights: ['15 Mins to IGI Airport Terminal 3', 'Direct Dwarka Expressway Access', 'Clubhouse with 35+ Amenities', 'Low Density Development'],
    description: 'Completed turnkey condominiums ready for immediate move-in. Strategically positioned on the operational Dwarka Expressway with seamless airport connectivity.',
    featured: false,
  },

  // Commercial - Gurugram Active Operational
  {
    id: 'prop-6',
    name: 'Meridian Corporate Towers & IT Park',
    category: 'commercial',
    type: 'Office Spaces',
    location: 'Golf Course Road / Cyber City Fringe, Gurugram',
    city: 'Gurugram',
    area: '5,000 – 45,000 sq.ft.',
    price: '₹22,500 / sq.ft.',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'Grade A+ Corporate Hub', sqft: '14,000 sq.ft.', possession: 'Ready for Fitouts' },
    highlights: ['IGBC Platinum Green Building', 'High-Speed Destination Elevators', 'Multi-Tier Automated Security', 'Multi-Level Car Parking for 1200+ Cars'],
    description: 'Signature commercial corporate tower commanding unmatched visibility along Gurugram’s prime transit spine. Floorplates designed for multinational enterprises and financial headquarters.',
    featured: true,
  },
  {
    id: 'prop-7',
    name: 'The Crest Retail Galleria & Promenade',
    category: 'commercial',
    type: 'Retail & Commercial Shops',
    location: 'Southern Peripheral Road (SPR), Sector 69-70, Gurugram',
    city: 'Gurugram',
    area: '850 – 4,200 sq.ft.',
    price: '₹1.85 Cr onwards',
    status: 'Under Construction',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'High-Footfall Retail Street', sqft: '1,200 sq.ft.', possession: 'Late 2026' },
    highlights: ['Double-Height Retail Storefronts', 'Open-Air European Style Boulevard', 'Terrace F&B Zones', 'High Density Residential Catchment'],
    description: 'Next-generation experiential shopping and dining promenade catering to over 30,000 luxury families in Sector 69, 70, and Golf Course Extension catchment.',
    featured: true,
  },
  {
    id: 'prop-8',
    name: 'Signature Business Nexus',
    category: 'commercial',
    type: 'Commercial Properties',
    location: 'Golf Course Extension Road, Gurugram',
    city: 'Gurugram',
    area: '6,500 – 35,000 sq.ft.',
    price: 'Price on Request',
    status: 'New Launch',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'Modern Enterprise Suites', sqft: '18,500 sq.ft.', possession: 'Mid 2027' },
    highlights: ['Direct Metro Connectivity Corridor', 'Centralized Air Filtration', 'Food Court & Business Lounge', '100% Power Redundancy'],
    description: 'A contemporary business park integrating smart energy-efficient architecture with state-of-the-art office infrastructure for high-growth tech firms.',
    featured: false,
  },

  // Investment - Gurugram Active Yield Assets & Future Scope
  {
    id: 'prop-9',
    name: 'Cyber Horizon Pre-Leased Corporate Floor',
    category: 'investment',
    type: 'Investment Properties',
    location: 'Golf Course Road, Gurugram',
    city: 'Gurugram',
    area: '12,000 sq.ft. Leased Floor',
    price: '₹18.5 Cr',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'Grade A MNC Pre-Leased', sqft: '12,000 sq.ft.', possession: 'Immediate Rental Income' },
    highlights: ['8.4% Net Rental Yield', '9-Year Lease with Fortune 500 Tenant', '15% Escalation Every 3 Years', 'Zero Vacancy Lock-in'],
    description: 'Institutional-grade pre-leased commercial floor delivering monthly rental yields directly from an American technology MNC with registered long-term lease covenants.',
    featured: true,
  },
  {
    id: 'prop-10',
    name: 'SPR High-Yield Commercial Asset',
    category: 'investment',
    type: 'Investment Properties',
    location: 'Sector 69, Southern Peripheral Road, Gurugram',
    city: 'Gurugram',
    area: '8,500 sq.ft.',
    price: '₹11.2 Cr',
    status: 'Ready to Move',
    operationalStatus: 'Active in Gurugram',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'Pre-Leased Retail Anchor', sqft: '8,500 sq.ft.', possession: 'Immediate Returns' },
    highlights: ['8.8% Stable Rental Inflow', 'Leased to Leading National Retailer', 'Triple Net Lease Structure', 'Capital Upside with SPR Expansion'],
    description: 'Prime ground-floor retail anchor unit in Sector 69 with high recurring revenue, immediate monthly cash flows, and rapid land value appreciation.',
    featured: true,
  },

  // Future Scope / Expansion Pipeline
  {
    id: 'prop-11',
    name: 'Aeropolis International Growth Parcel',
    category: 'investment',
    type: 'Investment Properties',
    location: 'Jewar International Airport Corridor, Noida NCR',
    city: 'Noida (Upcoming Scope)',
    area: '3 – 8 Acres',
    price: 'Price on Request',
    status: 'New Launch',
    operationalStatus: 'Upcoming Pipeline',
    image: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1200&q=80',
    specs: { grade: 'Zoned Expansion Parcel', sqft: '130,680 sq.ft.', possession: 'Planned Expansion' },
    highlights: ['Direct Link to Noida International Airport', 'Multimodal Logistics Node', 'Part of Future Expansion Portfolio', 'Clear Title Vetting'],
    description: 'Future expansion opportunity in the NCR mega-infrastructure belt, offered as part of our strategic pipeline for high-net-worth investors.',
    featured: false,
  },
  {
    id: 'prop-12',
    name: 'The Marina Penthouse Collection',
    category: 'residential',
    type: 'Luxury Apartments',
    location: 'Worli, South Mumbai',
    city: 'Mumbai (Upcoming Scope)',
    area: '4,200 sq.ft.',
    price: 'Price on Request',
    status: 'New Launch',
    operationalStatus: 'Upcoming Pipeline',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    specs: { beds: '4 BHK', baths: '5 Baths', sqft: '4,200 sq.ft.', possession: 'Future Scope' },
    highlights: ['Arabian Sea Views', 'Planned Expansion Market', 'Ultra-Luxury Architecture', 'Institutional Advisory'],
    description: 'Part of our forthcoming Western India expansion, bringing our signature transparent advisory to premier waterfront residences.',
    featured: false,
  },
];

export interface LocationDetail {
  id: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  propertyCount: string;
  averageGrowth: string;
  isOperational: boolean;
  statusBadge: string;
  corporateNote?: string;
  keySectors: string[];
  image: string;
}

export const ALL_LOCATIONS: LocationDetail[] = [
  {
    id: 'gurugram',
    name: 'Gurugram (Gurgaon)',
    state: 'Haryana (Delhi-NCR)',
    tagline: 'Our Active Operational Headquarters & Primary Market',
    description: `AVYAAVATI REALTORS is actively operational with our corporate office at ${CORPORATE_OFFICE.fullAddress}. We specialize in Sector 69, Southern Peripheral Road (SPR), Golf Course Extension Road, Dwarka Expressway, and Cyber City, providing verified on-ground property advisory, title verification, and transaction support.`,
    propertyCount: '25+ Active Listings in Gurugram',
    averageGrowth: '14.2% YoY',
    isOperational: true,
    statusBadge: 'Active & Operational Hub',
    corporateNote: `Corporate Office: ${CORPORATE_OFFICE.flatNo}, ${CORPORATE_OFFICE.tower}, ${CORPORATE_OFFICE.society}, ${CORPORATE_OFFICE.sector}, Gurgaon - 122101`,
    keySectors: ['Sector 69 & Tulip Enclaves', 'Golf Course Extension Road', 'Southern Peripheral Road (SPR)', 'Dwarka Expressway', 'Golf Course Road', 'Sohna Road'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'noida',
    name: 'Noida & Greater Noida',
    state: 'Uttar Pradesh (NCR)',
    tagline: 'Upcoming Expansion — Expressway & Jewar Airport Corridor',
    description: 'Strategically identified for our upcoming expansion horizon. Wide expressways, expanding metro grids, and the mega international airport at Jewar present strong medium-to-long term property opportunities for our client base.',
    propertyCount: 'Future Scope (In Pipeline)',
    averageGrowth: '11.5% YoY',
    isOperational: false,
    statusBadge: 'Upcoming Expansion / Future Scope',
    keySectors: ['Sector 150', 'Noida Expressway', 'Yamuna Expressway (Jewar Hub)', 'Greater Noida West'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'Upcoming Scope — Financial Capital & Waterfront Residences',
    description: 'Part of our future roadmap for luxury residential and pre-leased corporate offices across BKC, South Mumbai, and the Western suburbs, maintaining our core values of uncompromised transparency.',
    propertyCount: 'Future Scope (In Pipeline)',
    averageGrowth: '8.4% YoY',
    isOperational: false,
    statusBadge: 'Upcoming Expansion / Future Scope',
    keySectors: ['Bandra-Kurla Complex (BKC)', 'Worli & Lower Parel', 'Juhu & Andheri West', 'Thane Platinum Belt'],
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tagline: 'Upcoming Scope — Silicon Valley Tech Corridors',
    description: 'Planned destination in our expansion pipeline to serve IT executives and institutional investors seeking high rental yields across Whitefield, Outer Ring Road, and North Bengaluru airport belts.',
    propertyCount: 'Future Scope (In Pipeline)',
    averageGrowth: '10.2% YoY',
    isOperational: false,
    statusBadge: 'Upcoming Expansion / Future Scope',
    keySectors: ['Whitefield', 'Outer Ring Road (ORR)', 'North Bengaluru Airport Expressway', 'Indiranagar'],
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tagline: 'Upcoming Scope — IT Corridors & Quality Living',
    description: 'Evaluated as a future advisory destination balancing robust automotive and IT engineering employment with high-quality green suburban lifestyle enclaves.',
    propertyCount: 'Future Scope (In Pipeline)',
    averageGrowth: '9.1% YoY',
    isOperational: false,
    statusBadge: 'Upcoming Expansion / Future Scope',
    keySectors: ['Koregaon Park Annexe', 'Baner & Balewadi', 'Hinjewadi IT Zone', 'Kharadi'],
    image: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'Upcoming Scope — Infrastructure & Commercial Hub',
    description: 'Slated for future expansion to connect clients with high-scale commercial tech parks and emerging luxury residential corridors across Financial District and Kokapet Neopolis.',
    propertyCount: 'Future Scope (In Pipeline)',
    averageGrowth: '14.5% YoY',
    isOperational: false,
    statusBadge: 'Upcoming Expansion / Future Scope',
    keySectors: ['Financial District', 'Hitec City', 'Kokapet Neopolis', 'Jubilee Hills'],
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
  },
];

export interface InsightArticle {
  id: string;
  category: 'Real Estate Trends' | 'Property Buying Guides' | 'Investment Insights' | 'Location Guides';
  title: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  keyPoints: string[];
  image: string;
}

export const ALL_INSIGHTS: InsightArticle[] = [
  {
    id: 'insight-1',
    category: 'Real Estate Trends',
    title: 'Why Southern Peripheral Road (SPR) & Sector 69 Are Gurugram’s Hottest Growth Belts',
    readTime: '5 min read',
    date: 'November 2026',
    author: 'AVYAAVATI Gurugram Research Desk',
    summary: 'An on-ground analysis of how cloverleaf connectivity, Golf Course Extension expansion, and premium residential enclaves like Tulip Purple are accelerating capital growth in Sector 69.',
    keyPoints: [
      'SPR connects Dwarka Expressway, NH-48 and Golf Course Extension without a single signal hurdle.',
      'Sector 69 offers 25-30% better price value compared to central Golf Course Road with equivalent luxury infrastructure.',
      'High rental demand driven by multinational corporate parks within a 10-minute commute.',
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'insight-2',
    category: 'Property Buying Guides',
    title: 'A Homebuyer’s Due Diligence Guide for Gurugram & Haryana RERA Properties',
    readTime: '7 min read',
    date: 'November 2026',
    author: 'Gurugram Advisory Team',
    summary: 'Crucial steps for home buyers in Gurugram: verifying HRERA registration, checking Occupancy Certificate (OC), scrutiny of encumbrance certificates, and builder escrow compliance.',
    keyPoints: [
      'Always cross-verify the HRERA project registration number on the official Haryana RERA portal.',
      'Check whether the developer has cleared all EDC/IDC dues with DTCP Haryana before taking registry.',
      'Scrutinize car parking allocations and super built-up vs. RERA carpet area ratios.',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'insight-3',
    category: 'Investment Insights',
    title: 'Pre-Leased Commercial Assets in Gurugram: Evaluating 8-9% Annual Rental Yields',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Capital Markets Desk',
    summary: 'How pre-leased commercial offices along Golf Course Road and Cyber City provide predictable cash flows, long tenant lock-ins, and hedge against inflation.',
    keyPoints: [
      'MNC tenants offer 9-year institutional lease agreements with 15% rent step-ups every 3 years.',
      'Focus on Grade-A buildings with low vacancy history and strong facility management covenants.',
      'Net rental yields consistently outperform residential rentals by 400 to 500 basis points.',
    ],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'insight-4',
    category: 'Location Guides',
    title: 'Gurugram Real Estate Master Plan: Golf Course Ext vs. Dwarka Expressway vs. SPR',
    readTime: '4 min read',
    date: 'October 2026',
    author: 'Urban Planning Desk',
    summary: 'A comparative breakdown of Gurugram’s three premier residential corridors to help buyers choose the right micro-market for their lifestyle and budget.',
    keyPoints: [
      'Golf Course Extension: Established ultra-luxury hub with mature dining and international schools.',
      'Southern Peripheral Road (SPR): Balanced sweet-spot combining luxury high-rises with direct highway connectivity.',
      'Dwarka Expressway: Prime destination for Delhi commuters and frequent flyers traveling via IGI Airport.',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
];
