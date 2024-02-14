import estilos from './ServiciosCarruselReact2.module.css'
import { useState, useEffect } from 'react'


export function ServiciosCarruselReact2({ cielo2, nave, lunes, nav, video, naveThumb, naveThumb1, naveThumb2, naveThumb3, textos, textos2, claves }) {
  const imagenes = [cielo2, nave, lunes, nav];
  const imagenes2 = [naveThumb, naveThumb1, naveThumb2, naveThumb3];

  const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  const [loaded, setLoaded] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
      }, 5000);
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
      <div className='boxy flex flex-col items-center justify-center overflow-hidden'>

        {/* IMAGEN GRANDE================================== */}
        <div className={`${estilos.caja}`}>
          <div
            className={`${estilos.marco} border border-white rounded-[1rem] flex`}
            style={{ boxShadow: '2px 2px 11px 2px rgb(0 0 0 / 20%)' }}>
            {/* BOTONES ABSOLUTE ============================== */}
            <div className='absolute -translate-x-[50%] -translate-y-[50%]  z-40 top-1/2 left-1/2 sm:hidden flex flex-row  p-11'>
              <button className='text-white backdrop-blur-sm border border-white  px-2 py-11 text-6xl h-11 bg-white bg-opacity-30 justify-center items-center flex flex-1 rounded-xl' onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
              <button className='text-white m-11 invisible flex flex-1 text-4xl justify-center' onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
              <button className='text-white border px-2 border-white backdrop-blur-sm py-11 text-6xl bg-white bg-opacity-30 justify-center items-center rounded-xl h-11 flex flex-1 ' onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
            </div >
            <video
              poster={imagenSeleccionada}
              autoPlay
              loop
              muted
              onLoad={() => setLoaded(true)}
              src={imagenSeleccionada}
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '1rem' }}
              alt={imagenSeleccionada}
            />
          </div>
          <p className={`${estilos.texto} p-8 m-auto text-lg text-balance overflow-y-auto`}>{textos && textos[indiceSeleccionado]}{textos2 && textos2[claves[indiceSeleccionado]].dep}<br /><p className='whitespace-nowrap'>{textos2 && textos2[claves[indiceSeleccionado]].email}</p><p className='whitespace-nowrap'>{textos2 && textos2[claves[indiceSeleccionado]].nombre}</p><p className='whitespace-nowrap'>{textos2 && textos2[claves[indiceSeleccionado]].telefono}</p></p>
        </div>


        {/* BOTONES ================================== */}
        <div className='hidden sm:flex flex-row p-4 m-auto gap-4'>
          <button className={`${estilos.btn} `} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >


        {/* //THUMBANILS ================================== */}
        <div className={`${estilos.thumbnailContainer} flex flex-row gap-4`}>
          {imagenes2.map((imagen, index) => (
            <div className='flex ' key={index}>
              <img
                className={`object-cover m-2 md:m-0 w-[111px] h-[111px] rounded-lg estilos.thumbnail cursor-pointer ${index !== indiceSeleccionado ? estilos.thumbnail2 : ""}`}
                src={imagen}
                alt="fabrica"
                onClick={() => { setImagenSeleccionada(imagenes[index]); setIndiceSeleccionado(index); setAutoPlay(false) }} />


            </div>
          ))}
        </div>
      </div >
    </>
  );
}
