import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, Clone, Html, ContactShadows } from '@react-three/drei'

const Models = [
	// { title: 'Hammer', url: './models/hammer.glb' },
	// { title: 'Drill', url: './models/drill.glb' },
	// { title: 'Tape Measure', url: './models/tapeMeasure.glb' },
	// { title: 'blender', url: './models/blender.gltf' },
	// { title: 'blender2', url: './models/blender2.glb' },
	{ title: 'JAMONERO12', url: './models/JAMONERO12.glb' },
]

function Model({ url }) {
	const { scene } = useGLTF(url)
	return <Clone object={scene} castShadow receiveShadow position={[0, 0, 0]} scale={1} />
}

function Fallback() {
	return <Html><div>Loading...</div></Html>
}

export default function EstucheConAsas() {
	const [title, setTitle] = useState('JAMONERO12')

	return (
		<>
			<span id="info"><p style={{ fontWeight: 'bold', margin: '0', padding: '0' }}>3D interactivo.</p> <br />Haz click y gíralo </span>
			<Canvas camera={{ position: [0, .4, -0.6], near: 0.025 }}>
				{/* <Environment files="./img/workshop_1k.hdr" background blur={.5} /> */}
				{/* <pointLight position={[20, 20, 90]} intensity={5000} decay={2} distance={1} /> */}
				<pointLight position={[100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 100]} intensity={55555} decay={2} />
				<pointLight position={[100, -100, -100]} intensity={55555} decay={2} />
				<pointLight position={[100, -100, 100]} intensity={55555} decay={2} />
				<ambientLight intensity={1} />
				<Suspense fallback={<Fallback />}>
					<Model url={Models[Models.findIndex((m) => m.title === title)].url} />
				</Suspense>
				<OrbitControls autoRotate />
				<ContactShadows resolution={1024} scale={1} position={[0, -0.13, 0]} blur={3} opacity={0.6} far={1} color='#8a6246' />
				{/* <ContactShadows resolution={1024} scale={1} position={[0, -0.02, 0]} blur={1} opacity={0.6} far={1} color='#8a6246' /> */}
				{/* <Stats /> */}
			</Canvas>
		</>
	)
}

useGLTF.preload(Models.map(({ url }) => url))