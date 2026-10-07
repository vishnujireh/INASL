import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Download,
  FileText,
  Layers,
  Mic,
  MonitorPlay,
  Sparkles,
  Ticket,
  TriangleAlert,
  Type,
  Video,
} from 'lucide-react';
import type { AbstractCategory } from '../api/types';
import { GUIDELINES_TEXT } from '../data/abstractGuidelines';
import { AbstractSubmitPanel } from '../features/abstracts/PublicAbstractForm';
import { SectionHead, container, sectionPad } from './landing/kit';

interface AbstractSubmissionSectionProps {
  /** Opens the submission page (signed-in delegates) or brings the sign-in card into view, optionally pre-selecting a category. */
  onStartSubmission?: (category?: AbstractCategory) => void;
}

/* ------------------------------------------------------------------------------------------------
 * Content – "Abstract Submission Guideline – INASL 2027"
 * ---------------------------------------------------------------------------------------------- */

type Group = { title?: string; items: React.ReactNode[] };
type Category = {
  id: AbstractCategory;
  name: string;
  /** Tab label. */
  short: string;
  icon: React.ElementType;
  tag: string;
  description: string;
  eligibility: string;
  upload: string;
  groups: Group[];
  notice?: React.ReactNode;
  quote?: string;
};

const CATEGORIES: Category[] = [
  {
    id: 'plenary',
    name: 'Plenary Sessions',
    short: 'Plenary',
    icon: Award,
    tag: 'INASL members only',
    description: 'The highest-tier podium presentation at INASL 2027, reserved for original research by members of the Indian National Association for Study of the Liver.',
    eligibility: 'INASL members only',
    upload: 'Complete manuscript – single PDF',
    groups: [
      {
        items: [
          'Case reports will not be accepted.',
          'Submission of the complete manuscript is mandatory.',
          'The manuscript must include the abstract, figures and tables.',
          'The complete manuscript should be uploaded as a single PDF file.',
        ],
      },
    ],
    notice: 'Abstracts submitted without the full manuscript upload will be automatically rejected for the Plenary Session.',
  },
  {
    id: 'yia',
    name: 'Young Investigator Awards',
    short: 'Young Investigator',
    icon: Sparkles,
    tag: 'Under 45 years',
    description: 'An award session recognising outstanding research by early-career investigators in hepatology and liver transplantation.',
    eligibility: 'Presenting author under 45 years of age',
    upload: 'Complete manuscript – single PDF',
    groups: [
      {
        items: [
          'Case reports will not be accepted.',
          'Submission of the complete manuscript is mandatory.',
          'The manuscript must include the abstract, figures and tables.',
          'The complete manuscript should be uploaded as a single PDF file.',
        ],
      },
    ],
    notice: 'Abstracts submitted without the full manuscript upload will be automatically rejected for the Young Investigator Session.',
  },
  {
    id: 'oral',
    name: 'Oral Paper Presentations',
    short: 'Oral Paper',
    icon: Mic,
    tag: 'Original research',
    description: 'Podium presentations of original research in designated scientific sessions.',
    eligibility: 'Original, high-quality scientific research',
    upload: 'Complete abstract – Word file',
    groups: [
      {
        items: [
          'Abstracts must be based on original, high-quality scientific research.',
          'Submissions will be rigorously reviewed by the Scientific Committee for originality, relevance and scientific merit.',
          'Selected abstracts will be assigned for oral presentation in designated scientific sessions.',
          'Presentation guidelines, format and allotted time will be communicated upon acceptance.',
          'The presenting author must complete conference registration to be eligible to present the paper.',
        ],
      },
    ],
  },
  {
    id: 'eposter',
    name: 'E-Poster Presentations',
    short: 'E-Poster',
    icon: MonitorPlay,
    tag: 'Single Word file',
    description:
      'A modern, interactive platform to present your research to leading experts – designed to highlight key findings, stimulate discussion and enhance the visibility of your work.',
    eligibility: 'All researchers with original scientific work',
    upload: 'E-poster – single Word file',
    groups: [
      {
        title: 'Who can submit',
        items: ['Open to all researchers submitting original, high-quality scientific work.', 'Case reports may be considered only if indicated in the session criteria.'],
      },
      {
        title: 'Submission requirements',
        items: [
          'Abstracts must reflect original scientific research of significant quality.',
          'A single Word file with: title and authors with affiliations; a structured abstract (Background, Methods, Results, Conclusion); figures, tables and relevant visuals.',
          'All submissions are reviewed by the Scientific Committee for originality, relevance and scientific merit.',
        ],
      },
      {
        title: 'Design & formatting',
        items: [
          'Recommended size: A0, portrait orientation.',
          'Clear, legible font – minimum 24 pt for body text.',
          'Concise, high-impact content; avoid overcrowding.',
          'High-resolution images, graphs and tables.',
        ],
      },
      {
        title: 'Presentation & engagement',
        items: [
          'Accepted e-posters are displayed on digital screens in designated halls.',
          'Presenting authors are encouraged to engage with attendees and answer questions.',
          'Display and interaction guidelines will be provided upon acceptance.',
        ],
      },
    ],
    notice: 'The presenting author must register for the conference. Incomplete submissions or Word files not adhering to the guidelines may be rejected.',
  },
  {
    id: 'video',
    name: 'Video Digest Session',
    short: 'Video Digest',
    icon: Video,
    tag: 'Procedural video',
    description: 'High-quality educational and scientific videos showcasing procedural and surgical expertise in liver disease and transplantation. Every submission should work as a teaching tool.',
    eligibility: 'Educational & scientific videos in hepatology and liver transplantation',
    upload: 'Video file (MP4 / MOV, up to 500 MB) + abstract',
    groups: [
      {
        title: 'Introduction',
        items: [
          'Background & relevance – why the case or technique matters.',
          'Objectives – what the video aims to teach or show.',
          'Rationale – why this method or approach was chosen.',
        ],
      },
      {
        title: 'Novel techniques',
        items: ['Justification – why this method was selected.', 'Alternatives – other techniques and why they were not selected.'],
      },
      {
        title: 'High-quality video',
        items: [
          'Sharp, stable and well-lit visuals that clearly show the technique, findings or outcomes.',
          'Avoid shaking, poor resolution or artifacts – these may lead to rejection.',
          'Use diagrams, labels or annotations for complex concepts.',
        ],
      },
      {
        title: 'Clear summary',
        items: ['Key findings & outcomes.', 'Clinical relevance for current or future practice.'],
      },
      { title: 'Disclosures', items: ['All authors must declare conflicts of interest or financial disclosures.'] },
      { title: 'English narration', items: ['Speak clearly and at a moderate pace.', 'Guide viewers smoothly through the procedure or findings.'] },
    ],
    quote:
      'Think of your submission as a teaching tool – your audience should understand the significance, learn the technique and appreciate the clinical relevance even without prior exposure to the case.',
  },
];

