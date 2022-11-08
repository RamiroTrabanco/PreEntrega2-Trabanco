import prods from '../utils/prods'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import customFetch from '../utils/customFetch'
import { useParams } from "react-router-dom"

function ItemListContainer () {
    const [dato, setDato] = useState({})
    const { idItem } = useParams()

    useEffect(() => 
    {customFetch(2000, prods.find(item => item.id == idItem))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemDetail item={dato} />
        </>
    )
    

}


export default ItemListContainer