
import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')

    try {
      const resposta = await fetch('/api/livros')

      if (!resposta.ok) {
        throw new Error('Falha na resposta da API')
      }

      const dados = await resposta.json()

      setLivros(dados.livros)
    } catch (error) {
      setErro('Erro ao carregar os livros.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <p>Bem-vindo ao nosso catálogo!</p>

      <button onClick={buscarLivros} disabled={carregando}>
        {carregando ? 'Buscando...' : 'Buscar Livros'}
      </button>

      {carregando && <p>Carregando livros...</p>}

      {erro && <p>{erro}</p>}

      {livros.map((livro) => (
        <div key={livro.id}>
          <p>ID: {livro.id}</p>
          <h2>{livro.titulo}</h2>
          <p>Autor: {livro.autor}</p>
          <p>Ano: {livro.ano}</p>
        </div>
      ))}
    </div>
  )
}

export default App
