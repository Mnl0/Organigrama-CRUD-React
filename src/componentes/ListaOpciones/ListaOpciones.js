import './ListaOpciones.css'

const ListaOpciones = (props) => {

    // const equipos = [
    //     'Programacion',
    //     'Front End',
    //     'Data Science',
    //     'DevOps',
    //     'UX y Diseno',
    //     'Movil',
    //     'Innovacion y Gestion'
    // ];

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value);
        props.setValor(e.target.value);
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select
            value={props.valor}
            onChange={manejarCambio}
        >
            <option
                value=""
                disabled defaultValue=""
                hidden>Seleccionar equipo
            </option>
            {props.equipos.map((equipo,index) => {
                return <option key={index} >{equipo}</option>
             })}                
        </select>
    </div>
}

export default ListaOpciones;