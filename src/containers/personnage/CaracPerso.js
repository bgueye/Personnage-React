import React from 'react'
import Carac from './Carac'

const CaracPerso =(props) =>{
    return (
        <>
            <div>
                Points restants:
                <span className="badge bg-success">
                    {props.nbPointsDisponibles}
                </span>
            </div>
            <div>
                <Carac 
                    nbPoints = {props.force}
                    moins = {()=> props.enleverPoint('force')}
                    plus = {()=> props.ajouterPoint('force')}
                >
                Force
                </Carac>
                <Carac                 
                    nbPoints = {props.agilite}
                    moins = {()=> props.enleverPoint('agilite')}
                    plus = {()=> props.ajouterPoint('agilite')}                    
                >
                Agilité
                </Carac>
                <Carac 
                    nbPoints ={props.intelligence}
                    moins = {()=> props.enleverPoint('intelligence')}
                    plus = {()=> props.ajouterPoint('intelligence')}                    
                >
                Intelligence
                </Carac>   
            </div>
            
        </>
    )
}
export default CaracPerso