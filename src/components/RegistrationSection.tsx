import React, { useMemo } from 'react';
import { CONFERENCE_REGISTRATION_PACKAGES, ACCOMMODATION_OPTIONS } from '../data/conferenceData';
import { PERIODS } from '../data/catalogue';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Globe,
  GraduationCap,
  HeartHandshake,
  MoveHorizontal,
  PartyPopper,
  Stethoscope,
  Users,
  UtensilsCrossed,
  Wine,
} from 'lucide-react';
import type { ConferenceRegistrationCategory } from '../types';
import { SectionHead, container, sectionPad } from './landing/kit';

interface RegistrationSectionProps {
  onSelectTier: (tierId: string) => void;
}

const INCLUSIONS = [
  { icon: UtensilsCrossed, label: '4 Lunch' },
  { icon: Wine, label: '2 Dinner' },
  { icon: PartyPopper, label: '1 Gala Dinner' },
  { icon: Briefcase, label: 'Registration Kit' },
  { icon: Award, label: 'Certificate of Participation' },
];

/** An icon for each registration category (by catalogue code). */
const CATEGORY_ICON: Record<string, React.ElementType> = {
  'sgei-member': BadgeCheck,
  'non-member': Stethoscope,
  'pg-student': GraduationCap,
  'accompanying-national': Users,
  'international-delegate': Globe,
  'accompanying-international': HeartHandshake,
};

type Phase = { code: string; key: 'earlyBirdAmount' | 'regularAmount' | 'onSpotAmount'; label: string; when: string };

const PHASES: Phase[] = [
  { code: 'early_bird', key: 'earlyBirdAmount', label: 'Early Bird', when: 'Till 15th January' },
  { code: 'regular', key: 'regularAmount', label: 'Regular', when: '16th January – 10th April' },
  { code: 'on_spot', key: 'onSpotAmount', label: 'On-spot', when: 'Venue Counter' },
];

type Status = 'ended' | 'current' | 'upcoming';

/** Where each pricing period stands on this device's clock (display only – the server decides the charge). */
function phaseStatuses(): Record<string, Status> {
  const t = Date.now();
  const out: Record<string, Status> = {};
  for (const p of PERIODS) {
    if (p.endsAt && Date.parse(p.endsAt) <= t) out[p.code] = 'ended';
    else if (!p.startsAt || Date.parse(p.startsAt) <= t) out[p.code] = 'current';
    else out[p.code] = 'upcoming';
  }
  return out;
}

const GROUPS = [
  { id: 'INR', label: 'Indian delegates', note: 'Fees in INR' },
  { id: 'USD', label: 'International delegates', note: 'Fees in USD' },
] as const;

