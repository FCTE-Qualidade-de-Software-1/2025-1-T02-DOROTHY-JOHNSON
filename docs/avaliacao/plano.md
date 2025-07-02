# Plano de avaliação do AgroMart

## Objetivo da avaliação

Avaliar o software AgroMart com base nas características de qualidade usando o método PSM-CID, quanto à **usabilidade** e à **manutenibilidade**.

## Método de avaliação (PSM-CID)

- Características avaliadas:

| Característica       | Subcaracterística                                                             | Objetivo no AgroMart                                                                |
| -------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Usabilidade**      | Operacionalidade, Aprendizado, Estética, Acessibilidade                       | Garantir que o sistema seja intuitivo, claro e fácil de usar                        |
| **Manutenibilidade** | Modularidade, Reusabilidade, Analisabilidade, Modificabilidade, Testabilidade | Avaliar a facilidade de localizar erros e fazer modificações no código ou interface |

- Métricas definidas:

| Métrica                               | Tipo         | Como medir                                                                                                                                |
| ------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Tempo médio para completar tarefa     | Quantitativa | Cronometrar quanto tempo um colega demora para realizar tarefas comuns                                                                    |
| Número de erros por tarefa            | Quantitativa | Quantidade de tentativas incorretas ou falhas                                                                                             |
| Satisfação do usuário                 | Qualitativa  | Questionário com escala Likert (1 a 5) (aplicado ao colega que realizou as tarefas)                                                       |
| Tempo para localizar/modificar módulo | Quantitativa | Ver quando uma tarefa foi feita e quando ela foi refatorada, ou corrigida, pretendemos verificar isso por meio das linguagens dos commits |
| Facilidade de leitura do código       | Qualitativa  | Checklist técnico: nomes, comentários, organização                                                                                        |

## Guia do avaliador

- Parte 1 - Avaliação da usabilidade (com usuários)
  - Preparação:
    - Configure o ambiente de teste do AgroMart
    - Indique a funcionalidade que deseja que o usuário tente realiza
    - Tenha um cronômetro e folha de registro por avaliador

## Recursos

### Divisão de Subgrupos

Para otimizar a execução da avaliação e considerando as ênfases estabelecidas (manutenibilidade: 5, usabilidade: 3), a equipe foi dividida em dois subgrupos de trabalho, atuando de forma paralela e coordenada.

---

#### Subgrupo Manutenibilidade (3 pessoas)

**Integrantes**: Cássio Reis, Gabriel Bertolazi, Letícia Paiva

**Foco**: Ênfase na avaliação dos aspectos de manutenibilidade do software.

**Responsabilidades**:

- Planejar e executar a coleta de dados de manutenibilidade, utilizando as ferramentas e técnicas apropriadas (incluindo o Q-Rapids).
- Analisar os dados coletados e compará-los com os critérios de manutenibilidade previamente definidos.
- Propor ações de melhoria específicas para a manutenibilidade do Agromart.
- Documentar todas as descobertas, análises e propostas de melhoria.

---

#### Subgrupo Usabilidade (2 pessoas)

**Integrantes**: Daniel Santos, Philipe Barros

**Foco**: Ênfase na avaliação dos aspectos de usabilidade do software.

**Responsabilidades**:

- Planejar e executar a coleta de dados de usabilidade, empregando métodos como testes de usuário, questionários ou avaliações heurísticas.
- Analisar os dados coletados e compará-los com os critérios de usabilidade previamente definidos.
- Propor melhorias na interface ou nos fluxos de interação do AgroMart.
- Documentar todas as descobertas, análises e propostas de melhoria.

---

### Ferramentas

A seguir, são listadas as ferramentas e recursos que podem ser utilizados durante a avaliação do sistema AgroMart. O uso de cada ferramenta dependerá da necessidade e estratégia definida pelos subgrupos.

| Ferramenta                              | Finalidade                                                                 |
|----------------------------------------|----------------------------------------------------------------------------|
| **Q-Rapids**                            | Análise contínua da qualidade do software, com foco em manutenibilidade.   |
| **Planilhas (Excel/Google Sheets)**    | Tabulação e cálculo de métricas quantitativas.                             |
| **Formulários/Testes de usuário**      | Coleta de dados qualitativos e quantitativos de usabilidade.               |
| **Editores Markdown (MkDocs)**         | Documentação estruturada do plano, resultados e recomendações.             |
| **Editores de código (VS Code, IntelliJ)** | Aplicação de melhorias no código-fonte.                                |
| **Ferramentas de prototipagem (Figma, etc.)** | Representação visual de sugestões de interface.                    |
| **Git/GitHub**                | Controle de versão e rastreabilidade das mudanças no projeto.              |

## Cronograma

O cronograma a seguir apresenta a distribuição das atividades do grupo. Cada atividade possui responsáveis e prazos definidos.

| **Categoria**                    | **Atividade Principal**                          | **Período**               | **Responsáveis**                         |
| -------------------------------- | ------------------------------------------------ | ------------------------- | ---------------------------------------- |
| **Gestão de Projeto**            | Gerenciamento contínuo                           | 30 de junho a 07 de julho | Grupo completo                           |
| **Preparação**                   | Elaboração do Plano de Avaliação                 | 01 a 02 de julho          | Grupo completo                           |
| **Execução da Avaliação**        | Coleta de dados (manutenibilidade e usabilidade) | 03 a 04 de julho          | Subgrupos Manutenibilidade e Usabilidade |
|                                  | Análise e comparação                             | 05 de julho               | Subgrupos Manutenibilidade e Usabilidade |
|                                  | Execução de ações de melhoria                    | 06 a 07 de julho          | Grupo completo                           |
| **Documentação e Revisão Final** | Revisão geral e entrega                          | 07 a 08 de julho          | Grupo completo                           |

O gráfico Gantt abaixo oferece uma visualização clara da sequência e duração das atividades previstas:

```mermaid
%%{ init: {
  "theme": "default",
  "gantt": {
    "barHeight": 60,
    "fontSize": 30,
    "topPadding": 60,
    "leftPadding": 150,
    "rightPadding": 50,
    "gridLineStartPadding": 40,
    "sectionFontSize": 25,
    "numberSectionStyles": 4,
    "titleTopMargin": 25,
    "axisFormat": "%d/%m"
  }
} }%%
gantt
    dateFormat  YYYY-MM-DD
    axisFormat  %d/%m

    section Gestão de Projeto
    Coleta de Métricas de Projeto : 2025-06-30, 8d

    section Preparação
    Elaboração do Plano Aval. :done,    2025-07-01, 2d

    section Execução da Avaliação
    Coleta de Dados :active, 2025-07-03, 2d
    Análise e Comparação    :        2025-07-05, 1d
    Execução de Ações de Melhoria  : 2025-07-06, 2d

    section Documentação e Revisão Final
    Revisão Geral e Entrega :   2025-07-07, 2d
```

## Histórico de Versão

| Versão | Data       | Autor                                                | Descrição                       | Revisor |
| ------ | ---------- | ---------------------------------------------------- | ------------------------------- | ------- |
| 1.0    | 01/07/2025 | [Gabriel Bertolazi](https://github.com/PhilipeSousa) | Criação do documento            | -       |
| 1.1    | 02/07/2025 | [Cássio Reis](https://github.com/csreis72)           | Adição de Recursos e Cronograma | -       |
