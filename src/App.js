import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import DetalleProducto from "./Componentes/DetalleProducto";
import Productos from "./Componentes/Productos";
import Contacto from "./Componentes/Contacto";
import Carrito from "./Componentes/Carrito";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Productos" element={<Productos />}></Route>
          <Route path="/Producto/:id" element={<DetalleProducto />}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
          <Route path="/Carrito" element={<Carrito/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;