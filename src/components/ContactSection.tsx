import React from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SectionHead, container, sectionPad } from './landing/kit';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={`bg-white text-ink ${sectionPad}`}>
      <div className={container}>
        <SectionHead
          title="Contact & Assistance"
          lead="Our organizing secretariat and dedicated desk coordinators are available to assist delegates, international faculty, and industry partners."
          actions={<p className="text-[15px] font-semibold text-saffron-dark">Official Conference Secretariat</p>}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Headquarters */}
          <div className="rounded-3xl border-t-4 border-saffron bg-sand p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-wine">
              <MapPin className="h-5 w-5 text-saffron-dark" aria-hidden /> Secretariat HQ
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              Jaipur, Rajasthan, India
            </p>
            <p className="mt-3 text-sm text-stone">Full secretariat address to be announced</p>
          </div>

          {/* Email */}
          <div className="rounded-3xl border-t-4 border-saffron bg-sand p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-wine">
              <Mail className="h-5 w-5 text-saffron-dark" aria-hidden /> Email Inquiries
            </h3>
            <dl className="mt-3 space-y-2.5 text-[15px]">
              <div>
                <dt className="text-sm text-stone">General</dt>
                <dd>
                  <a href="mailto:info@conferencekolkata.org" className="font-medium text-wine underline-offset-4 hover:underline">
                    info@conferencekolkata.org
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone">Abstracts</dt>
                <dd>
                  <a href="mailto:abstracts@conferencekolkata.org" className="font-medium text-wine underline-offset-4 hover:underline">
                    abstracts@conferencekolkata.org
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-stone">Response within 24 business hours</p>
          </div>

          {/* Phone & WhatsApp */}
          <div className="rounded-3xl border-t-4 border-saffron bg-sand p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-wine">
              <Phone className="h-5 w-5 text-saffron-dark" aria-hidden /> Helplines
            </h3>
            <dl className="mt-3 space-y-2.5 text-[15px]">
              <div>
                <dt className="text-sm text-stone">Secretariat Line</dt>
                <dd>
                  <a href="tel:+913312345678" className="font-medium text-wine underline-offset-4 hover:underline">
                    +91 33 1234 5678
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone">WhatsApp Support</dt>
                <dd>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="font-medium text-wine underline-offset-4 hover:underline">
                    +91 98 7654 3210
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-3 flex items-center gap-2 text-sm text-stone">
              <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500" /> WhatsApp Desk Active
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-3xl border-t-4 border-saffron bg-sand p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-wine">
              <Clock className="h-5 w-5 text-saffron-dark" aria-hidden /> Working Hours
            </h3>
            <dl className="mt-3 space-y-2.5 text-[15px]">
              <div>
                <dt className="text-sm text-stone">Monday – Saturday</dt>
                <dd className="font-medium text-ink">09:30 AM – 06:30 PM IST</dd>
              </div>
              <div>
                <dt className="text-sm text-stone">Timezone</dt>
                <dd className="font-medium text-ink">Indian Standard Time (UTC+5:30)</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-stone">Emergency assistance on Sundays</p>
          </div>
        </div>

        {/* Quick assistance */}
        <div className="mt-14 flex flex-col gap-5 rounded-3xl bg-saffron-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="font-display text-2xl leading-tight text-wine">Need Urgent Assistance or Immediate Confirmation?</p>
            <p className="mt-1 text-[15px] text-stone">Reach our on-duty secretariat coordinator directly via WhatsApp for quick queries.</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-saffron-dark hover:text-white"
          >
            Open WhatsApp Desk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
