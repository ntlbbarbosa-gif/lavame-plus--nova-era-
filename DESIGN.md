---
name: Lavame Plus
description: Higienização profissional e revitalização de estofados em domicílio no Rio de Janeiro.
colors:
  primary: "#0b72d9"
  primary-deep: "#064f9e"
  secondary: "#38a91d"
  whatsapp: "#13793a"
  neutral-ink: "#10243a"
  neutral-muted: "#5f7182"
  neutral-line: "#dce6ef"
  neutral-soft: "#f5f9fc"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.7rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 850
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  card: "20px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "92px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "14px 20px"
---

# Design System: Lavame Plus

## Overview

**Creative North Star: "O Lar Aconchegante & Despreocupado"**

O sistema visual da Lavame Plus transmite a sensação acolhedora, limpa e segura de um lar onde famílias, crianças e pets convivem com total liberdade e tranquilidade. O design rejeita a frieza hospitalar ou o exagero cosmético de startups de tecnologia; sua força vem da apresentação de uma empresa real, séria e acessível, que cuida com esmero do patrimônio e da saúde de cada residência.

A composição privilegia fundos claros, respiros generosos e tipografia forte com leitura imediata. Os tons de azul e verde são aplicados com sobriedade funcional: o azul assegura estabilidade profissional e água limpa; o verde reforça vitalidade, saúde e a ponte direta de conversão via WhatsApp.

Evitam-se deliberadamente ornamentos desnecessários, neons, efeitos de glow, sombras pesadas e o uso indiscriminado de formatos cilíndricos (pills) em todos os blocos. O foco absoluto reside na transparência do serviço, na clareza das regiões atendidas e na facilidade de solicitar um orçamento instantâneo.

**Key Characteristics:**
- Fundo predominantemente claro com amplas áreas de respiro e ritmo espacial despoluído.
- Tipografia robusta (Inter) com hierarquia nítida entre títulos sólidos e corpo confortável.
- Acentos cromáticos controlados: azul para autoridade institucional e verde para saúde e WhatsApp.
- Superfícies planas e honestas, com bordas arredondadas discretas (12px a 16px) e sem sombras artificiais pesadas.
- Fluxo de conversão direto, descomplicado e livre de atritos.

## Colors

A paleta combina o frescor purificador da água com o verde de saúde e ação rápida, ancorados por neutros de alto contraste e legibilidade.

### Primary
- **Azul Hidro-Lavagem** (`#0b72d9`): Tom principal de autoridade e limpeza. Utilizado em títulos destacados, botões primários de ação institucional e destaques estruturais.
- **Azul Profundo** (`#064f9e`): Variação tonal mais densa para rodapés, contrastes em cards de chamada e estados ativos de foco.

### Secondary
- **Verde Vitalidade** (`#38a91d`): Representa saúde, higienização de ácaros/odores e selos de confiança (checkmarks e kickers informativos).
- **Verde WhatsApp** (`#20bd5c`): Cor canônica do canal principal de conversão e atendimento imediato.

### Neutral
- **Carvão Têxtil** (`#10243a`): Tinta principal para títulos e textos com contraste impecável sobre fundos claros.
- **Ardósia Média** (`#5f7182`): Neutro balanceado para parágrafos secundários, legendas e descritivos de serviços.
- **Gelo Têxtil** (`#dce6ef`): Tom sutil para divisores, bordas de cards e linhas estruturais de 1px.
- **Fundo Névoa** (`#f5f9fc`): Superfície tonal suave para intercalar seções e conferir ritmo de leitura sem ruído visual.
- **Branco Puro** (`#ffffff`): Base luminosa dos cards e da estrutura central da página.

### Named Rules
**The Restraint Rule.** Azul e verde nunca competem pelo mesmo plano visual no mesmo elemento. O azul conduz a leitura institucional; o verde é reservado para indicadores de cuidado e ações diretas de contato.

