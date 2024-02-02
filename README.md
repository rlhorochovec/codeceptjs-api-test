# codeceptjs-api-test
[![codeceptjs-api-test](https://github.com/rlhorochovec/codeceptjs-api-test/actions/workflows/ci.yml/badge.svg)](https://github.com/rlhorochovec/codeceptjs-api-test/actions/workflows/ci.yml)

Projeto de automação de testes web utilizando CodeceptJS, Cucumber e Allure Report, executando via GitHub Actions e publicando o relatório da execução no GitHub Pages.

## Dependências
- CodeceptJS: 3.5.12
- Allure CodeceptJS: 2.12.0

## Instalação
Instale codeceptjs-api-test com npm

```bash
  cd codeceptjs-api-test
  npm install
```

## Rodando os testes
Para rodar os testes, rode o seguinte comando

```bash
  npx codeceptjs run --plugins allure
```

## Relatório dos testes
Gerar o Allure Report

```bash
  allure serve allure-results
```

Apagar o Allure Report de execuções anteriores

```bash
  allure generate --clean --output allure-results
```

Visualizar o Allure Report publicado
[Visualizar](https://rlhorochovec.github.io/codeceptjs-api-test/)