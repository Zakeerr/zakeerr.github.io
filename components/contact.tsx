import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { InstagramIcon, WhatsAppIcon } from '@/components/whatsapp-icon'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/contact'

export function Contact() {
  return (
    <section id="contato" className="deferred-section relative overflow-hidden bg-[#05111f] py-14 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 hidden grid-bg opacity-22 sm:block" />
      <div className="pointer-events-none absolute bottom-[-15rem] hidden sm:block left-1/2 h-[520px] w-[620px] -translate-x-1/2 rounded-full bg-[#267bb8]/14 blur-[150px] sm:h-[600px] sm:w-[760px] sm:blur-[170px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <div data-reveal className="relative overflow-hidden rounded-[1.35rem] border border-slate-300/[0.14] bg-[#091a2c] shadow-[0_16px_44px_rgba(0,0,0,0.34)] sm:rounded-[2.2rem] sm:shadow-[0_35px_120px_rgba(0,0,0,0.48)]">
          <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_12%_18%,rgba(39,120,185,0.22),transparent_38%),radial-gradient(circle_at_92%_84%,rgba(148,163,184,0.055),transparent_34%)] sm:block" />
          <div className="pointer-events-none absolute inset-0 hidden noise-overlay sm:block" />

          <div className="relative p-4.5 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">Contato</span>
              <h2 className="mobile-heading heading-glow mt-4 font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
                <span className="mobile-line">Vamos criar algo forte</span>{' '}
                <span className="mobile-line text-glow-strong">para a sua marca.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                Fale com a RiseWeb e receba uma solução direta, moderna e pensada para valorizar o seu negócio.
              </p>
            </div>

            <div className="mx-auto mt-7 grid max-w-4xl gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-action-glow group flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-300/12 bg-white/[0.035] p-4 transition-all duration-300 sm:p-5 sm:hover:border-slate-300/24 sm:hover:bg-white/[0.065] sm:hover:shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
              >
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-300/14 bg-[#113153] text-brand-bright shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
                    <WhatsAppIcon className="h-5.5 w-5.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">WhatsApp</span>
                    <span className="mt-1 block truncate font-display text-base font-bold text-white sm:text-lg">{WHATSAPP_DISPLAY}</span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-action-glow group flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-300/12 bg-white/[0.035] p-4 transition-all duration-300 sm:p-5 sm:hover:border-slate-300/24 sm:hover:bg-white/[0.065] sm:hover:shadow-[0_18px_44px_rgba(0,0,0,0.24)]"
              >
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-300/14 bg-[#113153] text-brand-bright shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
                    <InstagramIcon className="h-5.5 w-5.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">Instagram</span>
                    <span className="mt-1 block truncate font-display text-base font-bold text-white sm:text-lg">{INSTAGRAM_HANDLE}</span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </a>
            </div>

            <div className="mx-auto mt-4 flex max-w-4xl flex-col gap-2.5 sm:mt-6 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary group relative inline-flex min-h-13 items-center justify-center rounded-2xl px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-300 sm:px-7 sm:py-4 sm:text-base sm:hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5" />
                  Solicitar orçamento
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.055] bg-white/[0.02] px-4 py-3 text-sm text-slate-300">
                <MessageCircle className="h-4.5 w-4.5 text-brand-bright" />
                Atendimento direto e sem complicação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
