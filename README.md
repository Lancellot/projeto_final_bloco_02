# 💊 Sistema de Gerenciamento de Farmácia

API RESTful desenvolvida com NestJS e TypeORM para gerenciar um sistema de farmácia, incluindo controle de categorias, produtos, estoque e vendas.

## 🚀 Tecnologias

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo para construção de aplicações server-side
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[MySQL](https://www.mysql.com/)** - Sistema de gerenciamento de banco de dados
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Class Validator](https://github.com/typestack/class-validator)** - Validação baseada em decorators
- **[Class Transformer](https://github.com/typestack/class-transformer)** - Transformação de objetos

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- MySQL (v8 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd projeto_final_bloco_02
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=db_farmacia
DB_USERNAME=root
DB_PASSWORD=sua_senha
```

4. Certifique-se de que o MySQL está rodando e crie o banco de dados:
```sql
CREATE DATABASE db_farmacia;
```

## 🎮 Executando a aplicação

### Desenvolvimento
```bash
# Modo desenvolvimento (com hot-reload)
npm run start:dev

# Modo desenvolvimento com arquivo .env
npm run start:env
```

### Produção
```bash
# Build da aplicação
npm run build

# Executar em produção
npm run start:prod
```

A aplicação estará disponível em `http://localhost:3000`

## 📚 Estrutura do Projeto

```
src/
├── categoria/
│   ├── entities/
│   │   └── categoria.entity.ts    # Entidade Categoria
│   ├── controllers/
│   │   └── categoria.controller.ts # Controller de Categoria
│   ├── services/
│   │   └── categoria.service.ts    # Service de Categoria
│   └── categoria.module.ts          # Módulo de Categoria
├── app.module.ts                    # Módulo principal
└── main.ts                          # Arquivo de entrada
```

## 🗄️ Modelo de Dados

### Categoria
Representa as categorias de produtos da farmácia.

| Campo      | Tipo         | Descrição                    |
|------------|--------------|------------------------------|
| id         | number       | Identificador único (PK)     |
| nome       | string(255)  | Nome da categoria            |
| descricao  | string(500)  | Descrição da categoria       |

## 🔌 Endpoints da API

### Categorias

| Método | Endpoint              | Descrição                    |
|--------|-----------------------|------------------------------|
| GET    | `/categoria`          | Lista todas as categorias    |
| GET    | `/categoria/:id`      | Busca categoria por ID       |
| POST   | `/categoria`          | Cria nova categoria          |
| PUT    | `/categoria/:id`      | Atualiza categoria           |
| DELETE | `/categoria/:id`      | Remove categoria             |

### Exemplo de requisição POST `/categoria`:
```json
{
  "nome": "Medicamentos",
  "descricao": "Produtos farmacêuticos e medicamentos controlados"
}
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov

# Testes em modo watch
npm run test:watch
```

## 🎨 Formatação e Lint

```bash
# Formatar código
npm run format

# Executar lint
npm run lint
```

## 📝 Funcionalidades Planejadas

- [ ] CRUD completo de Produtos
- [ ] CRUD de Clientes
- [ ] Sistema de Estoque
- [ ] Controle de Vendas
- [ ] Relatórios
- [ ] Sistema de Autenticação (JWT)
- [ ] Autorização baseada em roles
- [ ] Documentação Swagger

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Padrão de Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração de código
- `test`: Testes
- `chore`: Tarefas gerais

## 📜 Licença

UNLICENSED

## 👤 Autor

Desenvolvido como projeto final do Bloco 02 - Generation Brasil

---

⌨️ com ❤️ por [Assis](https://github.com/seu-usuario)
