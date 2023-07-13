import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import { useState, useEffect } from 'react';
import Foto from '../foto.jpg';

function Home() {
    const [nombreProducto, setNombreProducto] = useState('');
    const [productos, setProductos] = useState([]);
    const [randomProductos, setRandomProductos] = useState({});

    /*const traerProductos = (url) => {
        axios.get(url)
            .then(res => {
                const productosUl = document.getElementById("productos");
                const textoIngresado = document.getElementById("textoIngresado")
                productosUl.innerHTML = "";

                res.data.products.forEach(element => {
                    const unLi = document.createElement("li");

                    unLi.innerHTML = `<b> ${element.title} </b> <a href="#" data-toggle="modal" data-target="#exampleModal" onclick="traerInformacion(${element.id})">Ver Detalle </a>`;

                    productosUl.appendChild(unLi); //agrega un valor al final de una lista
                });

                //document.getElementById("buscar").onclick = () => traerProductos("https://dummyjson.com/products/search?q=" + textoIngresado.value);

                console.log(res);
            });
    }

    traerProductos("https://dummyjson.com/products");
    */
    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
          .then((response) => {
            const productosResponse = response.data.data;
            setProductos(productosResponse);
    
            const randomProductos = productosResponse[Math.floor(Math.random() * productosResponse.length)];
            setRandomProductos(randomProductos);
          });
      }, []);
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Foto}
                    alt="New York"
                />
                <Carousel.Caption>
                    <h3>NombreProducto</h3>
                    <p>Desc</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

 


    /*const traerInformacion = (id) => {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        console.log(id)
        axios.get("https://dummyjson.com/products/" + id)
            .then(res => {
                const tituloModal = document.getElementById("tituloProdModal");
                const textoInfo = document.getElementById("modalInfo");
                tituloModal.innerHTML = res.data.title;
                textoInfo.innerHTML = `<b> ${res.data.brand} </b><p> ${res.data.category} </p> <p> ${res.data.description} </p>`;
                console.log(res);
                myModal.show();
            });
    }
*/
}

export default Home;