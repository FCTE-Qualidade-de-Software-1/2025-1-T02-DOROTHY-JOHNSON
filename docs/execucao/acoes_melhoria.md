# Ações de melhoria

## Sugestão de melhoria - Duplicação de Código

A avaliação conduzida pela equipe identificou uma densidade de duplicação de 6,7%, um valor ainda dentro dos limites aceitáveis, mas que indica margem para aprimoramento.
### Uma sugestão
Um exemplo claro de duplicação é a interface Register, declarada em dois arquivos distintos:

- `src/pages/History/index.tsx`
- `src/components/ExtractModal/index.tsx`

```typescript
interface Register {
  id: string;
  itens: string;
  valor: number;
  entregue: false;
  tipo_de_entrega: string;
  loja: {
    id: string;
    nome: string;
    descricao: string;
    banner: string;
    tipos_de_entrega: string;
    contato: string;
    cnpj: string;
    usuario: string;
    extratos: [string];
    endereco: string;
    produtos_avulsos: [string];
    planos: [string];
    cestas: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: true;
    blocked: true;
    role: string;
    loja: string;
    extratos: [string];
    endereco: string;
    assinantes: [string];
    created_by: string;
    updated_by: string;
  };
  pagamento_realizado: false;
  created_at: string;
}
```

A duplicação de código dificulta a manutenção, uma vez que qualquer mudança precisa ser feita em todos os pontos duplicados. Consequentemente, o risco de inconsistências e bugs aumenta.

Portanto, recomenda-se extrair a interface para um único arquivo compartilhado e importar onde necessário. O projeto já possui o arquivo `src/interfaces/index.ts`, que é um local apropriado para centralizar essa definição.

Essa modificação reduziu a densidade de duplicação para 5,3% (-1,4%), conforme verificado em nova análise realizada no SonarQube. 
Acesse o commit da implementação [neste link](https://github.com/csreis72/mobile-client/commit/4d9f28298c97e29540279ce6df7b444643a13719).

### Outra sugestão
Dessa vez, a solução é a criação de uma função Utils sendSubscriberData, também com um fim de deletar o código duplicado, e adicionando uma única fonte de verdade, diminuindo assim o tamanho do código e custo de manutenção.
Refatoração sugeriada: um arquivo types.ts:
 
```typescript
// types.ts
export interface StockParams {
  id: number;
  stock: number;
  quantity: number;
  type: 'produto' | 'cesta' | 'plano';
  name: string;
  value: number;
}
```
Um arquivo sendSubscriberDataUtil.ts:

```typescript
// sendSubscriberDataUtil.ts
import { StockParams } from './types';
import initializeApi from './initializeApi';

interface SendSubscriberDataParams {
  cart: StockParams[];
  user: {
    id: number;
    username: string;
  };
  storeId: number;
  getTotal: () => number;
  cleanUpCart: () => void;
}

export const sendSubscriberDataUtil = async ({
  cart,
  user,
  storeId,
  getTotal,
  cleanUpCart,
}: SendSubscriberDataParams): Promise<void> => {
  const updateStockRequestModifier = {
    produto: async (item: StockParams) => {
      try {
        const api = await initializeApi();
        const body = { quantidade: item.stock - item.quantity };
        await api.put(`produtos-avulsos/${item.id}`, body);
      } catch (err) {
        console.error('Erro ao atualizar produto:', err);
      }
    },
    cesta: async (item: StockParams) => {
      try {
        const api = await initializeApi();
        const body = { quantidade: item.stock - item.quantity };
        await api.put(`cestas/${item.id}`, body);
      } catch (err) {
        console.error('Erro ao atualizar cesta:', err);
      }
    },
    plano: async (item: StockParams) => {
      try {
        const api = await initializeApi();
        const body = { quantidade: item.stock - item.quantity };
        const response = await api.put(`planos/${item.id}`, body);

        const { quantidade_de_cestas } = response.data;

        const subscriberBody = {
          nome: user.username,
          cestas_disponiveis: quantidade_de_cestas,
          planos: item.id,
          usuario: user.id,
          loja: storeId,
        };

        await api.post('assinantes', subscriberBody);
      } catch (err) {
        console.error('Erro ao atualizar plano e criar assinante:', err);
      }
    },
  };

  const extractBody = {
    valor: getTotal(),
    user: user.id,
    loja: storeId,
    itens: {
      produtos: [] as { produto: string; quantidade: number; valor: number }[],
    },
    pagamento_realizado: false,
  };

  for (const item of cart) {
    await updateStockRequestModifier[item.type](item);

    extractBody.itens.produtos.push({
      produto: item.name,
      quantidade: item.quantity,
      valor: item.value,
    });
  }

  try {
    const api = await initializeApi();
    await api.post('extratoes', extractBody);
    cleanUpCart();
  } catch (error) {
    console.error('Erro ao criar extrato:', error);
  }
};

```

e uma possível implementação:

```typescript
import { sendSubscriberDataUtil } from './sendSubscriberDataUtil';

await sendSubscriberDataUtil({
  cart,
  user,
  storeId,
  getTotal,
  cleanUpCart,
});

```



## Tabela de Contribuição

| Matrícula | Nome completo              | Contribuição (%) |
| --------- | -------------------------- | ---------------- |
| 221021886 | Cássio Sousa dos Reis      | 20%              |
| 180113097 | Daniel Coimbra dos Santos  | 20%              |
| 202023663 | Gabriel Basto Bertolazi    | 20%              |
| 221037803 | Letícia Kellen Ramos Paiva | 20%              |
| 170154319 | Philipe de Sousa Barros    | 20%              |

## Histórico de Versão

| Versão | Data       | Autor                                      | Descrição            | Revisor |
| ------ | ---------- | ------------------------------------------ | -------------------- | ------- |
| 1.0    | 08/07/2025 | [Cássio Reis](https://github.com/csreis72) | Criação do documento | [Daniel Coimbra](https://github.com/DanielCoimbra)       |
| 1.1    | 08/07/2025 | [Daniel Coimbra](https://github.com/DanielCoimbra) | Criação do documento |[Cássio Reis](https://github.com/csreis72)        |
