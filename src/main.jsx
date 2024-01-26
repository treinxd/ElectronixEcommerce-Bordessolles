import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqqHYuUUM4b_xgeh2s6bGX0Plgx_aI-o0",
  authDomain: "electronixecommerce.firebaseapp.com",
  projectId: "electronixecommerce",
  storageBucket: "electronixecommerce.appspot.com",
  messagingSenderId: "577118950793",
  appId: "1:577118950793:web:db6f107ca22011b45cbd58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App/>
  </ChakraProvider>
)
