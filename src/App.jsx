import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Padre } from "./components/Padre";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Envios a todo Chile"} />
      <Padre />
    </>
  );
}

export default App;
