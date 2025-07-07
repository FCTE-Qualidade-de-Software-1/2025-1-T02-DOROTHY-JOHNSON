# Coleta de Dados - Manutenibilidade


## Grau de Acoplamento

A tabela a seguir apresenta dados relacionados ao grau de acoplamento dos módulos e pastas do projeto **AgroMart Mobile**, obtidas por meio da ferramenta [Dependency Cruiser](https://www.npmjs.com/package/dependency-cruiser). 

- Afferent Coupling (Ca): número de módulos externos que dependem do módulo em questão;
- Efferent Coupling (Ce): número de módulos que o módulo em questão depende;
- Instability (I%): medida de instabilidade calculada a partir de Ca e Ce, indicando a propensão do módulo a sofrer mudanças.

{{ read_csv('data/coupling-mobile.csv') }}


## Histórico de Versão

| Versão | Data       | Autor                                      | Descrição            | Revisor |
| ------ | ---------- | ------------------------------------------ | -------------------- | ------- |
| 1.0    | 05/07/2025 | [Cássio Reis](https://github.com/csreis72) | Criação do documento | -       |
