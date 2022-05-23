## Dependencias Instaladas no BackEnd da Nossa Aplicação

- Typescript

  - comandos:
    npm i typescript @types/node ts-node-dev -D
    npx tsc --init

- Express

  - comandos:
    npm i express
    npm i -D @types/express

- Prisma
  - comando:
    npm i prisma -D
- Prisma/Client
  -comando:
  npm i @prisma/client

  - criando tabela de bd

    -comando:
    npx prisma migrate dev

- nodemailer, para envio de e-mails
  - comando:
  npm install nodemailer
  - corrigindo erro do express
    - comando:
    npm install @types/nodemailer -D




# Environment variables declared in this file are automatically made available to Prisma.

# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB (Preview).

# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"