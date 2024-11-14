import Card from "./components/Card"


export default function ListCards(){
    const lista = [
        { id:1, nome: "Livro 1" preco: 100},
        { id:2, nome: "Livro 2" preco: 110},
        { id:3, nome: "Livro 3" preco: 120},
    ];

    return (
        lista.map(produto =>
            <Card titulo={produto.nome}>
                <h3>{produto.preco}</h3>
            </Card>

        )
    )
}