import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/* Shared pieces for the INASL 2027 landing page sections. */

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-saffron-dark hover:text-white cursor-pointer';
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-full border border-wine/30 px-6 py-3 text-[15px] font-semibold text-wine transition-colors hover:border-wine hover:bg-wine hover:text-white cursor-pointer';
export const btnSmall =
  'inline-flex items-center justify-center gap-1.5 rounded-full border border-wine/25 px-4 py-2 text-sm font-semibold text-wine transition-colors hover:border-wine hover:bg-wine hover:text-white cursor-pointer';

export const sectionPad = 'px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28';
export const container = 'mx-auto max-w-6xl';

/** Section heading: display title, an optional lead paragraph and optional actions on the right. */
export function SectionHead({
  title,
  lead,
  actions,
  className = '',
  dark = false,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <h2 className={`font-display text-[2.4rem] leading-[1.08] sm:text-5xl ${dark ? 'text-sand' : 'text-wine'}`}>{title}</h2>
        {lead && <p className={`mt-4 text-[17px] leading-relaxed ${dark ? 'text-sand/80' : 'text-stone'}`}>{lead}</p>}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}

/** Dialog used by the landing sections (Escape and the backdrop close it; focus moves into it). */
export function LandingModal({
  open,
  onClose,
  label,
  children,
  width = 'max-w-lg',
  media,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
  width?: string;
  /** Optional full-bleed block above the content (e.g. a photograph). */
  media?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      prev?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="landing fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onMouseDown={onClose}
    >
      <div
        ref={ref}
        tabIndex={-1}
        className={`relative w-full ${width} max-h-[88vh] overflow-y-auto rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(43,20,23,0.5)] outline-none`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-stone transition-colors hover:text-wine cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
        {media}
        <div className="p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
