import {
  ArrowRight,
  Bot,
  Check,
  Globe2,
  LayoutTemplate,
  Megaphone,
  ShoppingBag,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

const pillars = [
  {
    icon: Bot,
    title: 'Automação',
    description:
      'Processos, atendimento, integrações e tarefas repetitivas funcionando com mais eficiência.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description:
      'Presença digital, conteúdo estratégico e materiais que ajudam sua marca a se destacar.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    description:
      'Landing pages, cardápios online e campanhas pensadas para gerar mais oportunidades.',
  },
]

const services = [
  {
    icon: Globe2,
    title: 'Sites Profissionais',
    description:
      'Sites institucionais modernos para transmitir mais confiança, autoridade e presença digital.',
    points: ['Visual premium e responsivo', 'Estrutura clara e profissional', 'Experiência moderna para o cliente'],
  },
  {
    icon: ShoppingBag,
    title: 'Lojas Virtuais',
    description:
      'E-commerces organizados para apresentar melhor os produtos e facilitar a jornada de compra.',
    points: ['Loja organizada e responsiva', 'Experiência de compra mais clara', 'Apresentação forte dos produtos'],
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description:
      'Páginas rápidas e objetivas para campanhas, captação de leads e ofertas com foco em conversão.',
    points: ['Estrutura focada em conversão', 'Formulários de contato e orçamento', 'Comunicação direta para a oferta'],
  },
  {
    icon: Workflow,
    title: 'Automações Inteligentes',
    description:
      'Fluxos que reduzem tarefas manuais, conectam ferramentas e tornam a operação mais eficiente.',
    points: ['Processos mais rápidos', 'Menos trabalho e manual', 'Integrações para o dia a dia'],
  },
]

export function Solutions() {
  return (
    <section id="solucao" className="deferred-section relative overflow-hidden border-y border-white/[0.045] bg-[#061321] pb-14 pt-4 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-10">
      <div className="pointer-events-none absolute inset-0 hidden grid-bg opacity-25 sm:block" />
      <div className="pointer-events-none absolute left-[-18rem] hidden sm:block top-[18rem] h-[480px] w-[480px] rounded-full bg-[#236fa8]/14 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-18rem] hidden sm:block top-[48rem] h-[520px] w-[520px] rounded-full bg-slate-500/[0.045] blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mobile-snap-row -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
          {pillars.map((pillar) => (
            <article
              data-reveal
              key={pillar.title}
              className="group relative min-w-[82%] snap-center overflow-hidden rounded-[1.25rem] border border-slate-300/[0.12] bg-[#0b1c2d]/94 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-all sm:backdrop-blur-sm duration-300 sm:px-6 sm:py-6 md:min-w-0 md:hover:-translate-y-1 md:hover:border-slate-300/22 md:hover:bg-[#10263d]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#123252]/80 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-11 sm:w-11">
                  <pillar.icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-extrabold tracking-[-0.025em] text-white sm:text-2xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-[13px] leading-6 text-slate-300/85 sm:text-[14px] sm:leading-6">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-3xl text-center sm:mt-20 lg:mt-24">
          <span className="section-kicker">Soluções RiseWeb</span>
          <h2 className="mobile-heading heading-glow mt-4 font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
            <span className="mobile-line">Tudo o que sua marca</span>{' '}
            <span className="mobile-line">precisa para parecer</span>{' '}
            <span className="mobile-line text-glow-strong">mais profissional.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
            Soluções organizadas em uma estrutura mais limpa, direta e fácil de entender.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3.5 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              data-reveal
              key={service.title}
              className="group premium-card relative flex min-h-full flex-col rounded-[1.3rem] p-5 sm:rounded-[1.7rem] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.065] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 group-hover:border-slate-300/22 group-hover:bg-[#143858] group-hover:text-white">
                <service.icon className="h-5.5 w-5.5" />
              </div>

              <h3 className="mt-6 font-display text-[1.45rem] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[1.65rem]">
                {service.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-muted-foreground sm:text-[15px]">
                {service.description}
              </p>

              <div className="mt-5 grid gap-2.5 sm:mt-6 sm:gap-3">
                {service.points.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13px] leading-5 text-slate-300 sm:text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-bright" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-action-glow mt-6 inline-flex items-center gap-2 self-start rounded-full border border-slate-300/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-brand-bright transition-all hover:border-slate-200/28 hover:bg-white/[0.075] hover:text-white"
              >
                Conversar sobre essa solução
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
