import React, { useState } from 'react';
import { KEYNOTE_SPEAKERS, INTERNATIONAL_FACULTY, NATIONAL_FACULTY } from '../data/conferenceData';
import { Speaker } from '../types';
import { MapPin } from 'lucide-react';
import { LandingModal, SectionHead, container, sectionPad } from './landing/kit';

function FacultyList({ title, people, onOpen }: { title: string; people: Speaker[]; onOpen: (s: Speaker) => void }) {
  return (
    <div>
      <h3 className="border-b border-wine/15 pb-3 font-display text-2xl text-wine">{title}</h3>
      <ul>
        {people.map((speaker) => (
          <li key={speaker.id} className="border-b border-wine/10">
            <button type="button" onClick={() => onOpen(speaker)} className="group flex w-full items-center gap-4 py-4 text-left cursor-pointer">
              <img src={speaker.image} alt="" loading="lazy" className="h-14 w-14 shrink-0 rounded-full bg-sand-deep object-cover" />
              <span className="min-w-0 flex-1">
                <span className="block text-[17px] font-semibold text-ink transition-colors group-hover:text-wine">{speaker.name}</span>
                <span className="block truncate text-sm text-stone">{speaker.specialty}</span>
              </span>
              <span className="hidden shrink-0 text-sm text-stone sm:block">{speaker.location}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const FacultySpeakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="faculty" className={`bg-sand ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Faculty & Speakers"
          lead="Learn from renowned international clinicians, healthcare innovators, and distinguished academic specialists."
        />

        {/* Keynote Luminaries */}
        <h3 className="mt-14 font-display text-2xl text-wine">Keynote Luminaries</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {KEYNOTE_SPEAKERS.map((speaker) => (
            <button
              key={speaker.id}
              type="button"
              onClick={() => setSelectedSpeaker(speaker)}
              className="group grid grid-cols-[120px_1fr] items-end gap-5 rounded-2xl bg-white p-5 text-left transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(122,20,38,0.45)] sm:grid-cols-[150px_1fr] cursor-pointer"
            >
              <div className="arch aspect-[3/4] overflow-hidden bg-sand-deep">
                <img src={speaker.image} alt={speaker.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="pb-1">
                <span className="inline-block rounded-full bg-saffron-soft px-2.5 py-0.5 text-sm font-semibold text-saffron-dark">Keynote</span>
                <h4 className="mt-3 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-wine">{speaker.name}</h4>
                <p className="mt-1.5 text-sm leading-snug text-stone">{speaker.affiliation}</p>
                <p className="mt-3 text-[15px] font-semibold text-wine">{speaker.specialty}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-stone">
                  <MapPin className="h-3.5 w-3.5" aria-hidden /> {speaker.location}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          <FacultyList title="International Faculty" people={INTERNATIONAL_FACULTY} onOpen={setSelectedSpeaker} />
          <FacultyList title="National Faculty" people={NATIONAL_FACULTY} onOpen={setSelectedSpeaker} />
        </div>
      </div>

      <LandingModal open={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)} label={selectedSpeaker?.name ?? 'Speaker'}>
        {selectedSpeaker && (
          <>
            <div className="flex items-center gap-5">
              <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="h-24 w-24 shrink-0 rounded-full bg-sand-deep object-cover" />
              <div>
                <p className="text-sm font-semibold text-saffron-dark">{selectedSpeaker.isKeynote ? 'Keynote Speaker' : 'Faculty Mentor'}</p>
                <h3 className="mt-1 font-display text-[1.75rem] leading-tight text-ink">{selectedSpeaker.name}</h3>
                <p className="mt-1 text-sm text-stone">
                  {selectedSpeaker.affiliation}, {selectedSpeaker.location}
                </p>
              </div>
            </div>
            <p className="mt-5 inline-block rounded-full bg-sand px-3 py-1 text-sm font-semibold text-wine">{selectedSpeaker.specialty}</p>
            <h4 className="mt-6 text-[15px] font-semibold text-ink">Academic Profile &amp; Research Focus</h4>
            <p className="mt-2 text-[16px] leading-relaxed text-ink/85">{selectedSpeaker.bio}</p>
          </>
        )}
      </LandingModal>
    </section>
  );
};
