# Project Architecture

## Overview
The Drone E-Commerce application is built using the MERN stack (MongoDB, Express, React, Node.js). The frontend focuses on delivering a dynamic, highly interactive user interface tailored for drone products.

## Frontend Architecture

### Technologies
- **React.js**: Core UI library.
- **Vite**: Build tool and development server, chosen for its speed.
- **Chakra UI**: Component library providing accessible and highly customizable UI elements, utilized for styling and layout alongside standard CSS.
- **React Router**: Client-side routing library, implemented to manage navigation between public pages, user dashboards, and admin panels.
- **Zustand & React Context**: Used for state management. Zustand is primarily for UI and cart state, while Context handles authentication.
- **Framer Motion**: Enables smooth micro-animations and complex transitions (especially for dynamic product views).
- **Axios**: Handles HTTP requests to the backend API.

### Directory Structure (`src/`)
- `Admin/`: Components and views exclusive to the admin dashboard (e.g., product management).
- `Alerts/`: Reusable alert and notification components.
- `Components/`: Shared, reusable UI components used across multiple pages.
- `Contexts/`: React Context providers (`AuthContextProvider`, `UserContextProvider`) managing global state.
- `Dynamic-product-pages/`: Specialized components creating immersive, scroll-driven product presentations.
- `Pages/`: High-level route components (e.g., Home, BuyPage, Login, Signup, Cart).
- `ProductComponents/`: Specific components detailing drone features (e.g., `Flight_system`, `Imaging_system`).
- `QuizComponents/`: Interactive quiz elements to help users choose a drone.
- `Routes/`: Contains routing logic (`AllRoutes.jsx`) and protection wrappers (`PrivateRoute.jsx`).
- `Zustand/`: Store definitions for global state management.

### Data Flow
1. **User Interaction**: Users interact with components (e.g., adding an item to the cart).
2. **State Update**: Zustand or Context is updated locally to reflect the UI change instantly.
3. **API Call**: Axios sends the necessary request to the backend.
4. **Backend Sync**: The backend updates the database and returns a response, which reconciles the frontend state if needed.
