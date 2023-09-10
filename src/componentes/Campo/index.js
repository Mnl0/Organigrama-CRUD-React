import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {
    const [valor, setValor] = useState('');
    const placeholderModifi = `${props.placeholder}...`;
    //destructuracion
    const { type = 'text'}=props;

    const manejraCambio = (e) => {
        console.log('Manejar el cambio', e.target.value); 
        props.setValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input
            type={type}
            placeholder={placeholderModifi}
            required={props.required}
            value={props.valor}
            onChange={manejraCambio}
        />
    </div>
}

export default Campo;