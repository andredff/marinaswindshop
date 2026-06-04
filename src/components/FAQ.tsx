import { useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'

const FAQS = [
  {
    q: 'Vocês vendem peças para motores Yanmar?',
    a: 'Sim. Somos revendedores autorizados Yanmar e mantemos estoque de peças originais para motores marítimos. Nossa equipe identifica a peça certa para o seu motor — mesmo que você não saiba o nome técnico.',
  },
  {
    q: 'A Marinas Wind Shop tem oficina náutica?',
    a: 'Sim. Nossa oficina realiza manutenção e reparos em motores, embarcações e equipamentos náuticos em geral. Trabalhamos com as principais marcas do mercado.',
  },
  {
    q: 'Posso pedir orçamento pelo WhatsApp?',
    a: 'Sim. Atendemos via WhatsApp para orientação técnica, orçamentos e dúvidas sobre produtos. É a forma mais rápida de falar com nossa equipe especializada.',
  },
  {
    q: 'Onde fica a loja?',
    a: 'Nossa loja está localizada dentro do Novotel Recife Marina — Cais de Santa Rita, 46, São José, Recife — PE. Estamos no polo náutico mais movimentado de Pernambuco.',
  },
  {
    q: 'Vocês vendem moda náutica?',
    a: 'Sim. Trabalhamos com roupas, acessórios e produtos de lifestyle náutico — conforto, proteção e estilo para quem vive o mar dentro e fora d\'água.',
  },
  {
    q: 'Atendem quais marcas de motor?',
    a: 'Trabalhamos com Yanmar, Suzuki, Mercury e outras marcas líderes. Consulte nossa equipe para verificar disponibilidade de peças ou do motor que você precisa.',
  },
  {
    q: 'Vocês trabalham com botes infláveis e caiaques?',
    a: 'Sim. Temos botes infláveis, caiaques e acessórios para lazer, pesca e esportes náuticos. Fale com a gente para ver opções disponíveis.',
  },
  {
    q: 'Fazem indicação técnica antes da compra?',
    a: 'Sim — e é um dos nossos maiores diferenciais. Nossa equipe tem experiência náutica real para indicar o produto certo para sua embarcação, motor ou modalidade, sem você precisar saber o nome exato da peça.',
  },
]

// JSON-LD FAQPage schema injected once when component mounts
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-ice py-20 md:py-28">
      {/* Inject FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="mx-auto max-w-[860px] px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-gold text-[11.5px] tracking-wider-3 font-medium">DÚVIDAS FREQUENTES</p>
            <h2 className="mt-4 font-display text-navy text-[clamp(2.3rem,4.8vw,3.6rem)] leading-[1.05]">
              Perguntas frequentes
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-gold/80 rounded-full" />
          </div>
        </Reveal>

        <dl className="space-y-2">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 40}>
              <div className="border border-navy/10 rounded-ds bg-white overflow-hidden">
                <dt>
                  <button
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-navy font-semibold text-[15px] leading-snug hover:text-gold transition-colors focus-gold rounded-ds"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`shrink-0 text-gold transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    open === i ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-navy/70 text-[14.5px] leading-[1.65]">{faq.a}</p>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={100}>
          <div className="mt-10 text-center">
            <p className="text-navy/60 text-[14px]">Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5581999957001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 h-[52px] px-8 rounded-ds bg-gold hover:bg-gold-hover text-navy text-[12px] font-semibold tracking-wider-2 transition-colors shadow-soft focus-gold"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-white/90 text-[#25D366]">
                <Icon name="whatsapp" className="w-3.5 h-3.5" />
              </span>
              FALAR COM A EQUIPE
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
