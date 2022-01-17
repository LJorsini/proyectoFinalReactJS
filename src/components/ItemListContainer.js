import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; 




function items () {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Producto</Card.Subtitle>
                    <Card.Text>
                        Teclado Inalambrico
                    </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Producto</Card.Subtitle>
                    <Card.Text>
                        Mouse inalambrico
                    </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Producto 3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Producto</Card.Subtitle>
                    <Card.Text>
                        Disco Duro
                    </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default items;