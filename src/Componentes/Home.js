import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import { useState, useEffect } from 'react';
import { resolvePath } from 'react-router-dom';

function Home() {
    const [productos, setProductos] = useState([]);
    const [randomProducto, setRandomProductos] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=')
            .then((response) => {
                const productosResponse = response.data.products;
                setProductos(productosResponse);
            });
    }, []);

    if (productos.length == 0) return (<></>);

    function ProductoAleatorio() {
        let rand = Math.floor(Math.random() * productos.length);
        return productos[rand];
    }

    let productosRandom = [ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio(), ProductoAleatorio()];

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={productosRandom[0].images[0]}
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>{productosRandom[0].title}</h3>
                        <p>{productosRandom[0].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={productosRandom[1].images[0]}
                        alt="Second"
                        height="400px"
                    />

                    <Carousel.Caption>
                        <h3>{productosRandom[1].title}</h3>
                        <p>{productosRandom[1].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-200"
                        src={productosRandom[2].images[0]}
                        alt="Third"
                        height="400px"
                    />

                    <Carousel.Caption>
                        <h3>{productosRandom[2].title}</h3>
                        <p>{productosRandom[2].description}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <br/>
            <br/>
            {productos.slice(0,5).map((producto) => (
                <Card>
                    <div className="card row" style={{width: "18rem"}}>
                        <img src={producto.images} className="card-img-top">
                        </img>
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">{producto.description}</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                        
                    </div>
                </Card>
            ))}
        </>
    );


}

export default Home;