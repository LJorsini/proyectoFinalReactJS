import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ssd from '../img/ssd.jpg';


function contenedor () {
    return (
        <div className="contenedorProducto">
            <div className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ssd} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>
            </div>

        </div>
    );

};

export default contenedor; 