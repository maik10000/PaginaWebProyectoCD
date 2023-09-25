import './styleHome.css';
import { FromIA } from '../Componentes/FormIA/FormIA';
import {styled,keyframes} from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';


export function Home(){
    const[scroll, setScroll] = useState(0);
    useEffect(()=>{

        window.addEventListener('scroll',(e)=>{
            
            setScroll(window.scrollY);
        })
        
    },[])
   
    return(
        <div className="Home">
            <div className='portada' >
                <CompAnimationDiv2 className='titulo'>
                    <h1>Encuentra  la casa de tus sueños.</h1>
                    <p>Bienvenido a nuestra plataforma revolucionaria de cotización de viviendas impulsada por inteligencia artificial. Sabemos que tu hogar es una parte fundamental de tu vida y, por lo tanto, calcular su valor de manera precisa es esencial.</p>
                </CompAnimationDiv2>
            </div>
            <div className='cont-info'>
                    <div className="cont-info2">
                        <div className="text-que">
                            <div className="cont-center">
                            <h2>¿Que hacemos?</h2>
                            <p>
                                El <b>Instituto Tecnologico Cordillera</b> con el uso de la inteligencia artificial le da la facilidad a las 
                                personas que deseen comprar una casa, dandoles la mejor opcion para su bolsillo.
                            </p>
                            </div>
                        </div>
                        <div className="cont-img">
                               <div className="c-img"></div>
                               <div className="c-img"></div>
                               <div className="c-img"></div>
                               <div className="c-img"></div>
                        </div>
                    </div>
            </div>
        
          {scroll<1100?undefined:
          <CompAnimationDiv className='contain-form'>
                    <FromIA/>
            </CompAnimationDiv>}
           
        </div>
    )
}
const showUp = keyframes`
   from{
    opacity: 0;
     top:-200px
   }
   to{
    top:0;
   }
`
const showUpRigth = keyframes`
   from{
    opacity: 0;
     left:-200px;
   }
   to{
    left:10%;
   }
`
const CompAnimationDiv = styled.div`
    position:relative;
    animation:${showUp} 2s forwards;
`
const CompAnimationDiv2 = styled.div`
    position:absolute;
    top: 10%;
   animation: ${showUpRigth} 2s forwards;
`
