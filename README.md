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

#### 4.1. Clonar o Projeto AgroMart

Clone os repositórios do AgroMart, contendo os códigos da API e do cliente mobile, conforme uma das opções abaixo:

- Coloque os projetos clonados dentro da estrutura do Q-Rapids conforme os caminhos abaixo:

```
qrapids/
├── docker-compose.yml
├── api/
├── mobile-client/
```

O Docker Compose já está configurado para buscar nesses diretórios como padrão (./api e ./mobile-client).

- Se desejar manter os projetos em outros locais, configure os caminhos manualmente criando um arquivo .env com as variáveis:

```bash
API_SRC=/caminho/absoluto/para/o/codigo/api
MOBILE_SRC=/caminho/absoluto/para/o/codigo/mobile
```

#### 4.2. Criar o arquivo `sonar-project.properties`

Crie este arquivo na raiz de cada projeto (API e Mobile) com o conteúdo a seguir:

mobile-client/sonar-project.properties

```properties
sonar.projectKey=mobile-agromart
sonar.projectName=Agromart Mobile Client
sonar.projectVersion=1.0

sonar.sources=src
sonar.sourceEncoding=UTF-8
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.exclusions=**/node_modules/**
sonar.typescript.tsconfigPath=tsconfig.json

sonar.host.url=http://sonarqube:9000
sonar.login=admin
sonar.password=password
```

api/sonar-project.properties

```properties
sonar.projectKey=api-agromart
sonar.projectName=Agromart API
sonar.projectVersion=1.0

sonar.sources=src
sonar.language=js
sonar.sourceEncoding=UTF-8
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.exclusions=**/node_modules/**

sonar.host.url=http://sonarqube:9000
sonar.login=admin
sonar.password=password
```

#### 4.3. Executar o scanner

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

Os projetos devem estar disponíveis no dashboard do Q-Rapids, com métricas e indicadores estratégicos.

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
