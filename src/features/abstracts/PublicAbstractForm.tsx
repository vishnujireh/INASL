import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, CalendarClock, Check, FileText, Loader2, LogIn, ShieldCheck, UserPlus } from 'lucide-react';
import { useAuth } from '../../auth/AuthContext';
import { api } from '../../lib/api';
import { date, dateTime } from '../../lib/format';
import { ABSTRACT_FORM_PATH, withNext } from '../../lib/nav';
import type { SubmissionWindow } from '../../api/types';

/**
 * The submission card in the home page's "Call for Abstracts" section. A free INASL account is
 * required; the form itself is its own page (/abstracts/submit), decisions are under My Abstracts.
 */

const PANEL_ID = 'submit-abstract';

/** Brings the submission card into view. */
export const scrollToAbstractForm = () => document.getElementById(PANEL_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export function useSubmissionWindow() {
  return useQuery({ queryKey: ['abstract-window'], queryFn: () => api.get<SubmissionWindow>('/abstracts/window'), staleTime: 60_000 });
}

/* ------------------------------------------------------------------------------------------------ */

const goldBtn =
  'w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-saffron text-ink text-[15px] font-semibold hover:bg-saffron-dark hover:text-white transition-colors cursor-pointer';
const ghostBtn =
  'w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-wine/30 text-wine text-[15px] font-semibold hover:bg-wine hover:text-white transition-colors';

function Steps({ signedIn }: { signedIn: boolean }) {
  const steps = [
    signedIn ? 'Signed in to your INASL account' : 'Log in or create a free account',
    'Fill in the form and upload your file',
    'Track the decision in My Abstracts',
  ];
  return (
    <ol className="relative space-y-4">
      {steps.map((s, i) => {
        const done = i === 0 && signedIn;
        return (
          <li key={s} className="relative flex items-center gap-3.5 text-[15px] leading-snug text-ink/85">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                done ? 'bg-saffron text-ink' : 'bg-white text-wine ring-1 ring-wine/20'
              }`}
            >
              {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : i + 1}
            </span>
            {s}
          </li>
        );
      })}
    </ol>
  );
}

/** The maroon card beside the category guide. */
export function AbstractSubmitPanel() {
  const { user, loading } = useAuth();
  const windowQ = useSubmissionWindow();
  const w = windowQ.data;
  const closed = w && !w.isOpen;
  const participant = user?.role === 'participant';

  let actions: React.ReactNode;
  if (loading || windowQ.isLoading) actions = <Loader2 className="w-5 h-5 animate-spin text-wine/60 mx-auto" />;
  else if (closed)
    actions = (
      <div className="space-y-3">
        <p className="text-[15px] text-ink/80">
          Submissions are accepted from {dateTime(w!.opensAt)} to {dateTime(w!.closesAt)}.
        </p>
        {participant && (
          <Link to="/my-abstracts" className={ghostBtn}>
            My Abstracts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    );
  else if (!user)
    actions = (
      <div className="space-y-2.5">
        <Link to={withNext('/login', ABSTRACT_FORM_PATH)} className={goldBtn}>
          <LogIn className="w-4 h-4" /> Log in to submit
        </Link>
        <Link to={withNext('/create-account', ABSTRACT_FORM_PATH)} className={ghostBtn}>
          <UserPlus className="w-4 h-4" /> Create a free account
        </Link>
        <p className="text-[13px] text-stone text-center pt-1">An account does not register you for the conference.</p>
      </div>
    );
  else if (!participant)
    actions = (
      <div className="space-y-3">
        <p className="text-[15px] text-ink/80">You are signed in as an administrator. Abstracts are submitted from a delegate account.</p>
        <Link to="/admin/abstracts" className={ghostBtn}>
          Review abstracts <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  else
    actions = (
      <div className="space-y-2.5">
        <p className="text-sm text-stone truncate">
          Submitting as <span className="font-semibold text-ink">{[user.title, user.fullName].filter(Boolean).join(' ') || user.email}</span>
        </p>
        <Link to={ABSTRACT_FORM_PATH} className={goldBtn}>
          <FileText className="w-4 h-4" /> Start submission
        </Link>
        <Link to="/my-abstracts" className={ghostBtn}>
          My Abstracts <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );

  // Whole days until submissions close (open window only).
  const daysLeft = w && !closed ? Math.max(0, Math.ceil((Date.parse(w.closesAt) - Date.now()) / 86_400_000)) : null;

  return (
    <div className="landing relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-7 text-ink ring-2 ring-saffron/40 sm:p-9">
      <div aria-hidden className="arch pointer-events-none absolute -right-16 -top-10 h-72 w-56 bg-saffron-soft/60" />
      <div className="relative flex items-center gap-2 text-[15px] font-semibold text-saffron-dark">
        <ShieldCheck className="h-4 w-4" aria-hidden /> Online submission
      </div>
      <h3 className="relative mt-2 font-display text-[2.4rem] leading-[1.05] text-wine">Submit your abstract</h3>

      <div className="relative mt-6 flex items-end gap-4">
        {daysLeft != null ? (
          <p className="leading-none">
            <span className="tabular font-display text-6xl text-saffron-dark">{daysLeft}</span>
            <span className="ml-2 text-[15px] text-stone">{daysLeft === 1 ? 'day left' : 'days left'}</span>
          </p>
        ) : null}
        <p className="flex items-center gap-2 pb-1 text-[15px] text-stone">
          <CalendarClock className="h-4 w-4 shrink-0 text-saffron-dark" aria-hidden />
          <span>
            {closed ? 'Submissions' : 'Closes'} <strong className="font-semibold text-ink">{w ? (closed ? 'Closed' : date(w.closesAt)) : '…'}</strong>
          </span>
        </p>
      </div>

      <div className="relative mt-7 border-t border-line pt-6">
        <Steps signedIn={participant} />
      </div>

      <div className="relative mt-auto pt-8">{actions}</div>
    </div>
  );
}
