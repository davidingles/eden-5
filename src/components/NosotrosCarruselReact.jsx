import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const cielo2 = '/img/cielo2.jpg'
const nave = '/img/nave.jpg'
const lunes = '/img/lunes.jpg'
const nav = '/img/nav.jpg'

export function NosotrosCarruselReact() {
  const imagenes = [cielo2, nave, lunes, nav];
  const textos = [
    "Empresa fundada en 1995, avalada con una gran experiencia en el sector del cartón.",
    "Auxiliar Manipuladora del Cartón va evolucionando para cubrir las necesidades de sus clientes",
    "Todas las personas que trabajan directa o indirectamente tienen el espíritu de aceptar los retos para adaptarse aun mercado más competitivo y exigente.",
    "Tras la incorporación de nuevas generaciones seguiremos avanzando juntos.",
  ];
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  const [loaded, setLoaded] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
      }, 300000);
      return () => clearInterval(interval);
    }
  });
  const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
    setLoaded(false); // reset loaded state when changing image
    const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
    const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
    setIndiceSeleccionado(nuevoIndice);
    setImagenSeleccionada(imagenes[nuevoIndice]);
  };
  const previous = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false);
  };
  const next = () => {
    nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
  };

  return (
    <>
      <div className='relative p-4 max-w-full max-h-full  flex flex-col items-center justify-center '>

        {/* IMAGEN GRANDE================================== */}
        <div className={`${estilos.contenedorImagen} h-[50vh] max-w-[60vh]`}>
          <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""} `} src={imagenSeleccionada} alt="nave de la auxiliar" />
          <p className='p-8 m-auto text-lg font-bold w-auto text-balance'>{textos[indiceSeleccionado]}</p>
        </div>


        {/* BOTONES ================================== */}
        <div className='hidden sm:flex flex-row p-4 m-auto gap-4'>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >

        {/* BOTONES ABSOLUTE ============================== */}
        <div className='absolute -translate-x-[50%] -translate-y-[100%]  w-full z-40 top-1/2 left-1/2 sm:hidden flex flex-row  p-11'>
          <button className='text-white border border-white py-11 text-6xl h-11 bg-white bg-opacity-30 justify-center items-center flex flex-1 rounded-xl' onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className='text-white m-11 invisible flex flex-1 text-4xl justify-center' onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
          <button className='text-white border border-white py-11 text-6xl bg-white bg-opacity-30 justify-center items-center rounded-xl h-11 flex flex-1 ' onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >

        {/* //THUMBANILS ================================== */}
        <div className={`${estilos.thumbnailContainer} flex flex-row gap-4`}>
          {imagenes.map((imagen, index) => (
            <div className='flex ' key={index}>
              <img
                className={`m-2 md:m-0 w-[222px] rounded-lg estilos.thumbnail cursor-pointer ${index !== indiceSeleccionado ? estilos.thumbnail2 : ""}`}
                src={imagen}
                alt="fabrica"
                onClick={() => {
                  setImagenSeleccionada(imagen);
                  setIndiceSeleccionado(index);
                  setAutoPlay(false);
                }}
              />
            </div>
          ))}
        </div>
      </div >
    </>
  );
}
