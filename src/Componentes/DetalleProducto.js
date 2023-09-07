import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./DetalleProducto.css";
import Carousel from 'react-bootstrap/Carousel';
import { Card, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

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

  const fetchProductoInfo = (id) => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => {
            console.log(response.data);
            navigate(`/Carrito/producto/${id}`);
        })
        .catch(error => {
            console.error(error);
        });
        
};


  return (
    <div className="product-detail">
      <Carousel className="carrousel">
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "250px" }}
            src={producto.images[0]}
            alt={`Slide 1`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "250px" }}
            src={producto.images[1]}
            alt={`Slide 2`}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "250px" }}
            src={producto.images[2]}
            alt={`Slide 3`}
          />
        </Carousel.Item>
      </Carousel>
      <Card className='cardPrecio'>
        <div className="product-info">
          <h1 className="product-title">{producto.title}</h1>
          <h3 className="product-description">{producto.description}</h3>
          <h3 className="product-price">${producto.price}</h3>
        </div>
        <button className="detail-button" >Comprar Ahora</button>
        <button className="detail-button2" onClick={() => fetchProductoInfo(producto.id)}>
          Agregar al Carrito
        </button>
      </Card>

    </div>
  );
};

export default ProductoDetalle;
