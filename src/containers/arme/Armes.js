import React from 'react'

const Armes = (props) => {
    return (
        <div>
            <div>
                <img 
                    style={{
                        opacity: props.isCurrentArme ? '1' : '0.5',
                        cursor:"pointer"
                    }}
                    src={props.imageArme} alt={props.children} 
                    onClick={props.click}
                />
                    
            </div>
            {props.children}  
        </div>
    )
}

export default  Armes