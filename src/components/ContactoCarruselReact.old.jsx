import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'

const misImagenes = {
	diseño: '/img/jefes/diseño.png',
	administracion: '/img/jefes/admin.jpg',
	logistica: '/img/jefes/logistica.png',
	ventas: '/img/jefes/sales.jpg',
};

const misTextos = {
	ventas: {
		dep: "ventas",
		email: "ventas@laauxiliar.es",
		nombre: "Miguel Angel Latorre",
		telefono: "123456789"
	},
	diseño: {
		dep: "diseño",
		email: "dg@laauxiliar.es",
		nombre: "Vicente Latorre",
		telefono: "123456789"
	},
	logistica: {
		dep: "logistica",
		email: "logistica@laauxiliar.es",
		nombre: "Angel Latorre",
		telefono: "123456789"
	},
	admin: {
		dep: "administracion",
		email: "administracion@laauxiliar.es",
		nombre: "Jesus Latorre",
		telefono: "123456789"
	},
}
const claves = ['ventas', 'diseño', 'logistica', 'admin'];

export function ContactoCarruselReact() {
	const imagenes = [misImagenes.ventas, misImagenes.diseño, misImagenes.logistica, misImagenes.administracion];

	const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
	const [loaded, setLoaded] = useState(true);
	const [autoPlay, setAutoPlay] = useState(true);
	let textos = [misTextos.ventas, misTextos.diseño, misTextos.logistica, misTextos.admin]

	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(() => {
				nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
			}, 5000);
			return () => clearInterval(interval);
		}
	});
	const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
		setLoaded(false);
		const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
		const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
		setIndiceSeleccionado(nuevoIndice);
		setImagenSeleccionada(imagenes[nuevoIndice]);
	};
	const previous = () => {
		nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false);
	};
	const next = () => {
		nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
	};

	return (
		<>
			<div className='flex flex-col m-auto items-center justify-center '>

				{/* //THUMBANILS ================================== */}
				<div className='flex flex-row  gap-4 justify-center cursor-pointer'>
					{imagenes.map((imagen, index) => (
						<div className='flex bordeRojo relative' key={index}>
							<img
								className={` ${index !== indiceSeleccionado ? estilos.thumbnail2 : estilos.thumbnail}`}
								src={imagen}
								alt="fabrica"
								onClick={() => {
									setImagenSeleccionada(imagen);
									setIndiceSeleccionado(index);
									setAutoPlay(false);
								}}

							/>
							<span className={`${index !== indiceSeleccionado ? estilos.dav : estilos.david}`}>
								{misTextos[claves[index]].dep}

							</span>
						</div>
					))}
				</div>

				<p className='m-16 font-bold text-3xl  flex flex-col justify-center items-center'>
					<span>{misTextos[claves[indiceSeleccionado]].email}<br /></span>
					<span>{misTextos[claves[indiceSeleccionado]].nombre}<br /></span>
					<span>{misTextos[claves[indiceSeleccionado]].telefono}</span>
				</p>


			</div >
		</>
	);
}
