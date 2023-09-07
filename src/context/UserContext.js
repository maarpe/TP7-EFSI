import { useState } from "react";
import Productos from "../Componentes/Productos";

const CarritoContext = React.createContext();

function InformacionCarrito() {

    const carrito = useContext(CarritoContext);
    return <>{carrito}</>
}

function Header() {

    return <InformacionCarrito />;

}

function App() {

    const [carritoCargado, setCarritoCargado] = useState('');


    return (

        <CarritoContext.Provider value={carritoCargado}>
            <Header/>
        </CarritoContext.Provider>
    )
}

export default App;