const GENERAL: { title: string; icon: React.ElementType; items: React.ReactNode[] }[] = [
  {
    title: 'Language & format',
    icon: Type,
    items: [
      'Abstracts must be submitted in English.',
      <>The abstract body must not exceed <strong>300 words</strong> – longer abstracts are not accepted.</>,
      'Check spelling and grammar carefully; abstracts are published exactly as received.',
    ],
  },
  {
    title: 'Title, keywords & files',
    icon: FileText,
    items: [
      'The file must include the title, authors, institution and abstract.',
      <>Title in <strong>sentence case</strong>, without abbreviations.</>,
      <>Provide <strong>3–4 keywords</strong> in alphabetical order.</>,
    ],
  },
  {
    title: 'References',
    icon: BookOpen,
    items: [
      'Number references consecutively, formatted to journal standards.',
      'List all authors if six or fewer; if more than six, list the first three followed by et al.',
      'Include article title, abbreviated journal title, year, volume and page numbers.',
      <span className="text-sm italic text-stone">
        Guzman-Prado Y, Samson O, Segal JP, Limdi JK, Hayee B. Vitamin D therapy in adults with inflammatory bowel disease: A systematic review and meta-analysis. Inflamm Bowel
        Dis. 2020,26:1819-30.
      </span>,
    ],
  },
  {
    title: 'Authors & roles',
    icon: Layers,
    items: [
      <><strong>Submitting author</strong> – receives all communications.</>,
      <><strong>Presenting author</strong> – presents at the conference and must register.</>,
      <><strong>Co-authors</strong> – endorse the scientific content.</>,
      'Enter full names with first letters capitalised, and declare all financial or other conflicts of interest.',
    ],
  },
  {
    title: 'Before you submit',
    icon: Check,
    items: [
      'A free INASL 2027 account is required – log in or create one to submit.',
      'Complete all mandatory fields (*).',
      'Abstracts cannot be edited once submitted, unless the Scientific Committee returns them with a comment – then revise and resubmit from My Abstracts.',
      'A confirmation email is sent on successful submission.',
      'Acceptance by the Scientific Committee does not guarantee permission to present.',
    ],
  },
];

const FACTS: { icon: React.ElementType; value: string; label: string }[] = [
  { icon: Layers, value: '5', label: 'Presentation categories' },
  { icon: Type, value: '300', label: 'Word limit per abstract' },
  { icon: BookOpen, value: 'JCEH', label: 'Published in the Journal of Clinical and Experimental Hepatology' },
  { icon: Ticket, value: 'Free', label: 'Registration for accepted authors' },
];

