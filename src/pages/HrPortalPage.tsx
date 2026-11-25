import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Unlock,
  PlusCircle,
  Briefcase,
  Users,
  CheckCircle2,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  ExternalLink,
  Mail,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import {
  getStoredJobs,
  saveStoredJobs,
  getStoredApplications,
  clearStoredApplications,
  HR_CONFIG,
  type JobOpening,
  type JobApplication,
} from '@/data/careersData';
import { BrandLogo } from '@/components/BrandLogo';

export function HrPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('avyaavati_hr_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Active Tab: 'post' | 'jobs' | 'applications'
  const [activeTab, setActiveTab] = useState<'post' | 'jobs' | 'applications'>('jobs');

  // Stored state
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // New Job Form State
  const [newJob, setNewJob] = useState({
    title: '',
    department: 'Advisory & Sales' as JobOpening['department'],
    location: 'Gurugram Corporate Office (Sector 69)',
    experience: '2 – 5 Years',
    type: 'Full-Time' as JobOpening['type'],
    ctc: '₹6 – 12 LPA + High-Yield Incentives',
    description: '',
    responsibilitiesText: '',
    requirementsText: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      setJobs(getStoredJobs());
      setApplications(getStoredApplications());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (passwordInput === HR_CONFIG.portalPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('avyaavati_hr_auth', 'true');
      setAuthError('');
      setJobs(getStoredJobs());
      setApplications(getStoredApplications());
    } else {
      setAuthError('Incorrect HR Security Password. Access Denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('avyaavati_hr_auth');
    setPasswordInput('');
  };

  const handleCreateJob = (e: FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.description) return;

    const respList = newJob.responsibilitiesText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const reqList = newJob.requirementsText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const jobToAdd: JobOpening = {
      id: `job-${Date.now()}`,
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      experience: newJob.experience,
      type: newJob.type,
      ctc: newJob.ctc,
      postedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      isActive: true,
      description: newJob.description,
      responsibilities:
        respList.length > 0 ? respList : ['Drive client acquisition and advisory closures.'],
      requirements:
        reqList.length > 0 ? reqList : ['Minimum 2 years of proven real estate sales experience.'],
    };

    const updatedJobs = [jobToAdd, ...jobs];
    setJobs(updatedJobs);
    saveStoredJobs(updatedJobs);

    // Reset Form
    setNewJob({
      title: '',
      department: 'Advisory & Sales',
      location: 'Gurugram Corporate Office (Sector 69)',
      experience: '2 – 5 Years',
      type: 'Full-Time',
      ctc: '₹6 – 12 LPA + High-Yield Incentives',
      description: '',
      responsibilitiesText: '',
      requirementsText: '',
    });

    setSuccessMessage(`Job "${jobToAdd.title}" has been successfully published to the live careers page!`);
    setActiveTab('jobs');
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  const toggleJobStatus = (id: string) => {
    const updated = jobs.map((j) => (j.id === id ? { ...j, isActive: !j.isActive } : j));
    setJobs(updated);
    saveStoredJobs(updated);
  };

  const handleDeleteJob = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to remove the opening "${title}"?`)) {
      const updated = jobs.filter((j) => j.id !== id);
      setJobs(updated);
      saveStoredJobs(updated);
    }
  };

  const handleCopyLink = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // --- 1. RENDER LOGIN SCREEN IF NOT AUTHENTICATED ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center px-5 py-16 text-ivory">
        <div className="w-full max-w-md rounded-3xl border border-gold-300/30 bg-navy-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-300/10 text-gold-300 border border-gold-300/20 shadow">
              <Lock size={32} />
            </div>

            <div className="mt-5 flex justify-center">
              <BrandLogo variant="navbar" />
            </div>

            <h1 className="mt-4 font-serif text-2xl text-ivory">
              HR Administration Portal
            </h1>
            <p className="mt-1 text-xs text-mist/70">
              Restricted Access • Talent Acquisition Desk (Rahul Tripathi)
            </p>
          </div>

          {authError && (
            <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-red-500/40 bg-red-950/60 p-3.5 text-xs text-red-200">
              <AlertCircle size={16} className="shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1.5">
                Security Passcode
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter HR Security Password"
                  className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-ivory placeholder-mist/40 focus:border-gold-300 focus:outline-none pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mist/60 hover:text-ivory"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold-300 py-3.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-all hover:bg-gold-200 hover:shadow-[0_0_24px_rgba(224,176,100,0.35)]"
            >
              <Unlock size={15} />
              Unlock HR Workspace
            </button>
          </form>

          <div className="mt-8 border-t border-navy-800 pt-5 text-center text-xs text-mist/50">
            <Link to="/careers" className="hover:text-gold-300 transition-colors">
              ← Return to Public Careers Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. RENDER HR DASHBOARD (AUTHENTICATED) ---
  return (
    <div className="min-h-screen bg-navy-950 text-ivory pb-24">
      {/* Top HR Control Header */}
      <header className="border-b border-navy-800 bg-navy-900/90 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <img
              src="/logo-symbol.png"
              alt="AVYAAVATI Emblem"
              className="h-9 w-9 object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-semibold text-ivory">
                  AVYAAVATI REALTORS • HR Administration
                </span>
                <span className="rounded-full bg-emerald-950 border border-emerald-400/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  LIVE
                </span>
              </div>
              <div className="text-xs text-mist/70">
                Talent Lead: Rahul Tripathi • Recipient Desk:{' '}
                <span className="text-gold-300">{HR_CONFIG.applicationEmail}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/careers"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy-700 bg-navy-800 px-4 py-2 text-xs font-semibold text-mist hover:text-ivory hover:border-gold-300/40"
            >
              <ExternalLink size={13} />
              View Live Careers Page
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-2 text-xs font-semibold text-red-300 hover:bg-red-900/50"
            >
              <LogOut size={13} />
              Lock Portal
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-t border-navy-800/80 bg-navy-900/50">
          <div className="mx-auto flex max-w-8xl gap-2 px-5 lg:px-10">
            {[
              { id: 'jobs', label: `Manage Openings (${jobs.length})`, icon: Briefcase },
              { id: 'post', label: 'Post New Job', icon: PlusCircle },
              { id: 'applications', label: `Applications Received (${applications.length})`, icon: Users },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 border-b-2 px-5 py-3.5 text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'border-gold-300 text-gold-300 bg-gold-300/5'
                      : 'border-transparent text-mist hover:text-ivory'
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main HR Workspace Area */}
      <main className="mx-auto max-w-8xl px-5 pt-8 lg:px-10">
        {/* Success Alert Banner */}
        {successMessage && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-950/80 p-4 text-xs text-emerald-200">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* --- TAB 1: MANAGE JOBS --- */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-ivory">Active Real Estate Openings</h2>
                <p className="text-xs text-mist">
                  Jobs listed below are directly published on the public <code>/careers</code> page in real time.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('post')}
                className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-2.5 text-xs font-semibold text-navy-900 hover:bg-gold-200"
              >
                <PlusCircle size={15} />
                Add New Job Opening
              </button>
            </div>

            <div className="grid gap-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col justify-between gap-4 rounded-2xl border border-navy-800 bg-navy-900/80 p-5 shadow-lg lg:flex-row lg:items-center"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          job.isActive
                            ? 'bg-emerald-950 border border-emerald-400/40 text-emerald-300'
                            : 'bg-navy-800 text-mist'
                        }`}
                      >
                        {job.isActive ? 'ACTIVE ON SITE' : 'DRAFT / HIDDEN'}
                      </span>
                      <span className="rounded-full bg-navy-800 px-2.5 py-0.5 text-[10px] text-gold-300">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-mist/60">{job.type}</span>
                    </div>

                    <h3 className="font-serif text-xl text-ivory">{job.title}</h3>

                    <div className="flex flex-wrap items-center gap-x-5 text-xs text-mist/80">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>Experience: {job.experience}</span>
                      <span>•</span>
                      <span className="text-gold-300 font-medium">{job.ctc}</span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2.5 pt-2 lg:pt-0">
                    <button
                      onClick={() => toggleJobStatus(job.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        job.isActive
                          ? 'border border-amber-400/40 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60'
                          : 'border border-emerald-400/40 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60'
                      }`}
                    >
                      {job.isActive ? 'Deactivate' : 'Publish / Activate'}
                    </button>

                    <button
                      onClick={() => handleDeleteJob(job.id, job.title)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500/30 text-red-400 hover:bg-red-950/60"
                      title="Delete Job"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TAB 2: POST NEW JOB --- */}
        {activeTab === 'post' && (
          <div className="max-w-4xl rounded-3xl border border-navy-800 bg-navy-900/80 p-7 lg:p-10 shadow-2xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                Talent Requisition Form
              </span>
              <h2 className="mt-1 font-serif text-3xl text-ivory">Create a New Job Opening</h2>
              <p className="mt-1 text-xs text-mist">
                This job will immediately appear on the public AVYAAVATI REALTORS careers portal.
              </p>
            </div>

            <form onSubmit={handleCreateJob} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Job Title <span className="text-gold-300">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    placeholder="e.g. Luxury Residential Sales Manager"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Department
                  </label>
                  <select
                    value={newJob.department}
                    onChange={(e) =>
                      setNewJob({
                        ...newJob,
                        department: e.target.value as JobOpening['department'],
                      })
                    }
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  >
                    <option value="Advisory & Sales">Advisory &amp; Sales</option>
                    <option value="Commercial Leasing">Commercial Leasing</option>
                    <option value="Legal & Compliance">Legal &amp; Compliance</option>
                    <option value="Client Relations">Client Relations</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Job Type
                  </label>
                  <select
                    value={newJob.type}
                    onChange={(e) =>
                      setNewJob({ ...newJob, type: e.target.value as JobOpening['type'] })
                    }
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.experience}
                    onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                    placeholder="e.g. 3 – 6 Years"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Compensation / Package (CTC)
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.ctc}
                    onChange={(e) => setNewJob({ ...newJob, ctc: e.target.value })}
                    placeholder="e.g. ₹8 – 16 LPA + Commission"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Job Location
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    placeholder="Gurugram Corporate Office (Sector 69)"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Job Summary &amp; Role Overview <span className="text-gold-300">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newJob.description}
                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                    placeholder="Brief description of the day-to-day role and objectives..."
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Key Responsibilities (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={newJob.responsibilitiesText}
                    onChange={(e) => setNewJob({ ...newJob, responsibilitiesText: e.target.value })}
                    placeholder="Lead client presentations&#10;Conduct on-ground site visits&#10;Coordinate title vetting"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ivory mb-1">
                    Candidate Requirements (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={newJob.requirementsText}
                    onChange={(e) => setNewJob({ ...newJob, requirementsText: e.target.value })}
                    placeholder="3+ years in real estate sales&#10;Excellent communication skills&#10;Deep knowledge of SPR / Golf Course Road"
                    className="w-full rounded-xl border border-navy-700 bg-navy-950 px-4 py-2.5 text-xs text-ivory focus:border-gold-300 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('jobs')}
                  className="rounded-full border border-navy-700 px-6 py-2.5 text-xs font-semibold text-mist hover:text-ivory"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-3 text-xs font-semibold text-navy-900 hover:bg-gold-200 shadow-lg"
                >
                  <PlusCircle size={15} />
                  Publish Job Opening
                </button>
              </div>
            </form>
          </div>
        )}

        {/* --- TAB 3: CANDIDATE APPLICATIONS --- */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-ivory">Applications Received</h2>
                <p className="text-xs text-mist">
                  Candidate responses submitted through the public career application modal. All submissions are also routed to{' '}
                  <span className="text-gold-300 font-semibold">{HR_CONFIG.applicationEmail}</span>.
                </p>
              </div>

              {applications.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear stored application records?')) {
                      clearStoredApplications();
                      setApplications([]);
                    }
                  }}
                  className="text-xs text-red-400 hover:underline"
                >
                  Clear Application History
                </button>
              )}
            </div>

            {applications.length === 0 ? (
              <div className="rounded-2xl border border-navy-800 bg-navy-900/60 p-12 text-center text-mist">
                <Users size={40} className="mx-auto text-gold-300/40 mb-3" />
                <h3 className="font-serif text-lg text-ivory">No Applications Yet</h3>
                <p className="text-xs mt-1 text-mist/70">
                  When applicants click "Apply Now" on any job and submit their details with their Google Drive resume link, they will appear here and in Rahul Tripathi's inbox.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-2xl border border-navy-800 bg-navy-900/90 p-6 shadow-md space-y-4"
                  >
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center border-b border-navy-800 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-xl font-semibold text-ivory">
                            {app.fullName}
                          </h3>
                          <span className="rounded-full bg-gold-300/10 border border-gold-300/30 px-2.5 py-0.5 text-[10px] font-semibold text-gold-300">
                            {app.jobTitle}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-mist">
                          Experience: <strong>{app.experience}</strong> • Current:{' '}
                          {app.currentCompany || 'Not disclosed'} • Applied on: {app.appliedAt}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${app.email}?subject=Regarding Your Application for ${app.jobTitle} at AVYAAVATI REALTORS`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-gold-300/10 px-3.5 py-1.5 text-xs font-semibold text-gold-300 hover:bg-gold-300/20"
                        >
                          <Mail size={13} />
                          Email Candidate
                        </a>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 text-xs">
                      <div>
                        <span className="text-mist/70">Email:</span>{' '}
                        <span className="text-ivory font-medium">{app.email}</span>
                      </div>
                      <div>
                        <span className="text-mist/70">Phone (WhatsApp):</span>{' '}
                        <span className="text-ivory font-medium">{app.phone}</span>
                      </div>
                    </div>

                    {/* Resume Drive Link Box */}
                    <div className="rounded-xl border border-gold-300/30 bg-gold-300/5 p-3.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs min-w-0">
                        <ExternalLink size={15} className="text-gold-300 shrink-0" />
                        <span className="text-mist shrink-0">Google Drive Resume:</span>
                        <a
                          href={app.resumeDriveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gold-300 underline truncate hover:text-gold-200"
                        >
                          {app.resumeDriveLink}
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyLink(app.resumeDriveLink, app.id)}
                          className="inline-flex items-center gap-1 text-[11px] text-mist hover:text-ivory bg-navy-800 px-2.5 py-1 rounded-lg border border-navy-700"
                        >
                          {copiedId === app.id ? (
                            <>
                              <Check size={12} className="text-emerald-400" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy size={12} /> Copy Link
                            </>
                          )}
                        </button>
                        <a
                          href={app.resumeDriveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy-900 bg-gold-300 px-3 py-1 rounded-lg hover:bg-gold-200"
                        >
                          Open Resume Drive <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>

                    {app.coverNote && (
                      <div className="text-xs text-mist/90 bg-navy-950 p-3 rounded-xl border border-navy-800">
                        <span className="text-gold-300 font-semibold block mb-1">Candidate Note:</span>
                        <p className="whitespace-pre-wrap">{app.coverNote}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
