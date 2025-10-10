# Batterysafe �⚡

App de monitoramento inteligente de bateria para veículos elétricos (BYD Dolphin).

## ✨ Funcionalidades Implementadas

### 📊 Dashboard Interativo
- **Visualização em tempo real** da bateria do BYD Dolphin
- **Imagem real do veículo** carregada dinamicamente
- **Toque no badge da bateria** para simular carregamento
- **Animação de pulse** quando carregando
- **Toque na imagem do carro** para atualizar temperatura aleatória
- Indicador de bateria muda de cor baseado no nível:
  - Verde (>80%)
  - Laranja (20-80%)
  - Vermelho (<20%)
- Ícone de bateria dinâmico que reflete o estado

### 🚨 Alertas Gerenciáveis
- **Dismissar alertas individualmente** - toque no X
- **Limpar todos os alertas** de uma vez
- **Timestamp** de cada alerta
- **Estado vazio animado** quando não há alertas
- 3 tipos de alertas por cor:
  - Verde: Informações positivas
  - Laranja: Avisos
  - Vermelho: Alertas críticos

### 📈 Histórico com Gráficos
- **Seleção de período** (Dia/Mês/Ano)
- **Gráficos dinâmicos** que mudam conforme período
- **Visualização de tendências** da saúde da bateria
- Estatísticas detalhadas de degradação

## 🚀 Como Executar

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor Expo
npx expo start

# 3. Para iOS (requer macOS + Xcode)
npm run ios

# 4. Para Android
npm run android

# 5. Para Web
npm run web
```

### Simulador iOS
Se aparecer erro "No iOS devices available":
```bash
# Remover simuladores indisponíveis
xcrun simctl delete unavailable

# Listar simuladores disponíveis
xcrun simctl list devices

# Abrir Simulator.app
open -a Simulator
```## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## 📦 Tecnologias

- **React Native** 0.81.4
- **Expo** ~54.0.12
- **TypeScript**
- **Expo Router** (navegação file-based)
- **React Native Chart Kit** (gráficos)
- **@expo/vector-icons** (ícones)

## 🎨 Design

### Paleta de Cores
```typescript
BRAND = {
  blue: '#1f4fa3',        // Azul principal
  success: '#22c55e',     // Verde - alertas positivos
  warn: '#f59e0b',        // Laranja - avisos
  danger: '#ef4444',      // Vermelho - alertas críticos
  grayBg: '#f4f6fb',      // Fundo cinza claro
}
```

### Componentes Reutilizáveis
- `<Header>` - Cabeçalho com menu
- `<Stat>` - Card de estatística
- `<Chip>` - Botão de seleção com estado ativo
- `<AlertCard>` - Card de alerta com indicador colorido

## 📱 Estrutura do App

```
app/
├── (tabs)/
│   ├── index.tsx      # Dashboard (tela principal)
│   ├── alerts.tsx     # Gestão de alertas
│   ├── history.tsx    # Gráficos e histórico
│   └── _layout.tsx    # Navegação das tabs
components/
├── Header.tsx
├── Stat.tsx
├── Chip.tsx
└── AlertCard.tsx
constants/
└── theme.ts           # Cores e estilos globais
```

## 🔥 Funcionalidades Interativas

### Dashboard
```typescript
// Toque no badge da bateria para simular carregamento
<TouchableOpacity onPress={toggleCharging}>
  <Animated.View> // Animação de pulse
    <MaterialCommunityIcons name={getBatteryIcon()} />
  </Animated.View>
</TouchableOpacity>

// Toque na imagem para mudar temperatura
<TouchableOpacity onPress={() => setTemperature(random())}>
  <Image source={{ uri: 'byd-dolphin.jpg' }} />
</TouchableOpacity>
```

### Alertas
```typescript
// Dismissar alerta específico
dismissAlert(id)

// Limpar todos
clearAllAlerts()
```

### Histórico
```typescript
// Mudar período do gráfico
<Chip 
  label="Mês" 
  active={selectedPeriod === 'Mês'}
  onPress={() => setSelectedPeriod('Mês')} 
/>
```

## 🚧 Próximas Melhorias

- [ ] Persistência de dados (AsyncStorage)
- [ ] Notificações push reais
- [ ] Integração com API de veículos elétricos
- [ ] Modo escuro
- [ ] Múltiplos veículos
- [ ] Exportar relatórios PDF
- [ ] Previsão de degradação com ML
- [ ] Integração com carregadores

## 📄 Licença

Projeto educacional - Livre para uso e modificação.
