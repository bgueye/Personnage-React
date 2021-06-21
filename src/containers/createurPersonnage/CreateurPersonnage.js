import React, { Component } from 'react'
import Titre from '../../components/titres/Titre';
import Personnage from '../personnage/Personnage';
import Arme from '../arme/Arme';
import Bouton from '../../components/Bouton';
import axios from 'axios';

class CreateurPersonnage extends Component {
    state = {
        personnage:{
            image:1,
            force:0,
            agilite:0,
            intelligence:0,
            arme:null
        },
        armes:null,
        nbPointsDisponibles: 7,
        loading:false
    }
    
    handleImagePrecedante = ()=>{
        this.setState(oldState =>{
            const newPersonnage = {...oldState.personnage};
            if(oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image --;
            return {personnage:newPersonnage};
        })
    }

    handleImageSuivante = ()=>{
        this.setState(oldState =>{
            const newPersonnage = {...oldState.personnage};
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image ++;
            return {personnage:newPersonnage};
        })
    }
    
    HandleAjouterPoint = (carac)=>{
        this.setState((oldState,props)=>{
            if (oldState.personnage[carac] >= 5 || oldState.nbPointsDisponibles === 0) return null;
            const newPersonnage = {...oldState.personnage};
            const newPointsCarac = oldState.personnage[carac] + 1;
            const nbPointsDisponibles = oldState.nbPointsDisponibles - 1;
            newPersonnage[carac] = newPointsCarac;
            return{
                personnage:newPersonnage,
                nbPointsDisponibles:nbPointsDisponibles
            }
        })
    }

    handleEnleverPoint = (carac) => {
        this.setState((oldState,props)=>{
            if (oldState.personnage[carac] <= 0 || oldState.nbPointsDisponibles >= 7) return null;
            const newPersonnage = {...oldState.personnage};
            const newPointsCarac = oldState.personnage[carac] - 1;
            const nbPointsDisponibles = oldState.nbPointsDisponibles + 1;
            newPersonnage[carac] = newPointsCarac;
            return{
                personnage:newPersonnage,
                nbPointsDisponibles:nbPointsDisponibles
            }
        })
    }

    handleChangeArmePersonnage =(arme)=>{
        const newPersonnage = {...this.state.personnage};
        newPersonnage.arme = arme;
        this.setState({personnage:newPersonnage});
    }

    handleReset=()=>{
        this.setState({
            personnage:{
                image:1,
                force:0,
                agilite:0,
                intelligence:0,
                arme:null
            },
            armes:["epee","fleau", "arc", "hache"],
            nbPointsDisponibles: 7            
        })
    }

    handleCreation = ()=>{
        alert("Création de personnage")
    }

    componentDidMount = () => {
        this.setState({loading:true})
        axios.get("https://reactpersonnage-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
            .then(reponse => {
                const armesArray = Object.values(reponse.data);
                this.setState({
                    armes:armesArray,
                    loading:false
                });
            })
            .catch(error => {
                this.state({
                    loading:false
                })
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Titre>Créateur de personnage</Titre>
                </div>
                <div>
                    <Personnage 
                        {...this.state.personnage}
                        precedante = {this.handleImagePrecedante}
                        suivante = {this.handleImageSuivante}
                        nbPointsDisponibles = {this.state.nbPointsDisponibles}
                        ajouterPoint = {this.HandleAjouterPoint}
                        enleverPoint = {this.handleEnleverPoint}
                    />
                </div>
                <div>
                    {this.state.loading && <div>Chargement...</div>}
                    {this.state.armes &&
                        <Arme 
                            listeArmes = {this.state.armes}
                            changeArme = {this.handleChangeArmePersonnage}
                            currentArme = {this.state.personnage.arme}
                        />
                    }
                </div>
                <div className="row no-guetters">
                    <Bouton typeBtn='btn-lg btn-primary col-6' click={this.handleReset}>Réinitialiser</Bouton>
                    <Bouton typeBtn='btn-lg btn-success col-6' click={this.handleCreation}>Créer</Bouton>
                </div>
            </div>
        )
    }
}

export default CreateurPersonnage;