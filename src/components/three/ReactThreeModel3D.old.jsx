import * as THREE from 'three'
import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, Clone, Html, ContactShadows } from '@react-three/drei'
import { useControls } from 'leva'

const Models = [
	// { title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: 'cajaSeparadorRemesh2', url: './gltf/cajaSeparadorRemesh2.glb' },
	{ title: 'troquel4e0067_glb', url: './models/troquel4e0067_glb.glb' },
	{ title: 'CajaSeparador', url: './gltf/CajaSeparador.glb' },
	{ title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: 'jamoneroMacondo', url: './gltf/jamoneroMacondo3.glb' },
	{ title: '1p0391', url: './gltf/1p0391.glb' },
	{ title: 'DIANA', url: './gltf/ami2.glb' },
	{ title: '1L0024', url: './gltf/1L0024.glb' },
	{ title: 'caballete-03', url: './gltf/caballete-03.glb' },
	{ title: 'troquel1g0011', url: './gltf/troquel1g0011.glb' },
	{ title: 'donaciones', url: './gltf/donaciones.glb' },
]

function Model({ url, miEscala, miPosicion }) {
	const { scene } = useGLTF(url)
	scene.traverse((node) => {
		if (node.isMesh) {
			node.castShadow = true
			node.receiveShadow = true
			// node.material.metalness = 0
			node.material.transparent = true
			node.material.roughness = 1
		}
	})
	const group = useRef()
	useFrame((state) => {
		const t = state.clock.getElapsedTime()

		group.current.position.y = miPosicion
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-3 + Math.sin(t)) / 40, .8)
	})
	return (
		<group ref={group} dispose={null} position={[0, 2, 0]} scale={miEscala} >
			<Clone object={scene} castShadow receiveShadow />
		</group >
	)
}

function Fallback() {
	return <Html><div>Loading...</div></Html>
}

export default function EstucheConAsas({ david, escala, posicion, url }) {
	const [title, setTitle] = useState(david)

	const { modelo } = useControls('Model', {
		modelo: {
			value: david, // valor inicial
			options: Models.map(({ title }) => title), // opciones para seleccionar
		},
	})

	useEffect(() => {
		setTitle(modelo) // Usa el valor de modelo devuelto por useControls
	}, [modelo])

	const modelIndex = Models.findIndex((m) => m.title === title)
	const modelUrl = modelIndex !== -1 ? Models[modelIndex].url : null

	return (
		<>
			<Canvas camera={{ position: [0, .4, -0.6], near: .01, fov: 50 }}>
				<ambientLight intensity={4} />
				<Suspense fallback={<Fallback />}>
					{modelUrl && <Model url={modelUrl} miEscala={escala} miPosicion={posicion} />}
				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={.6} />
				<ContactShadows resolution={512} scale={30} position={[0, -0.5, 0.0]} blur={.1} opacity={.5} far={10} color='#8a6246' />
			</Canvas>
		</>
	)
}