import React from 'react';
import ImagePerso1 from '../../assets/images/persos/player1.png';
import ImagePerso2 from '../../assets/images/persos/player2.png';
import ImagePerso3 from '../../assets/images/persos/player3.png';
import ClassesPerso from './ImagePerso.module.css';

const ImagePerso = (props) =>{
    //const classdroite = `${ClassesPerso.fleche} ${ClassesPerso.droite} col-3`;
    const classgauche = `${ClassesPerso.fleche} ${ClassesPerso.gauche} col-2 ms-2`;
    let imageToPrint = "";
    if(props.numImage === 1) imageToPrint=ImagePerso1;
    else if(props.numImage === 2) imageToPrint=ImagePerso2;
    else if(props.numImage === 3) imageToPrint=ImagePerso3;
    return (
        <div className="row no-guetters text-center align-items-center">
            <div className={classgauche} onClick={props.flecheGauche}></div>
            <div className="col"><img src={imageToPrint} alt="imagePerso" /></div>
            <div className={["col-2 ms-2",ClassesPerso.fleche,ClassesPerso.droite].join(' ')} onClick={props.flecheDroite}></div>
            
        </div>
    )
}
export default ImagePerso;