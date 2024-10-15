# Testes unitários com Jest e Node JS

<div style="display: flex; justify-content: space-between;">
  <p style="align-self: center;">Este projeto implementa testes unitários em uma aplicação Node.</p>
  <img src="img/jest.png" alt="Imagem do Projeto" width="100">
</div>

<br>
<br>

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Autor](#autor)

<br>
<br>

## Teste com sucesso

<div align="center">
  <img src="img/suc.png" alt="Imagem do Projeto" width="900">
</div>

<br>
<br>

## Teste com Falha

<div align="center">
  <img src="img/err.png" alt="Imagem do Projeto" width="900">
</div>

#### OBS: Lembrando que o objetivo do nosso teste é falhar, para o teste ser completo.

<br>
<br>

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="Logo Linguagem" width="200"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/node.png" alt="Logo Linguagem" width="300"/>
  </div>
</div>

<br>
<br>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

Este projeto possui dois testes, um para uma calculadora em JS e outro para um servidor Express.
<br>
<br>

## Explicação

A calculadora em JS possui as operações básicas de matemática em funções individuas, essas que o JEST test apartir de um entrada informada.

O teste de servidor express verifica se o servidor de fato esta rodando na porta selecionada (3000) isto é util pois ao longo do desenvolvimento do codigo podemos realizar esse teste primeiro, garantindo que os demais testes no código irão funcionar.

<br>
<br>

## Como Usar

`1.` git clone `https://github.com/dgusfr/TDD_NodeJS.git`

`2.` npm install express

`3.` npm install supertest

`4.` npm run test

<br>
<br>

#### Isto é possivel pois no nosso `package.json` esta configurado da seguinte maneira:

```
"scripts": {
    "test": "jest"
  },

```

<br>
<br>

## Autor

Desenvolvido por Diego Franco
