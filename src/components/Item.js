import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; 


const  Products = ({articulo}) => {
   
     return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{articulo.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        {articulo.descripcion}
                    </Card.Text>
                    <Card.Text>
                       $ {articulo.precio}
                    </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </>
     );  
     
};

export default Products;