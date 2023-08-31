import React, {useState, useEffect} from 'react'
import PropTypes from "prop-types"

export default function Formulario({nombre}) {
    const [nom, setNom] = useState(nombre);
    const cambiar = async() =>{
        let res = await (await fetch("http://localhost:5010/pruebas")).json();
        setNom(JSON.stringify(res));
        
    };
    useEffect(()=>{
        const btn = document.querySelector("#Xd")
        console.log(btn);
    })

    return (
        <>
            <div>Formulario</div>
            <button onClick={cambiar}>Click</button>
            <div id='Xd'>{nom}</div>
        </>
    )
}


Formulario.propTypes = {
    nombre : PropTypes.string.isRequired
}

Formulario.defaultProps = {
    nombre: "Santi"
}