<div align="center">
  
  <a href="https://celso-trackit.vercel.app/" target="_blank">
    <img src="https://free-url-shortener.rb.gy/url-shortener.png" alt="Logo" width="200">
  </a>
  
[![wakatime](https://wakatime.com/badge/user/8a52c0fd-ec78-403a-81d0-07c674c564b3/project/2b871bd2-1f1a-4d78-89fd-0559e408ad41.svg)](https://wakatime.com/badge/user/8a52c0fd-ec78-403a-81d0-07c674c564b3/project/2b871bd2-1f1a-4d78-89fd-0559e408ad41)
  
  <h3 align="center">
     URL shortening API
  </h3>
    <br />
  
  <div align="center">

   ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?logo=nestjs&logoColor=white&style=for-the-badge)
   ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

  </div>
  
</div>

## What I Learned
  
  - This was my first go at NestJS
  - Applied fundamental NestJS concepts, like modules, controllers, services, guards and pipes
  - Implemented [Passport.js](https://www.passportjs.org/) `local` and `jwt` auth strategies alongside NestJS guards
  - Studied and applied patterns like **singleton**, **dependency injection** an **IOC**
  - New Postgres concepts like `json_agg` and `json_build_object`
   
## Routes

  - [X] **POST** `/signup`
  - [X] **POST** `/signin`
  - [X] **POST** `/urls/shorten`
  - [X] **GET** `/urls/:id`
  - [X] **GET** `/urls/open/:shortUrl`
  - [X] **DELETE** `/urls/:id`
  - [X] **GET** `/users/:id`
  - [X] **GET** `/ranking`

## Requisitos

- Database
  - [X]  **Abuse do SQL!** Faça o mínimo possível de processamento no navegador.
  - [X]  Utilize o banco de dados Postgres.
  - [X]  Modele o banco de dados de acordo com a necessidade.
  - [X]  Use CONSTRAINS quando aplicável para garantir a lógica de negócio da aplicação.
  - [X]  Use um campo chamado `createdAt` para armazenar a data de criação das entidades.
- *Back-end*
  - [X]  Implemente o *back-end* da aplicação em **Node + Express** seguindo a arquitetura de *routes*, *controllers* e *middlewares*.
  - [X]  Dados sensíveis (como senhas) devem estar criptografadas.
  - [X]  Proteja sua aplicação contra ataques do tipo *SQL Injection*.
  - [X]  Faça *deploy* do *back-end* no Heroku (+ Heroku Postgres).

## ☑️ Bônus

  - [X]  Procure por *Repository Pattern* e aplique-o para gerenciar os acessos ao banco de dados.
  - [X]  Generalize a validação de *schemas* em um único *middleware*.
  - [ ]  Desenvolva o front-end da aplicação 
  - [ ]  Faça o deploy da aplicação na Vercel
