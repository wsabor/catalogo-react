import React from 'react'
import './App.css'
import Cabecalho from './Cabecalho'
import CartaoAluno from './CartaoAluno'

function App() {

  return (
    <div>
      <Cabecalho titulo="Catálogo de Alunos com React.js" />
      <CartaoAluno nome="João" curso="Agronomia" cidade="Rinópolis" />
    </div>
  )
}

export default App
