import { useState } from "react";

const styles = {
  margin: "20px auto",
  background: "blue",
  height: "20dvh",
  color: "white",
  padding: "1rem",
};

export const ContenedorPadre = (props) => {
  const [count, setCount] = useState(0);
  console.log("Vemos que props se recibe en cada llamada del componente", {
    props,
  });

  //! Si damos clic al botón add corroboraremos que cada invocación crea un componente totalmente diferente.
  //Usando props.children dejaremos claro que se manifieste el children en app.jsx
  return (
    <div style={styles}>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}> Add </button>
      {props.children}
    </div>
  );
};
