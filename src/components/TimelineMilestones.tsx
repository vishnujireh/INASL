import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { IMPORTANT_DATES } from '../data/conferenceData';
import { SectionHead, container, sectionPad } from './landing/kit';

/** Key dates as one ordered route: from registration opening to the conference itself. */
export const TimelineMilestones: React.FC = () => {
  return (
    <section className={`bg-sand ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Key Milestones & Important Dates"
          lead="Mark your calendar to ensure early bird benefits and timely abstract consideration."
        />

        <ol className="relative mt-14 grid gap-0 lg:grid-cols-5 lg:gap-6">
          {/* the route line */}
          <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-wine/20 lg:bottom-auto lg:left-3 lg:right-3 lg:top-[11px] lg:h-px lg:w-auto" />
          {IMPORTANT_DATES.map((item) => {
            const isCurrent = item.status === 'current';
            const isCompleted = item.status === 'completed';
            return (
              <li key={item.date} className="relative pb-10 pl-12 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-12">
                <span
                  aria-hidden
                  className={`absolute left-0 top-0.5 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 lg:top-0 ${
                    isCurrent ? 'border-saffron bg-saffron' : isCompleted ? 'border-wine bg-wine' : 'border-wine/40 bg-sand'
                  }`}
                >
                  {isCurrent && <span className="h-2 w-2 rounded-full bg-white" />}
                </span>
                <p className="font-display text-2xl leading-tight text-ink">{item.date}</p>
                {isCurrent && (
                  <span className="mt-2 inline-block rounded-full bg-saffron-soft px-2.5 py-0.5 text-sm font-semibold text-saffron-dark">Active</span>
                )}
                {isCompleted && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-sm font-semibold text-wine">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Closed
                  </span>
                )}
                <h3 className="mt-3 text-[17px] font-semibold leading-snug text-wine">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone">{item.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
