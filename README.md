# 🧪 Testes de Carga e Estresse com K6 - [Luis Miranda]

## :mag: Introdução

Este repositório contém o código do tutorial "Testes de Carga e Estresse com K6", focado na aplicação de testes de performance para medir a capacidade de resposta e resiliência de uma API escrita em Go. O tutorial ensina a criar diferentes tipos de testes de carga, como smoke tests, load tests e stress tests, documentando cada execução.

## :dart: Objetivo

O objetivo deste repositório é demonstrar a execução dos exemplos fornecidos no tutorial de K6, documentar os resultados com prints das execuções, e ampliar os comentários no código para explicar as técnicas e conceitos de Test-Driven Development (TDD) aplicados aos testes de carga e estresse.

## :jigsaw: Estrutura do Repositório

- `tests/`: Contém os arquivos dos testes de carga e estresse criados com K6.
- `assets/`: Contém prints das execuções dos testes para documentação.

## :gear: Passos Realizados

### 1. Criação do Repositório no GitHub

Este repositório foi criado para armazenar o código e a documentação do tutorial de K6, utilizado para testes de carga e estresse. O tutorial pode ser encontrado [aqui](https://eltonminetto.dev/en/post/2024-01-11-load-test-k6/).

### 2. Execução dos Exemplos e Documentação

Os exemplos de smoke test, load test e stress test foram executados e documentados. Os prints das execuções estão disponíveis na pasta `assets/`.

### Exemplos Executados

- **Exemplo 1: Smoke Test**
    - Teste simples para validar o funcionamento básico da API com um usuário virtual (VU) por 5 segundos.
    - Documentação com o print do resultado no terminal.
- **Exemplo 2: Load Test**
    - Teste de carga para simular um aumento gradual de usuários (até 100) e medir a performance da API sob demanda constante.
    - Print do resultado com métricas de tempo de resposta e sucesso das requisições.
- **Exemplo 3: Stress Test**
    - Teste de estresse para verificar como a API se comporta com 200 usuários simultâneos e identificar possíveis pontos de falha.
    - Documentação com o print das requisições e tempos de resposta elevados.

### 3. Ampliação dos Comentários do Código

Os comentários no código foram ampliados para explicar as técnicas e conceitos de TDD aplicados aos testes de carga e estresse. Conceitos como "usuários virtuais", "etapas de carga", e "critérios de sucesso e falha" foram destacados para garantir uma compreensão clara dos testes implementados.

## :memo: Conclusão

Este repositório fornece um guia prático para aplicar testes de carga e estresse em APIs utilizando a ferramenta K6. A documentação detalha a execução de smoke tests, load tests e stress tests, com prints e comentários ampliados para facilitar a compreensão dos conceitos envolvidos, como o comportamento sob carga, a simulação de usuários reais e a identificação de pontos de falha em cenários de estresse.
