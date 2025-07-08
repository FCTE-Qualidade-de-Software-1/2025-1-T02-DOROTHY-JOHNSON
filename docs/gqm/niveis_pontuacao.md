# Níveis de pontuação das métricas

Os valores das métricas de qualidade de software devem ser classificados em níveis que indicam o grau de atendimento aos requisitos. Essa classificação facilita a interpretação dos resultados e a definição de ações apropriadas para garantir a qualidade do produto.

A tabela abaixo detalha os níveis, seus significados e as orientações correspondentes para o acompanhamento da qualidade.

| Nível     | Significado                                                         |
| --------- | ------------------------------------------------------------------- |
| Excelente | Supera a meta planejada. Desempenho ideal, nenhuma ação necessária. |
| Bom       | Atende à meta planejada. Dentro do esperado.                        |
| Aceitável | Abaixo da meta, mas tolerável. Pode exigir atenção.                 |
| Ruim      | Desempenho inaceitável. Ação corretiva necessária.                  |

Os níveis de pontuação para cada métrica estão definidos conforme as tabelas abaixo.

- Métricas do Objetivo de Medição 1

| Código | Métrica                   | Unidade                     | Níveis de Pontuação                                                                                       |
|--------|---------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------|
| M1     | Grau de Acoplamento       | % de módulos com acoplamento moderado | Excelente: > 90% <br> Bom: 70% - 90% <br> Aceitável: 50% - 69% <br> Ruim: < 50%                    |
| M2     | Cobertura da Documentação | Densidade de comentários (%)| Excelente: 25% - 35% <br> Bom: 15% - 24% <br> Aceitável: 10% - 14% <br> Ruim: < 10%                      |
| M3     | Duplicação de Código      | Percentual (%)             | Excelente: < 2% <br> Bom: 2% - 5% <br> Aceitável: 5% - 10% <br> Ruim: > 10%                              |
| M4     | Cobertura de Testes       | Percentual (%)             | Excelente: ≥ 70% <br> Bom: 50% - 69% <br> Aceitável: 30% - 49% <br> Ruim: < 30%                            |
| M5     | Complexidade Ciclomática  | Média por função           | Excelente: 1 - 4 <br> Bom: 5 - 10 <br> Aceitável: 11 - 15 <br> Ruim: > 15                                |
| M6     | Tempo médio para entender módulo | Minutos                   | Excelente: < 5 min <br> Bom: 5 - 10 min <br> Aceitável: 11 - 15 min <br> Ruim: > 15 min                  |

- Métricas do Objetivo de Medição 2

| Código | Métrica                   | Unidade               | Níveis de Pontuação                                                                                 |
|--------|---------------------------|----------------------|---------------------------------------------------------------------------------------------------|
| M7     | Taxa de sucesso nas tarefas | Percentual (%)       | Excelente: ≥ 80% <br> Bom: 70% - 79% <br> Aceitável: 50% - 69% <br> Ruim: < 50%                    |
| M8     | Tempo de execução da tarefa | Minutos              | Excelente: < 2 min <br> Bom: 2 - 3 min <br> Aceitável: 4 - 5 min <br> Ruim: > 5 min                |
| M9     | Satisfação média            | Escala 1 a 5         | Excelente: ≥ 4 <br> Bom: 3.5 - 3.99 <br> Aceitável: 3 - 3.49 <br> Ruim: < 3                        |
| M10    | Tempo de resposta percebido | Segundos             | Excelente: < 1 s <br> Bom: 1 - 2 s <br> Aceitável: 3 - 4 s <br> Ruim: > 4 s                        |

## Histórico de Versão

| Versão | Data       | Autor                                      | Descrição            | Revisor |
| ------ | ---------- | ------------------------------------------ | -------------------- | ------- |
| 1.0    | 07/07/2025 | [Cássio Reis](https://github.com/csreis72) | Criação do documento | -       |
