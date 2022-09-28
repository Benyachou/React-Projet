import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'Rouge', year: 2000},
            {name: 'Toyota', color: 'Noir', year: 2010},
            {name: 'Renault', color: 'Blanc', year: 2014},
        ]
    }


    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                    
                <Car color={this.state.voitures[0].color} year={this.state.voitures[0].year} > {this.state.voitures[0].name} </Car>
                <Car color={this.state.voitures[1].color} year={this.state.voitures[1].year}> {this.state.voitures[1].name} </Car>
                <Car color={this.state.voitures[2].color} year={this.state.voitures[2].year}> {this.state.voitures[2].name} </Car>
            </div>
           
        )
    }
}

export default Mycars