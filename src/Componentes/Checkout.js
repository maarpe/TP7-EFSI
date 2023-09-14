import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Checkout.css";



function Checkout() {

    return (

        <Form className='formCheckout'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mail</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dirección de entrega</Form.Label>
                <Form.Control type="text" placeholder="Dirección" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Código postal</Form.Label>
                <Form.Control type="text" placeholder="Código postal" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Guardar información" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Confirmar
            </Button>
        </Form>
    );


}

export default Checkout;