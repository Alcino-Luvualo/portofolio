# 💼 Portfólio Pessoal - Alcino Luvualo

Um portfólio moderno e responsivo desenvolvido com React e TypeScript, apresentando projetos, habilidades e recomendações profissionais.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Funcionalidades](#-funcionalidades)
- [Autor](#-autor)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

Este é um portfólio pessoal desenvolvido para apresentar de forma profissional os projetos, habilidades e experiência de Alcino Luvualo como Software Developer. O site foi construído com foco em performance, responsividade e uma experiência de usuário moderna e intuitiva.

### ✨ Destaques

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Totalmente Responsivo**: Adaptável a todos os dispositivos (mobile, tablet, desktop)
- **Multilíngue**: Suporte para Inglês e Português
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **TypeScript**: Código type-safe e mais manutenível
- **Acessibilidade**: Componentes semânticos e navegação por teclado

## 🚀 Características

### Seções Principais

- **Hero Section**: Apresentação com efeito typewriter e links para redes sociais
- **Skills**: Showcase de habilidades técnicas com ícones e descrições
- **Projects**: Galeria de projetos em destaque com links para deploy e código
- **Recommendations**: Depoimentos e recomendações profissionais
- **Footer**: Informações de contato e créditos

### Funcionalidades Especiais

- 🌐 **Sistema Multilíngue**: Alternância entre Inglês e Português
- ✍️ **Efeito Typewriter**: Animação de digitação no nome
- 🎨 **Animações Suaves**: Transições e efeitos hover em todos os componentes
- 📱 **Design Responsivo**: Layout adaptável para qualquer tamanho de tela
- ⚡ **Performance**: Carregamento rápido e otimizado

## 🛠 Tecnologias Utilizadas

### Core
- **React** 19.2.0 - Biblioteca JavaScript para construção de interfaces
- **TypeScript** 5.9.3 - Superset JavaScript com tipagem estática
- **Vite** 7.2.2 (rolldown-vite) - Build tool e dev server ultra-rápido

### Estilização
- **Tailwind CSS** 4.1.17 - Framework CSS utility-first
- **PostCSS** 8.5.6 - Processador CSS
- **Autoprefixer** 10.4.22 - Adiciona prefixos de vendor automaticamente

### Bibliotecas
- **Lucide React** 0.553.0 - Ícones modernos e customizáveis
- **Typewriter Effect** 2.22.0 - Efeito de digitação animado

### Ferramentas de Desenvolvimento
- **ESLint** 9.39.1 - Linter para JavaScript/TypeScript
- **TypeScript ESLint** 8.46.3 - Regras ESLint específicas para TypeScript

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**

Para verificar se você tem o Node.js instalado:

```bash
node --version
npm --version
```

## 🔧 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Alcino-Luvualo/portofolio.git
```

2. **Navegue até o diretório do projeto**

```bash
cd portofolio
```

3. **Instale as dependências**

```bash
npm install
```

ou

```bash
yarn install
```

ou

```bash
pnpm install
```

## 🎮 Uso

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta se 5173 estiver ocupada).

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Linting

Para verificar o código com ESLint:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
portofolio/
├── public/                 # Arquivos estáticos
│   ├── *.webp             # Imagens dos projetos
│   └── vite.svg           # Favicon
├── src/
│   ├── assets/            # Recursos do projeto
│   ├── components/        # Componentes React
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── recommendations.tsx
│   │   └── skills.tsx
│   ├── contexts/          # Contextos React
│   │   └── LanguageContext.tsx
│   ├── App.tsx            # Componente principal
│   ├── App.css            # Estilos globais do App
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── .eslint.config.js      # Configuração ESLint
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── postcss.config.js      # Configuração PostCSS
├── tailwind.config.js     # Configuração Tailwind CSS
├── tsconfig.json          # Configuração TypeScript
├── tsconfig.app.json      # Config TypeScript para app
├── tsconfig.node.json     # Config TypeScript para Node
└── vite.config.ts         # Configuração Vite
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria uma build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

## 🎨 Funcionalidades Detalhadas

### Sistema Multilíngue

O projeto inclui um sistema completo de internacionalização (i18n) que permite alternar entre Inglês e Português. As traduções são gerenciadas através do `LanguageContext`.

### Componentes Principais

- **Header**: Navegação fixa com links para seções e seletor de idioma
- **Hero**: Seção de apresentação com efeito typewriter e links sociais
- **Skills**: Grid responsivo de habilidades técnicas
- **Projects**: Cards de projetos com imagens, descrições e links
- **Recommendations**: Depoimentos de clientes/colegas
- **Footer**: Rodapé com informações de contato

### Animações e Efeitos

- Animações de entrada (`slide-up`, `fade-in`)
- Efeitos hover em cards e botões
- Transições suaves entre estados
- Efeito typewriter no nome

## 👨‍💻 Autor

**Alcino Luvualo**

- LinkedIn: [@alcino-luvualo](https://linkedin.com/in/alcino-luvualo)
- GitHub: [@Alcino-Luvualo](https://github.com/Alcino-Luvualo)
- Twitter/X: [@alcinodev](https://x.com/alcinodev)

## 📄 Licença

Este projeto é privado e de uso pessoal. Todos os direitos reservados.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
