export type PropertyType =
  | 'Luxury Apartments'
  | 'Residential Plots'
  | 'Independent Homes & Villas'
  | 'Commercial Properties'
  | 'Office Spaces'
  | 'Retail & Commercial Shops'
  | 'Investment Properties'
  | 'Ready-to-Move Properties';

export const PROPERTY_TYPES: PropertyType[] = [
  'Luxury Apartments',
  'Residential Plots',
  'Independent Homes & Villas',
  'Commercial Properties',
  'Office Spaces',
  'Retail & Commercial Shops',
  'Investment Properties',
  'Ready-to-Move Properties',
];

export const CORPORATE_OFFICE = {
  flatNo: 'Flat No. 204',
  tower: 'Tower B2',
  society: 'Tulip Purple',
  sector: 'Sector 69',
  city: 'Gurgaon',
  pincode: '122101',
  state: 'Haryana',
  fullAddress: 'Flat No. 204, Tower B2, Tulip Purple, Sector 69, Gurgaon - 122101, Haryana',
  primaryOperationalCity: 'Gurugram (Delhi-NCR)',
  expansionCities: ['Delhi NCR', 'Noida', 'Mumbai', 'Pune', 'Bengaluru', 'Hyderabad'],
} as const;

export const PLACEHOLDER_LOCATIONS = [
  'Gurugram (Currently Operational)',
  'Sector 69 & SPR, Gurugram',
  'Golf Course Extension, Gurugram',
  'Dwarka Expressway, Gurugram',
  'Golf Course Road, Gurugram',
  'Sohna Road, Gurugram',
  'Delhi NCR (Expansion)',
  'Noida (Upcoming Scope)',
  'Mumbai (Upcoming Scope)',
  'Pune (Upcoming Scope)',
  'Bengaluru (Upcoming Scope)',
  'Hyderabad (Upcoming Scope)',
] as const;
