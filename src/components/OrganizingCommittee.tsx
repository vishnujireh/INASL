import React, { useState, useEffect } from 'react';
import { ORGANIZING_CHAIRMEN, CORE_COMMITTEE } from '../data/conferenceData';
import { CommitteeMember } from '../types';
import { Building2 } from 'lucide-react';
import { LandingModal, SectionHead, container, sectionPad } from './landing/kit';

export type CommitteeTab = 'governing-council' | 'core-committee';

interface OrganizingCommitteeProps {
  initialTab?: CommitteeTab;
}

const TABS: { id: CommitteeTab; label: string; intro: string }[] = [
  { id: 'governing-council', label: 'Organizing Chairmen', intro: 'INASL 2027, Mahatma Gandhi University of Medical Sciences and Technology, Jaipur' },
  { id: 'core-committee', label: 'Core Committee', intro: 'Local Organizing & Scientific Working Committee — Jaipur 2027' },
];

/** Initials on a wine field, for members without a photograph yet. */
function Monogram({ name, small = false }: { name: string; small?: boolean }) {
  const initials = name
    .replace(/^(Prof\.|Dr\.)\s*/g, '')
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 3);
  return (
    <div role="img" aria-label={name} className="flex h-full w-full items-end justify-center bg-sand-deep pb-[18%]">
      <span className={`font-display text-wine ${small ? 'text-3xl' : 'text-6xl sm:text-7xl'}`}>{initials}</span>
    </div>
  );
}

export const OrganizingCommittee: React.FC<OrganizingCommitteeProps> = ({ initialTab = 'governing-council' }) => {
  const [activeTab, setActiveTab] = useState<CommitteeTab>(initialTab);
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  // Listen for navigation clicks from the Header or external triggers
  useEffect(() => {
    const handleSwitchTab = (e: CustomEvent<CommitteeTab>) => {
      if (e.detail === 'governing-council' || e.detail === 'core-committee') {
        setActiveTab(e.detail);
      }
    };

    window.addEventListener('switch-committee-tab' as any, handleSwitchTab as EventListener);
    return () => {
      window.removeEventListener('switch-committee-tab' as any, handleSwitchTab as EventListener);
    };
  }, []);

  const members = activeTab === 'governing-council' ? ORGANIZING_CHAIRMEN : CORE_COMMITTEE;
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="committee" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Organizing Committee"
          lead="Guided by distinguished luminaries dedicated to advancing hepatology and liver transplantation science, clinical practice, and international collaboration."
        />

        <div className="mt-10 flex flex-col gap-4 border-b border-line sm:flex-row sm:items-end sm:justify-between">
          <div role="tablist" aria-label="Committees" className="flex gap-6">
            {TABS.map((t) => {
              const selected = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(t.id)}
                  className={`-mb-px border-b-2 pb-3 text-[17px] font-semibold transition-colors cursor-pointer ${
                    selected ? 'border-saffron text-wine' : 'border-transparent text-stone hover:text-wine'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <p className="pb-3 text-[15px] text-stone">{tab.intro}</p>
        </div>

        <ul role="tabpanel" aria-label={tab.label} className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-3">
          {members.map((member) => (
            <li key={member.id}>
              <button type="button" onClick={() => setSelectedMember(member)} className="group block w-full text-left cursor-pointer">
                <div className="arch aspect-[4/5] overflow-hidden bg-sand-deep">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Monogram name={member.name} />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight text-ink transition-colors group-hover:text-wine sm:text-[1.6rem]">{member.name}</h3>
                <p className="mt-1.5 text-[15px] font-semibold text-wine">{member.role}</p>
                <p className="mt-1.5 flex items-start gap-1.5 text-sm leading-snug text-stone">
                  <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  {member.affiliation}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-saffron-dark underline-offset-4 group-hover:underline">
                  Academic Profile &amp; Biography
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <LandingModal open={!!selectedMember} onClose={() => setSelectedMember(null)} label={selectedMember?.name ?? 'Profile'} width="max-w-xl">
        {selectedMember && (
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="arch-low aspect-[4/5] w-32 shrink-0 overflow-hidden bg-sand-deep">
              {selectedMember.image ? (
                <img src={selectedMember.image} alt={selectedMember.name} className="h-full w-full object-cover" />
              ) : (
                <Monogram name={selectedMember.name} small />
              )}
            </div>
            <div>
              <p className="text-[15px] font-semibold text-wine">{selectedMember.role}</p>
              <h3 className="mt-1 font-display text-3xl leading-tight text-ink">{selectedMember.name}</h3>
              <p className="mt-2 text-sm text-stone">{selectedMember.affiliation}</p>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/85">{selectedMember.bio}</p>
            </div>
          </div>
        )}
      </LandingModal>
    </section>
  );
};
