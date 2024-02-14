import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


export function Dav(props) {
	const { nodes, materials } = useGLTF("/gltf/JAMONERO10.glb");
	return (
		<group {...props} dispose={null} position={[0, 0, 0]} scale={1}>
			<group name="Scene003">
				<group name="Curve005" userData={{ name: "Curve.005" }}>
					<mesh
						name="Curve005_1"
						castShadow
						receiveShadow
						geometry={nodes.Curve005_1.geometry}
						material={materials.Material}
					/>
					<mesh
						name="Curve005_2"
						castShadow
						receiveShadow
						geometry={nodes.Curve005_2.geometry}
						material={materials["Material.003"]}
					/>
					<mesh
						name="Curve005_3"
						castShadow
						receiveShadow
						geometry={nodes.Curve005_3.geometry}
						material={materials["Material.004"]}
					/>
				</group>
			</group>
		</group>
	);
}



useGLTF.preload('/gltf/JAMONERO10.glb')



const EstucheConAsas = ({ }) => {
	return (

		<Canvas
			style={{}}
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

				<Dav />

			</Suspense>
			<OrbitControls autoRotate autoRotateSpeed={1} />
			<ContactShadows resolution={1024} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#8a6246' />
		</Canvas>
	)
}
export default EstucheConAsas
