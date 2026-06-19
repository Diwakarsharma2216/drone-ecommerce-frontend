import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Entry point for the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  // ChakraProvider is used to enable Chakra UI components globally
  <ChakraProvider>
    <App />
  </ChakraProvider>
)