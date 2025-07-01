# Plano de avaliação do agromart

## Objetivo da avaliação

Avaliar o software AgroMart com base nas características de qualidade usando o método PSM-CID, quanto à **usabilidade** e à **manutenibilidade**.

## Método de avaliação (PSM-CID)

- Características avaliadas:

| Característica | Subcaracterística | Objetivo no AgroMart |
| -------------- |------------------ | -------------------- |
| **Usabilidade** | Operacionalidade, Aprendizado, Estética, Acessibilidade | Garantir que o sistema seja intuitivo, claro e fácil de usar |
| **Manutenibilidade** | Modularidade, Reusabilidade, Analisabilidade, Modificabilidade, Testabilidade | Avaliar a facilidade de localizar erros e fazer modificações no código ou interface |

- Métricas definidas:
  
| Métrica | Tipo | Como medir |
|-------- | ---- | ---------- |
| Tempo médio para completar tarefa | Quantitativa | Cronometrar quanto tempo um colega demora para realizar tarefas comuns | 
| Número de erros por tarefa | Quantitativa | Quantidade de tentativas incorretas ou falhas |
| Satisfação do usuário | Qualitativa | Questionário com escala Likert (1 a 5) (aplicado ao colega que realizou as tarefas) |
| Tempo para localizar/modificar módulo | Quantitativa | Ver quando uma tarefa foi feita e quando ela foi refatorada, ou corrigida, pretendemos verificar isso por meio das linguagens dos commits | 
| Facilidade de leitura do código | Qualitativa | Checklist técnico: nomes, comentários, organização |

## Guia do avaliador

- Parte 1 - Avaliação da usabilidade (com usuários)
    - Preparação:
        - Configure o ambiente de teste do AgroMart
        - Indique a funcionalidade que deseja que o usuário tente realiza
        - Tenha um cronômetro e folha de registro por avaliador