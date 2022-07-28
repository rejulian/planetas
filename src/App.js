import './App.css';
import { useState } from 'react';
import Planetas from './components/Planetas';
import Modal from './components/Modal'

import jupiter from './img/jupiter.png'
import marte from './img/marte.png'
import mercurio from './img/mercurio.png'
import neptuno from './img/neptuno.png'
import pluton from './img/pluton.png'
import saturno from './img/saturno.png'
import tierra from './img/tierra.png'
import venus from './img/venus.png'


function App() {
  const planetas = [
    {
      nombre:'jupiter',
      gravedad: '24.79 m/s²',
      info: 'Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter.'
    },
    {
      nombre:'marte',
      gravedad: '3.721 m/s²',
      info: 'Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar.'
    },
    {
      nombre:'mercurio',
      gravedad: '3.7 m/s²',
      info: 'Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.'
    },
    {
      nombre:'neptuno',
      gravedad: '11.15 m/s²',
      info: 'Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.'
    },
    {
      nombre:'urano',
      gravedad: '8.87 m/s²',
      info: 'Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano, el padre de Crono y el abuelo de Zeus.'
    },
    {
      nombre:'saturno',
      gravedad: '10.44 m/s²',
      info: 'Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos.'
    },
    {
      nombre:'tierra',
      gravedad: '9.807 m/s²',
      info: 'La Tierra es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos.'
    },
    {
      nombre:'venus',
      gravedad: '8.87 m/s²',
      info: 'Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor.'
    },
]
  const [estado, setEstado] = useState(false);
  const [planeta, setPlaneta] = useState();
  const [gravedad, setGravedad] = useState();
  const [info, setInfo] = useState()
  return (
   <>
      <h1 className='titulo' id='home'>PLANETAS DEL SISTEMA SOLAR</h1>
      <div className='contenedor'>
        <Planetas nombre={planetas[2].nombre.toUpperCase()} img={mercurio} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[2].gravedad} info={planetas[2].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[7].nombre.toUpperCase()} img={venus} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[7].gravedad} info={planetas[7].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[6].nombre.toUpperCase()} img={tierra} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[6].gravedad} info={planetas[6].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[1].nombre.toUpperCase()} img={marte} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[1].gravedad} info={planetas[1].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[0].nombre.toUpperCase()} img={jupiter} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[0].gravedad} info={planetas[0].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[5].nombre.toUpperCase()} img={saturno} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[5].gravedad} info={planetas[5].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[4].nombre.toUpperCase()} img={pluton} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[4].gravedad} info={planetas[4].info} setGravedad={setGravedad} setInfo={setInfo}/>
        <Planetas nombre={planetas[3].nombre.toUpperCase()} img={neptuno} setEstado={setEstado} setPlaneta={setPlaneta} gravedad={planetas[3].gravedad} info={planetas[3].info} setGravedad={setGravedad} setInfo={setInfo}/>
      </div>
      <Modal estado={estado} cambiarEstado={setEstado}>
        <h1>{planeta}</h1>
        <div className='info'>
          <p><span>Gravedad: </span> {gravedad}</p>
          <p><span>Informacion: </span> {info}</p>
        </div>
      </Modal>
   </>
  );
}

export default App;
