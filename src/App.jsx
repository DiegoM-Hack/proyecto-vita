import {Datos} from './componentes/datos-personales'

import Estudios from './componentes/estudios'

import { Herramientas } from './componentes/herramientas'

import {Deportes} from './componentes/deportes'

import FormularioRegistro from './componentes/formulario'

import { useState } from 'react'

import './App.css'



function Appa() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Datos />
      <Estudios />
      
      <Herramientas/>
      
      <Deportes />

      <FormularioRegistro />

    </>
  )
}

export default Appa
