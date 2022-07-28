import React from 'react';
import styled from 'styled-components';

function Modal({children,estado,cambiarEstado}) {
    const cerrar = () => {
        cambiarEstado(false)
    }
  return (
    <>
        {estado &&
            <Overlay>
                <ContenedorModal>
                    <div>
                        {children}
                    </div>

                    <BotonCerrar onClick={cerrar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </BotonCerrar>

                </ContenedorModal>
            </Overlay>
        }
    </>
  )
}

export default Modal

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0 ;
    left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 200px;
    background: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    widht:30px;
    height:30px;
    border:none;
    background:none;
    cursor: pointer;
    border-radius: 5px;
    transition: .3s ease all;

    &:hover{
        background: black;
        color:white;
    }

`