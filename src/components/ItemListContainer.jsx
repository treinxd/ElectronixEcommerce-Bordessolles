import React, { useEffect, useState } from 'react'
import ItemList from './itemList';
import { infoProductos } from '../data/dataProductos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState('Productos')
  const categoria = useParams().categoria

  useEffect(() => {
    infoProductos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase()))
          setTitulo(categoria)
        } else {
          setProductos(res);
          setTitulo('Productos');
        }
      })
  },[categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
}

export default ItemListContainer