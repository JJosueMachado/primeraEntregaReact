export const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {props.listaOriginalProductos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
