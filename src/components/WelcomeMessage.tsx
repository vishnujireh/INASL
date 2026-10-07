import React from 'react';
import { ArrowRight, Calendar, ChevronRight, MapPin } from 'lucide-react';
import auditoriumImage from '../assets/images/conference_auditorium_stage_1788841081738.jpg';
import { btnPrimary, btnSecondary, container, sectionPad } from './landing/kit';

interface WelcomeMessageProps {
  onOpenRegister?: () => void;
  onOpenAbstract?: () => void;
}

/** The organizing chairman's welcome letter beside the venue photograph. */
export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ onOpenRegister, onOpenAbstract }) => {
  return (
    <section id="welcome-message" className={`bg-white ${sectionPad}`}>
      <div className={`${container} grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        {/* Photograph, venue and the abstract deadline */}
        <div className="lg:pt-4">
          <figure>
            <div className="arch-low aspect-[4/5] overflow-hidden bg-sand-deep sm:aspect-[5/6]">
              <img src={auditoriumImage} alt="INASL 2027 Plenary Auditorium Session" className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-6 border-l-2 border-saffron pl-4">
              <p className="flex items-center gap-2 text-[15px] font-semibold text-wine">
                <Calendar className="h-4 w-4" aria-hidden /> 5–8 August 2027
              </p>
              <p className="mt-1 font-display text-2xl leading-tight text-ink">Novotel Jaipur Convention Centre</p>
              <p className="mt-1 flex items-center gap-1.5 text-[15px] text-stone">
                <MapPin className="h-4 w-4" aria-hidden /> Jaipur, Rajasthan, India
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={onOpenAbstract}
            className="group mt-8 flex w-full items-center justify-between gap-4 rounded-2xl bg-sand px-5 py-4 text-left transition-colors hover:bg-sand-deep cursor-pointer"
          >
            <span>
              <span className="flex items-center gap-2 text-sm font-semibold text-wine">
                <span aria-hidden className="h-2 w-2 rounded-full bg-saffron" /> Registration open
              </span>
              <span className="mt-1 block text-[15px] text-stone">
                Abstracts close <strong className="font-display text-xl font-normal text-ink">30 Nov 2026</strong>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-wine transition-transform group-hover:translate-x-0.5" aria-hidden />
          </button>
        </div>

        {/* The letter */}
        <div>
          <h2 className="font-display text-[2.4rem] leading-[1.08] text-wine sm:text-5xl">Welcome to INASL 2027, the Pink City</h2>

          <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-[1.75] text-ink/85">
            <p>
              <span aria-hidden className="float-left mr-1.5 mt-1 font-display text-[4.25rem] leading-[0.8] text-saffron-dark">
                I
              </span>
              <span className="sr-only">I</span>t is our privilege to invite you to the 34th Annual Meeting of the Indian National Association for Study of the Liver, in association with the
              3rd Liver Summit, hosted in Jaipur from 5–8 August 2027. For four days, the Pink City becomes the meeting point for clinicians, researchers and trainees who
              share one purpose — better outcomes for people living with liver disease.
            </p>
            <p>
              The scientific programme has been built around <strong className="font-semibold text-ink">precision hepatology</strong> — plenaries from global leaders,
              hands-on workshops, debate sessions and dedicated free-paper tracks for young investigators, all designed to carry new evidence directly into your clinic.
            </p>
            <p>
              Beyond the auditorium, Jaipur offers a warmth of its own: its forts and palaces, its bazaars and crafts, and a culinary tradition worth travelling for. We
              look forward to welcoming you here.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            {[
              { initials: 'VAS', name: 'Prof. Vivek A Saraswat', role: 'Organizing Chairman, INASL 2027' },
              { initials: 'NNM', name: 'Prof. Naimish N Mehta', role: 'Co-Organizing Chairman, INASL 2027' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-saffron-soft font-display text-lg text-wine">{p.initials}</div>
                <div>
                  <p className="font-display text-xl leading-tight text-ink">{p.name}</p>
                  <p className="mt-0.5 text-[15px] text-stone">{p.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={onOpenRegister} className={btnPrimary}>
              Register Now <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/?section=program"
              onClick={(e) => {
                e.preventDefault(); // scroll without putting "#program" in the address bar
                document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={btnSecondary}
            >
              Explore Programme <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
