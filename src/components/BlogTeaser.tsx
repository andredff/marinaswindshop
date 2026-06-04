import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'
import { BLOG_POSTS } from '../data/blogPosts'

export default function BlogTeaser() {
  return (
    <section id="blog" className="bg-[#F5F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-8 lg:px-14">

        {/* Editorial header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-10 border-b border-navy/[0.08] mb-14">
            <div>
              <p className="text-gold text-[10.5px] tracking-[0.28em] font-medium uppercase">
                Conteúdo Náutico
              </p>
              <h2 className="mt-4 font-display text-navy text-[clamp(2.4rem,5vw,4rem)] leading-[0.97]">
                Navegue com mais<br className="hidden sm:block" /> conhecimento.
              </h2>
            </div>
            <Link
              to="/blog"
              className="group shrink-0 inline-flex items-center gap-2 text-navy/40 hover:text-gold text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors focus-gold rounded-sm"
            >
              Ver todos os artigos
              <span className="inline-block transition-transform group-hover:translate-x-1">
                <Icon name="arrow-right" className="w-3.5 h-3.5" stroke={1.8} />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Cards — editorial "no-box" style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group relative flex flex-col h-full focus-gold rounded-sm"
              >
                {/* Decorative index number */}
                <span
                  aria-hidden
                  className="pointer-events-none select-none absolute -top-3 right-0 font-display font-bold text-[6rem] leading-none text-navy/[0.04] z-0"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Image */}
                <div className="relative z-[1] overflow-hidden ring-1 ring-navy/10 mb-6">
                  <div className="aspect-[3/2] overflow-hidden bg-sand/40">
                    <img
                      src={post.img}
                      alt={post.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="absolute top-3 left-3 bg-navy/80 backdrop-blur-sm text-gold text-[9.5px] tracking-[0.2em] font-semibold px-2.5 h-[22px] flex items-center border border-gold/25">
                    {post.tag.toUpperCase()}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 z-[1]">
                  <h3 className="font-display text-navy text-[clamp(1.15rem,1.8vw,1.45rem)] leading-[1.25] group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-navy/50 text-[13px] leading-[1.7] line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-navy/[0.07]">
                    <span className="text-navy/30 text-[10.5px] tracking-wider font-medium">
                      {post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gold/70 group-hover:text-gold text-[10.5px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300">
                      Ler artigo
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        <Icon name="arrow-right" className="w-3 h-3" stroke={1.9} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
