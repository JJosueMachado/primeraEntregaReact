import { Hijo } from "./Hijo";
import { Hijo2 } from "./Hijo";
import { ChildCallback } from "./Hijo";

export const Padre = () => {
  return (
    <>
      <Hijo nombre="macarena" edad={25} sexo="femenino" />
      <Hijo2 pokemon="bulbasour" tipo="planta" />
    </>
  );
};
//PROPS CALL BACK:
export const PropsCallback = () => {
  const handleClick = () => alert("hello callback");

  return <ChildCallback property={handleClick} />;
};
//HOOKS (Hay que importalos de react):
//useState:
