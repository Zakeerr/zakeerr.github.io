'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/contact'
import { InstagramIcon, WhatsAppIcon } from '@/components/whatsapp-icon'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucao' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-[calc(0.55rem+env(safe-area-inset-top))] sm:px-5 sm:pt-3.5">
      <nav className="nav-enter mx-auto flex max-w-7xl items-center justify-between rounded-[1.15rem] border border-slate-300/[0.11] bg-[#061426]/96 px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.32)] sm:rounded-[1.35rem] sm:px-5 sm:py-3 md:bg-[#061426]/92 md:shadow-[0_16px_44px_rgba(0,0,0,0.30)]">
        <a href="#inicio" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="RiseWeb, ir para o início">
          <span className="relative shrink-0 overflow-hidden rounded-[0.8rem] border border-slate-300/15 shadow-[0_12px_30px_rgba(0,0,0,0.32)] sm:rounded-xl">
            <Image
              src="/riseweb-logo-compact.webp"
              alt="Logo RiseWeb"
              width={40}
              height={40}
              className="h-8.5 w-8.5 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-10 sm:w-10"
              priority
            />
          </span>
          <span className="truncate font-display text-[1.08rem] font-extrabold tracking-[-0.04em] sm:text-2xl">
            Rise<span className="text-glow">Web</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="mr-3 flex items-center rounded-full border border-white/[0.055] bg-white/[0.025] p-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-white/[0.055] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          
        </div>

        <button
          type="button"
          className="site-action-glow flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl border border-slate-300/[0.15] bg-[#102844]/80 text-foreground shadow-[0_12px_28px_rgba(0,0,0,0.28)] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.15rem] sm:rounded-[1.35rem] border border-slate-300/[0.13] bg-[#061426] shadow-[0_20px_52px_rgba(0,0,0,0.44)] md:hidden">
          <div className="flex flex-col p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-slate-200 transition-colors active:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-white/[0.06] pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar no WhatsApp
                </span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="button-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
