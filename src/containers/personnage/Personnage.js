import React, { Component } from 'react'
import ImagePerso from './imagePerso';

 class Personnage extends Component {

    render() {
        return (
            <div className="row no-guetters">
                <div className="col-6">
                    <ImagePerso numImage={this.props.image}/>
                </div>
                <div className="col-6">
                    <p>Force: {this.props.force}</p>
                    <p>Agilité: {this.props.agilite}</p>
                    <p>Intelligence: {this.props.intelligence}</p>
                </div>
            </div>
        )
    }
}

export default Personnage;