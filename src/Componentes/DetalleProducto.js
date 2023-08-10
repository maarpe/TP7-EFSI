import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./DetalleProducto.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProducto(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
<div className="product-detail">
  <h2>Detalle del producto</h2>
  <div className="product-info">
    <h5 className="product-title">{producto.title}</h5>
    <p className="product-description">{producto.description}</p>
  </div>
  <img src={producto.images[0]} className="product-image" alt={producto.title}/>
</div>
  );
};

export default ProductoDetalle;
