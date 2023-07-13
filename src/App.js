import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import Detalle from "./Componentes/DetalleProducto";
import Productos from "./Componentes/Productos";
import Contacto from "./Componentes/Contacto";

const App = () => {
  return (
    <>
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Productos" element={<Productos />}></Route>
          <Route path="/DetalleProducto" element={<Detalle />}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;