
import Item from './components/itens';
import Card from './components/card';

const App = () => {

  return (
    //<h1>Inicio do projeto React App</h1> => pode ser iniciado assim.
    // para ter componentes pai e filhos deve ser usado <div> ou "react fragment <> </>"
    // exemplo abaixo.

    // ASSIM

    // <div>
    //   <h1>Inicio do projeto React App</h1>
    //   <p>Descrição do projeto React.</p>
    // </div>


    // OU ASSIM "REACT FRAGMENTE"

    <>
      <h1>Inicio do projeto React App</h1>
      <p>Para estudar :</p>
      <ul>
            {/* Usando a importação de componentes 
            (PRESTAR A ATENÇÃO DE COMO CHAMAR O => ITEM ==>> [ <Item / >]) a BARRA VEM DEPOIS */}  

          {/* Aqui foi usado a    {props.text} */}
                  {/*  <Item text=' Payton'/> 
                  <Item text='Java'/>
                  <Item text='Ruby'/> */}

           {/* Aqui a {props.children} */}
                  <Item>
                    Payton
                  </Item>
                  <Item>
                    Java
                  </Item>
                  <Item>
                    Ruby
                  </Item>
      </ul>

      <Card />

      </>

    ) 

}

export default App;


/* outra forma de declarar.

export default function App () {
  
  return (
    <h1> seu texto </h1>
  )
}

*/