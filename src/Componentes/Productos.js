import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Productos.css";
import { useNavigate } from 'react-router-dom';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [buscador, setBuscador] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = () => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProductos(response.data.products);
            })
            .catch(error => {
                console.error(error);
            });
            console.log(productos);
    };

    const fetchProductoInfo = (id) => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                console.log(response.data);
                navigate(`/producto/${id}`);
            })
            .catch(error => {
                console.error(error);
            });
            
    };

    const handleSearch = () => {
        axios.get(`https://dummyjson.com/products/search?q=${buscador}`)
            .then(response => {
                setProductos(response.data.products);
            })
            .catch(error => {
                console.error(error);
            });
    };
    
    return (
        <div className="container">
            <h1 className="title">Productos</h1>
            <div className="search-container">
                <input
                    type="text" className="search-input" value={buscador} onChange={e => setBuscador(e.target.value)} placeholder="Buscar"
                />
                <button className="search-button" onClick={handleSearch}>Buscar</button>
            </div>
            <ul className="product-list">
                {productos.map(producto => (
                    <li key={producto.id} className="product-item">
                        <b className="product-title">{producto.title}</b>
                        <img src={producto.images[0]} className="product-image"></img>
                        <p className="product-rating">Rating: {producto.rating}</p>
                        <button className="detail-button" onClick={() => fetchProductoInfo(producto.id)}>
                            Ver Detalle
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Productos;
