import styled from "styled-components";
import { type } from "../../animation/Mostrar";
import { useEffect, useState } from "react";
import icMoneda from '../../assets/pila-de-monedas.png'
import { barrios } from "../FormIA/FormIA";

export function InfoSeccion(props){

    
    return(
    <InfoSecc>
        <br />
        <br />
        <br />
        <ContTitle>
            <div className="contPrevInfo uno">
            <h3>Precio Aprox:</h3>
            <SpanAnimation $nch = {props.info.precio.precioModelo.length}> $ {props.info.precio.precioModelo}</SpanAnimation>
            </div>
            <div className="contPrevInfo dos">
                <p><b>Habitaciones:</b> {props.info.cliente.habitaciones}</p>
                <p><b>Parqueaderos:</b> {props.info.cliente.habitaciones}</p>
                <p><b>Acabados:</b> {props.info.cliente.habitaciones}</p>
                <p><b>Sector:</b> {barrios[Number(props.info.cliente.sector)]}</p>
                <p><b>Area:</b> {props.info.cliente.area}</p>
            </div>
        </ContTitle>
        <br />
        <br /> 
    </InfoSecc>
    )
}

const InfoSecc = styled.div`
    width: 58%;
    min-height: 640px;
    margin: 12px;
    & h3{
        text-align: center;
        font-size: 30px;
    }
    @media  (width < 1100px) {
        width: 100%;
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
const ContTitle = styled.div`
    width: 100%;
    min-height: 300px;
    .contPrevInfo{
        margin: auto;
    }
    .dos{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & p{
            width: 40%;
            font-size: 1.5em;
            margin: 20px;
        }
    }
    @media  (width < 1100px) {

      .contPrevInfo{
        width: 100%;
        & p{
            padding-top: 20px;
            
        }
    }
    }

`