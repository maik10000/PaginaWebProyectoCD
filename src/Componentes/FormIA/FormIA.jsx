import { useState } from 'react';
import './styleForm.css'
import styled from 'styled-components'
const lugares = {
    0: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255347.02338043865!2d-78.59534800791202!3d-0.186250226576769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1ses!2sec!4v1695515742363!5m2!1ses!2sec",
    "Cumbayá": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.33773339642!2d-78.45349929467936!3d-0.20725837106143186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d590d91f523511%3A0xce340d531f732625!2sCumbaya!5e0!3m2!1ses!2sec!4v1695516386185!5m2!1ses!2sec",
    "Puembo": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.81224554558!2d-78.40999340008663!3d-0.16996582381740485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5923416590ffb%3A0x878bcd62a0fd662c!2sPuembo!5e0!3m2!1ses!2sec!4v1695516594973!5m2!1ses!2sec",
    'Carcelén': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.253782609612!2d-78.48112013993055!3d-0.08956424078731794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f5e7a16d5c1%3A0x70b1e705cf58bd46!2sCarcel%C3%A9n%2C%20Quito!5e0!3m2!1ses!2sec!4v1695603956492!5m2!1ses!2sec',
    'El Batán': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.205096669859!2d-78.48152995427492!3d-0.16748453230749386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5906da341e2ab%3A0xc7965fac9ae08933!2sEl%20Bat%C3%A1n%2C%20Quito!5e0!3m2!1ses!2sec!4v1695604065633!5m2!1ses!2sec',
    'Bellavista': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.190430157963!2d-78.48922085427236!3d-0.18462083133641044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59080cc708e3b%3A0x279c3bc29ba80bb!2sBellavista%2C%20Quito!5e0!3m2!1ses!2sec!4v1695604113968!5m2!1ses!2sec',
    'González Suárez': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.794539869911!2d-78.48057860226666!3d-0.1978206080394814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a743c13706b%3A0x3edad62731101a68!2sGonzalez%20Suarez%2C%20Quito%20170517!5e0!3m2!1ses!2sec!4v1695604183427!5m2!1ses!2sec',
    'Guápulo': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.587862882108!2d-78.48020435562799!3d-0.20033527039043067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a0bb4088339%3A0x7ad971e38949650e!2zR3XDoXB1bG8sIFF1aXRv!5e0!3m2!1ses!2sec!4v1695604309621!5m2!1ses!2sec',
    'Quito Tenis': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.80163671425!2d-78.49675992423339!3d-0.16569388542961444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a95afc4d5dd%3A0xf137c3ea948e6a50!2sQuito%20Tenis%2C%20Quito%20170521!5e0!3m2!1ses!2sec!4v1695604339260!5m2!1ses!2sec'
};
export function FromIA() {

    const [map, setMap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255347.02338043865!2d-78.59534800791202!3d-0.186250226576769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1ses!2sec!4v1695515742363!5m2!1ses!2sec");
    const [form, setForm] = useState({});


    const handelChangeForm = (e) =>{
        console.log(e.target.name)
        if(e.target.name == 'Sector'){
            setMap(lugares[e.target.value])
        }
    }

    return (
        <div className="FormIA">
            <div className='label-back'>

            </div>
            <div className='label-front'>

            </div>

            <form className='formulario' action="" >
                <div className='cont-img'>

                </div>

                <div className='inputs-cont'>
                    <h1>IA</h1>
                    <div className='con-input'>
                        <select name="Habitaciones" id="habitaciones" className="input-s" onChange={handelChangeForm}>
                            <option value="" >Numero el de habitaciones</option>
                            <option value="2">2 habitaciones</option>
                            <option value="3">3 habitaciones</option>   
                            <option value="4">4 habitaciones</option>
                            <option value="1">Una Suite</option>
                        </select>
                    </div>
                    <div className='con-input'>
                        <select name="parqueaderos" id="Parqueaderos" className="input-s" onChange={handelChangeForm}>
                            <option value="" >Numero el de parquaderos</option>
                            <option value="1">1 parquadero</option>
                            <option value="2">2 parquaderos</option>
                            <option value="3">3 parquaderos</option>
                            <option value="4">4 parquaderos</option>
                            <option value="5">5 parquaderos</option>
                        </select>
                    </div>
                    <div className='con-input'>
                        <select className='input-s' name="TipoAcabados" onChange={handelChangeForm}>
                            <option   >Tipo de acabado</option>
                            <option value="800" >Gama Alta </option>
                            <option value="400" >Gama Media </option>
                            <option value="300" >Económico</option>

                        </select>
                    </div>
                    <div className='con-input'>
                        <select className='input-s' name="Sector"  onChange={handelChangeForm} >
                            <option value="0" >Seleccione un sector en Quito</option>
                            {
                                barrios.map((barrio, i)=>(
                                    <option key={i} value={barrio}>{barrio}</option>
                                ))
                            }

                        </select>
                    </div>

                    <div className='con-input'>
                        <input disabled className='input-s' type="text" placeholder=' Ingrese los m&sup2;' />
                    </div>
                    <div className='con-input center'>
                        <button className='input-b' type='submit'>Consultar</button>
                    </div>
                </div>
            </form>
            <h1 style={{ textAlign: 'center' }}>Selecciona un sector y échale un vistazo!</h1>

            <ContenedorMapa>
                <iframe src={map} width="80%" height="650" style={{ border: 0 }} loading="lazy" ></iframe>
            </ContenedorMapa>
        </div>
    )
}

const ContenedorMapa = styled.div`
    width: 100%;
    min-height: 500px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    
`
const barrios = [
    'Cumbayá',
    'Puembo',
    'Carcelén',
    'El Batán',
    'Bellavista',
    'González Suárez',
    'Guápulo',
    'Quito Tenis',
    'Iñaquito',
    'La Mariscal',
    'San Carlos',
    'Mena del Hierro',
    'El Condado',
    'Cotocollao',
    'Comité del Pueblo',
    'La Bota',
    'Ponceano',
    'Tumbaco',
    'El Inca',
    'La Luz',
    'Norte de Quito',
    'Pomasqui',
];