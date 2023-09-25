import { useEffect, useState } from 'react'
import { Container, Button, Table, Col, Row, FloatingLabel, Form, Modal } from 'react-bootstrap'
import './App.css'
import { Header } from './Componentes/Header/Header'
import { Footer } from './Componentes/Footer/Footer'
import { Home } from './Pages/Home'

function App(){

  
  return(
  <div className='App'>
    <Header/>
   <Home/>
   <Footer/>
  </div>)
}

export default App

