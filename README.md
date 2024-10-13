# Como rodar localmente o projeto.

## Pré-requisitos

1. **Instalar o Node.js** - [Baixar e instalar](https://nodejs.org/)
2. **Instalar o PostgreSQL** - [Baixar e instalar](https://www.postgresql.org/download/)

## Configuração do Banco de Dados

1. **Criar um banco de dados no PostgreSQL:**
   - Após instalar o PostgreSQL, abra o terminal e conecte-se ao banco de dados com o comando:
     ```bash
     psql -U postgres
     ```
   - Crie um banco de dados para o projeto:
     ```sql
     CREATE DATABASE nome_do_banco;
     ```
   - Crie um usuário e defina a senha:
     ```sql
     CREATE USER nome_do_usuario WITH ENCRYPTED PASSWORD 'sua_senha';
     ```
   - Dê permissão ao usuário no banco de dados:
     ```sql
     GRANT ALL PRIVILEGES ON DATABASE nome_do_banco TO nome_do_usuario;
     ```
   
2. **Configurar o arquivo `.env`** - Crie um arquivo `.env` na raiz do projeto e adicione as configurações de banco de dados. Por exemplo:
   ```plaintext
        DB_USERNAME_DEV=your_db_username
        DB_PASSWORD_DEV=your_db_password
        DB_DATABASE_DEV=your_db_name
        DB_HOST_DEV=your_db_port
        DB_DIALECT_DEV=your_db_dialect

        DB_USERNAME_PROD=your_db_username
        DB_PASSWORD_PROD=your_db_password
        DB_DATABASE_PROD=your_db_name
        DB_HOST_PROD=your_db_port
        DB_DIALECT_PROD=your_db_dialect

        PORT=your_port
   ```

## Instalação do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/ZBMF-Labs/FCS_backend.git
   ```
   
2. **Instale as dependências**:
   ```bash
   cd FCS_backend
   npm install
   ```

## Executar o Banco de Dados e Aplicar as Migrations

1. **Rodar as migrations para configurar o banco de dados**:
   ```bash
   npx sequelize db:migrate
   ```

## Executar o Projeto

1. **Iniciar o servidor**:
   ```bash
   npm run dev
   ```
   
2. O servidor estará disponível em `http://localhost:<porta>`

## Observações

- Banco de dados local: Cada desenvolvedor terá uma cópia local do banco de dados e rodará as migrations para criar as tabelas. Isso permite que cada pessoa faça testes independentemente sem afetar o ambiente dos outros.

- Ambiente de desenvolvimento: Mantenha o arquivo .env fora do repositório principal para proteger as credenciais locais e compartilhe o arquivo ou um modelo de configuração diretamente entre os desenvolvedores.