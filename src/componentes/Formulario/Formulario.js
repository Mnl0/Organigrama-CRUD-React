import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";//importacion con el archivo index.js
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const {registrarColaborador, crearEquipo} = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    //console.log('Manejar el envio');
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosEnviar);
    
  }

  const manejarNuevoEquipo = (e) => { 
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo='Nombre'
          placeholder='Ingresar Nombre'
          required
          valor={nombre}
          setValor={setNombre}
          />
        <Campo
          titulo='Puesto'
          placeholder='Ingresar Puesto'
          required 
          valor={puesto}
          setValor = {setPuesto}
          />
        <Campo
          titulo='Foto'
          placeholder='Ingresar enlace de Foto'
          required
          valor={foto}
          setValor = {setFoto}
        />
        <ListaOpciones 
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        /> 
        <Boton>Crear</Boton>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo='Titulo'
          placeholder='Ingresar Titulo'
          required
          valor={titulo}
          setValor = {setTitulo}
          />
        <Campo
          titulo='Color'
          placeholder='Ingresar en hexadecimal'
          required 
          valor={color}
          setValor={setColor}
          type='color'
        />
        <Boton>regristrar equipo</Boton>
        </form>
    </section>
  );
};
export default Formulario;





