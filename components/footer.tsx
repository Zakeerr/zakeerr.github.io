import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from '@/components/whatsapp-icon'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/contact'

const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucao' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export function Footer() {
  return (
    <footer className="deferred-section relative border-t border-slate-300/[0.08] bg-[#030b16]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent shadow-[0_0_14px_rgba(148,163,184,0.08)]" />
      <div data-reveal className="mx-auto max-w-7xl px-4 py-9 sm:px-5 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end md:justify-between">
          <div className="max-w-lg">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <span className="overflow-hidden rounded-xl border border-slate-300/14 shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
                <Image
                  src="/riseweb-logo-compact.webp"
                  alt="Logo RiseWeb"
                  width={42}
                  height={42}
                  className="h-10 w-10 object-cover"
                />
              </span>
              <span className="font-display text-2xl font-black tracking-[-0.035em]">
                Rise<span className="text-glow">Web</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-[14px] leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Soluções digitais com estética premium, clareza e performance para valorizar sua marca.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-4 md:justify-end">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-white sm:text-sm"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da RiseWeb"
                className="site-action-glow flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300/12 bg-white/[0.035] text-muted-foreground shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all hover:border-slate-300/24 hover:bg-white/[0.065] hover:text-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)]"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da RiseWeb"
                className="site-action-glow flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300/12 bg-white/[0.035] text-muted-foreground shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all hover:border-slate-300/24 hover:bg-white/[0.065] hover:text-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.055] pt-5 text-[12px] leading-5 text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© {new Date().getFullYear()} RiseWeb. Todos os direitos reservados.</p>
          <p className="text-slate-500">Design limpo. Presença forte.</p>
        </div>
      </div>
    </footer>
  )
}
