import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Padre } from "./components/Padre";
import { PropsCallback } from "./components/Padre";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import State from "./components/State";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Envios a todo Chile"} />
      <Padre />
      <PropsCallback />
      <State />
    </>
  );
}

export default App;
