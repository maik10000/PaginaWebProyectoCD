import { useState } from 'react';
import './styleForm.css'
import styled from 'styled-components'
import { InfoSeccion } from '../InfoSeccion/infoRes';
import { showUp } from '../../animation/Mostrar';
import { lugares } from '../../data/url_sectores';
import { buscarcotizacion } from '../../services/servicioModelo';
import { formatResp } from '../../utilities/formatResp';
export function FromIA() {

    const [map, setMap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255347.02338043865!2d-78.59534800791202!3d-0.186250226576769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1ses!2sec!4v1695515742363!5m2!1ses!2sec");
    const [form, setForm] = useState({});
    const[ infoResp, setInfoRes] = useState(null)
    const[ mensajE, setMensajeE] = useState({'state':false,'mess':''})
    const handelChangeForm = (e) =>{
        if(e.target.name == 'Sector'){
            
            setMap(lugares[e.target.value])
        }
        if(e.target.name == 'metros'){
            if(e.target.value < '0'){
                console.log('soy negaativo')
                e.target.value = e.target.value*'-1'
            }else  if(e.target.value == '0') {
                e.target.value = '1'
            }
        }
        
        
        setForm({
                ...form,
                [e.target.name]: e.target.value
            })
    }


    const enviar = async  (e) =>{
        e.preventDefault()
        const stateForm = Object.entries(form).length
        if(stateForm === 6){
            const res = await buscarcotizacion(form);
             setInfoRes(formatResp(res))
             setMensajeE({'state':false,'mess':''})
        }else if(stateForm === 0){
            setMensajeE({'state':true,'mess':'Seleccione los campos requeridos'})
        }else if(stateForm < 6){
            setMensajeE({'state':true,'mess':'Faltan campos por seleccionar'})
        }

    }

    return (
        <div className="FormIA">
            <div className='label-back'>

            </div>
            <div className='label-front'>

            </div>

            <form className='formulario' action="" onSubmit={enviar}>
                <div className='cont-img'>

                </div>

                <div className='inputs-cont'>
                    <h1>Cotiza tu hogar</h1>
                    <div className='con-input'>
                        <select name="Habitaciones" id="habitaciones" className="input-s" onChange={handelChangeForm}>
                            <option value="" >Habitaciones</option>
                            <option value="1">Una Suite</option>
                            <option value="2">2</option>
                            <option value="3">3</option>   
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className='con-input'>
                        <select name="parqueaderos" id="Parqueaderos" className="input-s" onChange={handelChangeForm}>
                            <option value="" >Parquaderos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='con-input'>
                        <select name="banios" id="banios" className="input-s" onChange={handelChangeForm}>
                            <option value="" >Baños (mas 1/2 medio baño)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='con-input'>
                        <input className='input-s' name='metros' type="number" placeholder='m&sup2;' onChange={handelChangeForm}/>
                    </div>
                    <div className='con-input'>
                        <select className='input-s' name="TipoAcabados" onChange={handelChangeForm}>
                            <option   >Acabado</option>
                            <option value="800" >Gama Alta </option>
                            <option value="400" >Gama Media </option>
                            <option value="300" >Económico</option>

                        </select>
                    </div>
                    
                    <div className='con-input'>
                        <select className='input-s' name="Sector"  onChange={handelChangeForm} >
                            <option value="0" >Sector (Quito)</option>
                            {
                                barrios.map((barrio, i)=>(
                                    <option key={i} value={i}>{barrio}</option>
                                ))
                            }

                        </select>
                    </div>
                   {mensajE?.state?<MensajeError>{mensajE?.mess}</MensajeError>:undefined}
                    <div className='con-input center mrg-top'>
                        <button className='input-b' type='submit'>Consultar</button>
                    </div>
                </div>
            </form>
                {infoResp!==null?
            <ContenedorMapa>
                <h1 style={{ textAlign: 'center' }}>Resultados de tu consulta!
                </h1>
               <iframe src={map}   loading="lazy" ></iframe>
                <InfoSeccion info = {infoResp}/>
            </ContenedorMapa>
         :undefined}
        </div>
    )
};
const MensajeError = styled.div`
    margin: 10px;
    padding: 10px;
    text-align: center;
    animation:${showUp} 2s forwards;
    color: #8A041A;
`
const ContenedorMapa = styled.div`
    width: 90%;
    min-height: 500px;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 20px;
    margin: auto;
    animation:${showUp} 2s forwards;

    & iframe{
        width: 40%;
        height:650px;
    }
    & h1{
        width: 100%;
    }
    @media (width < 1100px) {
        width: 90%;
        & iframe{
            width: 100%;
        }
    }
`;
const barrios = [
    'Pomasqui',
    'El Batán',
     'Iñaquito Alto', 
     'San Carlos', 
     'Ponceano',  
     'La Luz',
     'Carcelén', 
     "Bellavista",
     "Guápulo", 
     "González Suárez",
     "Quito Tenis", 
     "Puembo",
     "Cumbayá"
];

export {barrios}