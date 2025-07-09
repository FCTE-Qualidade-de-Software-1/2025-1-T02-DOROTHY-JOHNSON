# Ações de melhoria

## Sugestão de melhoria - Duplicação de Código

A avaliação conduzida pela equipe identificou uma densidade de duplicação de 6,7%, um valor ainda dentro dos limites aceitáveis, mas que indica margem para aprimoramento.

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
| 1.0    | 08/07/2025 | [Cássio Reis](https://github.com/csreis72) | Criação do documento | -       |
