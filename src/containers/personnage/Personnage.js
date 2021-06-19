import React, { Component } from 'react'
import ImagePerso from './imagePerso';
import CaracPerso from './CaracPerso';

 class Personnage extends Component {

    render() {
        return (
            <div className="row no-guetters">
                <div className="col-6">
                    <ImagePerso 
                        numImage={this.props.image}
                        flecheGauche = {this.props.precedante}
                        flecheDroite = {this.props.suivante}
                    />
                </div>
                <div className="col-6">
                    <CaracPerso 
                        nbPointsDisponibles = {this.props.nbPointsDisponibles}
                        force= {this.props.force}
                        agilite= {this.props.agilite}
                        intelligence= {this.props.intelligence}
                        ajouterPoint = {this.props.ajouterPoint}
                        enleverPoint = {this.props.enleverPoint}
                    />
                </div>
            </div>
        )
    }
}

export default Personnage;