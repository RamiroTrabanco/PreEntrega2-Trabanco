import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import '../styles/ItemCount.css'

let initial = 1

function ItemCount({stock}) {
        const [count, setCount] = useState()

        useEffect(() => {
                setCount(initial)
            }
        ,[])
        
        const add = () => {
            if (count < stock) {
            setCount (count + 1)
            }
        }

        const subtract = () => {
            if (count > initial) {
                setCount (count - 1)
            }}

        return (
            <>
            <Container className="containerItemCount">
                <Button className="btnItemCount" variant="outline-primary" onClick={add}>+</Button>
                <p className="cantItem">{count}</p>
                <Button className="btnItemCount" variant="outline-secondary" onClick={subtract}>-</Button>
            </Container>
            <Container className="containerItemCount">
                <Button className="btnAddToCart">Agregar al carrito</Button>
            </Container>
            </>
        )
}

export default ItemCount