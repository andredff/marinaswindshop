interface IconProps {
  name: string
  className?: string
  stroke?: number
}

export default function Icon({ name, className = 'w-5 h-5', stroke = 1.6 }: IconProps) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }

  switch (name) {
    case 'search':
      return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    case 'user':
      return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>
    case 'heart':
      return <svg {...common}><path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"/></svg>
    case 'cart':
      return <svg {...common}><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19.11 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.64-1.03-5.13-2.83-7.01Zm-7.07 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.21 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.57.2-1.06.14-1.17-.06-.11-.22-.18-.47-.31Z"/>
        </svg>
      )
    case 'pin':
      return <svg {...common}><path d="M12 22s-7-6.16-7-12a7 7 0 1 1 14 0c0 5.84-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
    case 'anchor':
      return <svg {...common}><circle cx="12" cy="5" r="2"/><path d="M12 7v15"/><path d="M5 13a7 7 0 0 0 14 0"/><path d="M8 11H5m14 0h-3"/></svg>
    case 'sailboat':
      return <svg {...common}><path d="M12 3 5 16h14L12 3Z"/><path d="M3 19c2 1.2 4 1.2 6 0s4-1.2 6 0 4 1.2 6 0"/></svg>
    case 'shield':
      return <svg {...common}><path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z"/></svg>
    case 'shirt':
      return <svg {...common}><path d="M7 4 4 7l2 3 2-1v11h8V9l2 1 2-3-3-3-3 1a3 3 0 0 1-6 0L7 4Z"/></svg>
    case 'arrow-right':
      return <svg {...common}><path d="M5 12h14m-5-5 5 5-5 5"/></svg>
    case 'headset':
      return <svg {...common}><path d="M4 13v-1a8 8 0 1 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1"/><rect x="17" y="13" width="4" height="6" rx="1"/><path d="M20 19v1a3 3 0 0 1-3 3h-3"/></svg>
    case 'wrench':
      return <svg {...common}><path d="M14.7 6.3a4 4 0 0 1 5 5l-2.6-1-1.7 1.7 1 2.6a4 4 0 0 1-5-5L9.7 11l-5.4 5.4a2 2 0 1 0 2.8 2.8L12.5 14l-1-2.6 1.7-1.7 2.6 1Z"/></svg>
    case 'gears':
      return (
        <svg {...common}>
          <circle cx="9" cy="10" r="3"/>
          <path d="M9 4v1.5M9 14.5V16M3.6 7l1.3.7M13.1 12.3l1.3.7M3.6 13l1.3-.7M13.1 7.7l1.3-.7"/>
          <circle cx="16" cy="16" r="2.3"/>
          <path d="M16 12.4v1.3M16 18.3v1.3M12.4 16h1.3M18.3 16h1.3M13.5 13.5l.9.9M17.6 17.6l.9.9M13.5 18.5l.9-.9M17.6 14.4l.9-.9"/>
        </svg>
      )
    case 'badge':
      return (
        <svg {...common}>
          <path d="M12 3 14 5l2.8-.4.4 2.8L20 9l-1.2 2.6L20 14.2l-2.8 1.2-.4 2.8L14 17.7 12 20l-2-2.3-2.8.5-.4-2.8L4 14.2l1.2-2.6L4 9l2.8-1.6.4-2.8L10 5l2-2Z"/>
          <path d="m9.5 11.5 2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'consult':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="3.2"/>
          <path d="M5 21c1-4 4-6 7-6s6 2 7 6"/>
          <path d="M8.5 8.5a3.5 3.5 0 0 1 7 0" strokeLinecap="round"/>
        </svg>
      )
    case 'phone':
      return <svg {...common}><path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    case 'instagram':
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/></svg>
    case 'facebook':
      return <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.5 22v-8h2.7l.4-3.2H13.5V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4A23 23 0 0 0 14.3 4c-2.5 0-4.2 1.5-4.2 4.3v2.5H7.4V14h2.7v8h3.4Z"/></svg>
    case 'sail':
      return (
        <svg viewBox="0 0 32 40" fill="none" className={className}>
          <path d="M16 4 L8 28 H24 Z" fill="#38B7C6"/>
          <path d="M16 4 V28" stroke="#0B1D33" strokeWidth="1.2"/>
          <path d="M4 32 H28 L25 36 H7 Z" fill="#38B7C6"/>
        </svg>
      )
    default:
      return null
  }
}
