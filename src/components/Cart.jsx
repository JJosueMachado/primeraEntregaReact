import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Trash3 } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import swal from "sweetalert";

import { CartContext } from "../contexts/CartContext";

const initialValues = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  email2: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);

  const { items, clear, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    // Validación de campos vacios
    for (let key in values) {
      if (values[key] === "") {
        swal({
          title: "Error",
          text: `El campo ${key} no puede estar vacío. Por favor, llénalo antes de continuar.`,
          icon: "error",
          button: "OK",
        });
        return;
      }
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email) || !emailRegex.test(values.email2)) {
      swal({
        title: "Error",
        text: "Por favor, introduce un correo electrónico válido.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    // Validación de coincidencia de correos electrónicos
    if (values.email !== values.email2) {
      swal({
        title: "Error",
        text: "Los correos electrónicos no coinciden. Por favor, corrija esto antes de continuar.",
        icon: "error",
        button: "OK",
      });
      return;
    }

    // Validación de solo números en el campo del teléfono
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(values.phone)) {
      swal({
        title: "Error",
        text: "Por favor, introduce un número de teléfono válido.",
        icon: "error",
        button: "OK",
      });
      return;
    }
    const order = {
      buyer: values,
      items: items,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          swal({
            title: `Su orden de compra es ${id} `,
            text: "Su compra ha sido completada exitosamente",
            icon: "success",
            button: false,
            timer: 3500,
          });
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };
  const handleClear = () => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este carrito de compras!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        clear();
        swal("Tu carrito de compras ha sido eliminado!", {
          icon: "success",
        });
      }
    });
  };

  const handleRemove = (id) => removeItem(id);
  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Header>
          <h3>Productos seleccionados: </h3>
        </Card.Header>
        <Card.Body>
          <Card.Text className="d-flex">
            {items.map((i) => {
              return (
                <>
                  <ul className="cartList " key={i.title}>
                    <li>
                      <img src={i.image} alt={i.title} height="100" />
                    </li>
                    <li>{i.title}</li>
                    <li>Cant: {i.quantity}</li>
                    <li> precio {i.price} CPL</li>
                    <li onClick={() => handleRemove(i.id)}>X</li>
                    <li>
                      <button
                        onClick={() => handleRemove(i.id)}
                        className="buttonRemoveItem"
                      >
                        Eliminar
                      </button>
                    </li>
                  </ul>
                </>
              );
            })}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className=" mt-3 mb-4">
            <h2>Total: {total()} CLP</h2>
          </div>
          <Button onClick={handleClear} className="buttonClearCart">
            <Trash3 size={20} color=" black " />
          </Button>
        </Card.Footer>
      </Card>
      {items?.length > 0 && (
        <form className=" mt-4">
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Apellido</label>
          <input
            type="text"
            value={values.apellido}
            name="lastname"
            onChange={handleChange}
          />
          <label>Telefono </label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <label>Repite el Email</label>
          <input
            type="email"
            value={values.email2}
            name="email2"
            onChange={handleChange}
          />

          <Button
            type="button"
            onClick={handleSubmit}
            className="addButton m-2"
          >
            Terminar mi compra
          </Button>
        </form>
      )}
    </Container>
  );
};
