import React, { Component } from "react";
import Car from './Cars';

class Mycars extends Component {
    
    render(){
 

        return (

            <div>
                <div className="title">
                    <h1> {this.props.title} </h1>
                </div>

               <Car color = "red">Ford</Car>
               <Car>Toyota</Car>
               <Car color = "vert"></Car>

            </div>
        )
    }
}

export default Mycars;