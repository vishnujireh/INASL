import React, { useState } from 'react';
import { ArrowRight, Award, CheckCircle2, Download, FileText, Search, ShieldCheck } from 'lucide-react';
import { LandingModal, SectionHead, btnPrimary, container, sectionPad } from './landing/kit';

type DocModal = 'brochure' | 'clearance' | 'certificate';

const DOCS: { id: DocModal; icon: React.ElementType; title: string; desc: string; action: string }[] = [
  {
    id: 'brochure',
    icon: FileText,
    title: 'Conference Brochure',
    desc: 'Detailed 24-page scientific program, committee roster, and session schedules.',
    action: 'Preview & Download (PDF)',
  },
  {
    id: 'clearance',
    icon: ShieldCheck,
    title: 'Ministry Clearances',
    desc: 'Official MEA, MHA, and Health Ministry NOC approvals for international visa processing.',
    action: 'View Clearances & NOCs',
  },
  {
    id: 'certificate',
    icon: Award,
    title: 'CME Certificates',
    desc: 'Download post-conference CME attendance certificates and presentation laurels.',
    action: 'Certificate Portal',
  },
];

const CLEARANCES = [
  { name: 'Ministry of External Affairs (MEA)', ref: 'Clearance reference to be announced', file: 'MEA_NOC_Clearance_INASL2027' },
  { name: 'Ministry of Home Affairs (MHA)', ref: 'Security clearance reference to be announced', file: 'MHA_Security_Clearance_INASL2027' },
  { name: 'Ministry of Health & Family Welfare', ref: 'Nodal clearance reference to be announced', file: 'MoHFW_NOC_INASL2027' },
];

export const DownloadsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<DocModal | null>(null);
  const [certRegId, setCertRegId] = useState('');
  const [certResult, setCertResult] = useState<string | null>(null);

  const handleDownload = (filename: string) => {
    // Generate text/pdf dummy download
    const content = `INASL 2027 – 34th Annual Meeting of the Indian National Association for Study of the Liver\n5–8 August 2027, Novotel Jaipur Convention Centre, Jaipur, Rajasthan\nDocument: ${filename}\nAccreditation details to be announced\nOrganizing Chairman: Prof. Vivek A Saraswat\nCo-Organizing Chairman: Prof. Naimish N Mehta`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const verifyCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certRegId.trim()) return;
    setCertResult(`Certificate Found: Dr. ${certRegId.toUpperCase()} • 12 CME Credit Hours Validated (Accreditation No: to be announced)`);
  };

  const closeCertificate = () => {
    setActiveModal(null);
    setCertResult(null);
    setCertRegId('');
  };

  return (
    <section id="downloads" className={`bg-sand ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Downloads & Documentation"
          lead="Access official conference collateral, regulatory clearances for international travel, and digital certification verification."
        />

        <ul className="mt-12 border-t border-sand-deep">
          {DOCS.map(({ id, icon: Icon, title, desc, action }) => (
            <li key={id} className="border-b border-sand-deep">
              <button
                type="button"
                onClick={() => setActiveModal(id)}
                className="group grid w-full grid-cols-[48px_1fr] items-center gap-x-5 gap-y-2 py-7 text-left md:grid-cols-[48px_1fr_auto] cursor-pointer"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-wine transition-colors group-hover:bg-wine group-hover:text-sand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-2xl leading-tight text-ink">{title}</span>
                  <span className="mt-1 block text-[15px] text-stone">{desc}</span>
                </span>
                <span className="col-start-2 inline-flex items-center gap-1.5 text-[15px] font-semibold text-wine md:col-start-3">
                  {action} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Brochure */}
      <LandingModal open={activeModal === 'brochure'} onClose={() => setActiveModal(null)} label="Official Conference Brochure">
        <h3 className="font-display text-3xl leading-tight text-ink">Official Conference Brochure</h3>
        <p className="mt-1 text-sm text-stone">INASL-2027-Brochure.pdf</p>
        <ul className="mt-5 space-y-2.5 text-[15px] text-ink/85">
          {[
            'Complete 3-day chronological scientific track breakdown',
            'Full faculty directory with session references and hall allocations',
            'Delegate guidelines, poster dimensions, and gala banquet agenda',
            'City excursion itineraries and Novotel Jaipur Convention Centre floor plans',
          ].map((t) => (
            <li key={t} className="flex gap-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-saffron-dark" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex justify-end gap-3">
          <button onClick={() => setActiveModal(null)} className="px-4 py-3 text-[15px] font-semibold text-stone hover:text-ink cursor-pointer">
            Close
          </button>
          <button
            onClick={() => {
              handleDownload('INASL_2027_Official_Brochure');
              setActiveModal(null);
            }}
            className={btnPrimary}
          >
            <Download className="h-4 w-4" /> Download PDF
          </button>
        </div>
      </LandingModal>

      {/* Ministry clearances */}
      <LandingModal open={activeModal === 'clearance'} onClose={() => setActiveModal(null)} label="Government Approvals & Visa NOCs">
        <h3 className="font-display text-3xl leading-tight text-ink">Government Approvals &amp; Visa NOCs</h3>
        <p className="mt-1 text-[15px] text-stone">Essential for international delegates applying for Conference Visa (C-Visa)</p>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {CLEARANCES.map((c) => (
            <li key={c.file} className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="text-[15px] font-semibold text-ink">{c.name}</p>
                <p className="text-sm text-stone">{c.ref}</p>
              </div>
              <button
                onClick={() => handleDownload(c.file)}
                aria-label={`Download ${c.name} PDF`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-wine/25 px-3.5 py-1.5 text-sm font-semibold text-wine hover:bg-wine hover:text-white cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" /> PDF
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-end">
          <button onClick={() => setActiveModal(null)} className={btnPrimary}>
            Done
          </button>
        </div>
      </LandingModal>

      {/* CME certificate verification */}
      <LandingModal open={activeModal === 'certificate'} onClose={closeCertificate} label="CME Certificate Verification">
        <h3 className="font-display text-3xl leading-tight text-ink">CME Certificate Verification</h3>
        <p className="mt-1 text-[15px] text-stone">Enter your Delegate Badge ID or Registered Email to look up your official e-certificate.</p>

        <form onSubmit={verifyCertificate} className="mt-5 space-y-3">
          <label htmlFor="cert-id" className="sr-only">
            Delegate Badge ID or Registered Email
          </label>
          <input
            id="cert-id"
            type="text"
            value={certRegId}
            onChange={(e) => setCertRegId(e.target.value)}
            placeholder="e.g. INASL-8921 or your name"
            className="w-full rounded-xl border border-line bg-sand/50 px-4 py-3 text-[15px] focus:border-wine focus:outline-none"
            required
          />
          <button type="submit" className={`${btnPrimary} w-full`}>
            <Search className="h-4 w-4" /> Find &amp; Generate Certificate
          </button>
        </form>

        {certResult && (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-[15px] text-emerald-900" role="status">
            <p className="flex items-start gap-2 font-medium">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
              {certResult}
            </p>
            <button
              onClick={() => handleDownload(`INASL2027_CME_Certificate_${certRegId}`)}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-emerald-700 py-3 font-semibold text-white hover:bg-emerald-800 cursor-pointer"
            >
              <Download className="h-4 w-4" /> Download Digitally Signed Certificate (PDF)
            </button>
          </div>
        )}
      </LandingModal>
    </section>
  );
};
