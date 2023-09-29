import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import DetalleProducto from "./Componentes/DetalleProducto";
import Productos from "./Componentes/Productos";
import Contacto from "./Componentes/Contacto";
import Carrito from "./Componentes/Carrito";
import CarritoContext from "./context/CarritoContext";
import { useEffect, useState } from "react";
import Checkout from "./Componentes/Checkout";

const App = () => {
  const [listCarrito, setListCarrito] = useState([]);
  
  useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(listCarrito));
  },[listCarrito]);

  useEffect(() => {
    let cart = localStorage.getItem("carrito");

    if (cart) {
      setListCarrito(JSON.parse(cart));
    }
  },[]);

  return (
    <>
      <BrowserRouter>
        <Layout/>
        <CarritoContext.Provider value={{listCarrito, setListCarrito}}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Productos" element={<Productos />}></Route>
            <Route path="/Producto/:id" element={<DetalleProducto />}></Route>
            <Route path="/Contacto" element={<Contacto/>}></Route>
            <Route path="/Carrito" element={<Carrito/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
          </Routes>
        </CarritoContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;