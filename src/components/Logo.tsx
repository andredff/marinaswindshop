import Icon from './Icon'

interface LogoProps {
  size?: 'md' | 'sm'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const dim = size === 'md' ? 'w-[78px] h-[78px]' : 'w-[64px] h-[64px]'
  return (
    <a
      href="#"
      aria-label="Marinas Wind Shop — Home"
      className={`${dim} bg-navy border border-white/15 flex flex-col items-center justify-center leading-none select-none`}
    >
      <Icon name="sail" className="w-5 h-6 mb-1" />
      <span className="font-display text-white text-[11px] font-semibold tracking-wider-2">WIND</span>
      <span className="font-display text-white text-[11px] font-semibold tracking-wider-2">SHOP</span>
      <span className="font-sans text-aqua text-[7px] tracking-wider-3 mt-0.5">MARINAS</span>
    </a>
  )
}
