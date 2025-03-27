import { useState } from "react";

function BotaoContador() {
  const [clique, setClique] = useState(0);

  return (
    <div>
      <p>Botão clicado {clique} vezes.</p>
      <button onClick={() => setClique(clique + 1)}>
        Não clique aqui!!!
      </button>
    </div>
  );
}

export default BotaoContador;
