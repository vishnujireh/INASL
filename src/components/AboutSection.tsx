import React from 'react';
import { GraduationCap, Hand, MessagesSquare, MonitorPlay, Presentation } from 'lucide-react';
import inaslEmblem from '../assets/images/inasl_emblem.png';
import { container, sectionPad } from './landing/kit';

/** Formats the programme brings together (from the About text). */
const FORMATS = [
  { icon: Presentation, title: 'Expert-led lectures' },
  { icon: MonitorPlay, title: 'Live demonstrations' },
  { icon: MessagesSquare, title: 'Interactive case discussions' },
  { icon: Hand, title: 'Hands-on learning' },
];

export const AboutSection: React.FC = () => (
  <section id="about" className={`bg-white ${sectionPad}`}>
    <div className={`${container} grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20`}>
      {/* Heading, lead and INASL */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <h2 className="font-display text-[2.4rem] leading-[1.08] text-wine sm:text-5xl">About INASL 2027</h2>
        <p className="mt-6 text-xl leading-relaxed text-ink">
          INASL 2027 – Jaipur brings together leading experts, practicing hepatologists, transplant surgeons, gastroenterologists, researchers, trainees and
          healthcare professionals for a comprehensive academic experience focused on the evolving landscape of hepatology and liver transplantation.
        </p>

        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-sand p-4">
          <img src={inaslEmblem} alt="Indian National Association for Study of the Liver (INASL)" className="h-16 w-16 shrink-0" />
          <span className="text-[15px] leading-snug">
            <span className="block text-stone">Organised by</span>
            <strong className="block font-semibold text-ink">Indian National Association for Study of the Liver</strong>
          </span>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-[62ch] space-y-6 text-[17px] leading-[1.75] text-ink/85">
        <p>
          Organised by the Indian National Association for Study of the Liver (INASL), the annual meeting has established itself as an important platform for
          scientific exchange, advanced hepatology and transplant education, innovation and professional collaboration.
        </p>
        <p>
          The conference will bring together expert-led lectures, live demonstrations, interactive case discussions, hands-on learning and focused sessions covering
          contemporary developments across hepatology, liver transplantation and related areas.
        </p>

        <ul className="grid grid-cols-2 border-y border-line">
          {FORMATS.map(({ icon: Icon, title }, i) => (
            <li
              key={title}
              className={`flex items-center gap-3 py-5 text-[16px] font-semibold text-ink ${i % 2 === 1 ? 'border-l border-line pl-5' : 'pr-4'} ${
                i >= 2 ? 'border-t border-line' : ''
              }`}
            >
              <Icon className="h-6 w-6 shrink-0 text-saffron-dark" aria-hidden />
              {title}
            </li>
          ))}
        </ul>

        <p>
          INASL 2027 aims to create an environment where experience meets innovation. From established transplant techniques to emerging therapies and evolving
          approaches in patient care, the scientific programme will encourage participants to learn, discuss and share practical insights.
        </p>

        <div className="flex gap-4 border-l-4 border-saffron bg-saffron-soft/50 py-4 pl-5 pr-4">
          <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-saffron-dark" aria-hidden />
          <p className="text-ink">
            A special emphasis will also be placed on <strong className="font-semibold">young hepatologists, transplant surgeons and the next generation of specialists</strong>, providing
            opportunities for academic participation, presentation and interaction with experienced experts.
          </p>
        </div>

        <p>
          INASL 2027 is envisioned as a meeting point for knowledge, experience, innovation and collaboration—bringing together the liver community to discuss current
          practices, emerging technologies and the future direction of hepatology and liver transplantation.
        </p>
      </div>
    </div>

    {/* Closing line */}
    <div className={`${container} mt-20`}>
      <div className="rounded-3xl bg-sand px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="font-display text-3xl leading-tight text-wine sm:text-[2.6rem]">Welcome to INASL 2027, Jaipur</p>
        <p className="mx-auto mt-3 max-w-xl text-lg text-stone">where knowledge meets innovation in hepatology and liver transplantation.</p>
      </div>
    </div>
  </section>
);
