import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Text, Heading, FormControl, FormLabel, Input, FormHelperText, Button, Spinner } from '@chakra-ui/react';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [IdCompra, setIdCompra] = useState('');
    const [loading, setLoading] = useState(false); 
    const { cart } = useContext(CartContext);
    const db = getFirestore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            cliente: { nombre, email },
            items: cart,
        };

        const ordersCollection = collection(db, 'orden');

        try {
            setLoading(true); 
            const docRef = await addDoc(ordersCollection, order);
            setIdCompra(docRef.id);
            alert('Gracias por tu compra. Tu ID de compra es: ' + docRef.id);
        } catch (error) {
            console.error('Error al agregar la orden:', error);
            alert('Hubo un error al procesar tu pedido. Por favor, inténtalo nuevamente.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <Heading noOfLines={1}>Complete el siguiente formulario.</Heading>
            <FormControl isRequired>
                <form action="" onSubmit={handleSubmit}>
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Button type="submit" colorScheme="teal" size="md" disabled={loading}>
                        {loading ? <Spinner size="sm" /> : 'Enviar pedido'}
                    </Button>
                </form>
            </FormControl>
            <Text>El ID de tu compra es: {IdCompra}</Text>
        </div>
    );
};

export default Form;
