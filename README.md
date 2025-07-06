# 2025-1-T02-DOROTHY-JOHNSON

## Descrição do Projeto

Este repositório corresponde ao projeto de avaliação de qualidade de software da disciplina de Qualidade de Software — FGA/UnB — semestre 2025/1. O software analisado é o **AgroMart**, uma solução tecnológica que conecta agricultores familiares a consumidores, promovendo agricultura sustentável, comércio justo e inovação digital.

O AgroMart surgiu em um Hackathon da UnB-FGA em 2020 com o tema *“Cultivando Conexões”*. Desde então, evoluiu para uma plataforma open source com integração de pagamentos e suporte a CSAs (Comunidades que Sustentam a Agricultura). O projeto visa facilitar a comunicação e a comercialização entre agricultores e consumidores, mesmo em contextos de isolamento social como o da pandemia de COVID-19.


## Como Clonar e Rodar o Projeto

Este projeto utiliza [MkDocs](https://www.mkdocs.org/) com o tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

### 1. Clone o repositório

```bash
git clone https://github.com/FCTE-Qualidade-de-Software-1/2025-1-T02-DOROTHY-JOHNSON.git

cd 2025-1-T02-DOROTHY-JOHNSON
```

### 2. Instalar dependências 
```bash
pip install mkdocs mkdocs-material
```

### 3. Executar o projeto
```bash
mkdocs serve
```
- Abra http://127.0.0.1:8000 no navegador para visualizar a documentação.

---

## Execução do Q-Rapids

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Etapas de Configuração

### 1. Configurar as variáveis de ambiente

Copie o arquivo de exemplo `.env.qrapids` para o arquivo `.env`:

```bash
cp .env.qrapids .env
```

### 2. Iniciar os serviços principais

Execute o comando abaixo para subir os serviços essenciais:

```bash
docker compose up -d sonarqube zookeeper kafka elasticsearch kibana db
```

### 3. Acessar o SonarQube

- URL: http://localhost:4875
- Usuário: admin
- Senha: admin

**Importante**: Após o primeiro login, altere a senha padrão.
Atualize a nova senha nos arquivos `sonar-project.properties` do projeto AgroMart.

### 4. Rodar os scanners

Após configurar o SonarQube corretamente, execute:

```bash
docker compose up -d scanner-mobile scanner-api
```

### 5. Subir os serviços do Q-Rapids

Execute:

```bash
docker compose up -d qrconnect_sonar pabrews dashboard rbase siassessment-rest forecast-rest
```

### 6. Subir o serviço de avaliação

Depois de alguns instantes, rode:

```bash
docker compose up -d qreval
```

Acesse o dashboard no navegador: http://localhost:8080

Os seguintes projetos devem estar disponíveis, com métricas e indicadores:
- api-agromart
- mobile-agromart

## Integrantes da Equipe

<table style="width: 100%;">
  <tr>
    <td align="center">
      <a href="https://github.com/csreis72" target="_blank" rel="noopener">
        <img src="https://avatars.githubusercontent.com/u/112133277?v=4" width="100px" style="border-radius:50%">
        <br>
        Cássio Reis
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/DanielCoimbra" target="_blank" rel="noopener">
        <img src="https://avatars.githubusercontent.com/u/49206670?v=4" width="100px" style="border-radius:50%">
        <br>
        Daniel Santos
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Bertolazi" target="_blank" rel="noopener">
        <img src="https://avatars.githubusercontent.com/u/122479691?v=4" width="100px" style="border-radius:50%">
        <br>
        Gabriel Bertolazi
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/leticiakrpaiva" target="_blank" rel="noopener">
        <img src="https://avatars.githubusercontent.com/u/114038884?v=4" width="100px" style="border-radius:50%">
        <br>
        Letícia Paiva
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PhilipeSousa" target="_blank" rel="noopener">
        <img src="https://avatars.githubusercontent.com/u/78869177?v=4" width="100px" style="border-radius:50%">
        <br>
        Philipe Barros
      </a>
    </td>
  </tr>
</table>
