import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { WHATSAPP_URL } from '@/lib/contact'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a RiseWeb no WhatsApp"
      className="whatsapp-enter fixed bottom-[calc(0.85rem+env(safe-area-inset-bottom))] right-3 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/18 bg-[#145a8f] text-white shadow-[0_10px_28px_rgba(0,0,0,0.34)] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:right-6 md:h-auto md:w-auto md:gap-3 md:px-4 md:py-3.5 md:hover:-translate-y-1 md:hover:bg-[#1d73ad]"
    >
      <WhatsAppIcon className="h-6 w-6 md:h-5.5 md:w-5.5" />
      <span className="hidden pr-1 text-sm font-bold md:inline">WhatsApp</span>
    </a>
  )
}
