function Wrapper ({children}) {
  
  console.log(children);
  
        return (

            <div className="cars">
              {children}
            </div>

)

}

export default Wrapper;