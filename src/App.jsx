import React from 'react'
import { CSSReset } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Routes/AllRoutes';
import UserContextProvider from './Contexts/UserContextProvider.jsx';

// Main App component that wraps the application with essential providers
function App() {
  return (
    <>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        {/* CSSReset ensures consistent default styles across browsers */}
        <CSSReset />
        {/* UserContextProvider provides user authentication state globally */}
        <UserContextProvider>
          <AllRoutes />
        </UserContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
