import styled from "styled-components";
import { type } from "../../animation/Mostrar";
import { useEffect, useState } from "react";
import { formatInfo } from "../FormIA/formats";
import icMoneda from '../../assets/pila-de-monedas.png'
export function InfoSeccion(props){
    const info = formatInfo(props.info)

    useEffect(()=>{
        document.documentElement.scrollTop = 2700;
    },[])
    return(
    <InfoSecc>
        <br />
        <br />
        <br />
        <h3>Precio Aprox:</h3>
        <SpanAnimation $nch = {info.precio.length} > $ {info.precio}</SpanAnimation>
        <br />
        <br /> 
        <h2>Terrenos </h2>
        <ContCard >

            {
                props.infoCas?.map((lote,i)=>(
                    <div className="contain-info" key={i}>
                        <div className="title-name">
                            <p>{lote.descripcion}</p>
                        </div>
                        <div className="details-terreno">
                            <p><b>Area :</b> {lote.area} </p>
                            <p><b>Localizacion :</b> {lote.localizacion} </p>
                        </div>
                    
                </div>
                ))
            }
        </ContCard>
    </InfoSecc>
    )
}

const InfoSecc = styled.div`
    width: 58%;
    height: 640px;
   
    margin: 12px;
    background: #2e3329;
    color: #FFFFFF;
    & h3{
        text-align: center;
        font-size: 30px;
    }

`
const SpanAnimation  = styled.span`
    display: block;
    width: ${p =>p.$nch+2}ch;
    white-space: nowrap;
    overflow: hidden;
    color: #c19434 ;
    font-size: 3em;
    text-align: center;
    margin:auto;
    animation: ${type}  2s  steps(${p => p.$nch+2});
`
const ContCard = styled.div`
    position: relative;
    width: 100%;
    height: 402px;
    overflow: auto;
    
    .contain-info{
        width: 100%;
        min-height: 100px;
        border-bottom: 1px solid #4C5443;
        margin: auto;
        padding: 10px 0 0 20px;
        transition: .9s;
        
        .title-name{
            & p{
                width: 50%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-transform: capitalize;
                font-size: 25px;
            }
           
        }
        .details-terreno{
            display: flex;
            & p{
                margin-right: 20px;
                font-size: 15px;
            }
        }
        & b{
            color: #c19434;
        }
    }
    .contain-info:hover{
        background:#4C5443 ;
    }
`
