import React, { useState } from 'react';
import { SCIENTIFIC_PROGRAM } from '../data/conferenceData';
import { Download, MapPin, Sparkles } from 'lucide-react';
import { SectionHead, btnSmall, container, sectionPad } from './landing/kit';

interface ScientificProgramProps {
  onDownloadBrochure: () => void;
}

const CATEGORY_STYLE: Record<string, string> = {
  Keynote: 'bg-saffron-soft text-saffron-dark',
  Workshop: 'bg-wine/10 text-wine',
  Symposium: 'bg-sand-deep text-ink',
  Panel: 'bg-sand text-wine',
  Plenary: 'border border-wine/30 text-wine',
  Break: 'bg-black/[0.04] text-stone',
};

export const ScientificProgram: React.FC<ScientificProgramProps> = ({ onDownloadBrochure }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentDayData = SCIENTIFIC_PROGRAM.find((d) => d.day === activeDay) || SCIENTIFIC_PROGRAM[0];

  const categories = ['All', 'Keynote', 'Workshop', 'Symposium', 'Panel', 'Plenary'];

  const filteredSessions = currentDayData.sessions.filter((session) => {
    if (selectedCategory === 'All') return true;
    return session.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section id="program" className={`bg-sand ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Scientific Program"
          lead="Three days of intensive hands-on workshops, plenary lectures, surgical symposiums, and joint discussions."
          actions={
            <button onClick={onDownloadBrochure} className={btnSmall}>
              <Download className="h-4 w-4" /> PDF Schedule
            </button>
          }
        />

        {/* Days */}
        <div role="tablist" aria-label="Conference days" className="mt-12 grid grid-cols-3 gap-2 sm:gap-3">
          {SCIENTIFIC_PROGRAM.map((day) => {
            const isActive = activeDay === day.day;
            return (
              <button
                key={day.day}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDay(day.day)}
                className={`rounded-2xl px-4 py-4 text-left transition-colors cursor-pointer ${
                  isActive ? 'bg-saffron text-ink' : 'bg-white/60 text-ink hover:bg-white'
                }`}
              >
                <span className="block font-display text-2xl leading-none sm:text-3xl">Day {day.day}</span>
                <span className={`mt-1.5 block text-sm ${isActive ? 'text-ink/75' : 'text-stone'}`}>{day.date.split(',')[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-white">
          {/* Day title, filter and count */}
          <div className="flex flex-col gap-4 border-b border-line px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl leading-tight text-ink sm:text-[1.75rem]">
                Day {currentDayData.day}: {currentDayData.title}
              </h3>
              <p className="mt-1 text-[15px] text-stone">
                {currentDayData.date} <span className="mx-1.5 text-line">|</span> {filteredSessions.length}{' '}
                {filteredSessions.length === 1 ? 'Session' : 'Sessions'}
              </p>
            </div>
            <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1" aria-label="Filter by session type">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat ? 'bg-saffron text-ink' : 'bg-sand text-ink hover:bg-sand-deep'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <ol>
            {filteredSessions.map((session) => (
              <li key={session.id} className="grid gap-2 border-b border-line px-5 py-6 last:border-b-0 sm:px-8 md:grid-cols-[150px_1fr] md:gap-8">
                <p className="tabular text-[15px] font-semibold text-wine md:pt-1">{session.time}</p>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-[13px] font-semibold ${CATEGORY_STYLE[session.category] ?? 'bg-sand text-ink'}`}>
                      {session.category}
                    </span>
                    {session.category === 'Keynote' && (
                      <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-saffron-dark">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden /> Plenary Highlight
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2.5 text-xl font-semibold leading-snug text-ink">{session.title}</h4>
                  {session.speaker && (
                    <p className="mt-1 text-[15px] text-ink/85">
                      {session.speaker}
                      {session.affiliation && <span className="text-stone"> ({session.affiliation})</span>}
                    </p>
                  )}
                  {session.description && <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-stone">{session.description}</p>}
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-stone">
                    <MapPin className="h-3.5 w-3.5" aria-hidden /> {session.room}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {filteredSessions.length === 0 && (
            <p className="px-8 py-14 text-center text-[15px] text-stone">No sessions match category &quot;{selectedCategory}&quot; on this day.</p>
          )}
        </div>
      </div>
    </section>
  );
};
