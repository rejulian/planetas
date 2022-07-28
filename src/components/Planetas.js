import React from 'react'


function Planetas({nombre, img, setEstado,setPlaneta, gravedad, info, setInfo, setGravedad}) {
  const informacion = (e) => {
    e.target.value = nombre
    setPlaneta(nombre)
    setGravedad(gravedad)
    setInfo(info)
    setEstado(true)

  }
  return (
    <>
      <a href='#home'>
        <div className='planeta' onClick={informacion}>
            <img src={img}/>
            <h1>{nombre}</h1>
        </div>
      </a>  
    </>
  )
}

export default Planetas