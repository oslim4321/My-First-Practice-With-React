

function Button(prom){

 let {mystyle,label,className}=prom

    return(
        <>
            <button className={className} style={mystyle}>{label} </button>
            
        </>

    )
}
export default Button