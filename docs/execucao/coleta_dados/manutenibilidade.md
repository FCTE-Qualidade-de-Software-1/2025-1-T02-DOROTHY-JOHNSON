# Coleta de Dados - Manutenibilidade

Este relatório compila as principais métricas de mantenabilidade do projeto **AgroMart Mobile**, apresentando dados sobre acoplamento, documentação, testes e complexidade. O objetivo é fornecer uma visão abrangente da facilidade de manutenção do código ao longo do tempo e    identificar áreas de melhoria.

## Cobertura da Documentação 
A densidade de comentários (Comment Lines Density) mostra a proporção de linhas de código documentadas, refletindo o nível de detalhamento e orientação para novos desenvolvedores.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNxb8XTYT0tBarvdkgRM-JmTcfH8NtNll_mk8R1UiqRuei8gKxO2oTdkQT8kwrtbX78xkXDrAmuPyh/pubhtml?gid=159077419&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400"></iframe>

## Cobertura de Testes

A cobertura de testes indica a porcentagem de linhas de código exercitadas por testes automatizados, medida em **Coverage Overview → Overall Code** no SonarQube. Atualmente, não há testes automatizados implementados no AgroMart Mobile, resultando em cobertura de 0,0%.

- Coverage: 0,0% (743 linhas-alvo)

## Duplicação de Código

A densidade de duplicação de código indica a porcentagem de linhas de código duplicadas no projeto, medida no SonarQube. Valores elevados podem aumentar o esforço para manutenção e risco de inconsistências.

- Duplicação: 6,7% (linhas duplicadas sobre o total)

## Complexidade Ciclomática 
A complexidade ciclomática quantifica o número de caminhos de execução possíveis em cada função, obtida em **Measures → Cyclomatic Complexity**. Valores elevados podem aumentar o esforço de teste e a probabilidade de erros.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNxb8XTYT0tBarvdkgRM-JmTcfH8NtNll_mk8R1UiqRuei8gKxO2oTdkQT8kwrtbX78xkXDrAmuPyh/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400"></iframe>


## Tempo para Entender Módulo

O tempo estimado para entender um módulo é baseado na **Complexidade Cognitiva por Arquivo** (Cognitive Complexity per File), disponível em **Measures → Cognitive Complexity**, refletindo o esforço mental requerido para assimilação.

### Dados de Complexidade Cognitiva

A seguir os valores de Complexidade Cognitiva por arquivo para este módulo:

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNxb8XTYT0tBarvdkgRM-JmTcfH8NtNll_mk8R1UiqRuei8gKxO2oTdkQT8kwrtbX78xkXDrAmuPyh/pubhtml?gid=1915115669&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400"></iframe>

### Cálculo da Complexidade Média

1. Somar a complexidade cognitiva de todos os arquivos do módulo:  

\[
\sum_{i=1}^{n} CC_{file_i} = 168
\]

2. Contar o número de arquivos no módulo:  

\[
N_{arquivos} = 94
\]

3. Calcular a complexidade cognitiva média (pontos por arquivo):  

\[
\text{Complexidade Média} = \frac{168}{94} \approx 1{,}79 \text{ ponto/arquivo}
\]

### Conversão para Tempo Estimado

Definimos um fator de conversão de **2 minutos por ponto de complexidade**:

\[
TempoPorPonto = 2 min
\]


Portanto, o tempo estimado para entender o módulo, em minutos, é:

\[
\text{Tempo Módulo (min)} = \text{Complexidade Média} \times \text{Tempo Por Ponto} = 1,79 \times 2 \approx 3,6 \text{ min}
\]

E, em horas:

\[
\text{Tempo Módulo (h)} = \frac{3,6}{60} \approx 0,06 \text{ h}
\]

## Grau de Acoplamento 

O grau de acoplamento indica o nível de dependências internas e externas de cada módulo, afetando diretamente a robustez e a manutenibilidade do sistema, medido por meio da ferramenta [Dependency Cruiser](https://www.npmjs.com/package/dependency-cruiser).

- **Afferent Coupling (Ca):** número de módulos externos que dependem do módulo em questão.
- **Efferent Coupling (Ce):** número de módulos que o módulo em questão depende.
- **Instability (I%):** calculada como I = Ce / (Ca + Ce) × 100, representando a probabilidade de mudanças.

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSNxb8XTYT0tBarvdkgRM-JmTcfH8NtNll_mk8R1UiqRuei8gKxO2oTdkQT8kwrtbX78xkXDrAmuPyh/pubhtml?gid=813725741&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400"></iframe>

## Histórico de Versão

| Versão | Data       | Autor                                                         | Descrição                                         | Revisor       |
| ------ | ---------- | ------------------------------------------------------------- | ------------------------------------------------- | ------------- |
| 1.0    | 05/07/2025 | [Cássio Reis](https://github.com/csreis72)                    | Criação do documento                              | -             |
| 1.1    | 07/07/2025 | [Letícia K. Ramos Paiva](https://github.com/leticiakrpaiva)   | Adição das Métricas Coletadas | Cássio Reis   |
