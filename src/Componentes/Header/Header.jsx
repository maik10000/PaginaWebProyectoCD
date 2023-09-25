import { useState } from 'react'
import './estiloHeader.css'
import logoImg from '../../assets/LOGO-UNIVERSITARIO-HORIZONTAL.png'
import {styled,keyframes} from 'styled-components';


export function Header(){
 
  const[ sliceMenu, setSliceMenu] = useState('none');
  const[ display, setDisplay] = useState(false);

  const clickMenu = () =>{


   console.log(deslizar_der.id)
    
    if(sliceMenu?.id === 'sc-keyframes-jvGxEv'|| sliceMenu === 'none'){
     
      setDisplay(true)
      setSliceMenu(deslizar_iz)
    }else{
      setSliceMenu(deslizar_der)
      

    }
      
  }

    return(
        <header className="cabecera">
          <div className='logo-inst'>
              <img src={logoImg} alt="" />
          </div>
        <div className="button-menu" onClick={clickMenu}>
          <div className='icon-menu'>
          </div>
        </div>
         
        <Mover  $animacion  = {sliceMenu} $display  = {display}>
              <ul>
                <li><a href="" >Menu</a></li>
                <li><a href="" >Contactanos</a></li>
                <li><a href="" >Nosotros</a></li>
              </ul>
        </Mover>
           
    </header>
    )
}

const deslizar_iz= keyframes`
from{
  display:flex;
  left:100%;
}
to {
    left:0;
  }
`
const deslizar_der  = keyframes`
from{
  left:0;
}
to {
   display:none;
    left:100%;
  }
`


const Mover = styled.nav`
  display :${(props)  => props.$display?'flex':'none'} ;
  position: relative;
  color:#fff;
  left: 100%;
  z-index: 1000;
  animation:${(props)=> props. $animacion} 0.5s forwards;

`