# 🛒 ShopHub — Full Stack E-Commerce Platform

ShopHub is a modern full-stack e-commerce application built with **React, TypeScript, Node.js, Express, and PostgreSQL**.

The project has evolved from a basic online store into a complete production-style shopping platform featuring authentication, admin management, wishlist, reviews, order tracking, persistent carts, and a structured API architecture.

---

## 🚀 Live Demo

Frontend: https://shop-hub-sand-six.vercel.app/

Backend API: VITE_API_URL=https://shophub-production-5d04.up.railway.app

---

# ✨ Features

## 🛍️ Customer Features

### Product Browsing

* Dynamic product loading from backend API
* Product cards with:

  * Product images
  * Pricing
  * Stock status
  * Average rating display
  * Review count
* Category filtering
* Price sorting
* Responsive product layout

---

## 🛒 Advanced Shopping Cart

* Add products to cart
* Remove individual items
* Update quantities
* Stock-aware quantity limits
* Persistent cart using localStorage
* Automatic cart total calculation
* Cart survives page refresh

---

# ❤️ Wishlist System

Users can:

* Add products to wishlist
* Remove products from wishlist
* View saved products
* Toggle wishlist directly from product cards
* Access a dedicated wishlist page

Backend support:

* Wishlist database table
* Protected wishlist API routes
* User-specific wishlist items

---

# ⭐ Product Reviews & Ratings

Customers can:

* Submit product reviews
* Rate products with stars
* View existing reviews
* See average ratings directly on products

Features:

* One review per user per product
* Review ownership validation
* Automatic rating aggregation
* Review count displayed on products

---

# 🔐 Authentication System

* User registration
* Login/logout
* JWT authentication
* Secure password hashing with bcrypt
* Protected routes
* Role-based authorization

User roles:

* Customer
* Admin

---

# 👨‍💼 Admin Dashboard

Admin features:

* Protected admin routes
* Product management
* Update products
* Delete products
* Manage inventory
* View customer statistics
* Order management

Security improvements:

* Admin-only customer count endpoint
* Protected admin API requests
* Hidden admin navigation for non-admin users

---

# 📦 Order Management

Customers can:

* Place orders
* View order history
* Track order progress

Order system includes:

* Order creation
* Order items tracking
* Status timeline UI

Order statuses:

* Pending
* Processing
* Shipped
* Delivered

---

# 🔔 User Experience Improvements

Added custom toast notification system:

Replaced browser alerts with:

* Success notifications
* Error messages
* Authentication feedback
* Cart actions feedback

---

# 🏗️ Backend Improvements

## New Database Tables

Added:

### Wishlist

```sql
wishlist_items
```

Stores user saved products.

### Reviews

```sql
reviews
```

Stores:

* User reviews
* Ratings
* Product feedback

---

## API Architecture

Created centralized REST API structure.

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Products

```
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

### Wishlist

```
GET /api/wishlist
POST /api/wishlist
DELETE /api/wishlist/:id
```

### Reviews

```
GET /api/products/:id/reviews
POST /api/products/:id/reviews
DELETE /api/products/:id/reviews
```

### Orders

```
POST /api/orders
GET /api/orders
```

---

# 🛠️ Code Quality Improvements

## Frontend Architecture

Implemented:

* Centralized API client
* Reusable services
* Strong TypeScript types
* Cleaner component structure

Created services:

```
services/
├── api.ts
├── authService.ts
├── productService.ts
├── orderService.ts
├── wishlistService.ts
└── reviewService.ts
```

---

## TypeScript Improvements

Before:

* Loose `any` types
* Build skipped type checking

Now:

* Proper interfaces
* Type-safe API responses
* Full TypeScript validation
* Production build checks

Build command:

```
tsc -b && vite build
```

---

# 🐛 Major Bugs Fixed

## Admin Product Updates

Fixed broken product editing caused by missing backend update controller.

---

## Order Data Bug

Fixed incorrect product ID mapping during checkout.

Previously:

* Orders saved without correct product references

Now:

* Order history correctly tracks purchased products

---

## Order Status Bug

Fixed case mismatch:

Before:

```
pending
```

Backend expected:

```
Pending
```

Now:

* Status updates work correctly

---

## Security Fix

Protected:

```
/api/auth/users/count
```

Previously:

* Public endpoint

Now:

* Admin authentication required

---

## CSS Improvements

Fixed missing CSS variables:

Added:

* --white
* --radius
* --transition

Improved:

* Border radius
* Animations
* Component consistency

---

# 💻 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* CSS
* React Router
* Axios
* Context API

## Backend

* Node.js
* Express.js
* PostgreSQL
* JWT
* bcrypt
* REST API

## Database

* PostgreSQL
* Neon PostgreSQL

## Deployment

Frontend:

* Vercel

Backend:

* Railway

---

# 📂 Project Structure

```
ShopHub

├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   └── types
│   └── .env
│
└── server
    ├── controllers
    ├── routes
    ├── middleware
    ├── models
    └── database
```
📸 Screenshots
<img width="1440" height="966" alt="screencapture-localhost-5173-2026-08-01-03_12_55" src="https://github.com/user-attachments/assets/574112bb-1778-4e05-8732-61c37b55c4dc" />

<img width="1440" height="773" alt="screencapture-localhost-5173-register-2026-08-01-03_13_37" src="https://github.com/user-attachments/assets/0afb88d3-c973-40ba-bcf5-00efa4056d6e" />

<img width="1440" height="773" alt="screencapture-localhost-5173-login-2026-08-01-03_14_09" src="https://github.com/user-attachments/assets/d4d813cd-4f12-4ec8-adc9-255e10cfb312" />

<img width="1440" height="1743" alt="image" src="https://github.com/user-attachments/assets/9714eada-4f1a-4bc7-a00c-39f8aaf9de36" />


<img width="1366" height="1161" alt="image" src="https://github.com/user-attachments/assets/78fa503d-09ae-464e-aeff-2634876f9a07" />


<img width="1366" height="847" alt="image" src="https://github.com/user-attachments/assets/1b2070e8-5d46-432f-a090-20f8e719d71e" />


<img width="1440" height="965" alt="screencapture-localhost-5173-orders-2026-08-01-03_15_22" src="https://github.com/user-attachments/assets/35eb4ad6-8e66-4f02-a619-7241b1ef4a80" />



<img width="1440" height="891" alt="image" src="https://github.com/user-attachments/assets/6405131a-783b-42a2-9213-a98d267b74ba" />

<img width="1440" height="1108" alt="image" src="https://github.com/user-attachments/assets/55cd24ee-e33f-4fab-bbb9-4f18863d4a99" />

<img width="1440" height="882" alt="image" src="https://github.com/user-attachments/assets/be930dbd-7954-4f4c-8020-21e33f803f0c" />


<img width="1440" height="985" alt="screencapture-localhost-5173-cart-2026-08-01-03_17_36" src="https://github.com/user-attachments/assets/f58bf03c-8574-4243-974a-119b309f646f" />

<img width="1440" height="997" alt="screencapture-localhost-5173-payment-2026-08-01-03_28_30" src="https://github.com/user-attachments/assets/6dff8380-26d1-4ac1-a07d-3db3daa0fe22" />

---

# 🔮 Future Improvements

* Payment gateway integration
* Product image upload
* Advanced analytics dashboard
* Discount coupons
* Email notifications
* Inventory management system
* Multi-vendor marketplace support

---

# 👨‍💻 Author

**Khushnood Ahmad**

Full Stack Developer

GitHub:
https://github.com/khushnoodahmad890-cloud

---

⭐ Built as a real-world full-stack e-commerce application.


