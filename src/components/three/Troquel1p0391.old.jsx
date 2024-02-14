import * as THREE from 'three'
import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF, Clone, Html, ContactShadows } from '@react-three/drei'

const Models = [
	// { title: 'Hammer', url: './models/hammer.glb' },
	{ title: 'cajaSeparadorRemesh', url: './gltf/cajaSeparadorRemesh.glb' },
	{ title: 'cajaSeparadorRemesh2', url: './gltf/cajaSeparadorRemesh2.glb' },
	{ title: 'troquel4e0067_glb', url: './gltf/troquel4e0067_glb.glb' },
	{ title: 'CajaSeparador', url: './gltf/CajaSeparador.glb' },
	{ title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: '1p0391', url: './gltf/1p0391.glb' },
]

function Model({ url }) {
	const { scene } = useGLTF(url)
	scene.traverse((node) => {
		if (node.isMesh) {
			node.material.roughness = 1
		}
	})
	const group = useRef()
	useFrame((state) => {
		const t = state.clock.getElapsedTime()
		// group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 4) / 20 + 0.25, 0.1)
		// group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 8) / 10, 0.1)
		// group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
		group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 90, 0.6)
	})
	return (
		<group ref={group} dispose={null} position={[0, 10, 0]} scale={1}>
			<Clone object={scene} castShadow receiveShadow />
		</group>
	)
}

function Fallback() {
	return <Html><div>Loading...</div></Html>
}

export default function EstucheConAsas({ david }) {
	const [title, setTitle] = useState(david)
	useEffect(() => {
		{
			setTitle(david)
		}
	}, [david])


	const modelIndex = Models.findIndex((m) => m.title === title)
	const modelUrl = modelIndex !== -1 ? Models[modelIndex].url : null

	return (
		<>

			{/* <a href={`/animacion/${david}`}>hola</a> */}
			<Canvas camera={{ position: [0, .4, -0.6], near: .01, fov: 50 }}>
				<pointLight position={[100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, -100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, 100]} intensity={11111} decay={2} />
				<ambientLight intensity={2} />
				<Suspense fallback={<Fallback />}>
					{modelUrl && <Model url={modelUrl} />}
				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={.2} />
				<ContactShadows resolution={512} scale={.5} position={[0, -0.3, 0]} blur={2} opacity={0.2} far={1} color='#8a6246' />
			</Canvas>
		</>
	)
}