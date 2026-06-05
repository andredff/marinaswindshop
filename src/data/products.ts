export interface ProductCategory {
  slug: string
  label: string
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { slug: 'motores',    label: 'Motores & Peças' },
  { slug: 'vela',       label: 'Vela & Ferragens' },
  { slug: 'salvatagem', label: 'Salvatagem' },
  { slug: 'botes',      label: 'Botes e Caiaques' },
  { slug: 'moda',       label: 'Moda Náutica' },
]

export interface Product {
  id: string
  title: string
  /** Price in BRL (Reais). */
  price: number
  category: ProductCategory['slug']
  brand?: string
  img: string
  alt: string
  desc: string
  /** Optional original price for a "from / to" discount display. */
  oldPrice?: number
}

export const PRODUCTS: Product[] = [
  // ── Motores & Peças ──────────────────────────────────────
  {
    id: 'motor-yanmar-3ym30',
    title: 'Motor Yanmar 3YM30 — 29 HP',
    price: 64900,
    category: 'motores',
    brand: 'Yanmar',
    img: '/assets/categories/engine.png',
    alt: 'Motor náutico Yanmar 3YM30',
    desc: 'Motor diesel marítimo de 3 cilindros, ideal para veleiros de até 36 pés. Confiável e econômico.',
  },
  {
    id: 'kit-impelidor-suzuki',
    title: 'Kit Impelidor (Rotor) Suzuki DF',
    price: 289.9,
    oldPrice: 349.9,
    category: 'motores',
    brand: 'Suzuki',
    img: '/assets/categories/engine.png',
    alt: 'Kit impelidor para motor Suzuki',
    desc: 'Rotor de borracha original para refrigeração. Troca recomendada a cada 200 horas de uso.',
  },
  {
    id: 'oleo-mercury-25w40',
    title: 'Óleo Mercury 4T 25W-40 — 1L',
    price: 89.9,
    category: 'motores',
    brand: 'Mercury',
    img: '/assets/categories/engine.png',
    alt: 'Óleo lubrificante Mercury 25W-40',
    desc: 'Lubrificante sintético para motores de popa 4 tempos. Máxima proteção em ambiente salino.',
  },
  {
    id: 'helice-inox-mercury',
    title: 'Hélice de Inox Mercury 3 Pás',
    price: 1890,
    category: 'motores',
    brand: 'Mercury',
    img: '/assets/categories/engine.png',
    alt: 'Hélice de aço inox Mercury',
    desc: 'Hélice em aço inoxidável de alto desempenho. Mais velocidade e melhor resposta de aceleração.',
  },

  // ── Vela & Ferragens ─────────────────────────────────────
  {
    id: 'moitao-nautos-57',
    title: 'Moitão Nautos 57mm com Mordedor',
    price: 459.9,
    category: 'vela',
    brand: 'Nautos',
    img: '/assets/categories/pulley.png',
    alt: 'Moitão Nautos com mordedor',
    desc: 'Moitão de roldana única com mordedor integrado. Rolamento de esferas para mínimo atrito.',
  },
  {
    id: 'cabo-escota-10mm',
    title: 'Cabo de Escota Dyneema 10mm (m)',
    price: 39.9,
    category: 'vela',
    img: '/assets/categories/pulley.png',
    alt: 'Cabo de escota em Dyneema',
    desc: 'Cabo trançado de baixa elongação, alta resistência e ótimo toque. Vendido por metro.',
  },
  {
    id: 'mordedor-velo-clutch',
    title: 'Mordedor V.elo Clutch Simples',
    price: 329,
    category: 'vela',
    brand: 'V.elo',
    img: '/assets/categories/pulley.png',
    alt: 'Mordedor clutch V.elo',
    desc: 'Trava de cabo com acionamento suave para cabos de 8 a 12mm. Construção em alumínio anodizado.',
  },

  // ── Salvatagem ───────────────────────────────────────────
  {
    id: 'colete-classe-v',
    title: 'Colete Salva-Vidas Classe V',
    price: 149.9,
    category: 'salvatagem',
    img: '/assets/categories/vest.png',
    alt: 'Colete salva-vidas náutico classe V',
    desc: 'Colete homologado pela Marinha do Brasil. Conforto e flutuabilidade para esportes náuticos.',
  },
  {
    id: 'colete-insuflavel-auto',
    title: 'Colete Insuflável Automático 150N',
    price: 689,
    category: 'salvatagem',
    img: '/assets/categories/vest.png',
    alt: 'Colete insuflável automático',
    desc: 'Acionamento automático ao contato com a água. Leve e discreto, ideal para velejadores.',
  },
  {
    id: 'kit-sinalizacao',
    title: 'Kit de Sinalização Náutica',
    price: 219.9,
    category: 'salvatagem',
    img: '/assets/categories/vest.png',
    alt: 'Kit de sinalização náutica',
    desc: 'Apito, espelho de sinalização e bastões luminosos. Item essencial de segurança a bordo.',
  },

  // ── Botes e Caiaques ─────────────────────────────────────
  {
    id: 'bote-inflavel-280',
    title: 'Bote Inflável 2,80m — 4 Pessoas',
    price: 4290,
    oldPrice: 4790,
    category: 'botes',
    img: '/assets/categories/boat.png',
    alt: 'Bote inflável para 4 pessoas',
    desc: 'Casco em PVC reforçado com piso inflável. Acompanha remos, bomba e bolsa de transporte.',
  },
  {
    id: 'caiaque-pesca-single',
    title: 'Caiaque de Pesca Individual',
    price: 2390,
    category: 'botes',
    img: '/assets/categories/boat.png',
    alt: 'Caiaque de pesca individual',
    desc: 'Caiaque estável com suportes para vara e compartimentos secos. Perfeito para lazer e pesca.',
  },

  // ── Moda Náutica ─────────────────────────────────────────
  {
    id: 'camiseta-uv-osklen',
    title: 'Camiseta UV Proteção Solar',
    price: 159.9,
    category: 'moda',
    brand: 'Osklen',
    img: '/assets/categories/apparel.png',
    alt: 'Camiseta com proteção UV',
    desc: 'Tecido leve com fator de proteção UPF 50+. Secagem rápida e caimento confortável.',
  },
  {
    id: 'bone-nautico',
    title: 'Boné Náutico com Proteção',
    price: 89.9,
    category: 'moda',
    img: '/assets/categories/apparel.png',
    alt: 'Boné náutico',
    desc: 'Boné com aba estendida e cordão de fixação. Estilo e proteção para os dias no mar.',
  },
]

/** Format a number as Brazilian Reais, e.g. 1890 → "R$ 1.890,00". */
export function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
