import { useState, useEffect } from 'react'
import Icon from './Icon'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <a
      href="https://wa.me/5581999957001"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="float-in fixed bottom-6 right-6 z-50 flex items-center gap-3 focus-gold rounded-full"
    >
      {/* Tooltip label */}
      <span
        className={`font-sans text-[12px] font-semibold tracking-wider-2 text-navy bg-white rounded-full px-4 h-10 flex items-center shadow-soft whitespace-nowrap transition-all duration-200 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        FALAR COM ESPECIALISTA
      </span>

      {/* Button */}
      <span className="wa-pulse grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-200">
        <Icon name="whatsapp" className="w-6 h-6" />
      </span>
    </a>
  )
}
