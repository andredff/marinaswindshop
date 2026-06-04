import Icon from './Icon'
import Logo from './Logo'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="contato" className="grain relative bg-navy text-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--glow-right)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 pt-14 md:pt-16 pb-8">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Address */}
            <div className="md:col-span-5">
              <h3 className="font-display text-white text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.1]">
                Estamos na<br />Recife Marina
              </h3>
              <ul className="mt-6 space-y-3 text-white/85 text-[14px]">
                <li className="flex items-start gap-3">
                  <Icon name="pin" className="w-4 h-4 mt-0.5 text-gold shrink-0" stroke={1.7} />
                  <span>
                    Cais de Santa Rita, 46<br />
                    Novotel Recife Marina,<br />
                    São José, Recife – PE<br />
                    CEP: 50020-360
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="whatsapp" className="w-4 h-4 text-gold shrink-0" />
                  <a href="tel:+5581999957001" className="hover:text-gold transition-colors focus-gold rounded-sm">(81) 9 9995-7001</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="w-4 h-4 text-gold shrink-0" stroke={1.7} />
                  <a href="tel:+558134232388" className="hover:text-gold transition-colors focus-gold rounded-sm">(81) 3423-2388</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="w-4 h-4 text-gold shrink-0" stroke={1.7} />
                  <a href="mailto:marinaswindshop@hotmail.com" className="hover:text-gold transition-colors focus-gold rounded-sm">
                    marinaswindshop@hotmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="font-display text-white text-[18px]">Fale com a gente</h4>
              <p className="mt-1 text-white/65 text-[13.5px]">Atendimento via WhatsApp</p>
              <a
                href="https://wa.me/5581999957001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 h-[48px] px-6 rounded-ds bg-gold hover:bg-gold-hover active:translate-y-[1px] transition-all text-navy text-[12px] font-semibold tracking-wider-2 shadow-soft focus-gold"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-white/95 text-[#25D366]">
                  <Icon name="whatsapp" className="w-3.5 h-3.5" />
                </span>
                CHAMAR NO WHATSAPP
              </a>

              <p className="mt-9 text-white/85 text-[14px]">Siga nossas redes</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/35 grid place-items-center hover:border-gold hover:text-gold transition-colors focus-gold"
                >
                  <Icon name="instagram" className="w-4 h-4" stroke={1.6} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/35 grid place-items-center hover:border-gold hover:text-gold transition-colors focus-gold"
                >
                  <Icon name="facebook" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="md:col-span-3">
              <p className="text-gold text-[11px] tracking-wider-3 font-medium">RECIFE MARINA</p>
              <div className="mt-4 relative rounded-ds overflow-hidden ring-1 ring-white/[0.12] shadow-[0_18px_36px_-18px_rgba(0,0,0,0.6)]">
                <iframe
                  title="Mapa — Marinas Wind Shop na Recife Marina"
                  src="https://www.google.com/maps?q=Cais%20de%20Santa%20Rita%2046%2C%20Recife%20Marina%2C%20S%C3%A3o%20Jos%C3%A9%2C%20Recife%20-%20PE&z=15&output=embed"
                  width="100%"
                  height="180"
                  loading="lazy"
                  style={{ border: 0, display: 'block', filter: 'grayscale(0.25) contrast(1.05)' }}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 bg-navy/85 backdrop-blur-sm px-2.5 h-7 rounded-ds ring-1 ring-gold/40">
                  <Icon name="pin" className="w-3.5 h-3.5 text-gold" stroke={1.8} />
                  <span className="text-white text-[10px] tracking-wider-2 font-medium">RECIFE MARINA</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Cais%20de%20Santa%20Rita%2046%2C%20Recife%20Marina%2C%20Recife%20-%20PE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 group inline-flex items-center gap-2 text-gold hover:text-[#dcc183] text-[11.5px] font-semibold tracking-wider-2 transition-colors focus-gold rounded-sm"
              >
                COMO CHEGAR
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  <Icon name="arrow-right" className="w-3.5 h-3.5" stroke={1.9} />
                </span>
              </a>
            </div>

          </div>
        </Reveal>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-4">
          <Logo size="sm" />
          <p className="text-white/55 text-[12px] md:flex-1 md:text-left text-center">
            © 2026 Marinas Wind Shop. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-white/75 text-[12px]">
            <a href="#" className="hover:text-gold transition-colors focus-gold rounded-sm">Política de Privacidade</a>
            <span aria-hidden className="text-white/30">|</span>
            <a href="#" className="hover:text-gold transition-colors focus-gold rounded-sm">Termos de Uso</a>
          </div>
          <a
            href="#planeje"
            className="inline-flex items-center gap-2 h-[44px] px-6 rounded-ds bg-gold hover:bg-gold-hover text-navy text-[12px] font-semibold tracking-wider-2 transition-colors focus-gold"
          >
            PLANEJE SUA VISITA
          </a>
        </div>
      </div>
    </footer>
  )
}
