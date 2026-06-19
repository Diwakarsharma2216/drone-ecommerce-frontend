# Development of a Drone E-Commerce Website Using MERN Stack Technology

## Academic Project Submission
**BCA 2026 Project**

## Live Demo
[Drone E-Commerce Platform](https://dji-air.vercel.app/)

## Overview
This project is a fully functional Drone E-Commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform provides a comprehensive user experience for browsing, selecting, and purchasing drones, including complete email authentication and payment processing.

![Homepage](./App_Assets//home2.png)

## Features
- **User Authentication**: Secure email authentication with JWT.
- **Payment Processing**: Seamless integration with Razorpay for handling payments.
- **Dynamic Product Presentations**: Interactive UI to explore drone features.
- **Product Management**: Admin interface to add, edit, and delete products.
- **Cloud Storage**: Images are stored using Cloudinary.
- **Email Notifications**: Automated emails using Nodemailer and SMTP transport.
- **Responsive Design**: Mobile-friendly design using Chakra UI.

## Technologies Used
| Frontend  | Backend    | Other Tools               |
| --------- | ---------- | ------------------------- |
| React.js  | Node.js    | Cloudinary                |
| Chakra UI | Express.js | Razorpay                  |
| Axios     | MongoDB    | Netlify                   |
| Vite      | CORS       | Render                    |
| Zustand   | JWT        | EJS                       |
|           | bcrypt     | Multer                    |
|           |            | Nodemailer SMTP transport |

## Functionality Overview

### Homepage
The homepage displays featured products and promotional banners, providing users with a quick overview of the latest drone technologies.

![Homepage](./App_Assets/home.png)

### Product Listing
Users can browse through a wide range of drone products, categorized into Camera Drones and Handheld devices.

![Product Listing](./App_Assets/product_list.png)

### Product Details
Detailed product information, including advanced specifications, dynamic feature tours, and pricing.

![Product Details](./App_Assets/product_details.png)

### User Authentication
Secure login and registration system with JWT-based authentication.

**Registration:**
![Registration](./App_Assets/signup.png)

**Login:**
![Login](./App_Assets/login.png)

### Payment Processing
Seamless integration with Razorpay for a secure and smooth checkout experience.

![Payment Processing](./App_Assets/razorpayy.png)

### Admin Dashboard
Admin users have exclusive access to manage the platform's inventory, including adding, editing, and deleting products.

**Admin Auth:**
![Admin Auth](./App_Assets/admin_auth.png)

**Admin Panel:**
![Admin Panel](./App_Assets/admin_panel.png)

## Installation & Setup
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd drone-ecommerce-frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Deployment
The project frontend is configured for deployment on Netlify, while the backend API is hosted on Render.

## License
This project is developed for academic purposes as part of the BCA curriculum.
