# 🚀 Comandos para Executar o Projeto

## ⚡ Início Rápido (3 comandos)

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm start

# 3. Abrir no navegador
# http://localhost:3000
```

---

## 📦 Instalação Detalhada

### Opção 1: npm (Node Package Manager)
```bash
npm install
```

### Opção 2: yarn (alternativa)
```bash
yarn install
```

**Tempo estimado**: 2-5 minutos dependendo da conexão

**Dependências que serão instaladas**:
- react (18.2.0)
- react-dom (18.2.0)
- react-router-dom (6.20.0)
- typescript (5.0.0)
- react-scripts (5.0.1)
- @types/react
- @types/react-dom
- @types/node

---

## 🎯 Executar Aplicação

### Modo Desenvolvimento (com hot reload)
```bash
npm start
```

**O que acontece**:
- ✅ Compila o TypeScript
- ✅ Inicia servidor local na porta 3000
- ✅ Abre o navegador automaticamente
- ✅ Hot reload habilitado (atualiza ao salvar arquivos)

**Acesso**: http://localhost:3000

---

## 🏗️ Build para Produção

```bash
npm run build
```

**O que gera**:
- Pasta `build/` com arquivos otimizados
- JavaScript minificado
- CSS otimizado
- Assets comprimidos

**Para servir o build**:
```bash
npx serve -s build
```

---

## 🧪 Testes (opcional)

```bash
npm test
```

---

## 🔍 Verificar Instalação

### Verificar versão do Node
```bash
node --version
```
**Mínimo**: v16.0.0

### Verificar versão do npm
```bash
npm --version
```
**Mínimo**: 7.0.0

---

## 🐛 Solução de Problemas

### Erro: "node não é reconhecido"
**Solução**: Instale o Node.js de https://nodejs.org

### Erro: "Porta 3000 já está em uso"
**Solução 1**: Feche o processo usando a porta
**Solução 2**: Use outra porta:
```bash
# Windows (PowerShell)
$env:PORT=3001; npm start

# Linux/Mac
PORT=3001 npm start
```

### Erro: "Cannot find module"
**Solução**: Reinstale as dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de permissão (Linux/Mac)
```bash
sudo npm install
```

---

## 📁 Estrutura Após Instalação

```
ATIV2/
├── node_modules/        ⬅️ Criado após npm install
│   └── (milhares de arquivos)
├── public/
├── src/
├── package.json
├── package-lock.json    ⬅️ Criado após npm install
└── tsconfig.json
```

---

## 🎨 Testar Funcionalidades

### Teste 1: Página Home
1. Acesse http://localhost:3000
2. ✅ Deve ver título "Gerador de Palpites Mega-Sena"
3. ✅ Deve ter botão "Clique para começar"
4. ✅ Deve ter links de navegação

### Teste 2: Gerar Palpite
1. Clique em "Clique para começar"
2. ✅ Deve ir para /palpite
3. ✅ Deve ver 6 números automaticamente
4. ✅ Clique em "Nova sugestão"
5. ✅ Deve gerar novos números

### Teste 3: Salvar Palpite
1. Na página /palpite
2. Clique em "Salvar Palpite"
3. ✅ Deve mostrar mensagem de sucesso
4. ✅ Deve redirecionar para /historico
5. ✅ Deve ver o palpite salvo

### Teste 4: Histórico
1. Acesse /historico
2. ✅ Deve listar palpites salvos
3. ✅ Deve mostrar data/hora
4. ✅ Contador de palpites
5. ✅ Clique em "Limpar Histórico"
6. ✅ Deve pedir confirmação

---

## 🔄 Workflow Completo

```bash
# Clone ou navegue até o projeto
cd c:\Users\LAB-48\Desktop\ATIV2

# Instale dependências (primeira vez)
npm install

# Inicie o servidor
npm start

# Abrirá automaticamente no navegador
# Se não abrir, acesse manualmente: http://localhost:3000

# Para parar o servidor
# Pressione Ctrl + C no terminal
```

---

## 📊 Verificar se está funcionando

### Console do Navegador (F12)
- ✅ Não deve ter erros no console
- ✅ React DevTools deve detectar componentes

### Network (F12 → Network)
- ✅ Deve carregar bundle.js
- ✅ Status 200 OK

### React DevTools
- ✅ Deve ver componente <BetProvider>
- ✅ Deve ver componentes de páginas

---

## 🆘 Comandos Úteis

### Limpar cache
```bash
npm cache clean --force
```

### Reinstalar tudo
```bash
rm -rf node_modules package-lock.json
npm install
```

### Atualizar dependências
```bash
npm update
```

### Ver dependências instaladas
```bash
npm list --depth=0
```

---

## 🎓 Próximos Passos

1. ✅ `npm install` - Instalar dependências
2. ✅ `npm start` - Iniciar aplicação
3. ✅ Testar todas as funcionalidades
4. ✅ Verificar responsividade (F12 → Device toolbar)
5. ✅ Testar em diferentes navegadores

---

## 📝 Checklist de Execução

- [ ] Node.js instalado (v16+)
- [ ] npm instalado (v7+)
- [ ] Navegou até a pasta do projeto
- [ ] Executou `npm install`
- [ ] Viu mensagem de sucesso (sem erros)
- [ ] Executou `npm start`
- [ ] Navegador abriu automaticamente
- [ ] Aplicação carregou sem erros
- [ ] Testou geração de números
- [ ] Testou salvar palpite
- [ ] Testou histórico
- [ ] Testou limpar histórico

---

## ✅ Tudo Pronto!

Após executar `npm start`, você verá algo assim:

```
Compiled successfully!

You can now view mega-sena-bet-generator in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

**Acesse**: http://localhost:3000 e divirta-se! 🎉

---

**Desenvolvido com ❤️ | React + TypeScript** 🚀
