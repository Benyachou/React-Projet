import React from "react";

const Car = ({children, color}) => {

    const colorInfo = color ? (<p>Couleur: { color } </p> ) : ( <p>Couleur: pas de couleur</p> );

    if (children) {
        return (
            <div className="cars">
        
            <p>Marque: {children} </p>
            { colorInfo }
        
            </div>
        )
    }else{
        return(
            <div className="cars">
                <p>Pas d'info</p>

            </div>
        )

    }

}

export default Car;