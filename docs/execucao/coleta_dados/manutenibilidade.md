```markdown
# Coleta de Dados - Manutenibilidade

Este relatório compila as principais métricas de mantenabilidade do projeto **AgroMart Mobile**, apresentando dados sobre acoplamento, documentação, testes e complexidade. O objetivo é fornecer uma visão abrangente da facilidade de manutenção do código ao longo do tempo e    identificar áreas de melhoria.

## Grau de Acoplamento 
O grau de acoplamento indica o nível de dependências internas e externas de cada módulo, afetando diretamente a robustez e a manutenibilidade do sistema.

- **Afferent Coupling (Ca):** número de módulos externos que dependem do módulo em questão.
- **Efferent Coupling (Ce):** número de módulos que o módulo em questão depende.
- **Instability (I%):** calculada como I = Ce / (Ca + Ce) × 100, representando a probabilidade de mudanças.

{{ read_csv('data/coupling-mobile.csv') }}

## Cobertura da Documentação 
A densidade de comentários (Comment Lines Density) mostra a proporção de linhas de código documentadas, refletindo o nível de detalhamento e orientação para novos desenvolvedores.

{{ read_csv('data/comment-density-mobile.csv') }}

## Cobertura de Testes

A cobertura de testes indica a porcentagem de linhas de código exercitadas por testes automatizados, medida em **Coverage Overview → Overall Code** no SonarQube. Alta cobertura reduz o risco de regressões.

- **Coverage:** 52.5% (743 linhas-alvo)
- **Testes:** 42 de 44 testes passaram

## Complexidade Ciclomática 
A complexidade ciclomática quantifica o número de caminhos de execução possíveis em cada função, obtida em **Measures → Cyclomatic Complexity**. Valores elevados podem aumentar o esforço de teste e a probabilidade de erros.

{{ read_csv('data/cyclomatic-mobile.csv') }}

```markdown

## Tempo para Entender Módulo

O tempo estimado para entender um módulo é baseado na **Complexidade Cognitiva por Arquivo** (Cognitive Complexity per File), disponível em **Measures → Cognitive Complexity**, refletindo o esforço mental requerido para assimilação.

### Dados de Complexidade Cognitiva

A seguir os valores de Complexidade Cognitiva por arquivo para este módulo:

{{ read_csv('data/cognitive-complexity-mobile.csv') }}

### Cálculo da Complexidade Média

1. Somar a complexidade cognitiva de todos os arquivos do módulo:  
```

∑ CC\_file\_i = 168

```

2. Contar o número de arquivos no módulo:  
```

N\_arquivos = 94

```

3. Calcular a complexidade cognitiva média (pontos por arquivo):  
```

ComplexidadeMédia = 168 / 94 ≈ 1,79 ponto/arquivo

```

### Conversão para Tempo Estimado

Definimos um fator de conversão de **2 minutos por ponto de complexidade**:

```

TempoPorPonto = 2 min

```

Portanto, o tempo estimado para entender o módulo, em minutos, é:

```

TempoMódulo (min) = ComplexidadeMédia × TempoPorPonto = 1,79 × 2 ≈ 3,6 min

```

E, em horas:

```

TempoMódulo (h) = 3,6 / 60 ≈ 0,06 h

```
```


## Histórico de Versão

| Versão | Data       | Autor                                                         | Descrição                                         | Revisor       |
| ------ | ---------- | ------------------------------------------------------------- | ------------------------------------------------- | ------------- |
| 1.0    | 05/07/2025 | [Cássio Reis](https://github.com/csreis72)                    | Criação do documento                              | -             |
| 1.1    | 07/07/2025 | [Letícia K. Ramos Paiva](https://github.com/leticiakrpaiva)   | Adição das Métricas Coletadas | Cássio Reis   |
```
