import './Card.css'

function Card(props){
    function mostrarAlerta(){
        alert(`Card ${props.titulo}`)
    }
    return(
        <div className='cardFull'>
            <div className='card' onClick={mostrarAlerta}>
                <div className='card-titulo'>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default Card;