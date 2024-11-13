function Hello(props){
    const nome = props.nome ?props.nome: 'World'
    return(
        <h3>Hello {nome}!</h3>
    )
}

export default Hello;