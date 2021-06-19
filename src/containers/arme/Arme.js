import React from 'react';
import Armes from './Armes';
import imgArc from '../../assets/images/armes/arc.png'
import imgEpee from '../../assets/images/armes/epee.png'
import imgFleau from '../../assets/images/armes/fleau.png'
import imgHache from '../../assets/images/armes/hache.png'

 const arme = (props) => {
    return (
        <div className="row no-guetters">
            {props.listeArmes.map(arme =>{
                let imgArme = "";
                switch (arme){
                    case "arc" : imgArme = imgArc;
                    break;
                    case "epee" : imgArme = imgEpee;
                    break;
                    case "fleau" : imgArme = imgFleau;
                    break;
                    case "hache" : imgArme = imgHache;
                    break;
                }
                return (
                    <div className="col-3" key={arme}>
                        <Armes 
                            imageArme={imgArme}
                            isCurrentArme = {props.currentArme === arme }
                            click={()=>props.changeArme(arme)}
                        >{arme}</Armes>
                    </div>
                )
            })}
        </div>
    )
}

export default arme;