const sentence = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();
const amount = (pkg: ConferenceRegistrationCategory, n: number) => n.toLocaleString(pkg.currency === 'USD' ? 'en-US' : 'en-IN');

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onSelectTier }) => {
  const status = useMemo(phaseStatuses, []);
  const nowCode = PHASES.find((p) => status[p.code] === 'current')?.code ?? PHASES[PHASES.length - 1].code;
  const nowIdx = PHASES.findIndex((p) => p.code === nowCode);

  return (
    <section id="registration" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Registration Fee Schedule"
          lead={
            <>
              Conference registration (non-residential). All registration categories, deadlines, and tariffs are presented below. Early Bird tariffs apply for
              registrations completed up to 15th January.
            </>
          }
        />

        {/* Pricing timeline */}
        <ol className="relative mt-12 grid grid-cols-3 gap-3 sm:gap-6">
          <span aria-hidden className="absolute left-[calc(16.66%)] right-[calc(16.66%)] top-[11px] h-1 rounded-full bg-sand-deep" />
          <span
            aria-hidden
            className="absolute left-[calc(16.66%)] top-[11px] h-1 rounded-full bg-saffron"
            style={{ width: `calc(${(nowIdx / (PHASES.length - 1)) * 66.66}%)` }}
          />
          {PHASES.map((p) => {
            const st = status[p.code] ?? 'upcoming';
            return (
              <li key={p.code} className="relative flex flex-col items-center text-center">
                <span
                  aria-hidden
                  className={`relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border-4 ${
                    st === 'current' ? 'border-saffron-soft bg-saffron' : st === 'ended' ? 'border-white bg-saffron' : 'border-white bg-sand-deep'
                  }`}
                />
                <span className={`mt-3 font-display text-lg leading-tight sm:text-2xl ${st === 'current' ? 'text-wine' : 'text-ink/70'}`}>{p.label}</span>
                <span className="mt-1 text-xs text-stone sm:text-sm">{p.when}</span>
                <span
                  className={`mt-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    st === 'current' ? 'bg-saffron text-ink' : st === 'ended' ? 'bg-sand text-stone' : 'bg-sand text-wine'
                  }`}
                >
                  {st === 'current' ? 'Current rate' : st === 'ended' ? 'Closed' : 'Upcoming'}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="mt-12 text-sm text-stone">
          Fees in INR for Indian delegates and USD for international delegates. <strong className="font-semibold text-ink">18% GST Excluded.</strong>
        </p>

        {/* Fee table */}
        <p className="mt-4 flex items-center gap-2 text-sm text-stone md:hidden">
          <MoveHorizontal className="h-4 w-4" aria-hidden /> Swipe the table to see all rates
        </p>
        <div className="mt-3 rounded-[1.75rem] border border-line bg-white shadow-[0_30px_70px_-45px_rgba(75,11,24,0.45)] md:mt-5">
          <div className="overflow-x-auto rounded-[1.75rem]">
            <table className="w-full min-w-[780px] border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                Registration fees by category and pricing period (18% GST excluded)
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="sticky left-0 z-20 w-[210px] bg-white px-4 pb-4 pt-7 align-bottom sm:px-7 md:w-[36%]">
                    <span className="text-sm font-semibold text-stone">Category</span>
                  </th>
                  {PHASES.map((ph) => {
                    const now = ph.code === nowCode;
                    return (
                      <th key={ph.code} scope="col" className={`px-5 pb-4 pt-7 align-bottom font-normal ${now ? 'rounded-t-2xl bg-saffron-soft' : ''}`}>
                        {now && <span className="mb-2 inline-block rounded-full bg-saffron px-2.5 py-0.5 text-xs font-semibold text-ink">Current rate</span>}
                        <span className={`block font-display text-xl ${now ? 'text-wine' : 'text-ink/70'}`}>{ph.label}</span>
                      </th>
                    );
                  })}
                  <th scope="col" className="px-7 pb-4 pt-7">
                    <span className="sr-only">Register</span>
                  </th>
                </tr>
              </thead>
              {GROUPS.map((grp, gi) => {
                const rows = CONFERENCE_REGISTRATION_PACKAGES.filter((p) => p.currency === grp.id);
                if (!rows.length) return null;
                return (
                  <tbody key={grp.id}>
                    <tr>
                      <th colSpan={5} scope="colgroup" className="sticky left-0 border-t border-line bg-sand/70 px-4 py-3 text-left sm:px-7">
                        <span className="font-display text-lg font-normal text-wine">{grp.label}</span>
                        <span className="ml-2 text-sm font-normal text-stone">{grp.note}</span>
                      </th>
                    </tr>
                {rows.map((pkg, ri) => {
                  const Icon = CATEGORY_ICON[pkg.id] ?? Users;
                  const last = gi === GROUPS.length - 1 && ri === rows.length - 1;
                  return (
                    <tr key={pkg.id} className="group">
                      <th
                        scope="row"
                        className={`sticky left-0 z-10 w-[210px] border-t border-line bg-white px-4 py-6 text-left font-normal transition-colors group-hover:bg-sand md:w-auto sm:px-7 ${
                          last ? 'rounded-bl-[1.75rem]' : ''
                        }`}
                      >
                        <span className="flex items-start gap-4">
                          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-wine transition-colors group-hover:bg-white sm:flex">
                            <Icon className="h-6 w-6" aria-hidden />
                          </span>
                          <span className="min-w-0">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="text-[16px] font-semibold text-ink sm:text-[17px]">{pkg.category}</span>
                              {pkg.badge && <span className="rounded-full bg-saffron-soft px-2.5 py-0.5 text-xs font-semibold text-saffron-dark">{sentence(pkg.badge)}</span>}
                            </span>
                            <span className="mt-1 block text-[13px] leading-snug text-stone sm:text-sm">{pkg.qualification}</span>
                          </span>
                        </span>
                      </th>
                      {PHASES.map((ph) => {
                        const now = ph.code === nowCode;
                        return (
                          <td
                            key={ph.code}
                            className={`border-t px-5 py-6 transition-colors ${
                              now ? `border-saffron/20 bg-saffron-soft ${last ? 'rounded-b-2xl' : ''}` : 'border-line group-hover:bg-sand'
                            }`}
                          >
                            <span className="flex items-baseline gap-1">
                              <span className={`text-xs font-semibold ${now ? 'text-saffron-dark' : 'text-stone'}`}>{pkg.currency}</span>
                              <span className={`tabular font-display leading-none ${now ? 'text-[1.85rem] text-wine' : 'text-xl text-ink/55'}`}>
                                {amount(pkg, pkg[ph.key])}
                              </span>
                            </span>
                          </td>
                        );
                      })}
                      <td className={`border-t border-line px-7 py-6 text-right transition-colors group-hover:bg-sand ${last ? 'rounded-br-[1.75rem]' : ''}`}>
                        <button
                          onClick={() => onSelectTier(pkg.id)}
                          aria-label={`Register for ${pkg.category}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-wine/25 px-4 py-2.5 text-sm font-semibold text-wine transition-colors group-hover:border-wine group-hover:bg-wine group-hover:text-white cursor-pointer"
                        >
                          Register <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>

        {/* What every registration includes */}
        <div className="mt-8 rounded-[1.75rem] bg-sand p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-2xl text-wine">Registration Inclusions</h3>
            <p className="text-sm text-stone">Included with every delegate registration</p>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {INCLUSIONS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron-soft text-saffron-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-[15px] font-semibold leading-snug text-ink">{label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-2 border-t border-sand-deep pt-5 text-sm leading-relaxed text-stone md:grid-cols-2 md:gap-8">
            <p>
              <strong className="font-semibold text-ink">18% GST Excluded.</strong> Taxes will be calculated as applicable.
            </p>
            <p>
              <strong className="font-semibold text-ink">Accommodation:</strong> Registration fee does not include any accommodation fee. Please see accommodation charges
              below.
            </p>
          </div>
        </div>

        {/* Accommodation */}
        <div id="accommodation-charges" className="mt-20 border-t border-line pt-14">
          <div className="max-w-2xl">
            <p className="text-[15px] font-semibold text-saffron-dark">Accommodation charges</p>
            <h3 className="mt-2 font-display text-3xl leading-tight text-wine sm:text-4xl">Official Hotel Stays (Per Night Tariffs)</h3>
            <p className="mt-3 text-[17px] text-stone">
              Negotiated delegate rates for conference participants. <strong className="font-semibold text-ink">18% GST Excluded.</strong>
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ACCOMMODATION_OPTIONS.map((hotel) => (
              <article
                key={hotel.id}
                className={`flex flex-col rounded-2xl p-6 sm:p-8 ${hotel.isVenue ? 'bg-saffron-soft text-ink ring-2 ring-saffron' : 'border border-line bg-white text-ink'}`}
              >
                {hotel.isVenue && <p className="text-sm font-semibold text-saffron-dark">Summit Venue Hotel</p>}
                <h4 className={`font-display text-2xl leading-tight text-wine sm:text-3xl ${hotel.isVenue ? 'mt-2' : ''}`}>{hotel.hotel}</h4>
                <p className={`mt-1 text-[15px] ${'text-stone'}`}>{hotel.category}</p>

                <dl className={`my-6 grid grid-cols-2 border-y ${hotel.isVenue ? 'border-saffron/30' : 'border-line'}`}>
                  <div className="py-4 pr-4">
                    <dt className={`text-sm ${'text-stone'}`}>Single Occupancy</dt>
                    <dd className="tabular mt-1 font-display text-xl sm:text-2xl">
                      {hotel.singleOccupancy}
                      <span className="ml-1 font-text text-sm opacity-70">/night</span>
                    </dd>
                  </div>
                  <div className={`border-l py-4 pl-5 ${hotel.isVenue ? 'border-saffron/30' : 'border-line'}`}>
                    <dt className={`text-sm ${'text-stone'}`}>Twin Share</dt>
                    <dd className="tabular mt-1 font-display text-xl sm:text-2xl">
                      {hotel.twinShare}
                      <span className="ml-1 font-text text-sm opacity-70">/person</span>
                    </dd>
                  </div>
                </dl>

                <ul className="mb-7 space-y-2 text-[15px]">
                  {hotel.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${'text-saffron-dark'}`} aria-hidden />
                      <span className={'text-ink/85'}>{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectTier('sgei-member')}
                  className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full py-3 text-[15px] font-semibold transition-colors cursor-pointer ${
                    hotel.isVenue ? 'bg-saffron text-ink hover:bg-saffron-dark hover:text-white' : 'border border-wine/30 text-wine hover:border-wine hover:bg-wine hover:text-white'
                  }`}
                >
                  Book Stay with Registration <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[15px] text-stone">
            <strong className="font-semibold text-ink">18% GST Excluded.</strong> Early hotel reservation is strongly advised due to limited summit venue inventory.
          </p>
        </div>
      </div>
    </section>
  );
};
