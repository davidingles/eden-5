import { useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three'
import { OrbitControls, ContactShadows, useGLTF } from '@react-three/drei'

const Models = [
	// { title: 'Hammer', url: './models/hammer.glb' },
	// { title: 'Drill', url: './models/drill.glb' },
	// { title: 'Tape Measure', url: './models/tapeMeasure.glb' },
	{ title: 'troquel4e0067_glb', url: './models/troquel4e0067_glb.glb' },
	{ title: 'CajaSeparador', url: './gltf/CajaSeparador.glb' },
	{ title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: 'jamoneroMacondo', url: './gltf/jamoneroMacondo3.glb' },
	{ title: '1p0391', url: './gltf/1p0391.glb' },
]

export default function EstucheConAsas({ david }) {
	const [title, setTitle] = useState(david)
	const [isPaused, setIsPaused] = useState(false)


	useEffect(() => {
		setTitle(david)
	}, [david])

	const modelIndex = Models.findIndex((m) => m.title === title)
	const modelUrl = modelIndex !== -1 ? Models[modelIndex].url : null

	const togglePause = () => {
		setIsPaused(!isPaused)
	}

	return (
		<>
			<button style={{
				position: 'absolute',
				top: '70%',
				left: '70%',
				transform: 'translate(-50%, -50%)',
				zIndex: 1000,

			}} onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
			<Canvas camera={{ position: [0, .4, -0.6], near: .01, fov: 50 }}>
				<pointLight position={[100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, -100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, 100]} intensity={11111} decay={2} />
				<ambientLight intensity={2} />
				<Suspense fallback={null}>
					{modelUrl && <Model url={modelUrl} isPaused={isPaused} />}
				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={.2} />
				<ContactShadows resolution={512} scale={.5} position={[0, -0.3, 0]} blur={2} opacity={0.2} far={1} color='#8a6246' />
			</Canvas>
		</>
	)
}

function Model({ url, isPaused }) {
	const [model, setModel] = useState(null)
	const [mixer, setMixer] = useState(null)



	useEffect(() => {
		const loader = new GLTFLoader()
		loader.load(url, (gltf) => {
			gltf.scene.traverse((node) => {
				if (node.isMesh) {
					node.material.roughness = 1
				}
			})


			setModel(gltf.scene)

			const mixer = new AnimationMixer(gltf.scene)
			setMixer(mixer)

			gltf.animations.forEach((clip) => {
				mixer.clipAction(clip).play()
			})
		})
	}, [url])

	useFrame((state, delta) => {

		if (mixer && !isPaused) {
			mixer.update(delta)
		}
	})

	return model ? (
		<primitive object={model} position={[0, 0, 0]} scale={[1, 1, 1]} />
	) : null
}




