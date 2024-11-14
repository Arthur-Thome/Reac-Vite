import Card from "./components/Card"
import Hello from "./components/Hello"
import ListCards from "./components/ListCards"

function App() {
  const name = "Fulano"
  return (
    <>
    <h1> App Exemplo</h1>
    <Hello />
    <Hello nome="Arthur" />
    <Hello nome={name}/>
    <Card titulo="Titulo 1">
      <h3>Descrição</h3>
      <p>Detalhe</p>
    </Card>
    <Card titulo="Titulo 2">
      <h3>Descrição</h3>
      <p>Detalhe</p>
    </Card>
    <ListCards />
    </>
  )
}

export default App
