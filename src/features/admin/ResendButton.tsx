import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { api } from '../../lib/api';

export function ResendButton({ userId, paymentId, compact }: { userId: number; paymentId?: number; compact?: boolean }) {
  const [state, setState] = useState<'idle' | 'busy' | 'done' | 'error'>('idle');
  const resend = async () => {
    if (!window.confirm('Resend the registration confirmation email (with invoice) to this participant?')) return;
    setState('busy');
    try {
      await api.post(`/admin/registrations/${userId}/resend-confirmation`, paymentId ? { paymentId } : {});
      setState('done');
    } catch {
      setState('error');
    }
  };
  return (
    <button onClick={resend} disabled={state === 'busy' || state === 'done'} className="inline-flex items-center gap-1 font-bold text-[#580c1e] hover:underline disabled:opacity-60 cursor-pointer text-xs" title="Resend confirmation email">
      <Mail className="w-3.5 h-3.5" />
      {state === 'done' ? 'Queued' : state === 'error' ? 'Failed – retry' : state === 'busy' ? 'Sending…' : compact ? 'Resend' : 'Resend confirmation email'}
    </button>
  );
}
