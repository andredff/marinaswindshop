export type ContentBlock =
  | { type: 'p';    text: string }
  | { type: 'h2';   text: string }
  | { type: 'h3';   text: string }
  | { type: 'ul';   items: string[] }
  | { type: 'tip';  text: string }
  | { type: 'cta';  label: string; href: string }

export interface BlogPost {
  slug: string
  tag: string
  title: string
  excerpt: string
  img: string
  alt: string
  readTime: string
  date: string
  content: ContentBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-escolher-motor-de-popa',
    tag: 'Motores',
    title: 'Como escolher o motor de popa ideal para sua embarcação?',
    excerpt:
      'Potência, consumo, marca e manutenção — os critérios que realmente importam antes de comprar um motor de popa.',
    img: '/assets/categories/engine.png',
    alt: 'Motor de popa náutico Yanmar',
    readTime: '5 min',
    date: '28 mai. 2026',
    content: [
      {
        type: 'p',
        text: 'A escolha de um motor de popa envolve muito mais do que comparar potência e preço no catálogo. Envolve entender o tipo de uso, o peso da embarcação, as condições do mar onde você navega e a disponibilidade de assistência técnica na sua região. Errar nessa escolha custa caro — tanto no bolso quanto na segurança.',
      },
      {
        type: 'h2',
        text: 'Potência certa para cada embarcação',
      },
      {
        type: 'p',
        text: 'A regra básica é: consulte a placa de identificação do casco e as recomendações do fabricante. De forma geral, um bote inflável de lazer de 3 metros comporta entre 5 e 20 HP; uma lancha de alumínio de 5 metros pode precisar de 40 a 90 HP. Motor subdimensionado sobrecarrega o equipamento e compromete a segurança. Motor superdimensionado desperdiça combustível e gera instabilidade no planing.',
      },
      {
        type: 'tip',
        text: 'Regra prática: some o peso do casco, carga máxima e tripulação. Para cada 45 kg, você precisa de aproximadamente 1 HP — mas valide sempre com o fabricante do casco.',
      },
      {
        type: 'h2',
        text: 'Marcas que fazem diferença',
      },
      {
        type: 'p',
        text: 'No mercado náutico brasileiro, três marcas se destacam pela confiabilidade e disponibilidade de peças: Yamaha, Suzuki e Mercury. Para embarcações de maior porte com motor de centro, a Yanmar é referência mundial em motores diesel marítimos — com décadas de presença nas marinhas comerciais e de recreio.',
      },
      {
        type: 'p',
        text: 'Na Marinas Wind Shop, trabalhamos com Suzuki, Mercury e somos revendedores autorizados Yanmar. Isso garante peças originais, assistência técnica e orientação de quem realmente conhece esses motores em campo.',
      },
      {
        type: 'h2',
        text: 'Os tipos de motor e quando usar cada um',
      },
      {
        type: 'ul',
        items: [
          'Motor de popa (outboard): fixado externamente na popa. Versátil, fácil de manter e substituir. Ideal para embarcações de lazer e pesca.',
          'Motor de centro (inboard): instalado internamente. Mais estável em mares agitados. Recomendado para lanchas e veleiros de médio e grande porte.',
          'Motor elétrico: silencioso, ideal para pesca em áreas de restrição de ruído e para uso ecológico. Ótimo para botes e caiaques motorizados.',
        ],
      },
      {
        type: 'h2',
        text: 'Manutenção: o que define a vida útil do motor',
      },
      {
        type: 'p',
        text: 'Um motor bem mantido pode durar décadas. A manutenção preventiva não é opcional — é o que separa um motor que dura 20 anos de um que dura 5. Itens essenciais: troca do ânodo de zinco (proteção anticorrosão), revisão do impeller da bomba d\'água, troca de óleo do câmbio, verificação dos cabos de ignição e limpeza dos filtros de combustível.',
      },
      {
        type: 'tip',
        text: 'Após cada uso em água salgada, lave o motor com água doce pela saída de refrigeração. Esse hábito simples evita corrosão interna e prolonga muito a vida útil.',
      },
      {
        type: 'h2',
        text: 'Antes de comprar, fale com quem entende',
      },
      {
        type: 'p',
        text: 'O erro mais comum é comprar pela especificação técnica sem ouvir quem tem experiência prática. Na Wind Shop, nossa equipe pode orientar a escolha certa para o seu casco, uso e orçamento — sem compromisso.',
      },
      {
        type: 'cta',
        label: 'PEDIR ORIENTAÇÃO PELO WHATSAPP',
        href: 'https://wa.me/5581999957001',
      },
    ],
  },
  {
    slug: 'checklist-seguranca-embarcacao',
    tag: 'Segurança',
    title: 'Checklist de segurança antes de sair com a embarcação.',
    excerpt:
      'Colete salva-vidas, sinalização, documentação e estado do motor. Confira o que verificar antes de cada saída no mar.',
    img: '/assets/categories/vest.png',
    alt: 'Colete salva-vidas náutico homologado',
    readTime: '4 min',
    date: '15 mai. 2026',
    content: [
      {
        type: 'p',
        text: 'O mar é imprevisível. Um clima que parece calmo às 9h pode mudar completamente às 14h no litoral de Pernambuco. Uma embarcação mal revisada pode ser um risco real para a tripulação e para terceiros. O checklist antes de sair não é burocracia — é parte da cultura náutica responsável.',
      },
      {
        type: 'h2',
        text: '1. Equipamentos de salvatagem',
      },
      {
        type: 'p',
        text: 'Este é o item mais crítico. Sem ele, os demais perdem o sentido.',
      },
      {
        type: 'ul',
        items: [
          'Coletes salva-vidas homologados pela Marinha para cada tripulante',
          'Aro salva-vidas com linha de retorno (obrigatório para embarcações com mais de 8 pessoas)',
          'Boia de socorro ou boia ferradura',
          'Espiote ou corda de reboque de pelo menos 15 metros',
        ],
      },
      {
        type: 'tip',
        text: 'Colete barato pode não manter a cabeça do praticante fora d\'água após perda de consciência. Invista em equipamento certificado — é o que pode salvar uma vida.',
      },
      {
        type: 'h2',
        text: '2. Sinalização e comunicação',
      },
      {
        type: 'ul',
        items: [
          'Luzes de navegação em funcionamento (obrigatório para navegação noturna)',
          'Sinalizadores visuais: fumígenos, foguetes ou espelhos de sinalização',
          'Rádio VHF marítimo ou celular carregado com números de emergência',
          'Carta náutica ou aplicativo náutico com mapa offline da região',
        ],
      },
      {
        type: 'h2',
        text: '3. Documentação obrigatória',
      },
      {
        type: 'ul',
        items: [
          'PROA (registro simplificado) ou inscrição na Capitania dos Portos',
          'Habilitação náutica conforme o tipo e porte da embarcação',
          'Licença de rádio (se houver VHF a bordo)',
          'Seguro obrigatório (quando exigível)',
        ],
      },
      {
        type: 'h2',
        text: '4. Verificação estrutural e mecânica',
      },
      {
        type: 'ul',
        items: [
          'Nível de combustível + reserva para o dobro da distância prevista',
          'Estado do casco: rachaduras, infiltrações e drenos limpos',
          'Motor em ponto morto antes de sair: temperatura, pressão de óleo, bomba d\'água',
          'Bateria carregada + fusíveis e conexões elétricas em bom estado',
        ],
      },
      {
        type: 'h2',
        text: '5. Condições meteorológicas',
      },
      {
        type: 'p',
        text: 'Nunca saia sem consultar a previsão para as próximas 12 horas. No litoral de Pernambuco, os ventos alísios podem intensificar rapidamente à tarde, especialmente entre novembro e março. Aplicativos como Windy e Windguru são aliados indispensáveis.',
      },
      {
        type: 'h2',
        text: 'Equipamento certo: a diferença entre segurança real e a aparência dela',
      },
      {
        type: 'p',
        text: 'Na Marinas Wind Shop, trabalhamos com equipamentos de salvatagem homologados e de marcas confiáveis. Nossa equipe pode ajudar a montar o kit de segurança correto para o seu tipo de embarcação e uso.',
      },
      {
        type: 'cta',
        label: 'VER EQUIPAMENTOS DE SALVATAGEM',
        href: 'https://wa.me/5581999957001',
      },
    ],
  },
  {
    slug: 'moda-nautica-conforto-protecao-estilo',
    tag: 'Lifestyle',
    title: 'Moda náutica: conforto, proteção e estilo para o mar.',
    excerpt:
      'Como escolher roupas e acessórios que unem funcionalidade, proteção UV e estética para a vida na marina e no mar.',
    img: '/assets/categories/apparel.png',
    alt: 'Moda náutica polos e boné',
    readTime: '4 min',
    date: '05 mai. 2026',
    content: [
      {
        type: 'p',
        text: 'Quem vive o mar sabe: a roupa certa faz diferença real. Proteção solar, resistência à maresia, secagem rápida e liberdade de movimento são requisitos de quem passa horas no convés, na marina ou na beira d\'água. Moda náutica não é só estética — é funcionalidade.',
      },
      {
        type: 'h2',
        text: 'O tecido certo para o ambiente marítimo',
      },
      {
        type: 'p',
        text: 'Tecidos sintéticos como poliamida e poliéster com tratamento UPF são os mais indicados para uso no mar. Eles resistem à maresia, secam rapidamente e não desbotam com a exposição prolongada ao sal e ao sol. Algodão, apesar de confortável, absorve água, pesa quando molhado e demora a secar — não é a melhor escolha para uma jornada náutica.',
      },
      {
        type: 'h2',
        text: 'Proteção solar como parte do look',
      },
      {
        type: 'p',
        text: 'A proteção UV na roupa é medida pelo UPF (Ultraviolet Protection Factor). Para quem passa o dia no mar, uma camisa manga longa com UPF 50+ é muito mais eficiente do que reaplicar protetor solar a cada 2 horas.',
      },
      {
        type: 'ul',
        items: [
          'UPF 15–24: proteção mínima',
          'UPF 25–39: proteção boa',
          'UPF 40–50+: proteção excelente — recomendado para uso náutico',
        ],
      },
      {
        type: 'tip',
        text: 'Tecidos escuros e de trama fechada oferecem proteção UV naturalmente maior, mesmo sem tratamento específico.',
      },
      {
        type: 'h2',
        text: 'O estilo que veio do mar e ficou na cidade',
      },
      {
        type: 'p',
        text: 'A estética náutica tem muito mais personalidade do que a âncora estampada na camiseta genérica. Listras marinières, tons de branco espuma, navy e bege areia, cortes clean e detalhes em dourado ou cobre são o DNA de marcas como Osklen — uma das marcas que representamos aqui na Wind Shop.',
      },
      {
        type: 'p',
        text: 'Esse visual transita naturalmente entre a marina, o restaurante à beira-mar e a cidade. É o lifestyle que não exige que você explique de onde veio.',
      },
      {
        type: 'h2',
        text: 'Calçados: dentro e fora da embarcação',
      },
      {
        type: 'p',
        text: 'No convés, o calçado precisa ter sola antiderrapante, resistência à água e boa aderência em superfícies molhadas. Fora da embarcação, o sapato náutico clássico e a sapatilha de vela são ícones que transitam bem entre a marina e o cotidiano.',
      },
      {
        type: 'h2',
        text: 'Nossa curadoria de lifestyle náutico',
      },
      {
        type: 'p',
        text: 'Na Marinas Wind Shop, selecionamos marcas e produtos que unem autenticidade náutica com qualidade real. Venha conhecer nossa seleção na loja dentro do Novotel Recife Marina ou fale com nossa equipe para orientação.',
      },
      {
        type: 'cta',
        label: 'VER MODA NÁUTICA NA LOJA',
        href: 'https://wa.me/5581999957001',
      },
    ],
  },
]
