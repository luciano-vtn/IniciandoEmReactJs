
import { useState } from "react";
import Button from '../Button';

const Card = () => {

    const [valor, setValor] = useState(0)

        function Mais (){
            setValor(valor + 1)
        }

        function Menos (){
            setValor(valor - 1)
        }

    return(
        <div className="card">
            <div className="card-header">
                Meu Primeiro Card
            </div>
                <div className="card-body">               
                    <p>Meu Texto no Card.</p>
                    <p>O que é Lorem Ipsum?
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria 
                        tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou 
                        para fazer um livro de modelos de tipos.</p>
                </div>

                <div className="botao">
                    <center><p>Adicionando botões no Card</p></center>                                        
                        <center>
                            <Button                           
                                className="btn btn-success"
                                onClick = { Mais }
                            >                                
                                   Mais
                            </Button><p/>
                        </center>

                    <center><p>{valor}</p></center>

                        <center>
                            <Button 
                            className="btn btn-danger"
                            onclick = { Menos }
                            >
                                Menos
                            </Button>
                        </center>
                </div>

        </div>
        )
}

export default Card;