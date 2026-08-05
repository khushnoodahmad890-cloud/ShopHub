import { useState } from "react";
import { CreditCard, ShieldCheck, Lock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { createOrder } from "../services/orderService";
import { ApiError } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shipping = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  async function handlePayment() {
    if (!cardNumber || !expiry || !cvv || !cardName) {
      showToast("Please fill in all payment details.", "error");
      return;
    }

    if (cart.length === 0) {
      showToast("Your cart is empty.", "error");
      return;
    }

    setLoading(true);

    try {
      await createOrder(
        total,
        cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          price: Number(item.price),
        }))
      );

      clearCart();

      navigate("/payment-success");
    } catch (error) {
      const message =
        error instanceof ApiError
          ? error.message
          : "Payment failed. Please try again.";

      showToast(message, "error");

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="payment-page">
      <h1 className="page-title">Checkout</h1>

      <div className="container payment-container">
        {/* Payment Form */}

        <div className="payment-form">
          <div className="payment-header">
            <h2>Payment Details</h2>

            <CreditCard size={28} />
          </div>

          <div className="payment-methods">
            <button type="button" className="method active">
              💳 Credit Card
            </button>

            <button type="button" className="method">
              🏦 Bank
            </button>

            <button type="button" className="method">
              📱 Wallet
            </button>
          </div>

          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <div className="payment-row">
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />

          <button
            className="btn pay-btn"
            onClick={handlePayment}
            disabled={loading}
          >
            <Lock size={18} />
            {loading ? "Processing..." : "Pay Securely"}
          </button>

          <div className="payment-security">
            <div>
              <ShieldCheck size={18} />

              <span>256-bit SSL Encryption</span>
            </div>

            <div>
              <ShieldCheck size={18} />

              <span>Money Back Guarantee</span>
            </div>

            <div>
              <ShieldCheck size={18} />

              <span>Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}

        <div className="payment-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <div>
                <strong>{item.title}</strong>

                <br />

                <small>Qty: {item.quantity}</small>
              </div>

              <span>
                ${(Number(item.price) * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>

            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <span>FREE</span>
          </div>

          <div className="summary-row">
            <span>Tax (10%)</span>

            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
