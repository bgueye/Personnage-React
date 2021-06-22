import React, { Component } from 'react'
import axios from 'axios'
import Titre from '../../components/titres/Titre'
import Personnage from './Personnage/Personnage'

class ListPersonnage extends Component {
    state = {
        personnage: null,
        loading: false
    }


    componentDidMount = () => {
        this.setState({loading:true})
        axios.get("https://reactpersonnage-default-rtdb.europe-west1.firebasedatabase.app/persos.json")
            .then(res => {
                const personnage = Object.values(res.data)
                this.setState({personnage, loading:false})
            })
            .catch(err => {
                this.setState({loading:false})
                console.log(err)
            })
    }


    render() {
        return (
            <div className="container">
                {this.state.loading && <div>En chargement...</div> }
                {this.state.personnage &&
                    <div className="row no-guetters">
                        {this.state.personnage.map((perso,index) => {
                            return (
                                <div className="col-6" key={index}>
                                    <Titre>{perso.nom}</Titre>
                                    <Personnage {...perso.perso}/>
                                </div>
                            )
                        })}

                    </div>
                }
            </div>
        )
    }
}
export default ListPersonnage