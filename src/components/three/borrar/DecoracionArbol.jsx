import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { MeshStandardMaterial } from 'three';


import React from "react";




export function Dav(props) {
	const { nodes, materials } = useGLTF("/gltf/arbol y ciervo.gltf");

	// Crear nuevas instancias de MeshStandardMaterial
	const standardMaterials = Object.keys(materials).reduce((acc, key) => {
		const standardMaterial = new MeshStandardMaterial();
		standardMaterial.copy(materials[key]);
		acc[key] = standardMaterial;
		return acc;
	}, {});

	// standardMaterials["back-dil"].color.set('brown');
	standardMaterials["back-dil"].metalness = 0.5;
	standardMaterials["back-dil"].roughness = 0.5;
	standardMaterials["Material.002"].metalness = 0.5;
	standardMaterials["Material.002"].roughness = 0.5;

	return (
		<group {...props} dispose={null} scale={.5} position={[0, 0, 0]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.mesh_0.geometry}
				material={standardMaterials["back-dil"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.mesh_0_1.geometry}
				material={standardMaterials["Material.001"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.mesh_0_2.geometry}
				material={standardMaterials["Material.002"]}
			/>
		</group>
	);

}

useGLTF.preload("/gltf/arbol y ciervo.gltf");


const Troquel1g0011 = ({ }) => {
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
				zoom: 3,
				position: [0, 0.5, 1.5]
			}} >
			<ambientLight intensity={2} />
			<directionalLight position={[10, 10, 10]} intensity={1} />
			<pointLight position={[10, 10, 2]} />
			<Suspense fallback={null}>

				<Dav />

			</Suspense>
			<OrbitControls autoRotate autoRotateSpeed={1} />
			<ContactShadows resolution={512} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#202020' />
		</Canvas>
	)
}
export default Troquel1g0011
