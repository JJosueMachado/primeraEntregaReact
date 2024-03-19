import { useState } from "react";

import { Table } from "./Table";

export const listaOriginalProductos = [
  { nombre: "Azucar", precio: 10, id: 1 },
  { nombre: "Agua", precio: 20, id: 2 },
  { nombre: "Aceite", precio: 30, id: 3 },
];

function State() {
  //nota:declarar los hooks lo mas arriba del componente.
  //!    state    setter    argument (es el valor del estado en 1er render)
  const [count, setCount] = useState(0);
  const [showTable, setShowTable] = useState(true);

  const handleButtonClose = () => setShowTable(false);
  const handleButtonOpen = () => setShowTable(true);

  return (
    <div className="container">
      <span>COUNT: {count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Agregar
      </button>
      <br></br>
      <span> VALUE: {JSON.stringify(showTable)}</span>
      <br />
      <button onClick={handleButtonClose}>Ocultar tabla </button>
      <button onClick={handleButtonOpen}>Mostrar tabla </button>
      <main>
        {showTable && <Table listaOriginalProductos={listaOriginalProductos} />}
      </main>
    </div>
  );
}

export default State;
