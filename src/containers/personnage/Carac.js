import React from 'react'
import Classes from './Carac.module.css'

const Carac = (props) => {
    let carre = [];
    for(let i=0;i< props.nbPoints; i++){
        carre.push(<div key={i} className={Classes.points}></div>)
    }
    return (
        <div className="d-flex flex-row">
            <div className = {[ Classes.signe, Classes.moins ].join(' ')} onClick={props.moins}></div>
            <div className="d-flex flex-row">{props.children} : {carre}</div>
            <div className = {[ Classes.signe, Classes.plus ].join(' ')} onClick={props.plus}></div>
        </div>
    )
}

export default Carac;