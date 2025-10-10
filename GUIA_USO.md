# 🎮 Guia Rápido de Uso - Battersafe

## Funcionalidades Interativas

### 🏠 Dashboard (Tela Principal)

#### 1. Simular Carregamento
**Como usar:** Toque no badge da bateria (com a porcentagem)
- A bateria começa a carregar automaticamente
- Badge fica amarelo e pulsa
- Percentual aumenta em tempo real
- Imagem do carro mostra overlay "Carregando..."
- Para parar: toque novamente no badge

#### 2. Atualizar Temperatura
**Como usar:** Toque na imagem do BYD Dolphin
- Temperatura muda aleatoriamente (20°C - 35°C)
- Simula variação térmica da bateria

#### 3. Indicadores Dinâmicos
- **Verde**: Bateria > 80% (saudável)
- **Laranja**: Bateria 20-80% (atenção)
- **Vermelho**: Bateria < 20% (crítico)

---

### 🚨 Alertas

#### Dismissar Alerta Individual
1. **Opção 1:** Toque no ícone ❌ ao lado direito do alerta
2. **Opção 2:** Pressione e segure (long press) no alerta

#### Limpar Todos os Alertas
- Toque em "Limpar todos" no topo da tela

#### Estado Vazio
- Quando não há alertas, aparece:
  - Ícone de check verde
  - Mensagem "Tudo certo! 🎉"

---

### 📊 Histórico

#### Alternar Períodos
Toque nos chips para ver dados diferentes:
- **Dia**: Últimas 24 horas (6 em 6 horas)
- **Mês**: Últimos 6 meses
- **Ano**: Últimos 6 anos

O gráfico atualiza automaticamente!

#### Informações Disponíveis
- Gráfico de linha com evolução da saúde
- Saúde atual da bateria
- Perda no último mês
- Total de ciclos de carga
- Status geral

---

## 🎯 Dicas de Teste

### Fluxo Completo de Teste

1. **Inicie no Dashboard**
   ```
   → Toque no badge da bateria (inicia carregamento)
   → Observe a animação de pulse
   → Veja o percentual subindo
   → Toque na imagem do carro (muda temperatura)
   → Toque no badge novamente (para carregamento)
   ```

2. **Vá para Alertas**
   ```
   → Veja os 3 alertas iniciais
   → Toque no X de um alerta (remove)
   → Pressione e segure outro alerta (remove também)
   → Toque em "Limpar todos"
   → Observe a tela de "Tudo certo!"
   ```

3. **Explore o Histórico**
   ```
   → Toque em "Dia" (gráfico muda)
   → Toque em "Ano" (gráfico muda novamente)
   → Toque em "Mês" (volta ao padrão)
   → Observe as diferentes escalas de tempo
   ```

---

## 🐛 Solução de Problemas

### App não abre no iOS
```bash
xcrun simctl delete unavailable
npx expo start --clear
pressione 'i' para iOS
```

### Erro de dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Gráfico não aparece
```bash
npm install react-native-svg react-native-chart-kit
npx expo start --clear
```

### Imagem do carro não carrega
- Verifique conexão com internet
- A imagem vem do Unsplash (URL externa)

---

## 💡 Easter Eggs

1. **Carregamento Rápido**: Se deixar carregando, a bateria vai de 96% → 100% automaticamente
2. **Temperatura Aleatória**: Cada toque na imagem gera temperatura diferente
3. **Animação Suave**: Todos os estados têm transições animadas

---

## 📱 Atalhos do Expo

Enquanto o app está rodando:
- `r` - Reload
- `m` - Menu de desenvolvimento
- `j` - Debugger
- `i` - Abrir no iOS Simulator
- `a` - Abrir no Android Emulator
- `w` - Abrir no navegador

---

## 🎨 Customização Rápida

### Mudar Cor Principal
`constants/theme.ts`:
```typescript
blue: '#1f4fa3', // Mude aqui!
```

### Adicionar Novo Alerta
`app/(tabs)/alerts.tsx`:
```typescript
{
  id: '4',
  title: 'Seu Título',
  subtitle: 'Sua descrição',
  color: 'green', // ou 'orange', 'red'
  timestamp: 'Agora',
}
```

### Mudar Imagem do Carro
`app/(tabs)/index.tsx`:
```typescript
source={{ uri: 'URL_DA_SUA_IMAGEM' }}
```

---

Divirta-se explorando o app! 🚗⚡
