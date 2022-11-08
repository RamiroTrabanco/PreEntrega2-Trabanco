import prods from '../utils/prods'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import customFetch from '../utils/customFetch'
import { useParams } from 'react-router-dom'

function ItemListContainer () {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
    if (idCategory == undefined) {
        customFetch(2000, prods)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    } 
    
    else {
        customFetch(2000, prods.filter (item => item.category == idCategory))
            .then(result => setDatos(result))
            .catch(err => console.log(err))}
    }
    , [idCategory])

    return (
        <>
            <ItemList items={datos} />
        </>
    )
    

}


export default ItemListContainer