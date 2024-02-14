import estilos from './ContactoCarruselReact.module.css'
import { useState } from 'react'

const misImagenes = {
	diseño: '/img/jefes/diseño.png',
	administracion: '/img/jefes/admin.jpg',
	logistica: '/img/jefes/logistica.png',
	ventas: '/img/jefes/sales.jpg',
};

const misTextos = {
	ventas: {
		dep: "Ventas",
		email: "ventas@laauxiliar.es",
		nombre: "Miguel Ángel Latorre",
		telefono: "686 944 933"
	},
	diseño: {
		dep: "Diseño",
		email: "dg@laauxiliar.es",
		nombre: "Vicente Latorre",
		telefono: "657 842 909"
	},
	logistica: {
		dep: "Logística",
		email: "logistica@laauxiliar.es",
		nombre: "Ángel Latorre",
		telefono: "657 803 024"
	},
	admin: {
		dep: "Administración",
		email: "administracion@laauxiliar.es",
		nombre: "Jesús Latorre",
		telefono: "686 944 932"
	},
}
const claves = ['ventas', 'diseño', 'logistica', 'admin'];

export function ContactoCarruselReact() {
	const imagenes = [misImagenes.ventas, misImagenes.diseño, misImagenes.logistica, misImagenes.administracion];
	let textos = [misTextos.ventas, misTextos.diseño, misTextos.logistica, misTextos.admin]

	const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

	return (
		<>
			<div className='flex flex-col m-auto items-center justify-center '>

				{/* //THUMBANILS ================================== */}
				<div className='flex flex-row  gap-4 justify-center cursor-pointer'>
					{imagenes.map((imagen, index) => (
						<div className='flex  relative' key={index}>
							<img
								className={` ${index !== indiceSeleccionado ? estilos.thumbnail2 : estilos.thumbnail}`}
								src={imagen}
								alt="fabrica"
								onClick={() => {
									setImagenSeleccionada(imagen);
									setIndiceSeleccionado(index);
								}}

							/>
							<span className={`${index !== indiceSeleccionado ? estilos.dav : estilos.david}`}>
								{/* {indiceSeleccionado !== null ? misTextos[claves[index]].dep : ''} */}
								{misTextos[claves[index]].dep}

							</span>
						</div>
					))}
				</div>



			</div >
			<p className='m-16 font-bold text-3xl  flex flex-col justify-center items-center min-h-[7rem]'>
				<span>{indiceSeleccionado !== null ? misTextos[claves[indiceSeleccionado]].nombre : ' '}<br /></span>
				<span>{indiceSeleccionado !== null ? misTextos[claves[indiceSeleccionado]].email : ' '}<br /></span>
				<span>{indiceSeleccionado !== null ? misTextos[claves[indiceSeleccionado]].telefono : ' '}</span>
			</p>
		</>
	);
}
