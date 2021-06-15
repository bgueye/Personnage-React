import React, { Component } from 'react'
import Titre from '../../components/titres/Titre';
import Personnage from '../personnage/Personnage';
import Arme from '../arme/Arme';
import Bouton from '../../components/Bouton';

class CreateurPersonnage extends Component {
    state = {
        personnage:{
            image:3,
            force:0,
            agilite:0,
            intelligence:0}
        }
    render() {
        return (
            <div className="container">
                <div>
                    <Titre>Créateur de personnage</Titre>
                </div>
                <div>
                    <Personnage {...this.state.personnage}/>
                </div>
                <div>
                    <Arme />
                </div>
                <div className="row no-guetters">
                    <Bouton typeBtn='btn-lg btn-primary col-6' click={() => console.log('Réinitialisation du personnage')}>Réinitialiser</Bouton>
                    <Bouton typeBtn='btn-lg btn-success col-6' click={() => console.log("Création d'un personnage")}>Créer</Bouton>
                </div>
            </div>
        )
    }
}

export default CreateurPersonnage;