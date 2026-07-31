# 🛒 ShopHub — E-Commerce Store

A full-stack e-commerce web application built with modern technologies. ShopHub provides a complete online shopping experience with product browsing, shopping cart functionality, user authentication, order management, and an admin dashboard.

The goal of this project was to build a real-world e-commerce platform while practicing frontend development, backend API design, database management, authentication, and full-stack application architecture.

---

## ✨ Features

### 🛍️ Product Management

* Browse available products
* Product listing and details
* Product categories
* Dynamic product data from backend API
* Admin product management

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Update cart items
* Real-time cart count
* Checkout-ready cart system

### 🔐 Authentication

* User registration and login
* Secure password hashing
* JWT-based authentication
* Protected user routes

### 📦 Order System

* Place orders
* View user orders
* Track order status
* Admin order management
* Update order status

### 👨‍💼 Admin Dashboard

* Manage products
* View customer orders
* Update order status
* Control store data

### 🎨 Frontend Experience

* Responsive design
* Modern e-commerce UI
* Dark mode support
* Type-safe React development
* Reusable components

---

## 🛠️ Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios

## Backend

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* bcrypt
* REST API

---

## 📂 Project Structure

```bash id="k7t8qv"
ShopHub/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── types/
│   │   └── main.tsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── database/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database

ShopHub uses PostgreSQL for storing application data.

Main tables:

### Users

* User accounts
* Authentication information
* User roles (Customer/Admin)

### Products

* Product information
* Price
* Categories
* Stock details

### Orders

* Customer orders
* Order status
* Purchase details

---

## 🔌 API Features

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Products

```
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

```
POST /api/orders
GET  /api/orders/my-orders
GET  /api/orders/admin
PUT  /api/orders/admin/:id
```

---

## 🚀 Installation & Setup

### Clone Repository

```bash id="1a3v8y"
git clone <repository-url>

cd ShopHub
```

---

## Frontend Setup

```bash id="q6bq8m"
cd client

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Backend Setup

```bash id="f3l2wq"
cd server

npm install

npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

```env id="j8n2vz"
PORT=5000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=ecommerce
DB_PASSWORD=your_password
DB_PORT=5432

JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

<img width="1440" height="966" alt="screencapture-localhost-5173-2026-08-01-03_12_55" src="https://github.com/user-attachments/assets/574112bb-1778-4e05-8732-61c37b55c4dc" />

<img width="1440" height="773" alt="screencapture-localhost-5173-register-2026-08-01-03_13_37" src="https://github.com/user-attachments/assets/0afb88d3-c973-40ba-bcf5-00efa4056d6e" />

<img width="1440" height="773" alt="screencapture-localhost-5173-login-2026-08-01-03_14_09" src="https://github.com/user-attachments/assets/d4d813cd-4f12-4ec8-adc9-255e10cfb312" />

<img width="1440" height="1743" alt="image" src="https://github.com/user-attachments/assets/9714eada-4f1a-4bc7-a00c-39f8aaf9de36" />


<img width="1440" height="773" alt="screencapture-localhost-5173-products-1-2026-08-01-03_15_37" src="https://github.com/user-attachments/assets/5379f5de-06a7-4640-bd0b-d3b9702be24b" />

<img width="1440" height="965" alt="screencapture-localhost-5173-orders-2026-08-01-03_15_22" src="https://github.com/user-attachments/assets/35eb4ad6-8e66-4f02-a619-7241b1ef4a80" />



<img width="1440" height="891" alt="image" src="https://github.com/user-attachments/assets/6405131a-783b-42a2-9213-a98d267b74ba" />

<img width="1440" height="1108" alt="image" src="https://github.com/user-attachments/assets/55cd24ee-e33f-4fab-bbb9-4f18863d4a99" />

<img width="1440" height="882" alt="image" src="https://github.com/user-attachments/assets/be930dbd-7954-4f4c-8020-21e33f803f0c" />


<img width="1440" height="985" alt="screencapture-localhost-5173-cart-2026-08-01-03_17_36" src="https://github.com/user-attachments/assets/f58bf03c-8574-4243-974a-119b309f646f" />

<img width="1440" height="997" alt="screencapture-localhost-5173-payment-2026-08-01-03_28_30" src="https://github.com/user-attachments/assets/6dff8380-26d1-4ac1-a07d-3db3daa0fe22" />


## 📚 Learning Outcomes

Through this project, I practiced:

* Building a complete full-stack application
* Creating REST APIs with Express
* Working with PostgreSQL databases
* Implementing authentication and authorization
* Building reusable React components
* Managing application state
* Creating admin functionality
* Connecting frontend and backend systems

---

## 🔮 Future Improvements

* Online payment integration
* Product reviews and ratings
* Wishlist functionality
* Image upload system
* Advanced product filtering
* Cloud deployment
* Email notifications

---

## 👨‍💻 Author

**Khushnood Ahmad**

Full-Stack Developer

---

⭐ If you like this project, consider giving it a star!

