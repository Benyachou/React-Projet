import React, { Component } from "react";
import Car from './Cars';
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";
class Mycars extends Component {

    state = {
        cars : ['Toyota', "Renault", "Ford"]
    }
    
    noCopy = () => {
        alert("Merci de ne pas copier le texte");
    }

    addStyle = (e) => {

        if (e.target.classList.contains("styled")) {
            e.target.classList.remove("styled");
        } else {
            e.target.classList.add("styled");
        }
    }

    render(){
        return (

            <div>
                <Wrapper>
                    <MyHeader>
                        <h1 onMouseOver = {this.addStyle}>
                            {this.props.title}
                        </h1>
                    </MyHeader>
                </Wrapper>

                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet.</p>

               <Car color = "red"> {this.state.cars[0]} </Car>
               <Car> {this.state.cars[1]} </Car>
               <Car color = "vert"> {this.state.cars[2]} </Car>

            </div>
        )
    }
}

export default Mycars;