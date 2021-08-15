

const Item = ({children}) => {
    return(
    // Podemos fazer desta forma 
        /* <a href="/" class="list-group-item list-group-item-action list-group-item-primary">
           {props.text}
        </a>  */

    
    // E desta forma ( é a que esta sendo renderizada [ Aqui vamos usar a  => {props.children} ] )

        <a href="/" className="list-group-item list-group-item-action list-group-item-primary">
           {children}
        </a>

    )
}
export default Item;