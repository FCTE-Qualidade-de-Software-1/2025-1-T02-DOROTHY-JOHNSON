## Comparação com os critérios de manutenibilidade
O grupo aplicou corretamente as métricas M1 a M6, utilizando as ferramentas recomendadas (Dependency Cruiser, SonarQube, Jest). A documentação é clara, e os resultados da comparação foram:

| Código | Métrica                    | Resultado no Projeto (Dorothy Johnson)                                                                                                                  | Comentário Comparativo                                                                                      |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| M1     | Grau de acoplamento        | Utilização do **Dependency Cruiser** para medir *Afferent Coupling*, *Efferent Coupling* e *Instability*. Resultado detalhado por módulo, com gráficos. | Segue a metodologia esperada. Os dados estão bem estruturados, apresentando evidências quantitativas.       |
| M2     | Cobertura da documentação  | Obtido com **SonarQube**: média de **15.4%** de densidade de comentários nas linhas de código analisadas.                                               | Métrica diretamente compatível. O valor é relativamente baixo, indicando possível oportunidade de melhoria. |
| M3     | Duplicação de código       | **0.7%** de duplicação identificada por SonarQube, com indicação das regiões duplicadas.                                                                | Excelente resultado, abaixo do limite de alerta geralmente considerado (5%).                                |
| M4     | Cobertura de testes        | Utilizando **Jest**, a cobertura global foi de **68.8%**, com destaque para algumas áreas com 100% de cobertura.                                        | Alta cobertura de testes, coerente com boas práticas de TDD.                                                |
| M5     | Complexidade ciclomática   | Média de **3.27** por função, com alguns módulos chegando a **6**. Indicadores extraídos diretamente do SonarQube.                                      | Valor razoável. Abaixo de 10 é considerado aceitável, mas módulos com 6 já merecem atenção especial.        |
| M6     | Tempo para entender módulo | Derivado da **complexidade cognitiva** (média: 6.2), convertido para tempo estimado de leitura (\~**2m e 15s** por módulo).                             | Apresenta uma boa modelagem da métrica, incluindo metodologia de conversão do índice em tempo estimado.     |

  
## Histórico de Versão

| Versão | Data       | Autor                                              | Descrição                                | Revisor                                            |
| ------ | ---------- | -------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| 1.0    | 07/07/2025 | [Philipe Sousa](https://github.com/PhilipeSousa)         | Criação do documento                     | [Daniel Coimbra](https://github.com/DanielCoimbra) |
| 1.1    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)         | Conteúdo adicionado (manutenibilidade)                    |           |
| 1.2    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)         | Métricas e critérios ajustados |                    |     


