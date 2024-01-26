import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Itemlist from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {

    const db = getFirestore()
  
    const itemsCollection = collection(db, "productosElectronicos")
  
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
      setLoading(false)
    })
  
  }, [])

  const filtrado = productos.filter((producto) => producto.categoria === idCategoria);

  if (loading === true) {
    return <Loader />
  } else {
    return (
    <div>
      {idCategoria ? <Itemlist productos={filtrado} /> : <Itemlist productos={productos} />}
    </div>
    );
  };
}

export default ItemListContainer;
