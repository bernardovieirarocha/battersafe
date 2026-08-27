# BatterySafe

Protótipo de aplicativo de monitoramento de saúde de bateria para veículo elétrico,
feito para ilustrar a proposta que apresentamos na **Competição Estudantil SAE BRASIL
de Inovação Jump Start**, no tema *ESG e futuro da mobilidade*.

O carro usado como exemplo nas telas é um BYD Dolphin.

---

## O que ele é, e o que ele não é

**É um protótipo de interface.** Todo dado é simulado: o nível de bateria começa em 96%,
a temperatura em 28°C, e as duas mudam por interação na tela. Não há conexão com veículo,
não há backend, não há chamada de rede.

Isso é deliberado. O objetivo na competição era mostrar **como a informação seria
apresentada ao motorista**, não construir a telemetria por trás. Uma pitch de inovação se
ganha ou se perde na clareza da proposta, e um protótipo navegável comunica isso melhor
que um slide.

Para um sistema que de fato lê dado de veículo, veja a telemetria da Fórmula CEFAST.

## O que as telas mostram

| Tela | O que ela resolve |
|---|---|
| **Dashboard** | Estado atual da bateria, com o indicador mudando de cor por faixa: verde acima de 80%, laranja entre 20 e 80, vermelho abaixo de 20. Temperatura ao lado, porque é o que degrada a bateria a longo prazo. |
| **Alertas** | Avisos em três níveis, dispensáveis um a um ou de uma vez. A ideia é que o motorista não acumule ruído: alerta que não pode ser dispensado vira alerta ignorado. |
| **Histórico** | Degradação ao longo de dia, mês e ano. A saúde da bateria é o dado que decide o valor de revenda de um elétrico, e é justamente o que o motorista não enxerga hoje. |

## Stack

React Native com **Expo** e **expo-router**, TypeScript, React Navigation.

```bash
npm install
npx expo start        # abre o Expo, leia o QR no celular
npx expo start --ios  # ou direto no simulador
```

## Estrutura

```
app/
  _layout.tsx        Layout raiz e navegação
  (tabs)/
    index.tsx        Dashboard
    alerts.tsx       Alertas
    history.tsx      Histórico e gráficos
components/          Cartões, chips, header, logo e estatísticas
assets/images/       Ícones, splash e a imagem do veículo
```

## Estado do projeto

Encerrado no fim da competição. Não está em desenvolvimento ativo e não tem
continuidade prevista. Fica público como registro do que foi apresentado.
