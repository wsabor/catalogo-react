function CartaoAluno({ nome, curso, cidade }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
      <p>Cidade: {cidade}</p>
    </div>
  );
}

export default CartaoAluno;