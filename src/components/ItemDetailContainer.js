import ItemDetail from './ItemDetail';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function detalleContenedor () {
    
    return (
        <div className="detailContenedor">
            <Container fluid>
                <Row>
                    <Col><ItemDetail/></Col>
                </Row>
            </Container>
        </div>
    );

};

export function getItems () {
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve(detalleContenedor), 2000);
    });
};


export default getItems;