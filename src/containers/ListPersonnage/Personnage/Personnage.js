import React from 'react'
import ImagePlayer1 from '../../../assets/images/persos/player1.png';
import ImagePlayer2 from '../../../assets/images/persos/player2.png';
import ImagePlayer3 from '../../../assets/images/persos/player3.png';
import imgArc from '../../../assets/images/armes/arc.png'
import imgEpee from '../../../assets/images/armes/epee.png'
import imgFleau from '../../../assets/images/armes/fleau.png'
import imgHache from '../../../assets/images/armes/hache.png'

 const Personnage = (props) => {

    let imgPlayer = "";
    let imgArme = "";

    if(props.image === 1) imgPlayer = ImagePlayer1;
    else if(props.image === 2) imgPlayer = ImagePlayer2;
    else if(props.image === 3) imgPlayer = ImagePlayer3;

    if(props.arme === "arc") imgArme = imgArc;
    else if(props.arme === "epee") imgArme = imgEpee;
    else if(props.arme === "fleau") imgArme = imgFleau;
    else if(props.arme === "hache") imgArme = imgHache;


    return (
        <div className="row no-gutters">
            <div className="col-3">
                <img src={imgPlayer} alt="" width="100%" />
            </div>
            <div className="col-5">
                Force : {props.force} <br />
                Agilité : {props.agilite} <br />
                Intelligence : {props.intelligence}
            </div>
            <div className="col-4">
                <img src={imgArme} alt="" />
            </div>
        </div>
    )
}
export default Personnage