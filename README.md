# Catálogo de Livros API Flask + React

## Objetivo

Desenvolver uma aplicação web que consome uma API criada com Python e Flask, permitindo consultar informações de três livros por meio de uma interface desenvolvida em React.

## Livros disponíveis

- O Príncipe: Nicolau Maquiavel
- A Arte da Guerra: Sun Tzu
- Dom Quixote: Miguel de Cervantes

## Tecnologias utilizadas

**Backend**
- Python
- Flask

**Frontend**
- React
- JavaScript
- Vite
- CSS

## Estrutura do projeto

```text
api-livros/
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── App.css
        └── main.jsx
```

## Instalação e execução

### 1. Backend — Flask

Crie e ative o ambiente virtual:

```bash
python -m venv venv
```

No Windows:

```powershell
venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie o servidor:

```bash
python app.py
```

A API estará disponível em:

http://127.0.0.1:5000/livros

### 2. Frontend — React

Abra outro terminal e acesse a pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

http://localhost:5173/

## Funcionalidades

- Consulta dos livros por meio de um botão.
- Integração entre React e API Flask.
- Exibição do ID, título, autor e ano de publicação.
- Mensagem de carregamento durante a consulta.
- Tratamento de erros caso a API esteja indisponível.

## Rota da API

**GET /livros**

Retorna os dados dos três livros em formato JSON.

## Autor

Desenvolvido como atividade acadêmica utilizando Python, Flask e React.