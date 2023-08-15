import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./DetalleProducto.css";
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';

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
        <button className="detail-button2" >Agregar al carrito</button>
      </Card>

    </div>
  );
};

export default ProductoDetalle;
