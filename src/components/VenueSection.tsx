import React, { useState } from 'react';
import { Compass, ExternalLink, Hotel, MapPin, PhoneCall, Plane } from 'lucide-react';
import { CONFERENCE_IMAGES } from '../data/conferenceData';
import { btnPrimary, container, sectionPad } from './landing/kit';

type VenueTab = 'overview' | 'travel' | 'hotel';

const TABS: { id: VenueTab; label: string; rows: { k: string; v: string; strong?: boolean }[] }[] = [
  {
    id: 'overview',
    label: 'Venue Facilities',
    rows: [
      { k: 'Plenary Hall A', v: 'Capacity 1,200 (Tiered auditorium with dual projection)' },
      { k: 'Exhibition Arena', v: '70 Booths, E-poster zone, and Networking Lounge' },
      { k: 'Catering', v: 'Gourmet multi-cuisine Rajasthani, North Indian & Continental' },
    ],
  },
  {
    id: 'travel',
    label: 'Distance & Cab',
    rows: [
      { k: 'Jaipur International Airport (JAI)', v: '~10.5 km (~15–20 mins by cab)' },
      { k: 'Jaipur Junction Railway Station', v: '~19 km (~40 mins by cab)' },
      { k: 'Hawa Mahal & the Walled City', v: '~17 km (~40 mins by cab)' },
    ],
  },
  {
    id: 'hotel',
    label: 'Partner Hotels',
    rows: [
      { k: 'Novotel Jaipur Convention Centre', v: 'On-site at the venue', strong: true },
      { k: 'Alternate Nearby Hotel', v: 'Within 2.5 km (to be announced)' },
    ],
  },
];

export const VenueSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VenueTab>('overview');
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="venue" className={`bg-sand ${sectionPad}`}>
      <div className={`${container} grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
        {/* Photograph */}
        <figure className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="arch aspect-[4/5] overflow-hidden bg-sand-deep">
            <img src={CONFERENCE_IMAGES.jaipurVenue} alt="Jaipur's palaces, an elephant and camels – artwork from the INASL 2027 poster" className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-5 border-l-2 border-saffron pl-4">
            <p className="text-[15px] font-semibold text-saffron-dark">Official Venue</p>
            <p className="font-display text-2xl text-ink">Novotel Jaipur Convention Centre</p>
            <p className="text-[15px] text-stone">Jaipur Exhibition &amp; Convention Centre (JECC), Sitapura</p>
          </figcaption>
        </figure>

        {/* Details */}
        <div>
          <h2 className="font-display text-[2.4rem] leading-[1.08] text-wine sm:text-5xl">Venue &amp; Stay</h2>
          <p className="mt-4 font-display text-2xl text-ink sm:text-3xl">Novotel Jaipur Convention Centre, Jaipur</p>
          <p className="mt-2 flex items-start gap-2 text-[15px] text-stone">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-dark" aria-hidden />
            Jaipur Exhibition & Convention Centre (JECC), RIICO Industrial Area, Sitapura, Jaipur, Rajasthan 302022, India
          </p>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink/85">
            Experience signature Rajasthani hospitality and world-class conference facilities at Jaipur’s purpose-built convention centre. Specially negotiated corporate
            room tariffs have been arranged for registered conference attendees.
          </p>

          <div className="mt-8 grid gap-6 border-t border-sand-deep pt-6 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-[17px] font-semibold text-ink">
                <Plane className="h-4 w-4 text-saffron-dark" aria-hidden /> Airport Transit
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone">
                Located about 10.5 km from Jaipur International Airport (JAI), roughly a 15–20 minute drive.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[17px] font-semibold text-ink">
                <Hotel className="h-4 w-4 text-saffron-dark" aria-hidden /> Delegate Booking
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone">
                A delegate booking code for <strong className="font-semibold text-wine">Novotel Jaipur Convention Centre</strong> will be announced here. Early reservation is
                advised.
              </p>
            </div>
          </div>

          {/* Facilities, distances and partner hotels */}
          <div className="mt-8 rounded-2xl bg-white p-5 sm:p-6">
            <div role="tablist" aria-label="Venue details" className="flex gap-5 overflow-x-auto border-b border-line">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={activeTab === t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`-mb-px whitespace-nowrap border-b-2 pb-3 text-[15px] font-semibold transition-colors cursor-pointer ${
                    activeTab === t.id ? 'border-saffron text-wine' : 'border-transparent text-stone hover:text-wine'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <dl role="tabpanel" aria-label={tab.label}>
              {tab.rows.map((r) => (
                <div key={r.k} className="grid gap-1 border-b border-line py-3.5 last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="text-[15px] font-semibold text-ink">{r.k}</dt>
                  <dd className={`text-[15px] ${r.strong ? 'font-semibold text-wine' : 'text-stone'}`}>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="https://maps.google.com/?q=Novotel+Jaipur+Convention+Centre" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              <Compass className="h-4 w-4" aria-hidden /> Get Directions (Google Maps) <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
            <p className="flex items-center gap-2 text-[15px] text-stone">
              <PhoneCall className="h-4 w-4 text-wine" aria-hidden /> Hospitality Concierge: <span className="font-semibold text-ink">to be announced</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
