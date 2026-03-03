# 🎰 Gerador de Palpites Mega-Sena

Aplicativo React com TypeScript para gerar sugestões automáticas de apostas da Mega-Sena.

## 📋 Descrição

Este projeto é uma aplicação web completa que permite aos usuários:
- Gerar combinações aleatórias de 6 números (1-60) para apostas da Mega-Sena
- Salvar palpites favoritos
- Visualizar histórico de palpites salvos
- Navegação intuitiva entre páginas

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **React Router v6** - Gerenciamento de rotas
- **React Context API** - Gerenciamento de estado global
- **CSS3** - Estilização com gradientes e animações

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── BetNumbers.tsx       # Componente para exibir os números
│   ├── BetNumbers.css
│   ├── Navigation.tsx       # Links de navegação
│   └── Navigation.css
├── pages/
│   ├── Home.tsx             # Página inicial
│   ├── Home.css
│   ├── Suggestion.tsx       # Página de sugestão de aposta
│   ├── Suggestion.css
│   ├── History.tsx          # Página de histórico
│   └── History.css
├── context/
│   └── BetContext.tsx       # Context API para gerenciar estado
├── types/
│   └── index.ts             # Interfaces e tipos TypeScript
├── utils/
│   └── betGenerator.ts      # Função de geração de números
├── App.tsx                  # Componente principal com rotas
├── App.css
├── index.tsx                # Ponto de entrada
└── index.css
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Instalar dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

3. **Acessar a aplicação:**
- Abra o navegador em `http://localhost:3000`

## 🎯 Funcionalidades

### Página Home (/)
- Apresentação do aplicativo
- Botão "Clique para começar" → redireciona para `/palpite`
- Links de navegação para Palpite e Histórico
- Seção informativa sobre como usar o app

### Página de Sugestão (/palpite)
- **Geração automática:** Ao carregar, gera automaticamente 6 números
- **Botão "Nova sugestão":** Gera nova combinação
- **Botão "Salvar Palpite":** Salva no histórico e redireciona
- Números exibidos em "bolas" estilizadas
- Validação: números únicos entre 1-60, ordenados

### Página de Histórico (/historico)
- Lista todos os palpites salvos
- Exibe data/hora de cada palpite
- Contador de palpites salvos
- Botão "Limpar Histórico" com confirmação
- Estado vazio com mensagem amigável

## 🔧 Implementações Técnicas

### React Hooks Utilizados
- **useState:** Gerenciamento de estado local
- **useEffect:** Geração automática de palpites ao montar componente
- **useContext:** Acesso ao contexto de apostas
- **useNavigate:** Navegação programática

### Context API
- **BetContext:** Provê estado global para a aplicação
  - `bets`: Lista de palpites salvos
  - `addBet()`: Adiciona novo palpite
  - `clearHistory()`: Limpa histórico

### TypeScript
- Interfaces tipadas para Bet e BetContext
- Props tipadas em componentes
- Funções utilitárias com tipos definidos

### Geração de Números
```typescript
generateRandomBet(): number[]
- Gera 6 números únicos entre 1-60
- Utiliza Set para garantir unicidade
- Retorna array ordenado crescentemente
```

## 🎨 Estilização

- **Gradientes:** Background com cores vibrantes
- **Animações:** Fade-in nas bolas, hover effects
- **Responsivo:** Layout adaptável para mobile
- **Visual:** Bolas com efeito 3D simulando sorteio oficial

## ✅ Critérios Atendidos

- ✅ Configuração correta das rotas com React Router
- ✅ Implementação do React Context para compartilhamento de dados
- ✅ Uso adequado do useEffect para geração automática
- ✅ Funcionalidade completa de geração de números aleatórios
- ✅ Página de abertura com navegação funcional
- ✅ Página de sugestão com geração automática e botão "Nova sugestão"
- ✅ Página de histórico funcionando corretamente
- ✅ Tipagem TypeScript em toda a aplicação
- ✅ Estilização adequada com CSS modular

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa testes
- `npm eject` - Ejeta configuração do CRA (irreversível)

## 🤝 Contribuindo

Este é um projeto educacional. Sugestões e melhorias são bem-vindas!

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ usando React + TypeScript**
