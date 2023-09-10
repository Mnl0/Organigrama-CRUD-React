import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    //destructuring
    const { titulo, colorPrimario, colorSecundario, id } = props.datos;
    const { colaboradores , eliminarColaborador, actualizarColor,like} = props;
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    const estiloTitulo = {
        borderColor: colorPrimario
    }
    //console.log(colaboradores.length)

    return <>
        {
        colaboradores.length > 0 &&//condicional
        <section className='equipo' style={obj}>
                    <input
                        type="color"
                        className='input-color' 
                        value={colorPrimario}
                        onChange={(e) => {
                            //console.log(e.target.value);
                            actualizarColor(e.target.value, id)
                         }}
                        />
        <h3 style={estiloTitulo}>
            {titulo}
                    </h3>
            <div className='colaboradores'>
                {
                    colaboradores.map((colaborador, index) => {
                        return <Colaborador
                            key={index}
                            datos={colaborador}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />
                    })
                }
            </div>
        </section>
        }
    </>
}
export default Equipo;