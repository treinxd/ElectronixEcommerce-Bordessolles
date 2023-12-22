import React, { useEffect, useState } from 'react'
import {conseguirItemId} from '../data/dataProductos'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const id = useParams().id

  useEffect(() => {
    conseguirItemId(Number(id))
          .then((res) => {
              setItem(res)
          })
  }, [id])

  return (
      <div>
          {item && <ItemDetail item={item} />
          }
      </div>
  )
}

export default ItemDetailContainer