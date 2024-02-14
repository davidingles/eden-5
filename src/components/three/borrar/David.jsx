import { lazy, Suspense } from 'react'
// Importa todos los componentes necesarios utilizando React.lazy()
const EstucheConAsas = lazy(() => import('../components/three/EstucheConAsas'))
const OtroComponente = lazy(() => import('../components/three/OtroComponente'))
// Importa todos los componentes necesarios
// Luego, puedes utilizar un switch statement o una lógica similar para renderizar el componente correcto según `info.three`
let Component
switch (info.three) {
case 'EstucheConAsas':
	Component = EstucheConAsas
	break
case 'OtroComponente':
	Component = OtroComponente
	break
default:
	throw new Error(`Componente desconocido: ${info.three}`)
}
// Y finalmente, renderiza el componente dentro de un <Suspense> para manejar la carga asincrónica
<Suspense fallback={null}>
	<Component />
</Suspense>