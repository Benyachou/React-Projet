const Car = ({children, color}) => {

    let colorInfo = "";

    if(color) {
        colorInfo = color;
    } else {
        colorInfo = "Couleur standar"
    }

 
    return   children && (
        <div className="cars">
            <p>Marque: {children}</p>
            <p>Couleur: {colorInfo}</p>
        </div>
    )
    

}

export default Car;