**The Clean Contrast Rule.** Qualquer texto ou número com valor informacional deve ter contraste suficiente contra seu fundo, utilizando Carvão Têxtil (`#10243a`) sobre superfícies claras, garantindo leitura instantânea sem esforço óptico.

## Typography

**Display Font:** Inter, com fallbacks do sistema (`system-ui, -apple-system, sans-serif`).  
**Body Font:** Inter, com fallbacks do sistema (`system-ui, -apple-system, sans-serif`).  
**Label/Mono Font:** Inter (com tracking expandido e peso bold).

**Character:** Moderna, limpa, objetiva e sem afetações. Transmite a solidez de uma prestadora de serviços confiável aliada à clareza editorial.

### Hierarchy
- **Display** (800, `clamp(2.6rem, 5vw, 4.7rem)`, `line-height: 1.08`, `letter-spacing: -0.04em`): Título de abertura do Hero; impacto memorável e objetivo.
- **Headline** (700, `clamp(2rem, 3.2vw, 3.2rem)`, `line-height: 1.12`, `letter-spacing: -0.03em`): Títulos de seções principais (H2).
- **Title** (700, `1.35rem`, `line-height: 1.2`): Títulos de cartões de serviço, etapas do processo e perguntas do FAQ (H3).
- **Body** (400, `1rem`, `line-height: 1.6`): Descrições de serviço, parágrafos explicativos e respostas, com limite ideal de 65–75 caracteres por linha.
- **Label** (850, `0.78rem`, `letter-spacing: 0.1em`, uppercase): Eyebrows, kickers de seção e identificadores de categoria.

### Named Rules
**The Headline Weight Rule.** Títulos de primeiro e segundo nível recebem peso marcante (700 a 800) e traçado ligeiramente compacto (-0.03em a -0.04em), transmitindo segurança e assertividade profissional sem parecer agressivo.

## Layout

O layout segue uma coluna central limpa e simétrica de até 1160px de largura com 16px a 32px de margem de segurança nas laterais. O ritmo vertical é respirado, aplicando `92px` de respiro entre seções no desktop e `68px` no mobile.

Seções de conteúdo denso ou leitura (como o FAQ e a introdução da empresa) utilizam um container estreito de no máximo `820px`, preservando o comprimento ideal de linha e evitando a dispersão do olhar.

A grade de serviços distribui-se em 3 colunas regulares no desktop, 2 no tablet e 1 no mobile. A grade de etapas do processo organiza-se em 4 blocos sequenciais numerados com linearidade clara.

### Named Rules
**The Breathing Room Rule.** Espaços em branco generosos entre blocos têm prioridade sobre divisores decorativos. O conteúdo respira com naturalidade, eliminando qualquer sensação de aglomeração visual.

## Elevation & Depth

O sistema é estritamente **flat e estruturado**. As superfícies brancas dos cards assentam-se sobre o fundo suave (`#f5f9fc`) com bordas de `1px` em tom Gelo Têxtil (`#dce6ef`). 

Não há sombras difusas volumosas nem efeitos de iluminação artificial nas caixas de conteúdo. A única elevação por sombra é utilitária, reservada para o botão flutuante de WhatsApp (`0 14px 32px rgba(0, 0, 0, 0.18)`), sinalizando de forma inequívoca que se trata de uma camada superior de ação imediata.

### Shadow Vocabulary
- **WhatsApp Floating Action** (`box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18)`): Exclusiva para o botão flutuante fixado no canto inferior da tela.

### Named Rules
**The Flat-By-Default Rule.** Superfícies de conteúdo são planas por definição. Bordas físicas sutis e camadas tonais de fundo estabelecem a separação visual; sombras decorativas sob cartões estáticos são proibidas.

## Shapes

A linguagem de formas adota cantos arredondados equilibrados e discretos (8px a 16px). Evita-se a proliferação de botões e cartões em formato cilíndrico completo ("pill"), preservando uma silhueta profissional, madura e corporativa.

