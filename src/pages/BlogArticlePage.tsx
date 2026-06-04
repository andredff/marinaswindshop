import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { BLOG_POSTS, type ContentBlock } from '../data/blogPosts'

// ── Article content renderer ──────────────────────────────
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-12 mb-5 font-display text-navy text-[clamp(1.65rem,2.6vw,2.1rem)] leading-[1.1] relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.2em] before:bottom-[0.1em] before:w-[3px] before:bg-gold/70 before:rounded-full">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="mt-9 mb-3 font-display text-navy text-[1.3rem] leading-snug">
          {block.text}
        </h3>
      )
    case 'p':
      return (
        <p className="mt-5 text-navy/70 text-[16.5px] leading-[1.8]">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3.5 text-navy/70 text-[15.5px] leading-[1.7]">
              <span className="mt-[9px] shrink-0 w-[5px] h-[5px] rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <div className="mt-8 mb-2 bg-[#F6F1E8] border border-gold/30 rounded-ds px-6 py-5 flex gap-4">
          <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-gold/15 grid place-items-center">
            <Icon name="anchor" className="w-4 h-4 text-gold" stroke={1.5} />
          </span>
          <p className="text-navy/65 text-[14.5px] leading-[1.7] italic">{block.text}</p>
        </div>
      )
    case 'cta':
      return (
        <div className="mt-12 mb-2">
          <div className="rounded-ds bg-navy p-8 text-center">
            <p className="font-display italic text-[#F1E7D2] text-[1.25rem] mb-5">
              Tem alguma dúvida?<br />Fale com nossa equipe especializada.
            </p>
            <a
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-[52px] px-8 rounded-ds bg-gold hover:bg-gold-hover text-navy text-[12px] font-semibold tracking-wider-2 transition-colors shadow-soft focus-gold"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-white/90 text-[#25D366]">
                <Icon name="whatsapp" className="w-3.5 h-3.5" />
              </span>
              {block.label}
            </a>
          </div>
        </div>
      )
  }
}

// ── Page ─────────────────────────────────────────────────
export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) return <Navigate to="/" replace />

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Header />

      <main className="bg-ice">

        {/* ── Hero ── */}
        <div className="grain relative bg-navy overflow-hidden">
          <img
            src={post.img}
            alt={post.alt}
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy/92" />

          {/* Back button — absolute, separated from content flow */}
          <div className="relative mx-auto max-w-[860px] px-6 md:px-10 pt-[108px]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-[11px] tracking-[0.18em] font-semibold uppercase transition-colors focus-gold rounded-sm group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5">
                <path d="M19 12H5m5-7-7 7 7 7" />
              </svg>
              Voltar
            </Link>
          </div>

          {/* Hero content */}
          <div className="relative mx-auto max-w-[860px] px-6 md:px-10 pt-10 pb-16 md:pb-20">

            {/* Tag + meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-gold/20 text-gold text-[10px] tracking-[0.2em] font-semibold px-3 h-6 leading-6 border border-gold/30 rounded-full">
                {post.tag.toUpperCase()}
              </span>
              <span aria-hidden className="w-px h-3 bg-white/20" />
              <span className="text-white/40 text-[12px] tracking-wider">{post.date}</span>
              <span aria-hidden className="w-px h-3 bg-white/20" />
              <span className="text-white/40 text-[12px] tracking-wider">{post.readTime} de leitura</span>
            </div>

            <h1 className="font-display text-[#F1E7D2] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-medium max-w-[18ch]">
              {post.title}
            </h1>
          </div>
        </div>

        {/* ── Article body ── */}
        <article className="mx-auto max-w-[680px] px-6 md:px-8 pt-14 pb-20">

          {/* Lead / excerpt */}
          <p className="font-display italic text-navy/55 text-[1.2rem] leading-[1.65] border-l-[3px] border-gold/50 pl-5 mb-2">
            {post.excerpt}
          </p>

          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {/* ── Divider ── */}
        <div className="mx-auto max-w-[680px] px-6 md:px-8">
          <div className="flex items-center gap-4">
            <span className="flex-1 h-px bg-navy/8" />
            <Icon name="anchor" className="w-4 h-4 text-gold/40" stroke={1.4} />
            <span className="flex-1 h-px bg-navy/8" />
          </div>
        </div>

        {/* ── Related articles ── */}
        <section className="mx-auto max-w-[860px] px-6 md:px-10 py-16 md:py-20">
          <p className="text-gold text-[10.5px] tracking-[0.25em] font-semibold uppercase mb-8">
            Continue lendo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group flex flex-col bg-white rounded-ds overflow-hidden ring-1 ring-navy/[0.06] shadow-[0_2px_0_rgba(11,29,51,0.04),0_12px_28px_-12px_rgba(11,29,51,0.12)] hover:-translate-y-0.5 transition-transform duration-300 focus-gold"
              >
                <div className="relative aspect-[16/7] overflow-hidden bg-sand/30">
                  <img
                    src={rel.img}
                    alt={rel.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-gold text-[9px] tracking-[0.2em] font-semibold px-2.5 h-[20px] flex items-center border border-gold/20">
                    {rel.tag.toUpperCase()}
                  </span>
                </div>
                <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
                  <h3 className="font-display text-navy text-[1.15rem] leading-snug group-hover:text-ocean transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-navy/35 text-[11px] tracking-wider">{rel.readTime} de leitura</span>
                    <span className="inline-flex items-center gap-1 text-gold/70 group-hover:text-gold text-[10.5px] font-semibold tracking-[0.15em] uppercase transition-colors">
                      Ler
                      <span className="inline-block transition-transform group-hover:translate-x-0.5">
                        <Icon name="arrow-right" className="w-3 h-3" stroke={1.9} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
