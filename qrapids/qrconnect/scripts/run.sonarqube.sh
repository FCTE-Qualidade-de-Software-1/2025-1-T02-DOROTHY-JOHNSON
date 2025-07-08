#!/bin/bash

# Lista de projetos (nomes = nomes das pastas)
PROJECTS=("mobile-agromart" "api-agromart")

echo "Aguardando Elasticsearch..."
until curl --silent http://elasticsearch:9200/_cat/health?h=st | grep -E 'yellow|green'; do sleep 1; done
echo "ES OK!"

# Criar índices globais
echo "Criando índice: sonarqube.issues"
curl -XPUT http://elasticsearch:9200/sonarqube.issues -d'
{
  "mappings": {
    "sonarqube": {
      "properties": {
        "author": { "type": "keyword" },
        "component": {  "type": "keyword" },
        "componentId": { "type": "integer" },
        "creationDate": { "type": "date" },
        "debt": { "type": "keyword" },
        "effort": { "type": "keyword" },
        "endLine": { "type": "integer" },
        "endOffset": { "type": "integer" },
        "key": { "type": "keyword" },
        "line": { "type": "integer" },
        "message": { "type": "text" },
        "project": { "type": "keyword" },
        "rule": { "type": "keyword" },
        "severity": { "type": "keyword" },
        "snapshotDate": { "type": "date" },
        "sonarUrl": { "type": "keyword" },
        "startLine": { "type": "integer" },
        "startOffset": { "type": "integer" },
        "status": { "type": "keyword" }
      }
    }
  }
}' 

echo "Criando índice: sonarqube.measures"
curl -XPUT http://elasticsearch:9200/sonarqube.measures -d'
{
  "mappings": {
    "sonarqube": {
      "properties": {
        "Id": { "type": "keyword" },
        "bcId": { "type": "keyword" },
        "bcKey": { "type": "keyword" },
        "bcName": { "type": "keyword" },
        "bcQualifier": { "type": "keyword" },
        "floatvalue": { "type": "float" },
        "key": { "type": "keyword" },
        "language": { "type": "keyword" },
        "metric": { "type": "keyword" },
        "name": { "type": "keyword" },
        "path": { "type": "keyword" },
        "qualifier": { "type": "keyword" },
        "snapshotDate": { "type": "date" },
        "sonarUrl": { "type": "keyword" },
        "value": { "type": "keyword" }
      }
    }
  }
}'

# Rodar por projeto
for project in "${PROJECTS[@]}"; do
  echo "Configurando projeto: $project"

  echo "Criando índice strategic_indicators.$project..."
  curl -s -XPUT "http://elasticsearch:9200/strategic_indicators.$project" -d'
  {
    "mappings":{
        "strategic_indicators":{
          "properties":{
              "datasource":{
                "type":"keyword"
              },
              "dates_mismatch_days":{
                "type":"long"
              },
              "description":{
                "type":"text"
              },
              "evaluationDate":{
                "type":"date"
              },
              "missing_factors":{
                "type":"text",
                "fields":{
                    "keyword":{
                      "type":"keyword",
                      "ignore_above":256
                    }
                }
              },
              "name":{
                "type":"keyword"
              },
              "project":{
                "type":"keyword"
              },
              "strategic_indicator":{
                "type":"keyword"
              },
              "value":{
                "type":"double"
              }
          }
        }
    }
  }'

  echo "Iniciando Connect standalone para $project..."
  CLASSPATH=$CLASSPATH:/home/run/jar/qr-connect-0.0.4-jar-with-dependencies.jar \
  /home/run/confluent-3.2.1/bin/connect-standalone \
    "./config/sonarqube/$project/connect.properties" \
    "./config/sonarqube/$project/connect-source.properties" \
    "./config/sonarqube/$project/connect-elasticsearch.properties" &
done

wait
echo "Todos os conectores foram iniciados."
