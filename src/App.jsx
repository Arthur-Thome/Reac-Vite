import Card from "./components/Card"
import Hello from "./components/Hello"

function App() {
  const name = "Fulano"
  return (
    <>
    <h1> App Exemplo</h1>
    <Hello />
    <Hello nome="Arthur" />
    <Hello nome={name}/>
    <Card titulo="Livro 1">
      <h3>Descrição</h3>
      <p>Detalhe</p>
    </Card>
    <Card titulo="Livro 2">
      <h3>Descrição</h3>
      <p>Detalhe</p>
    </Card>
    </>
  )
}

export default App
