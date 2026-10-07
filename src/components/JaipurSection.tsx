import React, { useState } from 'react';
import { ATTRACTIONS, CONFERENCE_IMAGES } from '../data/conferenceData';
import { Attraction } from '../types';
import { ArrowRight, CloudRain, Compass, MapPin, Utensils } from 'lucide-react';
import { LandingModal, SectionHead, btnSecondary, container, sectionPad } from './landing/kit';

/** The host city: Jaipur's landmarks and a short delegate travel guide. */
export const JaipurSection: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);

  return (
    <section id="jaipur" className={`bg-white ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Discover the Pink City"
          lead="Experience Jaipur, the capital of Rajasthan, where Rajput forts and palaces meet lively bazaars, fine crafts and warm Rajasthani hospitality."
          actions={
            <button onClick={() => setShowGuideModal(true)} className={btnSecondary}>
              Explore Delegate Travel Guide <ArrowRight className="h-4 w-4" />
            </button>
          }
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <figure>
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={CONFERENCE_IMAGES.jaipurLandmarks}
                alt="Jaipur's forts, Hawa Mahal, elephants and camels – artwork from the INASL 2027 poster"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>

          <ul className="border-t border-line">
            {ATTRACTIONS.map((attraction) => (
              <li key={attraction.id} className="border-b border-line">
                <button type="button" onClick={() => setSelectedAttraction(attraction)} className="group w-full py-6 text-left cursor-pointer">
                  <p className="text-sm font-semibold text-saffron-dark">{attraction.highlight}</p>
                  <h3 className="mt-1 flex items-center justify-between gap-4 font-display text-[1.75rem] leading-tight text-ink transition-colors group-hover:text-wine">
                    {attraction.name}
                    <ArrowRight className="h-5 w-5 shrink-0 text-wine transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-stone">{attraction.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Single attraction */}
      <LandingModal open={!!selectedAttraction} onClose={() => setSelectedAttraction(null)} label={selectedAttraction?.name ?? 'Attraction'}>
        {selectedAttraction && (
          <>
            <p className="text-sm font-semibold text-saffron-dark">{selectedAttraction.highlight}</p>
            <h3 className="mt-1 font-display text-3xl leading-tight text-ink">{selectedAttraction.name}</h3>
            <p className="mt-2 text-[15px] font-semibold text-wine">{selectedAttraction.description}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink/85">{selectedAttraction.fullDetails}</p>
            <p className="mt-6 flex items-center gap-1.5 border-t border-line pt-4 text-sm text-stone">
              <MapPin className="h-4 w-4 text-wine" aria-hidden /> About 40–60 min by road from the venue
            </p>
          </>
        )}
      </LandingModal>

      {/* Delegate travel guide */}
      <LandingModal open={showGuideModal} onClose={() => setShowGuideModal(false)} label="Jaipur Delegate Travel & Heritage Guide" width="max-w-2xl">
        <p className="text-sm font-semibold text-saffron-dark">Delegate Excursions</p>
        <h3 className="mt-1 font-display text-3xl leading-tight text-wine">Jaipur Delegate Travel &amp; Heritage Guide</h3>

        <div className="mt-6 divide-y divide-line">
          <div className="py-5 first:pt-0">
            <h4 className="flex items-center gap-2 text-[17px] font-semibold text-ink">
              <CloudRain className="h-4 w-4 text-saffron-dark" aria-hidden /> August Weather Advisory
            </h4>
            <p className="mt-1.5 text-[15px] leading-relaxed text-stone">
              August is monsoon season in Jaipur. Expect warm, humid days with passing showers and temperatures typically between{' '}
              <strong className="font-semibold text-ink">25°C and 33°C</strong>. Light formal wear works for the sessions; carry an umbrella for the evenings.
            </p>
          </div>
          <div className="py-5">
            <h4 className="flex items-center gap-2 text-[17px] font-semibold text-ink">
              <Utensils className="h-4 w-4 text-saffron-dark" aria-hidden /> Celebrated Culinary Heritage
            </h4>
            <p className="mt-1.5 text-[15px] leading-relaxed text-stone">
              Do not miss Rajasthani classics: <em>Dal Baati Churma</em>, fiery <em>Laal Maas</em> and the city’s famous <em>Pyaaz Kachori</em>. August is also the season
              for <em>Ghewar</em>, the honeycomb sweet made for the Teej festival.
            </p>
          </div>
          <div className="py-5 last:pb-0">
            <h4 className="flex items-center gap-2 text-[17px] font-semibold text-ink">
              <Compass className="h-4 w-4 text-saffron-dark" aria-hidden /> Official Delegate City Tour
            </h4>
            <p className="mt-1.5 text-[15px] leading-relaxed text-stone">
              The Conference Hospitality Desk operates curated half-day city tours covering Hawa Mahal, the City Palace, Jantar Mantar and Amber Fort. Inquire at the
              registration counter for complimentary slots.
            </p>
          </div>
        </div>
      </LandingModal>
    </section>
  );
};
