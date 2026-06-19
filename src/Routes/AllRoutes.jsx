import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute"
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import BuyPage from '../Pages/BuyPage'
import CameraDrone from '../BuysComponents.jsx/CameraDrone'
import AuthContextProvider from '../Contexts/AuthContextProvider'
import HandHeld from '../BuysComponents.jsx/HandHeld'
import Quiz from '../Pages/Quiz.jsx'
import Page2 from '../QuizComponents/Page2.jsx'
import Page3 from '../QuizComponents/Page3.jsx'
import Page4 from '../QuizComponents/Page4.jsx'
import AdminSide from '../Admin/AdminSide.jsx'
import Clint from '../Admin/Clint.jsx'
import Product_Info from '../Pages/Product_Info.jsx'
import Add_to_cart from '../Pages/Add_to_cart.jsx'
import Cart from '../Pages/Cart.jsx'
import Flight_system from '../ProductComponents/Flight_system.jsx'
import InitialVideo from '../ProductComponents/InitialVideo.jsx'
import Imaging_system from '../ProductComponents/Imaging_system.jsx'
import IndustrialDesign from '../ProductComponents/IndustrialDesign.jsx'
import Video_transmission from '../ProductComponents/Video_transmission.jsx'
import Operational_system from '../ProductComponents/Operational_system.jsx'
import Combinator from '../Dynamic-product-pages/Combinator.jsx'
import Auth from "../Admin/Auth.jsx"
import AdminNav from "../Admin/AdminNav.jsx" // Note: Currently unused in routes but kept for potential layout use
import Success_Payment from '../Pages/Success_Payment.jsx'

// AllRoutes defines the routing structure of the application
function AllRoutes() {
    return (
        <>
            <AuthContextProvider>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Quiz & Information Routes */}
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />

                    {/* Private User Routes */}
                    <Route path="/dynamic/combinator/INSPIRE3" element={
                        <PrivateRoute>
                            <Product />
                        </PrivateRoute>
                    } />
                    <Route path="/buy" element={
                        <PrivateRoute>
                            <BuyPage />
                        </PrivateRoute>
                    } />
                    <Route path="/buy/camera_drones" element={
                        <PrivateRoute>
                            <CameraDrone />
                        </PrivateRoute>
                    } />

                    {/* Product & Cart Routes */}
                    <Route path="/buy/:id" element={<Product_Info />} />
                    <Route path="/buy/handheld" element={<HandHeld />} />
                    <Route path="/add_to_cart/:id" element={<Add_to_cart />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/success/payment" element={<Success_Payment />} />

                    {/* Dynamic Component Routes */}
                    <Route path="/dynamic/combinator/:id" element={<Combinator />} />
                    <Route path="/flight" element={<Flight_system />} />
                    <Route path="/init" element={<InitialVideo />} />
                    <Route path="/image" element={<Imaging_system />} />
                    <Route path="/design" element={<IndustrialDesign />} />
                    <Route path="/video" element={<Video_transmission />} />
                    <Route path="/opt" element={<Operational_system />} />

                    {/* Admin Routes */}
                    <Route path="clint" element={<Clint />} />
                    <Route path="/admin/auth" element={<Auth />} />
                    <Route path="/admin/add/products" element={
                        <PrivateRoute>
                            <AdminSide />
                        </PrivateRoute>
                    } />
                </Routes>
            </AuthContextProvider>
        </>
    )
}

export default AllRoutes
