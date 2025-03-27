import React from "react";
import Cabecalho from "./Cabecalho";
import CartaoAluno from "./CartaoAluno";
import BotaoContador from "./BotaoContador";
import "./App.css";

function App() {
  return (
    <div>
      <Cabecalho titulo="Catálogo de Alunos com React.js" />
      <div className="cards">
        <CartaoAluno nome="João" curso="Agronomia" cidade="Rinópolis" />
        <CartaoAluno nome="Maria" curso="Zootecnia" cidade="Presidente Prudente" />
        <CartaoAluno nome="Ana" curso="Medicina" cidade="São Paulo" />
        <CartaoAluno nome="Pedro" curso="Direito" cidade="Bauru" />
        <CartaoAluno nome="Mariana" curso="Psicologia" cidade="Marília" />
        <CartaoAluno nome="José" curso="Engenharia" cidade="Bauru" />
      </div>
      <BotaoContador />
    </div>
  );
}

export default App;
