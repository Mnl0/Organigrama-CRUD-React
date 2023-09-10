import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg/Index";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";
import { v4 as uuid } from 'uuid';

function App() {

	const [mostrarFormulario, actualizarMostrar] = useState(false);
	const [colaboradores, setColaboradores] = useState([
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'Front End',
		fav: true,
		},
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'Front End',
			fav: true,
		},
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'Front End',
			fav: false,
		},
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'DevOps',
			fav: false,
		},
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'Data Science',
			fav: false,
		},
		{
		id: uuid(),
		nombre: 'Manuel Monjes',
		puesto: 'Front End Developer',
		foto: 'https://github.com/mnl0.png',
			equipo: 'Programacion',
			fav: false,
	},
	]); // [] es un arreglo vacio

	const [equipos, setEquipos] = useState([
		{
			id: uuid(),
			titulo: 'Programacion',
			colorPrimario: '#57C278 ',
			colorSecundario: '#D9F7E9',
		},
		{
			id: uuid(),
			titulo: 'Front End',
			colorPrimario: '#82CFFA',
			colorSecundario: '#E8F8FF',
		},
		{
			id: uuid(),
			titulo: 'Data Science',
			colorPrimario: '#A6D157',
			colorSecundario: '#F0F8E2',
		},
		{
			id: uuid(),
			titulo: 'DevOps',
			colorPrimario: '#E06B69',
			colorSecundario: '#FDE7E8',
		},
		{
			id: uuid(),
			titulo: 'UX y Diseno',
			colorPrimario: '#DB6EBF',
			colorSecundario: '#FAE9F5',
		},
		{
			id: uuid(),
			titulo: 'Movil',
			colorPrimario: '#FFBA05',
			colorSecundario: '#FFF5D9',

		},
		{
			id: uuid(),
			titulo: 'Innovacion y Gestion',
			colorPrimario: '#FF8A29',
			colorSecundario: '#FFEEDF',
		},
	]);
	
	//ternario --> condicion ? verdadero : falso
	//condicion && verdadero
	
	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	}
	//regristrar colaborador
	const registrarColaborador = (colaborador) => {
		//console.log('nuevo colaborador', colaborador);
		//spread operator
		setColaboradores([...colaboradores, colaborador])
	}

	//eliminar colaborador
	const eliminarColaborador = (id) => {
		//console.log('eliminar colaborador', id);
		const colaboradoresActualizados = colaboradores.filter((colaborador) => colaborador.id !== id);
		setColaboradores(colaboradoresActualizados);
	}

	//actualizar color de equipo
	const actualizarColor = (color, id) => { 
		//console.log('actualizar color', color, id);
		const equiposActualizados = equipos.map((equipo) => {
			if(equipo.id === id){
				equipo.colorPrimario = color;
			}
			return equipo;
		});
		setEquipos(equiposActualizados);
	}
	
	//crear equipo
	const crearEquipo = (nuevoEquipo) => {
		//console.log(nuevoEquipo);
		setEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
		
	}
	
	//like
	const like = (id) => { 
		console.log('like', id);
		const colaboradoresActualizados = colaboradores.map((colaborador) => {
			if(colaborador.id === id){
				colaborador.fav = !colaborador.fav;
			}
			return colaborador;
		});
		setColaboradores(colaboradoresActualizados);
	}

	return (
		<div>
			<Header />
			{/*mostrarFormulario ? <Formulario /> : <></>*/}
			{
				mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
					registrarColaborador={registrarColaborador}
					crearEquipo={crearEquipo}
			/>}
			

			<MiOrg cambiarMostrar={cambiarMostrar} />
			
			{
				equipos.map((equipo, index) => {
					return <Equipo
						key={equipo.titulo}//index
						datos={equipo}
						//titulo={equipo.titulo}
						//colorPrimario={equipo.colorPrimario}
						//colorSecundario={equipo.colorSecundario}
						colaboradores={colaboradores.filter((colaborador => colaborador.equipo === equipo.titulo))}
						eliminarColaborador={eliminarColaborador}
						actualizarColor={actualizarColor}
						like={like}
					/>
				})
			}
			<Footer />

		</div>
	);
}

export default App;
