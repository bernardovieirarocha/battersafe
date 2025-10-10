# 🔧 Solução: Erro @radix-ui/react-dialog

## Problema
```
Server Error
Cannot find module '@radix-ui/react-dialog'
```

## Causa
Este erro ocorre porque algum componente (provavelmente do template Expo) está tentando importar `@radix-ui/react-dialog`, mas essa dependência não está instalada e não é necessária para o app.

## ✅ Soluções Aplicadas

### 1. Limpeza Profunda de Cache
```bash
# Remover todos os caches
rm -rf node_modules/.cache
rm -rf .expo
rm -rf node_modules
rm -rf package-lock.json

# Reinstalar dependências
npm install

# Iniciar com cache limpo
npx expo start --clear
```

### 2. Arquivos Removidos
- ✅ `app/login.tsx` (removido)
- ✅ `app/modal.tsx` (removido)  
- ✅ `app/splash.tsx` (removido)

### 3. Arquivos Verificados (OK)
- ✅ `components/ui/collapsible.tsx` - Não usa @radix-ui
- ✅ `components/ui/icon-symbol.tsx` - Não usa @radix-ui
- ✅ Nenhum arquivo do projeto importa @radix-ui

## 🚨 Se o Erro Persistir

### Opção 1: Instalar a dependência faltante (não recomendado)
```bash
npm install @radix-ui/react-dialog
```
❌ **Problema**: Adiciona dependência desnecessária

### Opção 2: Desabilitar SSR para Web (recomendado)
Edite `app.json` ou `app.config.js`:
```json
{
  "expo": {
    "web": {
      "bundler": "metro",
      "output": "single"
    }
  }
}
```

### Opção 3: Criar arquivo de configuração do Metro
Crie `metro.config.js`:
```javascript
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ignorar módulos problemáticos
config.resolver.blockList = [
  /@radix-ui\/react-dialog/,
];

module.exports = config;
```

### Opção 4: Limpar e Resetar Completamente
```bash
# Parar todos os processos Expo
pkill -f "expo|metro"

# Limpar TUDO
rm -rf node_modules package-lock.json .expo ios/build android/build

# Limpar cache global do npm
npm cache clean --force

# Reinstalar
npm install

# Iniciar novamente
npx expo start --clear --reset-cache
```

### Opção 5: Verificar expo-router
O erro pode vir do expo-router tentando fazer SSR (Server Side Rendering) para web.

Adicione ao `app/_layout.tsx`:
```tsx
export const unstable_settings = {
  initialRouteName: 'index',
};
```

## 🔍 Diagnóstico

### Verificar se há imports escondidos
```bash
# Procurar em todos os arquivos
grep -r "@radix-ui" . --exclude-dir=node_modules

# Procurar em package.json
cat package.json | grep radix
```

### Verificar cache do Metro
```bash
# Ver cache do Metro
ls -la node_modules/.cache/

# Ver cache do Expo
ls -la .expo/
```

## ✅ Comportamento Esperado

Após aplicar as soluções:
1. ✅ App inicia sem erros
2. ✅ Splash screen aparece
3. ✅ Dashboard carrega normalmente
4. ✅ Todas as 3 tabs funcionam
5. ✅ Sem erros no console

## 📱 Plataformas

### iOS/Android
- Geralmente **não apresentam** este erro
- Erro é específico para renderização web/SSR

### Web
- Erro aparece durante SSR (Server Side Rendering)
- Soluções focam em desabilitar SSR ou ignorar módulo

## 🎯 Status Atual

**Em andamento:**
- ⏳ Reinstalando dependências (`npm install`)
- ⏳ Limpando cache do Metro
- ⏳ Reiniciando servidor Expo

**Aguarde a instalação terminar e veja se o erro persiste.**

Se o erro continuar após a reinstalação, tente as **Opções 2, 3 ou 4** acima.

---

## 📝 Notas Técnicas

### Por que este erro ocorre?

1. **Expo Router** tenta fazer SSR para web
2. SSR roda em ambiente Node.js
3. Algum componente (provavelmente `Collapsible` ou template padrão) referencia `@radix-ui`
4. Módulo não está instalado
5. SSR falha com erro "Cannot find module"

### Por que não está nos nossos arquivos?

O erro vem de:
- Template padrão do Expo
- Dependências transitivas
- Cache antigo do Metro/Expo
- Build artifacts

### Solução definitiva:

Limpar **todos** os caches e reinstalar é a solução mais confiável.

---

**Aguarde a reinstalação concluir!** ⏳
