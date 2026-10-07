import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { CONFERENCE_IMAGES } from '../data/conferenceData';
import inaslEmblem from '../assets/images/inasl_emblem.png';
import { btnPrimary, btnSecondary } from './landing/kit';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenAbstract: () => void;
}

const STATS = [
  { value: '15+', label: 'Countries' },
  { value: '40+', label: 'Keynotes' },
  { value: '800+', label: 'Delegates' },
  { value: '12', label: 'CME Credits' },
];

/** Opening section: the conference, its dates and venue, the two main actions and the key numbers. */
export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenAbstract }) => (
  <section id="home" className="relative overflow-hidden bg-sand">
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
      {/* Text */}
      <div className="order-2 lg:order-1">
        <div className="hero-line inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5 shadow-[0_8px_24px_-14px_rgba(43,20,23,0.45)]">
          <img src={inaslEmblem} alt="" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="text-sm font-semibold leading-tight text-wine">
            Indian National Association
            <br />
            for Study of the Liver
          </span>
        </div>

        <p className="hero-line mt-8 text-[17px] font-semibold leading-snug text-wine" style={{ animationDelay: '120ms' }}>
          34th Annual Meeting of the Indian National Association for Study of the Liver
          <span className="block font-normal text-stone">In association with the 3rd Liver Summit</span>
        </p>
        <h1
          className="hero-line mt-3 font-display text-[2.9rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem]"
          style={{ animationDelay: '200ms' }}
        >
          Precision, Practice &amp; Progress in Liver Transplantation
        </h1>
        <p className="hero-line mt-6 max-w-xl text-lg leading-relaxed text-stone" style={{ animationDelay: '300ms' }}>
          Join leading hepatologists, transplant surgeons, gastroenterologists and researchers for four days of scientific sessions, live case discussions and hands-on learning.
        </p>

        <dl className="hero-line mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[17px]" style={{ animationDelay: '380ms' }}>
          <div className="flex items-center gap-2.5">
            <dt className="sr-only">Dates</dt>
            <Calendar className="h-5 w-5 text-saffron-dark" aria-hidden />
            <dd className="font-semibold text-ink">5 – 8 August 2027</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <dt className="sr-only">Venue</dt>
            <MapPin className="h-5 w-5 text-saffron-dark" aria-hidden />
            <dd className="font-semibold text-ink">Novotel Jaipur Convention Centre, Jaipur</dd>
          </div>
        </dl>

        <div className="hero-line mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '460ms' }}>
          <button id="hero-register-btn" onClick={onOpenRegister} className={`${btnPrimary} px-8 py-3.5 text-base`}>
            Register Now <ArrowRight className="h-4 w-4" />
          </button>
          <button id="hero-abstract-btn" onClick={onOpenAbstract} className={`${btnSecondary} px-8 py-3.5 text-base`}>
            Submit Abstract
          </button>
        </div>
      </div>

      {/* The arch */}
      <div className="hero-arch relative order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:max-w-none">
        <div aria-hidden className="arch absolute -right-3 -top-3 bottom-6 left-6 bg-saffron/25 sm:-right-5 sm:-top-5" />
        <div className="arch relative aspect-[4/5] bg-white">
          <img
            src={CONFERENCE_IMAGES.heroLiverJaipur}
            alt="The liver above Jaipur's fort and Hawa Mahal – artwork from the INASL 2027 poster"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>

    {/* Key numbers */}
    <div className="border-t border-sand-deep bg-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map(({ value, label }, i) => (
          <div
            key={label}
            className={`flex items-baseline gap-3 py-6 sm:py-7 ${i % 2 === 1 ? 'border-l border-line pl-5 sm:pl-6' : ''} ${
              i >= 2 ? 'border-t border-line lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l lg:pl-6' : ''}`}
          >
            <dt className="order-2 text-[15px] text-stone">{label}</dt>
            <dd className="order-1 tabular font-display text-4xl leading-none text-wine sm:text-[2.75rem]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
