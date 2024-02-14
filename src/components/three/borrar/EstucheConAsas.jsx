import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


export function Dav (props) {
	const { nodes, materials } = useGLTF('/gltf/EstucheConAsas.gltf')
	return (
		<group {...props} dispose={null}>
			<group position={[0, 0.162, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom'].geometry}
					material={materials.TQ_ARD_front}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom_1'].geometry}
					material={materials.TQ_ARD_back}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom_2'].geometry}
					material={materials.TQ_ARD_edge}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/gltf/EstucheConAsas.gltf')



const EstucheConAsas = ({}) => {
	return (

			<Canvas
				style={{  }}
				camera={{
					view: {
						enabled: true,
						fullWidth: 100,
						fullHeight: 100,
						offsetX: 0,
						offsetY: -30,
						width: 100,
						height: 100
					},
					focus: 10,
					fov: 80,
					zoom: 6,
					position: [0, 0.5, 1.5]
				}} >
				<ambientLight intensity={1} />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>

					<Dav/>

				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={1} />
				<ContactShadows resolution={1024} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#8a6246' />
			</Canvas>
	)
}
export default EstucheConAsas
