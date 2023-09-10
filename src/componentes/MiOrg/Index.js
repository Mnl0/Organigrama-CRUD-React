import {useState} from 'react';
import './MiOrg.css';
 
const MiOrg = (props) => {
    //console.log('props', props);
    // const [mostrar, actuzalizarMostrar] = useState(true);
    // const manejarClick = () => { 
    //     console.log('Mostrar/Ocultar elementos', mostrar);
    //     actuzalizarMostrar(!mostrar);
    // }
    
    return <section className='orgSection'> 
        <h3 className='title'> Mi Organizacion</h3>
        <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;