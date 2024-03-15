import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { father } from "./components/father";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Envios a todo Chile"} />
      <father />
    </>
  );
}

export default App;
