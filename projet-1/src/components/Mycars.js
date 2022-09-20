import React, { Component } from "react";
import Car from './Cars';

class Mycars extends Component {

    render(){

        console.log(this);

        return (

            <div>
                <h1> {this.props.title} </h1>
               <Car color = "red">Ford</Car>
               <Car>Toyota</Car>
               <Car color = "vert"></Car>

            </div>
        )
    }
}

export default Mycars;