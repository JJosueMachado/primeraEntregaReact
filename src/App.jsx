import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Padre } from "./components/Padre";
import { PropsCallback } from "./components/Padre";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import State from "./components/State";
import { ContenedorPadre } from "./components/ContenedorPadre";
import { UseRefComoVariable } from "./components/UseRefComoVariable";
import { UseRefDom } from "./components/UseRefDom";
import { Efecto } from "./components/UseEffect";
function App() {
  const show = true;
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Envios a todo Chile"} />
      <Padre />
      <PropsCallback />
      <State />
      <ContenedorPadre>
        <h1>Ejemplo children 1</h1>
        <p>lorem ejemplo children 1</p>
      </ContenedorPadre>
      <ContenedorPadre children={<h3>ejemplo children 2</h3>} />
      {show && <ContenedorPadre />}
      <div className="container">
        <UseRefComoVariable />
        <hr />
        <UseRefDom />
        <Efecto />
      </div>
    </>
  );
}

export default App;
