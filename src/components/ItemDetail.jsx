import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'

function ItemDetail({item}) {
    return (
        <Container>
            <Card className="cardDetail">
                <Card.Header as="h2">{item.title}</Card.Header>
                <Card.Img className="imgStyle" variant="top" src={item.img} />
                <Card.Text className="description">{item.description}</Card.Text>
                <Card.Text className="price" as="h4">$ {item.price}</Card.Text>
                <Card.Text className="stock">{item.stock} unidades disponibles</Card.Text>
                <ItemCount stock={item.stock} />
            </Card>
        </Container>
    )

}

export default ItemDetail