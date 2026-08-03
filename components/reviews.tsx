import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const reviews = [
  {
    name: 'Camila Ferreira',
    role: 'Loja Virtual',
    photo: '/clientes/camila.webp',
    text: 'O site ficou muito mais profissional e a percepção da minha marca mudou completamente.',
  },
  {
    name: 'Rodrigo Almeida',
    role: 'Site Institucional',
    photo: '/clientes/rodrigo.webp',
    text: 'Entrega organizada, visual premium e uma experiência muito melhor no desktop e no celular.',
  },
  {
    name: 'Juliana Souza',
    role: 'Automações',
    photo: '/clientes/juliana.webp',
    text: 'As automações deixaram nosso dia a dia mais leve e o atendimento mais ágil.',
  },
]

export function Reviews() {
  return (
    <section id="avaliacoes" className="deferred-section relative overflow-hidden bg-[#081728] py-14 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 hidden sm:block top-0 h-[400px] w-[540px] -translate-x-1/2 rounded-full bg-[#2878b5]/14 blur-[140px] sm:h-[520px] sm:w-[720px] sm:blur-[170px]" />
      <div className="pointer-events-none absolute inset-0 hidden noise-overlay sm:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Avaliações</span>
          <h2 className="mobile-heading heading-glow mt-4 font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
            <span className="mobile-line">Projetos que passam</span>{' '}
            <span className="mobile-line text-glow-strong">mais confiança.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
            Um visual mais limpo comunica melhor e valoriza ainda mais sua empresa.
          </p>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-slate-300/12 bg-white/[0.035] px-3.5 py-2.5 shadow-[0_16px_42px_rgba(0,0,0,0.22)] sm:mt-7 sm:gap-3 sm:px-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-slate-300 text-slate-300 sm:h-4 sm:w-4" />
              ))}
            </div>
            <span className="text-[13px] font-semibold text-slate-200 sm:text-sm">Experiência premium para os seus clientes</span>
          </div>
        </div>

        <div className="mobile-snap-row -mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              data-reveal
              key={review.name}
              className="premium-card group flex min-w-[86%] snap-center flex-col overflow-hidden rounded-[1.25rem] p-5 transition-all duration-500 sm:min-w-0 sm:min-h-[290px] sm:rounded-[1.65rem] sm:p-7 sm:hover:-translate-y-1 sm:hover:border-slate-300/22"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-slate-300 text-slate-300" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-slate-400/25 sm:h-7 sm:w-7" />
              </div>

              <blockquote className="mt-5 flex-1 text-[14px] leading-6 text-slate-200/90 text-pretty sm:mt-6 sm:text-[15px] sm:leading-7">
                “{review.text}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.055] pt-4 sm:mt-6 sm:pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-300/25 bg-[#143a61] shadow-[0_10px_28px_rgba(0,0,0,0.42)] ring-2 ring-white/[0.04] sm:h-12 sm:w-12">
                  <Image
                    src={review.photo}
                    alt={`Foto de ${review.name}`}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-white sm:text-base">{review.name}</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground sm:text-xs">{review.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
