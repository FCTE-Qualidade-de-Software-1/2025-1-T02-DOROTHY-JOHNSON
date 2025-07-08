## Comparação com os critérios de manutenibilidade

| Dimensão da Manutenibilidade                           | Métrica Coletada                                                                                  | Análise Crítica                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Modificabilidade** (facilidade de alterar o sistema) | - *Complexidade Ciclomática*<br>- *Complexidade Cognitiva*                                      | - Complexidade média por arquivo baixa (1,79), o que é bom.<br>- A ciclomática elevada em partes pode dificultar alterações.                     |
| **Testabilidade** (facilidade de testar mudanças)      | *Cobertura de Testes* = **0%**                                                                  | - Grave ponto de alerta: sem testes automatizados, é impossível garantir segurança em mudanças.                                                  |
| **Analisabilidade** (facilidade de entender o sistema) | - *Densidade de Comentários*<br>- *Complexidade Cognitiva*<br>- *Tempo estimado para entender* | - Comentários ajudam, mas os gráficos não foram visíveis diretamente.<br>- Tempo de entendimento baixo (3,6 min/módulo) é positivo.              |
| **Estabilidade** (resistência a efeitos colaterais)    | - *Acoplamento (Ca, Ce, Instabilidade)*<br>- *Duplicação de Código*                             | - Instabilidade pode ser medida (alta Instability = vulnerável a mudanças externas).<br>- Duplicação de 6,7% é tolerável, mas pode ser reduzida. |
| **Reusabilidade** (potencial de reutilização)          | - *Acoplamento Baixo (Ce)*<br>- *Modularização*                                                 | - Baixo acoplamento favorece reuso. Mas não temos métricas explícitas sobre coesão.                                                              |

- Pontos fortes:
    - Complexidade Cognitiva baixa: facilita a leitura e manutenção.
    - Estimativa de entendimento por módulo é rápida (~3,6 min): bom para rotatividade na equipe.
    - Análise de acoplamento presente (Ca, Ce, Instability): importante para modularidade.
- Pontos de atenção:
    - Cobertura de testes inexistente (0%): maior fragilidade do projeto atual.
    - Duplicação de código (6,7%): deve ser monitorada para evitar crescimento com o tempo.
  
## Histórico de Versão

| Versão | Data       | Autor                                              | Descrição                                | Revisor                                            |
| ------ | ---------- | -------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| 1.0    | 07/07/2025 | [Philipe Sousa](https://github.com/PhilipeSousa)         | Criação do documento                     | [Daniel Coimbra](https://github.com/DanielCoimbra) |
| 1.1    | 08/07/2025 | [Gabriel Bertolazi](https://github.com/Bertolazi         | Conteúdo adicionado                     |           |