function downloadGuidelines() {
  const url = URL.createObjectURL(new Blob([GUIDELINES_TEXT], { type: 'text/plain;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'INASL_2027_Abstract_Submission_Guidelines.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ------------------------------------------------------------------------------------------------
 * One section: call for abstracts (facts), category guide + submission card. The form is /abstracts/submit.
 * ---------------------------------------------------------------------------------------------- */

export const AbstractSubmissionSection: React.FC<AbstractSubmissionSectionProps> = () => {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];
  const CatIcon = cat.icon;

  return (
    <section id="abstract" className={`bg-sand ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Abstract Submission"
          lead="Five presentation formats, one simple online submission. Choose your category, read its requirements, then submit and track the Scientific Committee’s decision from your account."
        />

        {/* Bento: submission card + key facts */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div id="submit-abstract" className="scroll-mt-28 lg:col-span-5">
            <AbstractSubmitPanel />
          </div>
          <dl className="grid grid-cols-2 gap-5 lg:col-span-7">
            {FACTS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col justify-between gap-6 rounded-[2rem] p-6 sm:p-7 ${i === 0 ? 'bg-saffron text-ink' : 'bg-white text-ink'}`}
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${i === 0 ? 'bg-ink/10' : 'bg-saffron-soft text-saffron-dark'}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex flex-col">
                  <dt className={`order-2 mt-2 text-[15px] leading-snug ${i === 0 ? 'text-ink/80' : 'text-stone'}`}>{label}</dt>
                  <dd className={`order-1 font-display text-5xl leading-none sm:text-6xl ${i === 0 ? 'text-ink' : 'text-wine'}`}>{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Category picker */}
        <h3 className="mt-16 font-display text-3xl text-wine">Choose your category</h3>
        <div
          role="tablist"
          aria-label="Abstract categories"
          className="-mx-4 mt-5 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {CATEGORIES.map((c, i) => {
            const selected = i === active;
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`abs-tab-${c.id}`}
                aria-selected={selected}
                aria-controls="abs-panel"
                onClick={() => setActive(i)}
                className={`group flex w-[200px] shrink-0 snap-start flex-col items-start gap-6 rounded-3xl p-5 text-left transition-all duration-300 lg:w-auto cursor-pointer ${
                  selected ? 'bg-white text-ink ring-2 ring-saffron shadow-[0_20px_40px_-24px_rgba(232,115,26,0.6)]' : 'bg-white/70 text-ink hover:-translate-y-1 hover:bg-white'
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${selected ? 'bg-saffron text-ink' : 'bg-sand text-wine'}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-[17px] font-semibold leading-snug">{c.short}</span>
                  <span className={`mt-0.5 block text-sm text-stone`}>{c.tag}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Category detail */}
        <div
          id="abs-panel"
          key={cat.id}
          role="tabpanel"
          aria-labelledby={`abs-tab-${cat.id}`}
          className="swap-in mt-5 grid grid-cols-1 overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)]"
        >
          <div className="bg-saffron-soft/70 p-7 text-ink sm:p-9">
            <CatIcon className="h-9 w-9 text-saffron-dark" aria-hidden />
            <h3 className="mt-5 font-display text-[2rem] leading-tight text-wine">{cat.name}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{cat.description}</p>
            <dl className="mt-7 space-y-4 border-t border-saffron/25 pt-6">
              <div>
                <dt className="text-sm text-stone">Eligibility</dt>
                <dd className="mt-0.5 text-[16px] font-semibold text-wine">{cat.eligibility}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone">Upload</dt>
                <dd className="mt-0.5 text-[16px] font-semibold text-wine">{cat.upload}</dd>
              </div>
            </dl>
          </div>

          <div className="p-7 sm:p-9">
            <div className={`grid gap-x-10 gap-y-8 ${cat.groups.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {cat.groups.map((g, gi) => (
                <div key={gi}>
                  <h4 className="mb-3 text-[17px] font-semibold text-ink">{g.title ?? 'Requirements'}</h4>
                  <ul className="space-y-3">
                    {g.items.map((item, ii) => (
                      <li key={ii} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron-soft text-saffron-dark">
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {cat.notice && (
              <div className="mt-8 flex gap-3 rounded-2xl bg-saffron-soft/70 px-5 py-4 text-[15px] text-ink">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden />
                <span>{cat.notice}</span>
              </div>
            )}
            {cat.quote && <blockquote className="mt-8 border-l-4 border-saffron pl-5 font-display text-xl leading-snug text-wine">{cat.quote}</blockquote>}
          </div>
        </div>

         
      </div>
    </section>
  );
};
