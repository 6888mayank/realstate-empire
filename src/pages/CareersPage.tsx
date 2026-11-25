import { useState, useMemo, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Send,
  Lock,
  X,
  FileText,
  DollarSign,
  Building,
  Target,
  Trophy,
  ExternalLink,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import {
  getStoredJobs,
  saveStoredApplication,
  HR_CONFIG,
  type JobOpening,
} from '@/data/careersData';
import { CORPORATE_OFFICE } from '@/data/constants';

export function CareersPage() {
  const [jobs] = useState<JobOpening[]>(() => getStoredJobs());
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    resumeDriveLink: '',
    coverNote: '',
  });

  const activeJobs = useMemo(() => {
    return jobs.filter((j) => j.isActive);
  }, [jobs]);

  const departments = useMemo(() => {
    const list = Array.from(new Set(activeJobs.map((j) => j.department)));
    return ['All', ...list];
  }, [activeJobs]);

  const filteredJobs = useMemo(() => {
    if (selectedDept === 'All') return activeJobs;
    return activeJobs.filter((j) => j.department === selectedDept);
  }, [activeJobs, selectedDept]);

  const handleOpenApply = (job?: JobOpening) => {
    setSelectedJob(job ?? null);
    setIsApplyModalOpen(true);
    setIsSubmitted(false);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const application = {
      id: `app-${Date.now()}`,
      jobId: selectedJob?.id ?? 'general-application',
      jobTitle: selectedJob?.title ?? 'General Speculative Application',
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      currentCompany: formData.currentCompany,
      resumeDriveLink: formData.resumeDriveLink,
      coverNote: formData.coverNote,
      appliedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Save to local storage for HR Portal view
    saveStoredApplication(application);

    // Prepare mailto payload to rahulrttripathi@gmail.com
    const subject = encodeURIComponent(
      `[Job Application] ${application.jobTitle} - ${application.fullName}`
    );
    const body = encodeURIComponent(
      `Dear HR / Rahul Tripathi,\n\nA new candidate has submitted a job application via the AVYAAVATI REALTORS Career Portal:\n\n` +
        `• Candidate Name: ${application.fullName}\n` +
        `• Position Applied: ${application.jobTitle}\n` +
        `• Email: ${application.email}\n` +
        `• Phone Number: ${application.phone}\n` +
        `• Total Experience: ${application.experience}\n` +
        `• Current Company: ${application.currentCompany || 'Not Specified'}\n` +
        `• Google Drive Resume Link: ${application.resumeDriveLink}\n\n` +
        `• Candidate Note / Cover Message:\n${application.coverNote || 'No additional note provided'}\n\n` +
        `---\n` +
        `Submitted on: ${application.appliedAt}\n` +
        `AVYAAVATI REALTORS Careers Portal • Gurugram Corporate Office`
    );

    const mailtoUrl = `mailto:${HR_CONFIG.applicationEmail}?subject=${subject}&body=${body}`;

    // Trigger user mail client fallback seamlessly
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();

    setIsSubmitted(true);
  };

  return (
    <div className="bg-navy-800 text-ivory">
      {/* 1. Page Header */}
      <PageHeader
        badge="Careers at AVYAAVATI"
        title="Shape the Future of Real Estate Advisory"
        subtitle="Join our Gurugram corporate headquarters. We empower ambitious professionals with institutional training, transparent high-yield incentives, and premier real estate portfolios."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Corporate Location & Hiring Banner */}
      <section className="border-b border-navy-700/60 bg-navy-900 py-5">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-4 px-5 text-xs lg:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-ivory">Currently Hiring for Gurugram HQ:</span>
            <span className="text-mist">
              {CORPORATE_OFFICE.society}, {CORPORATE_OFFICE.sector}, Gurugram
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/careers/hr-portal"
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/30 bg-navy-800/80 px-3 py-1 text-[11px] font-semibold text-gold-300 hover:border-gold-300 hover:bg-gold-300/10"
              title="HR Login"
            >
              <Lock size={12} />
              <span>HR Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Why Build a Career at AVYAAVATI */}
      <section className="bg-ivory py-24 text-navy-900 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Our Culture"
            title="Why Build Your Future With AVYAAVATI REALTORS"
            subtitle="We provide an ecosystem of ethical advisory, high performance rewards, and access to India's most affluent property buyers."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trophy,
                title: 'High-Yield Incentives',
                desc: 'Industry-leading commission splits, milestone bonuses, and quarterly performance payouts with zero payment friction.',
              },
              {
                icon: Building,
                title: 'Premier Developer Portfolio',
                desc: 'Represent the finest developers across Gurugram — from high-rise sky residences to Grade-A commercial enterprise parks.',
              },
              {
                icon: Target,
                title: 'Ethical & Transparent Culture',
                desc: 'Strict adherence to HRERA guidelines, verified clear titles, and genuine client-first advisory that builds lifetime relationships.',
              },
              {
                icon: Sparkles,
                title: 'Executive Mentorship',
                desc: 'Learn directly from leadership with deep capital markets experience, institutional research, and advanced client closing support.',
              },
            ].map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-700/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-gold-300 shadow">
                    <perk.icon size={26} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-navy-800">{perk.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-navy-700/75">{perk.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions Section */}
      <section id="openings" className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Current Vacancies
              </span>
              <h2 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
                Active Career Openings in Gurugram
              </h2>
              <p className="mt-2 text-sm text-mist max-w-xl">
                Explore open positions across Advisory, Commercial Leasing, Compliance, and Marketing at our Sector 69 corporate office.
              </p>
            </div>

            <button
              onClick={() => handleOpenApply()}
              className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-navy-800/80 px-6 py-3 text-xs font-semibold text-gold-300 hover:border-gold-300 hover:bg-gold-300/10"
            >
              <FileText size={15} />
              Submit General Application
            </button>
          </div>

          {/* Department Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  selectedDept === dept
                    ? 'bg-gold-300 text-navy-900 shadow-md scale-105'
                    : 'border border-navy-700 bg-navy-800/80 text-mist hover:border-gold-300/40 hover:text-ivory'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Openings Grid */}
          <div className="mt-12 space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="rounded-2xl border border-navy-700/60 bg-navy-800/50 p-12 text-center text-mist">
                <Briefcase size={36} className="mx-auto text-gold-300/50 mb-3" />
                <p>No active openings found in this department currently.</p>
                <button
                  onClick={() => setSelectedDept('All')}
                  className="mt-4 text-xs font-semibold text-gold-300 underline"
                >
                  View all active openings
                </button>
              </div>
            ) : (
              filteredJobs.map((job, idx) => (
                <Reveal key={job.id} delay={idx * 60}>
                  <div className="group rounded-2xl border border-navy-700/70 bg-navy-800/70 p-6 transition-all duration-300 hover:border-gold-300/60 hover:bg-navy-800 hover:shadow-xl lg:p-8">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="rounded-full border border-gold-300/40 bg-gold-300/10 px-3 py-1 text-[11px] font-semibold text-gold-300">
                            {job.department}
                          </span>
                          <span className="rounded-full bg-navy-900/80 px-2.5 py-0.5 text-[10px] text-mist/80">
                            {job.type}
                          </span>
                          <span className="text-[11px] text-emerald-400 font-medium">
                            Posted {job.postedDate}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl text-ivory group-hover:text-gold-200 transition-colors">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-mist">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-gold-300" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-gold-300" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1.5 text-gold-300 font-medium">
                            <DollarSign size={14} />
                            {job.ctc}
                          </span>
                        </div>

                        <p className="max-w-4xl text-xs leading-relaxed text-mist/80 pt-1">
                          {job.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <button
                          onClick={() => handleOpenApply(job)}
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-xs font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_20px_rgba(224,176,100,0.4)]"
                        >
                          Apply Now
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Key Responsibilities preview */}
                    <div className="mt-6 border-t border-navy-700/60 pt-5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-300/80 mb-2">
                        Key Responsibilities &amp; Requirements:
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2 text-xs text-mist/80">
                        {job.responsibilities.slice(0, 2).map((resp, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-gold-300 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 4. Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gold-300/30 bg-navy-900 p-6 sm:p-9 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-mist hover:text-ivory"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ivory">
                  Application Submitted Successfully
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-mist">
                  Thank you, <strong>{formData.fullName}</strong>. Your application for{' '}
                  <span className="text-gold-300 font-medium">
                    {selectedJob?.title || 'General Speculative Application'}
                  </span>{' '}
                  and your Google Drive resume have been recorded and forwarded to our Corporate HR Desk.
                </p>
                <div className="mt-6 rounded-xl border border-navy-700 bg-navy-800/80 p-4 text-xs text-mist text-left max-w-md mx-auto space-y-1.5">
                  <div>
                    <span className="text-gold-300 font-medium">Resume Drive Link:</span>{' '}
                    <a
                      href={formData.resumeDriveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-ivory hover:text-gold-300 break-all"
                    >
                      {formData.resumeDriveLink}
                    </a>
                  </div>
                  <div>
                    <span className="text-gold-300 font-medium">Recipient Desk:</span>{' '}
                    Corporate Talent Acquisition &amp; HR Desk
                  </div>
                </div>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-8 rounded-full bg-gold-300 px-8 py-3 text-xs font-semibold text-navy-900 hover:bg-gold-200"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    Application Desk
                  </span>
                  <h3 className="mt-1 font-serif text-2xl text-ivory">
                    {selectedJob ? selectedJob.title : 'Submit Your Candidacy'}
                  </h3>
                  <p className="mt-1 text-xs text-mist">
                    Applications and resume links are reviewed directly by our Talent Acquisition Team.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1">
                        Full Name <span className="text-gold-300">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1">
                        Email Address <span className="text-gold-300">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="candidate@example.com"
                        className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1">
                        Mobile Number (WhatsApp Preferred) <span className="text-gold-300">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1">
                        Total Real Estate / Sales Experience <span className="text-gold-300">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="e.g. 4.5 Years"
                        className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-mist mb-1">
                      Current / Most Recent Company &amp; Designation
                    </label>
                    <input
                      type="text"
                      value={formData.currentCompany}
                      onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                      placeholder="e.g. Senior Associate at XYZ Real Estate"
                      className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                    />
                  </div>

                  {/* Google Drive / Cloud Resume Link field as specifically requested */}
                  <div className="rounded-2xl border border-gold-300/30 bg-gold-300/5 p-4">
                    <label className="block text-xs font-semibold text-gold-300 mb-1">
                      Resume Link (Google Drive / Cloud Link) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.resumeDriveLink}
                      onChange={(e) => setFormData({ ...formData, resumeDriveLink: e.target.value })}
                      placeholder="https://drive.google.com/file/d/... or Dropbox link"
                      className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                    />
                    <div className="mt-2 flex items-start gap-1.5 text-[11px] text-mist/80 leading-relaxed">
                      <ExternalLink size={12} className="shrink-0 text-gold-300 mt-0.5" />
                      <span>
                        <strong>Important:</strong> Please ensure link sharing on Google Drive / Dropbox is set to{' '}
                        <em className="text-gold-300">"Anyone with the link can view"</em> so our HR team can access your CV.
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-mist mb-1">
                      Brief Introduction / Note for HR (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Tell us about your background, key closed transactions, or why you want to join AVYAAVATI REALTORS..."
                      className="w-full rounded-xl border border-navy-700 bg-navy-800 px-4 py-2.5 text-xs text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[11px] text-mist/60">
                      Dispatched to Corporate HR Desk
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-7 py-3 text-xs font-semibold text-navy-900 transition-all hover:bg-gold-200"
                    >
                      <Send size={14} />
                      Send Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Discreet HR Admin Link in Footer */}
      <section className="border-t border-navy-700/60 bg-navy-950 py-8">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-4 px-5 text-xs text-mist/60 lg:px-10">
          <div>
            AVYAAVATI REALTORS PRIVATE LIMITED • Talent &amp; Human Capital Management
          </div>
          <Link
            to="/careers/hr-portal"
            className="group inline-flex items-center gap-1.5 text-xs text-mist/50 hover:text-gold-300 transition-colors"
          >
            <Lock size={12} className="group-hover:text-gold-300" />
            <span>Internal HR Administration Portal (Restricted)</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
