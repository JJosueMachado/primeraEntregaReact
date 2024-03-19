export const Hijo = (props) => {
  return (
    <>
      <h1>{props.nombre}</h1>
      <h2>{props.edad}</h2>
      <h3>{props.sexo}</h3>
    </>
  );
};

export const Hijo2 = ({ pokemon, tipo }) => {
  return (
    <>
      <h1>{pokemon}</h1>
      <h2>{tipo}</h2>
    </>
  );
};

export const ChildCallback = ({ property }) => {
  return <button onClick={property}>Presiona aquí</button>;
};
