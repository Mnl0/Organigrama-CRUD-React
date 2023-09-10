import './Colaborador.css'; 
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario , eliminarColaborador, like } = props;
    const obj = {
        backgroundColor: colorPrimario
    };
    return <div className="colaborador">
        <AiFillCloseCircle className='eliminar' onClick={()=>eliminarColaborador(id)}/>
        <div className='encabezado' style={obj}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />
            }
        </div>
    </div>
}

export default Colaborador;