import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyOrders from "./pages/MyOrders";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route
  path="/payment-success" element={<PaymentSuccess />}
/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}