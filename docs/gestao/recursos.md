# Recursos e Custos

## Custo de Retrabalho

Para mensurar esse aspecto, o grupo optou por analisar o percentual de commits cujo prefixo seja "fix:" ou "refactor:", pois esses termos geralmente indicam correções de erros ou modificações em implementações existentes. Essa abordagem permite estimar o volume de retrabalho realizado durante o desenvolvimento do trabalho.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../charts/rework-metrics.js"></script>

<canvas id="commitChart" width="400" height="200"></canvas>

O cálculo do custo de retrabalho foi realizado conforme a fórmula abaixo:

\[
\text{Retrabalho}(\%) = \frac{N_{\text{fix}} + N_{\text{refactor}}}{N_{\text{total}} - N_{\text{merge}}} \times 100
\]

## Tabela de Contribuição

| Matrícula | Nome completo              | Contribuição (%) |
| --------- | -------------------------- | ---------------- |
| 221021886 | Cássio Sousa dos Reis      | 20%              |
| 180113097 | Daniel Coimbra dos Santos  | 20%              |
| 202023663 | Gabriel Basto Bertolazi    | 20%              |
| 221037803 | Letícia Kellen Ramos Paiva | 20%              |
| 170154319 | Philipe de Sousa Barros    | 20%              |

# Histórico de Versão

| Versão | Data       | Autor                                      | Descrição            | Revisor |
| ------ | ---------- | ------------------------------------------ | -------------------- | ------- |
| 1.0    | 08/07/2025 | [Cássio Reis](https://github.com/csreis72) | Criação do documento | -       |
