import { ArrowRight, Sparkles } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-section relative isolate min-h-[820px] overflow-hidden pb-12 pt-24 sm:min-h-[880px] sm:pb-16 sm:pt-28 lg:min-h-[780px] lg:pb-24 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-28 bg-gradient-to-b from-transparent to-[#040b16] lg:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:px-8">
        <div className="hero-copy mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="hero-badge hero-intro hero-intro-1 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-300/15 bg-[#071526]/82 px-3.5 py-2 text-[10px] font-semibold tracking-[0.01em] text-slate-100/95 shadow-[0_10px_35px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] sm:backdrop-blur-xl sm:px-4 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-bright" />
            <span>Sites, lojas virtuais e automações</span>
          </div>

          <div className="hero-mobile-logo-space h-[20rem] sm:h-[22rem] lg:hidden" aria-hidden="true" />

          <div className="hero-intro hero-intro-2">
            <h1 className="hero-shine-text heading-glow font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.055em] sm:text-[3.35rem] sm:leading-[1.02] lg:text-[4.7rem] lg:leading-[0.94] xl:text-[5rem]">
              <span className="block">Automatize.</span>
              <span className="block">Divulgue. Escale.</span>
            </h1>
          </div>

          <p className="hero-description hero-intro hero-intro-3 mx-auto mt-4 max-w-[34rem] text-[0.92rem] leading-6 text-slate-100/86 sm:mt-5 sm:text-lg sm:leading-8 lg:mx-0">
            Criamos experiências digitais premium para marcas que querem transmitir autoridade, vender melhor e crescer com clareza.
          </p>

          <div className="hero-intro hero-intro-4 mx-auto mt-6 grid w-full max-w-[30rem] grid-cols-[minmax(0,1fr)_auto] gap-2.5 sm:mt-8 sm:flex sm:max-w-none sm:justify-center sm:gap-3 lg:mx-0 lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary group relative inline-flex min-h-12 min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-[13px] font-bold text-white transition-all duration-300 sm:min-h-13 sm:w-auto sm:rounded-full sm:px-7 sm:py-4 sm:text-base sm:hover:-translate-y-1"
            >
              <span className="relative z-10 flex min-w-0 items-center justify-center gap-2 whitespace-nowrap">
                Quero elevar minha marca
                <ArrowRight className="h-4.5 w-4.5 shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </span>
            </a>

            <a
              href="#solucao"
              className="button-secondary inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl px-4 py-3 text-[13px] font-semibold text-white transition-all duration-300 sm:min-h-13 sm:rounded-full sm:px-7 sm:py-4 sm:text-base sm:hover:-translate-y-0.5 sm:hover:border-slate-300/25 sm:hover:bg-white/[0.055]"
            >
              Soluções
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

        <div className="relative mx-auto hidden w-full max-w-[31.5rem] lg:block lg:pl-2">
          <div className="absolute -inset-11 -z-10 rounded-full bg-[#1f69a4]/22 blur-[110px]" />
          <div className="electric-media-frame relative overflow-hidden rounded-[2rem] bg-[#071525] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
            <div className="relative aspect-square overflow-hidden rounded-[1.58rem] bg-[#04101d]">
              <video
                className="pointer-events-none h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="none"
                poster="/riseweb-logo-video-poster.jpg"
                aria-label="Animação da logo RiseWeb"
                tabIndex={-1}
              >
                <source src="/riseweb-logo-loop.mp4" type="video/mp4" media="(min-width: 1024px)" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-slate-200/[0.025]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent shadow-[0_0_14px_rgba(148,170,192,0.34)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
