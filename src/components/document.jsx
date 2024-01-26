import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const document = () => {

    const [product, setProduct] = useState ([])

    useEffect (() => {
        const db = getFirestore()
        const oneItem = doc(db, "pc", "RmKQ6FQIR2fi4MvyrzXj")
    })
  return (
    <div>document</div>
  )
}

export default document