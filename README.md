# Backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
docker-compose up -d

# Create database structure
node ace migration:run

# install dependencies
npm install

# server with changes watcher
npm run dev

# build for production and launch server
npm run build
npm run start
```
---
## Comandos Úteis

```bash
# Create migrations and prepare for creating tables
node ace make:migration posts

# Create tables: executa o comando UP das migrations não executadas
node ace migration:run

# Drop tables: executa o comando DOWN da última migration executada
node ace migration:rollback

# Create new migration: permite excluir uma única coluna da tabela
node ace make:migration del_slug_column --table:posts

# Create new model: cria uma nova classe
node ace make:model Post

# Exibe o status das migrations
node ace migration:status
```
![node ace migration:status](./assets/migration_status.png)
