const Button = ({children, className, onClick}) => {
    return (
        <center>
            <button 
                type="button" 
                className= {className}
                onClick =  {onClick}
            >  

                {children}

            </button><p/>
        </center>

    )
}

export default Button;