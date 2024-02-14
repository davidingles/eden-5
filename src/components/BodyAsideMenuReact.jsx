import { useState, useEffect } from 'react';
import { Counter } from '@/components/Counter.jsx';
import { BodyAsideReact } from '@/components/BodyAsideReact.jsx';
const menu = [
	{
		title: 'Inicio',
		icon: 'home',
		link: '/',
	},
	{
		title: 'Nosotros',
		icon: 'us',
		link: '/nosotros',
	},
	{
		title: 'Servicios',
		icon: 'services',
		link: '/servicios',
	},
	{
		title: 'Contacto',
		icon: 'contact',
		link: '/contacto',
	},
	{
		title: 'Catálogo',
		icon: 'catalogo',
		link: '/catalogo',
	},
]

export default function BodyAsideMenuReact() {
	const [currentPage, setCurrentPage] = useState('/');
	useEffect(() => {
		setCurrentPage(window.location.pathname)
	}, [])
	return (
		<div className="body-aside-menu">
			<h2>BodyAsideMenuReact</h2>
			<Counter
				transition:name="dav"
				transition:persist
			/>
			{/* <div>
				{menu && menu.map((item, index) => (
					<div key={index}>
						{currentPage === item.link && <div>{item.title} <BodyAsideReact /></div>}
					</div>
				))}
				{currentPage === '/' && (
					<p className='parrafo font-bold text-xl p-4 text-[var(--auxi2)]'>Empresa dedicada a la fabricación de envases y embalajes de cartón
						ondulado y otros productos relacionados con el embalaje. Cajas, bandejas,
						estuches, expositores, separadores, plancha paletizaje, etc.
					</p>
				)}
			</div> */}
			<video src="/videos/montajes/video1G001.mp4" autoPlay loop muted className="video
			"></video>
		</div>
	);
}

