# Project Features

The Drone E-Commerce platform offers a comprehensive set of features tailored for both customers and administrators.

## User Features
- **Dynamic Product Presentations**: Highly interactive product pages (`/dynamic/combinator/:id`) featuring animations and detailed system breakdowns (Imaging System, Flight System, etc.).
- **Product Categories**: Clear categorization of products into "Camera Drones" and "Handheld" devices.
- **Interactive Quiz**: A multi-step quiz to guide users in selecting the drone that best fits their needs.
- **Authentication**: Secure user registration and login functionality.
- **Shopping Cart**: Real-time cart management, allowing users to add, review, and manage items before purchase.
- **Payment Integration**: Seamless checkout process with Razorpay integration.
- **Private Routes**: Secure areas of the application (like the checkout process) that require authentication.

## Admin Features
- **Admin Dashboard**: A dedicated interface for store management.
- **Product Management**: Tools to add, edit, or remove products directly from the frontend (`/admin/add/products`).
- **Secure Admin Access**: Separate authentication routes for administrators (`/admin/auth`).

## Technical Features
- **Responsive Design**: Optimized for various screen sizes, ensuring a consistent experience on desktop and mobile.
- **State Management**: Efficient data handling using Zustand and Context APIs.
- **Fast Navigation**: Client-side routing with React Router eliminates full page reloads.
