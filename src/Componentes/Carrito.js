import { Table } from "react-bootstrap";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarritoContext from "../context/CarritoContext";

function Carrito() {
  const { listCarrito, setListCarrito } = useContext(CarritoContext);

  console.log("Carrito", listCarrito);

  const eliminarProducto = (productoId) => {
    setListCarrito(
      listCarrito.filter((producto) => producto.id !== productoId)
    ); //filtra la lista para que aparezcan todos los productos que tengan un id distinto al que se le pasa
  };

  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {listCarrito.map((producto) => (
            <tr key={producto.id}>
              <td>
                {producto.images[0] && (
                  <img
                    style={{ maxWidth: "100%", maxHeight: "150px" }}
                    src={producto.images[0]}
                    alt={producto.title}
                  />
                )}
              </td>
              <td>{producto.title}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
              <td>
                <button className="btn btn-success">Comprar</button>
              </td>
              <td>U$D{producto.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: "center" }}><Link className="btn btn-primary" to={"/Checkout"}>Finalizar compra</Link></div>
    </>
  );
}

export default Carrito;
