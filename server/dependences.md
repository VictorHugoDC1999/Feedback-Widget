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
    npx prisma init
    npx prisma migrate dev

- nodemailer, para envio de e-mails

  - comando:
    npm install nodemailer
  - corrigindo erro do express
    - comando:
      npm install @types/nodemailer -D

- Jest
  - comando:
    npm install jest -D
    npx jest --init
    npm install ts-node -D

SWC Jest
  - comando:
  npm i -D jest @swc/jest
  npm i @types/jest -D
