import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
<<<<<<< HEAD
import { WishlistProvider } from "./context/WishlistContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";
=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
<<<<<<< HEAD
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <App />
                <ToastContainer />
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
=======
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
    </ThemeProvider>
  </StrictMode>
);