import React from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_DOCS } from '../data/legalContent';

export const Footer: React.FC = () => {
  return (
    <footer className="landing w-full border-t border-sand-deep bg-sand-deep px-4 py-12 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl text-wine">INASL 2027</p>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-stone">
            34th Annual Meeting of the Indian National Association for Study of the Liver
            <br />
            5–8 August 2027, Novotel Jaipur Convention Centre, Jaipur, Rajasthan, India
          </p>
        </div>

        <nav aria-label="Policies" className="flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
          {LEGAL_DOCS.map((d) => (
            <Link key={d.slug} to={`/${d.slug}`} className="font-medium text-ink/80 transition-colors hover:text-wine">
              {d.title}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-wine/10 pt-6 text-sm text-stone">© 2027 INASL 2027. All rights reserved.</p>
    </footer>
  );
};
