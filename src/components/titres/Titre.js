import React from 'react'
import Classes from './Titre.module.css';

const Titre = (props) => {
    const classCss = `${Classes.titre} border border-dark p-2 mt-2 text-white text-center bg-success rounded`;
    return (
        <h1 className={classCss}>{props.children}</h1>
    )
}

export default Titre
