export interface JobOpening {
  id: string;
  title: string;
  department: 'Advisory & Sales' | 'Commercial Leasing' | 'Legal & Compliance' | 'Client Relations' | 'Marketing' | 'Operations';
  location: string;
  experience: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
  ctc: string;
  postedDate: string;
  isActive: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  currentCompany?: string;
  resumeDriveLink: string;
  coverNote?: string;
  appliedAt: string;
}

export const HR_CONFIG = {
  portalPassword: 'HR-Rahul@123',
  applicationEmail: 'rahulrttripathi@gmail.com',
  corporateLocation: 'Flat No. 204, Tower B2, Tulip Purple, Sector 69, Gurgaon - 122101',
};

export const INITIAL_JOBS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Luxury Real Estate Investment Advisor',
    department: 'Advisory & Sales',
    location: 'Gurugram Corporate Office (Sector 69)',
    experience: '3 – 7 Years',
    type: 'Full-Time',
    ctc: '₹8 – 18 LPA + High-Yield Performance Incentives',
    postedDate: 'November 2026',
    isActive: true,
    description:
      'Lead high-net-worth client portfolio management for premium residential properties across Golf Course Extension Road, Southern Peripheral Road (SPR), and Sector 69.',
    responsibilities: [
      'Manage end-to-end luxury property advisory for HNIs, business owners, and corporate executives.',
      'Coordinate site inspections, developer pricing negotiations, and comparative market analysis.',
      'Maintain strong relationships with top Gurugram developers (Tulip, DLF, M3M, Godrej).',
      'Ensure 100% adherence to transparency and title compliance standards.',
    ],
    requirements: [
      'Proven experience in Gurugram luxury real estate transactions.',
      'Excellent verbal articulation and polished corporate presentation skills.',
      'Strong negotiation capabilities and track record of target achievement.',
      'Sound knowledge of Golf Course Ext., SPR, and Dwarka Expressway micro-markets.',
    ],
  },
  {
    id: 'job-2',
    title: 'Commercial Leasing & Retail Specialist',
    department: 'Commercial Leasing',
    location: 'Gurugram Corporate Office (Sector 69 / Cyber City Fringe)',
    experience: '2 – 5 Years',
    type: 'Full-Time',
    ctc: '₹7 – 15 LPA + Deal Incentives',
    postedDate: 'November 2026',
    isActive: true,
    description:
      'Spearhead Grade-A commercial office space leases and high-street retail property transactions across Cyber City, Golf Course Road, and emerging commercial belts.',
    responsibilities: [
      'Represent corporate occupiers, tech companies, and retail brands in commercial space acquisition.',
      'Conduct commercial floorplate due diligence, term sheet comparisons, and lease deed reviews.',
      'Facilitate pre-leased commercial asset transactions for private capital investors.',
      'Drive business development and network expansion across corporate real estate heads.',
    ],
    requirements: [
      'Direct experience in institutional office leasing or high-street retail spaces in Delhi-NCR.',
      'Strong financial aptitude for rental yields, escalation clauses, and fitout covenants.',
      'Bachelor’s or Master’s degree in Business, Real Estate, or Finance.',
    ],
  },
  {
    id: 'job-3',
    title: 'Legal & HRERA Property Due Diligence Executive',
    department: 'Legal & Compliance',
    location: 'Gurugram Corporate Office (Sector 69)',
    experience: '2 – 5 Years',
    type: 'Full-Time',
    ctc: '₹5 – 9 LPA',
    postedDate: 'November 2026',
    isActive: true,
    description:
      'Ensure institutional-grade title verification, HRERA project compliance validation, and documentation accuracy for all property advisory mandates.',
    responsibilities: [
      'Scrutinize title deeds, encumbrance certificates, mutation records, and DTCP licenses.',
      'Verify project registration status and escrow filings on the official Haryana RERA portal.',
      'Draft and review customized agreement to sell, MoUs, and transaction documents.',
      'Liaise with revenue offices, DTCP Haryana, and registrar offices when required.',
    ],
    requirements: [
      'LL.B or legal degree with specialization in real estate / property law.',
      'Hands-on expertise in Haryana RERA guidelines and Haryana revenue documentation.',
      'Meticulous attention to detail and zero tolerance for title ambiguities.',
    ],
  },
  {
    id: 'job-4',
    title: 'Client Relationship Manager – HNI & NRI Desk',
    department: 'Client Relations',
    location: 'Gurugram Corporate Office (Sector 69)',
    experience: '1 – 4 Years',
    type: 'Full-Time',
    ctc: '₹4.5 – 8 LPA',
    postedDate: 'November 2026',
    isActive: true,
    description:
      'Provide concierge-level advisory support for non-resident Indian (NRI) investors and out-station clients looking to deploy capital in Gurugram real estate.',
    responsibilities: [
      'Serve as single point of contact for virtual property tours, progress updates, and documentation.',
      'Assist with FEMA compliance, repatriation guidance, and NRE/NRO account procedures.',
      'Coordinate personalized site visits and itinerary planning for visiting clients.',
      'Uphold AVYAAVATI’s core values of trust, transparency, and responsive service.',
    ],
    requirements: [
      'Prior client-facing experience in wealth management, banking, or luxury real estate.',
      'Flawless English communication (both written and oral).',
      'Customer-centric demeanor with strong problem-solving orientation.',
    ],
  },
  {
    id: 'job-5',
    title: 'Real Estate Digital Growth & Portfolio Marketing Specialist',
    department: 'Marketing',
    location: 'Gurugram Corporate Office (Sector 69)',
    experience: '1 – 3 Years',
    type: 'Full-Time',
    ctc: '₹4 – 7.5 LPA',
    postedDate: 'November 2026',
    isActive: true,
    description:
      'Drive high-intent digital acquisition funnels, luxury property walkthrough production, and brand positioning across social and search channels.',
    responsibilities: [
      'Manage targeted performance marketing campaigns for luxury Gurugram properties.',
      'Produce compelling video walkthroughs, drone footage previews, and social collateral.',
      'Optimize landing pages and CRM lead distribution for the advisory sales team.',
      'Track CPA, CPL, and lead-to-site-visit conversion metrics.',
    ],
    requirements: [
      'Hands-on experience with Google Ads, Meta Ads Manager, and real estate lead generation.',
      'Creative eye for luxury aesthetic presentation and architectural storytelling.',
      'Familiarity with CRM tools and real estate marketing automation.',
    ],
  },
];

const JOBS_STORAGE_KEY = 'avyaavati_careers_jobs';
const APPS_STORAGE_KEY = 'avyaavati_career_applications';

export function getStoredJobs(): JobOpening[] {
  if (typeof window === 'undefined') return INITIAL_JOBS;
  try {
    const raw = localStorage.getItem(JOBS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(INITIAL_JOBS));
      return INITIAL_JOBS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_JOBS;
  } catch {
    return INITIAL_JOBS;
  }
}

export function saveStoredJobs(jobs: JobOpening[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(jobs));
  } catch (e) {
    console.error('Failed to save jobs to localStorage:', e);
  }
}

export function getStoredApplications(): JobApplication[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(APPS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredApplication(application: JobApplication): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getStoredApplications();
    const updated = [application, ...existing];
    localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save application to localStorage:', e);
  }
}

export function clearStoredApplications(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(APPS_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear applications:', e);
  }
}
