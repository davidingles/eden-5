import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'



export function Dav (props) {
	const { nodes, materials } = useGLTF('/gltf/B1Cerrada.gltf')
	return (
		<>

			<group {...props} dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom001'].geometry}
					material={materials['TQ_ARD_front.001']}
					name='meshPhongMaterial'
					// material={new THREE.MeshPhongMaterial( { color: 0xff0000 } )}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom001_1'].geometry}
					material={materials['TQ_ARD_back.001']}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['TQ_ARD-geom001_2'].geometry}
					material={materials['TQ_ARD_edge.001']}
				/>
			</group>
		</>
	)
}

useGLTF.preload('/gltf/B1Cerrada.gltf')

const B1Cerrada = () => {
	return (
		<div>
			<Canvas
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
				<ambientLight intensity={0.6} />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>

					<Dav/>


				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={1} />
				<ContactShadows resolution={1024} scale={1} position={[0, -0.01, 0]} blur={3} opacity={0.3} far={1} color='#8a6246' />
			</Canvas>
		</div>
	)
}
export default B1Cerrada
