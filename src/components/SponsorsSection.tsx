import React from 'react';
import { SPONSORS } from '../data/conferenceData';
import { SectionHead, container, sectionPad } from './landing/kit';

interface SponsorsSectionProps {
  onDownloadProspectus: () => void;
  onContactSponsors: () => void;
}

export const SponsorsSection: React.FC<SponsorsSectionProps> = () => {
  return (
    <section id="sponsors" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Industry Partners"
          lead="We gratefully acknowledge the generous clinical research grants and technological equipment support of our esteemed global industry sponsors."
        />

        {/* Platinum */}
        <div className="mt-14 grid gap-8 border-t border-line pt-8 lg:grid-cols-[250px_1fr]">
          <h3 className="font-display text-2xl text-wine">Platinum Partners</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {SPONSORS.platinum.map((item) => (
              <li key={item.name} className="flex min-h-[150px] flex-col justify-end rounded-2xl bg-sand p-6">
                <span className="font-display text-[1.75rem] leading-tight text-ink">{item.name}</span>
                <span className="mt-1 text-[15px] text-stone">{item.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gold */}
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[250px_1fr]">
          <h3 className="font-display text-2xl text-wine">Gold Sponsors</h3>
          <ul className="grid gap-4 sm:grid-cols-3">
            {SPONSORS.gold.map((item) => (
              <li key={item.name} className="flex min-h-[110px] flex-col justify-end rounded-2xl border border-line p-5">
                <span className="text-lg font-semibold leading-snug text-ink">{item.name}</span>
                <span className="mt-0.5 text-sm text-stone">{item.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Silver & technology */}
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[250px_1fr]">
          <h3 className="font-display text-2xl text-wine">Silver &amp; Technology Exhibitors</h3>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:pt-1.5">
            {SPONSORS.silver.map((item) => (
              <li key={item.name} className="text-[17px] font-medium text-ink/80">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
