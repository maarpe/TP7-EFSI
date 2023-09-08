import { Table } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InformacionCarrito from "../context/CarritoContext";

function Carrito() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProducto(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <img
              style={{ width: "100%", height: "250px" }}
              src={producto.images[0]}
              alt={`${producto.title}`}
            />
          </th>
          <th>{producto.title}</th>
          <th>Eliminar</th>
          <th>Comprar</th>
          <th>${producto.price}</th>
        </tr>
      </thead>
    </Table>
  );
}

export default Carrito;
