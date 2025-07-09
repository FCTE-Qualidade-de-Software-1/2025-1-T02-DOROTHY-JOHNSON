## Comparação com os critérios de manutenibilidade
O grupo aplicou corretamente as métricas M1 a M6, utilizando as ferramentas recomendadas (Dependency Cruiser, SonarQube, Jest). A documentação é clara, e os resultados da comparação foram:

| Código | Métrica                    | Resultado no Projeto (Dorothy Johnson)                                                                                                                  | Comentário Comparativo                                                                                      |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| M1     | Grau de acoplamento        | Utilização do **Dependency Cruiser** para medir *Afferent Coupling*, *Efferent Coupling* e *Instability*. Resultado detalhado por módulo, com gráficos. | Segue a metodologia esperada. Os dados estão bem estruturados, apresentando evidências quantitativas.       |
| M2     | Cobertura da documentação  | Obtido com **SonarQube**: média de **2.3%** de densidade de comentários nas linhas de código analisadas.                                               | Métrica diretamente compatível. O valor é relativamente baixo, indicando possível oportunidade de melhoria. |
| M3     | Duplicação de código       | **6.7%** de duplicação identificada por SonarQube, com indicação das regiões duplicadas.                                                                | Excelente resultado, abaixo do limite de alerta geralmente considerado (5%).                                |
| M4     | Cobertura de testes        | Utilizando **Jest**, a cobertura global foi de **00.00%** onde mostra claramente que não se tem testes automatizados de sistema                                        | Cobertura inexistente                                               |
| M5     | Complexidade ciclomática   | Média de **3.27** por função, com alguns módulos chegando a **6**. Indicadores extraídos diretamente do SonarQube.                                      | Valor razoável. Abaixo de 10 é considerado aceitável, mas módulos com 6 já merecem atenção especial.        |
| M6     | Tempo para entender módulo | Derivado da **complexidade cognitiva** (média: 6.2), convertido para tempo estimado de leitura (\~**2m e 15s** por módulo).                             | Apresenta uma boa modelagem da métrica, incluindo metodologia de conversão do índice em tempo estimado.     |


# Comparação com os critérios de Efetividade, Eficiência e Satisfação 
O grupo aplicou corretamente as métricas M7 a M10 por meio da interação de uma usuária iniciante em Android em 07/07/2025, seguindo o protocolo de usabilidade definido (instruções detalhadas, cronômetro para tempo de execução e questionário Likert para satisfação). A documentação é clara, com descrições passo a passo e evidências visuais do fluxo de atualização de endereço. Os resultados da comparação foram:

| Código  | Métrica                     | Resultado no Projeto (Dorothy Johnson)                | Comentário Comparativo                                                                                                                |
| ------- | --------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **M7**  | Taxa de sucesso nas tarefas | 100 % (1 de 1 tarefa completada)                      | **Excelente:** supera folgadamente o mínimo de 80 %, indicando que os usuários conseguiram concluir a tarefa sem erros.               |
| **M8**  | Tempo de execução da tarefa | 40 s (≈ 0,67 min)                                     | **Excelente:** bem abaixo do limite de 2 min; a interface demonstrou-se rápida e eficiente no fluxo de atualização de dados.          |
| **M9**  | Satisfação média            | 4,5 (escala 1–5)                                      | **Excelente:** acima do limiar (≥ 4), mostra alta aceitação e conforto dos usuários ao realizar a tarefa.                             |
| **M10** | Tempo de resposta percebido | Não registrado numericamente, sem relatos de lentidão | **Excelente (presumido):** não houve observações de demora |


## Tabela de Contribuição

| Matrícula | Nome completo              | Contribuição (%) |
| --------- | -------------------------- | ---------------- |
| 221021886 | Cássio Sousa dos Reis      | 20%              |
| 180113097 | Daniel Coimbra dos Santos  | 20%              |
| 202023663 | Gabriel Basto Bertolazi    | 20%              |
| 221037803 | Letícia Kellen Ramos Paiva | 20%              |
| 170154319 | Philipe de Sousa Barros    | 20%              |

## Histórico de Versão

| Versão | Data       | Autor                                              | Descrição                                | Revisor                                            |
| ------ | ---------- | -------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| 1.0    | 07/07/2025 | [Philipe Sousa](https://github.com/PhilipeSousa)         | Criação do documento                     | [Daniel Coimbra](https://github.com/DanielCoimbra) |
| 1.1    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)         | Conteúdo adicionado (manutenibilidade)                    |           |
| 1.2    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)         | Métricas e critérios ajustados |                    |     
| 1.3    | 08/07/2025 | [Leticia K. Ramos Paiva](https://github.com/leticiakrpaiva)  | Adição de Efetividade, Eficiência e Satisfação |                                                    |

