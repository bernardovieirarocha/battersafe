# 🔄 Como Atualizar Ícones do App

## Problema
Você mudou os ícones em `assets/images/` mas o app ainda mostra o ícone antigo.

## Causa
O Expo/React Native faz cache dos ícones compilados. É necessário limpar o cache e recompilar.

## ✅ Solução Completa

### Para Android

#### 1. Limpar builds e cache antigos
```bash
# Remover pastas de build
rm -rf android/app/src/main/res/mipmap-*
rm -rf android/app/src/main/res/drawable-*
rm -rf .expo
rm -rf android/build
rm -rf android/app/build

# Limpar cache do Metro
rm -rf node_modules/.cache
```

#### 2. Regenerar projeto nativo
```bash
npx expo prebuild --platform android --clean
```

#### 3. Rebuild do app
```bash
# Opção 1: Expo
npx expo run:android

# Opção 2: Direto com gradle
cd android && ./gradlew clean && cd ..
npx expo run:android
```

### Para iOS

#### 1. Limpar builds e cache
```bash
# Remover builds
rm -rf ios/build
rm -rf .expo

# Limpar cache do Metro
rm -rf node_modules/.cache
```

#### 2. Regenerar projeto nativo
```bash
npx expo prebuild --platform ios --clean
```

#### 3. Rebuild do app
```bash
# Instalar pods (se necessário)
cd ios && pod install && cd ..

# Build
npx expo run:ios
```

### Para Ambas as Plataformas

```bash
# Limpeza completa
rm -rf .expo android/build ios/build node_modules/.cache

# Regenerar tudo
npx expo prebuild --clean

# Rebuild
npx expo run:android
npx expo run:ios
```

## 📱 Ícones que Você Pode Trocar

### Android
```
assets/images/
├── android-icon-background.png  ← Fundo do ícone adaptativo
├── android-icon-foreground.png  ← Logo/ícone principal
├── android-icon-monochrome.png  ← Versão monocromática
└── icon.png                      ← Ícone base (1024x1024px)
```

### iOS
```
assets/images/
└── icon.png  ← Ícone base (1024x1024px)
```

O Expo gera automaticamente todas as resoluções.

### Splash Screen
```
assets/images/
└── splash-icon.png  ← Ícone que aparece na splash
```

## ⚙️ Configuração no app.json

```json
{
  "expo": {
    "icon": "./assets/images/icon.png",
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#1f4fa3",  // Cor de fundo
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      }
    },
    "ios": {
      "icon": "./assets/images/icon.png"
    }
  }
}
```

## 🎨 Especificações dos Ícones

### icon.png
- **Tamanho**: 1024x1024px
- **Formato**: PNG com transparência
- **Uso**: Ícone base para iOS e fallback

### android-icon-foreground.png
- **Tamanho**: 1024x1024px
- **Formato**: PNG com transparência
- **Safe zone**: Conteúdo importante dentro de círculo de 768px
- **Uso**: Logo/ícone principal (Android)

### android-icon-background.png
- **Tamanho**: 1024x1024px
- **Formato**: PNG (pode ser sólido)
- **Uso**: Fundo do ícone adaptativo (Android)

### android-icon-monochrome.png
- **Tamanho**: 1024x1024px
- **Formato**: PNG monocromático (preto/branco)
- **Uso**: Temas com ícones temáticos (Android 13+)

## 🚨 Atenção

### Não funcionou ainda?

1. **Desinstalar o app do dispositivo/emulador**
   ```bash
   # Android
   adb uninstall com.anonymous.batterysafe
   
   # iOS
   # Deletar manualmente do simulador
   ```

2. **Limpar cache do device**
   - Android: Settings > Apps > Batterysafe > Clear Cache
   - iOS: Deletar e reinstalar

3. **Force rebuild completo**
   ```bash
   # Limpar TUDO
   rm -rf node_modules .expo android ios package-lock.json
   
   # Reinstalar
   npm install
   
   # Regenerar
   npx expo prebuild --clean
   
   # Build
   npx expo run:android --device
   ```

## ✅ Verificar se Funcionou

### Android
1. Olhe o ícone na home screen
2. Olhe no drawer de apps
3. Olhe nas configurações do app

### iOS
1. Olhe o ícone na home screen
2. Olhe na App Library
3. Olhe no Spotlight

### Ambos
- Os ícones devem aparecer imediatamente após instalação
- Se ainda mostrar o antigo, é cache do sistema
- Reinicie o dispositivo/emulador

## 📝 Dicas

### Gerar Ícones Automaticamente
Use ferramentas online:
- [Icon Kitchen](https://icon.kitchen/)
- [App Icon Generator](https://appicon.co/)
- [MakeAppIcon](https://makeappicon.com/)

Upload da sua logo e elas geram todos os tamanhos!

### Testar Ícone Rapidamente
```bash
# Ver como ficou sem rebuild completo
npx expo prebuild --clean
ls -la android/app/src/main/res/mipmap-*
# Abra os arquivos gerados para verificar
```

---

**Seu novo ícone deve aparecer após rebuild!** 🎨✨
