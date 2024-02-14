import { ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useGLTF } from "@react-three/drei";


export function Dav(props) {
  const { nodes, materials } = useGLTF("/gltf/BandejaAcotada.gltf");
  return (
    <group {...props} dispose={null}
      scale={.5}
      position={[-.0,0.1,-0.00]}
      rotation={[Math.PI / 1000, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[0.712, 0.001, 0.084]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[-0.008, 0.001, 0.707]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[0.62, 0.166, -0.482]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["_1X0304_ARD-geom"].geometry}
        material={materials["back-dil"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["_1X0304_ARD-geom_1"].geometry}
        material={materials["back-dil.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["_1X0304_ARD-geom_2"].geometry}
        material={materials._1X0304_ARD_edge}
      />
    </group>
  );
}

useGLTF.preload("/gltf/BandejaAcotada.gltf");

const BandejaAcotada = () => {

  return (
        <div style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        
          <Canvas
            className='border-8 border-green-500'

            style={{ width: '100%', margin:'auto'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 80 ,zoom: 6, position:[0, .5, 1.5]}} >
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
        
              <Dav/>
       
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
        </div>
  )
}
export default BandejaAcotada
