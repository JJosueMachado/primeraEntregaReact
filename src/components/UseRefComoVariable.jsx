import { useState, useRef } from "react";

//! Creamos una variable persistente que no volverá a representar el componente cuando cambie de valor.

export const UseRefComoVariable = () => {
  const [_, actualizadorContador] = useState(false);

  const referenciaContador = useRef(0);

  const aumentadorReferencia = () => {
    referenciaContador.current++;
    console.log("referencia del contador: " + referenciaContador.current);
  };

  return (
    <>
      <h2>Ejemplo useRef como variable</h2>
      <button onClick={() => actualizadorContador((prev) => !prev)}>
        Actualizo el estado por lo cual se actualiza el contador en pantalla.
      </button>
      <button onClick={aumentadorReferencia}>
        Actualizo el valor de la referencia pero sólo en consola hasta que
        actualice el estado.
      </button>
      <strong>
        <h3> Valor actual de la referencia {referenciaContador.current}</h3>
      </strong>
    </>
  );
};
