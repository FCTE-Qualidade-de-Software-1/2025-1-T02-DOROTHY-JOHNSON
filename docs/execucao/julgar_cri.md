## Julgamento da Manutenibilidade do Projeto

Esta seção apresenta um julgamento técnico da manutenibilidade do sistema **AgroMart Mobile**, com base nos dados coletados e apresentados anteriormente. A avaliação considera as principais características da manutenibilidade, suas métricas correspondentes e uma nota qualitativa atribuída a cada critério.

### Visão Geral

# Julgamento das Métricas de Manutenibilidade 

A seguir apresentamos uma análise crítica das métricas que compõem a avaliação da **manutenibilidade** do sistema **AgroMart Mobile**, conforme os dados coletados no relatório técnico.

## Tabela de Julgamento

| Métrica | Nome                         | Valor Observado                                 | Interpretação Técnica                                                                 | Avaliação |
|--------:|------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------|-----------|
| **M1**  | Grau de Acoplamento          | Valores de Ca, Ce e Instability disponíveis via Dependency Cruiser | Estrutura modular bem mapeada. Alguns módulos com instabilidade elevada.               | Regular |
| **M2**  | Cobertura da Documentação    | Métrica citada (Comment Lines Density) | Sugerindo pouca documentação inline. Isso dificulta a compreensibilidade e manutenção do código. É um ponto claro de melhoria.         | Insatisfatório |
| **M3**  | Duplicação de Código         | 6,7%                                             |  O valor real (6.7%) está acima do nível ideal (geralmente até 5%). Isso indica trechos redundantes que podem ser refatorados.       | Moderada |
| **M4**  | Cobertura de Testes          | 0,0% (743 linhas-alvo)                          | Crítico: ausência total de testes automatizados compromete segurança e evolução.       | Ruim |
| **M5**  | Complexidade Ciclomática     | Coletada com SonarQube (detalhes em gráficos)   | Média geral não reportada, mas foi alvo de medição. Necessário vigiar funções críticas.| Boa (com ressalvas) |
| **M6**  | Tempo para Entender Módulo   | 3,6 min por módulo (1,79 pontos × 2min)         | Muito bom: código com baixa complexidade cognitiva favorece onboarding e manutenção.   | Ótima |

---

## Análise Consolidada

| Categoria         | Avaliação Global        | Justificativa                                                                 |
|-------------------|-------------------------|-------------------------------------------------------------------------------|
| **Pontos Fortes** | M5, M6                  | Código fácil de entender e com baixa complexidade cognitiva.                 |
| **Pontos Médios** | M1, M2, M3              | Modularidade e documentação presentes, mas com oportunidades de melhoria.    |
| **Ponto Crítico** | M4                      | A ausência total de testes automatizados é o maior risco atual do sistema.   |

---

## Recomendações Prioritárias

1. **[URGENTE] Implementar testes automatizados (unitários e de integração).**
2. **Melhorar a cobertura de documentação** e padronizar os comentários de código.
3. **Refatorar trechos duplicados** e prevenir a duplicação crescente.
4. Monitorar módulos com alta instabilidade e complexidade ciclomática.

---


## Julgamento da Efetividade, Eficiência e Satisfação do Projeto

Dados coletados a partir da interação de uma usuária iniciante em Android em 07/07/2025: mediu-se sucesso de conclusão (M7), tempo de execução medido por cronômetro (M8), satisfação via questionário Likert (M9) e avaliação subjetiva do tempo de resposta (M10).

---

### Visão Geral

#### Julgamento das Métricas de Qualidade em Uso

A seguir apresentamos uma análise crítica das métricas que compõem a avaliação da **Efetividade, Eficiência e Satisfação** do sistema **AgroMart Mobile**, conforme os dados coletados no relatório:

---

## Tabela de Julgamento

| Código  | Métrica                     | Resultado no Projeto (Dorothy Johnson)                | Comentário Comparativo                                                                                                                |
| ------- | --------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **M7**  | Taxa de sucesso nas tarefas | 100 % (1 de 1 tarefa completada)                      | **Excelente:** supera folgadamente o mínimo de 80 %, indicando que os usuários conseguiram concluir a tarefa sem erros.               |
| **M8**  | Tempo de execução da tarefa | 40 s (≈ 0,67 min)                                     | **Excelente:** bem abaixo do limite de 2 min; a interface demonstrou-se rápida e eficiente no fluxo de atualização de dados.          |
| **M9**  | Satisfação média            | 4,5 (escala 1–5)                                      | **Excelente:** acima do limiar (≥ 4), mostra alta aceitação e conforto dos usuários ao realizar a tarefa.                             |
| **M10** | Tempo de resposta percebido | Não registrado numericamente, sem relatos de lentidão | **Excelente (presumido):** não houve observações de demora; a interface aparenta responder em < 1 s, garantindo fluidez na interação. |

---

## Análise Consolidada

| Categoria         | Avaliação Global | Justificativa                                                                                      |
| ----------------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| **Pontos Fortes** | M7, M8           | 100 % de sucesso na tarefa e tempo de execução muito rápido (40 s, bem abaixo do limite de 2 min). |
| **Pontos Médios** | M9               | Satisfação alta (4,5/5), mas com amostra limitada.                                                 |
| **Ponto Crítico** | M10              | Tempo de resposta percebido não foi medido objetivamente; carece de instrumentação para latência.  |

---

## Recomendações Prioritárias

1. **Dicas visuais de orientação inicial (tooltips)**  
   Exiba lembretes e balões explicativos na primeira vez que o usuário acessar a edição de endereço, indicando claramente onde tocar para editar cada campo — facilitando a descoberta do recurso e aumentando a taxa de sucesso (M7).

2. **Feedback visual imediato no salvamento**  
   Exiba um indicador (“Salvando…”) e uma confirmação clara ao gravar as alterações de endereço, reforçando a percepção de rapidez do sistema (M10).

---

## Histórico de Versão

| Versão | Data       | Autor                                                            | Descrição                                    | Revisor                                            |
| ------ | ---------- | ---------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| 1.0    | 07/07/2025 | [Philipe Sousa](https://github.com/PhilipeSousa)                 | Criação do documento                         | [Daniel Coimbra](https://github.com/DanielCoimbra) |
| 1.1    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)                | Conteúdo adicionado (manutenibilidade)       |                                                    |
| 1.2    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi)                | Correção dos resultados                      |                                                    |
| 1.3    | 08/07/2025 | [Leticia K. Ramos Paiva](https://github.com/leticiakrpaiva)  | Adição de Efetividade, Eficiência e Satisfação |                                                    |
