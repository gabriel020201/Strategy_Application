# Strategy Notification Demo

Exemplo do padrão de projeto Strategy em TypeScript para controlar diferentes canais de notificação (e-mail, SMS e push) dentro de um módulo de comunicação.

## Conceito na Arquitetura

O módulo `Notifier` é um componente de domínio que precisa enviar mensagens sem ver os detalhes de cada provedor. A implementação da interface `NotificationStrategy` encapsula a regra específica de entrega, permitindo o fluxo dinâmico do canal conforme a necessidade do fluxo de negócio.

## Benefícios do Padrão Strategy

- Reduz acoplamento entre a regra de negócio e integrações externas.
- Facilita extensões (novos canais) sem modificar código existente.
- Permite testes isolados e simulação de provedores sem infraestrutura real.
- Favorece cenários multi-tenant, onde cada cliente pode configurar seu próprio canal padrão.


## Instalação

```powershell
npm install
```

## Execução

```powershell
npm run build
npm start
```

Execução direta em ambiente de desenvolvimento:

```powershell
npm run dev
```
## FIM