O formato pill (`999px`) é admitido apenas em duas exceções pontuais: no botão flutuante de atendimento do WhatsApp e em chips pequenos de categorias/bairros.

### Named Rules
**The Measured Radius Rule.** Cartões utilizam raio de 16px a 20px; botões de formulário e inputs utilizam 12px a 14px. Esse equilíbrio mantém a cordialidade do toque residencial sem perder a seriedade de uma empresa formal.

## Components

### Buttons
- **Shape:** Cantos refinados de 12px a 14px para botões retangulares; pill (`999px`) para o botão flutuante.
- **Primary:** Fundo Azul Hidro-Lavagem (`#0b72d9`), texto Branco Puro (`#ffffff`), peso 800, padding de 12px a 24px (altura mínima 48px).
- **Hover / Focus:** Transição de 0.2s com escurecimento suave para Azul Profundo (`#064f9e`) e leve deslocamento tátil de 1px.
- **Ghost:** Fundo Branco Puro (`#ffffff`), texto Azul Profundo (`#064f9e`), borda sutil de 1px ou sem borda sobre fundos coloridos.
- **WhatsApp Floating:** Fundo Verde WhatsApp (`#20bd5c`), texto Branco Puro (`#ffffff`), cantos em pill (`999px`), padding 14px 20px com sombra utilitária.

### Cards / Containers
- **Corner Style:** 16px a 20px de raio de curvatura.
- **Background:** Branco Puro (`#ffffff`) sobre fundos suaves ou gradiente institucional fechado no bloco de orçamento.
- **Border:** Linha sólida de 1px em tom Gelo Têxtil (`#dce6ef`).
- **Internal Padding:** 24px a 28px no desktop, 20px no mobile.

### Chips (Bairros e Áreas)
- **Style:** Fundo neutro suave (`#f6f9fb`), texto Carvão Têxtil (`#10243a`), borda sutil de 1px (`#dce6ef`), cantos em pill (`999px`), padding 10px 14px.
- **Role:** Exibir os bairros atendidos como cápsulas organizadas e de rápida leitura visual.

### Inputs / Form Fields
- **Style:** Fundo translúcido ou branco, borda de 1px, cantos de 12px a 14px, altura mínima 48px, texto legível com padding horizontal de 14px.
- **Focus:** Destaque de borda em azul e anel suave de acessibilidade (`focus-visible: outline 2px solid #0b72d9`).

### Navigation
- **Style:** Barra superior fixa com leve efeito de vidro fosco (`backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.95);`), altura de 76px, borda inferior de 1px em `#dce6ef`.
- **Links:** Carvão suave (`#365066`), peso 650, transição para Azul Hidro-Lavagem no hover.

## Do's and Don'ts

### Do:
- **Do** priorizar respiros amplos e fundo claro para que o conteúdo respire com naturalidade.
- **Do** manter a tipografia em Inter com alto contraste (Carvão Têxtil `#10243a` em fundos claros).
- **Do** utilizar cantos arredondados moderados (12px a 16px) em cartões e botões, reservando pills estritamente para elementos flutuantes ou tags.
- **Do** destacar os pontos de contato do WhatsApp com a cor canônica `#20bd5c` e clareza de chamada.
- **Do** explicar com precisão o fluxo de atendimento em 4 passos (foto -> orçamento -> agendamento -> execução).

### Don't:
- **Don't** saturar a tela com sombras pesadas, brilhos neons ou efeitos glow decorativos.
- **Don't** utilizar pills circulares em todos os botões e caixas, o que diminui a percepção de seriedade da empresa.
- **Don't** aplicar gradientes multicoloridos agressivos que compitam com o texto ou gerem cansaço visual.
- **Don't** fabricar depoimentos com fotos de pessoas falsas ou inventar estatísticas não comprovadas.
- **Don't** esconder os bairros cobertos ou omitir que o serviço é realizado com agendamento em domicílio.
