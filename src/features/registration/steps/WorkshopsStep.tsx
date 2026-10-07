import React from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import type { Catalogue, RegistrationStatus } from '../../../api/types';
import { money } from '../../../lib/format';
import { Button } from '../../../components/ui/Button';
import { Alert, EmptyState } from '../../../components/ui/States';
import { useCart } from '../CartContext';

export function WorkshopsStep({ status, catalogue, onBack, onNext }: { status: RegistrationStatus; catalogue: Catalogue; onBack: () => void; onNext: () => void }) {
  const { cart, toggleWorkshop } = useCart();
  const purchased = new Set(status.workshops.map((w) => w.workshopCode));
  const hasConference = !!status.conference || !!cart.conferenceCategoryCode;

  return (
    <div className="space-y-5">
      {!hasConference && <Alert tone="warning">Please select a conference registration first – workshops are add-ons to your registration.</Alert>}
      <p className="text-xs text-[#665e5d]">Select any number of workshops (each can be booked once). This step is optional – you can also add workshops later.</p>

      {catalogue.workshops.length === 0 ? (
        <EmptyState title="Workshops will be announced soon">You can come back and add workshops at any time.</EmptyState>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {catalogue.workshops.map((w) => {
            const isPurchased = purchased.has(w.code);
            const isSel = cart.workshopCodes.includes(w.code);
            const disabled = isPurchased || w.soldOut || !hasConference;
            return (
              <button
                key={w.code}
                type="button"
                role="checkbox"
                aria-checked={isPurchased || isSel}
                disabled={disabled}
                onClick={() => toggleWorkshop(w.code)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  isPurchased ? 'border-emerald-300 bg-emerald-50/50' : isSel ? 'border-[#580c1e] bg-[#580c1e]/[0.04] ring-2 ring-[#580c1e]/30' : 'border-black/[0.1] bg-white hover:border-[#580c1e]/40'
                } ${disabled && !isPurchased ? 'opacity-60 cursor-not-allowed' : disabled ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isPurchased ? 'bg-emerald-600 border-emerald-600' : isSel ? 'bg-[#580c1e] border-[#580c1e]' : 'border-black/25'}`}>
                      {(isSel || isPurchased) && <Check className="w-3.5 h-3.5 text-white" />}
                    </span>
                    <div>
                      <p className="font-bold text-sm text-[#1a1918]">{w.name}</p>
                      {w.sessionLabel && <p className="text-[11px] text-[#c89e37] font-semibold">{w.sessionLabel}</p>}
                      {w.description && <p className="text-[11px] text-[#665e5d] mt-1">{w.description}</p>}
                    </div>
                  </div>
                  <span className="font-serif font-bold text-[#580c1e] whitespace-nowrap">{money(w.amountMinor, 'INR', { decimals: false })}</span>
                </div>
                <div className="mt-2 text-[11px]">
                  {isPurchased ? (
                    <span className="text-emerald-700 font-bold inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Purchased
                    </span>
                  ) : w.soldOut ? (
                    <span className="text-red-700 font-bold">Fully booked</span>
                  ) : w.seatsLeft != null ? (
                    <span className="text-[#665e5d]">{w.seatsLeft} seats left</span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-3 pt-2 border-t border-black/[0.06]">
        <Button variant="secondary" onClick={onBack} icon={<ArrowLeft className="w-4 h-4" />}>
          Back
        </Button>
        <Button onClick={onNext} icon={<ArrowRight className="w-4 h-4" />}>
          {cart.workshopCodes.length ? `Continue with ${cart.workshopCodes.length} workshop${cart.workshopCodes.length > 1 ? 's' : ''}` : 'Skip workshops'}
        </Button>
      </div>
    </div>
  );
}
